// pages/Contact.js
import React from 'react';
import { Row, Col, Form, Input, Button, Typography, Card } from 'antd';
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined,
  ClockCircleOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
    // Handle form submission
  };

  return (
    <div className="contact-page" style={{ paddingTop: '64px' }}>
      {/* Hero Section */}
      <div style={{ 
        height: '40vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div>
          <Title level={1} style={{ color: 'white' }}>Contact Us</Title>
          <Paragraph style={{ color: 'white', fontSize: '18px' }}>
            Let's discuss your event decoration needs
          </Paragraph>
        </div>
      </div>

      {/* Contact Form & Info */}
      <section style={{ padding: '80px 50px' }}>
        <Row gutter={[50, 50]}>
          <Col xs={24} lg={12}>
            <Title level={2}>Get in Touch</Title>
            <Paragraph style={{ marginBottom: '30px' }}>
              Have a question or want to discuss your event? Fill out the form 
              below and we'll get back to you within 24 hours.
            </Paragraph>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[{ required: true, message: 'Please enter your first name' }]}
                  >
                    <Input placeholder="Enter your first name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[{ required: true, message: 'Please enter your last name' }]}
                  >
                    <Input placeholder="Enter your last name" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please enter your phone number' }]}
              >
                <Input placeholder="Enter your phone number" />
              </Form.Item>

              <Form.Item
                name="eventType"
                label="Event Type"
                rules={[{ required: true, message: 'Please select event type' }]}
              >
                <Input placeholder="e.g., Wedding, Corporate, Birthday" />
              </Form.Item>

              <Form.Item
                name="eventDate"
                label="Event Date"
                rules={[{ required: true, message: 'Please enter event date' }]}
              >
                <Input type="date" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea rows={4} placeholder="Tell us about your event decoration needs" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" size="large" htmlType="submit" block>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Col>

          <Col xs={24} lg={12}>
            <Title level={2}>Contact Information</Title>
            
            <Card style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <PhoneOutlined style={{ fontSize: '24px', color: '#667eea', marginRight: '15px' }} />
                <div>
                  <div style={{ fontWeight: 'bold' }}>Phone</div>
                  <div>+91 98765 43210</div>
                  <div>+91 98765 43211</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <MailOutlined style={{ fontSize: '24px', color: '#667eea', marginRight: '15px' }} />
                <div>
                  <div style={{ fontWeight: 'bold' }}>Email</div>
                  <div>info@satisfevents.com</div>
                  <div>bookings@satisfevents.com</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <EnvironmentOutlined style={{ fontSize: '24px', color: '#667eea', marginRight: '15px' }} />
                <div>
                  <div style={{ fontWeight: 'bold' }}>Address</div>
                  <div>123 Event Street, Andheri East,</div>
                  <div>Mumbai - 400001, Maharashtra</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ClockCircleOutlined style={{ fontSize: '24px', color: '#667eea', marginRight: '15px' }} />
                <div>
                  <div style={{ fontWeight: 'bold' }}>Business Hours</div>
                  <div>Monday - Saturday: 10:00 AM - 8:00 PM</div>
                  <div>Sunday: By Appointment Only</div>
                </div>
              </div>
            </Card>

            {/* Map */}
            <div style={{ 
              height: '300px', 
              background: '#f0f0f0', 
              borderRadius: '8px',
              marginTop: '30px'
            }}>
              {/* Google Map would be integrated here */}
              <div style={{ 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: '#e0e0e0',
                borderRadius: '8px'
              }}>
                <EnvironmentOutlined style={{ fontSize: '48px', color: '#999', marginRight: '10px' }} />
                <span>Map Location</span>
              </div>
            </div>

            {/* FAQ Link */}
            <Card style={{ marginTop: '30px', background: '#f5f5f5' }}>
              <Title level={4}>Frequently Asked Questions</Title>
              <Paragraph>
                Check out our FAQ section for quick answers to common questions about 
                our services, booking process, and more.
              </Paragraph>
              <Button type="link">View FAQs →</Button>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Contact;