import { QinLabel } from "qin_case";
import { Module } from "./module";

export class ModuleDIR extends Module {
    public constructor() {
        super();
        new QinLabel("DIR").install(this);
    }
}
