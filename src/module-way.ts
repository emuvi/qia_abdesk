import { QinLabel } from "qin_case";
import { Module } from "./module";

export class ModuleWAY extends Module {
    public constructor() {
        super();
        new QinLabel("WAY").install(this);
    }
}
