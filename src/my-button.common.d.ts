import { MyButton as ButtonDefinition } from "./my-button";
import { Style, Property, CssProperty } from "tns-core-modules/ui/core/view";
import { TextBase } from "tns-core-modules/ui/text-base";
export declare const textProperty: Property<MyButtonBase, string>;
export declare const myOpacityProperty: CssProperty<Style, number>;
export declare abstract class MyButtonBase extends TextBase implements ButtonDefinition {
    static tapEvent: string;
    text: string;
    constructor();
    myOpacity: number;
}
declare module "tns-core-modules/ui/styling/style" {
    interface Style {
        myOpacity: number;
    }
}
