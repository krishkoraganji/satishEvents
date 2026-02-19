// pages/WeddingDecor.js
import React, { useState } from 'react';
import { Row, Col, Card, Button, Typography, Space, Tabs, Tag, Modal } from 'antd';
import { 
  HeartOutlined, 
  CameraOutlined, 
  ShareAltOutlined,
  CheckCircleOutlined,
  EnvironmentOutlined,
  UserOutlined,
  CalendarOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
// Import images from your wedding folder
import w1 from "../../assests/wedding/w1.jpeg";
import w2 from "../../assests/wedding/w2.jpeg";
import w3 from "../../assests/wedding/w3.jpeg";
import w4 from "../../assests/wedding/w1.jpeg";
import w5 from "../../assests/wedding/w2.jpeg";
import w6 from "../../assests/wedding/w3.jpeg";
import w7 from "../../assests/wedding/w1.jpeg";
import w8 from "../../assests/wedding/w2.jpeg";
import w9 from "../../assests/wedding/w3.jpeg";
import './index.css';

const { Title, Paragraph, Text } = Typography;

const WeddingDecor = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const weddingPackages = [
    {
      name: 'Essential Wedding',
      features: [
        'Basic Mandap Decoration',
        'Fresh Flower Arrangements',
        'Welcome Gate Decor',
        'Stage Backdrop',
        'Basic Lighting',
        '2 Flower Bouquets'
      ],
      recommended: false,
      image: w1
    },
    {
      name: 'Premium Wedding',
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
      recommended: true,
      image: w2
    },
    {
      name: 'Luxury Wedding',
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
      recommended: false,
      image: w3
    }
  ];

  const galleryImages = [
    { id: 1, category: 'Mandap', image: w1, title: 'Elegant Mandap Setup', location: 'Vijayawada', year: '2024' },
    { id: 2, category: 'Reception', image: w2, title: 'Grand Reception Hall', location: 'Guntur', year: '2024' },
    { id: 3, category: 'Flowers', image: w3, title: 'Luxury Floral Arrangements', location: 'Tenali', year: '2023' },
    { id: 4, category: 'Lighting', image: w4, title: 'Dramatic Lighting Design', location: 'Vijayawada', year: '2024' },
    { id: 5, category: 'Stage', image: w5, title: 'Royal Stage Setup', location: 'Mangalagiri', year: '2024' },
    { id: 6, category: 'Table Setup', image: w6, title: 'Elegant Table Settings', location: 'Guntur', year: '2023' },
    { id: 7, category: 'Entrance', image: w7, title: 'Stunning Entrance Decor', location: 'Vijayawada', year: '2024' },
    { id: 8, category: 'Bridal', image: w8, title: 'Bridal Room Decoration', location: 'Tenali', year: '2023' },
    { id: 9, category: 'Mandap', image: w9, title: 'Traditional Mandap Design', location: 'Vijayawada', year: '2024' }
  ];

  const categories = [
    { title: 'Mandap Decor', icon: '🏛️', count: 45, image: w1 },
    { title: 'Reception Setup', icon: '🎉', count: 38, image: w2 },
    { title: 'Flower Arrangements', icon: '🌸', count: 52, image: w3 },
    { title: 'Lighting Design', icon: '💡', count: 31, image: w4 },
    { title: 'Stage Backdrop', icon: '🎭', count: 42, image: w5 },
    { title: 'Table Settings', icon: '🍽️', count: 56, image: w6 },
    { title: 'Entrance Decor', icon: '🚪', count: 34, image: w7 },
    { title: 'Bridal Setup', icon: '👰', count: 28, image: w8 }
  ];

  const testimonials = [
    {
      name: 'Priya & Rahul',
      event: 'Wedding - Vijayawada',
      text: 'The team created the most beautiful wedding setup we could have imagined. Every guest complimented the decorations! The mandap design was absolutely stunning.',
      image: w1,
      date: 'March 2024',
      location: 'Vijayawada'
    },
    {
      name: 'Anjali & Vikram',
      event: 'Wedding - Guntur',
      text: 'Exceptional work on our wedding decor. The lighting and flower arrangements created a magical atmosphere. Highly recommend their services!',
      image: w2,
      date: 'February 2024',
      location: 'Guntur'
    },
    {
      name: 'Kavita & Suresh',
      event: 'Wedding - Tenali',
      text: 'From the welcome gate to the stage setup, every detail was perfect. The team was professional and delivered beyond our expectations.',
      image: w3,
      date: 'January 2024',
      location: 'Tenali'
    }
  ];

  const getFilteredImages = () => {
    if (activeTab === 'all') return galleryImages;
    return galleryImages.filter(img => img.category.toLowerCase() === activeTab.toLowerCase());
  };

  return (
    <div className="wedding-decor-page">
      {/* Hero Section */}
      <div className="wedding-hero" style={{ backgroundImage: `url(${w9})` }}>
        <div className="hero-overlay">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title level={1} className="hero-title">Wedding Decorations</Title>
            <Paragraph className="hero-description">
              Create the wedding of your dreams with our exquisite decorations
            </Paragraph>
            <Button type="primary" size="large" className="hero-btn">
              Start Planning
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decoration Categories */}
      <section className="categories-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Categories</Tag>
          <Title level={2} className="section-title">Wedding Decoration Categories</Title>
          <Paragraph className="section-subtitle">
            Explore our wide range of wedding decoration services
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {categories.map((item, index) => (
            <Col xs={12} sm={8} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hoverable className="category-card">
                  <div className="category-icon">{item.icon}</div>
                  <Title level={5}>{item.title}</Title>
                  <Tag color="gold">{item.count} Designs</Tag>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Wedding Packages */}
      <section className="packages-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Packages</Tag>
          <Title level={2} className="section-title">Wedding Decoration Packages</Title>
          <Paragraph className="section-subtitle">
            Choose the perfect package for your special day
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {weddingPackages.map((pkg, index) => (
            <Col xs={24} md={8} key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`package-card ${pkg.recommended ? 'recommended' : ''}`}>
                  {pkg.recommended && <div className="recommended-badge">Most Popular</div>}
                  <div className="package-image-wrapper">
                    <img src={pkg.image} alt={pkg.name} className="package-image" />
                  </div>
                  <Title level={3} className="package-name">{pkg.name}</Title>
                  <ul className="package-features">
                    {pkg.features.map((feature, i) => (
                      <li key={i}>
                        <CheckCircleOutlined /> {feature}
                      </li>
                    ))}
                  </ul>
                  {/* <Button type={pkg.recommended ? 'primary' : 'default'} block className="package-btn">
                    Select Package
                  </Button> */}
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Portfolio</Tag>
          <Title level={2} className="section-title">Wedding Decoration Gallery</Title>
          <Paragraph className="section-subtitle">
            Browse through our stunning wedding decoration portfolio
          </Paragraph>
        </div>

        <Tabs 
          activeKey={activeTab} 
          onChange={setActiveTab}
          className="gallery-tabs"
          centered
        >
          <Tabs.TabPane tab="All" key="all" />
          <Tabs.TabPane tab="Mandap" key="mandap" />
          <Tabs.TabPane tab="Reception" key="reception" />
          <Tabs.TabPane tab="Flowers" key="flowers" />
          <Tabs.TabPane tab="Lighting" key="lighting" />
        </Tabs>

        <Row gutter={[16, 16]}>
          {getFilteredImages().map((item) => (
            <Col xs={12} sm={8} md={6} key={item.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              > 
                <div 
                  className="gallery-item"
                  onClick={() => {
                    setSelectedImage(item);
                    setModalVisible(true);
                  }}
                >
                  <img src={item.image} alt={item.category} />
                  <div className="gallery-item-overlay">
                    <div className="gallery-item-info">
                      <Tag color="gold">{item.category}</Tag>
                      <Text className="gallery-item-title">{item.title}</Text>
                      <div className="gallery-item-meta">
                        <span><EnvironmentOutlined /> {item.location}</span>
                        <span><CalendarOutlined /> {item.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div className="view-all-container">
          <Button type="primary" size="large" className="view-all-btn">
            View Full Gallery <CameraOutlined />
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Testimonials</Tag>
          <Title level={2} className="section-title">Happy Couples</Title>
          <Paragraph className="section-subtitle">
            Real experiences from couples who trusted us with their special day
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {testimonials.map((item, index) => (
            <Col xs={24} md={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="testimonial-card">
                  <HeartOutlined className="testimonial-icon" />
                  <Paragraph className="testimonial-text">
                    "{item.text}"
                  </Paragraph>
                  <div className="testimonial-author">
                    <strong>- {item.name}</strong>
                    <div className="testimonial-meta">
                      <Tag color="gold">{item.event}</Tag>
                      <div><CalendarOutlined /> {item.date}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Image Modal */}
      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={1000}
        className="gallery-modal"
      >
        {selectedImage && (
          <div className="modal-content">
            <img 
              src={selectedImage.image} 
              alt={selectedImage.category}
              className="modal-image"
            />
            <div className="modal-footer">
              <div className="modal-info">
                <Title level={3}>{selectedImage.title}</Title>
                <Tag color="gold">{selectedImage.category}</Tag>
                <div className="modal-meta">
                  <span><EnvironmentOutlined /> {selectedImage.location}</span>
                  <span><CalendarOutlined /> {selectedImage.year}</span>
                </div>
              </div>
              <Button type="primary" icon={<ShareAltOutlined />} className="modal-share-btn">
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