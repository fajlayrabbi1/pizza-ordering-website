import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({weight: ['100','300','400','500','700','900'], subsets: ['latin'], display: 'swap'})

export const metadata = {
  title: 'New Pizza Hut',
  description: 'Delicious pizza delivered to your door.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
