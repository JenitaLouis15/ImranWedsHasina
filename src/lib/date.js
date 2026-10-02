import { wedding } from '../data/wedding.js'

const d = new Date(wedding.dateIso)

export const dateShort = d.toLocaleDateString('en-IN', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export const timeLabel = d.toLocaleTimeString('en-IN', {
  hour: 'numeric',
  minute: '2-digit',
})

const pad = (n) => String(n).padStart(2, '0')
const stamp = (x) =>
  `${x.getFullYear()}${pad(x.getMonth() + 1)}${pad(x.getDate())}T${pad(x.getHours())}${pad(x.getMinutes())}00`

export function downloadCalendar() {
  const end = new Date(d.getTime() + 2 * 3600000)
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `DTSTART:${stamp(d)}`,
    `DTEND:${stamp(end)}`,
    'SUMMARY:Nikkah of Imran & Hasina',
    `LOCATION:${wedding.venue.name} ${wedding.venue.address}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }))
  const a = document.createElement('a')
  a.href = url
  a.download = 'Nikkah.ics'
  a.click()
  URL.revokeObjectURL(url)
}