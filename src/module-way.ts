import { QinBool, QinButton, QinChars, QinColumn, QinDouble, QinInt, QinLabel, QinLine, QinMap, QinSizer, QinTabs, QinText, QinTitled } from "qin_case";
import { Module } from "./module";
import { Setup } from "qin_soul";

export class ModuleWAY extends Module {
    private _bodyTabs = new QinTabs();
    private _setupWay = new SetupWAY();

    public constructor() {
        super();
        this._bodyTabs.styleAsWhole();
        this._bodyTabs.addTab({title: "Setup", viewer: this._setupWay});
        this._bodyTabs.install(this);
    }
}

class SetupWAY extends QinColumn {
    
    private _getButton = new QinButton({label: new QinLabel('Get')});
    private _setButton = new QinButton({label: new QinLabel('Set')});
    private _actionLine = new QinLine({items: [this._getButton, this._setButton]});

    private _serverNameChars = new QinChars();
    private _serverNameTitled = new QinTitled({label: new QinLabel('Server Name'), items: [this._serverNameChars]});
    private _serverLangChars = new QinChars();
    private _serverLangTitled = new QinTitled({label: new QinLabel('Server Lang'), items: [this._serverLangChars]});
    private _serverHostChars = new QinChars();
    private _serverHostTitled = new QinTitled({label: new QinLabel('Server Host'), items: [this._serverHostChars]});
    private _serverPortNumber = new QinInt();
    private _serverPortTitled = new QinTitled({label: new QinLabel('Server Port'), items: [this._serverPortNumber]});
    private _serverFolderChars = new QinChars();
    private _serverFolderTitled = new QinTitled({label: new QinLabel('Server Folder'), items: [this._serverFolderChars]});
    private _serverLine = new QinLine({items: [this._serverNameTitled, this._serverLangTitled, this._serverHostTitled, this._serverPortTitled, this._serverFolderTitled]});

    private _servesPubBool = new QinBool();
    private _servesPubTitled = new QinTitled({label: new QinLabel('Serves Pub'), items: [this._servesPubBool]});
    private _servesAppBool = new QinBool();
    private _servesAppTitled = new QinTitled({label: new QinLabel('Serves App'), items: [this._servesAppBool]});
    private _servesDirBool = new QinBool();
    private _servesDirTitled = new QinTitled({label: new QinLabel('Serves Dir'), items: [this._servesDirBool]});
    private _servesCmdBool = new QinBool();
    private _servesCmdTitled = new QinTitled({label: new QinLabel('Serves Cmd'), items: [this._servesCmdBool]});
    private _servesBasBool = new QinBool();
    private _servesBasTitled = new QinTitled({label: new QinLabel('Serves Bas'), items: [this._servesBasBool]});
    private _servesRegBool = new QinBool();
    private _servesRegTitled = new QinTitled({label: new QinLabel('Serves Reg'), items: [this._servesRegBool]});
    private _servesGizBool = new QinBool();
    private _servesGizTitled = new QinTitled({label: new QinLabel('Serves Giz'), items: [this._servesGizBool]});
    private _servesLine = new QinLine({items: [this._servesPubTitled, this._servesAppTitled, this._servesDirTitled, this._servesCmdTitled, this._servesBasTitled, this._servesRegTitled, this._servesGizTitled]});

    private _configMap = new QinMap<string, string>({editorK: new QinChars(), editorV: new QinChars()});
    private _configSizer = new QinSizer(this._configMap);
    private _configTitled = new QinTitled({label: new QinLabel('Config'), items: [this._configSizer]});
    private _redirectMap = new QinMap<string, string>({editorK: new QinChars(), editorV: new QinChars()});
    private _redirectSizer = new QinSizer(this._redirectMap);
    private _redirectTitled = new QinTitled({label: new QinLabel('Redirect'), items: [this._redirectSizer]});
    private _configLine = new QinLine({items: [this._configTitled, this._redirectTitled]});

