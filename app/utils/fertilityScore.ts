export function calculateFertilityScore(
  ovulationDate: Date
) {

  const today = new Date()

  const diffTime =
    ovulationDate.getTime() - today.getTime()

  const diffDays =
    Math.round(diffTime / (1000 * 60 * 60 * 24))

  const table: Record<number, number> = {

    "-5": 10,
    "-4": 16,
    "-3": 30,
    "-2": 45,
    "-1": 60,
    "0": 80,
    "1": 30

  }

  const score = table[diffDays] || 0

  return score
}