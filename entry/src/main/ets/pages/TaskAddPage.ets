import { router } from '@kit.ArkUI';
import { ParamType } from '../viewmodel/ParamType';
import { AddPageParam } from '../viewmodel/AddPageParam'
import { promptAction } from '@kit.ArkUI';

@Entry
@Component
struct TaskAddPage {
  @State taskName: string = '';
  @State startDate: string = '';
  @State endDate: string = '';
  @State taskType: string = '生活';

  aboutToAppear(): void {
    const params: object = router.getParams()
    //断言
    const myParam = params as ParamType<AddPageParam>
    console.log(`id=${myParam.value?.id}`)
  }

  // 返回上一页
  onBackPress() {
    router.back();
  }

  // 格式化日期
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // 验证表单
  validateForm(): boolean {
    if (!this.taskName.trim()) {
      promptAction.showToast({ message: '请输入任务名称' });
      return false;
    }
    if (!this.startDate) {
      promptAction.showToast({ message: '请选择开始日期' });
      return false;
    }
    if (!this.endDate) {
      promptAction.showToast({ message: '请选择结束日期' });
      return false;
    }
    if (new Date(this.startDate) > new Date(this.endDate)) {
      promptAction.showToast({ message: '开始日期不能晚于结束日期' });
      return false;
    }
    return true;
  }

  // 确认新增任务
  confirmAddTask() {
    if (this.validateForm()) {
      promptAction.showToast({ message: '新增任务成功！' });
      // 可以在这里添加返回上一页的逻辑
      setTimeout(() => {
        this.onBackPress();
      }, 1000);
    }
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

        Text('新增任务')
          .fontSize(18)
          .fontWeight(FontWeight.Medium)
          .flexGrow(1)
      }
      .width('100%')
      .height(56)
      .padding({ left: 16, right: 16 })
      .alignItems(VerticalAlign.Center)
      .backgroundColor('#F8F9FA')

      // 表单内容
      Column() {
        // 任务名称
        Column() {
          Text('任务名称')
            .fontSize(16)
            .fontWeight(FontWeight.Medium)
            .alignSelf(ItemAlign.Start)
            .margin({ bottom: 8 })

          TextInput({ placeholder: '请输入任务名称' })
            .width('100%')
            .height(48)
            .backgroundColor('#F5F5F5')
            .borderRadius(8)
            .onChange((value: string) => {
              this.taskName = value;
            })
        }
        .width('100%')
        .alignItems(HorizontalAlign.Start)
        .margin({ bottom: 24 })

        // 开始日期
        Column() {
          Text('开始日期')
            .fontSize(16)
            .fontWeight(FontWeight.Medium)
            .alignSelf(ItemAlign.Start)
            .margin({ bottom: 8 })

          DatePicker({
            start: new Date('2020-01-01'),
            end: new Date('2030-12-31'),
            selected: this.startDate ? new Date(this.startDate) : new Date()
          })
            .width('100%')
            .height(150)
            .backgroundColor('#F5F5F5')
            .borderRadius(8)
            .onDateChange((value: Date) => {
              this.startDate = this.formatDate(value);
            })
        }
        .width('100%')
        .alignItems(HorizontalAlign.Start)
        .margin({ bottom: 24 })

        // 结束日期
        Column() {
          Text('结束日期')
            .fontSize(16)
            .fontWeight(FontWeight.Medium)
            .alignSelf(ItemAlign.Start)
            .margin({ bottom: 8 })

          DatePicker({
            start: new Date('2020-01-01'),
            end: new Date('2030-12-31'),
            selected: this.endDate ? new Date(this.endDate) : new Date()
          })
            .width('100%')
            .height(150)
            .backgroundColor('#F5F5F5')
            .borderRadius(8)
            .onDateChange((value: Date) => {
              this.endDate = this.formatDate(value);
            })
        }
        .width('100%')
        .alignItems(HorizontalAlign.Start)
        .margin({ bottom: 24 })

        // 任务类型
        Column() {
          Text('任务类型')
            .fontSize(16)
            .fontWeight(FontWeight.Medium)
            .alignSelf(ItemAlign.Start)
            .margin({ bottom: 8 })

          Row() {
            Button('生活')
              .fontSize(14)
              .fontColor(this.taskType === '生活' ? '#FFFFFF' : '#666666')
              .backgroundColor(this.taskType === '生活' ? '#007AFF' : '#F5F5F5')
              .borderRadius(20)
              .height(36)
              .flexGrow(1)
              .onClick(() => {
                this.taskType = '生活';
              })

            Button('工作')
              .fontSize(14)
              .fontColor(this.taskType === '工作' ? '#FFFFFF' : '#666666')
              .backgroundColor(this.taskType === '工作' ? '#007AFF' : '#F5F5F5')
              .borderRadius(20)
              .height(36)
              .flexGrow(1)
              .margin({ left: 12 })
              .onClick(() => {
                this.taskType = '工作';
              })
          }
          .width('100%')
        }
        .width('100%')
        .alignItems(HorizontalAlign.Start)
        .margin({ bottom: 40 })

        // 确认按钮
        Button('确认新增')
          .width('100%')
          .height(48)
          .backgroundColor('#007AFF')
          .borderRadius(8)
          .fontSize(16)
          .fontWeight(FontWeight.Medium)
          .onClick(() => {
            this.confirmAddTask();
          })
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