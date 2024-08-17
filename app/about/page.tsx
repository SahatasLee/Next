import Image from "next/image"
import styles from "./about.module.css"

const page = () => {
  return (
    <main>
      <div className={styles.imgContainer}>
        <Image src="/devops_logo.png" alt="devops_logo" fill priority={true}/>
      </div>
    </main>
  )
}

export default page