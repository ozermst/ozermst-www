import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = styled.nav`
  display: flex;
  align-items: "center";
`;

function Navbar() {
  const router = useRouter();
  return (
    <Nav>
      <ul
        css={css`
          display: flex;
          justify-content: center;
          column-gap: 0.5rem;
          flex-grow: 1;

          @media (min-width: 640px) {
            flex-grow: unset;
          }
        `}
      >
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/" passHref>
            <a id="homeLink">Anasayfa</a>
          </Link>
        </li>
        <li className={router.pathname == "/blog" ? "active" : ""}>
          <Link href="/blog" passHref>
            <a id="blogLink">Blog</a>
          </Link>
        </li>
        <li className={router.pathname == "/about" ? "active" : ""}>
          <Link href="/about" passHref>
            <a id="aboutLink">Hakkımda</a>
          </Link>
        </li>
        <li className={router.pathname == "/contact" ? "active" : ""}>
          <Link href="/contact" passHref>
            <a id="contactLink">İletişim</a>
          </Link>
        </li>
      </ul>
    </Nav>
  );
}

export default Navbar;
