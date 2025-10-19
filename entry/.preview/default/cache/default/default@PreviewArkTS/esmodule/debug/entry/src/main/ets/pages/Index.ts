if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    message?: string;
    tasks?: Array<TaskModel>;
    handleToAddPage?;
}
import { TaskStatisties } from "@normalized:N&&&entry/src/main/ets/components/TaskStatisties&";
import { TaskItem } from "@normalized:N&&&entry/src/main/ets/components/TaskItem&";
import { TaskModel } from "@normalized:N&&&entry/src/main/ets/viewmodel/TaskModel&";
import router from "@ohos:router";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.__tasks = new ObservedPropertyObjectPU([]
        //页面生命钩子函数,相当于vue的onMounted函数
        , this, "tasks");
        this.handleToAddPage = () => {
            //可以返回前一个页面
            router.pushUrl({
                url: 'pages/TaskAddPage',
                params: { value: { id: 1 } }
            }, router.RouterMode.Standard, (err) => {
                if (err) {
                    console.log(`路由跳转失败，原因：${err}`);
                }
            });
            //不能够返回
            // router.replaceUrl({
            //   url: 'pages/TaskAddPage'
            // })
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.tasks !== undefined) {
            this.tasks = params.tasks;
        }
        if (params.handleToAddPage !== undefined) {
            this.handleToAddPage = params.handleToAddPage;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__tasks.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__tasks.aboutToBeDeleted();
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
    private __tasks: ObservedPropertyObjectPU<Array<TaskModel>>;
    get tasks() {
        return this.__tasks.get();
    }
    set tasks(newValue: Array<TaskModel>) {
        this.__tasks.set(newValue);
    }
    //页面生命钩子函数,相当于vue的onMounted函数
    aboutToAppear(): void {
        this.tasks = TaskModel.createData();
        console.log(`tasks=${JSON.stringify(this.tasks)}`);
    }
    private handleToAddPage;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //相对布局，要设定与哪个组件（或者容器）进行哪边的对齐
            RelativeContainer.create();
            RelativeContainer.debugLine("entry/src/main/ets/pages/Index.ets(40:5)", "entry");
        }, RelativeContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(41:7)", "entry");
            Column.width("100%");
            Column.backgroundColor({ "id": 16777231, "type": 10001, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            Column.alignItems(HorizontalAlign.Start);
            Column.padding(10);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //标题
            Text.create('你好 小王');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(43:9)", "entry");
            //标题
            Text.fontSize(30);
            //标题
            Text.fontColor({ "id": 16777232, "type": 10001, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            //标题
            Text.margin({ bottom: 14 });
            //标题
            Text.id('xiaowang');
        }, Text);
        //标题
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('让每天的工作效率提高');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(49:9)", "entry");
            Text.fontColor(Color.Gray);
            Text.fontSize(14);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //滚动效果
            Scroll.create();
            Scroll.debugLine("entry/src/main/ets/pages/Index.ets(54:9)", "entry");
            //滚动效果
            Scroll.scrollable(ScrollDirection.Vertical);
            //滚动效果
            Scroll.scrollBar(BarState.Off);
            //滚动效果
            Scroll.friction(0.6);
            //滚动效果
            Scroll.edgeEffect(EdgeEffect.Fade);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(55:11)", "entry");
            Column.width('100%');
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //我的计划
            Text.create('我的计划');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(57:13)", "entry");
            //我的计划
            Text.fontColor({ "id": 16777232, "type": 10001, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            //我的计划
            Text.fontSize(16);
            //我的计划
            Text.margin({ top: 30 });
        }, Text);
        //我的计划
        Text.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    //任务状态
                    //使用组件
                    TaskStatisties(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 63, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TaskStatisties" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //今日任务
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(66:13)", "entry");
            //今日任务
            Column.width('100%');
            //今日任务
            Column.margin({ top: 10 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //今日任务和记录数
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(68:15)", "entry");
            //今日任务和记录数
            Row.width('100%');
            //今日任务和记录数
            Row.justifyContent(FlexAlign.SpaceBetween);
            //今日任务和记录数
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('今日任务');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(69:17)", "entry");
            Text.fontSize(26);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('查看记录数');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(72:17)", "entry");
            Text.fontSize(14);
            Text.fontColor(Color.Gray);
        }, Text);
        Text.pop();
        //今日任务和记录数
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    //多个任务列表
                    //Column和Row 参数中 对象的space设置子元素的间距
                    TaskItem(this, { tasks: this.tasks }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 82, col: 15 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            tasks: this.tasks
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        tasks: this.tasks
                    });
                }
            }, { name: "TaskItem" });
        }
        //今日任务
        Column.pop();
        Column.pop();
        //滚动效果
        Scroll.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //加号图标
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/Index.ets(106:7)", "entry");
            //加号图标
            Stack.alignRules({
                right: {
                    //anchor 相对于谁  align对齐方式
                    anchor: "__container__", align: HorizontalAlign.End
                },
                bottom: {
                    anchor: "__container__", align: VerticalAlign.Bottom
                }
            });
            //加号图标
            Stack.offset({
                x: -50,
                y: -30
            });
            //加号图标
            Stack.onClick(this.handleToAddPage);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //zIndex 设置层叠显示优先级，值越大优先显示越高
            Image.create({ "id": 16777239, "type": 20000, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/Index.ets(108:9)", "entry");
            //zIndex 设置层叠显示优先级，值越大优先显示越高
            Image.width(40);
            //zIndex 设置层叠显示优先级，值越大优先显示越高
            Image.zIndex(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.tjetc.myplan", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/Index.ets(110:9)", "entry");
            Image.width(40);
            Image.zIndex(2);
        }, Image);
        //加号图标
        Stack.pop();
        //相对布局，要设定与哪个组件（或者容器）进行哪边的对齐
        RelativeContainer.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.tjetc.myplan", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
