import Link from "next/link";
import Button from "./ui/components/Button/Button";

export default async function Home() {
  return (
    <>
      <div>Rate Table(TWD)</div>
      <Link href={'rate-conversion'}>
        <Button>Rate Conversion</Button>
      </Link>
    </>
  )
}
