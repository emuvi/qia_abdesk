import { QinFileView, QinLabel } from "qin_case";
import { Module } from "./module";

export class ModuleDIR extends Module {
    private _view = new QinFileView();
    public constructor() {
        super();
        this._view.install(this);
    }
}
