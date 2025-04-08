import { Inter } from 'next/font/google'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Providers } from './providers';

import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Your Website",
  description: "A website with header and footer components",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <Providers>
          {/* Header stays at the top */}
          {/* <Header /> */}
          
          {/* Main content takes remaining space */}
          <div className="flex-1 px-4">
            {children}
          </div>
          
          {/* Footer stays at the bottom */}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  )
}
