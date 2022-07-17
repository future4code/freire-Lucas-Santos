import styled from 'styled-components';

export const Grayout = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 21, 29, 0.95);
  opacity: 0;
  animation: fadeIn 0.25s ease-in-out forwards;
  @keyframes fadeIn {to {opacity: 1;}}
`
export const DivFullPage = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.jc || 'center'};
  width: 100%;
  height: 100%;
  min-height: ${props => props.minH || "100vh"};
  padding: ${props => props.pad || '0'};
  opacity: 0;
  background-color: ${props => props.bg || "var(--color-b)"};
  animation: fadeIn 0.4s ease-in-out forwards normal;
  @keyframes fadeIn {to {opacity: 1;}}
`
export const Div = styled.div`
  z-index: 2;
  display: flex;
  flex-wrap: ${props => props.fw || "nowrap"};
  flex-direction: ${props => props.fd || 'column'};
  align-items: center;
  justify-content: center;
  gap: ${props => props.gap || '0'};
  width: 100%;
  max-width: ${props => props.maxW || "32em"};
  height: 100%;
  padding: ${props => props.pad || "2em"};
  color: var(--color-w);
  background-color: ${props => props.bg || "transparent"};
  border-radius: 0.5em;
  overflow: hidden;
  box-shadow: ${props => props.bs || "none"};
`
export const Input = styled.input`
width: 100%;
height: 2.5em;
margin-bottom: 0.75em;
padding: 0 0.25em;
font-size: min(7vw, 1.5rem);
font-weight: 600;
text-align: center;
color: var(--color-w);
background-color: var(--color-2b);
border: solid 0.1em var(--color-2b);
border-radius: 0.5em;
outline: none;
opacity: 1;
transition: all 0.25s ease-in-out;
&:focus {
  border: solid 0.1em var(--color-1a);
}
`
export const ButtonLine = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.w || '100%'};
  margin: 0 0.5em;
  padding: 0.5em 0.25em;
  color: var(--color-w);
  background-color: transparent;
  border: solid 0.15em var(--color-w);
  border-radius: 0.5em;
  box-shadow: var(--shadow);
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: var(--color-w);
    color: var(--color-1a);
    box-shadow: var(--shadow);
  }
`
export const ButtonFill = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.w || '100%'};
  min-height: ${props => props.minH || "4.5em"};
  margin: ${props => props.margin || "0 0.75em"};
  padding: 0.5em;
  color: var(--color-w);
  background-color: var(--color-1b);
  border: solid 0.15em var(--color-1b);
  border-radius: 0.5em;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: var(--color-1a);
    border-color: var(--color-1a);
    box-shadow: var(--shadow);
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  &:disabled:hover {
    background-color: var(--color-1a);
    box-shadow: none;
  }
`
export const TextP = styled.b`
  font-size: min(4vw, 1rem);
  line-height: min(4vw, 1rem);
  color: ${props => props.color || "inherit"};
`
export const TextM = styled.b`
  z-index: 2;
  font-size: min(5vw, 1.5rem);
  line-height: min(5vw, 1.75rem);
  color: ${props => props.color || "inherit"};
`
export const TextG = styled.b`
  z-index: 2;
  font-size: min(8vw, 3rem);
  line-height: min(8vw, 2.5rem);
  color: ${props => props.color || "inherit"};
`
export const Br = styled.div`
  padding: ${props => props.pad || "0.5em"};
`
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`