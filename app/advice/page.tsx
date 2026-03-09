// app/advice/page.tsx
"use client"

export default function AdvicePage() {
  const adviceSections = [
    {
      title: "Avant la grossesse",
      items: [
        "Prendre de l'acide folique quotidiennement",
        "Avoir une alimentation équilibrée riche en vitamines",
        "Éviter l'alcool et le tabac",
        "Faire un suivi médical régulier"
      ]
    },
    {
      title: "Cycle et fertilité",
      items: [
        "Suivre son cycle pour connaître ses jours fertiles",
        "Maintenir une régularité des cycles",
        "Consulter un gynécologue si cycles irréguliers"
      ]
    },
    {
      title: "Santé émotionnelle et parentalité",
      items: [
        "Gérer le stress avec la respiration ou le yoga",
        "Pratiquer une activité physique douce",
        "Se préparer mentalement à la parentalité"
      ]
    },
    {
      title: "Ressources utiles",
      items: [
        "Sites fiables sur la fertilité et grossesse",
        "Livres et guides pour futurs parents",
        "Applications pour suivre la nutrition et la santé du bébé"
      ]
    }
  ]

  return (
    <main className="min-h-screen text-gray-900 flex justify-center p-10">
      <div className="max-w-3xl w-full bg-[#ffffff24] p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center text-pink-600">
          Conseils et parentalité
        </h1>

        <div className="space-y-6">
          {adviceSections.map((section) => (
            <div key={section.title} className="bg-pink-50 p-4 rounded shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {section.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}