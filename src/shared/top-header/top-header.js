import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation, Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import { Layout, Menu, Table, Button, Dropdown, Switch, Input } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const TopHeader = ({ title }) => {
  const { t } = useTranslation();
  const raceMenu = (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/edit-profile">
          Edit Profile
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/" rel="noopener noreferrer">
          Change Password
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/login">
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="site-layout-sub-header-background page-top-section full-width flex-center">
      <h2>{t(`${title}`)}</h2>
      <div className="">
        <Input placeholder="Search..." className="custom-search" />
      </div>

      <div className="flex-center topbar-switch">
        <div className="full-width profile-section flex-center">
          <div className="title">Demo User</div>
          <div className="profile-image">
          </div>
          <div className="my-profile-menu">
            <div id="profile_dd" className="default-dropdown top-arrow">
              <Dropdown
                overlay={raceMenu}
                placement="bottomLeft"
                getPopupContainer={() => document.getElementById('profile_dd')}
              >
                <Button className="race">
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </Button>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

TopHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TopHeader;
