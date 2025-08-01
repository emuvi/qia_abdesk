import { QinLabel } from "qin_case";
import { Module } from "./module";

export class ModuleGIZ extends Module {
    public constructor() {
        super();
        new QinLabel("GIZ").install(this);
    }
}
