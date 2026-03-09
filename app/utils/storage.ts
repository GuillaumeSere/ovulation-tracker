import { Cycle } from "../types/cycle"

const STORAGE_KEY = "cycles"

export function getCycles(): Cycle[] {

  if (typeof window === "undefined") return []

  const data = localStorage.getItem(STORAGE_KEY)

  return data ? JSON.parse(data) : []
}

export function saveCycle(cycle: Cycle) {

  const cycles = getCycles()

  const updated = [...cycles, cycle]

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  )
}

export function clearCycles() {

  if (typeof window === "undefined") return

  localStorage.removeItem("cycles")

}