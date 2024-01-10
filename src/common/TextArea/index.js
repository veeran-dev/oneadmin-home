import React from 'react';


import * as S from "./styles";

const TextArea = ({ name, id, placeholder, onChange }) => (
  <S.Container>
    <label htmlFor={name}>{id}</label>
    <S.TextArea
      spellCheck="false"
      placeholder={placeholder}
      id={name}
      name={name}
      onChange={onChange}
    />
  </S.Container>
);

export default TextArea;
