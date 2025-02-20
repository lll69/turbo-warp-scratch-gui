import { removeAlpha, multiply, alphaBlend, recolorFilter } from "../../libraries/common/cs/text-color.esm.js";

const extensionsCategory = {
  id: null,
  settingId: "Pen-color",
  colorId: "pen",
};
const twCategory = {
  id: null,
  settingId: "tw-color",
  colorId: "tw"
};
const saCategory = {
  settingId: "sa-color",
  colorId: "sa",
};
const categories = [
  {
    id: "motion",
    settingId: "motion-color",
    colorId: "motion",
  },
  {
    id: "looks",
    settingId: "looks-color",
    colorId: "looks",
  },
  {
    id: "sound",
    settingId: "sounds-color",
    colorId: "sounds",
  },
  {
    id: "events",
    settingId: "events-color",
    colorId: "event",
  },
  {
    id: "control",
    settingId: "control-color",
    colorId: "control",
  },
  {
    id: "sensing",
    settingId: "sensing-color",
    colorId: "sensing",
  },
  {
    id: "operators",
    settingId: "operators-color",
    colorId: "operators",
  },
  {
    id: "variables",
    settingId: "data-color",
    colorId: "data",
  },
  {
    id: "lists",
    settingId: "data-lists-color",
    colorId: "data_lists",
  },
  {
    id: "myBlocks",
    settingId: "custom-color",
    colorId: "more",
  },
  extensionsCategory,
  twCategory,
  saCategory,
];

