import styles from '@/app/ui/components/Common/Button/button.module.css'
export type ButtonType = {
  label?: string
  url?: string
}

function Button({ label, url }: ButtonType) {
  return (
    <div style={{display: 'flex'}}>
      <a href={url} className={styles.a}>
        <span className={styles.span}>{label}</span>
      </a>
    </div>
  )
}

export default Button