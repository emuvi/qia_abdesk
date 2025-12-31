import { QinSplitter } from "qin_case";
import { Module } from "./module";
import { ModuleWAY } from "./module-way";
import { ModuleUTL } from "./module-utl";

export class ModuleTST extends Module {

    private _testSplitter = new QinSplitter();

    private _moduleWAY = new ModuleWAY();
    private _moduleUTL = new ModuleUTL();

    public constructor() {
        super();
        this._testSplitter.setSideA(this._moduleWAY);
        this._testSplitter.setSideB(this._moduleUTL);
        this._testSplitter.styleAsWhole();
        this._testSplitter.install(this);
    }

}