// pages/About.js
import React from 'react';
import { Row, Col, Typography, Card, Timeline, Tag, Avatar, Button, Space, Divider } from 'antd';
import { 
  TeamOutlined, 
  TrophyOutlined, 
  HeartOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  UserOutlined,
  InstagramOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  CrownOutlined,
  RocketOutlined,
  GiftOutlined,
  HomeOutlined,
  SmileOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
// Import images from your wedding folder
import w1 from "../../assests/wedding/w1.jpeg";
import w2 from "../../assests/wedding/w2.jpeg";
import w3 from "../../assests/wedding/w3.jpeg";
import w4 from "../../assests/wedding/w1.jpeg";
import w5 from "../../assests/wedding/w2.jpeg";
import w6 from "../../assests/wedding/w3.jpeg";
import s1 from "../../assests/satish/satish.jpeg"
import './index.css';

const { Title, Paragraph, Text } = Typography;

const About = () => {
  const team = [
    { 
      name: 'Satish Koraganji', 
      role: 'Founder & Lead Organizer', 
      experience: '5+ years',
      speciality: 'All Events',
      image: s1,
      social: {
        instagram: 'https://instagram.com/satishkoraganji',
        facebook: 'https://facebook.com/satishkoraganji',
        linkedin: 'https://linkedin.com/in/satishkoraganji',
        whatsapp: 'https://wa.me/919876543210'
      }
    }
  ];

  const milestones = [
    { year: '2019', event: 'Started SatishEvents with a vision to transform event decorations', icon: <RocketOutlined /> },
    { year: '2020', event: 'First major wedding decoration at Hotel Ilapuram, Vijayawada', icon: <HeartOutlined /> },
    { year: '2021', event: 'Expanded team and started handling corporate events', icon: <TeamOutlined /> },
    { year: '2022', event: 'Successfully decorated 100+ events across Andhra Pradesh', icon: <TrophyOutlined /> },
    { year: '2023', event: 'Launched dedicated traditional ceremonies division', icon: <HomeOutlined /> },
    { year: '2024', event: '5+ years of excellence - Serving clients across 7+ cities', icon: <CrownOutlined /> }
  ];

  const stats = [
    { number: '250+', label: 'Events Decorated', icon: <TrophyOutlined />, color: '#c6a15b' },
    { number: '15+', label: 'Team Members', icon: <TeamOutlined />, color: '#c6a15b' },
    { number: '100%', label: 'Client Satisfaction', icon: <HeartOutlined />, color: '#c6a15b' },
    { number: '5+', label: 'Years Experience', icon: <RocketOutlined />, color: '#c6a15b' }
  ];

  const achievements = [
    { year: '2022', title: 'Best Wedding Decorator - Vijayawada', icon: <CrownOutlined /> },
    { year: '2023', title: 'Excellence in Traditional Ceremonies', icon: <HomeOutlined /> },
    { year: '2024', title: 'Most Creative Event Team - Andhra Pradesh', icon: <TrophyOutlined /> }
  ];

  const services = [
    { name: 'Wedding Decorations', count: '100+', icon: <HeartOutlined /> },
    { name: 'Corporate Events', count: '50+', icon: <TeamOutlined /> },
    { name: 'Birthday Parties', count: '200+', icon: <GiftOutlined /> },
    { name: 'House Ceremonies', count: '80+', icon: <HomeOutlined /> },
    { name: 'Baby Showers', count: '60+', icon: <SmileOutlined /> },
    { name: 'Haldi Ceremonies', count: '40+', icon: <CheckCircleOutlined /> }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero" style={{ backgroundImage: `url(${w6})` }}>
        <div className="hero-overlay">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <Tag color="gold" className="hero-tag">Since 2019</Tag>
            <Title level={1} className="hero-title">Satish Koraganji</Title>
            <Paragraph className="hero-subtitle">
              Founder & Lead Organizer at SatishEvents
            </Paragraph>
            <Paragraph className="hero-description">
              Creating magical moments with passion, creativity, and attention to detail
            </Paragraph>
            <Space size="large" className="hero-social">
              <Button shape="circle" icon={<InstagramOutlined />} href="https://instagram.com/satishkoraganji" target="_blank" />
              <Button shape="circle" icon={<FacebookOutlined />} href="https://facebook.com/satishkoraganji" target="_blank" />
              <Button shape="circle" icon={<LinkedinOutlined />} href="https://linkedin.com/in/satishkoraganji" target="_blank" />
              <Button shape="circle" icon={<WhatsAppOutlined />} href="https://wa.me/919876543210" target="_blank" />
              <Button shape="circle" icon={<YoutubeOutlined />} href="https://youtube.com/@satishkoraganji" target="_blank" />
            </Space>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <section className="story-section">
        <Row gutter={[50, 50]} align="middle">
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Tag color="gold" className="section-tag">Meet the Founder</Tag>
              <Title level={2} className="section-title">Satish Koraganji's Journey</Title>
              <Paragraph className="story-text">
                With over 5 years of experience in event decoration, Satish Koraganji founded 
                SatishEvents with a simple vision: to transform ordinary spaces into extraordinary 
                experiences. His journey began in 2019 with a small team of passionate designers, 
                and today, he leads one of the most trusted event decoration companies in Andhra Pradesh.
              </Paragraph>
              <Paragraph className="story-text">
                Satish's attention to detail, creative vision, and commitment to customer satisfaction 
                have made him the go-to choice for clients who demand the best. He personally oversees 
                every major event, ensuring that each decoration reflects the client's unique style 
                and vision.
              </Paragraph>
              
              <div className="founder-info">
                <div className="info-item">
                  <UserOutlined /> <strong>Name:</strong> Satish Koraganji
                </div>
                <div className="info-item">
                  <CalendarOutlined /> <strong>Experience:</strong> 5+ Years
                </div>
                <div className="info-item">
                  <EnvironmentOutlined /> <strong>Based in:</strong> Vijayawada, Andhra Pradesh
                </div>
                <div className="info-item">
                  <HeartOutlined /> <strong>Specialty:</strong> Weddings, House Ceremonies, Corporate Events
                </div>
              </div>

              <Divider className="contact-divider" />

              <div className="contact-info">
                <Title level={5}>Connect with Satish</Title>
                <Space direction="vertical" className="contact-details">
                  {/* <Space><MailOutlined /> satish@satishevents.com</Space> */}
                  <Space><PhoneOutlined /> +91 88868 52544</Space>
                  <Space><WhatsAppOutlined /> +91 88868 52544</Space>
                </Space>
              </div>
            </motion.div>
          </Col>
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="founder-image-wrapper"
            >
              <img src={s1} alt="Satish Koraganji" className="founder-image" />
              <div className="experience-badge">
                <div className="experience-number">5+</div>
                <div className="experience-text">Years of Excellence</div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <Row gutter={[30, 30]} justify="center">
          {stats.map((stat, index) => (
            <Col xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="stat-card">
                  <div className="stat-icon" style={{ color: stat.color }}>{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <Row gutter={[30, 30]}>
          <Col xs={24} md={12}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="mission-card">
                <div className="mission-icon"><RocketOutlined /></div>
                <Title level={3}>Our Mission</Title>
                <Paragraph>
                  To transform ordinary spaces into extraordinary experiences through 
                  creative decoration, attention to detail, and unwavering commitment 
                  to customer satisfaction.
                </Paragraph>
              </Card>
            </motion.div>
          </Col>
          <Col xs={24} md={12}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="mission-card">
                <div className="mission-icon"><CrownOutlined /></div>
                <Title level={3}>Our Vision</Title>
                <Paragraph>
                  To be the most trusted and creative event decoration company in India, 
                  known for blending traditional elegance with modern innovation.
                </Paragraph>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </section>

      {/* Journey Timeline */}
      <section className="timeline-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Journey</Tag>
          <Title level={2} className="section-title">Satish's Journey</Title>
          <Paragraph className="section-subtitle">
            5+ years of creating magical moments
          </Paragraph>
        </div>

        <Timeline mode="alternate" className="journey-timeline">
          {milestones.map((item, index) => (
            <Timeline.Item 
              key={index}
              dot={item.icon}
              color="gold"
              className="timeline-item"
            >
              <div className="timeline-content">
                <Tag color="gold" className="timeline-year">{item.year}</Tag>
                <Paragraph className="timeline-event">{item.event}</Paragraph>
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Expertise</Tag>
          <Title level={2} className="section-title">Events Handled by Satish</Title>
          <Paragraph className="section-subtitle">
            With personal attention to every detail
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {services.map((service, index) => (
            <Col xs={12} sm={8} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <Title level={5}>{service.name}</Title>
                  <Tag color="gold">{service.count}+ Events</Tag>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Achievements */}
      <section className="achievements-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Achievements</Tag>
          <Title level={2} className="section-title">Recognition & Awards</Title>
          <Paragraph className="section-subtitle">
            Milestones that mark our journey of excellence
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {achievements.map((achievement, index) => (
            <Col xs={24} md={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="achievement-card">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <Tag color="gold" className="achievement-year">{achievement.year}</Tag>
                  <Title level={4}>{achievement.title}</Title>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Team Section - Satish Only */}
      <section className="team-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Leadership</Tag>
          <Title level={2} className="section-title">Meet the Founder</Title>
          <Paragraph className="section-subtitle">
            The creative mind behind SatishEvents
          </Paragraph>
        </div>

        <Row gutter={[30, 30]} justify="center">
          {team.map((member, index) => (
            <Col xs={24} sm={16} md={12} lg={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="founder-card">
                  <div className="founder-card-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <Title level={3} className="founder-name">{member.name}</Title>
                  <Tag color="gold" className="founder-role">{member.role}</Tag>
                  <div className="founder-details">
                    <p><TrophyOutlined /> Experience: {member.experience}</p>
                    <p><HeartOutlined /> Speciality: {member.speciality}</p>
                  </div>
                  <Divider className="founder-divider" />
                  <div className="founder-social">
                    <Title level={5}>Connect with Satish</Title>
                    <Space size="large" className="social-links">
                      <Button shape="circle" icon={<InstagramOutlined />} href={member.social.instagram} target="_blank" />
                      <Button shape="circle" icon={<FacebookOutlined />} href={member.social.facebook} target="_blank" />
                      <Button shape="circle" icon={<LinkedinOutlined />} href={member.social.linkedin} target="_blank" />
                      <Button shape="circle" icon={<WhatsAppOutlined />} href={member.social.whatsapp} target="_blank" />
                    </Space>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta-section">
        <Card className="contact-cta-card">
          <Row gutter={[30, 30]} align="middle">
            <Col xs={24} md={16}>
              <Title level={2}>Work with Satish</Title>
              <Paragraph>
                Looking for a decoration expert who personally ensures every detail is perfect? 
                Satish would love to discuss your event vision.
              </Paragraph>
            </Col>
            <Col xs={24} md={8} className="text-center">
              <Button type="primary" size="large" className="contact-cta-btn" href="/contact">
                Contact Satish
              </Button>
              <div className="social-proof">
                <Text type="secondary">Available on WhatsApp</Text>
                <Button type="link" icon={<WhatsAppOutlined />} href="https://wa.me/918886852544" target="_blank">
                  +91 8886852544
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </section>
    </div>
  );
};

export default About;