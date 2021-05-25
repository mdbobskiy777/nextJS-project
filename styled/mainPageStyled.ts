import styled from 'styled-components';
import { Button, ListGroup } from 'react-bootstrap';

import { mainPageProperties } from './styledComponentsProperties';
import { displaySizes } from './styledComponentsProperties';

const StyledComponents = {
  MainContainer: styled.div`
      text-align: center;
      margin: 20px auto;
      padding: 10px;
      overflow: hidden;
      background: ${ mainPageProperties.mainContainer.background };
      
      @media (min-width : ${ displaySizes.md }) {
        max-width:  ${ mainPageProperties.mainContainer.maxWidth };
      }
    `,
  MyTitle: styled.div`
      font-size: 1.5em;
      margin: 0 auto;
      text-align: center;
    `,
  MyErrorDiv: styled.div`
      font-size: 1em;
      color: ${mainPageProperties.myErrorDiv.color};
      border: ${mainPageProperties.myErrorDiv.border};
      width: 80%;
      margin: 5px auto;
      padding: 5px;
      text-align: center;
    `,
  MyInput: styled.input`
      margin: 5px;
      width: ${mainPageProperties.myInput.width};
    `,
  SearchFieldContainer: styled.div`
      padding: 5px;
      margin: 5px auto;
    `,
  MyBtn: styled(Button)`
      margin: 5px;
    `,
  MyUL: styled(ListGroup)`
      margin: 10px auto;
      padding: 10px;
      background: ${mainPageProperties.myUL.background};
      text-align: center;
    `,
  MyLI: styled(ListGroup.Item)`
      overflow: hidden;
      width: 100%;
      margin: 0 auto;
    `,
  MyIMG: styled.img`
        width: ${mainPageProperties.myIMG.width};
    `
};

export default StyledComponents;
