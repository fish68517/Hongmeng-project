export class TaskModel {
  id: string = ''
  taskName = ''
  taskBeginDate: string = ''
  taskEndDate = ''
  //任务类型：1：生活类型，2：工作类型
  taskType: number = 1

  constructor(id: string, taskName: string, taskBeginDate: string,
    taskEndDate: string, taskType: number) {
    this.id = id
    this.taskName = taskName
    this.taskBeginDate = taskBeginDate
    this.taskEndDate = taskEndDate
    this.taskType = taskType
  }

  //产生数据
  static  createData(): TaskModel[] {
    const dataArray: Array<TaskModel> = []
    for (let i = 0; i < 10; i++) {
      const id = (i + 1).toString();
      const taskName = `计划要完成的任务${i + 1}`
      const taskBeginDate = '09:00'
      const taskEndDate = '12:00'
      let taskType: number = 1
      i % 2 == 0 ? taskType = 1 : taskType = 2
      const data: TaskModel = new TaskModel(id, taskName, taskBeginDate, taskEndDate, taskType)
      dataArray.push(data)
    }
    return dataArray
  }
}