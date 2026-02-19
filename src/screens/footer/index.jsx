// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Typography, Space, Input, Button } from 'antd';
import { 
  FacebookOutlined, 
  InstagramOutlined, 
  TwitterOutlined, 
  YoutubeOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined 
} from '@ant-design/icons';
import './index.css';

const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter = () => {
  return (
    <Footer className="app-footer">
      <div className="footer-content">
        <Row gutter={[48, 32]}>
          <Col xs={24} sm={12} lg={6}>
            <div className="footer-section">
              <Title level={4}>SatishEvents</Title>
              <Text className="footer-description">
                Creating magical moments with exceptional event decorations. 
                We transform your vision into reality.
              </Text>
              <div className="social-links">
                <Space size="middle">
                  <FacebookOutlined className="social-icon" />
                  <InstagramOutlined className="social-icon" />
                  <TwitterOutlined className="social-icon" />
                  <YoutubeOutlined className="social-icon" />
                </Space>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <div className="footer-section">
              <Title level={4}>Quick Links</Title>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/packages">Packages</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
              </ul>
            </div>
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <div className="footer-section">
              <Title level={4}>Services</Title>
              <ul className="footer-links">
                <li><Link to="/wedding-decor">Wedding Decor</Link></li>
                <li><Link to="/corporate-events">Corporate Events</Link></li>
                <li><Link to="/birthday-parties">Birthday Parties</Link></li>
                <li><Link to="/baby-showers">Baby Showers</Link></li>
                <li><Link to="/anniversary">Anniversary</Link></li>
              </ul>
            </div>
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <div className="footer-section">
              <Title level={4}>Contact Info</Title>
              <ul className="contact-info">
                <li>
                  <EnvironmentOutlined />
                  <span>123 Event Street, Mumbai - 400001</span>
                </li>
                <li>
                  <PhoneOutlined />
                  <span>+91 98765 43210</span>
                </li>
                <li>
                  <MailOutlined />
                  <span>info@satishevents.com</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <div className="newsletter-section">
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} md={12}>
              <Title level={4}>Subscribe to Our Newsletter</Title>
              <Text>Get latest decoration ideas and offers</Text>
            </Col>
            <Col xs={24} md={12}>
              <Input.Group compact>
                <Input 
                  style={{ width: 'calc(100% - 100px)' }} 
                  placeholder="Your email address"
                />
                <Button type="primary">Subscribe</Button>
              </Input.Group>
            </Col>
          </Row>
        </div>

        <div className="footer-bottom">
          <Row justify="space-between" align="middle">
            <Col>
              <Text>© 2026 SatishEvents. All rights reserved.</Text>
            </Col>
            <Col>
              <Space size="middle">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/sitemap">Sitemap</Link>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;