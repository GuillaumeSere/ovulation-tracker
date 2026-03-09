"use client"

import { useState } from "react"
import { saveCycle } from "../utils/storage"
import { v4 as uuid } from "uuid"

export default function CycleForm({ onAdd }: any) {

  const [startDate, setStartDate] = useState("")
  const [cycleLength, setCycleLength] = useState(28)

  const handleSubmit = (e: any) => {

    e.preventDefault()

    const newCycle = {
      id: uuid(),
      startDate,
      cycleLength
    }

    saveCycle(newCycle)

    onAdd(newCycle)

    setStartDate("")
  }

  return (

    <form onSubmit={handleSubmit} className="space-y-4">

      <div>

        <label>Premier jour des règles</label>

        <input
          type="date"
          className="border p-2 w-full"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

      </div>

      <div>

        <label>Durée du cycle</label>

        <input
          type="number"
          className="border p-2 w-full"
          value={cycleLength}
          onChange={(e) =>
            setCycleLength(Number(e.target.value))
          }
        />

      </div>

      <button
        className="bg-pink-500 text-white px-4 py-2 rounded"
      >
        Ajouter cycle
      </button>

    </form>

  )
}