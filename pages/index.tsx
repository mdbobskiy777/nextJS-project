import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import {useRouter} from 'next/router'
import { fetchEmployersList, setFetching } from '../redux/ducks/employers';
import StyledComponents from '../styled/mainPageStyled';
import { setSearchedName } from '../redux/ducks/searchedName';
import { AppDispatch, RootState } from '../redux/store';

const MainPage = () : JSX.Element => {
  const employersSelector = useSelector((state:RootState) => state.employers.employers);
  const searchedNameSelector = useSelector((state:RootState) => state.searchedName.searchedName);
  const isFetchingSelector = useSelector((state:RootState) => state.employers.isFetching);

  const dispatch = useDispatch<AppDispatch>();

  const [isValidName, setValid] = useState<boolean | null>(null);
  const [errorShowing, setErrorShowing] = useState<boolean>(false);

  const router = useRouter()

  useEffect(() => {
    dispatch(setFetching(true));
    dispatch(fetchEmployersList());
  }, []);

  useEffect(() => {
    if (isValidName) {
      router.push({
        pathname:`/employers/}`,
        query: { name: searchedNameSelector },
      });
      setErrorShowing(false);
    } else if(!isValidName) {
      setErrorShowing(false);
      setErrorShowing(searchedNameSelector !== '');
    }
  }, [isValidName]);

  const checkValidName = () => {
    setValid(searchEmployer(searchedNameSelector));
  };

  const searchEmployer = (name: string):boolean => employersSelector.includes(name);

  const OnSearchClickHandler = () => {
    checkValidName();
  };

  const OnChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorShowing(false);
    setValid(null);
    dispatch(setSearchedName(event.target.value));
  };

  return (
    <Container>
      <StyledComponents.MainContainer>
        <Row className="justify-content-center">
          <Col>
            <StyledComponents.MyTitle>Enter the employee name</StyledComponents.MyTitle>
            <StyledComponents.SearchFieldContainer>
              <StyledComponents.MyInput
                type='text'
                value={searchedNameSelector}
                placeholder='Enter name here'
                onChange={(event) => OnChangeInputHandler(event)}
              />
              <StyledComponents.MyBtn onClick={() => OnSearchClickHandler()}>
                Search
              </StyledComponents.MyBtn>
            </StyledComponents.SearchFieldContainer>
            {errorShowing && (
              <StyledComponents.MyErrorDiv>
                Wrong employer name! Please enter correct name
              </StyledComponents.MyErrorDiv>
            )}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <StyledComponents.MyUL>
              {isFetchingSelector ? (
                <div>
                  <StyledComponents.MyIMG src = "../assets/images/preloader.svg" />
                </div>
              ) : (
                employersSelector.map(( employee: string, index: React.Key ) => (
                  <StyledComponents.MyLI key={index}>
                    {employee}
                  </StyledComponents.MyLI>
                ))
              )}
            </StyledComponents.MyUL>
          </Col>
        </Row>
      </StyledComponents.MainContainer>
    </Container>
  );
};

MainPage.getInitialProps = async function (props: any) {
  props.store.dispatch(fetchEmployersList());
};

export default MainPage;
