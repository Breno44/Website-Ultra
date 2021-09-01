import styled, { Container } from "styled-components";

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  height: 80px;
  display: flex;
  justify-content: space-between;

  ${Container}
`;
