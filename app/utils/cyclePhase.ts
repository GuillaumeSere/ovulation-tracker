import { Cycle } from "../types/cycle"
import { calculateDates } from "./cycleCalculator"
import { predictCycle } from "./predictCycle"

export type CyclePhaseKey =
  | "menstruation"
  | "follicular"
  | "fertile"
  | "ovulation"
  | "luteal"

export interface CyclePhase {
  key: CyclePhaseKey
  title: string
  label: string
  image: string
  summary: string
  tips: string[]
}

const phaseContent: Record<CyclePhaseKey, CyclePhase> = {
  menstruation: {
    key: "menstruation",
    title: "Phase menstruelle",
    label: "Repos et récupération",
    image: "/cycle-menstruation.png",
    summary:
      "Le corps évacue l'endomètre. C'est souvent le bon moment pour alléger le rythme et écouter les signaux physiques.",
    tips: [
      "Privilégiez le repos, la chaleur douce et une bonne hydratation.",
      "Misez sur des aliments riches en fer comme les lentilles, les épinards ou les oeufs.",
      "Notez douleurs, flux et humeur pour repérer les variations d'un cycle à l'autre."
    ]
  },
  follicular: {
    key: "follicular",
    title: "Phase folliculaire",
    label: "Énergie qui revient",
    image: "/cycle-follicular.png",
    summary:
      "Après les règles, les hormones remontent progressivement. Beaucoup de personnes ressentent plus de clarté et d'élan.",
    tips: [
      "Reprenez doucement l'activité physique si vous vous sentez en forme.",
      "Planifiez les tâches qui demandent de l'énergie ou de la concentration.",
      "Gardez une alimentation variée pour accompagner la maturation folliculaire."
    ]
  },
  fertile: {
    key: "fertile",
    title: "Fenêtre fertile",
    label: "Chances de conception plus hautes",
    image: "/cycle-fertile.png",
    summary:
      "Les jours qui précèdent l'ovulation sont les plus favorables, car les spermatozoïdes peuvent survivre plusieurs jours.",
    tips: [
      "Si vous souhaitez concevoir, ce sont les jours à privilégier pour les rapports.",
      "Observez la glaire cervicale : elle peut devenir plus claire, filante et abondante.",
      "Dormez suffisamment et limitez autant que possible le stress intense."
    ]
  },
  ovulation: {
    key: "ovulation",
    title: "Ovulation estimée",
    label: "Pic de fertilité",
    image: "/cycle-ovulation.png",
    summary:
      "L'ovulation correspond à la libération probable de l'ovule. L'estimation reste indicative, surtout si les cycles varient.",
    tips: [
      "Pour concevoir, les rapports autour de cette date sont les plus stratégiques.",
      "Un test d'ovulation peut aider à confirmer le pic de LH.",
      "Une légère douleur d'un côté ou une libido plus présente peuvent parfois apparaître."
    ]
  },
  luteal: {
    key: "luteal",
    title: "Phase lutéale",
    label: "Stabilité et préparation",
    image: "/cycle-luteal.png",
    summary:
      "Après l'ovulation, la progestérone augmente. Le corps se prépare soit à une grossesse, soit au prochain cycle.",
    tips: [
      "Favorisez les routines régulières : sommeil, repas, mouvement doux.",
      "Si le SPM apparaît, réduisez caféine, alcool et repas très salés.",
      "Continuez à noter humeur, seins sensibles, fatigue ou crampes."
    ]
  }
}

function startOfDay(date: Date) {
  const copy = new Date(date)
  copy.setHours(0, 0, 0, 0)
  return copy
}

function addDays(date: Date, days: number) {
  const copy = new Date(date)
  copy.setDate(copy.getDate() + days)
  return copy
}

function isSameDay(a: Date, b: Date) {
  return startOfDay(a).getTime() === startOfDay(b).getTime()
}

function isBetween(date: Date, start: Date, end: Date) {
  const current = startOfDay(date).getTime()
  return current >= startOfDay(start).getTime() && current <= startOfDay(end).getTime()
}

export function getCurrentCyclePhase(cycles: Cycle[], today = new Date()) {
  if (cycles.length === 0) return null

  const prediction = predictCycle(cycles)
  const lastCycle = cycles[cycles.length - 1]

  if (!prediction || !lastCycle) return null

  const dates = calculateDates(
    lastCycle.startDate,
    prediction.ovulationDay,
    prediction.averageCycle
  )

  const periodEnd = addDays(new Date(lastCycle.startDate), 4)
  let key: CyclePhaseKey = "luteal"

  if (isBetween(today, new Date(lastCycle.startDate), periodEnd)) {
    key = "menstruation"
  } else if (isSameDay(today, dates.ovulation)) {
    key = "ovulation"
  } else if (isBetween(today, dates.fertileStart, dates.fertileEnd)) {
    key = "fertile"
  } else if (startOfDay(today) < startOfDay(dates.fertileStart)) {
    key = "follicular"
  }

  return {
    ...phaseContent[key],
    dates
  }
}

export const cyclePhases = Object.values(phaseContent)
