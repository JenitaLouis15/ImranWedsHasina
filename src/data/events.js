import { wedding } from './wedding.js'

/* Date + time of the Marriage always come from wedding.js (dateIso) */
const d = new Date(wedding.dateIso || '2026-10-25T10:00:00')

/* Reception (Walima): 26 Oct 2026, 11:30 AM */
const r = new Date('2026-10-26T11:30:00')

const fmtDate = (x) =>
  x.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

const fmtTime = (x) =>
  x.toLocaleTimeString('en-IN', {
    hour: 'numeric',
    minute: '2-digit',
  }).toUpperCase()

/* Nikkah venue */
const NIKKAH_VENUE = {
  venue: 'Rathna Thirumana Mandapam',
  address:
    'No. 31, Ariyandipatti Road, Valayapatti, Ponnamaravathi West, Tamil Nadu 622411',
  embedQuery:
    'RATHNA THIRUMANA MANDAPAM, Ariyandipatti Road, Ponnamaravathi, Tamil Nadu 622411',
}

/* Reception venue */
const RECEPTION_VENUE = {
  venue: 'Geo Palace',
  address: 'Anna Chattiram, Sivagami Aachi Nagar, Pudukkottai, Tamil Nadu 622003',
  embedQuery: 'Geo Palace, Sivagami Aachi Nagar, Pudukkottai, Tamil Nadu 622003',
}

/* Islamic blessing shown above the venues */
export const VERSE = {
  arabic:
    'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',

  english:
    'And among His signs is that He created for you spouses from among yourselves, that you may find tranquility in them, and He placed between you love and mercy.',

  ref: 'Surah Ar-Rum 30:21',
}

/* Events */
export const EVENTS = [
  {
    key: 'marriage',
    tag: 'Nikkah',
    title: 'The Marriage',
    date: fmtDate(d),
    time: fmtTime(d),
    venue: NIKKAH_VENUE.venue,
    address: NIKKAH_VENUE.address,
    mapUrl: 'https://maps.app.goo.gl/CN5CuLt1MQmuJ7as9?g_st=aw',
    embedQuery: NIKKAH_VENUE.embedQuery,
  },

  {
    key: 'reception',
    tag: 'Walima',
    title: 'Wedding Reception',
    date: fmtDate(r),
    time: fmtTime(r),
    venue: RECEPTION_VENUE.venue,
    address: RECEPTION_VENUE.address,
    mapUrl: 'https://maps.app.goo.gl/Z5Cvwzr4BMgHrg3P7',
    embedQuery: RECEPTION_VENUE.embedQuery,
  },
]