//导入自定义组件
import { TaskStatisties } from '../components/TaskStatisties'
import { TaskItem } from '../components/TaskItem'
import { TaskModel } from '../viewmodel/TaskModel'
import { router } from '@kit.ArkUI';
import { trustedAppService } from '@kit.DeviceSecurityKit';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';
  @State tasks: Array<TaskModel> = []

  //页面生命钩子函数,相当于vue的onMounted函数
  aboutToAppear(): void {
    this.tasks = TaskModel.createData()
    console.log(`tasks=${JSON.stringify(this.tasks)}`)
  }

  handleToAddPage = () => {
    //可以返回前一个页面
    router.pushUrl({
      url: 'pages/TaskAddPage',
      params: { value: { id: 1 } }
    },
      router.RouterMode.Standard,
      (err) => {
        if (err) {
          console.log(`路由跳转失败，原因：${err}`)
        }
      })
    //不能够返回
    // router.replaceUrl({
    //   url: 'pages/TaskAddPage'
    // })
  }

  build() {
    //相对布局，要设定与哪个组件（或者容器）进行哪边的对齐
    RelativeContainer() {
      Column() {
        //标题
        Text('你好 小王')
          .fontSize(30)
          .fontColor($r('app.color.text_color'))
          //外边距，可以单独设置四个方向
          .margin({ bottom: 14 })
          .id('xiaowang')
        Text('让每天的工作效率提高')
          .fontColor(Color.Gray)
          .fontSize(14)

        //滚动效果
        Scroll() {
          Column() {
            //我的计划
            Text('我的计划')
              .fontColor($r('app.color.text_color'))
              .fontSize(16)
              .margin({ top: 30 })
            //任务状态
            //使用组件
            TaskStatisties()
              .onClick(()=>{
                router.pushUrl({
                  url:"pages/TaskDetailPage"
                })
              })

            //今日任务
            Column() {
              //今日任务和记录数
              Row() {
                Text('今日任务')
                  .fontSize(26)
                  .fontWeight(FontWeight.Bold)
                Text('查看记录数')
                  .fontSize(14)
                  .fontColor(Color.Gray)
              }
              .width('100%')
              .justifyContent(FlexAlign.SpaceBetween)
              .alignItems(VerticalAlign.Bottom)

              //多个任务列表
              //Column和Row 参数中 对象的space设置子元素的间距
              TaskItem({ tasks: this.tasks })
            }
            .width('100%')
            .margin({ top: 10 })
          }
          .width('100%')
          .alignItems(HorizontalAlign.Start)
        }
        .scrollable(ScrollDirection.Vertical) //垂直方向滚动
        .scrollBar(BarState.Off) //关闭滚动条
        .friction(0.6) //摩擦系数，手机可以丝滑一些让系数小一些，手表屏幕小，摩擦系数大一些
        .edgeEffect(EdgeEffect.Fade) //滚动到底部或者顶部效果
      }
      .width("100%")
      //$r引入资源的配置的颜色、数值、图片、文字描述（国际化）等
      //app理解成resources
      .backgroundColor($r('app.color.background_color'))
      //.height(300)
      //侧轴左对齐
      .alignItems(HorizontalAlign.Start)
      //内边距
      .padding(10)

      //加号图标
      Stack() {
        //zIndex 设置层叠显示优先级，值越大优先显示越高
        Image($r('app.media.circle'))
          .width(40).zIndex(1)
        Image($r('app.media.jiahao'))
          .width(40).zIndex(2)
      }
      //对齐规则
      .alignRules({
        right: {
          //anchor 相对于谁  align对齐方式
          anchor: "__container__", align: HorizontalAlign.End
        },
        bottom: {
          anchor: "__container__", align: VerticalAlign.Bottom
        }
      })
      //设置偏移量
      .offset({
        x: -50,
        y: -30
      })
      .onClick(this.handleToAddPage)
    }
  }
}