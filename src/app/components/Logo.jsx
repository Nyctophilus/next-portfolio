import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";

const Logo = () => {
  return (
    <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
      <Image src={logo} alt="logo" height={60} width={60} />
    </Link>
  );
};
export default Logo;
