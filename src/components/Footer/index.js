import React, { Fragment } from "react";
import { Row, Col } from "antd";


import Loadable from "@loadable/component"
import {Fade} from "react-awesome-reveal";

import * as S from "./styles";

const SvgIcon = Loadable(() => import("../../common/SvgIcon"));
const Container = Loadable(() => import("../../common/Container"));

const Footer = () => {

  // const SocialLink = ({ href, src }) => {
  //   return (
  //     <a
  //       href={href}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       key={src}
  //       aria-label={src}
  //     >
  //       <SvgIcon src={src} width="25px" height="25px" />
  //     </a>
  //   );
  // };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>Contact</S.Language>
                <S.Large to="/">Tell us everything</S.Large>
                <S.Para>
                    `Do you have any question regarding the project? Feel free to reach out.`
                </S.Para>
                <a href="mailto:admin@oneadmin.in">
                  <S.Chat>`Let's Chat`</S.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>Policy</S.Title>
                <S.Large to="/" left="true">
                  Privacy Policy
                </S.Large>
                <S.Large left="true" to="/">
                  Cancellation Policy
                </S.Large>
                <S.Large left="true" to="/">
                  Terms and Conditions
                </S.Large>
              </Col>
              {/* <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
                <S.Large left="true" to="/">
                  Support Center
                </S.Large>
                <S.Large left="true" to="/">
                  Customer Support
                </S.Large>
              </Col> */}
            </Row>
            {/* <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>ADDRESS</S.Language>
                <S.Para>Rancho Santa Margarita</S.Para>
                <S.Para>2131 Elk Street</S.Para>
                <S.Para>California</S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>Company</S.Title>
                <S.Large left="true" to="/">
                  About
                </S.Large>
                <S.Large left="true" to="/">
                  Blog
                </S.Large>
                <S.Large left="true" to="/">
                  Press
                </S.Large>
                <S.Large left="true" to="/">
                  Careers & Culture
                </S.Large>
              </Col>
            </Row> */}
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="logo.png"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              {/* <S.FooterContainer>
                <SocialLink
                  href="https://github.com/username"
                  src="github.svg"
                />
                <SocialLink
                  href="https://twitter.com/username"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/username/"
                  src="linkedin.svg"
                />
                <SocialLink
                  href="https://github.com/username/"
                  src="instagram.svg"
                />
                <SocialLink
                  href="https://medium.com/username/"
                  src="medium.svg"
                />
              </S.FooterContainer> */}
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default Footer;
