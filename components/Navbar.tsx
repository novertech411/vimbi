import { usePathname } from "next/navigation";
import Container from "./Container";
import logo from "@/public/images/logo.png";
import Image from "next/image";

function Navbar() {
  const pathname = usePathname();
  return (
    <div className="">
      <Container>
        <div className=" text-white flex py-6">
          <Image className=" w" src={logo} alt="logo"></Image>
          <ul className=" ml-auto flex century font-[400] text-[13px] gap-11 items-center">
            <li
              className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
                pathname === "/" ? "border-secondary" : ""
              }   `}
            >
              <a href="/">Home</a>
            </li>
            <li
              className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
                pathname === "/about" ? "border-secondary" : ""
              }   `}
            >
              <a href="/about">About Us</a>
            </li>
            <li
              className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
                pathname === "/products" ? "border-secondary" : ""
              }   `}
            >
              <a href="/products">Our Products </a>
            </li>
            <li
              className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
                pathname === "/blog" ? "border-secondary" : ""
              }   `}
            >
              <a href="/blog">Blog</a>
            </li>
            <li
              className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
                pathname === "/contact" ? "border-secondary" : ""
              }   `}
            >
              <a href="/contact">Contact Us </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
