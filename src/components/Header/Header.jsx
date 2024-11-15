import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.scss'
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { doLogout } from '../../redux/actions/accountAction';
import { useEffect } from 'react';
const Header = () => {
    const user = useSelector(state => state.account.userInfo)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = () => {
        // navigate(`${process.env.REACT_APP_BACKEND_SSO_LOGIN}`)
        //redirect to sso
        window.location.href = `${process.env.REACT_APP_BACKEND_SSO_LOGIN}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`
    }

    const handleLogout = () => {
        dispatch(doLogout())
    }
    // useEffect(() => {
    //     if(user && !user.access_token){
    //         navigate('/')
    //         // window.location.href = '/'
    //     }
    // }, [user])
    return( 
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>   
                </Nav>
                <Nav>
                    {user && user.access_token &&
                     <Nav.Link href="#">Well come {user.username}</Nav.Link>
                    }
               
                </Nav>
                <Nav>
                     <NavDropdown title="Settings" id="collapsible-nav-dropdown">
                        {user && user.access_token ?
                        <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
                        :
                        <NavDropdown.Item onClick={() => handleLogin()}>Login</NavDropdown.Item>
                        
                         
                        }
                       
                   
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Header