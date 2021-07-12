import React from "react";

import { Container, Heading, Buttons } from "./styles";

interface Props {
  label: string;
  description: string;
}

const DefaultOverlayContent: React.FC<Props> = ({ label, description }) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>
          <a href="http://localhost:3001/" id="link2">
            Custom Order
          </a>
        </button>

        <button className="white">
          <a href="http://localhost:3001/" id="link1">
            Existing Inventory
          </a>
        </button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
