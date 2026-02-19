// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined, PhoneOutlined } from '@ant-design/icons';
import logo from "../../assests/satish/logo.jpeg";
import './navbar.css';

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const menuItems = [
    { 
      key: '/', 
      label: <Link to="/">Home</Link> 
    },
    { 
      key: '/wedding-decor', 
      label: <Link to="/wedding-decor">Wedding Decor</Link> 
    },
    { 
      key: '/birthday-parties', 
      label: <Link to="/birthday-parties">Birthday</Link> 
    },
    { 
      key: '/baby-showers', 
      label: <Link to="/baby-showers">Baby Showers</Link> 
    },
    { 
      key: '/gallery', 
      label: <Link to="/gallery">Gallery</Link> 
    },
    { 
      key: '/packages', 
      label: <Link to="/packages">Packages</Link> 
    },
    { 
      key: '/about', 
      label: <Link to="/about">About</Link> 
    },
    { 
      key: '/contact', 
      label: <Link to="/contact">Contact</Link> 
    },
  ];

  // Handle menu click for mobile drawer
  const handleMenuClick = (e) => {
    setVisible(false);
    navigate(e.key);
  };

  return (
    <Header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Satish Events" className="logo-image" />
            <div className="logo-text-wrapper">
              <span className="logo-text">SatishEvents</span>
              <span className="logo-tagline">Creating Magical Moments</span>
            </div>
          </Link>
        </div>

        <div className="desktop-menu">
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            className="nav-menu"
          />
          <Button 
            type="primary" 
            icon={<PhoneOutlined />} 
            className="consultation-btn"
            onClick={() => navigate('/contact')}
          >
            Free Consultation
          </Button>
        </div>

        <div className="mobile-menu">
          <Button 
            icon={<MenuOutlined />} 
            onClick={() => setVisible(true)}
            type="text"
            className="mobile-menu-btn"
          />
          <Drawer
            title={
              <div className="drawer-header">
                <img src={logo} alt="Satish Events" className="drawer-logo" />
                <span className="drawer-title">Menu</span>
              </div>
            }
            placement="right"
            onClose={() => setVisible(false)}
            open={visible}
            width={300}
            className="mobile-drawer"
          >
            <Menu
              mode="vertical"
              selectedKeys={[location.pathname]}
              items={menuItems.map(item => ({
                ...item,
                label: item.label
              }))}
              onClick={handleMenuClick}
              className="mobile-drawer-menu"
            />
            <div className="drawer-footer">
              <Button 
                type="primary" 
                icon={<PhoneOutlined />} 
                className="drawer-consultation-btn"
                onClick={() => {
                  setVisible(false);
                  navigate('/contact');
                }}
                block
              >
                Free Consultation
              </Button>
            </div>
          </Drawer>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;