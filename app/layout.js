import Notification from '@/components/Notification'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Resturant',
  description: 'Resturant app ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-be-installed={true}>
      <body className={inter.className}  suppressHydrationWarning={true}>
      <Notification/>
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
