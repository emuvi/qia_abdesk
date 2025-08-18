import { QinBoolean, QinButton, QinColumn, QinCombo, QinLabel, QinLine, QinNumeric, QinString, QinTabs, QinText, QinTitled } from "qin_case";
import { Module } from "./module";
import { JoinTies, FilterSeems, FilterLikes, FilterTies, Nature } from "qin_soul"
import { Delete, Filter, Insert, Join, Linked, Order, Select, TableHead, ToGetID, Typed, Update, Valued } from "../../qin_soul/types/qin-type";

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
                .catch((err) => this.qinpel.frame.showError(err, "{qia_abdesk}(ErrCode-000007)"))
    }
}

class RegSee extends QinColumn {
    private _actionLine = new QinLine();
    private _baseString = new QinString();
    private _baseTitled = new QinTitled({label: new QinLabel("Base"), items: [this._baseString]});
    private _tableHeadText = new QinText();
    private _tableHeadTitled = new QinTitled({label: new QinLabel("Table Head"), items: [this._tableHeadText]});
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
        const tableHead = JSON.parse(this._tableHeadText.value) as TableHead;
        const registry = this.qinpel.talk.reg.aux.newRegistry(base, tableHead);
        this.qinpel.talk.reg.see(registry)
                .then((table) => this._resultText.value = JSON.stringify(table, null, 2))
                .catch((err) => this.qinpel.frame.showError(err, "{qia_abdesk}(ErrCode-000008)"))
    }
}

class RegCan extends QinColumn {
    private _actionLine = new QinLine();
    private _baseString = new QinString();
    private _baseTitled = new QinTitled({label: new QinLabel("Base"), items: [this._baseString]});
    private _tableHeadText = new QinText();
    private _tableHeadTitled = new QinTitled({label: new QinLabel("Table Head"), items: [this._tableHeadText]});
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
        const tableHead = JSON.parse(this._tableHeadText.value) as TableHead;
        const registry = this.qinpel.talk.reg.aux.newRegistry(base, tableHead);
        this.qinpel.talk.reg.can(registry)
                .then((allowReg) => this._resultText.value = JSON.stringify(allowReg, null, 2))
                .catch((err) => this.qinpel.frame.showError(err, "{qia_abdesk}(ErrCode-000009)"))
    }
}

