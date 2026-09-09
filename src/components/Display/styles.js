import styled from "styled-components";

export const DisplayContainer = styled.div`
  width: 100%;
  min-height: 86px;
  box-sizing: border-box;
  padding: 8px 10px;
  background-color: #aaaaFF;
  color: #ffffff;
  text-align: right;
  overflow: hidden;
`;

export const Expression = styled.div`
  min-height: 24px;
  font-size: 16px;
  opacity: 0.85;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Value = styled.div`
  min-height: 42px;
  font-size: 32px;
  line-height: 42px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
