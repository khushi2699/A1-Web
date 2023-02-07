import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Layout, Menu, Table, Button, Dropdown, Pagination, Space } from 'antd';
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

const Events = () => {
  const { t, i18n } = useTranslation();

  const SingleBox = [
    {
      key: '1',
      icon: 'images/Event1.jpg',
      hoverIcon: 'images/Event1.jpg',
      title: `${t('Unicycling Race')}`,
      price: 'From $ 40',
      date: 'Feb 1, 2023',
      time: '10Am Onwards',
      location: 'Halifax',
      image1: 'images/Image1.jpg',
      image2: 'images/Image2.jpg',
      image3: 'images/Image3.jpg'

    },
  ];

  return (

            <div className="site-layout-background layout-padding">
            <div className="section-wrapper events-details">
              <div className="top-boxes full-width-events" >
                {SingleBox.map((element, index) => (
                  <ScrollAnimation
                    animateOnce
                    className="full-width center-content"
                    animateIn="fadeInUp"
                    delay={index * 300}
                  >
                    <div className="full-width-events" key={element.key}>
                      <img className=" center-img" src={element.icon} alt="product" />
                      <div className="earning-text full-width center-img">{element.title}</div>
                      <div className="earning-text full-width">{element.price}</div>
                          <Space wrap>
                          <Button type="primary" danger>
                            Get tickets
                          </Button>
                          </Space>
                          <div className = "flex-sections">
                               <div className = "flex-item-left">
                                    <div className="earning-text full-width center-img">Date and Time</div>
                                    <div className="earning-text full-width center-img">{element.date}</div>
                                    <div className="earning-text full-width center-img">{element.time}</div>


                               </div>
                               <div className = "flex-item-right">
                                   <div className="earning-text full-width center-img">Location</div>
                                   <div className="earning-text full-width center-img">{element.location}</div>

                                </div>
                          </div>
                          <div className = "flex-sections">
                               <div className = "flex-item-left">
                                  <img className=" center-img" src={element.image1} alt="product" />
                               </div>
                               <div className = "flex-item-right">
                                   <img className=" center-img" src={element.image2} alt="product" />
                                </div>
                                                               <div className = "flex-item-right">
                                                                   <img className=" center-img" src={element.image3} alt="product" />
                                                                </div>
                            </div>



                    </div>
                  </ScrollAnimation>
                ))}
              </div>
              </div>
           </div>

  );
};

export default Events;
