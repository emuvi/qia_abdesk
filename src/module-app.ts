import { QinButton, QinColumn, QinLabel, QinLine, QinString, QinTabs, QinText, QinTitled } from "qin_case";
import { Module } from "./module";

export class ModuleAPP extends Module {
    private _bodyTabs = new QinTabs();
    private _listPanel = new ListPanel();
    private _manifestPanel = new ManifestPanel();
    private _assetPanel = new AssetPanel();
    
    public constructor() {
        super();
        this._bodyTabs.styleAsWhole();
        this._bodyTabs.addTab({title: "List", viewer: this._listPanel});
        this._bodyTabs.addTab({title: "Manifest", viewer: this._manifestPanel});
        this._bodyTabs.addTab({title: "Asset", viewer: this._assetPanel});
        this._bodyTabs.install(this);
    }
}

class ListPanel extends QinColumn {
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
            .catch((err) => this.qinpel.frame.statusError(err, "{qia_abdesk}(ErrCode-000001)"))
    }
}

class ManifestPanel extends QinColumn {
    private _actionLine = new QinLine();
    private _nameString = new QinString();
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
            .catch((err) => this.qinpel.frame.statusError(err, "{qia_abdesk}(ErrCode-000002)"))
    }
}

class AssetPanel extends QinColumn {
    private _nameString = new QinString();
    private _nameTitled = new QinTitled({label: new QinLabel("Name"), items: [this._nameString]});
    private _assetString = new QinString();
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
            .catch((err) => this.qinpel.frame.statusError(err, "{qia_abdesk}(ErrCode-000002)"))
    }
}
