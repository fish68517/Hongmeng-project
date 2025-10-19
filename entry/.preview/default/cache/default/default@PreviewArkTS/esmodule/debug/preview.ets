struct preview{build(){Stack() {
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
      .onClick(this.handleToAddPage)}}