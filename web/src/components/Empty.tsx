import * as styles from './Empty.css'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Empty(props: Props) {
  return (
    <div className={styles.empty}>
      <p>{props.children}</p>
    </div>
  )
}