    private _threadsMinDouble = new QinDouble();
    private _threadsMinTitled = new QinTitled({label: new QinLabel('Threads Min'), items: [this._threadsMinDouble]});
    private _threadsMaxDouble = new QinDouble();
    private _threadsMaxTitled = new QinTitled({label: new QinLabel('Threads Max'), items: [this._threadsMaxDouble]});
    private _threadsIdleTimeoutDouble = new QinDouble();
    private _threadsIdleTimeoutTitled = new QinTitled({label: new QinLabel('Threads Idle Timeout'), items: [this._threadsIdleTimeoutDouble]});
    private _cleanIntervalDouble = new QinDouble();
    private _cleanIntervalTitled = new QinTitled({label: new QinLabel('Clean Interval'), items: [this._cleanIntervalDouble]});
    private _tokenValidityDouble = new QinDouble();
    private _tokenValidityTitled = new QinTitled({label: new QinLabel('Token Validity'), items: [this._tokenValidityDouble]});
    private _threadsLine = new QinLine({items: [this._threadsMinTitled, this._threadsMaxTitled, this._threadsIdleTimeoutTitled, this._cleanIntervalTitled, this._tokenValidityTitled]});

    public constructor() {
        super();
        this.initView();
        this._actionLine.install(this);
        this._serverLine.install(this);
        this._servesLine.install(this);
        this._configLine.install(this);
        this._threadsLine.install(this);
    }

    private initView() {
        this.styleAsWhole();
        this._getButton.addActionMain(_ => this.actGet());
        this._setButton.addActionMain(_ => this.actSet());
    }    

    private actGet() {
        this.qinpel.talk.way
            .getSetup()
            .then(setup => this.viewSetup(setup))
            .catch(err => this.qinpel.frame.showError(err, '{qia_abdesk}(ErrCode-000021)'));
    }    

    private actSet() {
        this.qinpel.talk.way
            .setSetup(this.makeSetup())
            .then(res => this.qinpel.frame.showInfo(res, '{qia_abdesk}(ErrCode-000022)'))
            .catch(err => this.qinpel.frame.showError(err, '{qia_abdesk}(ErrCode-000023)'));
    }

    private viewSetup(setup: Setup) {
        this._serverNameChars.value = setup.serverName;
        this._serverLangChars.value = setup.serverLang;
        this._serverHostChars.value = setup.serverHost;
        this._serverPortNumber.value = setup.serverPort;
        this._serverFolderChars.value = setup.serverFolder;
        this._servesPubBool.value = setup.servesPub;
        this._servesAppBool.value = setup.servesApp;
        this._servesDirBool.value = setup.servesDir;
        this._servesCmdBool.value = setup.servesCmd;
        this._servesBasBool.value = setup.servesBas;
        this._servesRegBool.value = setup.servesReg;
        this._servesGizBool.value = setup.servesGiz;
        this._configMap.value = setup.configMap;
        this._redirectMap.value = setup.redirectMap;
        this._threadsMinDouble.value = setup.threadsMin;
        this._threadsMaxDouble.value = setup.threadsMax;
        this._threadsIdleTimeoutDouble.value = setup.threadsIdleTimeout;
        this._cleanIntervalDouble.value = setup.cleanInterval;
        this._tokenValidityDouble.value = setup.tokenValidity;
    }

    private makeSetup(): Setup {
        return {
            serverName: this._serverNameChars.value,
            serverLang: this._serverLangChars.value,
            serverHost: this._serverHostChars.value,
            serverPort: this._serverPortNumber.value,
            serverFolder: this._serverFolderChars.value,
            servesPub: this._servesPubBool.value,
            servesApp: this._servesAppBool.value,
            servesDir: this._servesDirBool.value,
            servesCmd: this._servesCmdBool.value,
            servesBas: this._servesBasBool.value,
            servesReg: this._servesRegBool.value,
            servesGiz: this._servesGizBool.value,
            configMap: this._configMap.valued,
            redirectMap: this._redirectMap.valued,
            threadsMin: this._threadsMinDouble.value,
            threadsMax: this._threadsMaxDouble.value,
            threadsIdleTimeout: this._threadsIdleTimeoutDouble.value,
            cleanInterval: this._cleanIntervalDouble.value,
            tokenValidity: this._tokenValidityDouble.value,
        }
    }
}
