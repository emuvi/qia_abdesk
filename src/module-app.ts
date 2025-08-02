import { QinButton, QinColumn, Qine, QinLabel, QinPanel, QinTabs, QinText } from "qin_case";
import { Module } from "./module";
import { QinEvent } from "../../qin_soul/types/qin-arms";

export class ModuleAPP extends Module {
    private _bodyTabs = new QinTabs();
    private _listPanel = new ListPanel();
    private _manifestPanel = new ManifestPanel();
    private _getPanel = new GetPanel();
    
    public constructor() {
        super();
        this._bodyTabs.styleAsWhole();
        this._bodyTabs
            .addTab({title: "List", viewer: this._listPanel})
            .addTab({title: "Manifest", viewer: this._manifestPanel})
            .addTab({title: "Get", viewer: this._getPanel})
            .install(this);
    }
}

class ListPanel extends QinColumn {
    private _listButton = new QinButton({label: new QinLabel("List")});
    private _resultText = new QinText();

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._listButton.addActionMain(_ => this.actList()).install(this);
        this._resultText.install(this);
    }

    private actList() {
        this.qinpel.talk.app.list()
                .then((res) => this._resultText.value = res.join("\n"))
                .catch((err) => this.qinpel.frame.statusError(err, "{qia_abdesk}(ErrCode-000001)"))
    }
}

class ManifestPanel extends QinPanel {
    public constructor() {
        super();
    }
}

class GetPanel extends QinPanel {
    public constructor() {
        super();
    }
}
