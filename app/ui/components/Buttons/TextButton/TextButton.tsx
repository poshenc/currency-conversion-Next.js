import { ButtonHTMLAttributes, FunctionComponent } from 'react'
import styles from './TextButton.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { }

const TextButton: FunctionComponent<Props> = ({ className = '', children, ...props }) => {
    return (
        <button {...props} className={`${styles.button} ${className}`}>
            {children}
        </button>
    )
}

export default TextButton