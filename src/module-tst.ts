import { QinSplitter } from "qin_case";
import { Module } from "./module";

export class ModuleTST extends Module {

    private _testSplitter = new QinSplitter();

    public constructor() {
        super();
        this._testSplitter.install(this);
    }

}