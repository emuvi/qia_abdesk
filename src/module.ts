import { QinBase, QinColumn, QinLabel } from "qin_case";

export class Module extends QinColumn {
    public constructor(title: string, body: QinBase) {
        super();
        this.addChild(new QinLabel(title));
        this.addChild(body);
    }
}
