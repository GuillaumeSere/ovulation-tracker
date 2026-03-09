export interface Cycle {
  id: string
  startDate: string
  cycleLength: number
}

export interface Prediction {
  averageCycle: number
  ovulationDay: number
  fertileStart: number
  fertileEnd: number
}