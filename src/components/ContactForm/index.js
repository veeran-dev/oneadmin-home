import React from "react";
import { Row, Col } from "antd";
import {Zoom} from "react-awesome-reveal";
import Loadable from "@loadable/component"


import useForm from "./useForm";
import validate from "./validationRules";

import * as S from "./styles";

const Block = Loadable(() => import("../Block"));
const Input = Loadable(() => import("../../common/Input"));
const Button = Loadable(() => import("../../common/Button"));
const TextArea = Loadable(() => import("../../common/TextArea"));

const Contact = ({ title, content, id }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return errors[type] ? (
      <Zoom cascade>
        <S.Span>{ErrorMessage}</S.Span>
      </Zoom>
    ) : (
      <S.Span />
    );
  };

  return (
    <S.ContactContainer id={id}>
      <S.Contact>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={12} md={11} sm={24}>
            <Block padding={true} title={title} content={content} />
          </Col>
          <Col lg={12} md={12} sm={24}>
            <S.FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  id="Name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  id="Email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  id="Message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <S.ButtonContainer>
                <Button name="submit" type="submit">
                  {"Submit"}
                </Button>
              </S.ButtonContainer>
            </S.FormGroup>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default Contact;
