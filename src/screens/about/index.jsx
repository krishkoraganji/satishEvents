// pages/About.js
import React from 'react';
import { Row, Col, Typography, Card, Timeline } from 'antd';
import { TeamOutlined, TrophyOutlined, HeartOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About = () => {
  const team = [
    { name: 'Priya Sharma', role: 'Creative Director', experience: '10+ years' },
    { name: 'Rajesh Kumar', role: 'Lead Designer', experience: '8+ years' },
    { name: 'Anita Desai', role: 'Event Coordinator', experience: '6+ years' },
    { name: 'Vikram Singh', role: 'Technical Head', experience: '7+ years' },
  ];

  return (
    <div className="about-page" style={{ paddingTop: '64px' }}>
      {/* Hero Section */}
      <div style={{ 
        height: '50vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div>
          <Title level={1} style={{ color: 'white' }}>About SatisfEvents</Title>
          <Paragraph style={{ color: 'white', fontSize: '18px' }}>
            Creating magical moments since 2014
          </Paragraph>
        </div>
      </div>

      {/* Story Section */}
      <section style={{ padding: '80px 50px' }}>
        <Row gutter={[50, 50]} align="middle">
          <Col xs={24} lg={12}>
            <Title level={2}>Our Story</Title>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Founded in 2014, SatisfEvents began with a simple mission: to transform 
              ordinary spaces into extraordinary experiences. What started as a small 
              team of passionate designers has grown into one of the most trusted event 
              decoration companies in India.
            </Paragraph>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Over the past decade, we've had the privilege of decorating over 500 events, 
              from intimate gatherings to grand celebrations. Our commitment to quality, 
              creativity, and customer satisfaction has made us the go-to choice for 
              clients who demand the best.
            </Paragraph>
          </Col>
          <Col xs={24} lg={12}>
            <div style={{ 
              height: '400px', 
              background: '#f0f0f0', 
              borderRadius: '10px',
              backgroundImage: 'url(/images/about-story.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
          </Col>
        </Row>
      </section>

      {/* Stats */}
      <section style={{ background: '#f5f5f5', padding: '50px' }}>
        <Row gutter={[30, 30]}>
          {[
            { number: '500+', label: 'Events Decorated', icon: <TrophyOutlined /> },
            { number: '50+', label: 'Expert Designers', icon: <TeamOutlined /> },
            { number: '100%', label: 'Client Satisfaction', icon: <HeartOutlined /> },
            { number: '10+', label: 'Years Experience', icon: <TrophyOutlined /> },
          ].map((stat, index) => (
            <Col xs={12} lg={6} key={index}>
              <Card style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', color: '#667eea' }}>{stat.icon}</div>
                <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{stat.number}</div>
                <div>{stat.label}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Team Section */}
      <section style={{ padding: '80px 50px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>
          Meet Our Team
        </Title>
        <Row gutter={[30, 30]}>
          {team.map((member, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card className="team-card">
                <div style={{ 
                  width: '150px', 
                  height: '150px', 
                  borderRadius: '50%', 
                  background: '#667eea',
                  margin: '0 auto 20px'
                }} />
                <Title level={4} style={{ textAlign: 'center' }}>{member.name}</Title>
                <Paragraph style={{ textAlign: 'center', color: '#667eea' }}>
                  {member.role}
                </Paragraph>
                <Paragraph style={{ textAlign: 'center' }}>
                  Experience: {member.experience}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Timeline */}
      <section style={{ background: '#f5f5f5', padding: '80px 50px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>
          Our Journey
        </Title>
        <Timeline mode="alternate" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Timeline.Item color="green">2014 - Company Founded</Timeline.Item>
          <Timeline.Item color="green">2016 - First Major Wedding</Timeline.Item>
          <Timeline.Item color="blue">2018 - Expanded to 5 Cities</Timeline.Item>
          <Timeline.Item color="blue">2020 - Launched Corporate Division</Timeline.Item>
          <Timeline.Item color="gold">2022 - Awarded Best Event Decorator</Timeline.Item>
          <Timeline.Item color="gold">2024 - 10 Years of Excellence</Timeline.Item>
        </Timeline>
      </section>
    </div>
  );
};

export default About;