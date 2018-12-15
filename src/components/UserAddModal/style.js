import styled from 'styled-components';

export const CenterBox = styled.div`
  position: absolute;
  z-index: 3;
  width: 300px;
  height: 150px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  margin-top: -75px; /* Half the height */
  margin-left: -150px; /* Half the width */
  border-radius: 5px;
  display: ${props => (props.show ? 'block' : 'none')};
`;

export const Background = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => (props.show ? 'block' : 'none')};
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      height: 32px;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 3px;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      button {
        height: 38px;
        width: 120px;
        border-radius: 3px;
        border: 0;

        font-size: 14px;
        font-weight: bold;

        color: #fff;
        border-radius: 3px;

        background-color: #ccc;

        &:hover {
          background-color: #bbb;
        }

        &.salvar {
          background-color: #85c47c;

          &:hover {
            background-color: #6fab66;
          }
        }
      }
    }
  }
`;
