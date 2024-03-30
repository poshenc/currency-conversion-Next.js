import IconButton from "../Buttons/IconButton/IconButton";
import TextButton from "../Buttons/TextButton/TextButton";
import styles from "./Header.module.css";
import CloseIcon from '@mui/icons-material/Close';

export default function Header({
  title,
  onClose,
}: {
  title: string,
  onClose?: () => void,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {onClose && <IconButton className={styles.button} onClick={onClose}><CloseIcon /></IconButton>}
    </div>
  )
}