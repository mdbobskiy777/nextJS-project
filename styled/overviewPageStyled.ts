import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

import { overviewPageProperties } from './styledComponentsProperties';
import { displaySizes } from './styledComponentsProperties';

const OverviewPageStyled = {
  MainContainer: styled.div`
      text-align: center;
      margin: 20px auto;
      padding: 10px;
      min-width: 40%;
      background: ${ overviewPageProperties.mainContainer.background };
      overflow: hidden;
      
      @media (min-width : ${ displaySizes.md }) {
        max-width: ${ overviewPageProperties.mainContainer.maxWidth };
      }
    `,
  MyUL: styled(ListGroup)`
      width: 100%;
      margin: 10px auto;
      padding: 10px;
      background: ${ overviewPageProperties.myUL.background };
    `,
  MyLI: styled(ListGroup.Item)`
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
    `,
  MyTittle: styled.div`
      width: 80%;
      background: ${ overviewPageProperties.myTitle.background };
      margin: 5px auto;
      padding: 2px;
      font-size: 1.5em;
      overflow: auto;
    `,
  MyDiv: styled.div`
      overflow: hidden;
      margin: 5px auto;
      font-size: 1.25em;
    `,
  MyIMG: styled.img`
        width: 20%;
    `
};

export default OverviewPageStyled;
