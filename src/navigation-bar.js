import React from 'react'
import logo from './commons/images/icon.png';

import {DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavItem, UncontrolledDropdown} from 'reactstrap';
import {NavLink, withRouter} from "react-router-dom";

const textStyle = {
    color: 'white',
    textDecoration: 'none'
};

const NavigationBar = (props) => {

    const handleLogout = () => {
        localStorage.clear();
        props.history.push("/");
    }

    return (
        <div>
            <Navbar color="dark" light expand="md">
                <NavbarBrand href="/">
                    <img src={logo} width={"50"}
                         height={"35"}/>
                     {props.username}
                </NavbarBrand>
                <Nav className="mr-auto" navbar>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle style={textStyle} nav caret>
                            Menu
                        </DropdownToggle>
                        <DropdownMenu right>

                            {!props.username &&
                                <DropdownItem>
                                    <NavLink className='nav-link' to="/auth">Login</NavLink>
                                </DropdownItem>
                            }

                            <DropdownItem>
                                <NavLink className='nav-link' to="/user">User</NavLink>
                            </DropdownItem>

                            <DropdownItem>
                                <NavLink className='nav-link' to='/client'>Client</NavLink>
                            </DropdownItem>

                            <DropdownItem>
                                <NavLink className='nav-link' to="/device">Device</NavLink>
                            </DropdownItem>

                           
                            {!props.username &&
                                <DropdownItem>
                                    <a className='nav-link' onClick={handleLogout}>Logout</a>
                                </DropdownItem>
                            }

                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
        </div>
    )
}

export default withRouter(NavigationBar);