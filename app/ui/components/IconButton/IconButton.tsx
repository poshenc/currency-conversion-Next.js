import { ButtonHTMLAttributes, FunctionComponent } from 'react'
import styles from './IconButton.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { }

const IconButton: FunctionComponent<Props> = ({ className = '', children, ...props }) => {
    return (
        <button {...props} className={`${styles.button} ${className}`}>
            {children}
        </button>
    )
}

export default IconButton