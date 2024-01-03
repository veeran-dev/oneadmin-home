import React, { useState, Fragment } from "react";
import Loadable from "@loadable/component"
import { Row, Col, Drawer } from "antd";
// import { CSSTransition } from "react-transition-group";


import Head from './Head';
import * as S from "./styles";

// const SvgIcon = Loadable(() => import("../../common/SvgIcon"));
// const Button = Loadable(() => import("../../common/Button"));

import SvgIcon from "../../common/SvgIcon";
import Button from "../../common/Button";

const Header = () => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
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
        <Head />
        <S.CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <S.Span>{"Product"}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <S.Span>{"About"}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <S.Span>
            <Button>{"Contact"}</Button>
          </S.Span>
        </S.CustomNavLinkSmall>
      </>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" align={"middle"} justify="space-between" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.png" width={"214px"} height={"50px"} />
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
          <Drawer closable={false} visible={visible} onClose={onClose}>
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
  );
};

export default Header;
