// pages/DecorationPackages.js
import React, { useState } from 'react';
import { Row, Col, Card, Button, Typography, Radio, Tag, Progress, Modal, Form, Input, Select, Slider, Alert } from 'antd';
import { 
  CheckCircleOutlined, 
  RocketOutlined, 
  CrownOutlined,
  GiftOutlined,
  PercentageOutlined,
  HeartOutlined,
  HomeOutlined,
  ShopOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  CalendarOutlined,
  TeamOutlined,
  BulbOutlined,
  SmileOutlined,
  DollarOutlined
} from '@ant-design/icons';
import './index.css';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

const DecorationPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [budgetRange, setBudgetRange] = useState([50000, 500000]);
  const [guestCount, setGuestCount] = useState(100);

  // User-friendly packages with price ranges
  const packages = {
    wedding: [
      {
        name: 'Simple & Elegant',
        priceRange: '₹50,000 - ₹1,50,000',
        minPrice: 50000,
        maxPrice: 150000,
        duration: 'Full Day',
        description: 'Perfect for intimate weddings with basic decoration needs',
        features: [
          'Basic Mandap Decoration',
          'Fresh Local Flowers',
          'Welcome Gate Setup',
          'Stage Backdrop',
          'Basic LED Lighting',
          'Catering Area Decor',
          '2 Flower Bouquets',
          'Basic Table Settings'
        ],
        popularity: 85,
        suitable: 'Up to 200 guests',
        icon: <HeartOutlined />
      },
      {
        name: 'Grand Celebration',
        priceRange: '₹1,50,000 - ₹3,50,000',
        minPrice: 150000,
        maxPrice: 350000,
        duration: 'Full Day + Night',
        description: 'Ideal for medium to large weddings with premium elements',
        features: [
          'Luxury Mandap Design',
          'Premium Fresh Flowers',
          'Complete Venue Decor',
          'Professional Lighting Design',
          'Photo Booth Setup',
          'Bridal Room Decor',
          'Custom Signage',
          'Centerpieces for 50 Tables',
          'Flower Bouquets (4)',
          'Welcome Drinks Counter Decor'
        ],
        popularity: 95,
        popular: true,
        suitable: 'Up to 500 guests',
        icon: <CrownOutlined />
      },
      {
        name: 'Royal Affair',
        priceRange: '₹3,50,000 - ₹10,00,000+',
        minPrice: 350000,
        maxPrice: 1000000,
        duration: '2-3 Days',
        description: 'Ultimate luxury wedding with custom designs and premium elements',
        features: [
          'Custom Mandap Design',
          'Imported & Exotic Flowers',
          'Full Venue Transformation',
          'Professional Sound & Light Show',
          'LED Wall/Projection Mapping',
          'Premium Photo/Video Booth',
          'Fireworks/Drone Show',
          'After Party Setup',
          'VIP Lounge Area',
          'Custom Furniture Rental',
          'Live Caricature Artist',
          'Bridal Suite Decoration'
        ],
        popularity: 75,
        suitable: '500+ guests',
        icon: <RocketOutlined />
      }
    ],
    corporate: [
      {
        name: 'Professional Meet',
        priceRange: '₹75,000 - ₹2,00,000',
        minPrice: 75000,
        maxPrice: 200000,
        duration: 'Full Day',
        description: 'Essential setup for conferences and meetings',
        features: [
          'Professional Stage Setup',
          'Basic Branding (Banners)',
          'Welcome Desk with Decor',
          'Professional Lighting',
          'PA System with Mics',
          'Registration Area Setup',
          'Seating Arrangement',
          'Water Stations Decor'
        ],
        popularity: 80,
        suitable: '50-200 attendees',
        icon: <ShopOutlined />
      },
      {
        name: 'Corporate Excellence',
        priceRange: '₹2,00,000 - ₹5,00,000',
        minPrice: 200000,
        maxPrice: 500000,
        duration: 'Full Day',
        description: 'Premium setup for product launches and galas',
        features: [
          'Custom Stage Design',
          'Complete Branding Package',
          'LED Screens (2-3)',
          'Professional Lighting Design',
          'Photo Booth with Branding',
          'VIP Lounge Area Setup',
          'Breakout Rooms Setup',
          'Networking Area Decor',
          'Green Room Setup',
          'Live Streaming Setup'
        ],
        popularity: 85,
        popular: true,
        suitable: '200-500 attendees',
        icon: <CrownOutlined />
      },
      {
        name: 'Executive Summit',
        priceRange: '₹5,00,000 - ₹15,00,000+',
        minPrice: 500000,
        maxPrice: 1500000,
        duration: '2-3 Days',
        description: 'High-end corporate events with wow factor',
        features: [
          'Full Venue Design & Theming',
          'Custom Branding Elements',
          'Multiple LED Walls',
          'Advanced AV & Lighting',
          'Interactive Experiences',
          'Award Ceremony Setup',
          'Gala Dinner Decor',
          'Entertainment Stage',
          'VIP Suites',
          'Red Carpet Entry',
          'Brand Activation Zones',
          'Professional Photography'
        ],
        popularity: 70,
        suitable: '500+ attendees',
        icon: <RocketOutlined />
      }
    ],
    birthday: [
      {
        name: 'Fun Celebration',
        priceRange: '₹25,000 - ₹75,000',
        minPrice: 25000,
        maxPrice: 75000,
        duration: '4-5 Hours',
        description: 'Perfect for kids parties and intimate gatherings',
        features: [
          'Theme-based Backdrop',
          'Balloon Arch/Garland',
          'Welcome Sign with Name',
          'Cake Table Setup',
          'Basic LED Lighting',
          'Photo Area with Props',
          'Party Banners',
          'Balloon Centerpieces'
        ],
        popularity: 90,
        suitable: 'Up to 50 guests',
        icon: <GiftOutlined />
      },
      {
        name: 'Birthday Bash',
        priceRange: '₹75,000 - ₹2,00,000',
        minPrice: 75000,
        maxPrice: 200000,
        duration: '6-8 Hours',
        description: 'Complete themed party for memorable celebrations',
        features: [
          'Complete Theme Setup',
          'Custom Backdrop Design',
          'Giant Balloon Garland',
          'Professional Photo Booth',
          'Themed Centerpieces',
          'Party Favors Table',
          'Kids Activity Area',
          'Face Painting Station',
          'Candy/Cake Buffet',
          'Number/LED Signs',
          'Dance Floor Decor'
        ],
        popularity: 95,
        popular: true,
        suitable: '50-150 guests',
        icon: <CrownOutlined />
      },
      {
        name: 'Ultimate Party',
        priceRange: '₹2,00,000 - ₹5,00,000+',
        minPrice: 200000,
        maxPrice: 500000,
        duration: 'Full Day/Night',
        description: 'Luxury birthday experience with entertainment',
        features: [
          'Full Venue Transformation',
          'Custom Props & Installations',
          'Professional AV & Lighting',
          'Premium Photo/Video Booth',
          'Live Entertainment Setup',
          'Gaming Zone',
          'Gourmet Food Stations',
          'Magic Show/Performance',
          'Professional Host/MC',
          'Fireworks/Confetti',
          'Celebrity Look-alikes',
          'Memory Video Montage'
        ],
        popularity: 75,
        suitable: '150-300 guests',
        icon: <RocketOutlined />
      }
    ],
    babyshower: [
      {
        name: 'Sweet Beginnings',
        priceRange: '₹25,000 - ₹60,000',
        minPrice: 25000,
        maxPrice: 60000,
        duration: '4 Hours',
        description: 'Simple and cute setup for intimate baby showers',
        features: [
          'Pastel Theme Setup',
          'Welcome Sign with Baby Name',
          'Cake Table Decoration',
          'Balloon Garland (Pink/Blue)',
          'Photo Backdrop',
          'Basic Centerpieces',
          'Onesie Display Line',
          'Party Banners'
        ],
        popularity: 92,
        suitable: 'Up to 40 guests',
        icon: <HeartOutlined />
      },
      {
        name: 'Blissful Celebration',
        priceRange: '₹60,000 - ₹1,50,000',
        minPrice: 60000,
        maxPrice: 150000,
        duration: '5-6 Hours',
        description: 'Beautiful themed setup with all essential elements',
        features: [
          'Complete Theme Design',
          'Custom Backdrop',
          'Floral Arrangements',
          'Photo Booth with Props',
          'Game Area Setup',
          'Gift Table Decor',
          'Diaper Cake Display',
          'Baby Bottle Props',
          'Floral Centerpieces',
          'Memory/Advice Cards'
        ],
        popularity: 88,
        popular: true,
        suitable: '40-100 guests',
        icon: <CrownOutlined />
      },
      {
        name: 'Royal Welcome',
        priceRange: '₹1,50,000 - ₹3,50,000+',
        minPrice: 150000,
        maxPrice: 350000,
        duration: 'Full Day',
        description: 'Luxury baby shower with premium decor and experiences',
        features: [
          'Luxury Theme Setup',
          'Fresh Flower Installations',
          'Professional Photography',
          'Live Music/Entertainment',
          'Gourmet Food Stations',
          'Custom Guest Favors',
          'Memory/Time Capsule Table',
          'Video Montage',
          'Professional Host',
          'Celebrity Wish Video',
          'Kids Corner',
          'Professional Lighting'
        ],
        popularity: 75,
        suitable: '100-200 guests',
        icon: <RocketOutlined />
      }
    ],
    house: [
      {
        name: 'Traditional Welcome',
        priceRange: '₹15,000 - ₹40,000',
        minPrice: 15000,
        maxPrice: 40000,
        duration: '4-5 Hours',
        description: 'Essential Grihapravesh and house warming decor',
        features: [
          'Mango Leaf Torans (Doors)',
          'Traditional Kolam/Rangoli',
          'Pooja Room Setup',
          'Basic Flower Decor',
          'Coconut & Fruit Displays',
          'Traditional Lamps',
          'Welcome Sign'
        ],
        popularity: 95,
        suitable: 'Up to 50 guests',
        icon: <HomeOutlined />
      },
      {
        name: 'Blessings & Prosperity',
        priceRange: '₹40,000 - ₹1,00,000',
        minPrice: 40000,
        maxPrice: 100000,
        duration: 'Full Day',
        description: 'Complete traditional setup with all elements',
        features: [
          'Main Door Arch/Toran',
          'Traditional Kolam Designs',
          'Complete Pooja Setup',
          'Fresh Flower Garlands',
          'Sacred Fire Area Decor',
          'Navagraha Setup',
          'Seating Arrangement',
          'Feast Area Decor',
          'Brass Vessel Decor',
          'Fruit & Offering Tables'
        ],
        popularity: 90,
        popular: true,
        suitable: '50-150 guests',
        icon: <CrownOutlined />
      },
      {
        name: 'Vedic Grandeur',
        priceRange: '₹1,00,000 - ₹2,50,000+',
        minPrice: 100000,
        maxPrice: 250000,
        duration: 'Full Day +',
        description: 'Elaborate traditional ceremony with premium elements',
        features: [
          'Grand Entrance Arch',
          'Elaborate Kolam/Rangoli',
          'Vedic Theme Setup',
          'Premium Flower Decor',
          'Yagnashala Setup',
          'Veda Path Area',
          'Professional Photography',
          'Live Vedic Chanting',
          'Traditional Music',
          'Guest Comfort Areas',
          'Blessing Ceremony Setup',
          'Custom Signage'
        ],
        popularity: 75,
        suitable: '150-300 guests',
        icon: <RocketOutlined />
      }
    ],
    haldi: [
      {
        name: 'Yellow Bliss',
        priceRange: '₹20,000 - ₹50,000',
        minPrice: 20000,
        maxPrice: 50000,
        duration: '4 Hours',
        description: 'Vibrant yellow-themed haldi ceremony setup',
        features: [
          'Yellow Theme Decor',
          'Marigold Backdrop',
          'Brass Vessel Setup',
          'Traditional Seating',
          'Flower Petal Showers',
          'Basic Photo Area',
          'Turmeric Grinding Display'
        ],
        popularity: 92,
        suitable: 'Up to 50 guests',
        icon: <HeartOutlined />
      },
      {
        name: 'Traditional Fun',
        priceRange: '₹50,000 - ₹1,20,000',
        minPrice: 50000,
        maxPrice: 120000,
        duration: '5-6 Hours',
        description: 'Complete haldi ceremony with traditional elements',
        features: [
          'Complete Yellow Theme',
          'Marigold Canopy',
          'Traditional Props',
          'Photo Booth Setup',
          'Flower Showers Setup',
          'Family Portrait Area',
          'Rangoli Designs',
          'Traditional Music',
          'Floating Flowers',
          'Herbal Displays'
        ],
        popularity: 88,
        popular: true,
        suitable: '50-100 guests',
        icon: <CrownOutlined />
      },
      {
        name: 'Royal Haldi',
        priceRange: '₹1,20,000 - ₹2,50,000+',
        minPrice: 120000,
        maxPrice: 250000,
        duration: 'Full Day',
        description: 'Luxury haldi ceremony with premium decor',
        features: [
          'Luxury Yellow Theme',
          'Premium Flower Installations',
          'Traditional Throne Seating',
          'Professional Photography',
          'Live Music/Dhol',
          'Flower Shower Machine',
          'Custom Props & Signs',
          'Guest Activity Areas',
          'Traditional Food Counter',
          'Makeup/Prep Area Decor',
          'Professional Lighting'
        ],
        popularity: 75,
        suitable: '100-200 guests',
        icon: <RocketOutlined />
      }
    ]
  };

  const categories = [
    { key: 'all', label: 'All Packages', icon: '📦' },
    { key: 'wedding', label: 'Wedding', icon: '💍' },
    { key: 'corporate', label: 'Corporate', icon: '🏢' },
    { key: 'birthday', label: 'Birthday', icon: '🎂' },
    { key: 'babyshower', label: 'Baby Shower', icon: '👶' },
    { key: 'house', label: 'House Ceremonies', icon: '🏠' },
    { key: 'haldi', label: 'Haldi', icon: '🌼' }
  ];

  const handleBookNow = (pkg, category) => {
    setSelectedPackage({ ...pkg, category });
    setModalVisible(true);
  };

  const getFilteredPackages = () => {
    if (selectedCategory === 'all') {
      return Object.entries(packages).flatMap(([cat, pkgs]) => 
        pkgs.map(pkg => ({ ...pkg, category: cat }))
      );
    }
    return packages[selectedCategory].map(pkg => ({ ...pkg, category: selectedCategory }));
  };

  const filteredPackages = getFilteredPackages();

  return (
    <div className="packages-page">
      {/* Hero Section */}
      <div className="packages-hero">
        <div className="hero-overlay">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title level={1} className="hero-title">Decoration Packages</Title>
            <Paragraph className="hero-description">
              Choose from our flexible packages or customize your own
            </Paragraph>
            <Paragraph className="hero-sub-description">
              <DollarOutlined /> Prices start from ₹15,000 • Customized based on your requirements
            </Paragraph>
          </motion.div>
        </div>
      </div>

      {/* Important Note */}
      <div className="price-note">
        <Alert
          message="Flexible Pricing"
          description="All prices are indicative and can be customized based on your specific requirements, guest count, venue size, and choice of decorations. Contact us for a personalized quote."
          type="info"
          showIcon
          icon={<DollarOutlined />}
          className="price-alert"
        />
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <Radio.Group 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          buttonStyle="solid"
          size="large"
          className="category-radio-group"
        >
          {categories.map(cat => (
            <Radio.Button key={cat.key} value={cat.key}>
              <span className="category-radio-label">
                <span className="category-icon">{cat.icon}</span>
                {cat.label}
              </span>
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>

      {/* Quick Filters */}
      <div className="quick-filters">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={8}>
            <div className="filter-item">
              <Text strong>Budget Range:</Text>
              <Slider
                range
                min={10000}
                max={1000000}
                step={10000}
                value={budgetRange}
                onChange={setBudgetRange}
                tipFormatter={(value) => `₹${value.toLocaleString()}`}
              />
              <div className="budget-display">
                <Tag color="gold">₹{budgetRange[0].toLocaleString()}</Tag>
                <span> to </span>
                <Tag color="gold">₹{budgetRange[1].toLocaleString()}</Tag>
              </div>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="filter-item">
              <Text strong>Guest Count:</Text>
              <Slider
                min={10}
                max={1000}
                value={guestCount}
                onChange={setGuestCount}
                tipFormatter={(value) => `${value} guests`}
              />
              <div className="guest-display">
                <Tag color="blue">{guestCount} Guests</Tag>
              </div>
            </div>
          </Col>
          {/* <Col xs={24} md={8}>
            <div className="filter-item">
              <Text strong>Need Help?</Text>
              <Button type="primary" block icon={<BulbOutlined />}>
                Get Custom Quote
              </Button>
            </div>
          </Col> */}
        </Row>
      </div>

      {/* Package Grid */}
      <section className="packages-section">
        <Row gutter={[24, 24]}>
          {filteredPackages
            .filter(pkg => pkg.maxPrice >= budgetRange[0] && pkg.minPrice <= budgetRange[1])
            .map((pkg, index) => (
            <Col xs={24} md={8} key={index}>
              <PackageCard 
                pkg={pkg} 
                onBook={() => handleBookNow(pkg, pkg.category)}
              />
            </Col>
          ))}
        </Row>
      </section>

      {/* Custom Package Section */}
      <section className="custom-package-section">
        <Card className="custom-package-card">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={16}>
              <Title level={2}>Need a Custom Package?</Title>
              <Paragraph className="custom-description">
                Don't see exactly what you're looking for? We can create a completely 
                customized package based on your specific requirements, budget, and vision.
              </Paragraph>
              <ul className="custom-features">
                <li><CheckCircleOutlined /> Mix and match elements from different packages</li>
                <li><CheckCircleOutlined /> Choose your own flowers, fabrics, and materials</li>
                <li><CheckCircleOutlined /> Flexible duration and setup times</li>
                <li><CheckCircleOutlined /> Personalize themes and color schemes</li>
                <li><CheckCircleOutlined /> Add or remove elements as needed</li>
              </ul>
            </Col>
            <Col xs={24} md={8} className="text-center">
              <div className="custom-price-range">
                <Title level={3}>Starting from</Title>
                <div className="price">₹15,000</div>
                <Text type="secondary">Based on your requirements</Text>
              </div>
              <Button type="primary" size="large" block className="custom-btn" onClick={() => setModalVisible(true)}>
                Design Your Package
              </Button>
            </Col>
          </Row>
        </Card>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <Title level={2}>Why Choose Our Packages?</Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} md={6}>
            <Card className="why-card">
              <DollarOutlined className="why-icon" />
              <Title level={4}>Flexible Pricing</Title>
              <Text>Packages for every budget from small gatherings to grand celebrations</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card className="why-card">
              <SmileOutlined className="why-icon" />
              <Title level={4}>Customizable</Title>
              <Text>Mix and match elements to create your perfect package</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card className="why-card">
              <TeamOutlined className="why-icon" />
              <Title level={4}>Expert Team</Title>
              <Text>Experienced designers who understand your vision</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card className="why-card">
              <BulbOutlined className="why-icon" />
              <Title level={4}>Quality Assured</Title>
              <Text>Premium materials and fresh flowers guaranteed</Text>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Booking Modal */}
      <Modal
        title="Get Your Custom Quote"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={600}
        className="booking-modal"
      >
        {selectedPackage && (
          <div className="booking-content">
            <div className="selected-package-info">
              <Tag color="gold" className="category-tag">{selectedPackage.category}</Tag>
              <Title level={4}>{selectedPackage.name}</Title>
              <div className="price-range-info">
                <DollarOutlined /> Price Range: {selectedPackage.priceRange}
              </div>
              <Paragraph type="secondary">
                *Final price will be customized based on your specific requirements
              </Paragraph>
            </div>
          </div>
        )}
        
        <Form layout="vertical" className="booking-form">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Full Name" required>
                <Input prefix={<UserOutlined />} placeholder="Enter your name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Phone Number" required>
                <Input prefix={<PhoneOutlined />} placeholder="Enter phone number" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Email" required>
                <Input prefix={<MailOutlined />} placeholder="Enter email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Event Type" required>
                <Select placeholder="Select event type">
                  <Option value="wedding">Wedding</Option>
                  <Option value="corporate">Corporate</Option>
                  <Option value="birthday">Birthday</Option>
                  <Option value="babyshower">Baby Shower</Option>
                  <Option value="house">House Ceremony</Option>
                  <Option value="haldi">Haldi</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Event Date">
                <Input prefix={<CalendarOutlined />} placeholder="DD/MM/YYYY" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Guest Count">
                <Input prefix={<TeamOutlined />} placeholder="Approx. guests" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Budget Range">
            <Select placeholder="Select your budget range">
              <Option value="<25000">Less than ₹25,000</Option>
              <Option value="25000-50000">₹25,000 - ₹50,000</Option>
              <Option value="50000-100000">₹50,000 - ₹1,00,000</Option>
              <Option value="100000-200000">₹1,00,000 - ₹2,00,000</Option>
              <Option value="200000-500000">₹2,00,000 - ₹5,00,000</Option>
              <Option value=">500000">More than ₹5,00,000</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Specific Requirements">
            <Input.TextArea 
              rows={4} 
              placeholder="Tell us about your vision, preferred colors, themes, specific elements you want, etc."
            />
          </Form.Item>

          {/* <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Request Custom Quote
            </Button>
          </Form.Item> */}

          <div className="booking-note">
            <Text type="secondary">
              <PercentageOutlined /> We'll get back to you within 24 hours with a personalized quote
            </Text>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

const PackageCard = ({ pkg, onBook }) => (
  <Card className={`package-card ${pkg.popular ? 'popular' : ''}`}>
    {pkg.popular && <div className="popular-badge">Most Popular</div>}
    
    <div className="package-icon">
      {pkg.icon}
    </div>

    <div className="package-header">
      <Title level={3}>{pkg.name}</Title>
      <div className="package-price-range">{pkg.priceRange}</div>
      <div className="package-tags">
        <Tag color="blue">{pkg.duration}</Tag>
        <Tag color="green">{pkg.suitable}</Tag>
      </div>
    </div>

    <div className="package-description">
      <Text type="secondary">{pkg.description}</Text>
    </div>

    <div className="package-popularity">
      <Progress 
        percent={pkg.popularity} 
        size="small" 
        status="active"
        format={(percent) => `${percent}% customers choose this`}
        strokeColor="#c6a15b"
      />
    </div>

    <div className="package-features">
      <Title level={5}>What's Included:</Title>
      <ul>
        {pkg.features.map((feature, index) => (
          <li key={index}>
            <CheckCircleOutlined style={{ color: '#c6a15b' }} /> {feature}
          </li>
        ))}
      </ul>
    </div>

    <div className="package-note">
      <Text type="secondary" className="price-note">
        <DollarOutlined /> Final price based on requirements
      </Text>
    </div>

    {/* <Button type="primary" block onClick={onBook} className="book-btn">
      Get Custom Quote
    </Button> */}
  </Card>
);

export default DecorationPackages;