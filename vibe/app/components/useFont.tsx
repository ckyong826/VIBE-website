import { Roboto_Condensed } from 'next/font/google'
import { Archivo_Black } from 'next/font/google'
import { Racing_Sans_One } from 'next/font/google'
import { Bad_Script } from 'next/font/google'

const roboto_con = Roboto_Condensed({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const roboto_con_bold = Roboto_Condensed({
  weight: ['700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const archivo_black = Archivo_Black({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const racing_sans_one = Racing_Sans_One({
  weight: [ '400'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const bad_script = Bad_Script({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

export { roboto_con, archivo_black, racing_sans_one, bad_script, roboto_con_bold }