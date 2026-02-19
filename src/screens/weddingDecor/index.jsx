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

// Wedding Images
import w1 from "../../assests/wedding/w1.jpeg";
import w2 from "../../assests/wedding/w2.jpeg";
import w3 from "../../assests/wedding/w3.jpeg";
import w4 from "../../assests/wedding/w4.jpeg";
import w5 from "../../assests/wedding/w5.jpeg";
import w6 from "../../assests/wedding/w6.jpeg";

// Reception Images
import r1 from "../../assests/reception/r1.jpeg";
import r2 from "../../assests/reception/r2.jpeg";
import r3 from "../../assests/reception/r3.jpeg";
import r4 from "../../assests/reception/r4.jpeg";
import r5 from "../../assests/reception/r5.jpeg";
import r6 from "../../assests/reception/r6.jpeg";
import r7 from "../../assests/reception/r7.jpeg";
import r8 from "../../assests/reception/r8.jpeg";

// House Ceremony Images
import hc1 from "../../assests/house/hc1.jpeg";
import hc2 from "../../assests/house/hc2.jpeg";
import hc3 from "../../assests/house/hc3.jpeg";
import hc4 from "../../assests/house/hc4.jpeg";
import hc5 from "../../assests/house/hc5.jpeg";

// Haldi Images
import h1 from "../../assests/haldi/h1.jpeg";
import h2 from "../../assests/haldi/h2.jpeg";
import h3 from "../../assests/haldi/h3.jpeg";
import h4 from "../../assests/haldi/h4.jpeg";
import h5 from "../../assests/haldi/h5.jpeg";

// Death Anniversary Images
import d1 from "../../assests/death/d1.jpeg";
import d2 from "../../assests/death/d2.jpeg";

// Birthday Images
import bd1 from "../../assests/birthday/bd1.jpeg";

// Baby Shower Images
import b1 from "../../assests/baby/b1.jpeg";

