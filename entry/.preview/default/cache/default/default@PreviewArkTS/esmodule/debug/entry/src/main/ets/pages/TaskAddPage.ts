if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TaskAddPage_Params {
    message?: string;
}
import router from "@ohos:router";
import type { ParamType } from '../viewmodel/ParamType';
import type { AddPageParam } from '../viewmodel/AddPageParam';
class TaskAddPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('新增任务', this, "message");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TaskAddPage_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params: TaskAddPage_Params) {
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
    aboutToAppear(): void {
        const params: object = router.getParams();
        //断言
        const myParam = params as ParamType<AddPageParam>;
        console.log(`id=${myParam.value?.id}`);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            RelativeContainer.create();
            RelativeContainer.debugLine("entry/src/main/ets/pages/TaskAddPage.ets(18:5)", "entry");
            RelativeContainer.height('100%');
            RelativeContainer.width('100%');
        }, RelativeContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.message);
            Text.debugLine("entry/src/main/ets/pages/TaskAddPage.ets(19:7)", "entry");
            Text.id('TaskAddPageHelloWorld');
            Text.fontSize({ "id": 16777220, "type": 10002, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bold);
            Text.alignRules({
                center: { anchor: '__container__', align: VerticalAlign.Center },
                middle: { anchor: '__container__', align: HorizontalAlign.Center }
            });
            Text.onClick(() => {
                this.message = 'Welcome';
            });
        }, Text);
        Text.pop();
        RelativeContainer.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "TaskAddPage";
    }
}
registerNamedRoute(() => new TaskAddPage(undefined, {}), "", { bundleName: "com.tjetc.myplan", moduleName: "entry", pagePath: "pages/TaskAddPage", pageFullPath: "entry/src/main/ets/pages/TaskAddPage", integratedHsp: "false", moduleType: "followWithHap" });
