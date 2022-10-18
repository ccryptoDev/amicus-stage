import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../../atoms/Container";
import otoemissouria from "../../../../assets/landing/history/otoemissouria.png";
import sioux from "../../../../assets/landing/history/teton-sioux.png";
import { H3 } from "../../../atoms/Typography";

const Wrapper = styled.section`
  background: var(--color-bg-2);
  padding-top: 6rem;

  .paragraph-wrapper {
    display: flex;
    column-gap: 2.4rem;

    p:last-child {
      margin-top: 2.4rem;
    }
  }
  img {
    height: 20rem;
  }

  .image-description {
    font-size: 10px;
  }
  & .about-section-history {
    background: var(--color-bg-2);
    & p {
      line-height: 1.3;
    }
    & h3 {
      margin-bottom: 4.8rem;
      text-align: center;
    }
    &-content {
      &-layout {
        position: relative;
        display: flex;
        flex-direction: column;
        row-gap: 2.4rem;
        overflow: hidden;
        transition: all 0.3s;
      }
      &-expend {
        position: absolute;
        top: 13rem;
        width: 100%;
        box-sizing: border-box;

        &-shadow {
          background: linear-gradient(
            180deg,
            rgba(249, 249, 249, 0) 0%,
            var(--color-bg-2) 100%
          );
          height: 100px;
        }
        & .button-wrapper {
          background: var(--color-bg-2);
          padding: 2rem;
          display: flex;
          justify-content: center;

          & .button-inverted {
            border: 1px solid var(--color-blue-1);
          }
        }
      }
    }

    .contact-link {
      padding: 4.8rem 0 6rem;
      text-align: center;
      font-size: 1.4rem;
      &,
      & a {
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 992px) {
    .about-section-cards-layout,
    .about-section-history-content-layout {
      display: flex;
      flex-direction: column;
    }

    .about-section-banner {
      height: auto;
      padding: 4rem 0;
    }

    .about-section-history-content-expend {
      top: 20%;
    }
  }

  @media screen and (max-width: 600px) {
    .about-section-history-footer {
      flex-wrap: wrap;
      row-gap: 20px;
    }
  }
`;

const Article = ({ articleRef }) => {
  return (
    <Wrapper ref={articleRef}>
      <Container className="about-section-history ">
        <div className="about-section-history-layout">
          <H3>Mechoopda Indian Tribe of Chico Rancheria</H3>
          <div className="about-section-history-content">
            <div className="about-section-history-content-layout">
              <div className="paragraph-wrapper">
                <div>
                  <p>
                    The Mechoopda are a tribe of Maidu people, an indigenous
                    peoples of California. They are enrolled in the Mechoopda
                    Indian Tribe of Chico Rancheria and are located adjacent to
                    Chico, CA. The United States recognizes a
                    government-to-government relationship with the &quot;The
                    Mechoopda&quot; and the Tribe exists politically in a
                    &quot;domestic dependent nation&quot; status. As such, the
                    Mechoopda Indian Tribe of Chico Rancheria is a sovereign
                    nation located within California and the United States.
                  </p>
                  <p>
                    Established in 2001, the Mechoopda Business Development
                    (MBD) was formed to further the economic self-sufficiency
                    and prosperity of the Tribe. MBD’s goal is to develop
                    multiple layers of economic development as contained in our
                    Tribal Constitution; to promote our common welfare as Tribal
                    members and as a political entity, and to secure to
                    ourselves and our descendants the rights, powers, and
                    privileges of Tribal sovereignty. The Tribe and MBD are
                    working purposefully towards an economically successful
                    future and look forward to increasing its participation as a
                    community service partner. Our commitment to
                    self-sufficiency and independence exists in our past,
                    present, and future. In recent years, The Mechoopda Tribe
                    has developed the Chico Rancheria Housing Corporation;
                    purchased land and constructed a tribal office complex and
                    community building; and in 2021 broke ground on a
                    state-of-the art casino and hospitality complex located in
                    Chico, CA. It is expected to open in 2023 and will create
                    300 new jobs for the Tribe and the greater Chico, CA area.
                  </p>
                </div>
                <img src={otoemissouria} alt="otoemissouria" />
              </div>
              <p className="image-description">
                Mechoopda Administration Building
              </p>
              <img
                className="about-section-history-banner"
                src={sioux}
                alt="teton-sioux"
              />

              <div className="contact-link">
                For more information visit{" "}
                <a
                  href="www.mechoopda-nsn.gov"
                  target="_blank"
                  className="underline"
                >
                  www.mechoopda-nsn.gov
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Article;
