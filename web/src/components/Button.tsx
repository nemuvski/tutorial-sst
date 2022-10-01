import { CgSpinner } from 'react-icons/cg'
import * as styles from './Button.css'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  variant?: keyof typeof styles.button
}

export default function Button({
  type,
  children,
  className = '',
  loading = false,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const baseClassName = styles.button[variant]

  return (
    <button type={type} className={`${baseClassName} ${className}`} {...props}>
      {loading && <CgSpinner className={styles.spinner} />}
      {children}
    </button>
  )
}
