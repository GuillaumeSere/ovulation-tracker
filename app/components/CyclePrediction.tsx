import { predictCycle } from "../utils/predictCycle"
import { calculateDates } from "../utils/cycleCalculator"

export default function CyclePrediction({ cycles }: any) {

  const prediction = predictCycle(cycles)

  if (!prediction || cycles.length === 0)
    return <p>Aucun cycle enregistré</p>

  const lastCycle = cycles[cycles.length - 1]

  const dates = calculateDates(
    lastCycle.startDate,
    prediction.ovulationDay
  )

  return (

    <div className="bg-pink-50 p-4 rounded mt-6">

      <p>
        <strong>Cycle moyen :</strong>{" "}
        {prediction.averageCycle} jours
      </p>

      <p>
        <strong>Ovulation estimée :</strong>{" "}
        {dates.ovulation.toLocaleDateString()}
      </p>

      <p>
        <strong>Période fertile :</strong>{" "}
        {dates.fertileStart.toLocaleDateString()} -{" "}
        {dates.fertileEnd.toLocaleDateString()}
      </p>

      <p>
        <strong>Prochaines règles :</strong>{" "}
        {dates.nextPeriod.toLocaleDateString()}
      </p>

    </div>

  )
}