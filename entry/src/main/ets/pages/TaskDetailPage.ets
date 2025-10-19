import { router } from '@kit.ArkUI';

@Entry
@Component
struct TaskDetailPage {
  // 模拟任务数据
  @State taskData: TaskInfo = {
    id: 1,
    name: '完成项目报告',
    startDate: '2025-05-15',
    endDate: '2025-07-20',
    type: '工作',
    status: '进行中'
  };

  // 返回上一页
  onBackPress() {
    router.back();
  }

  build() {
    Column() {
      // 标题栏
      Row() {
        Image($r('sys.media.ohos_ic_public_arrow_right'))
          .width(24)
          .height(24)
          .rotate({ angle: 180 })
          .onClick(() => {
            this.onBackPress();
          })
          .margin({ right: 16 })

        Text('任务详情')
          .fontSize(18)
          .fontWeight(FontWeight.Medium)
          .flexGrow(1)
      }
      .width('100%')
      .height(56)
      .padding({ left: 16, right: 16 })
      .alignItems(VerticalAlign.Center)
      .backgroundColor('#F8F9FA')

      // 详情内容
      Column() {
        // 任务名称
        Column() {
          Text('任务名称')
            .fontSize(14)
            .fontColor('#666666')
            .alignSelf(ItemAlign.Start)
            .margin({ bottom: 8 })

          Text(this.taskData.name)
            .fontSize(16)
            .fontColor('#333333')
            .fontWeight(FontWeight.Medium)
            .alignSelf(ItemAlign.Start)
            .width('100%')
            .padding(12)
            .backgroundColor('#F8F9FA')
            .borderRadius(8)
        }
        .width('100%')
        .alignItems(HorizontalAlign.Start)
        .margin({ bottom: 24 })

        // 开始时间
        Column() {
          Text('开始时间')
            .fontSize(14)
            .fontColor('#666666')
            .alignSelf(ItemAlign.Start)
            .margin({ bottom: 8 })

          Text(this.taskData.startDate)
            .fontSize(16)
            .fontColor('#333333')
            .alignSelf(ItemAlign.Start)
            .width('100%')
            .padding(12)
            .backgroundColor('#F8F9FA')
            .borderRadius(8)
        }
        .width('100%')
        .alignItems(HorizontalAlign.Start)
        .margin({ bottom: 24 })

        // 结束时间
        Column() {
          Text('结束时间')
            .fontSize(14)
            .fontColor('#666666')
            .alignSelf(ItemAlign.Start)
            .margin({ bottom: 8 })

          Text(this.taskData.endDate)
            .fontSize(16)
            .fontColor('#333333')
            .alignSelf(ItemAlign.Start)
            .width('100%')
            .padding(12)
            .backgroundColor('#F8F9FA')
            .borderRadius(8)
        }
        .width('100%')
        .alignItems(HorizontalAlign.Start)
        .margin({ bottom: 24 })

        // 任务类型
        Column() {
          Text('任务类型')
            .fontSize(14)
            .fontColor('#666666')
            .alignSelf(ItemAlign.Start)
            .margin({ bottom: 8 })

          Row() {
            Text(this.taskData.type)
              .fontSize(14)
              .fontColor('#FFFFFF')
              .backgroundColor(this.taskData.type === '工作' ? '#FF6B35' : '#4CAF50')
              .borderRadius(20)
              .padding({ left: 16, right: 16, top: 6, bottom: 6 })
          }
          .width('100%')
        }
        .width('100%')
        .alignItems(HorizontalAlign.Start)
        .margin({ bottom: 24 })

        // 任务状态
        Column() {
          Text('任务状态')
            .fontSize(14)
            .fontColor('#666666')
            .alignSelf(ItemAlign.Start)
            .margin({ bottom: 8 })

          Row() {
            Text(this.taskData.status)
              .fontSize(14)
              .fontColor('#FFFFFF')
              .backgroundColor('#2196F3')
              .borderRadius(20)
              .padding({ left: 16, right: 16, top: 6, bottom: 6 })
          }
          .width('100%')
        }
        .width('100%')
        .alignItems(HorizontalAlign.Start)
        .margin({ bottom: 40 })

      }
      .width('100%')
      .padding({ left: 16, right: 16, top: 24 })
      .flexGrow(1)
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#FFFFFF')
  }
}

// 任务信息接口
interface TaskInfo {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  type: string;
  status: string;
}