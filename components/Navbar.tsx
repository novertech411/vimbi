import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import logohead from "@/public/images/logohead.png";
import toggle from "@/public/images/toggle.png";

function Navbar() {
  const pathname = usePathname();

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleToggle = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <div className=" relative  ">
      <Container>
        <div className=" text-white  py-6  md:relative   absolute  flex  justify-between   w-[90%] ">
          <Image
            className="  hidden  md:flex h-[50px]  z-20  "
            src={logo}
            alt="logo"
          ></Image>
          <Image
            className="  w-[45px] h-8 z-20 flex md:hidden  "
            src={logohead}
            alt="logo"
          ></Image>

          <ul className=" ml-auto  century font-[400] text-[13px] gap-11 items-center lg:flex      hidden">
            <Link href="/">
              <li
                className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
                  pathname === "/" ? "border-secondary" : ""
                }   `}
              >
                Home
              </li>
            </Link>

            <Link href="/about">
              <li
                className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
                  pathname === "/about" ? "border-secondary" : ""
                }   `}
              >
                About Us
              </li>
            </Link>

            <Link href="/products ">
              <li
                className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
                  pathname === "/products" ? "border-secondary" : ""
                }   `}
              >
                Products And Services
              </li>
            </Link>

            <Link href="/gallary">
              <li
                className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
                  pathname === "/gallary" ? "border-secondary" : ""
                }   `}
              >
                Gallary
              </li>
            </Link>

            <Link href="/blog">
              <li
                className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
                  pathname === "/blog" ? "border-secondary" : ""
                }   `}
              >
                Blog
              </li>
            </Link>

            <Link href="/contact">
              <li
                className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
                  pathname === "/contact" ? "border-secondary" : ""
                }   `}
              >
                Contact Us
              </li>
            </Link>
          </ul>

          <div
            className=" w-[32px] h-[32px]   flex md:hidden     "
            onClick={handleToggle}
          >
            <Image className=" z-20" src={toggle} alt="toggle z-3" />
          </div>
        </div>
      </Container>

      <ul
        className={`ml-auto century font-[400] text-[13px] gap-11 items-center  h-[1040vh] absolute p-[80px] flex flex-col mx-auto  z-10  lg:hidden text-white bg-primary w-full ${
          isMenuVisible ? "flex" : "hidden"
        }`}
      >
        <Link href="/" onClick={handleToggle}>
          <li
            className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
              pathname === "/" ? "border-secondary" : ""
            }   `}
          >
            Home
          </li>
        </Link>

        <Link href="/about" onClick={handleToggle}>
          <li
            className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
              pathname === "/about" ? "border-secondary" : ""
            }   `}
          >
            About Us
          </li>
        </Link>

        <Link href="/products " onClick={handleToggle}>
          <li
            className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
              pathname === "/products" ? "border-secondary" : ""
            }   `}
          >
            Products And Services
          </li>
        </Link>

        <Link href="/gallary" onClick={handleToggle}>
          <li
            className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
              pathname === "/gallary" ? "border-secondary" : ""
            }   `}
          >
            Gallary
          </li>
        </Link>

        <Link href="/blog" onClick={handleToggle}>
          <li
            className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
              pathname === "/blog" ? "border-secondary" : ""
            }   `}
          >
            Blog
          </li>
        </Link>

        <Link href="/contact" onClick={handleToggle}>
          <li
            className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
              pathname === "/contact" ? "border-secondary" : ""
            }   `}
          >
            Contact Us
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
