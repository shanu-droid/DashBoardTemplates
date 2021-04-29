import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

const StyledSideNav = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 55px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 0.5em;      /* Stay at the top */
    background-color: #222; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
    border-right: 1px solid #696969;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    name: 'NavBar',
                    css: 'fa fa-fw fa-bars',
                    key: 1 
                  },
                {
                  path: '/', 
                  name: 'Home',
                  css: 'fa fa-fw fa-home',
                  key: 2 
                },
                {
                  path: '/archive',
                  name: 'Archive',
                  css: 'fa fa-fw fa-archive',
                  key: 3
                },
                {
                    path: '/users',
                    name: 'Users',
                    css: 'fa fa-fw fa-users',
                    key: 4
                  },
                  {
                    path: '/calculator',
                    name: 'Calculator',
                    css: 'fa fa-fw fa-calculator',
                    key: 5
                  },
                {
                    path: '/setting',
                    name: 'Setting',
                    css: 'fas fa-cog',
                    key: 6
                  },
              ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <StyledSideNav>
                {  
                    items.map((item) => {
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height: 30px;
    width: 35px; 
    text-align: center; 
    margin-left:8px;
    margin-bottom: 30px;   
    a {
        font-size: 1.2em;
        color: ${(props) => props.active ? "#0C76E5" : "white"};
        :hover {
            opacity: 0.7;
            text-decoration: none; 
        }  
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`
`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}