import Link from "next/link";
import styled from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Hamburger from "./icons/Hamburger";
import { primary } from "@/lib/colors";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const StyledHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
  color: ${(props) => props.theme.bg};
  text-decoration: none;
  position: relative;
  z-index: 3;
  font-family: "Press Start 2P", cursive;

  @media screen and (min-width: 768px) {
    border: 1px solid ${(props) => props.theme.primary};
    padding: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const NavLink = styled(Link)`
  display: block;
  color: ${(props) =>
    props.href === props.pathName ? props.theme.primary : props.theme.white};
  text-decoration: none;
  transition: all 500ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-family: "Press Start 2P", cursive;

  &:hover {
    color: ${(props) => props.theme.highlight};
  }
`;

const StyledNav = styled.nav`
  display: block;
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  align-items: center;

  ${(props) =>
    props.mobileNavActive
      ? `display: block; overflow: hidden`
      : `display: none;`}

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: ${(props) => props.theme.highlight};
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const CartCount = styled(Link)`
  background-color: ${primary};
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 2rem;

  @media screen and (min-width: 768px) {
    rotate: 315deg;
    margin-left: 0.5rem;
    padding: 0 0.5rem;
    width: 1rem;
    span {
      rotate: 45deg;
    }
  }
`;

const links = [
  { href: "/", text: "Home" },
  { href: "/products", text: "Products" },
  { href: "/account", text: "Account" },
  { href: "/contact", text: "Contact Us" },
  { href: "/cart", text: "Cart" },
];

export default function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const { cartProducts } = useContext(CartContext);

  const router = useRouter();

  return (
    <StyledHeader>
      <Wrapper>
        <Logo href={"/"} as={motion.div}>
          CyberWares
        </Logo>
        <StyledNav mobileNavActive={mobileNavActive}>
          {links.map((link) => (
            <NavLink href={link.href} pathName={router.pathname} key={link}>
              {link.text}
            </NavLink>
          ))}
          <CartCount href={"/cart"}>
            <span>{cartProducts.length}</span>
          </CartCount>
        </StyledNav>
        <NavButton onClick={() => setMobileNavActive((previous) => !previous)}>
          <Hamburger />
        </NavButton>
      </Wrapper>
    </StyledHeader>
  );
}
