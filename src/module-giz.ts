import { QinLabel } from "qin_case";
import { Module } from "./module";

export class ModuleGIZ extends Module {
    public constructor() {
        super("GIZ", new QinLabel("TESTE"));
    }
}
