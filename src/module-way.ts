import { QinLabel } from "qin_case";
import { Module } from "./module";

export class ModuleWAY extends Module {
    public constructor() {
        super("WAY", new QinLabel("TESTE"));
    }
}
