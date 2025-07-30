import { QinLabel, QinPanel } from "qin_case";

class AbDesk extends QinPanel {
    public constructor() {
        super();
        this.addChild(new QinLabel("AbDesk"));
    }
}

new AbDesk().putAsBody();