// Anniversary Images
import a1 from "../../assests/anniversery/a1.jpeg";

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
    // Wedding Images
    { id: 1, category: 'Mandap', image: w1, title: 'Elegant Mandap Setup', location: 'Vijayawada', year: '2024' },
    { id: 2, category: 'Mandap', image: w2, title: 'Traditional Mandap Design', location: 'Guntur', year: '2024' },
    { id: 3, category: 'Mandap', image: w3, title: 'Luxury Mandap with Flowers', location: 'Vijayawada', year: '2024' },
    { id: 4, category: 'Mandap', image: w4, title: 'Royal Wedding Mandap', location: 'Tenali', year: '2023' },
    { id: 5, category: 'Mandap', image: w5, title: 'Contemporary Mandap Setup', location: 'Vijayawada', year: '2024' },
    { id: 6, category: 'Mandap', image: w6, title: 'Floral Mandap Design', location: 'Guntur', year: '2024' },
    
    // Reception Images
    { id: 7, category: 'Reception', image: r1, title: 'Grand Reception Hall', location: 'Vijayawada', year: '2024' },
    { id: 8, category: 'Reception', image: r2, title: 'Elegant Reception Setup', location: 'Guntur', year: '2024' },
    { id: 9, category: 'Reception', image: r3, title: 'Luxury Reception Decor', location: 'Tenali', year: '2023' },
    { id: 10, category: 'Reception', image: r4, title: 'Modern Reception Design', location: 'Vijayawada', year: '2024' },
    { id: 11, category: 'Reception', image: r5, title: 'Royal Reception Hall', location: 'Mangalagiri', year: '2024' },
    { id: 12, category: 'Reception', image: r6, title: 'Intimate Reception Setup', location: 'Guntur', year: '2023' },
    { id: 13, category: 'Reception', image: r7, title: 'Grand Entrance Reception', location: 'Vijayawada', year: '2024' },
    { id: 14, category: 'Reception', image: r8, title: 'Evening Reception Decor', location: 'Tenali', year: '2024' },
    
    // House Ceremony Images
    { id: 15, category: 'House Ceremony', image: hc1, title: 'Traditional Grihapravesh', location: 'Vijayawada', year: '2024' },
    { id: 16, category: 'House Ceremony', image: hc2, title: 'House Warming Ceremony', location: 'Guntur', year: '2024' },
    { id: 17, category: 'House Ceremony', image: hc3, title: 'Vastu Puja Setup', location: 'Tenali', year: '2023' },
    { id: 18, category: 'House Ceremony', image: hc4, title: 'Traditional Pooja Room', location: 'Vijayawada', year: '2024' },
    { id: 19, category: 'House Ceremony', image: hc5, title: 'Blessing Ceremony Decor', location: 'Mangalagiri', year: '2024' },
    
    // Haldi Images
    { id: 20, category: 'Haldi', image: h1, title: 'Vibrant Haldi Ceremony', location: 'Vijayawada', year: '2024' },
    { id: 21, category: 'Haldi', image: h2, title: 'Yellow Theme Haldi', location: 'Guntur', year: '2024' },
    { id: 22, category: 'Haldi', image: h3, title: 'Traditional Haldi Setup', location: 'Tenali', year: '2023' },
    { id: 23, category: 'Haldi', image: h4, title: 'Marigold Haldi Decor', location: 'Vijayawada', year: '2024' },
    { id: 24, category: 'Haldi', image: h5, title: 'Intimate Haldi Ceremony', location: 'Guntur', year: '2024' },
    
    // Death Anniversary
    { id: 25, category: 'Remembrance', image: d1, title: 'Peaceful Remembrance Setup', location: 'Vijayawada', year: '2024' },
    { id: 26, category: 'Remembrance', image: d2, title: 'White Flower Arrangement', location: 'Guntur', year: '2023' },
    
    // Birthday
    { id: 27, category: 'Birthday', image: bd1, title: 'Birthday Celebration Decor', location: 'Vijayawada', year: '2024' },
    
    // Baby Shower
    { id: 28, category: 'Baby Shower', image: b1, title: 'Baby Shower Celebration', location: 'Tenali', year: '2024' },
    
    // Anniversary
    { id: 29, category: 'Anniversary', image: a1, title: 'Anniversary Celebration', location: 'Vijayawada', year: '2024' }
  ];

  const categories = [
    { title: 'Mandap Decor', icon: '🏛️', count: 45, image: w1 },
    { title: 'Reception Setup', icon: '🎉', count: 38, image: r1 },
    { title: 'House Ceremonies', icon: '🏠', count: 32, image: hc1 },
    { title: 'Haldi Ceremonies', icon: '🌼', count: 28, image: h1 },
    { title: 'Flower Arrangements', icon: '🌸', count: 52, image: w3 },
    { title: 'Lighting Design', icon: '💡', count: 31, image: w4 },
    { title: 'Stage Backdrop', icon: '🎭', count: 42, image: w5 },
    { title: 'Table Settings', icon: '🍽️', count: 56, image: w6 },
    { title: 'Entrance Decor', icon: '🚪', count: 34, image: r2 },
    { title: 'Bridal Setup', icon: '👰', count: 28, image: w2 },
    { title: 'Remembrance', icon: '🕊️', count: 15, image: d1 },
    { title: 'Birthday Decor', icon: '🎂', count: 42, image: bd1 }
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
    },
    {
      name: 'Venkateswara Rao',
      event: 'House Ceremony - Vijayawada',
      text: 'Beautiful Grihapravesh decorations. The traditional torans and kolams were exactly as we wanted.',
      image: hc1,
      date: 'December 2023',
      location: 'Vijayawada'
    },
    {
      name: 'Lakshmi Devi',
      event: 'Haldi Ceremony - Guntur',
      text: 'The yellow theme decorations were absolutely gorgeous! Made our pre-wedding celebration so memorable.',
      image: h1,
      date: 'November 2023',
      location: 'Guntur'
    }
  ];

  const getFilteredImages = () => {
    if (activeTab === 'all') return galleryImages;
    return galleryImages.filter(img => 
      img.category.toLowerCase().includes(activeTab.toLowerCase()) ||
      (activeTab === 'mandap' && img.category === 'Mandap') ||
      (activeTab === 'reception' && img.category === 'Reception') ||
      (activeTab === 'flowers' && img.category === 'Flowers') ||
      (activeTab === 'lighting' && img.category === 'Lighting') ||
      (activeTab === 'house' && img.category === 'House Ceremony') ||
      (activeTab === 'haldi' && img.category === 'Haldi') ||
      (activeTab === 'remembrance' && img.category === 'Remembrance') ||
      (activeTab === 'birthday' && img.category === 'Birthday') ||
      (activeTab === 'baby' && img.category === 'Baby Shower') ||
      (activeTab === 'anniversary' && img.category === 'Anniversary')
    );
  };

  return (
    <div className="wedding-decor-page">
      {/* Hero Section */}
      <div className="wedding-hero" style={{ backgroundImage: `url(${w6})` }}>
        <div className="hero-overlay">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title level={1} className="hero-title">Wedding & Event Decorations</Title>
            <Paragraph className="hero-description">
              Create your special moments with our exquisite decorations for all occasions
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
          <Title level={2} className="section-title">Decoration Categories</Title>
          <Paragraph className="section-subtitle">
            Explore our wide range of decoration services for all events
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {categories.map((item, index) => (
            <Col xs={12} sm={8} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card 
                  hoverable 
                  className="category-card"
                  onClick={() => {
                    setSelectedImage({
                      image: item.image,
                      title: item.title,
                      category: item.title,
                      location: 'Various Locations',
                      year: '2024'
                    });
                    setModalVisible(true);
                  }}
                >
                  <div className="category-icon">{item.icon}</div>
                  <Title level={5}>{item.title}</Title>
                  <Tag color="gold">{item.count}+ Designs</Tag>
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
          <Title level={2} className="section-title">Event Decoration Gallery</Title>
          <Paragraph className="section-subtitle">
            Browse through our stunning decoration portfolio for all occasions
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
          <Tabs.TabPane tab="House" key="house" />
          <Tabs.TabPane tab="Haldi" key="haldi" />
          <Tabs.TabPane tab="Remembrance" key="remembrance" />
          <Tabs.TabPane tab="Birthday" key="birthday" />
          <Tabs.TabPane tab="Baby Shower" key="baby" />
          <Tabs.TabPane tab="Anniversary" key="anniversary" />
        </Tabs>

        <Row gutter={[16, 16]}>
          {getFilteredImages().map((item) => (
            <Col xs={12} sm={8} md={4} key={item.id}>
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
          <Title level={2} className="section-title">Happy Clients</Title>
          <Paragraph className="section-subtitle">
            Real experiences from clients who trusted us with their events
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {testimonials.map((item, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
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