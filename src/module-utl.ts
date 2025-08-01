import { QinLabel } from "qin_case";
import { Module } from "./module";

export class ModuleUTL extends Module {
    public constructor() {
        super();
        new QinLabel("UTL").install(this);
    }
}
