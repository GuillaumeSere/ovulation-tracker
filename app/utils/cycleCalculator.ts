export function calculateDates(
  startDate: string,
  ovulationDay: number
) {

  const start = new Date(startDate)

  const ovulation = new Date(start)
  ovulation.setDate(start.getDate() + ovulationDay)

  const fertileStart = new Date(ovulation)
  fertileStart.setDate(ovulation.getDate() - 5)

  const fertileEnd = new Date(ovulation)
  fertileEnd.setDate(ovulation.getDate() + 1)

  const nextPeriod = new Date(start)
  nextPeriod.setDate(start.getDate() + 28)

  return {
    ovulation,
    fertileStart,
    fertileEnd,
    nextPeriod
  }
}