"use client"

import { useEffect, useState } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import listPlugin from "@fullcalendar/list"

export default function CycleCalendar({ events }: any) {

    const [view, setView] = useState("dayGridMonth")

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < 640) {
                setView("listWeek") // meilleur pour mobile
            } else {
                setView("dayGridMonth")
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)

    }, [])

    return (

        <div className="mt-8">

            <FullCalendar
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,dayGridWeek,listWeek"
                }}
                plugins={[dayGridPlugin, listPlugin]}
                initialView={view}
                events={events}
                height="auto"
                dayMaxEventRows={false}
                eventDisplay="block"
                contentHeight="auto"
            />

        </div>

    )

}