import { useTransform } from "framer-motion";
import React from "react";
import useWrapperScroll from "../../Model/useWrapperScroll";

import { Container, Header, Logo, Burger, Footer, Nav } from "./styles";

const UniqueOverlay: React.FC = () => {
  const { scrollyProgress } = useWrapperScroll();

  const opacity = useTransform(scrollyProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <Nav>
          <nav>
            Model S | Model 3 | Model X | Model Y | Solar Roof | Solar Panels |
            Accessories
          </nav>
        </Nav>
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">2021</a>
          </li>
          <li>
            <a href="#">by Ana Moreno</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
