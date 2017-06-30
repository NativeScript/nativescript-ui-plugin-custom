var UiPluginCustom = require("nativescript-ui-plugin-custom").UiPluginCustom;
var uiPluginCustom = new UiPluginCustom();

describe("greet function", function() {
    it("exists", function() {
        expect(uiPluginCustom.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(uiPluginCustom.greet()).toEqual("Hello, NS");
    });
});