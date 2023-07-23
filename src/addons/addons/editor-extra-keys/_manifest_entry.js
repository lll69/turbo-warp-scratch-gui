/* generated by pull.js */
const manifest = {
  "editorOnly": true,
  "name": "Extra key options",
  "description": "Adds more keys to the \"key () pressed?\" and \"when () key pressed\" block dropdowns, such as enter, dot, comma, and more. These keys will work even for users who do not have this addon.",
  "tags": [
    "beta"
  ],
  "credits": [
    {
      "name": "Tacodiva",
      "link": "https://scratch.mit.edu/users/Tacodude7729/"
    }
  ],
  "info": [
    {
      "type": "notice",
      "text": "The \"experimental keys\" include equals, slash, semicolon and more. They may not work on all operating systems or keyboard layouts.",
      "id": "experimentalKeysWarn"
    },
    {
      "type": "notice",
      "text": "The \"Shift keys\" include keys which typically require the Shift key and a number key, like hashtag, exclamation mark and more. These keys only work with the \"when () key pressed\" block and do not work on all operating systems or keyboard layouts.",
      "id": "shiftKeysWarn"
    },
    {
      "type": "warning",
      "text": "The \"TurboWarp keys\" will only work in TurboWarp, not in Scratch.",
      "id": "twKeysWarn"
    }
  ],
  "settings": [
    {
      "dynamic": true,
      "name": "Show experimental keys",
      "id": "experimentalKeys",
      "type": "boolean",
      "default": true
    },
    {
      "dynamic": true,
      "name": "Show Shift keys",
      "id": "shiftKeys",
      "type": "boolean",
      "default": true
    },
    {
      "dynamic": true,
      "name": "Show TurboWarp keys",
      "id": "twKeys",
      "type": "boolean",
      "default": false
    }
  ],
  "userscripts": [
    {
      "url": "userscript.js"
    }
  ],
  "dynamicDisable": true,
  "enabledByDefault": true
};
export default manifest;
