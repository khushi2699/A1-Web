import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { Layout, Menu, Table, Button, Dropdown, Pagination } from 'antd';
import { useTranslation, Trans } from 'react-i18next';
import ScrollAnimation from 'react-animate-on-scroll';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TopHeader from '../../shared/top-header/top-header';

const { Content } = Layout;


const Dashboard = () => {
  const { t, i18n } = useTranslation();
const history = useHistory();

  const TrendingEventBox = [
    {
      key: '1',
      icon: 'images/Event1.jpg',
      hoverIcon: 'images/Event1.jpg',
      title: `${t('Unicycling race')}`,
      price: 'Price: $40',
      date: 'Feb 1,2023',
      location: 'Location: Halifax',
      url: '/events',
    },
    {
      key: '2',
      icon: 'images/Event2.jpg',
      hoverIcon: 'images/Event2.jpg',
      title: `${t('Night party')}`,
      price: 'Price: $30',
            location: 'Location: Halifax',

      date: 'Feb 2,2023',

      url: '/events',
    },
    {
      key: '3',
      icon: 'images/Event3.jpg',
      hoverIcon: 'images/Event3.jpg',
      title: `${t('Tswift Party')}`,
      price: 'Price: $20',
            date: 'Feb 1,2023',
                  location: 'Location: Halifax',


      url: '/events',
    },
    {
      key: '4',
      icon: 'images/Event4.jpg',
      hoverIcon: 'images/Event4.jpg',
      title: `${t('Kite fight')}`,
      price: 'Price: $10',
            date: 'Feb 1,2023',
                  location: 'Location: Halifax',


      url: '/events',
    },
    {
          key: '5',
          icon: 'images/Event5.jpg',
          hoverIcon: 'images/Event5.jpg',
          title: `${t('Colors hub')}`,
          price: 'Price: $40',
                      date: 'Feb 1,2023',
                            location: 'Location: Halifax',


          url: '/events',
        },
        {
              key: '6',
              icon: 'images/Event6.jpg',
              hoverIcon: 'images/Event6.jpg',
              title: `${t('Concert')}`,
              price: 'Price: $40',
                          date: 'Feb 1,2023',
                                location: 'Location: Halifax',


              url: '/events',
            },
  ];

    const OtherEventsBox = [
      {
        key: '1',
        icon: 'images/Event1.jpg',
        hoverIcon: 'images/Event1.jpg',
        title: `${t('Unicycling race')}`,
        price: 'Price: $40',
                    date: 'Feb 1,2023',
                          location: 'Location: Halifax',


        url: '/events',
      },
      {
        key: '2',
        icon: 'images/Event2.jpg',
        hoverIcon: 'images/Event2.jpg',
        title: `${t('Night party')}`,
        price: 'Price: $30',
                    date: 'Feb 1,2023',
                          location: 'Location: Halifax',


        url: '/events',
      },
      {
        key: '3',
        icon: 'images/Event3.jpg',
        hoverIcon: 'images/Event3.jpg',
        title: `${t('Tswift Party')}`,
        price: 'Price: $20',
                    date: 'Feb 1,2023',
                          location: 'Location: Halifax',


        url: '/events',
      },
      {
        key: '4',
        icon: 'images/Event4.jpg',
        hoverIcon: 'images/Event4.jpg',
        title: `${t('Kite fight')}`,
        price: 'Price: $10',
                           date: 'Feb 1,2023',
                                 location: 'Location: Halifax',


        url: '/events',
      },
      {
            key: '5',
            icon: 'images/Event5.jpg',
            hoverIcon: 'images/Event5.jpg',
            title: `${t('Colors hub')}`,
            price: 'Price: $40',
                                date: 'Feb 1,2023',
                                      location: 'Location: Halifax',


            url: '/events',
          },
          {
                key: '6',
                icon: 'images/Event6.jpg',
                hoverIcon: 'images/Event6.jpg',
                title: `${t('Concert')}`,
                price: 'Price: $40',
                                    date: 'Feb 1,2023',
                                          location: 'Location: Halifax',


                url: '/events',
              },
    ];

      const OrganizationBox = [
        {
          key: '1',
          icon: 'images/Event1.jpg',
          hoverIcon: 'images/Event1.jpg',
          title: `${t('The laugh club')}`,
          price: '40',
        },
        {
          key: '2',
          icon: 'images/Event2.jpg',
          hoverIcon: 'images/Event2.jpg',
          title: `${t('The comedy factory')}`,
          price: '30',
        },
      ];

  const handleRedirection = (url) => {
    history.push(url);
  }

  return (
    <Layout>
        <React.Fragment>
          <TopHeader title="EVENTIFY" />
          <Content>
            <div className="site-layout-background layout-padding">
            <div className="section-wrapper">
            <h3>Trending Events</h3>
              <div className="top-boxes full-width horizontal-scroll">
                {TrendingEventBox.map((element, index) => (
                  <ScrollAnimation
                    animateOnce
                    className="full-width single-box"
                    animateIn="fadeInUp"
                    delay={index * 300}
                  >
                    <div className="full-width" key={element.key} onClick={() => handleRedirection(element.url)}>
                      <img className=" center-img" src={element.icon} alt="product" />
                      <div className="earning-text full-width">{element.title}</div>
                      <div className="earning-text full-width new-line" >
                        {element.price}
                      </div>
                      <div className="earning-text full-width new-line">{element.date}</div>
                                            <div className="earning-text full-width">{element.location}</div>


                    </div>
                  </ScrollAnimation>
                ))}
              </div>
              </div>

              <div className="section-wrapper">
              <h3>Other Events</h3>
              <div className="top-boxes full-width horizontal-scroll">
                              {OtherEventsBox.map((element, index) => (
                                <ScrollAnimation
                                  animateOnce
                                  className="full-width single-box"
                                  animateIn="fadeInUp"
                                  delay={index * 300}
                                >
                                  <div className="full-width" key={element.key} onClick={() => handleRedirection(element.url)}>
                                  <img className=" center-img" src={element.icon} alt="product" />
                                                        <div className="earning-text full-width">{element.title}</div>
                                                        <div className="earning-text full-width">{element.price}</div>
                                                                              <div className="earning-text full-width new-line">{element.date}</div>
                                                                                                    <div className="earning-text full-width">{element.location}</div>
                                                      </div>
                                </ScrollAnimation>
                              ))}
                            </div>
                            </div>

<div className="section-wrapper">
              <h3>Organizations</h3>
                            <div className="top-boxes full-width horizontal-scroll">
                                            {OrganizationBox.map((element, index) => (
                                              <ScrollAnimation
                                                animateOnce
                                                className="full-width single-box"
                                                animateIn="fadeInUp"
                                                delay={index * 300}
                                              >
                                                <div className="full-width" key={element.key}>
                                                                      <img className=" center-img" src={element.icon} alt="product" />
                                                                      <div className="earning-text full-width">{element.title}</div>
                                                                    </div>
                                              </ScrollAnimation>
                                            ))}
                                          </div>
                                          </div>
            </div>
          </Content>
        </React.Fragment>

    </Layout>
  );
};

export default Dashboard;
