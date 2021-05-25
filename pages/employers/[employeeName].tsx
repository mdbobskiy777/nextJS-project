import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from "next/router";
import { fetchSubordinates, setFetching, setSubordinatesList } from '../../redux/ducks/subordinates';
import OverviewPageStyled from '../../styled/overviewPageStyled';
import { AppDispatch, RootState } from '../../redux/store';

const OverviewPage = () : JSX.Element => {

  const employerDataSelector = useSelector((state:RootState) => state.subordinates.employerData);

  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();
  const name = router.query.name;

  useEffect(() => {
    dispatch(setFetching(true));
    if (name) dispatch(fetchSubordinates(name as string));
  }, [name]);

  useEffect(() => {
    return () => {
      dispatch(setSubordinatesList(['', {'direct-subordinates': []}]));
    };
  },[]);

  return (
    <Container>
      <OverviewPageStyled.MainContainer>
        <Row className="justify-content-center">
          <Col>
            <OverviewPageStyled.MyTittle>{name}</OverviewPageStyled.MyTittle>
            {employerDataSelector[0] && (
              <OverviewPageStyled.MyDiv>
                {employerDataSelector[0] && (
                  `Direct subordinates: ${employerDataSelector[0]}`
                )}
              </OverviewPageStyled.MyDiv>
            )}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <OverviewPageStyled.MyUL>
              {employerDataSelector[1]?(
                Object.values(employerDataSelector[1])[0].map(
                  ( subordinate: string , index: React.Key ) =>
                    <OverviewPageStyled.MyLI key={index}>
                      {subordinate}
                    </OverviewPageStyled.MyLI>
                )) : (
                (employerDataSelector[0]) && (
                  <div>Haven`t subordinates</div>
                )
              )}
            </OverviewPageStyled.MyUL>
          </Col>
        </Row>
      </OverviewPageStyled.MainContainer>
    </Container>
  );
};

OverviewPage.getInitialProps = async function (props: any) {
  const name = props.query.name.toString();
  const nameArray: string [] = Object.keys(name).reduce(function(res, v) {
    return res.concat(name[v]);
  }, []);
  const correctName: string = nameArray.join("") ;

  props.store.dispatch(fetchSubordinates(correctName));
};

export default OverviewPage;
