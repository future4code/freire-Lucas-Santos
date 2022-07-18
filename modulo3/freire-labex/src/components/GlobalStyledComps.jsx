import styled from 'styled-components';

export const Grayout = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 150vh;
  background-color: rgba(17, 21, 29, 0.9);
  opacity: ${props => props.opacity || "0"};
  animation: fadeIn 0.25s ease-in-out forwards;
  @keyframes fadeIn {to {opacity: 1;}}
`
export const DivFullPage = styled.div`
  z-index: ${props => props.zIndex || "1"};
  position: ${props => props.position || "relative"};
  top: ${props => props.top || "0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.jc || 'center'};
  width: 100%;
  height: 100%;
  min-height: ${props => props.minH || "100vh"};
  padding: ${props => props.pad || "calc(var(--header-h) + 1em) 0.75em 1.5em 0.75em"};
  opacity: 0;
  background-color: ${props => props.bg || "transparent"};
  animation: fadeIn 0.4s ease-in-out forwards normal;
  @keyframes fadeIn {to {opacity: 1;}}
`
export const Div = styled.div`
  z-index: 2;
  display: flex;
  flex-wrap: ${props => props.fw || "nowrap"};
  flex-direction: ${props => props.fd || 'column'};
  align-items: ${props => props.ai || 'center'};
  justify-content: ${props => props.jc || 'center'};
  gap: ${props => props.gap || '0'};
  width: 100%;
  max-width: ${props => props.maxW || "32em"};
  height: 100%;
  min-height: ${props => props.minH || "100%"};
  margin: ${props => props.mar || "0"};
  padding: ${props => props.pad || "2em"};
  color: var(--color-w);
  background-color: ${props => props.bg || "transparent"};
  border-radius: ${props => props.br || "var(--radius)"};
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
transition: var(--transition-fast);
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
  min-height: ${props => props.minH || '100%'};
  margin: 0 0.5em;
  padding: 0.5em 0.25em;
  color: var(--color-w);
  background-color: transparent;
  border: solid 0.15em var(--color-w);
  border-radius: ${props => props.br || "var(--radius)"};
  box-shadow: var(--shadow);
  transition: var(--transition-fast);
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
  width: ${props => props.w || "100%"};
  height: ${props => props.h || "100%"};
  min-height: ${props => props.minH || "4.5em"};
  margin: ${props => props.margin || "0 0.75em"};
  padding: ${props => props.pad || "0.5em"};
  color: var(--color-w);
  background-color: ${props => props.bg || "var(--color-1b)"};
  border: none;
  border-radius: ${props => props.br || "var(--radius)"};
  transition: var(--transition-fast);
  &:hover {
    background-color: ${props => props.bgH || "var(--color-1a)"};
    border-color: var(--color-1a);
    box-shadow: ${props => props.bsH || "var(--shadow)"};
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
  min-height: ${props => props.minH || "100%"};
  padding: ${props => props.pad || "0"};
  font-size: min(4vw, 1rem);
  line-height: min(4vw, 1rem);
  color: ${props => props.color || "inherit"};
`
export const TextM = styled.b`
  z-index: 2;
  width: 100%;
  min-height: ${props => props.minH || "100%"};
  padding: ${props => props.pad || "0"};
  font-size: min(5vw, 1.5rem);
  line-height: min(5vw, 1.75rem);
  color: ${props => props.color || "inherit"};
`
export const TextG = styled.b`
  z-index: 2;
  width: 100%;
  min-height: ${props => props.minH || "100%"};
  padding: ${props => props.pad || "0"};
  font-size: min(8vw, 3rem);
  line-height: min(8vw, 2.5rem);
  color: ${props => props.color || "inherit"};
  background-color: ${props => props.bg || "transparent"};
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
export const Select = styled.select`
  width: 100%;
  height: 2.5em;
  margin-bottom: 0.75em;
  padding: 0 0.25em;
  font-size: min(6vw, 1.5rem);
  font-weight: 600;
  text-align: center;
  color: var(--color-w);
  background-color: var(--color-2b);
  border: solid 0.1em var(--color-2b);
  border-radius: 0.5em;
  outline: none;
  opacity: 1;
  transition: var(--transition-fast);
  &:focus {
    border: solid 0.1em var(--color-1a);
  }
`
export const Option = styled.option`
  font-size: min(7vw, 1.5rem);
  font-weight: 500;
  text-align: center;
  line-height: min(7vw, 1.5rem);
  color: var(--color-w);
  border: solid red;
`
export const ContextButton = styled.button`
z-index: 3;
  position: fixed;
  bottom: 1.5em;
  left: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5em;
  height: 4.5em;
  padding: 0.5em;
  color: var(--color-w);
  background-color: var(--color-1b);
  border: none;
  border-radius: 50%;
  box-shadow: var(--shadow);
  transition: var(--transition-fast);
  &:hover {
    background-color: var(--color-1a);
  }
`