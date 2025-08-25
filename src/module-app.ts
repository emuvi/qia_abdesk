import { QinButton, QinColumn, QinLabel, QinLine, QinChars, QinTabs, QinText, QinTitled } from "qin_case";
import { Module } from "./module";

export class ModuleAPP extends Module {
    private _bodyTabs = new QinTabs();
    private _listAPP = new ListAPP();
    private _manifestAPP = new ManifestAPP();
    private _assetAPP = new AssetAPP();
    
    public constructor() {
        super();
        this._bodyTabs.styleAsWhole();
        this._bodyTabs.addTab({title: "List", viewer: this._listAPP});
        this._bodyTabs.addTab({title: "Manifest", viewer: this._manifestAPP});
        this._bodyTabs.addTab({title: "Asset", viewer: this._assetAPP});
        this._bodyTabs.install(this);
    }
}

class ListAPP extends QinColumn {
    private _actionLine = new QinLine();
    private _listButton = new QinButton({label: new QinLabel("List")});
    private _resultText = new QinText();

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._listButton.addActionMain(_ => this.actList());
        this._listButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actList() {
        this.qinpel.talk.app.list()
            .then((res) => this._resultText.value = res.join("\n"))
            .catch((err) => this.qinpel.frame.showError(err, "{qia_abdesk}(ErrCode-000001)"))
    }
}

class ManifestAPP extends QinColumn {
    private _actionLine = new QinLine();
    private _nameString = new QinChars();
    private _nameTitled = new QinTitled({label: new QinLabel("Name"), items: [this._nameString]});
    private _manifestButton = new QinButton({label: new QinLabel("Manifest")});
    private _resultText = new QinText();

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._manifestButton.addActionMain(_ => this.actManifest());
        this._nameTitled.install(this._actionLine);
        this._manifestButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actManifest() {
        this.qinpel.talk.app.manifest(this._nameString.value)
            .then((res) => this._resultText.value = JSON.stringify(res))
            .catch((err) => this.qinpel.frame.showError(err, "{qia_abdesk}(ErrCode-000002)"))
    }
}

class AssetAPP extends QinColumn {
    private _nameString = new QinChars();
    private _nameTitled = new QinTitled({label: new QinLabel("Name"), items: [this._nameString]});
    private _assetString = new QinChars();
    private _assetTitled = new QinTitled({label: new QinLabel("Asset"), items: [this._assetString]});
    private _assetButton = new QinButton({label: new QinLabel("Asset")});
    private _actionLine = new QinLine();
    private _resultText = new QinText();

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._assetButton.addActionMain(_ => this.actAsset());
        this._nameTitled.install(this._actionLine);
        this._assetTitled.install(this._actionLine);
        this._assetButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actAsset() {
        this.qinpel.talk.app.asset<string>(this._nameString.value, this._assetString.value)
            .then((res) => this._resultText.value = res)
            .catch((err) => this.qinpel.frame.showError(err, "{qia_abdesk}(ErrCode-000002)"))
    }
}
