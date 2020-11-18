import React from 'react';
import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexCol = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
`;
