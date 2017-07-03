import { MyButton as ButtonDefinition } from "./my-button";
import { View, Style, Property, CssProperty } from "tns-core-modules/ui/core/view";
export declare const textProperty: Property<MyButtonBase, string>;
export declare const myOpacityProperty: CssProperty<Style, number>;
export declare abstract class MyButtonBase extends View implements ButtonDefinition {
    static tapEvent: string;
    text: string;
    myOpacity: number;
}
declare module "tns-core-modules/ui/styling/style" {
    interface Style {
        myOpacity: number;
    }
}
