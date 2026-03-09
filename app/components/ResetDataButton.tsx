"use client"

import { clearCycles } from "../utils/storage"

export default function ResetDataButton({ onReset }: any) {

  const handleReset = () => {

    const confirmReset = confirm(
      "Voulez-vous vraiment supprimer toutes les données ?"
    )

    if (!confirmReset) return

    clearCycles()

    onReset()

  }

  return (

    <button
      onClick={handleReset}
      className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
    >

      Réinitialiser les données

    </button>

  )

}