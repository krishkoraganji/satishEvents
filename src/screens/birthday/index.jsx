// pages/BirthdayDecor.js
import React, { useState } from 'react';
import { Row, Col, Card, Button, Typography, Space, Tabs, Tag, Modal } from 'antd';
import { 
  HeartOutlined, 
  CameraOutlined, 
  ShareAltOutlined,
  CheckCircleOutlined,
  EnvironmentOutlined,
  UserOutlined,
  CalendarOutlined,
  GiftOutlined,
  StarOutlined,
  // BalloonOutlined,
  // CakeOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

// Birthday Images
import bd1 from "../../assests/birthday/bd1.jpeg";

// Wedding Images (for additional variety if needed)
import w1 from "../../assests/wedding/w1.jpeg";
import w2 from "../../assests/wedding/w2.jpeg";
import w3 from "../../assests/wedding/w3.jpeg";

// Reception Images (for additional variety)
import r1 from "../../assests/reception/r1.jpeg";
import r2 from "../../assests/reception/r2.jpeg";
import r3 from "../../assests/reception/r3.jpeg";

// Baby Shower Images (for kids themes)
import b1 from "../../assests/baby/b1.jpeg";

import './index.css';

const { Title, Paragraph, Text } = Typography;

const BirthdayDecor = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const birthdayPackages = [
    {
      name: 'Kids Birthday Party',
      features: [
        'Theme-based Decoration',
        'Balloon Arch/Garland',
        'Character Cutouts',
        'Cake Table Setup',
        'Photo Booth Area',
        'Party Props',
        'Welcome Sign',
        'Goodie Bag Table'
      ],
      recommended: true,
      image: bd1,
      ageGroup: '1-10 years'
    },
    {
      name: 'Teen Birthday Bash',
      features: [
        'Trendy Theme Design',
        'LED Light Setup',
        'Dance Floor Decor',
        'Photo Backdrop',
        'Sound System',
        'Glow Party Elements',
        'Social Media Booth',
        'Custom Signage'
      ],
      recommended: false,
      image: r1,
      ageGroup: '11-19 years'
    },
    {
      name: 'Adult Birthday Celebration',
      features: [
        'Elegant Theme Decor',
        'Premium Table Settings',
        'Bar Setup Decoration',
        'Photo Wall',
        'Mood Lighting',
        'Live Music Area',
        'VIP Seating',
        'Memorable Moments Setup'
      ],
      recommended: false,
      image: w1,
      ageGroup: '20+ years'
    },
    {
      name: 'Milestone Birthday',
      features: [
        'Grand Entrance Decor',
        'Number Displays',
        'Memory Wall',
        'Photo Timeline',
        'Stage Setup',
        'Professional Lighting',
        'Guest Book Station',
        'Anniversary Style Setup'
      ],
      recommended: false,
      image: w2,
      ageGroup: '18th, 21st, 50th, etc.'
    }
  ];

  const galleryImages = [
    // Kids Themes (using birthday and baby images)
    { id: 1, category: 'Kids Theme', image: bd1, title: 'Mickey Mouse Theme Party', location: 'Vijayawada', year: '2024', age: '5 years' },
    { id: 2, category: 'Kids Theme', image: b1, title: 'Princess Theme Birthday', location: 'Guntur', year: '2024', age: '7 years' },
    
    // Balloon Decor (using wedding/reception images with balloons)
    { id: 3, category: 'Balloon Decor', image: w1, title: 'Giant Balloon Arch', location: 'Tenali', year: '2023', age: 'All Ages' },
    { id: 4, category: 'Balloon Decor', image: w2, title: 'Balloon Garland with Flowers', location: 'Guntur', year: '2023', age: 'All Ages' },
    
    // Teen Themes
    { id: 5, category: 'Teen Theme', image: r1, title: 'Neon Glow Party', location: 'Vijayawada', year: '2024', age: '16 years' },
    { id: 6, category: 'Teen Theme', image: r2, title: 'Hollywood Theme Party', location: 'Guntur', year: '2024', age: '15 years' },
    
    // Adult Themes
    { id: 7, category: 'Adult Theme', image: w3, title: 'Black & Gold Birthday', location: 'Mangalagiri', year: '2024', age: '30 years' },
    { id: 8, category: 'Adult Theme', image: r3, title: 'Rustic Birthday Setup', location: 'Tenali', year: '2023', age: '35 years' },
    
    // Milestone Birthdays
    { id: 9, category: 'Milestone', image: w1, title: '18th Birthday Celebration', location: 'Vijayawada', year: '2024', age: '18 years' },
    { id: 10, category: 'Milestone', image: w2, title: '50th Birthday Celebration', location: 'Vijayawada', year: '2024', age: '50 years' },
    
    // More Kids Themes
    { id: 11, category: 'Kids Theme', image: bd1, title: 'Superhero Birthday', location: 'Vijayawada', year: '2024', age: '8 years' },
    { id: 12, category: 'Kids Theme', image: b1, title: 'Unicorn Theme Birthday', location: 'Tenali', year: '2023', age: '4 years' }
  ];

  const categories = [
    { title: 'Kids Themes', icon: '🧸', count: 45, image: bd1 },
    { title: 'Teen Parties', icon: '🎵', count: 38, image: r1 },
    { title: 'Adult Celebrations', icon: '🥂', count: 52, image: w1 },
    { title: 'Balloon Decor', icon: '🎈', count: 67, image: w2 },
    { title: 'Cake Tables', icon: '🎂', count: 42, image: w3 },
    { title: 'Photo Booths', icon: '📸', count: 56, image: r2 },
    { title: 'Themed Parties', icon: '🎭', count: 34, image: r3 },
    { title: 'Milestone Birthdays', icon: '⭐', count: 28, image: w1 }
  ];

  const popularThemes = [
    { name: 'Mickey Mouse', icon: '🐭', image: bd1 },
    { name: 'Princess', icon: '👸', image: b1 },
    { name: 'Superhero', icon: '🦸', image: w1 },
    { name: 'Unicorn', icon: '🦄', image: bd1 },
    { name: 'Jungle Safari', icon: '🦁', image: w2 },
    { name: 'Underwater', icon: '🐠', image: w3 },
    { name: 'Space', icon: '🚀', image: r1 },
    { name: 'Hollywood', icon: '🎬', image: r2 },
    { name: 'Neon Glow', icon: '✨', image: r3 },
    { name: 'Rustic', icon: '🌾', image: w1 },
    { name: 'Black & Gold', icon: '🌟', image: w2 },
    { name: 'Floral', icon: '🌸', image: w3 }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      event: 'Daughter\'s 5th Birthday - Vijayawada',
      text: 'The unicorn theme decoration was absolutely magical! My daughter and all her friends were thrilled. The balloon arch and cake table were stunning.',
      image: bd1,
      date: 'March 2024',
      location: 'Vijayawada'
    },
    {
      name: 'Rahul Reddy',
      event: 'Son\'s 10th Birthday - Guntur',
      text: 'Superhero theme done perfectly! The kids loved the photo booth with character cutouts. Great attention to detail and very professional team.',
      image: w1,
      date: 'February 2024',
      location: 'Guntur'
    },
    {
      name: 'Anjali Krishna',
      event: '18th Birthday - Tenali',
      text: 'The neon glow party setup was a hit with all the teens! The LED decorations created an amazing atmosphere. Thank you for making it memorable.',
      image: r1,
      date: 'January 2024',
      location: 'Tenali'
    },
    {
      name: 'Venkateswara Rao',
      event: '50th Birthday - Vijayawada',
      text: 'Elegant black and gold theme for my 50th. The number displays and memory wall touched everyone\'s hearts. Perfect celebration!',
      image: w2,
      date: 'December 2023',
      location: 'Vijayawada'
    }
  ];

  const getFilteredImages = () => {
    if (activeTab === 'all') return galleryImages;
    return galleryImages.filter(img => 
      img.category.toLowerCase().includes(activeTab.toLowerCase()) ||
      (activeTab === 'kids theme' && img.category === 'Kids Theme') ||
      (activeTab === 'teen theme' && img.category === 'Teen Theme') ||
      (activeTab === 'adult theme' && img.category === 'Adult Theme') ||
      (activeTab === 'balloon decor' && img.category === 'Balloon Decor') ||
      (activeTab === 'milestone' && img.category === 'Milestone')
    );
  };

  return (
    <div className="birthday-decor-page">
      {/* Hero Section */}
      <div className="birthday-hero" style={{ backgroundImage: `url(${bd1})` }}>
        <div className="hero-overlay">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title level={1} className="hero-title">Birthday Decorations</Title>
            <Paragraph className="hero-description">
              Make every birthday unforgettable with our creative themes and decorations
            </Paragraph>
            <Button type="primary" size="large" className="hero-btn">
              Plan Your Party
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Categories</Tag>
          <Title level={2} className="section-title">Birthday Decoration Categories</Title>
          <Paragraph className="section-subtitle">
            Explore our wide range of birthday decoration services for all ages
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
                  <Tag color="gold">{item.count} Designs</Tag>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Popular Themes Section */}
      <section className="themes-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Trending</Tag>
          <Title level={2} className="section-title">Popular Birthday Themes</Title>
          <Paragraph className="section-subtitle">
            Most loved and requested themes by our customers
          </Paragraph>
        </div>

        <Row gutter={[16, 16]}>
          {popularThemes.map((theme, index) => (
            <Col xs={12} sm={8} md={4} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card 
                  hoverable 
                  className="theme-card"
                  onClick={() => {
                    setSelectedImage({
                      image: theme.image,
                      title: `${theme.name} Theme`,
                      category: 'Theme',
                      location: 'Available in all cities',
                      year: '2024'
                    });
                    setModalVisible(true);
                  }}
                >
                  <div className="theme-icon">{theme.icon}</div>
                  <Text className="theme-name">{theme.name}</Text>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Birthday Packages */}
      <section className="packages-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Packages</Tag>
          <Title level={2} className="section-title">Birthday Decoration Packages</Title>
          <Paragraph className="section-subtitle">
            Choose the perfect package for your celebration
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {birthdayPackages.map((pkg, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`package-card ${pkg.recommended ? 'recommended' : ''}`}>
                  {pkg.recommended && <div className="recommended-badge">Most Popular</div>}
                  <div className="package-image-wrapper">
                    <img src={pkg.image} alt={pkg.name} className="package-image" />
                  </div>
                  <Title level={4} className="package-name">{pkg.name}</Title>
                  <Tag color="gold" className="age-tag">{pkg.ageGroup}</Tag>
                  <ul className="package-features">
                    {pkg.features.slice(0, 6).map((feature, i) => (
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
          <Title level={2} className="section-title">Birthday Gallery</Title>
          <Paragraph className="section-subtitle">
            Browse through our happy birthday celebrations
          </Paragraph>
        </div>

        <Tabs 
          activeKey={activeTab} 
          onChange={setActiveTab}
          className="gallery-tabs"
          centered
        >
          <Tabs.TabPane tab="All" key="all" />
          <Tabs.TabPane tab="Kids Theme" key="kids theme" />
          <Tabs.TabPane tab="Teen Theme" key="teen theme" />
          <Tabs.TabPane tab="Adult Theme" key="adult theme" />
          <Tabs.TabPane tab="Balloon Decor" key="balloon decor" />
          <Tabs.TabPane tab="Milestone" key="milestone" />
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
                        <span> Age: {item.age}</span>
                        <span><EnvironmentOutlined /> {item.location}</span>
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

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Why Us</Tag>
          <Title level={2} className="section-title">Why Choose Us for Birthday Decor</Title>
          <Paragraph className="section-subtitle">
            We make birthdays extra special with our creative touch
          </Paragraph>
        </div>

        <Row gutter={[30, 30]}>
          <Col xs={24} sm={12} md={6}>
            <Card className="feature-card">
              <GiftOutlined className="feature-icon" />
              <Title level={4}>Custom Themes</Title>
              <Text>Personalized themes based on interests and age group</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card className="feature-card">
              {/* <BalloonOutlined className="feature-icon" /> */}
              <Title level={4}>Quality Decor</Title>
              <Text>Premium materials and fresh decorations every time</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card className="feature-card">
              {/* <CakeOutlined className="feature-icon" /> */}
              <Title level={4}>Complete Setup</Title>
              <Text>From cake table to photo booth, we handle it all</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card className="feature-card">
              <StarOutlined className="feature-icon" />
              <Title level={4}>Memorable Moments</Title>
              <Text>Creating Instagram-worthy setups for lasting memories</Text>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Testimonials</Tag>
          <Title level={2} className="section-title">Happy Birthday Stories</Title>
          <Paragraph className="section-subtitle">
            What our customers say about their celebrations
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {testimonials.map((item, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
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
                  {selectedImage.age && (
                    <span> Age: {selectedImage.age}</span>
                  )}
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

export default BirthdayDecor;