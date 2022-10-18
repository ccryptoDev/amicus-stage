import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Banner from "../../../atoms/Landing/Banner";
import { H2 } from "../../../atoms/Typography";
import Button from "../../../atoms/Buttons/LinkButton";
import Container from "../../../atoms/Container";
import { routes } from "../../../../routes/Landing/routes";

const Wrapper = styled.section`
  .button-outlined {
    background: transparent;
    display: block;
    border: 1px solid #fff;
    color: #fff;
  }

  .layout {
    max-width: 767px;
  }

  .button-wrapper {
    display: flex;
  }
`;

const Section = () => {
  return (
    <Wrapper>
      <Banner className="section-apply-about-us-banner banner">
        <Container>
          <div className="layout">
            <H2>About Us</H2>
            <p>
              We are here to help the <b> 40+ million Americans</b> who do not
              have access to short-term credit through conventional banks each
              year. These underserved customers deserve an option to manage
              their unforeseen expenses. Best-in-class technology and analytics
              enables us to provide a Fast, Secure and Private way to solve your
              financial needs. <b> Apply today </b>and you may{" "}
              <b> get your funds in minutes</b> via your debit card or same/next
              business day funding via ACH.
            </p>
            <p>
              We are <b>Amicus</b>. We offer online small dollar credit products
              that help our borrowers bridge the gap between today&apos;s
              unexpected expenses and tomorrow&apos;s opportunities. We are
              owned by and operated by the Mechoopda Indian Tribe of Chico
              Rancheria. For more information about the{" "}
              <span>Mechoopda Indian Tribe of Chico Rancheria</span>, please
              click <Link to={`${routes.ABOUT}#article`}>here</Link>.
            </p>
            <div className="button-wrapper">
              <Button to={routes.ABOUT} className="button-outlined">
                About Us
              </Button>
            </div>
          </div>
        </Container>
      </Banner>
    </Wrapper>
  );
};

export default Section;