class RegNew extends QinColumn {
    private _actionLine = new QinLine();
    private _baseString = new QinString();
    private _baseTitled = new QinTitled({label: new QinLabel("Base"), items: [this._baseString]});
    private _insertText = new QinText();
    private _insertTitled = new QinTitled({label: new QinLabel("Insert"), items: [this._insertText]});
    private _runButton = new QinButton({label: new QinLabel("Run")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._runButton.addActionMain(_ => this.actRun());
        this._baseTitled.install(this._actionLine);
        this._insertTitled.install(this._actionLine);
        this._runButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actRun() {
        const base = this._baseString.value;
        const insert = JSON.parse(this._insertText.value) as Insert;
        const toInsert = this.qinpel.talk.reg.aux.newToInsert(base, insert);
        this.qinpel.talk.reg.new(toInsert)
                .then((inserted) => this._resultText.value = inserted)
                .catch((err) => this.qinpel.frame.showError(err, "{qia_abdesk}(ErrCode-000010)"))
    }
}

class RegAsk extends QinColumn {
    private _actionLine = new QinLine();
    private _baseString = new QinString();
    private _baseTitled = new QinTitled({label: new QinLabel("Base"), items: [this._baseString]});
    private _selectText = new QinText();
    private _selectTitled = new QinTitled({label: new QinLabel("Select"), items: [this._selectText]});
    private _runButton = new QinButton({label: new QinLabel("Run")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._runButton.addActionMain(_ => this.actRun());
        this._baseTitled.install(this._actionLine);
        this._selectTitled.install(this._actionLine);
        this._runButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actRun() {
        const base = this._baseString.value;
        const select = JSON.parse(this._selectText.value) as Select;
        const toSelect = this.qinpel.talk.reg.aux.newToSelect(base, select);
        this.qinpel.talk.reg.ask(toSelect)
                .then((selected) => this._resultText.value = selected)
                .catch((err) => this.qinpel.frame.showError(err, "{qia_abdesk}(ErrCode-000011)"))
    }
}

class RegSet extends QinColumn {
    private _actionLine = new QinLine();
    private _baseString = new QinString();
    private _baseTitled = new QinTitled({label: new QinLabel("Base"), items: [this._baseString]});
    private _updateText = new QinText();
    private _updateTitled = new QinTitled({label: new QinLabel("Update"), items: [this._updateText]});
    private _runButton = new QinButton({label: new QinLabel("Run")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._runButton.addActionMain(_ => this.actRun());
        this._baseTitled.install(this._actionLine);
        this._updateTitled.install(this._actionLine);
        this._runButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actRun() {
        const base = this._baseString.value;
        const update = JSON.parse(this._updateText.value) as Update;
        const toUpdate = this.qinpel.talk.reg.aux.newToUpdate(base, update);
        this.qinpel.talk.reg.set(toUpdate)
                .then((updated) => this._resultText.value = updated)
                .catch((err) => this.qinpel.frame.showError(err, "{qia_abdesk}(ErrCode-000012)"))
    }
}

class RegDel extends QinColumn {
    private _actionLine = new QinLine();
    private _baseString = new QinString();
    private _baseTitled = new QinTitled({label: new QinLabel("Base"), items: [this._baseString]});
    private _deleteText = new QinText();
    private _deleteTitled = new QinTitled({label: new QinLabel("Delete"), items: [this._deleteText]});
    private _runButton = new QinButton({label: new QinLabel("Run")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._runButton.addActionMain(_ => this.actRun());
        this._baseTitled.install(this._actionLine);
        this._deleteTitled.install(this._actionLine);
        this._runButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actRun() {
        const base = this._baseString.value;
        const delety = JSON.parse(this._deleteText.value) as Delete;
        const toDelete = this.qinpel.talk.reg.aux.newToDelete(base, delety);
        this.qinpel.talk.reg.del(toDelete)
                .then((deleted) => this._resultText.value = deleted)
                .catch((err) => this.qinpel.frame.showError(err, "{qia_abdesk}(ErrCode-000013)"))
    }
}

class RegAux extends QinColumn {
    private _bodyTabs = new QinTabs();
    private _tableHeadAux = new RegAuxTableHead();
    private _registryAux = new RegAuxRegistry();
    private _insertAux = new RegAuxInsert();
    private _selectAux = new RegAuxSelect();
    private _updateAux = new RegAuxUpdate();
    private _deleteAux = new RegAuxDelete();
    private _toGetIDAux = new RegAuxToGetID();
    private _joinAux = new RegAuxJoin();
    private _filterAux = new RegAuxFilter();
    private _linkedAux = new RegAuxLinked();
    private _orderAux = new RegAuxOrder();
    private _valuedAux = new RegAuxValued();
    private _typedAux = new RegAuxTyped();

    public constructor() {
        super();
        this.styleAsWhole();
        this._bodyTabs.styleAsWhole();
        this._bodyTabs.addTab({title: "Table Head", viewer: this._tableHeadAux});
        this._bodyTabs.addTab({title: "Registry", viewer: this._registryAux});
        this._bodyTabs.addTab({title: "Insert", viewer: this._insertAux});
        this._bodyTabs.addTab({title: "Select", viewer: this._selectAux});
        this._bodyTabs.addTab({title: "Update", viewer: this._updateAux});
        this._bodyTabs.addTab({title: "Delete", viewer: this._deleteAux});
        this._bodyTabs.addTab({title: "ToGetID", viewer: this._toGetIDAux});
        this._bodyTabs.addTab({title: "Join", viewer: this._joinAux});
        this._bodyTabs.addTab({title: "Filter", viewer: this._filterAux});
        this._bodyTabs.addTab({title: "Linked", viewer: this._linkedAux});
        this._bodyTabs.addTab({title: "Order", viewer: this._orderAux});
        this._bodyTabs.addTab({title: "Valued", viewer: this._valuedAux});
        this._bodyTabs.addTab({title: "Typed", viewer: this._typedAux});
        this._bodyTabs.install(this);
    }
}

class RegAuxTableHead extends QinColumn {
    private _actionLine = new QinLine();
    private _catalogString = new QinString();
    private _catalogTitled = new QinTitled({label: new QinLabel("Catalog"), items: [this._catalogString]});
    private _schemaString = new QinString();
    private _schemaTitled = new QinTitled({label: new QinLabel("Schema"), items: [this._schemaString]});
    private _nameString = new QinString();
    private _nameTitled = new QinTitled({label: new QinLabel("Name"), items: [this._nameString]});
    private _aliasString = new QinString();
    private _aliasTitled = new QinTitled({label: new QinLabel("Alias"), items: [this._aliasString]});
    private _newButton = new QinButton({label: new QinLabel("New")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._newButton.addActionMain(_ => this.actNew());
        this._catalogTitled.install(this._actionLine);
        this._schemaTitled.install(this._actionLine);
        this._nameTitled.install(this._actionLine);
        this._aliasTitled.install(this._actionLine);
        this._newButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actNew() {
        const tableHead = this.qinpel.talk.reg.aux
                .newTableHead(
                    this._catalogString.value,
                    this._schemaString.value,
                    this._nameString.value,
                    this._aliasString.value
                );
        this._resultText.value = JSON.stringify(tableHead, null, 2);
    }
}

class RegAuxRegistry extends QinColumn {
    private _actionLine = new QinLine();
    private _baseString = new QinString();
    private _baseTitled = new QinTitled({label: new QinLabel("Base"), items: [this._baseString]});
    private _tableHeadText = new QinText();
    private _tableHeadTitled = new QinTitled({label: new QinLabel("Table Head"), items: [this._tableHeadText]});
    private _newButton = new QinButton({label: new QinLabel("New")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._newButton.addActionMain(_ => this.actNew());
        this._baseTitled.install(this._actionLine);
        this._tableHeadTitled.install(this._actionLine);
        this._newButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actNew() {
        const base = this._baseString.value;
        const tableHead = JSON.parse(this._tableHeadText.value) as TableHead;
        const registry = this.qinpel.talk.reg.aux.newRegistry(base, tableHead);
        this._resultText.value = JSON.stringify(registry, null, 2);
    }
}

class RegAuxInsert extends QinColumn {
    private _actionLine = new QinLine();
    private _tableHeadText = new QinText();
    private _tableHeadTitled = new QinTitled({label: new QinLabel("Table Head"), items: [this._tableHeadText]});
    private _valuedListText = new QinText();
    private _valuedListTitled = new QinTitled({label: new QinLabel("Valued List"), items: [this._valuedListText]});
    private _toGetIDText = new QinText();
    private _toGetIDTitled = new QinTitled({label: new QinLabel("To Get ID"), items: [this._toGetIDText]});
    private _newButton = new QinButton({label: new QinLabel("New")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._newButton.addActionMain(_ => this.actNew());
        this._tableHeadTitled.install(this._actionLine);
        this._valuedListTitled.install(this._actionLine);
        this._toGetIDTitled.install(this._actionLine);
        this._newButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actNew() {
        const tableHead = JSON.parse(this._tableHeadText.value) as TableHead;
        const valuedList = JSON.parse(this._valuedListText.value) as Array<Valued>;
        const toGetID = JSON.parse(this._toGetIDText.value) as ToGetID;
        const insert = this.qinpel.talk.reg.aux
                .newInsert(tableHead, valuedList, toGetID);
        this._resultText.value = JSON.stringify(insert, null, 2);
    }
}

class RegAuxSelect extends QinColumn {
    private _actionLine = new QinLine();
    private _tableHeadText = new QinText();
    private _tableHeadTitled = new QinTitled({label: new QinLabel("Table Head"), items: [this._tableHeadText]});
    private _fieldListText = new QinText();
    private _fieldListTitled = new QinTitled({label: new QinLabel("Field List"), items: [this._fieldListText]});
    private _joinListText = new QinText();
    private _joinListTitled = new QinTitled({label: new QinLabel("Join List"), items: [this._joinListText]});
    private _filterListText = new QinText();
    private _filterListTitled = new QinTitled({label: new QinLabel("Filter List"), items: [this._filterListText]});
    private _orderListText = new QinText();
    private _orderListTitled = new QinTitled({label: new QinLabel("Order List"), items: [this._orderListText]});
    private _offsetNumeric = new QinNumeric();
    private _offsetTitled = new QinTitled({label: new QinLabel("Offset"), items: [this._offsetNumeric]});
    private _limitNumeric = new QinNumeric();
    private _limitTitled = new QinTitled({label: new QinLabel("Limit"), items: [this._limitNumeric]});
    private _newButton = new QinButton({label: new QinLabel("New")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._newButton.addActionMain(_ => this.actNew());
        this._tableHeadTitled.install(this._actionLine);
        this._fieldListTitled.install(this._actionLine);
        this._joinListTitled.install(this._actionLine);
        this._filterListTitled.install(this._actionLine);
        this._orderListTitled.install(this._actionLine);
        this._offsetTitled.install(this._actionLine);
        this._limitTitled.install(this._actionLine);
        this._newButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actNew() {
        const tableHead = JSON.parse(this._tableHeadText.value) as TableHead;
        const fieldList = JSON.parse(this._fieldListText.value) as Array<Typed>;
        const joinList = JSON.parse(this._joinListText.value) as Array<Join>;
        const filterList = JSON.parse(this._filterListText.value) as Array<Filter>;
        const orderList = JSON.parse(this._orderListText.value) as Array<Order>;
        const offset = this._offsetNumeric.value;
        const limit = this._limitNumeric.value;
        const select = this.qinpel.talk.reg.aux
                .newSelect(tableHead, fieldList, joinList, filterList, orderList, offset, limit);
        this._resultText.value = JSON.stringify(select, null, 2);
    }
}

class RegAuxUpdate extends QinColumn {
    private _actionLine = new QinLine();
    private _tableHeadText = new QinText();
    private _tableHeadTitled = new QinTitled({label: new QinLabel("Table Head"), items: [this._tableHeadText]});
    private _valuedListText = new QinText();
    private _valuedListTitled = new QinTitled({label: new QinLabel("Valued List"), items: [this._valuedListText]});
    private _filterListText = new QinText();
    private _filterListTitled = new QinTitled({label: new QinLabel("Filter List"), items: [this._filterListText]});
    private _limitNumeric = new QinNumeric();
    private _limitTitled = new QinTitled({label: new QinLabel("Limit"), items: [this._limitNumeric]});
    private _newButton = new QinButton({label: new QinLabel("New")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._newButton.addActionMain(_ => this.actNew());
        this._tableHeadTitled.install(this._actionLine);
        this._valuedListTitled.install(this._actionLine);
        this._filterListTitled.install(this._actionLine);
        this._limitTitled.install(this._actionLine);
        this._newButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actNew() {
        const tableHead = JSON.parse(this._tableHeadText.value) as TableHead;
        const valuedList = JSON.parse(this._valuedListText.value) as Array<Valued>;
        const filterList = JSON.parse(this._filterListText.value) as Array<Filter>;
        const limit = this._limitNumeric.value;
        const update = this.qinpel.talk.reg.aux
                .newUpdate(tableHead, valuedList, filterList, limit);
        this._resultText.value = JSON.stringify(update, null, 2);
    }
}

class RegAuxDelete extends QinColumn {
    private _actionLine = new QinLine();
    private _tableHeadText = new QinText();
    private _tableHeadTitled = new QinTitled({label: new QinLabel("Table Head"), items: [this._tableHeadText]});
    private _filterListText = new QinText();
    private _filterListTitled = new QinTitled({label: new QinLabel("Filter List"), items: [this._filterListText]});
    private _newButton = new QinButton({label: new QinLabel("New")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._newButton.addActionMain(_ => this.actNew());
        this._tableHeadTitled.install(this._actionLine);
        this._filterListTitled.install(this._actionLine);
        this._newButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actNew() {
        const tableHead = JSON.parse(this._tableHeadText.value) as TableHead;
        const filterList = JSON.parse(this._filterListText.value) as Array<Filter>;
        const delety = this.qinpel.talk.reg.aux
                .newDelete(tableHead, filterList);
        this._resultText.value = JSON.stringify(delety, null, 2);
    }
}

class RegAuxToGetID extends QinColumn {
    private _actionLine = new QinLine();
    private _nameString = new QinString();
    private _nameTitled = new QinTitled({label: new QinLabel("Name"), items: [this._nameString]});
    private _filterText = new QinText();
    private _filterTitled = new QinTitled({label: new QinLabel("Filter: Valued"), items: [this._filterText]});
    private _newButton = new QinButton({label: new QinLabel("New")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._newButton.addActionMain(_ => this.actNew());
        this._nameTitled.install(this._actionLine);
        this._filterTitled.install(this._actionLine);
        this._newButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actNew() {
        const name = this._nameString.value;
        const filter = JSON.parse(this._filterText.value) as Valued;
        const join = this.qinpel.talk.reg.aux
                .newToGetID(name, filter);
        this._resultText.value = JSON.stringify(join, null, 2);
    }
}

class RegAuxJoin extends QinColumn {
    private _actionLine = new QinLine();
    private _tableHeadText = new QinText();
    private _tableHeadTitled = new QinTitled({label: new QinLabel("Table Head"), items: [this._tableHeadText]});
    private _aliasString = new QinString();
    private _aliasTitled = new QinTitled({label: new QinLabel("Alias"), items: [this._aliasString]});
    private _filterListText = new QinText();
    private _filterListTitled = new QinTitled({label: new QinLabel("Filter List"), items: [this._filterListText]});
    private _tiesCombo = new QinCombo({ofEnum: JoinTies});
    private _tiesTitled = new QinTitled({label: new QinLabel("Ties"), items: [this._tiesCombo]});
    private _newButton = new QinButton({label: new QinLabel("New")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._newButton.addActionMain(_ => this.actNew());
        this._tableHeadTitled.install(this._actionLine);
        this._aliasTitled.install(this._actionLine);
        this._filterListTitled.install(this._actionLine);
        this._tiesTitled.install(this._actionLine);
        this._newButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actNew() {
        const tableHead = JSON.parse(this._tableHeadText.value) as TableHead;
        const alias = this._aliasString.value;
        const filterList = JSON.parse(this._filterListText.value) as Array<Filter>;
        const ties = this._tiesCombo.value as JoinTies;  
        const join = this.qinpel.talk.reg.aux
                .newJoin(tableHead, alias, filterList, ties);
        this._resultText.value = JSON.stringify(join, null, 2);
    }
}

class RegAuxFilter extends QinColumn {
    private _actionLine = new QinLine();
    private _seemsCombo = new QinCombo({ofEnum: FilterSeems});
    private _seemsTitled = new QinTitled({label: new QinLabel("Seems"), items: [this._seemsCombo]});
    private _likesCombo = new QinCombo({ofEnum: FilterLikes});
    private _likesTitled = new QinTitled({label: new QinLabel("Likes"), items: [this._likesCombo]});
    private _valuedText = new QinText();
    private _valuedTitled = new QinTitled({label: new QinLabel("Valued"), items: [this._valuedText]});
    private _linkedText = new QinText();
    private _linkedTitled = new QinTitled({label: new QinLabel("Linked"), items: [this._linkedText]});
    private _tiesCombo = new QinCombo({ofEnum: FilterTies});
    private _tiesTitled = new QinTitled({label: new QinLabel("Ties"), items: [this._tiesCombo]});
    private _newButton = new QinButton({label: new QinLabel("New")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._newButton.addActionMain(_ => this.actNew());
        this._seemsTitled.install(this._actionLine);
        this._likesTitled.install(this._actionLine);
        this._valuedTitled.install(this._actionLine);
        this._linkedTitled.install(this._actionLine);
        this._tiesTitled.install(this._actionLine);
        this._newButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actNew() {
        const seems = this._seemsCombo.value as FilterSeems;  
        const likes = this._likesCombo.value as FilterLikes;  
        const valued = JSON.parse(this._valuedText.value) as Valued;
        const linked = JSON.parse(this._linkedText.value) as Linked;
        const ties = this._tiesCombo.value as FilterTies;  
        const filter = this.qinpel.talk.reg.aux
                .newFilter(seems, likes, valued, linked, ties);
        this._resultText.value = JSON.stringify(filter, null, 2);
    }
}

class RegAuxLinked extends QinColumn {
    private _actionLine = new QinLine();
    private _nameString = new QinString();
    private _nameTitled = new QinTitled({label: new QinLabel("Name"), items: [this._nameString]});
    private _uponString = new QinString();
    private _uponTitled = new QinTitled({label: new QinLabel("Upon"), items: [this._uponString]});
    private _newButton = new QinButton({label: new QinLabel("New")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._newButton.addActionMain(_ => this.actNew());
        this._nameTitled.install(this._actionLine);
        this._uponTitled.install(this._actionLine);
        this._newButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actNew() {
        const name = this._nameString.value;
        const upon = this._uponString.value;
        const linked = this.qinpel.talk.reg.aux
                .newLinked(name, upon);
        this._resultText.value = JSON.stringify(linked, null, 2);
    }
}

class RegAuxOrder extends QinColumn {
    private _actionLine = new QinLine();
    private _nameString = new QinString();
    private _nameTitled = new QinTitled({label: new QinLabel("Name"), items: [this._nameString]});
    private _descBoolean = new QinBoolean();
    private _descTitled = new QinTitled({label: new QinLabel("Desc"), items: [this._descBoolean]});
    private _newButton = new QinButton({label: new QinLabel("New")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._newButton.addActionMain(_ => this.actNew());
        this._nameTitled.install(this._actionLine);
        this._descTitled.install(this._actionLine);
        this._newButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actNew() {
        const name = this._nameString.value;
        const desc = this._descBoolean.value;
        const order = this.qinpel.talk.reg.aux
                .newOrder(name, desc);
        this._resultText.value = JSON.stringify(order, null, 2);
    }
}

class RegAuxValued extends QinColumn {
    private _actionLine = new QinLine();
    private _nameString = new QinString();
    private _nameTitled = new QinTitled({label: new QinLabel("Name"), items: [this._nameString]});
    private _typeCombo = new QinCombo({ofEnum: Nature});
    private _typeTitled = new QinTitled({label: new QinLabel("Type"), items: [this._typeCombo]});
    private _dataString = new QinString();
    private _dataTitled = new QinTitled({label: new QinLabel("Data"), items: [this._dataString]});
    private _newButton = new QinButton({label: new QinLabel("New")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._newButton.addActionMain(_ => this.actNew());
        this._nameTitled.install(this._actionLine);
        this._typeTitled.install(this._actionLine);
        this._dataTitled.install(this._actionLine);
        this._newButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actNew() {
        const name = this._nameString.value;
        const type = this._typeCombo.value as Nature;  
        const data = this._dataString.value;
        const valued = this.qinpel.talk.reg.aux
                .newValued(name, type, data);
        this._resultText.value = JSON.stringify(valued, null, 2);
    }
}

class RegAuxTyped extends QinColumn {
    private _actionLine = new QinLine();
    private _nameString = new QinString();
    private _nameTitled = new QinTitled({label: new QinLabel("Name"), items: [this._nameString]});
    private _typeCombo = new QinCombo({ofEnum: Nature});
    private _typeTitled = new QinTitled({label: new QinLabel("Type"), items: [this._typeCombo]});
    private _aliasString = new QinString();
    private _aliasTitled = new QinTitled({label: new QinLabel("Alias"), items: [this._aliasString]});
    private _newButton = new QinButton({label: new QinLabel("New")});
    private _resultText = new QinText({readOnly: true});

    public constructor() {
        super();
        this.styleAsWhole();
        this._resultText.styleAsWhole();
        this._newButton.addActionMain(_ => this.actNew());
        this._nameTitled.install(this._actionLine);
        this._typeTitled.install(this._actionLine);
        this._aliasTitled.install(this._actionLine);
        this._newButton.install(this._actionLine);
        this._actionLine.install(this);
        this._resultText.install(this);
    }

    private actNew() {
        const name = this._nameString.value;
        const type = this._typeCombo.value as Nature;  
        const alias = this._aliasString.value;
        const typed = this.qinpel.talk.reg.aux
                .newTyped(name, type, alias);
        this._resultText.value = JSON.stringify(typed, null, 2);
    }
}