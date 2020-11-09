import React, { useEffect } from 'react'
import Head from 'next/head'
// import styles from '../styles/CustomHome.module.css'
import styles from '../styles/stylesheet.module.css'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

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
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <Nav.Link href="dstruong">Danh sách trường</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

          </div>
        </header>
        <main className={styles.main}>
          <Container>
            <div >
              <Form.Control type="text" placeholder="Search..." />

            </div>
          </Container>
        </main>
      </div>
    </>
  )
}
