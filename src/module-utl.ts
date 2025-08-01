import { QinLabel } from "qin_case";
import { Module } from "./module";

export class ModuleUTL extends Module {
    public constructor() {
        super("UTL", new QinLabel("TESTE"));
    }
}
