import { Cycle, Prediction } from "../types/cycle"

export function predictCycle(cycles: Cycle[]): Prediction | null {

  if (cycles.length === 0) return null

  const lengths = cycles.map(c => c.cycleLength)

  const avg =
    lengths.reduce((a, b) => a + b, 0) / lengths.length

  const shortest = Math.min(...lengths)
  const longest = Math.max(...lengths)

  const ovulationDay = Math.round(avg - 14)

  const fertileStart = shortest - 18
  const fertileEnd = longest - 11

  return {
    averageCycle: Math.round(avg),
    ovulationDay,
    fertileStart,
    fertileEnd
  }
}