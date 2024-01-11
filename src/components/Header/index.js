import * as S from "./styles";
import React, { useState, Fragment } from "react";
import { Row, Col, Drawer } from "antd";
import { StaticImage } from 'gatsby-plugin-image';
import Head from './Head';
import Button from "../../common/Button";

const Header = () => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        
        <S.CustomNavLinkSmall onClick={() => scrollTo("contact")}>
          <S.Span>{"Contact"}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() =>window.location.href = "https://app.oneadmin.in"}
        >
          <S.Span>
            <Button>{"Login"}</Button>
          </S.Span>
        </S.CustomNavLinkSmall>
      </>
    );
  };

  return (
    <>
    <Head />
    <S.Header>
      <S.Container>
        <Row type="flex" align={"middle"} justify="space-between" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage">
            <StaticImage
              src="../../../static/img/svg/logo.png"
              alt={"logo"}
              style={{ width:"214px", height:"50px" }}
              formats={['auto', 'webp', 'avif']}
              placeholder="blurred"
            />
          </S.LogoContainer>
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        {/* <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        > */}
          <Drawer closable={false} open={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        {/* </CSSTransition> */}
      </S.Container>
    </S.Header>
    </>
  );
};

export default Header;
