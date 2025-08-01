import { QinLabel } from "qin_case";
import { Module } from "./module";

export class ModuleREG extends Module {
    public constructor() {
        super("REG", new QinLabel("TESTE"));
    }
}
