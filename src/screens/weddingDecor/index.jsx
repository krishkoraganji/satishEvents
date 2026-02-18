// pages/WeddingDecor.js
import React, { useState } from 'react';
import { Row, Col, Card, Button, Typography, Space, Tabs, Tag, Modal } from 'antd';
import { 
  HeartOutlined, 
  CameraOutlined, 
  ShareAltOutlined,
  CheckCircleOutlined 
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import './index.css';

const { Title, Paragraph } = Typography;

const WeddingDecor = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const weddingPackages = [
    {
      name: 'Essential Wedding',
      price: '₹1,50,000',
      features: [
        'Basic Mandap Decoration',
        'Fresh Flower Arrangements',
        'Welcome Gate Decor',
        'Stage Backdrop',
        'Basic Lighting',
        '2 Flower Bouquets'
      ],
      recommended: false
    },
    {
      name: 'Premium Wedding',
      price: '₹3,50,000',
      features: [
        'Luxury Mandap Design',
        'Premium Fresh Flowers',
        'Complete Venue Decor',
        'Advanced Lighting Setup',
        'Photo Booth Area',
        'Bridal Room Decor',
        'Welcome Signs',
        'Centerpieces for 50 Tables'
      ],
      recommended: true
    },
    {
      name: 'Luxury Wedding',
      price: '₹6,50,000',
      features: [
        'Custom Mandap Design',
        'Imported Flowers',
        'Full Venue Transformation',
        'Professional Lighting Design',
        'LED Wall/Backdrop',
        'Premium Photo Booth',
        'Bridal Suite Decor',
        'Custom Signage',
        'Flower Wall',
        'Fireworks Display'
      ],
      recommended: false
    }
  ];

  const galleryImages = [
    { id: 1, category: 'Mandap', image: '/images/wedding-mandap-1.jpg' },
    { id: 2, category: 'Reception', image: '/images/wedding-reception-1.jpg' },
    { id: 3, category: 'Flowers', image: '/images/wedding-flowers-1.jpg' },
    { id: 4, category: 'Lighting', image: '/images/wedding-lighting-1.jpg' },
    { id: 5, category: 'Stage', image: '/images/wedding-stage-1.jpg' },
    { id: 6, category: 'Table Setup', image: '/images/wedding-table-1.jpg' },
    { id: 7, category: 'Entrance', image: '/images/wedding-entrance-1.jpg' },
    { id: 8, category: 'Bridal', image: '/images/wedding-bridal-1.jpg' }
  ];

  return (
    <div className="wedding-decor-page">
      {/* Hero Section */}
      <div className="wedding-hero">
        <div className="hero-overlay">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title level={1}>Wedding Decorations</Title>
            <Paragraph>
              Create the wedding of your dreams with our exquisite decorations
            </Paragraph>
            <Button type="primary" size="large">
              Start Planning
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decoration Categories */}
      <section className="categories-section">
        <Title level={2}>Wedding Decoration Categories</Title>
        <Row gutter={[24, 24]}>
          {[
            { title: 'Mandap Decor', icon: '🏛️', count: 45 },
            { title: 'Reception Setup', icon: '🎉', count: 38 },
            { title: 'Flower Arrangements', icon: '🌸', count: 52 },
            { title: 'Lighting Design', icon: '💡', count: 31 },
            { title: 'Stage Backdrop', icon: '🎭', count: 42 },
            { title: 'Table Settings', icon: '🍽️', count: 56 },
          ].map((item, index) => (
            <Col xs={12} sm={8} md={4} key={index}>
              <Card hoverable className="category-card">
                <div className="category-icon">{item.icon}</div>
                <Title level={5}>{item.title}</Title>
                <Tag color="gold">{item.count} Designs</Tag>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Wedding Packages */}
      <section className="packages-section">
        <Title level={2}>Wedding Decoration Packages</Title>
        <Paragraph className="section-subtitle">
          Choose the perfect package for your special day
        </Paragraph>

        <Row gutter={[24, 24]}>
          {weddingPackages.map((pkg, index) => (
            <Col xs={24} md={8} key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`package-card ${pkg.recommended ? 'recommended' : ''}`}>
                  {pkg.recommended && <div className="recommended-badge">Most Popular</div>}
                  <Title level={3}>{pkg.name}</Title>
                  <div className="package-price">{pkg.price}</div>
                  <ul className="package-features">
                    {pkg.features.map((feature, i) => (
                      <li key={i}>
                        <CheckCircleOutlined /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Button type={pkg.recommended ? 'primary' : 'default'} block>
                    Select Package
                  </Button>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-header">
          <Title level={2}>Wedding Decoration Gallery</Title>
          <Space>
            <Button icon={<CameraOutlined />}>View All Photos</Button>
            <Button icon={<ShareAltOutlined />}>Share</Button>
          </Space>
        </div>

        <Tabs defaultActiveKey="1" className="gallery-tabs">
          <Tabs.TabPane tab="All" key="1">
            <Row gutter={[16, 16]}>
              {galleryImages.map((item) => (
                <Col xs={12} sm={8} md={6} key={item.id}>
                  <div 
                    className="gallery-item"
                    onClick={() => {
                      setSelectedImage(item);
                      setModalVisible(true);
                    }}
                  >
                    <img src={item.image} alt={item.category} />
                    <div className="gallery-item-overlay">
                      <Tag color="gold">{item.category}</Tag>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Mandap" key="2">
            <Row gutter={[16, 16]}>
              {galleryImages.filter(i => i.category === 'Mandap').map((item) => (
                <Col xs={12} sm={8} md={6} key={item.id}>
                  <div className="gallery-item">
                    <img src={item.image} alt={item.category} />
                  </div>
                </Col>
              ))}
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Reception" key="3">
            <Row gutter={[16, 16]}>
              {galleryImages.filter(i => i.category === 'Reception').map((item) => (
                <Col xs={12} sm={8} md={6} key={item.id}>
                  <div className="gallery-item">
                    <img src={item.image} alt={item.category} />
                  </div>
                </Col>
              ))}
            </Row>
          </Tabs.TabPane>
        </Tabs>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <Title level={2}>Happy Couples</Title>
        <Row gutter={[24, 24]}>
          {[1, 2, 3].map((item) => (
            <Col xs={24} md={8} key={item}>
              <Card className="testimonial-card">
                <HeartOutlined className="testimonial-icon" />
                <Paragraph>
                  "The team created the most beautiful wedding setup we could have imagined. 
                  Every guest complimented the decorations!"
                </Paragraph>
                <div className="testimonial-author">
                  <strong>- Priya & Rahul</strong>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Image Modal */}
      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={800}
      >
        {selectedImage && (
          <div>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.category}
              style={{ width: '100%' }}
            />
            <div className="modal-footer">
              <Tag color="gold">{selectedImage.category}</Tag>
              <Button type="primary" icon={<ShareAltOutlined />}>
                Share
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default WeddingDecor;