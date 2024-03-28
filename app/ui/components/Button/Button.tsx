import { ButtonHTMLAttributes, FunctionComponent } from 'react'
import styles from './Button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button: FunctionComponent<Props> = ({ className = '', children, ...props }) => {
    return (
        <button {...props} className={`${styles.button} ${className}`}>
            {children}
        </button>
    )
}

export default Button