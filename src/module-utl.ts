import { QinButton, QinColumn, QinLabel, QinLine, QinTabs, QinText } from "qin_case";
import { Module } from "./module";

export class ModuleUTL extends Module {
    private _bodyTabs = new QinTabs();
    private _basicUTL = new BasicUTL();
    
    public constructor() {
        super();
        this._bodyTabs.styleAsWhole();
        this._bodyTabs.addTab({title: "Basic", viewer: this._basicUTL});
        this._bodyTabs.install(this);
    }
}

class BasicUTL extends QinColumn {
    private _actionLine = new QinLine();
    private _pingButton = new QinButton({label: new QinLabel("Ping")});
    private _resultText = new QinText();

    public constructor() {
        super();
        this._resultText.styleAsWhole();
        this._pingButton.addActionMain(_ => this.actPing());
        this._pingButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actPing() {
        this.qinpel.talk.utl
            .ping()
            .then((res) => this._resultText.value = res)
            .catch((err) => this.qinpel.frame.showError(err, "{qia_abdesk}(ErrCode-000014)"))
    }
}