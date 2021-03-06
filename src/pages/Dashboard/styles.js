import styled from 'styled-components';
import PerfectSrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  max-width: 600px;
  margin: 45px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;
    justify-self: center;

    button {
      border: 0;
      background: transparent;
      height: 36px;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 30px;
  }
`;

export const Scrollbar = styled(PerfectSrollbar)`
  max-height: calc(100vh - 64px);
  padding: 0 15px;
  width: 100%;
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
