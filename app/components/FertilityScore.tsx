"use client"

import { calculateFertilityScore } from "../utils/fertilityScore"

export default function FertilityScore({ ovulation }: any) {

  const score = calculateFertilityScore(ovulation)

  let message = "Fertilité faible"

  if (score > 60) message = "Fertilité très élevée"
  else if (score > 30) message = "Bonne fertilité"
  else if (score > 10) message = "Fertilité possible"

  return (

    <div className="bg-green-50 p-4 rounded mt-6">

      <h2 className="font-bold mb-2">

        Score de fertilité aujourd'hui

      </h2>

      <p className="text-xl font-bold">

        {score}%

      </p>

      <p>{message}</p>

    </div>

  )

}