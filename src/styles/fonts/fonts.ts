import { Nunito_Sans } from 'next/font/google'
import localFont from 'next/font/local'


const nunitoSans = Nunito_Sans({subsets: ['latin']})

const kanitCyrillic = localFont({ src: './Kanit_Cyrillic.ttf' })

export { nunitoSans, kanitCyrillic }