import Button from "../Button/Button";

export default function Header({
  title,
  onClose,
}: {
  title: string,
  onClose: () => void,
}) {
  return (
    <>
      <div>{title}</div>
      <Button onClick={onClose}>X</Button>
    </>
  )
}