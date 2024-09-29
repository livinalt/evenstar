import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image src="/images/logo.svg" alt="logo" width={40} height={40} />
    </Link>
  );
}
