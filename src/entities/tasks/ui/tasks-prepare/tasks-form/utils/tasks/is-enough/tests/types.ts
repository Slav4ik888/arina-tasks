
interface MockItem {
  description : string
  amount      : number
  min         : number
  max         : number
}

type MockResult = boolean

interface Mock extends Array<MockItem | MockResult> {
  0: MockItem
  1: MockResult
}

export type Mocks = Mock[]
