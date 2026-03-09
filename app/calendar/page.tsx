"use client"

import { useEffect, useState } from "react"
import CycleCalendar from "../components/CycleCalendar"
import { getCycles } from "../utils/storage"
import { predictCycle } from "../utils/predictCycle"
import { calculateDates } from "../utils/cycleCalculator"
import { generateCalendarEvents } from "../utils/calendarEvents"

export default function CalendarPage() {

  const [cycles, setCycles] = useState<any[]>([])
  const [events, setEvents] = useState<any[]>([])

  useEffect(() => {

    const stored = getCycles()
    setCycles(stored)

    if (stored.length > 0) {

      const prediction = predictCycle(stored)
      const lastCycle = stored[stored.length - 1]

      const dates = calculateDates(
        lastCycle.startDate,
        prediction!.ovulationDay
      )

      const calendarEvents = generateCalendarEvents(
        lastCycle.startDate,
        dates.ovulation,
        dates.fertileStart,
        dates.fertileEnd,
        dates.nextPeriod
      )

      setEvents(calendarEvents)
    }

  }, [])

  return (
    <main className="min-h-screen text-gray-900 flex justify-center p-10">

      <div className="max-w-3xl w-full bg-[#ffffff24] p-6 rounded shadow">

        <h1 className="text-2xl font-bold mb-6 text-center text-pink-600">
          Calendrier du cycle
        </h1>

        {events.length === 0 ? (
          <p className="text-center text-gray-500">
            Aucun cycle enregistré pour afficher le calendrier.
          </p>
        ) : (
          <CycleCalendar events={events} />
        )}

      </div>

    </main>
  )
}