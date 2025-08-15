import { QinButton, QinColumn, QinLabel, QinLine, QinString, QinTabs, QinText, QinTitled } from "qin_case";
import { Module } from "./module";
import { Registry, TableHead } from "../../qin_soul/types/qin-type";

export class ModuleREG extends Module {
    private _bodyTabs = new QinTabs();
    private _regTop = new RegTop();
    private _regSee = new RegSee();
    private _regCan = new RegCan();
    private _regNew = new RegNew();
    private _regAsk = new RegAsk();
    private _regSet = new RegSet();
    private _regDel = new RegDel();
    private _regAux = new RegAux();

    public constructor() {
        super();
        this._bodyTabs.styleAsWhole();
        this._bodyTabs.addTab({title: "Top", viewer: this._regTop});
        this._bodyTabs.addTab({title: "See", viewer: this._regSee});
        this._bodyTabs.addTab({title: "Can", viewer: this._regCan});
        this._bodyTabs.addTab({title: "New", viewer: this._regNew});
        this._bodyTabs.addTab({title: "Ask", viewer: this._regAsk});
        this._bodyTabs.addTab({title: "Set", viewer: this._regSet});
        this._bodyTabs.addTab({title: "Del", viewer: this._regDel});
        this._bodyTabs.addTab({title: "Aux", viewer: this._regAux});
        this._bodyTabs.install(this);
    }
}

class RegTop extends QinColumn {
    private _actionLine = new QinLine();
    private _baseString = new QinString();
    private _baseTitled = new QinTitled({label: new QinLabel("Base"), items: [this._baseString]});
    private _runButton = new QinButton({label: new QinLabel("Run")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._runButton.addActionMain(_ => this.actRun());
        this._baseTitled.install(this._actionLine);
        this._runButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actRun() {
        const base = this._baseString.value;
        this.qinpel.talk.reg.top(base)
                .then((heads) => this._resultText.value = JSON.stringify(heads, null, 2))
                .catch((err) => this.qinpel.frame.statusError(err, "{qia_abdesk}(ErrCode-000007)"))
    }
}

class RegSee extends QinColumn {
    private _actionLine = new QinLine();
    private _baseString = new QinString();
    private _baseTitled = new QinTitled({label: new QinLabel("Base"), items: [this._baseString]});
    private _tableHeadString = new QinString();
    private _tableHeadTitled = new QinTitled({label: new QinLabel("Table Head"), items: [this._tableHeadString]});
    private _runButton = new QinButton({label: new QinLabel("Run")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._runButton.addActionMain(_ => this.actRun());
        this._baseTitled.install(this._actionLine);
        this._tableHeadTitled.install(this._actionLine);
        this._runButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actRun() {
        const base = this._baseString.value;
        const tableHead = JSON.parse(this._tableHeadString.value) as TableHead;
        const registry = this.qinpel.talk.reg.aux.newRegistry(base, tableHead);
        this.qinpel.talk.reg.see(registry)
                .then((table) => this._resultText.value = JSON.stringify(table, null, 2))
                .catch((err) => this.qinpel.frame.statusError(err, "{qia_abdesk}(ErrCode-000008)"))
    }
}

class RegCan extends QinColumn {
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._resultText.install(this);
    }
}

class RegNew extends QinColumn {
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._resultText.install(this);
    }
}

class RegAsk extends QinColumn {
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._resultText.install(this);
    }
}

class RegSet extends QinColumn {
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._resultText.install(this);
    }
}

class RegDel extends QinColumn {
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._resultText.install(this);
    }
}

class RegAux extends QinColumn {
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._resultText.install(this);
    }
}
