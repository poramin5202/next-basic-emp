import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ListEmp from '@/components/ListEmp'
import 'bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <ListEmp />
    </>
  )
}
