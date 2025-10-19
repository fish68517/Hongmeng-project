if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Page01_Params {
    message?: string;
}
class Page01 extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Page01_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params: Page01_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __message: ObservedPropertySimplePU<string>;
    get message() {
        return this.__message.get();
    }
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            RelativeContainer.create();
            RelativeContainer.debugLine("entry/src/main/ets/pages/Page01.ets(7:5)", "entry");
            RelativeContainer.width(300);
            RelativeContainer.height(300);
            RelativeContainer.margin({ 'left': 20 });
            RelativeContainer.border({ 'width': 2, 'color': '#6699FF' });
        }, RelativeContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Page01.ets(8:7)", "entry");
            Row.justifyContent(FlexAlign.Center);
            Row.width(100);
            Row.height(100);
            Row.backgroundColor('#a3cf62');
            Row.alignRules({
                left: { anchor: '__container__', align: HorizontalAlign.Start },
                bottom: { anchor: '__container__', align: VerticalAlign.Bottom }
            });
            Row.id("row1");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('row1');
            Text.debugLine("entry/src/main/ets/pages/Page01.ets(9:9)", "entry");
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Page01.ets(21:7)", "entry");
            Row.justifyContent(FlexAlign.Center);
            Row.width(100);
            Row.height(100);
            Row.backgroundColor('#00ae9d');
            Row.alignRules({
                // right: { anchor: '__container__', align: HorizontalAlign.End},
                // top:{anchor:'__container__',align:VerticalAlign.Top}
                left: { anchor: 'row1', align: HorizontalAlign.End },
                bottom: { anchor: 'row1', align: VerticalAlign.Bottom }
            });
            Row.id("row2");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('row2');
            Text.debugLine("entry/src/main/ets/pages/Page01.ets(22:9)", "entry");
        }, Text);
        Text.pop();
        Row.pop();
        RelativeContainer.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Page01";
    }
}
registerNamedRoute(() => new Page01(undefined, {}), "", { bundleName: "com.tjetc.myplan", moduleName: "entry", pagePath: "pages/Page01", pageFullPath: "entry/src/main/ets/pages/Page01", integratedHsp: "false", moduleType: "followWithHap" });
