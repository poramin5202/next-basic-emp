import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeaderApp from '@/components/HeaderApp'
import FooterApp from '@/components/FooterApp'
import ListEmp from '@/components/ListEmp'
import 'bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <HeaderApp />
    <ListEmp />
   <FooterApp />
    </>
  )
}
