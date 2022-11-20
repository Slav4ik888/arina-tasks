import { Task, Tasks } from '../../../../../../../model'


interface MockItem {
  description : string
  tasks       : Tasks
  task        : Task
}

type MockResult = boolean

interface Mock extends Array<MockItem | MockResult> {
  0: MockItem
  1: MockResult
}

export type Mocks = Mock[]
