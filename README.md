# UI Plugin example (Custom button component)

This plugin shows how you can build UI plugin using a Custom Component. A simple Button is given as example.

## Installation

To install the plugin:

```javascript
tns plugin add nativescript-ui-plugin-custom
```

## Usage 

You need to add `xmlns:ui="nativescript-ui-plugin-custom"` to your page tag, and then simply use `<ui:MyButton text="MyButton1" />` in order to add the widget to your page.

## API

Describe your plugin methods and properties here. See [nativescript-feedback](https://github.com/EddyVerbruggen/nativescript-feedback) for example.
    
| Property | Default | Description |
| --- | --- | --- |
| text | "" | used to set the text of the button |
| tap | "" | sets the callback that is called when the button is tapped |
    
## License

Apache License Version 2.0, January 2004