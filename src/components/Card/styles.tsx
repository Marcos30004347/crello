import { styled, css } from 'styled-components'

interface ContainerProps {
	is_being_dragged: string 
};

export const Container = styled.div<ContainerProps> `
  background: #FFF;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: grab; 

  p {
    font-weight: 500;
    line-height: 20px;
  }

  header {
    position:relative;
    border-radius: 5px 5px 0 0;
    margin: -15px -15px 15px -15px;
    background: rgba(230, 236, 245, 0.4);
    height: 20px;
  }

  ${props => props.is_being_dragged === "true" && css `
    border: 2px dashed rgba(0,0,0,0.2);
    opacity: 0.5;
    box-shadow: 0 0 0 0 rgba(192, 208, 230, 0.8);
  `}

`;

export const Label = styled.span `
  top: 15px;
  left: 15px;
  position:absolute;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${props => props.color};
`
