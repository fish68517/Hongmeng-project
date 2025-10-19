@Entry
@Component
struct Page01 {
  @State message: string = 'Hello World';

  build() {
    RelativeContainer() {
      Row() {
        Text('row1')
      }
      .justifyContent(FlexAlign.Center)
      .width(100)
      .height(100)
      .backgroundColor('#a3cf62')
      .alignRules({
        left: { anchor: '__container__', align: HorizontalAlign.Start },
        bottom: { anchor: '__container__', align: VerticalAlign.Bottom }
      })
      .id("row1")

      Row() {
        Text('row2')
      }
      .justifyContent(FlexAlign.Center)
      .width(100)
      .height(100)
      .backgroundColor('#00ae9d')
      .alignRules({
        // right: { anchor: '__container__', align: HorizontalAlign.End},
        // top:{anchor:'__container__',align:VerticalAlign.Top}
        left: { anchor: 'row1', align: HorizontalAlign.End },
        bottom: { anchor: 'row1', align: VerticalAlign.Bottom }
      })
      .id("row2")
    }
    .width(300)
    .height(300)
    .margin({ 'left': 20 })
    .border({ 'width': 2, 'color': '#6699FF' })
  }
}