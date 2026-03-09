export function generateCalendarEvents(
  startDate: string,
  ovulation: Date,
  fertileStart: Date,
  fertileEnd: Date,
  nextPeriod: Date
) {

  return [

    {
      title: "Ovulation",
      date: ovulation,
      color: "purple"
    },

    {
      title: "Début période fertile",
      date: fertileStart,
      color: "pink"
    },

    {
      title: "Fin période fertile",
      date: fertileEnd,
      color: "pink"
    },

    {
      title: "Prochaines règles",
      date: nextPeriod,
      color: "red"
    }

  ]
}