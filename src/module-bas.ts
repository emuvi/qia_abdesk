import { QinLabel } from "qin_case";
import { Module } from "./module";

export class ModuleBAS extends Module {
    public constructor() {
        super("BAS", new QinLabel("TESTE"));
    }
}
