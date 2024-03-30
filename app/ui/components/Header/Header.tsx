import IconButton from "../IconButton/IconButton";
import TextButton from "../TextButton/TextButton";
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
      <h1>{title}</h1>
      {onClose && <IconButton className={styles.button} onClick={onClose}><CloseIcon /></IconButton>}
    </div>
  )
}