// pages/DecorationPackages.js
import React, { useState } from 'react';
import { Row, Col, Card, Button, Typography, Radio, Tag, Progress, Modal, Form, Input } from 'antd';
import { 
  CheckCircleOutlined, 
  RocketOutlined, 
  CrownOutlined,
  GiftOutlined,
  PercentageOutlined 
} from '@ant-design/icons';
import './index.css';

const { Title, Paragraph } = Typography;

const DecorationPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = {
    wedding: [
      {
        name: 'Essentials',
        price: 150000,
        duration: 'Full Day',
        features: [
          'Basic Mandap Decor',
          'Fresh Flowers (Local)',
          'Welcome Gate',
          'Stage Backdrop',
          'Basic Lighting',
          'Catering Area Decor'
        ],
        popularity: 75
      },
      {
        name: 'Premium',
        price: 350000,
        duration: 'Full Day',
        features: [
          'Luxury Mandap Design',
          'Premium Fresh Flowers',
          'Complete Venue Decor',
          'Professional Lighting',
          'Photo Booth Setup',
          'Bridal Room Decor',
          'Custom Signage'
        ],
        popularity: 90,
        popular: true
      },
      {
        name: 'Luxury',
        price: 650000,
        duration: '2 Days',
        features: [
          'Custom Mandap Design',
          'Imported Flowers',
          'Full Venue Transformation',
          'LED Wall/Backdrop',
          'Professional Sound & Light',
          'Premium Photo Booth',
          'Fireworks Display',
          'After Party Setup'
        ],
        popularity: 60
      }
    ],
    corporate: [
      {
        name: 'Business Essential',
        price: 100000,
        duration: 'Full Day',
        features: [
          'Stage Setup',
          'Basic Branding',
          'Welcome Desk',
          'Basic Lighting',
          'PA System',
          'Registration Area'
        ],
        popularity: 80
      },
      {
        name: 'Corporate Premium',
        price: 250000,
        duration: 'Full Day',
        features: [
          'Custom Stage Design',
          'Complete Branding',
          'LED Screens',
          'Professional Lighting',
          'Photo Booth',
          'VIP Lounge Area',
          'Breakout Rooms Setup'
        ],
        popularity: 85,
        popular: true
      },
      {
        name: 'Executive Luxury',
        price: 500000,
        duration: '2 Days',
        features: [
          'Full Venue Design',
          'Custom Branding Elements',
          'Multiple LED Walls',
          'Advanced AV Setup',
          'Green Room Setup',
          'Networking Lounge',
          'Award Ceremony Setup',
          'Live Streaming Setup'
        ],
        popularity: 70
      }
    ],
    birthday: [
      {
        name: 'Fun Birthday',
        price: 50000,
        duration: '4 Hours',
        features: [
          'Theme Backdrop',
          'Balloon Decor',
          'Welcome Sign',
          'Cake Table Setup',
          'Basic Lighting',
          'Photo Area'
        ],
        popularity: 95,
        popular: true
      },
      {
        name: 'Premium Party',
        price: 120000,
        duration: '6 Hours',
        features: [
          'Complete Theme Setup',
          'Custom Backdrop',
          'Balloon Arch/Garland',
          'Photo Booth',
          'Themed Centerpieces',
          'Party Favors Table',
          'Kids Activity Area'
        ],
        popularity: 88
      },
      {
        name: 'Ultimate Celebration',
        price: 250000,
        duration: 'Full Day',
        features: [
          'Full Venue Theming',
          'Custom Props & Decor',
          'Professional Photo Booth',
          'Face Painting Station',
          'Magic Show Setup',
          'Gaming Zone',
          'Candy Buffet',
          'Party Host'
        ],
        popularity: 75
      }
    ],
    babyshower: [
      {
        name: 'Sweet Beginnings',
        price: 40000,
        duration: '4 Hours',
        features: [
          'Pastel Theme Setup',
          'Welcome Sign',
          'Cake Table',
          'Balloon Garland',
          'Photo Backdrop',
          'Basic Centerpieces'
        ],
        popularity: 92,
        popular: true
      },
      {
        name: 'Blissful Celebration',
        price: 90000,
        duration: '6 Hours',
        features: [
          'Complete Theme Design',
          'Custom Backdrop',
          'Floral Arrangements',
          'Photo Booth Props',
          'Game Area Setup',
          'Gift Table Decor',
          'Diaper Cake Display'
        ],
        popularity: 84
      },
      {
        name: 'Royal Welcome',
        price: 180000,
        duration: 'Full Day',
        features: [
          'Luxury Theme Setup',
          'Fresh Flower Decor',
          'Professional Photography',
          'Live Music Setup',
          'Gourmet Food Stations',
          'Guest Favors',
          'Memory Table',
          'Video Montage'
        ],
        popularity: 68
      }
    ]
  };

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
    setModalVisible(true);
  };

  return (
    <div className="packages-page">
      {/* Hero Section */}
      <div className="packages-hero">
        <Title level={1}>Decoration Packages</Title>
        <Paragraph>
          Choose the perfect package for your event
        </Paragraph>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <Radio.Group 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          buttonStyle="solid"
          size="large"
        >
          <Radio.Button value="all">All Packages</Radio.Button>
          <Radio.Button value="wedding">Wedding</Radio.Button>
          <Radio.Button value="corporate">Corporate</Radio.Button>
          <Radio.Button value="birthday">Birthday</Radio.Button>
          <Radio.Button value="babyshower">Baby Shower</Radio.Button>
        </Radio.Group>
      </div>

      {/* Package Comparison */}
      {selectedCategory === 'all' ? (
        Object.entries(packages).map(([category, categoryPackages]) => (
          <section key={category} className="category-section">
            <Title level={2} className="category-title">
              {category.charAt(0).toUpperCase() + category.slice(1)} Packages
            </Title>
            <Row gutter={[24, 24]}>
              {categoryPackages.map((pkg, index) => (
                <Col xs={24} md={8} key={index}>
                  <PackageCard 
                    pkg={pkg} 
                    category={category}
                    onBook={() => handleBookNow(pkg)}
                  />
                </Col>
              ))}
            </Row>
          </section>
        ))
      ) : (
        <section className="category-section">
          <Row gutter={[24, 24]}>
            {packages[selectedCategory].map((pkg, index) => (
              <Col xs={24} md={8} key={index}>
                <PackageCard 
                  pkg={pkg} 
                  category={selectedCategory}
                  onBook={() => handleBookNow(pkg)}
                />
              </Col>
            ))}
          </Row>
        </section>
      )}

      {/* Comparison Table */}
      <section className="comparison-section">
        <Title level={2}>Package Comparison</Title>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Features</th>
                <th>Essential</th>
                <th>Premium</th>
                <th>Luxury</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Consultation</td>
                <td><CheckCircleOutlined className="check-icon" /></td>
                <td><CheckCircleOutlined className="check-icon" /></td>
                <td><CheckCircleOutlined className="check-icon" /></td>
              </tr>
              <tr>
                <td>Site Visit</td>
                <td><CheckCircleOutlined className="check-icon" /></td>
                <td><CheckCircleOutlined className="check-icon" /></td>
                <td><CheckCircleOutlined className="check-icon" /></td>
              </tr>
              <tr>
                <td>Custom Design</td>
                <td>-</td>
                <td><CheckCircleOutlined className="check-icon" /></td>
                <td><CheckCircleOutlined className="check-icon" /></td>
              </tr>
              <tr>
                <td>Premium Flowers</td>
                <td>-</td>
                <td><CheckCircleOutlined className="check-icon" /></td>
                <td><CheckCircleOutlined className="check-icon" /></td>
              </tr>
              <tr>
                <td>Lighting Design</td>
                <td>Basic</td>
                <td>Advanced</td>
                <td>Professional</td>
              </tr>
              <tr>
                <td>On-site Coordinator</td>
                <td>-</td>
                <td><CheckCircleOutlined className="check-icon" /></td>
                <td><CheckCircleOutlined className="check-icon" /></td>
              </tr>
              <tr>
                <td>Setup & Teardown</td>
                <td><CheckCircleOutlined className="check-icon" /></td>
                <td><CheckCircleOutlined className="check-icon" /></td>
                <td><CheckCircleOutlined className="check-icon" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Special Offers */}
      <section className="offers-section">
        <Title level={2}>Special Offers</Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card className="offer-card early-bird">
              <Tag color="green" className="offer-tag">SAVE 15%</Tag>
              <Title level={3}>Early Bird Discount</Title>
              <Paragraph>
                Book your decoration 3 months in advance and get 15% off
              </Paragraph>
              <Button type="primary">Learn More</Button>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card className="offer-card combo-deal">
              <Tag color="blue" className="offer-tag">COMBO OFFER</Tag>
              <Title level={3}>Wedding + Reception Combo</Title>
              <Paragraph>
                Book both wedding and reception decorations and save 20%
              </Paragraph>
              <Button type="primary">Learn More</Button>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Booking Modal */}
      <Modal
        title="Book This Package"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        {selectedPackage && (
          <Form layout="vertical">
            <div className="booking-summary">
              <Title level={4}>{selectedPackage.name} Package</Title>
              <div className="package-price">₹{selectedPackage.price.toLocaleString()}</div>
            </div>
            
            <Form.Item label="Your Name" required>
              <Input placeholder="Enter your full name" />
            </Form.Item>
            
            <Form.Item label="Email" required>
              <Input type="email" placeholder="Enter your email" />
            </Form.Item>
            
            <Form.Item label="Phone Number" required>
              <Input placeholder="Enter your phone number" />
            </Form.Item>
            
            <Form.Item label="Event Date">
              <Input type="date" />
            </Form.Item>
            
            <Form.Item label="Additional Requirements">
              <Input.TextArea rows={4} placeholder="Tell us about your specific requirements" />
            </Form.Item>
            
            <Button type="primary" block size="large">
              Confirm Booking
            </Button>
          </Form>
        )}
      </Modal>
    </div>
  );
};

const PackageCard = ({ pkg, category, onBook }) => (
  <Card className={`package-card ${pkg.popular ? 'popular' : ''}`}>
    {pkg.popular && <div className="popular-badge">Most Popular</div>}
    
    <div className="package-header">
      <Title level={3}>{pkg.name}</Title>
      <div className="package-price">₹{pkg.price.toLocaleString()}</div>
      <Tag color="blue">{pkg.duration}</Tag>
    </div>

    <div className="package-popularity">
      <Progress 
        percent={pkg.popularity} 
        size="small" 
        status="active"
        format={(percent) => `${percent}% book this`}
      />
    </div>

    <ul className="package-features">
      {pkg.features.map((feature, index) => (
        <li key={index}>
          <CheckCircleOutlined /> {feature}
        </li>
      ))}
    </ul>

    <Button type="primary" block onClick={onBook}>
      Book Now
    </Button>
  </Card>
);

export default DecorationPackages;