import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: absolute;
  z-index: 1;
  width: calc(0.33 * 100vw);
  min-width: 170px;
  max-width: 300px;
  height: calc(100vh - 60px);
  background-color: #fff;
  top: 20px;
  left: 20px;
  border-radius: 5px;
  padding: 20px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  ul {
    li {
      list-style: none;

      display: flex;
      flex-direction: row;
      flex: 1;

      align-items: center;

      padding-top: 10px;
      border-top: 1px solid #ddd;
      margin-top: 10px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;

        margin-right: 10px;
      }

      &:first-child {
        padding-top: 0px;
        border-top: 0px;
        margin-top: 0px;
      }
    }
  }
`;
