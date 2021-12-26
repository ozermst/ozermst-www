import Appbar from "../appbar/appbar";
import Container from "../container/container";

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header>
      <Container>
        <Appbar />
      </Container>
    </header>
  );
}

export default Header;
