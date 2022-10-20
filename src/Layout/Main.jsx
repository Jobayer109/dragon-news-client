import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav';

const Main = () => {
    return (
        <div className=''>
               <Header></Header>
            <Container>
                <Row>
                    <Col lg='2' className=''>
                        <LeftSideNav></LeftSideNav>
                    </Col>

                    <Col lg='7' className=''>
                        <Outlet></Outlet>
                    </Col>

                    <Col lg='3' className=''>
                       <RightSideNav></RightSideNav>
                    </Col>
                </Row>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default Main;