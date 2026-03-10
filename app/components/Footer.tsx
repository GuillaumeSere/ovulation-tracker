// app/components/Footer.tsx
"use client"

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-gray-700 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">

        {/* Left */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ovulation Tracker. Tous droits réservés.
        </p>

        {/* Right - liens */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-pink-600 text-sm">Accueil</a>
          <a href="/calendar" className="hover:text-pink-600 text-sm">Calendrier</a>
          <a href="/history" className="hover:text-pink-600 text-sm">Historique</a>
          <a href="/advice" className="hover:text-pink-600 text-sm">Conseils</a>
        </div>

      </div>
    </footer>
  )
}