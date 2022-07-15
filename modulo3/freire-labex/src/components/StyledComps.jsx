import styled from 'styled-components';

export const BoxFullPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.justifyContent || 'center'};
  width: 100%;
  height: 100%;
  min-height: 100vh;
`