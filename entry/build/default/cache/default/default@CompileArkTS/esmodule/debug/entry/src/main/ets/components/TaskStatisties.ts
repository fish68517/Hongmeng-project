if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TaskStatisties_Params {
}
export class TaskStatisties extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TaskStatisties_Params) {
    }
    updateStateVars(params: TaskStatisties_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.height(300);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //已完成和等待中
            Column.create();
            //已完成和等待中
            Column.width('49%');
            //已完成和等待中
            Column.justifyContent(FlexAlign.SpaceBetween);
            //已完成和等待中
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //已完成
            Row.create();
            //已完成
            Row.width('100%');
            //已完成
            Row.height(164);
            //已完成
            Row.backgroundImage({ "id": 16777233, "type": 20000, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            //已完成
            Row.backgroundImageSize(ImageSize.Cover);
            //已完成
            Row.borderRadius(10);
            //已完成
            Row.alignItems(VerticalAlign.Top);
            //已完成
            Row.justifyContent(FlexAlign.SpaceBetween);
            //已完成
            Row.padding({ left: 10, right: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('已完成');
            Text.fontColor({ "id": 16777232, "type": 10001, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('0任务');
            Text.fontColor({ "id": 16777232, "type": 10001, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        //已完成
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //等待中
            Row.create();
            //等待中
            Row.width('100%');
            //等待中
            Row.height(128);
            //等待中
            Row.backgroundImage({ "id": 16777234, "type": 20000, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            //等待中
            Row.backgroundImageSize(ImageSize.Cover);
            //等待中
            Row.borderRadius(10);
            //等待中
            Row.alignItems(VerticalAlign.Top);
            //等待中
            Row.justifyContent(FlexAlign.SpaceBetween);
            //等待中
            Row.padding({ left: 10, right: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('等待中');
            Text.fontColor({ "id": 16777232, "type": 10001, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('5任务');
            Text.fontColor({ "id": 16777232, "type": 10001, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        //等待中
        Row.pop();
        //已完成和等待中
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //未完成和未来任务
            Column.create();
            //未完成和未来任务
            Column.width('49%');
            //未完成和未来任务
            Column.height('100%');
            //未完成和未来任务
            Column.justifyContent(FlexAlign.SpaceBetween);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //未完成
            Row.create();
            //未完成
            Row.width('100%');
            //未完成
            Row.height(128);
            //未完成
            Row.backgroundImage({ "id": 16777235, "type": 20000, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            //未完成
            Row.backgroundImageSize(ImageSize.Cover);
            //未完成
            Row.borderRadius(10);
            //未完成
            Row.alignItems(VerticalAlign.Top);
            //未完成
            Row.justifyContent(FlexAlign.SpaceBetween);
            //未完成
            Row.padding({ left: 10, right: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('未完成');
            Text.fontColor({ "id": 16777232, "type": 10001, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('92任务');
            Text.fontColor({ "id": 16777232, "type": 10001, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        //未完成
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //未来任务
            Row.create();
            //未来任务
            Row.width('100%');
            //未来任务
            Row.height(164);
            //未来任务
            Row.backgroundImage({ "id": 16777237, "type": 20000, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            //未来任务
            Row.backgroundImageSize(ImageSize.Cover);
            //未来任务
            Row.alignItems(VerticalAlign.Top);
            //未来任务
            Row.justifyContent(FlexAlign.SpaceBetween);
            //未来任务
            Row.padding({ left: 10, right: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('未来任务');
            Text.fontColor({ "id": 16777232, "type": 10001, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('3任务');
            Text.fontColor({ "id": 16777232, "type": 10001, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        //未来任务
        Row.pop();
        //未完成和未来任务
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
