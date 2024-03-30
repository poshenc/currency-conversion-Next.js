import { ButtonHTMLAttributes, FunctionComponent } from 'react'
import styles from './SelectionButton.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { }

const SelectionButton: FunctionComponent<Props> = ({ className = '', children, ...props }) => {
    return (
        <button {...props} className={`${styles.button} ${className}`}>
            {children}
            <KeyboardArrowDownIcon className={styles['down-icon']} />
        </button>
    )
}

export default SelectionButton