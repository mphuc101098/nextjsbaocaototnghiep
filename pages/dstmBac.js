import styles from '../styles/stylesheet.module.css'
import { Table, Navbar, Nav, NavDropdown, Form , Container } from 'react-bootstrap'
export default function Home() {
  return (
    <>
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
      <Container>
        <div className={styles.title}>
          <h1>Danh sách các trường miền Bắc</h1>
        </div>
      <Table className={styles.bgdatatable} striped bordered hover>
        <thead>
          <tr>
            <th>Mã Trường</th>
            <th>Tên Trường</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
          </tr>
          <tr>
            <td>3</td>
            <td>asdsda</td>
          </tr>
        </tbody>
      </Table>
      </Container>
    </>
  )
}
