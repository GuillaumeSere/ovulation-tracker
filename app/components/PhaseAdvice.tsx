"use client"

import { Cycle } from "../types/cycle"
import { getCurrentCyclePhase } from "../utils/cyclePhase"

export default function PhaseAdvice({ cycles }: { cycles: Cycle[] }) {
  const phase = getCurrentCyclePhase(cycles)

  if (!phase) {
    return (
      <section className="mt-6 overflow-hidden rounded bg-white/85 shadow-sm">
        <div className="p-4 sm:p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-pink-600">
            Conseils du moment
          </p>
          <h2 className="mt-1 text-xl font-bold text-gray-900">
            Ajoutez un cycle pour recevoir des conseils personnalisés
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            L'application adaptera les conseils selon la phase actuelle de votre cycle.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="mt-6 overflow-hidden rounded bg-white/90 shadow-sm">
      <img
        src={phase.image}
        alt=""
        className="h-44 w-full object-cover sm:h-56"
      />

      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-pink-600">
            Conseils du moment
          </p>
          <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700">
            {phase.label}
          </span>
        </div>

        <h2 className="mt-2 text-xl font-bold text-gray-900">{phase.title}</h2>
        <p className="mt-2 text-sm leading-6 text-gray-700">{phase.summary}</p>

        <ul className="mt-4 space-y-2 text-sm text-gray-800">
          {phase.tips.map((tip) => (
            <li key={tip} className="flex gap-2">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink-500" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
