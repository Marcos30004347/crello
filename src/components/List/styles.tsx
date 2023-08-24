import {styled} from 'styled-components'

export const Container = styled.div `
  padding: 0 15px;
  height: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 320px;
  margin-bottom: 42px;
  & + div {
    border-left: 1px solid rgba(0,0,0,0.05);
  }


  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    margin-bottom: 10px;
    h2 {
      font-weight: 500;
      font-siz: 16px,
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      background: #3b5bfd;
      border-radius: 18px;
      border: 0;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button: hover {
      background: #263eba;
    }

  }
`;

