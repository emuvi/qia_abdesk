import { QinLabel } from "qin_case";
import { Module } from "./module";

export class ModuleAPP extends Module {
    public constructor() {
        super("APP", new QinLabel("TESTE"));
    }
}
