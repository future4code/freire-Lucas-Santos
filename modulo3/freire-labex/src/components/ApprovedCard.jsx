import { Div,  TextG, TextM, TextP } from "./GlobalStyledComps";

export const ApprovedCard = ({ candidate }) => {
  return (
    <Div jc="space-between" maxW="20em" minH="10em" pad="0.25em 0" gap="0" bg="var(--color-2a)" bs="var(--shadow)">
      <Div jc="space-between" minH="6em" pad="0.25em 0 0.25em 0">
          <TextG minH="1em">{candidate.name}</TextG>
          <TextP minH="2.5em">{candidate.applicationText}</TextP>        
      </Div>

      <Div fd="row" gap="0.35em" pad="0 0.35em 0.35em 0.35em">
        <Div minH="3.5em" pad="0.5em" bg="var(--color-2b)">
          <TextP>{candidate.profession}</TextP>
        </Div>
        <Div minH="3.5em" pad="0.5em" bg="var(--color-2b)">
          <TextP>{candidate.age} anos</TextP>
        </Div>
        <Div minH="3.5em" pad="0.5em" bg="var(--color-2b)">
          <TextP>{candidate.country}</TextP>
        </Div>
      </Div>
    </Div>
  );
}