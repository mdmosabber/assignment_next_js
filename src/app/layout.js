import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })


export async function generateMetadata(){
  const response = await fetch(process.env.BASE_URL+"api/SiteMeta/home");
  const jsonData = await response.json();

  return{
      title : jsonData[0]['title'],
      description : jsonData[0]['description'],
      keywords : jsonData[0]['keywords'],
      openGraph: {
          images: jsonData[0]['image'],
      },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

       
        {children}

        <Footer />
        
        </body>
    </html>
  )
}
