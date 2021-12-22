import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Optimized image from Meds</h2>
      <div>
        <Image
          src="https://media.meds.se/meds/images/maxx-27397425-g-2019-11-13-111615299/455/360/0/dr-hauschka-lip-balm-4-5ml.jpg"
          width={100}
          height={100}
          alt='Image from meds.se'
          unoptimized={false}
        />
      </div>

      <h2>Unoptimized image from Meds</h2>
      <div>
        <Image
          src="https://media.meds.se/meds/images/maxx-27397425-g-2019-11-13-111615299/455/360/0/dr-hauschka-lip-balm-4-5ml.jpg"
          width={100}
          height={100}
          alt='Image from meds.se'
          unoptimized={true}
        />
      </div>
    </div>
  )
}
