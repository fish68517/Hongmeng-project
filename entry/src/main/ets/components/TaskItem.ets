import { TaskModel } from "../viewmodel/TaskModel"
import { router } from "@kit.ArkUI"

@Component
export struct TaskItem {
  //数据，接收父组件传进来 (两种方式都可以)
  //tasks: TaskModel[] = []
  @Prop tasks: TaskModel[]

  build() {
    Column({ space: 10 }) {
      //第一个参数是 要遍历的数据（数组数据） 第二个参数每次循环数组元素数据处理
      // 第三个参数是生成唯一索引（可选项，推荐写）
      ForEach(this.tasks, (item: TaskModel, index: number) => {

        Column({ space: 12 }) {
          //任务名称
          Row() {
            Image($r('app.media.list_forward'))
              .width(20)
            Text(`${item.taskName}`)
              .fontColor($r('app.color.text_color'))
              .fontWeight(FontWeight.Bold)
              .margin({ left: 20 })
          }
          .width('100%')

          //任务时间
          Text(`${item.taskBeginDate}~${item.taskEndDate}`)
            .fontColor($r('app.color.text_color'))
            .fontWeight(FontWeight.Bold)
          //任务标签
          Row() {
            Text(`${item.taskType === 1 ? '生活' : '工作'}`)
              .fontColor(Color.White)
              .fontSize(13)
              .margin({ left: 15 })
          }
          .width(60)
          .height(20)
          .backgroundColor(Color.Brown)
          .borderRadius(20)
        }
        .width('100%')
        .alignItems(HorizontalAlign.Start)
        .backgroundColor(Color.White)
        .padding({ left: 15, top: 10, bottom: 10 })
        .onClick(()=>{
          router.pushUrl({
            url:"pages/TaskDetailPage"
          })
        })

      }, (item: TaskModel) => item.id)
    }
    .width('100%')

    //.height('100%')
  }
}