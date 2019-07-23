import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Avatar } from "antd";
import HamburgerMenu from "react-hamburger-menu";
import { connect } from "react-redux";

import { clearAuthToken, clearCurrentUser } from "./../../../actions";
import LocalAPI from './../../../apis/local';
import { Dropdown, Nav, UserBadge, Name } from "./header_styles";
import { Capitalized } from "../app_styles";

class NavBar extends Component {

  state = {
    burgerOpen: false,
    mobileNavClass: false
  }

  //NEED TO REFACTOR
  handleBurgerClick = () => {
    console.log("click");
    this.setState({
      burgerOpen: !this.state.burgerOpen,
      mobileNavClass: !this.state.mobileNavClass
    });
  }

  logout = (event) => {
    LocalAPI.get("/users/logout")
      .then(response => {
        this.props.clearAuthToken();
        this.props.clearCurrentUser();
      }).catch(err => {
        console.log(err);
      });
  }

  render() {
    const { firstName, id } = this.props.currentUser;
    const { mobileNavClass } = this.state;
    const { location } = this.props;

    return(
      <Nav location={location}>
        <div className="desktop-nav">
          <ul>
            <li className="dashboard">
              <Link to="/dashboard">Home</Link>
            </li>
            <li className="forum">
              <Link to="/forum">Forum</Link>
            </li>
            <li className="resources">
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
          <Dropdown overlayStyle={{ top: "200px"}} overlay={
              <Menu>
                <Menu.Item key="0">
                  <Link to={`/users/${id}`}>Profile</Link>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="2">
                  <Button type="dashed" onClick={this.logout}>Logout</Button>
                </Menu.Item>
              </Menu>
          } trigger={['click']}>
            <UserBadge>
              <Avatar icon="user" size={35} />
              { firstName &&
                <Name><Capitalized text={firstName} /></Name>
              }
            </UserBadge>
          </Dropdown>
        </div>
        <div className={`mobile-nav ${mobileNavClass}`}>
          <Menu
            mode="inline"
          >
            <Menu.Item key="3">
              <Link to="/forum">Forum</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/faq">FAQ</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/resources">Resources</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="7">
              <Button type="dashed" onClick={this.logout}>Logout</Button>
            </Menu.Item>
          </Menu>
        </div>
        <div className="hamburger">
          <HamburgerMenu 
            menuClicked={this.handleBurgerClick}
            isOpen={this.state.burgerOpen}
            width={30}
            height={25}
          />
        </div>
      </Nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.nav.location
  }
}

export default connect(mapStateToProps, { clearAuthToken, clearCurrentUser })(NavBar);