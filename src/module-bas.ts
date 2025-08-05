import { QinButton, QinColumn, QinLabel, QinLine, QinString, QinTabs, QinText, QinTitled } from "qin_case";
import { Module } from "./module";

export class ModuleBAS extends Module {
    private _bodyColumn = new QinColumn();
    private _actionLine = new QinLine();
    private _listButton = new QinButton({label: new QinLabel("List")});
    private _resultText = new QinText();

    public constructor() {
        super();
        this.styleAsWhole();
        this._bodyColumn.styleAsWhole();
        this._resultText.styleAsWhole();
        this._listButton.addActionMain(_ => this.actList());
        this._listButton.install(this._actionLine);
        this._actionLine.install(this._bodyColumn);
        this._resultText.install(this._bodyColumn);
        this._bodyColumn.install(this);
    }

    private actList() {
        this.qinpel.talk.bas.list()
            .then((res) => this._resultText.value = res.join("\n"))
            .catch((err) => this.qinpel.frame.statusError(err, "{qia_abdesk}(ErrCode-000001)"))
    }
}