export default async function ({ addon, console }) {
  const Blockly = await addon.tab.traps.getBlockly();

  const originalColors = JSON.parse(JSON.stringify(Blockly.Colours));
  originalColors.sa = {
    primary: "#29beb8",
    secondary: "#3aa8a4",
    tertiary: "#3aa8a4",
  };
  originalColors.tw = {
    primary: "#ff4c4c",
    secondary: "#e64444",
    tertiary: "#e64444"
  };

  let textMode = addon.settings.get("text");
  const isColoredTextMode = () => !addon.self.disabled && (textMode === "colorOnWhite" || textMode === "colorOnBlack");

  const primaryColor = (category) => {
    if (addon.self.disabled) return originalColors[category.colorId].primary;
    // Colored on white: can't use #ffffff because of editor-dark-mode dropdown div handling
    if (textMode === "colorOnWhite") return "#feffff";
    if (textMode === "colorOnBlack") return "#282828";
    return addon.settings.get(category.settingId);
  };
  const secondaryColor = (category) => {
    if (addon.self.disabled) return originalColors[category.colorId].secondary;
    if (isColoredTextMode())
      return alphaBlend(primaryColor(category), multiply(addon.settings.get(category.settingId), { a: 0.15 }));
    return multiply(addon.settings.get(category.settingId), { r: 0.9, g: 0.9, b: 0.9 });
  };
  const tertiaryColor = (category) => {
    if (addon.self.disabled) return originalColors[category.colorId].tertiary;
    if (isColoredTextMode()) return addon.settings.get(category.settingId);
    return multiply(addon.settings.get(category.settingId), { r: 0.8, g: 0.8, b: 0.8 });
  };
  const fieldBackground = (category) => {
    // Background color for open dropdowns and Boolean inputs
    // The argument can be a block, field, or category
    if (category instanceof Blockly.Block || category instanceof Blockly.Field) {
      const block = category instanceof Blockly.Block ? category : category.sourceBlock_;
      if (isColoredTextMode()) {
        let primary;
        if (block.isShadow() && block.getParent()) primary = block.getParent().getColour();
        else primary = block.getColour();
        return alphaBlend(primary, multiply(block.getColourTertiary(), { a: 0.25 }));
      }
      return block.getColourTertiary();
    }
    if (isColoredTextMode())
      return alphaBlend(primaryColor(category), multiply(addon.settings.get(category.settingId), { a: 0.25 }));
    return tertiaryColor(category);
  };
  const textColor = (field) => {
    if (addon.self.disabled || textMode === "white") return "#ffffff";
    if (textMode === "black") return "#575e75";
    if (field) return field.sourceBlock_.getColourTertiary();
    return "#000000";
  };
  const uncoloredTextColor = () => {
    if (addon.self.disabled) return "#ffffff";
    return {
      white: "#ffffff",
      black: "#575e75",
      colorOnWhite: "#575e75",
      colorOnBlack: "#ffffff",
    }[textMode];
  };
  const otherColor = (settingId, colorId) => {
    if (addon.self.disabled) return originalColors[colorId];
    return addon.settings.get(settingId);
  };

  // Blockly doesn't handle colors with transparency
  const oldBlockMakeColor = Blockly.Block.prototype.makeColour_;
  Blockly.Block.prototype.makeColour_ = function (color) {
    if (typeof color === "string" && /^#(?:[0-9A-Za-z]{2}){3,4}$/.test(color)) return color;
    return oldBlockMakeColor(color);
  };

  const oldCategoryCreateDom = Blockly.Toolbox.Category.prototype.createDom;
  Blockly.Toolbox.Category.prototype.createDom = function () {
    // Category bubbles
    oldCategoryCreateDom.call(this);
    if (this.iconURI_) return;
    const category = categories.find((item) => item.id === this.id_);
    if (!category) return;
    this.bubble_.style.backgroundColor = isColoredTextMode() ? fieldBackground(category) : primaryColor(category);
    this.bubble_.style.borderColor = tertiaryColor(category);
  };

  const oldBlockSetColour = Blockly.Block.prototype.setColour;
  Blockly.Block.prototype.setColour = function (colour, colourSecondary, colourTertiary) {
    // Extension blocks (color is set by VM)
    if (colour.toLowerCase() === originalColors.pen.primary.toLowerCase()) {
      colour = primaryColor(extensionsCategory);
      colourSecondary = secondaryColor(extensionsCategory);
      colourTertiary = tertiaryColor(extensionsCategory);
    }
    // TurboWarp Blocks
    if (this.type.startsWith("tw_")) {
      colour = primaryColor(twCategory);
      colourSecondary = secondaryColor(twCategory);
      colourTertiary = tertiaryColor(twCategory);
    }
    return oldBlockSetColour.call(this, colour, colourSecondary, colourTertiary);
  };

  const oldBlockUpdateColour = Blockly.BlockSvg.prototype.updateColour;
  Blockly.BlockSvg.prototype.updateColour = function () {
    oldBlockUpdateColour.call(this);
    // Boolean inputs
    for (const input of this.inputList) {
      if (input.outlinePath) {
        input.outlinePath.setAttribute("fill", fieldBackground(this));
      }
    }
  };

  const oldBlockShowContextMenu = Blockly.BlockSvg.prototype.showContextMenu_;
  Blockly.BlockSvg.prototype.showContextMenu_ = function (e) {
    Blockly.WidgetDiv.DIV.style.setProperty("--editorTheme3-hoveredItem", fieldBackground(this));
    return oldBlockShowContextMenu.call(this, e);
  };

  const oldFieldLabelInit = Blockly.FieldLabel.prototype.init;
  Blockly.FieldLabel.prototype.init = function () {
    // Labels
    oldFieldLabelInit.call(this);
    this.textElement_.style.fill = textColor(this);
  };

  const oldFieldTextInputInit = Blockly.FieldTextInput.prototype.init;
  Blockly.FieldTextInput.prototype.init = function () {
    // Text inputs
    oldFieldTextInputInit.call(this);
    if (this.sourceBlock_.isShadow()) return;
    // Labels in custom block editor
    this.box_.setAttribute("fill", fieldBackground(this));
  };

  const oldFieldDropdownInit = Blockly.FieldDropdown.prototype.init;
  Blockly.FieldDropdown.prototype.init = function () {
    // Dropdowns
    oldFieldDropdownInit.call(this);
    this.textElement_.style.setProperty("fill", textColor(this), "important");
    if (textColor(this) !== "#ffffff") this.arrow_.style.filter = recolorFilter(textColor(this));
  };

  const oldFieldDropdownShowEditor = Blockly.FieldDropdown.prototype.showEditor_;
  Blockly.FieldDropdown.prototype.showEditor_ = function () {
    oldFieldDropdownShowEditor.call(this);

    // Open dropdowns
    if (!this.disableColourChange_) {
      if (this.sourceBlock_.isShadow()) {
        this.sourceBlock_.setShadowColour(fieldBackground(this));
      } else if (this.box_) {
        this.box_.setAttribute("fill", fieldBackground(this));
      }
    }

    // Dropdown menus
    let primaryColor;
    if (this.sourceBlock_.isShadow() && this.sourceBlock_.getParent())
      primaryColor = this.sourceBlock_.getParent().getColour();
    else primaryColor = this.sourceBlock_.getColour();
    Blockly.DropDownDiv.DIV_.style.backgroundColor = removeAlpha(primaryColor);
    if (isColoredTextMode()) {
      Blockly.DropDownDiv.getContentDiv().style.setProperty("--editorTheme3-hoveredItem", fieldBackground(this));
    } else {
      Blockly.DropDownDiv.getContentDiv().style.removeProperty("--editorTheme3-hoveredItem");
    }
  };

  const oldFieldVariableInit = Blockly.FieldVariable.prototype.init;
  Blockly.FieldVariable.prototype.init = function () {
    // Variable dropdowns
    oldFieldVariableInit.call(this);
    this.textElement_.style.setProperty("fill", textColor(this), "important");
  };

  const oldFieldVariableGetterInit = Blockly.FieldVariableGetter.prototype.init;
  Blockly.FieldVariableGetter.prototype.init = function () {
    // Variable reporters
    oldFieldVariableGetterInit.call(this);
    this.textElement_.style.fill = textColor(this);
  };

  const oldFieldMatrixUpdateMatrix = Blockly.FieldMatrix.prototype.updateMatrix_;
  Blockly.FieldMatrix.prototype.updateMatrix_ = function () {
    // Matrix inputs
    oldFieldMatrixUpdateMatrix.call(this);
    for (let i = 0; i < this.matrix_.length; i++) {
      if (this.matrix_[i] !== "0") {
        this.fillMatrixNode_(this.ledButtons_, i, uncoloredTextColor());
        this.fillMatrixNode_(this.ledThumbNodes_, i, uncoloredTextColor());
      }
    }
  };

  const oldFieldMatrixCreateButton = Blockly.FieldMatrix.prototype.createButton_;
  Blockly.FieldMatrix.prototype.createButton_ = function (fill) {
    if (fill === "#FFFFFF") fill = uncoloredTextColor();
    return oldFieldMatrixCreateButton.call(this, fill);
  };

  const updateColors = () => {
    const vm = addon.tab.traps.vm;

    textMode = addon.settings.get("text");

    for (const category of categories) {
      // CSS variables are used for compatibility with other addons
      const prefix = `--editorTheme3-${category.colorId}`;
      for (const [name, value] of Object.entries({
        primary: primaryColor(category),
        secondary: secondaryColor(category),
        tertiary: tertiaryColor(category),
        field: fieldBackground(category),
      })) {
        document.documentElement.style.setProperty(`${prefix}-${name}`, value);
      }

      // Update Blockly.Colours
      if (!Blockly.Colours[category.colorId]) continue;
      Blockly.Colours[category.colorId].primary = primaryColor(category);
      Blockly.Colours[category.colorId].secondary = secondaryColor(category);
      Blockly.Colours[category.colorId].tertiary = tertiaryColor(category);
    }
    addon.tab.setCustomBlockColor({
      color: primaryColor(saCategory),
      secondaryColor: secondaryColor(saCategory),
      tertiaryColor: tertiaryColor(saCategory),
    });
    Blockly.Colours.textField = otherColor("input-color", "textField");
    if (uncoloredTextColor() === "#575e75") Blockly.Colours.fieldShadow = "rgba(0, 0, 0, 0.15)";
    else Blockly.Colours.fieldShadow = originalColors.fieldShadow;

    const workspace = Blockly.getMainWorkspace();
    const flyout = workspace.getFlyout();
    const toolbox = workspace.getToolbox();

    // Reload toolbox
    if (vm.editingTarget) {
      vm.emitWorkspaceUpdate();
    }
    const flyoutWorkspace = flyout.getWorkspace();
    Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.workspaceToDom(flyoutWorkspace), flyoutWorkspace);
    toolbox.populate_(workspace.options.languageTree);
    workspace.toolboxRefreshEnabled_ = true;
  };

  updateColors();
  addon.settings.addEventListener("change", updateColors);
  addon.self.addEventListener("disabled", updateColors);
  addon.self.addEventListener("reenabled", updateColors);
}
