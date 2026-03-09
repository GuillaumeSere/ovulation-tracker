"use client"

import { useEffect, useState } from "react"
import { getCycles, clearCycles } from "../utils/storage"
import { Cycle } from "../types/cycle"
import ResetDataButton from "../components/ResetDataButton"

export default function HistoryPage() {

  const [cycles, setCycles] = useState<Cycle[]>([])

  useEffect(() => {
    const stored = getCycles()
    setCycles(stored)
  }, [])

  const handleDeleteAll = () => {
    clearCycles()
    setCycles([])
  }

  return (
    <main className="min-h-screen  text-gray-900 flex justify-center p-10">

      <div className="max-w-3xl w-full bg-[#ffffff24] p-6 rounded shadow">

        <h1 className="text-2xl font-bold mb-6 text-center text-pink-600">
          Historique des cycles
        </h1>

        {cycles.length === 0 ? (
          <p className="text-center text-gray-500">
            Aucun cycle enregistré.
          </p>
        ) : (
          <div className="space-y-4">

            {cycles.map((cycle) => (
              <div
                key={cycle.id}
                className="flex justify-between items-center bg-pink-50 p-3 rounded shadow-sm"
              >
                <div>
                  <p><strong>Début des règles :</strong> {new Date(cycle.startDate).toLocaleDateString()}</p>
                  <p><strong>Durée du cycle :</strong> {cycle.cycleLength} jours</p>
                </div>
              </div>
            ))}

            {/* Bouton réinitialiser */}
            <ResetDataButton onReset={handleDeleteAll} />

          </div>
        )}

      </div>

    </main>
  )
}