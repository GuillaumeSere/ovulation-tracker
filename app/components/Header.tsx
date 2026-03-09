"use client"

import { useState } from "react"

export default function Header() {

  const [open, setOpen] = useState(false)

  return (

    <header className="bg-white text-pink-600 shadow">

      <div className="max-w-6xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}

          <h1 className="text-xl font-bold text-pink-600">

            Ovulation Tracker

          </h1>

          {/* Menu desktop */}

          <nav className="hidden md:flex space-x-6">

            <a href="/" className="hover:text-pink-600">
              Accueil
            </a>

            <a href="/calendar" className="hover:text-pink-600">
              Calendrier
            </a>

            <a href="/history" className="hover:text-pink-600">
              Historique
            </a>

            <a href="/advice" className="hover:text-pink-600">
              Conseils
            </a>

          </nav>

          {/* bouton mobile */}

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >

            ☰

          </button>

        </div>

      </div>

      {/* menu mobile */}

      {open && (

        <div className="md:hidden bg-white border-t">

          <nav className="flex flex-col p-4 space-y-3">

            <a href="#" className="hover:text-pink-600">
              Accueil
            </a>

            <a href="#" className="hover:text-pink-600">
              Calendrier
            </a>

            <a href="#" className="hover:text-pink-600">
              Historique
            </a>

            <a href="#" className="hover:text-pink-600">
              Conseils
            </a>

          </nav>

        </div>

      )}

    </header>

  )
}