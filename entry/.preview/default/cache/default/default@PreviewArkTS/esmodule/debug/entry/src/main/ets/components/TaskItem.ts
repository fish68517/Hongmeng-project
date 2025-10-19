if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TaskItem_Params {
    tasks?: TaskModel[];
}
import type { TaskModel } from "../viewmodel/TaskModel";
export class TaskItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__tasks = new SynchedPropertyObjectOneWayPU(params.tasks, this, "tasks");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TaskItem_Params) {
    }
    updateStateVars(params: TaskItem_Params) {
        this.__tasks.reset(params.tasks);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__tasks.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__tasks.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    //数据，接收父组件传进来 (两种方式都可以)
    //tasks: TaskModel[] = []
    private __tasks: SynchedPropertySimpleOneWayPU<TaskModel[]>;
    get tasks() {
        return this.__tasks.get();
    }
    set tasks(newValue: TaskModel[]) {
        this.__tasks.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
            Column.debugLine("entry/src/main/ets/components/TaskItem.ets(10:5)", "entry");
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //第一个参数是 要遍历的数据（数组数据） 第二个参数每次循环数组元素数据处理
            // 第三个参数是生成唯一索引（可选项，推荐写）
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 12 });
                    Column.debugLine("entry/src/main/ets/components/TaskItem.ets(15:9)", "entry");
                    Column.width('100%');
                    Column.alignItems(HorizontalAlign.Start);
                    Column.backgroundColor(Color.White);
                    Column.padding({ left: 15, top: 10, bottom: 10 });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    //任务名称
                    Row.create();
                    Row.debugLine("entry/src/main/ets/components/TaskItem.ets(17:11)", "entry");
                    //任务名称
                    Row.width('100%');
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": 16777237, "type": 20000, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
                    Image.debugLine("entry/src/main/ets/components/TaskItem.ets(18:13)", "entry");
                    Image.width(20);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(`${item.taskName}`);
                    Text.debugLine("entry/src/main/ets/components/TaskItem.ets(20:13)", "entry");
                    Text.fontColor({ "id": 16777232, "type": 10001, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
                    Text.fontWeight(FontWeight.Bold);
                    Text.margin({ left: 20 });
                }, Text);
                Text.pop();
                //任务名称
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    //任务时间
                    Text.create(`${item.taskBeginDate}~${item.taskEndDate}`);
                    Text.debugLine("entry/src/main/ets/components/TaskItem.ets(28:11)", "entry");
                    //任务时间
                    Text.fontColor({ "id": 16777232, "type": 10001, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
                    //任务时间
                    Text.fontWeight(FontWeight.Bold);
                }, Text);
                //任务时间
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    //任务标签
                    Row.create();
                    Row.debugLine("entry/src/main/ets/components/TaskItem.ets(32:11)", "entry");
                    //任务标签
                    Row.width(60);
                    //任务标签
                    Row.height(20);
                    //任务标签
                    Row.backgroundColor(Color.Brown);
                    //任务标签
                    Row.borderRadius(20);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(`${item.taskType === 1 ? '生活' : '工作'}`);
                    Text.debugLine("entry/src/main/ets/components/TaskItem.ets(33:13)", "entry");
                    Text.fontColor(Color.White);
                    Text.fontSize(13);
                    Text.margin({ left: 15 });
                }, Text);
                Text.pop();
                //任务标签
                Row.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.tasks, forEachItemGenFunction, (item: TaskModel) => item.id, true, false);
        }, ForEach);
        //第一个参数是 要遍历的数据（数组数据） 第二个参数每次循环数组元素数据处理
        // 第三个参数是生成唯一索引（可选项，推荐写）
        ForEach.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
