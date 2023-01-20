import styled from "styled-components";

import { PrimaryButton } from "../atom/button/PrimaryButton";
import { Input } from "../atom/input/Input";

export const SerchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWapper>
    </SContainer>
  );
};
const SContainer = styled.div`
  display: flex;
  align-items: centear;
`;

const SButtonWapper = styled.div`
  padding-left: 8px;
`;
