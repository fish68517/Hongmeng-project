//要导出组件
//自定义组件
@Component
export struct TaskStatisties {
  build() {
    Row() {
      //已完成和等待中
      Column() {
        //已完成
        Row() {
          Text('已完成')
            .fontColor($r('app.color.text_color'))
            .fontWeight(FontWeight.Bold)
          Text('0任务')
            .fontColor($r('app.color.text_color'))
            .fontWeight(FontWeight.Bold)
        }
        .width('100%')
        .height(164)
        //Row或者Column可以设置背景图片
        .backgroundImage($r('app.media.aa2'))
        //设置背景图片大小
        .backgroundImageSize(ImageSize.Cover)
        //圆角
        .borderRadius(10)
        //设置侧轴中子元素排列顺序
        .alignItems(VerticalAlign.Top)
        //设置主轴方向留白均分
        .justifyContent(FlexAlign.SpaceBetween)
        .padding({ left: 10, right: 10 })

        //等待中
        Row() {
          Text('等待中')
            .fontColor($r('app.color.text_color'))
            .fontWeight(FontWeight.Bold)
          Text('5任务')
            .fontColor($r('app.color.text_color'))
            .fontWeight(FontWeight.Bold)
        }
        .width('100%')
        .height(128)
        //Row或者Column可以设置背景图片
        .backgroundImage($r('app.media.bb2'))
        //设置背景图片大小
        .backgroundImageSize(ImageSize.Contain)
        //圆角
        .borderRadius(10)
        //设置侧轴中子元素排列顺序
        .alignItems(VerticalAlign.Top)
        //设置主轴方向留白均分
        .justifyContent(FlexAlign.SpaceBetween)
        .padding({ left: 10, right: 10 })
      }
      .width('49%')
      .justifyContent(FlexAlign.SpaceBetween)
      .height('100%')

      //未完成和未来任务
      Column() {
        //未完成
        Row(){
          Text('未完成')
            .fontColor($r('app.color.text_color'))
            .fontWeight(FontWeight.Bold)
          Text('92任务')
            .fontColor($r('app.color.text_color'))
            .fontWeight(FontWeight.Bold)
        }
        .width('100%')
        .height(128)
        .backgroundImage($r('app.media.cc2'))
        .backgroundImageSize(ImageSize.FILL)
        .borderRadius(10)
        .alignItems(VerticalAlign.Top)
        .justifyContent(FlexAlign.SpaceBetween)
        .padding({left:10,right:10})
        //未来任务
        Row(){
          Text('未来任务')
            .fontColor($r('app.color.text_color'))
            .fontWeight(FontWeight.Bold)
          Text('3任务')
            .fontColor($r('app.color.text_color'))
            .fontWeight(FontWeight.Bold)
        }
        .width('100%')
        .height(164)
        .backgroundImage($r('app.media.dd2'))
        .backgroundImageSize(ImageSize.Contain)
        //.borderRadius(10)
        .alignItems(VerticalAlign.Top)
        .justifyContent(FlexAlign.SpaceBetween)
        .padding({left:10,right:10})
      }
      .width('49%')
      .height('100%')
      .justifyContent(FlexAlign.SpaceBetween)
    }
    .width('100%')
    //主轴上内容排列
    .justifyContent(FlexAlign.SpaceBetween)
    .height(300)
  }
}