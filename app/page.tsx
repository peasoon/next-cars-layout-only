import Image from 'next/image'
import styles from './page.module.css'
import Overview from './_components/overview'
import Articles from './_components/articles'
import MostPopular from './_components/most-popular'

export default function Home() {
  return (
    <main>
      <Overview />
      <Articles />
      <MostPopular />
    </main>
  )
}
