export default async function ({ addon }) {
  addon.tab.addBlock("// %s", {
    args: ["content"],
    displayName: "// %s",
    callback: function(){},
  });
}
