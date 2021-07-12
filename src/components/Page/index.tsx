import React from "react";

import DefaultOverlayContent from "../DefaultOverlayContent";
import ModelWrapper from "../Model/ModelWrapper";
import ModelSection from "../Model/ModelSection";
import UniqueOverlay from "./UniqueOverlay";

import { Container, Spacer } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelWrapper>
        <div>
          {[
            "Model S",
            "Model 3",
            "Model X",
            "Model Y",
            "Solar Roof",
            "Solar Panels",
            "Accessories",
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName="modelName"
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order online for Delivery"
                />
              }
            />
          ))}
        </div>

        <Spacer />
        <UniqueOverlay />
      </ModelWrapper>
    </Container>
  );
};

export default Page;
