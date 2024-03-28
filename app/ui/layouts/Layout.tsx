"use client"

import styles from "./Layout.module.css";

const Layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        {children}
      </div>
    </div>
  )
}

export default Layout