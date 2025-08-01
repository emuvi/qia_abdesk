import { QinLabel } from "qin_case";
import { Module } from "./module";

export class ModuleCMD extends Module {
    public constructor() {
        super("CMD", new QinLabel("TESTE"));
    }
}
