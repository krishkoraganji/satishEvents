// pages/Contact.js
import React from 'react';
import { Row, Col, Typography, Card, Tag, Space, Divider, Button } from 'antd';
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined,
  ClockCircleOutlined,
  UserOutlined,
  WhatsAppOutlined,
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  CheckCircleOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import './index.css';
import w6 from "../../assests/satish/satish.jpeg";
const { Title, Paragraph, Text } = Typography;

const Contact = () => {

  const contactInfo = [
    {
      icon: <UserOutlined />,
      title: 'Satish Koraganji',
      subtitle: 'Founder & Lead Organizer',
      details: ['Personal consultations available']
    },
    {
      icon: <PhoneOutlined />,
      title: 'Phone',
      subtitle: 'Satish (Direct)',
      details: ['+91 8886852544', '+91 6301379131']
    },
    {
      icon: <WhatsAppOutlined />,
      title: 'WhatsApp',
      subtitle: 'Quick Response',
      details: ['+91 8886852544']
    },
    {
      icon: <MailOutlined />,
      title: 'Email',
      subtitle: 'satish@satishevents.com',
      details: ['info@satishevents.com', 'krishkoraganji023@gmail.com']
    },
    {
      icon: <EnvironmentOutlined />,
      title: 'Address',
      subtitle: 'Vijayawada, Andhra Pradesh',
      details: ['Satish Events Office', 'Chittinagar, Vijayawada', 'Andhra Pradesh - 520010']
    },
    {
      icon: <ClockCircleOutlined />,
      title: 'Business Hours',
      subtitle: 'Mon - Sat: 9:00 AM - 10:00 PM',
      details: ['Sunday: By Appointment Only', '24/7 Phone Support Available']
    }
  ];

  const socialLinks = [
    { icon: <InstagramOutlined />, name: 'Instagram', link: 'https://instagram.com/satishkoraganji', color: '#E4405F' },
    { icon: <FacebookOutlined />, name: 'Facebook', link: 'https://facebook.com/satishkoraganji', color: '#1877F2' },
    { icon: <LinkedinOutlined />, name: 'LinkedIn', link: 'https://linkedin.com/in/satishkoraganji', color: '#0A66C2' },
    { icon: <WhatsAppOutlined />, name: 'WhatsApp', link: 'https://wa.me/918886852544', color: '#25D366' },
    { icon: <YoutubeOutlined />, name: 'YouTube', link: 'https://youtube.com/@satishkoraganji', color: '#FF0000' },
    { icon: <TwitterOutlined />, name: 'Twitter', link: 'https://twitter.com/satishkoraganji', color: '#1DA1F2' }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero" style={{ backgroundImage: `url(${w6})` }}>
        <div className="hero-overlay">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <Tag color="gold" className="hero-tag">Get in Touch</Tag>
            <Title level={1} className="hero-title">Contact Satish Koraganji</Title>
            <Paragraph className="hero-description">
              Reach out directly for personal consultation
            </Paragraph>
            <div className="hero-stats">
              <Space size="large">
                <span><CheckCircleOutlined /> 5+ Years Experience</span>
                <span><TeamOutlined /> 250+ Events</span>
                <span><ClockCircleOutlined /> 24/7 Support</span>
              </Space>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="contact-section">
        <Row gutter={[50, 50]}>
          {/* Left Column - Contact Info */}
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="info-header">
                <Tag color="gold" className="info-tag">Connect Directly</Tag>
                <Title level={2} className="info-title">Satish's Contact Details</Title>
                <Paragraph className="info-subtitle">
                  Reach out directly for immediate assistance or personal consultation
                </Paragraph>
              </div>

              <Row gutter={[16, 16]}>
                {contactInfo.map((item, index) => (
                  <Col xs={24} sm={12} key={index}>
                    <Card className="info-card" hoverable>
                      <div className="info-card-icon">{item.icon}</div>
                      <div className="info-card-content">
                        <Title level={5}>{item.title}</Title>
                        <Text strong className="info-subtitle-text">{item.subtitle}</Text>
                        {item.details.map((detail, i) => (
                          <Text key={i} className="info-detail">{detail}</Text>
                        ))}
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>

              {/* Direct Contact Buttons */}
              <div className="direct-contact-section">
                <Title level={4}>Quick Contact</Title>
                <Space size="large" className="direct-buttons">
                  <Button 
                    type="primary" 
                    size="large" 
                    icon={<PhoneOutlined />}
                    href="tel:+919876543210"
                    className="direct-phone-btn"
                  >
                    Call Satish
                  </Button>
                  <Button 
                    type="primary" 
                    size="large" 
                    icon={<WhatsAppOutlined />}
                    href="https://wa.me/919876543210"
                    target="_blank"
                    className="direct-whatsapp-btn"
                  >
                    WhatsApp Satish
                  </Button>
                  <Button 
                    type="primary" 
                    size="large" 
                    icon={<MailOutlined />}
                    href="mailto:satish@satishevents.com"
                    className="direct-email-btn"
                  >
                    Email Satish
                  </Button>
                </Space>
              </div>
            </motion.div>
          </Col>

          {/* Right Column - Social & Location */}
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Divider className="contact-divider">Connect on Social Media</Divider>

              {/* Social Media Links */}
              <div className="social-section">
                <Title level={4}>Follow Satish on Social Media</Title>
                <Space size="large" className="social-links">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      type="primary"
                      shape="circle"
                      icon={social.icon}
                      href={social.link}
                      target="_blank"
                      className="social-btn"
                      style={{ 
                        backgroundColor: social.color,
                        borderColor: social.color
                      }}
                    />
                  ))}
                </Space>
                <div className="social-handles">
                  <Text type="secondary">@satishkoraganji on all platforms</Text>
                </div>
              </div>

              {/* Map Location */}
              <Card className="map-card" title="Visit Our Office">
                <div className="map-container">
                  <div className="map-placeholder">
                    <EnvironmentOutlined className="map-icon" />
                    <Title level={4}>SatisfEvents Office</Title>
                    <Text>Benz Circle, Vijayawada - 520010</Text>
                    <Button 
                      type="primary" 
                      className="map-btn"
                      href="https://maps.google.com/?q=Benz+Circle+Vijayawada"
                      target="_blank"
                    >
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </Card>

              {/* FAQ Quick Link */}
              <Card className="faq-card">
                <Row align="middle" gutter={[16, 16]}>
                  <Col xs={24} md={16}>
                    <Title level={4}>Frequently Asked Questions</Title>
                    <Paragraph>
                      Check out our FAQ section for quick answers about our services, 
                      booking process, and pricing.
                    </Paragraph>
                  </Col>
                  <Col xs={24} md={8} className="text-right">
                    <Button type="primary" href="/faq" className="faq-btn">
                      View FAQs →
                    </Button>
                  </Col>
                </Row>
              </Card>

              {/* Business Hours Note */}
              <Card className="hours-note">
                <div className="hours-note-content">
                  <ClockCircleOutlined className="hours-icon" />
                  <div>
                    <Text strong>Quick Response Guarantee</Text>
                    <br />
                    <Text type="secondary">
                      Satish aims to respond to all inquiries within 24 hours. 
                      For urgent matters, please call or WhatsApp directly.
                    </Text>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </section>

      {/* Map Section - Full Width Alternative */}
      {/* <section className="map-full-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Location</Tag>
          <Title level={2} className="section-title">Find Us in Vijayawada</Title>
          <Paragraph className="section-subtitle">
            Visit our office for a personal consultation with Satish
          </Paragraph>
        </div>
        <div className="full-map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.123456789!2d80.616667!3d16.516667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f123456789%3A0x123456789!2sBenz%20Circle%2C%20Vijayawada!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="SatisfEvents Location"
          ></iframe>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;