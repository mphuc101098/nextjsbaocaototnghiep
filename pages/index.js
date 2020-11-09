import React, { useEffect } from 'react'
import Head from 'next/head'
// import styles from '../styles/CustomHome.module.css'
import styles from '../styles/stylesheet.module.css'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Card, } from 'react-bootstrap'

export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <header>
          <div className={styles.headbanner}>
            <Navbar expand="lg" variant="dark">
              <Navbar.Brand href="#home">
                <img
                  src="http://calen.lhu.edu.vn/Images/LHULogoVN.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="dsnganh">Ngành</Nav.Link>
                  <NavDropdown title="Danh Sách Trường" id="basic-nav-dropdown">
                    <NavDropdown.Item href="dstmBac">Miền Bắc</NavDropdown.Item>
                    <NavDropdown.Item href="dstmTrung">Miền Trung</NavDropdown.Item>
                    <NavDropdown.Item href="dstmNam">Miền Nam</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Điểm Chuẩn" id="basic-nav-dropdown">
                    <NavDropdown.Item href="nam2020">Năm 2020</NavDropdown.Item>
                    <NavDropdown.Item href="nam2019">Năm 2019</NavDropdown.Item>
                    <NavDropdown.Item href="nam2018">Năm 2018</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </header>
        <div className={styles.searchbar}>
          <Container>
            <div>
              <Form.Control type="text" placeholder="Search..." />
            </div>
            <div className={styles.button}>
              <Button variant="success">Tìm Kiếm</Button>{' '}
            </div>
            <div className={styles.card}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    asdasdasd
                    asdasd
                    asdasdasdasdasdasd
                </Card.Text>
                  <Button variant="primary">Đi</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    asdasdasd
                    asdasd
                    asdasdasdasdasdasd
                </Card.Text>
                  <Button variant="primary">Đi</Button>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}
