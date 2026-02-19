// pages/BabyShowerDecor.js
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
  SmileOutlined,
  TeamOutlined,
  SkinOutlined,
  CloudOutlined
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

const BabyShowerDecor = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const babyShowerPackages = [
    {
      name: 'Sweet Beginnings',
      features: [
        'Pastel Theme Decoration',
        'Baby Shower Banner',
        'Balloon Arch (Pink/Blue/Mixed)',
        'Cake Table Setup',
        'Diaper Cake Display',
        'Onesie Decoration Line',
        'Welcome Sign with Baby Name',
        'Photo Backdrop',
        'Party Favors Table'
      ],
      recommended: true,
      image: w1,
      gender: 'Any'
    },
    {
      name: 'Gender Reveal Special',
      features: [
        'Mystery Box/ Balloon Setup',
        'Gender Reveal Banner',
        'Confetti Cannon Setup',
        'Photo Booth with Props',
        'Blue/Pink Theme Decor',
        'Question Mark Balloons',
        'Reveal Cake Table',
        'Prediction Board',
        'Smoke/Fireworks Option'
      ],
      recommended: false,
      image: w2,
      gender: 'Reveal'
    },
    {
      name: 'It\'s a Baby Girl',
      features: [
        'Pink Paradise Theme',
        'Princess Elements',
        'Pink Balloon Garland',
        'Floral Arrangements',
        'Onesie Decor Line',
        'Diaper Cake (Pink)',
        'Baby Bottle Props',
        'Fairy Lights',
        'Sweet Treats Table'
      ],
      recommended: false,
      image: w3,
      gender: 'Girl'
    },
    {
      name: 'It\'s a Baby Boy',
      features: [
        'Blue Wonderland Theme',
        'Little Man Elements',
        'Blue Balloon Arch',
        'Cloud & Star Decor',
        'Onesie Display (Blue)',
        'Diaper Cake (Blue)',
        'Teddy Bear Props',
        'Nautical Elements',
        'Cookie Table Setup'
      ],
      recommended: false,
      image: w4,
      gender: 'Boy'
    },
    {
      name: 'Twins Celebration',
      features: [
        'Double the Joy Theme',
        'Pink & Blue Combo',
        'Two Baby Crib Decor',
        'Double Onesie Line',
        'Twin Cake Table',
        'Matching Props',
        'Two Diaper Cakes',
        'Double Photo Frames',
        'Special Twin Banner'
      ],
      recommended: false,
      image: w5,
      gender: 'Twins'
    },
    {
      name: 'Sreemantham Traditional',
      features: [
        'Traditional South Indian Setup',
        'Mango Leaf Torans',
        'Kolam/Rangoli Designs',
        'Traditional Lamps',
        'Fruit & Flower Displays',
        'Blessing Ceremony Setup',
        'Traditional Seating',
        'Brass Vessel Decor',
        'Sacred Elements'
      ],
      recommended: false,
      image: w6,
      gender: 'Traditional'
    }
  ];

  const galleryImages = [
    { id: 1, category: 'Baby Girl', image: w1, title: 'Pink Princess Baby Shower', location: 'Vijayawada', year: '2024', gender: 'Girl' },
    { id: 2, category: 'Baby Boy', image: w2, title: 'Blue Wonderland Celebration', location: 'Guntur', year: '2024', gender: 'Boy' },
    { id: 3, category: 'Gender Reveal', image: w3, title: 'Surprise Gender Reveal Party', location: 'Tenali', year: '2023', gender: 'Reveal' },
    { id: 4, category: 'Twins', image: w4, title: 'Double Joy Twins Shower', location: 'Vijayawada', year: '2024', gender: 'Twins' },
    { id: 5, category: 'Neutral', image: w5, title: 'Yellow & Grey Neutral Theme', location: 'Mangalagiri', year: '2024', gender: 'Neutral' },
    { id: 6, category: 'Traditional', image: w6, title: 'Sreemantham Traditional Setup', location: 'Guntur', year: '2023', gender: 'Traditional' },
    { id: 7, category: 'Baby Girl', image: w7, title: 'Floral Pink Baby Shower', location: 'Vijayawada', year: '2024', gender: 'Girl' },
    { id: 8, category: 'Baby Boy', image: w8, title: 'Nautical Baby Boy Theme', location: 'Tenali', year: '2023', gender: 'Boy' },
    { id: 9, category: 'Gender Reveal', image: w9, title: 'Twinkle Twinkle Reveal', location: 'Vijayawada', year: '2024', gender: 'Reveal' },
    { id: 10, category: 'Neutral', image: w1, title: 'Pastel Rainbow Theme', location: 'Guntur', year: '2024', gender: 'Neutral' },
    { id: 11, category: 'Traditional', image: w2, title: 'Godh Bharai Ceremony', location: 'Tenali', year: '2023', gender: 'Traditional' },
    { id: 12, category: 'Twins', image: w3, title: 'Two Little Miracles', location: 'Vijayawada', year: '2024', gender: 'Twins' },
    { id: 13, category: 'Baby Girl', image: w4, title: 'Butterfly Theme Baby Shower', location: 'Guntur', year: '2024', gender: 'Girl' },
    { id: 14, category: 'Baby Boy', image: w5, title: 'Elephant Baby Boy Theme', location: 'Mangalagiri', year: '2023', gender: 'Boy' },
    { id: 15, category: 'Neutral', image: w6, title: 'Clouds & Stars Neutral', location: 'Vijayawada', year: '2024', gender: 'Neutral' }
  ];

  const categories = [
    { title: 'Baby Girl', icon: '👧', count: 45, image: w1 },
    { title: 'Baby Boy', icon: '👦', count: 42, image: w2 },
    { title: 'Gender Reveal', icon: '❓', count: 28, image: w3 },
    { title: 'Twins', icon: '👯', count: 18, image: w4 },
    { title: 'Neutral Themes', icon: '🌈', count: 35, image: w5 },
    { title: 'Traditional Sreemantham', icon: '🪔', count: 32, image: w6 },
    { title: 'Diaper Cakes', icon: '🎂', count: 56, image: w7 },
    { title: 'Onesie Decor', icon: '👕', count: 48, image: w8 }
  ];

  const popularThemes = [
    { name: 'Twinkle Twinkle', icon: '✨', image: w1 },
    { name: 'Jungle Safari', icon: '🦒', image: w2 },
    { name: 'Under the Sea', icon: '🐠', image: w3 },
    { name: 'Butterfly Garden', icon: '🦋', image: w4 },
    { name: 'Nautical', icon: '⚓', image: w5 },
    { name: 'Floral Garden', icon: '🌸', image: w6 },
    { name: 'Clouds & Rainbows', icon: '☁️', image: w7 },
    { name: 'Teddy Bear', icon: '🧸', image: w8 },
    { name: 'Princess', icon: '👸', image: w9 },
    { name: 'Little Prince', icon: '🤴', image: w1 },
    { name: 'Circus Theme', icon: '🎪', image: w2 },
    { name: 'Woodland', icon: '🦊', image: w3 }
  ];

  const traditionalElements = [
    { name: 'Mango Leaf Torans', icon: '🌿', description: 'Traditional door hangings' },
    { name: 'Rangoli/Kolam', icon: '🎨', description: 'Colorful floor designs' },
    { name: 'Brass Vessels', icon: '🏺', description: 'Traditional metal pots' },
    { name: 'Flower Garlands', icon: '🌺', description: 'Fresh flower decorations' },
    { name: 'Sacred Lamps', icon: '🪔', description: 'Traditional oil lamps' },
    { name: 'Fruit Displays', icon: '🍎', description: 'Offering arrangements' }
  ];

  const testimonials = [
    {
      name: 'Priyanka Reddy',
      event: 'Baby Girl Shower - Vijayawada',
      text: 'The pink princess theme was absolutely beautiful! Every detail from the balloon arch to the onesie display was perfect. Thank you for making this celebration so special.',
      image: w1,
      date: 'March 2024',
      location: 'Vijayawada'
    },
    {
      name: 'Srinivas & Lakshmi',
      event: 'Gender Reveal - Guntur',
      text: 'The suspense and reveal moment was perfectly executed! The blue confetti cannons and the photo booth captured the best moments. Our families loved it!',
      image: w2,
      date: 'February 2024',
      location: 'Guntur'
    },
    {
      name: 'Anjali Devi',
      event: 'Sreemantham - Tenali',
      text: 'Beautiful traditional setup with mango leaves, kolams, and lamps. It felt so authentic and sacred. Perfect for our family ceremony.',
      image: w3,
      date: 'January 2024',
      location: 'Tenali'
    },
    {
      name: 'Kavita & Rajesh',
      event: 'Twins Baby Shower - Vijayawada',
      text: 'Double the joy, double the decorations! They created the most amazing pink & blue combo theme. Everyone complimented the twin diaper cakes!',
      image: w4,
      date: 'December 2023',
      location: 'Vijayawada'
    },
    {
      name: 'Venkata Lakshmi',
      event: 'Godh Bharai - Guntur',
      text: 'The traditional Godh Bharai ceremony decorations were exactly what we wanted. The fruit displays and flower arrangements were stunning.',
      image: w5,
      date: 'November 2023',
      location: 'Guntur'
    }
  ];

  const getFilteredImages = () => {
    if (activeTab === 'all') return galleryImages;
    return galleryImages.filter(img => 
      img.category.toLowerCase().includes(activeTab.toLowerCase()) ||
      img.gender.toLowerCase().includes(activeTab.toLowerCase())
    );
  };

  return (
    <div className="baby-shower-decor-page">
      {/* Hero Section */}
      <div className="baby-shower-hero" style={{ backgroundImage: `url(${w9})` }}>
        <div className="hero-overlay">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title level={1} className="hero-title">Baby Shower Decorations</Title>
            <Paragraph className="hero-description">
              Welcome your little one with beautiful and memorable celebrations
            </Paragraph>
            <Button type="primary" size="large" className="hero-btn">
              Plan Your Celebration
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Categories</Tag>
          <Title level={2} className="section-title">Baby Shower Categories</Title>
          <Paragraph className="section-subtitle">
            Choose from our wide range of baby shower decoration styles
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

      {/* Popular Themes Section */}
      <section className="themes-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Trending</Tag>
          <Title level={2} className="section-title">Popular Baby Shower Themes</Title>
          <Paragraph className="section-subtitle">
            Most loved themes for welcoming the little one
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

      {/* Traditional Elements Section */}
      <section className="traditional-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Traditional</Tag>
          <Title level={2} className="section-title">Sreemantham & Traditional Elements</Title>
          <Paragraph className="section-subtitle">
            Authentic traditional decorations for sacred ceremonies
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {traditionalElements.map((item, index) => (
            <Col xs={12} sm={8} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="traditional-card">
                  <div className="traditional-icon">{item.icon}</div>
                  <Title level={5}>{item.name}</Title>
                  <Text className="traditional-desc">{item.description}</Text>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Baby Shower Packages */}
      <section className="packages-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Packages</Tag>
          <Title level={2} className="section-title">Baby Shower Packages</Title>
          <Paragraph className="section-subtitle">
            Choose the perfect package for your celebration
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {babyShowerPackages.map((pkg, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
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
                  <Tag color="gold" className="gender-tag">{pkg.gender}</Tag>
                  <ul className="package-features">
                    {pkg.features.slice(0, 8).map((feature, i) => (
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
          <Title level={2} className="section-title">Baby Shower Gallery</Title>
          <Paragraph className="section-subtitle">
            Browse through our beautiful baby shower celebrations
          </Paragraph>
        </div>

        <Tabs 
          activeKey={activeTab} 
          onChange={setActiveTab}
          className="gallery-tabs"
          centered
        >
          <Tabs.TabPane tab="All" key="all" />
          <Tabs.TabPane tab="Baby Girl" key="baby girl" />
          <Tabs.TabPane tab="Baby Boy" key="baby boy" />
          <Tabs.TabPane tab="Gender Reveal" key="gender reveal" />
          <Tabs.TabPane tab="Twins" key="twins" />
          <Tabs.TabPane tab="Traditional" key="traditional" />
          <Tabs.TabPane tab="Neutral" key="neutral" />
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
                        <span> {item.gender}</span>
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

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Why Us</Tag>
          <Title level={2} className="section-title">Why Choose Us for Baby Shower</Title>
          <Paragraph className="section-subtitle">
            We create beautiful beginnings with love and care
          </Paragraph>
        </div>

        <Row gutter={[30, 30]}>
          <Col xs={24} sm={12} md={6}>
            <Card className="feature-card">
              {/* <BabyOutlined className="feature-icon" /> */}
              <Title level={4}>Custom Themes</Title>
              <Text>Personalized themes based on gender and preferences</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card className="feature-card">
              <GiftOutlined className="feature-icon" />
              <Title level={4}>Diaper Cakes</Title>
              <Text>Beautiful diaper cake centerpieces and gifts</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card className="feature-card">
              <CloudOutlined className="feature-icon" />
              <Title level={4}>Onesie Decor</Title>
              <Text>Creative onesie displays and decoration lines</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card className="feature-card">
              <SmileOutlined className="feature-icon" />
              <Title level={4}>Traditional Touch</Title>
              <Text>Authentic Sreemantham and traditional elements</Text>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Testimonials</Tag>
          <Title level={2} className="section-title">Happy Parents</Title>
          <Paragraph className="section-subtitle">
            What parents say about their baby shower celebrations
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
                  {selectedImage.gender && (
                    <span> {selectedImage.gender}</span>
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

export default BabyShowerDecor;