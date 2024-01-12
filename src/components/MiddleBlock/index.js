import React from "react";
import { Row, Col } from "antd";
import Loadable from "@loadable/component"
import {Fade} from "react-awesome-reveal";

import * as S from "./styles";

const Button = Loadable(() => import("../../common/Button"));

const MiddleBlock = ({ title, content, button }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{title}</h6>
              <S.Content>{content}</S.Content>
              {button ? (
                <Button
                  name="submit"
                  type="submit"
                  onClick={() => scrollTo("mission")}
                >
                  {button}
                </Button>
              ) : (
                ""
              )}
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default MiddleBlock;
