"use client"

import { useEffect, useState } from "react"
import CycleForm from "./components/CycleForm"
import CyclePrediction from "./components/CyclePrediction"
import CycleCalendar from "./components/CycleCalendar"
import FertilityScore from "./components/FertilityScore"
import ResetDataButton from "./components/ResetDataButton"

import { getCycles } from "./utils/storage"
import { predictCycle } from "./utils/predictCycle"
import { calculateDates } from "./utils/cycleCalculator"
import { generateCalendarEvents } from "./utils/calendarEvents"

export default function Home() {

    const [cycles, setCycles] = useState<any[]>([])
    const [events, setEvents] = useState<any[]>([])
    const [ovulationDate, setOvulationDate] = useState<Date | null>(null)

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

            setOvulationDate(dates.ovulation)

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

    const handleAdd = (cycle: any) => {
        const updated = [...cycles, cycle]
        setCycles(updated)

        // recalculer ovulation et calendrier
        const prediction = predictCycle(updated)
        const lastCycle = updated[updated.length - 1]

        const dates = calculateDates(
            lastCycle.startDate,
            prediction!.ovulationDay
        )

        setOvulationDate(dates.ovulation)

        const calendarEvents = generateCalendarEvents(
            lastCycle.startDate,
            dates.ovulation,
            dates.fertileStart,
            dates.fertileEnd,
            dates.nextPeriod
        )

        setEvents(calendarEvents)
    }

    const handleReset = () => {
        setCycles([])
        setEvents([])
        setOvulationDate(null)
    }

    return (

        <main
            className="relative text-gray-900 flex justify-center items-start sm:items-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/baby-background.jpg')",
                backgroundAttachment: "fixed"
            }}
        >
          
            <div className="sm:max-w-3xl w-full bg-[#ffffff67] p-4 sm:p-6 rounded shadow">

                <h1 className="text-2xl font-bold mb-4 text-center">
                    Ovulation Tracker
                </h1>

                {/* Formulaire pour ajouter un cycle */}
                <CycleForm onAdd={handleAdd} />

                {/* Prédiction du cycle */}
                <CyclePrediction cycles={cycles} />

                {/* Score de fertilité aujourd'hui */}
                {ovulationDate && <FertilityScore ovulation={ovulationDate} />}

                {/* Calendrier visuel */}
                <CycleCalendar events={events} />

                {/* Bouton réinitialiser */}
                <ResetDataButton onReset={handleReset} />

            </div>

        </main>

    )
}