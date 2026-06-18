// app/advice/page.tsx
"use client"

import { useEffect, useState } from "react"
import PhaseAdvice from "../components/PhaseAdvice"
import { Cycle } from "../types/cycle"
import { cyclePhases } from "../utils/cyclePhase"
import { getCycles } from "../utils/storage"

const adviceSections = [
  {
    title: "Avant la grossesse",
    intro: "Les bases à stabiliser avant de chercher à concevoir.",
    items: [
      "Prendre de l'acide folique quotidiennement, sur avis médical.",
      "Avoir une alimentation équilibrée riche en vitamines et minéraux.",
      "Éviter l'alcool et le tabac autant que possible.",
      "Faire un point avec un professionnel de santé si besoin."
    ]
  },
  {
    title: "Cycle et fertilité",
    intro: "Les repères qui aident à mieux comprendre les jours fertiles.",
    items: [
      "Suivre les dates de règles et la durée moyenne du cycle.",
      "Observer la glaire cervicale, l'énergie, l'humeur et les douleurs.",
      "Consulter si les cycles deviennent très irréguliers ou douloureux."
    ]
  },
  {
    title: "Équilibre émotionnel",
    intro: "Des habitudes simples pour réduire la charge mentale.",
    items: [
      "Utiliser la respiration, la marche ou le yoga doux pour gérer le stress.",
      "Préserver un sommeil régulier, surtout après l'ovulation.",
      "Parler de ses attentes et de ses inquiétudes avec son partenaire."
    ]
  },
  {
    title: "Ressources utiles",
    intro: "Pour compléter le suivi sans remplacer un avis médical.",
    items: [
      "Privilégier les sources de santé fiables et actualisées.",
      "Préparer ses questions avant un rendez-vous médical.",
      "Noter les symptômes inhabituels pour en parler clairement."
    ]
  }
]

export default function AdvicePage() {
  const [cycles, setCycles] = useState<Cycle[]>([])

  useEffect(() => {
    setCycles(getCycles())
  }, [])

  return (
    <main className="min-h-screen px-4 py-8 text-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl rounded bg-white/70 p-4 shadow sm:p-6">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-pink-600">
            Conseils et parentalité
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-950">
            Des repères simples pour chaque moment du cycle
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-700 sm:text-base">
            Retrouvez le conseil le plus pertinent pour aujourd'hui, puis parcourez les
            grandes phases du cycle et les habitudes utiles au quotidien.
          </p>
        </header>

        <section className="mt-8">
          <PhaseAdvice cycles={cycles} />
        </section>

        <section className="mt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-pink-600">
                Phases du cycle
              </p>
              <h2 className="text-2xl font-bold text-gray-950">
                Comprendre ce qui change
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-gray-700">
              Chaque phase a ses signaux, son rythme et ses besoins. Ces cartes
              donnent une vue d'ensemble rapide.
            </p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cyclePhases.map((phase) => (
              <article
                key={phase.key}
                className="overflow-hidden rounded bg-white/95 shadow-sm"
              >
                <img
                  src={phase.image}
                  alt=""
                  className="h-36 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-pink-600">
                    {phase.label}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-gray-950">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {phase.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-pink-600">
              Conseils pratiques
            </p>
            <h2 className="text-2xl font-bold text-gray-950">
              Les habitudes qui soutiennent le suivi
            </h2>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {adviceSections.map((section) => (
              <article key={section.title} className="rounded bg-pink-50/95 p-4 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">{section.title}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-700">{section.intro}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-800">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
