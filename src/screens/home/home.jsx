// pages/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Row, Col, Card, Button, Typography, Space, Carousel, 
  Rate, Tabs, Statistic, Timeline, Tag, Badge, Divider,
  Avatar, List, Modal, Input, Form, Progress, Tooltip,
  Empty, Skeleton, Collapse, Steps, Select
} from 'antd';
import { 
  HeartOutlined, 
  TrophyOutlined, 
  GiftOutlined, 
  TeamOutlined,
  CheckCircleOutlined, 
  StarOutlined,
  RocketOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  WhatsAppOutlined,
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  ClockCircleOutlined,
  SafetyOutlined,
  SmileOutlined,
  CustomerServiceOutlined,
  DollarCircleOutlined,
  CameraOutlined,
  BulbOutlined,
  ThunderboltOutlined,
  ExperimentOutlined,
  GlobalOutlined,
  GiftFilled,
  CrownFilled,
  GoldFilled,
  FireFilled,
  RocketFilled,
  PlusOutlined,
  LeftOutlined,
  RightOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  EyeOutlined
} from '@ant-design/icons';
// Import multiple images from your wedding folder
import w1 from "../../assests/wedding/w1.jpeg";
import w2 from "../../assests/wedding/w2.jpeg";
import w3 from "../../assests/wedding/w3.jpeg";
import w4 from "../../assests/wedding/w1.jpeg";
import w5 from "../../assests/wedding/w2.jpeg";
import w6 from "../../assests/wedding/w3.jpeg";
import w7 from "../../assests/wedding/w1.jpeg";
import w8 from "../../assests/wedding/w2.jpeg";
import w9 from "../../assests/wedding/w3.jpeg";
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './home.css';

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;
const { Panel } = Collapse;
const { Step } = Steps;

// Fixed custom hook for counting animation
const useCountAnimation = (end, start = 0, duration = 2) => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.3
  });
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(start + (end - start) * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [inView, end, start, duration]);

  return [ref, count];
};

// Stats Counter Component
const StatCounter = ({ icon, value, label, suffix = '+' }) => {
  const [ref, count] = useCountAnimation(value);
  
  return (
    <div className="stat-counter" ref={ref}>
      <div className="stat-counter-icon">{icon}</div>
      <div className="stat-counter-value">
        {count}{suffix}
      </div>
      <div className="stat-counter-label">{label}</div>
    </div>
  );
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryModalVisible, setGalleryModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quoteFormVisible, setQuoteFormVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('wedding');

  const heroSlides = [
    {
      image: w4,
      title: 'Elegant Wedding Decorations',
      subtitle: 'Transform your special day into a fairytale',
      description: 'Luxury wedding setups with attention to every detail',
      badge: 'Featured',
      stats: { events: '500+', clients: '450+', cities: '25+' }
    },
    {
      image: w1,
      title: 'Professional Corporate Events',
      subtitle: 'Impress your clients with stunning setups',
      description: 'Corporate galas, conferences, and brand launches',
      badge: 'Top Rated',
      stats: { events: '300+', clients: '200+', cities: '15+' }
    },
    {
      image: w2,
      title: 'Magical Birthday Parties',
      subtitle: 'Create unforgettable memories',
      description: 'Themed parties for all ages with custom designs',
      badge: 'Most Popular',
      stats: { events: '1000+', clients: '950+', cities: '30+' }
    }
  ];

 const decorationCategories = [
  {
    key: 'wedding',
    title: 'Wedding Decorations',
    icon: <HeartOutlined />,
    image: w3,
    description: 'From intimate gatherings to grand celebrations',
    longDescription: 'We create magical wedding experiences with exquisite floral arrangements, stunning mandaps, and elegant lighting that transforms your venue into a dream setting. Serving Vijayawada, Guntur, Tenali, Machilipatnam and surrounding areas.',
    items: [
      'Mandap Decor', 'Flower Arrangements', 'Lighting Design', 
      'Table Settings', 'Backdrop Design', 'Welcome Signs',
      'Aisle Decor', 'Photo Booth'
    ],
    stats: { events: 1000, satisfaction: 98, designers: 30 },
    price: 'Starting ₹1,50,000',
    features: ['Custom Designs', 'Premium Flowers', 'Expert Team']
  },
  {
    key: 'corporate',
    title: 'Corporate Events',
    icon: <TrophyOutlined />,
    image: w4,
    description: 'Professional setups for business events',
    longDescription: 'Elevate your corporate events with sophisticated designs that reflect your brand identity. We serve major companies in Vijayawada\'s IT parks, leading hotels, and corporate offices across Andhra Pradesh.',
    items: [
      'Stage Design', 'Branding Elements', 'Conference Setup',
      'Award Ceremonies', 'Product Launches', 'Trade Shows',
      'VIP Lounges', 'Backdrop Branding'
    ],
    stats: { events: 500, satisfaction: 95, designers: 25 },
    price: 'Starting ₹2,00,000',
    features: ['Brand Integration', 'Corporate Themes', 'Professional Setup']
  },
  {
    key: 'birthday',
    title: 'Birthday Parties',
    icon: <GiftOutlined />,
    image: w5,
    description: 'Fun and creative themes for all ages',
    longDescription: 'Make every birthday unforgettable with our creative themes, from whimsical children\'s parties to sophisticated adult celebrations. We serve homes, party halls, and venues across Vijayawada, Guntur, and Tenali.',
    items: [
      'Theme Parties', 'Balloon Decor', 'Backdrop Design',
      'Photo Booths', 'Table Settings', 'Lighting Effects',
      'Prop Rentals', 'Cake Tables'
    ],
    stats: { events: 2000, satisfaction: 99, designers: 35 },
    price: 'Starting ₹50,000',
    features: ['Age-Appropriate Themes', 'Custom Designs', 'Interactive Elements']
  },
  {
    key: 'baby',
    title: 'Baby Showers',
    icon: <TeamOutlined />,
    image: w6,
    description: 'Celebrate new beginnings with style',
    longDescription: 'Welcome the little one with beautifully designed baby showers featuring pastel colors, cute decorations, and memorable photo opportunities. Serving Vijayawada, Guntur, and surrounding areas with gender reveal and baby shower parties.',
    items: [
      'Gender Reveal', 'Pastel Themes', 'Cake Tables',
      'Welcome Signs', 'Balloon Arches', 'Photo Backdrops',
      'Party Favors', 'Diaper Cakes'
    ],
    stats: { events: 300, satisfaction: 97, designers: 18 },
    price: 'Starting ₹40,000',
    features: ['Sweet Themes', 'Photo Ready', 'Memory Making']
  },
  {
    key: 'anniversary',
    title: 'Anniversary Celebrations',
    icon: <CrownFilled />,
    image: w7,
    description: 'Celebrate timeless love stories',
    longDescription: 'Honor years of togetherness with elegant anniversary decorations. Celebrate 25th, 50th anniversaries with grandeur. We serve venues across Vijayawada, Machilipatnam, and coastal Andhra.',
    items: [
      'Vow Renewals', 'Romantic Settings', 'Photo Displays',
      'Memory Walls', 'Cake Tables', 'Lighting Design',
      'Flower Arrangements', 'Guest Books'
    ],
    stats: { events: 200, satisfaction: 96, designers: 15 },
    price: 'Starting ₹50,000',
    features: ['Romantic Themes', 'Memory Displays', 'Elegant Setup']
  },
  {
    key: 'engagement',
    title: 'Engagement Parties',
    icon: <GoldFilled />,
    image: w8,
    description: 'Start your journey in style',
    longDescription: 'Celebrate your engagement with beautiful decorations that set the perfect mood. We create stunning proposal setups at Bungalow, Trendset Gardens, and other premium venues across Vijayawada.',
    items: [
      'Proposal Setup', 'Ring Displays', 'Photo Booths',
      'Table Decor', 'Lighting Effects', 'Floral Arches',
      'Welcome Signs', 'Party Favors'
    ],
    stats: { events: 350, satisfaction: 98, designers: 20 },
    price: 'Starting ₹60,000',
    features: ['Romantic Vibes', 'Photo Ready', 'Personalized']
  }
];

  const featuredDecorations = [
  {
    title: 'Royal Wedding Setup - Vijayawada',
    image: w1,
    price: 'Starting ₹1,50,000',
    rating: 5,
    reviews: 156,
    location: 'Vijayawada',
    category: 'Wedding',
    designer: 'Lakshmi Prasad',
    features: ['Premium Flowers', 'LED Lighting', 'Custom Mandap']
  },
  {
    title: 'Corporate Gala Night - Guntur',
    image: w2,
    price: 'Starting ₹2,00,000',
    rating: 5,
    reviews: 112,
    location: 'Guntur',
    category: 'Corporate',
    designer: 'Srinivas Rao',
    features: ['Stage Design', 'Branding', 'VIP Lounge']
  },
  {
    title: 'Enchanted Birthday - Tenali',
    image: w3,
    price: 'Starting ₹50,000',
    rating: 4.8,
    reviews: 189,
    location: 'Tenali',
    category: 'Birthday',
    designer: 'Sunitha Reddy',
    features: ['Balloon Decor', 'Photo Booth', 'Themed Setup']
  },
  {
    title: 'Baby Shower Bliss - Machilipatnam',
    image: w4,
    price: 'Starting ₹40,000',
    rating: 4.9,
    reviews: 98,
    location: 'Machilipatnam',
    category: 'Baby Shower',
    designer: 'Kavita Singh',
    features: ['Pastel Theme', 'Welcome Signs', 'Cake Table']
  },
  {
    title: 'Golden Anniversary - Vijayawada',
    image: w5,
    price: 'Starting ₹75,000',
    rating: 4.9,
    reviews: 87,
    location: 'Vijayawada',
    category: 'Anniversary',
    designer: 'Ramana Kumar',
    features: ['Elegant Setup', 'Photo Display', 'Live Music']
  },
  {
    title: 'Beach Proposal - Mangalagiri',
    image: w6,
    price: 'Starting ₹70,000',
    rating: 5,
    reviews: 63,
    location: 'Mangalagiri',
    category: 'Engagement',
    designer: 'Deepti Sharma',
    features: ['Sunset Setup', 'Private Venue', 'Photographer']
  }
];

 const testimonials = [
  {
    name: 'Lakshmi & Ramesh',
    event: 'Wedding Client - Vijayawada',
    text: 'The decoration was absolutely stunning! They transformed the venue at Hotel Ilapuram into exactly what we envisioned. Every detail was perfect, from the mandap to the table settings.',
    image: w1,
    rating: 5,
    date: 'March 2024',
    location: 'Vijayawada'
  },
  {
    name: 'Srinivas Murthy',
    event: 'Corporate Event - Guntur',
    text: 'Professional team with amazing creativity. Our annual gala at KKR Gardens was a huge success thanks to their incredible decoration setup. The branding elements were spot on!',
    image: w2,
    rating: 5,
    date: 'February 2024',
    location: 'Guntur'
  },
  {
    name: 'Sunitha Reddy',
    event: 'Birthday Party - Tenali',
    text: 'My daughter\'s 10th birthday was magical! The theme decoration at our home in Tenali exceeded all expectations. The kids loved the photo booth and balloon decorations.',
    image: w3,
    rating: 4.8,
    date: 'January 2024',
    location: 'Tenali'
  },
  {
    name: 'Vikram & Anjali',
    event: 'Anniversary - Vijayawada',
    text: 'Our 25th anniversary was made special by their elegant decorations at our residence in Benz Circle. The rose petals, candlelight, and photo display created such a romantic atmosphere.',
    image: w4,
    rating: 5,
    date: 'December 2023',
    location: 'Vijayawada'
  },
  {
    name: 'Pavan Kumar',
    event: 'Engagement - Mangalagiri',
    text: 'The beach proposal setup at Mangalagiri was perfect! She said yes! Thank you SatisfEvents for creating such a memorable moment.',
    image: w5,
    rating: 5,
    date: 'November 2023',
    location: 'Mangalagiri'
  }
];

  const blogPosts = [
  {
    title: 'Top Wedding Decoration Trends in Vijayawada for 2024',
    excerpt: 'Discover the hottest trends in wedding decorations across Andhra Pradesh including sustainable decor, traditional Kalamkari elements, and modern fusion designs.',
    image: w5,
    date: 'March 15, 2024',
    author: 'Lakshmi Prasad',
    category: 'Wedding',
    readTime: '5 min',
    views: 1234
  },
  {
    title: 'Best Venues for Corporate Events in Guntur & Vijayawada',
    excerpt: 'Essential guide to planning successful corporate events at top venues like KKR Gardens, Ilapuram Hotel, and Andhra Loyola College auditorium.',
    image: w6,
    date: 'March 10, 2024',
    author: 'Srinivas Rao',
    category: 'Corporate',
    readTime: '7 min',
    views: 987
  },
  {
    title: 'Traditional vs Modern: Wedding Decor in Coastal Andhra',
    excerpt: 'Explore the blend of traditional Andhra wedding decor with modern elements that are trending in Vijayawada, Guntur, and Machilipatnam.',
    image: w7,
    date: 'March 5, 2024',
    author: 'Sunitha Reddy',
    category: 'Tips',
    readTime: '4 min',
    views: 1567
  }
];

  const faqs = [
    {
      question: 'How far in advance should I book decoration services?',
      answer: 'We recommend booking at least 2-3 months in advance for weddings and large events, and 3-4 weeks for smaller celebrations. This ensures we have enough time for planning and sourcing materials.'
    },
    {
      question: 'Do you provide custom decoration designs?',
      answer: 'Yes! We specialize in custom designs tailored to your theme, preferences, and budget. Our team works closely with you to bring your vision to life.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We have a flexible cancellation policy. Full refunds are available up to 30 days before the event, with partial refunds closer to the date.'
    },
    {
      question: 'Do you handle setup and teardown?',
      answer: 'Absolutely! Our team manages complete setup before your event and teardown afterwards, so you can focus on enjoying your celebration.'
    }
  ];

const galleryImages = [
  { image: w1, title: 'Royal Wedding at Hotel Ilapuram', category: 'Wedding', year: '2024', location: 'Vijayawada' },
  { image: w2, title: 'Corporate Gala at KKR Gardens', category: 'Corporate', year: '2024', location: 'Guntur' },
  { image: w3, title: 'Birthday Magic at Private Residence', category: 'Birthday', year: '2023', location: 'Tenali' },
  { image: w4, title: 'Baby Shower at Convention Center', category: 'Baby Shower', year: '2024', location: 'Machilipatnam' },
  { image: w5, title: 'Golden Anniversary Celebration', category: 'Anniversary', year: '2023', location: 'Vijayawada' },
  { image: w6, title: 'Befront Engagement Setup', category: 'Engagement', year: '2024', location: 'Mangalagiri' },
  { image: w7, title: 'Wedding Reception at Benz Circle', category: 'Wedding', year: '2023', location: 'Vijayawada' },
  { image: w8, title: 'Product Launch at IT Park', category: 'Corporate', year: '2024', location: 'Vijayawada' },
  { image: w9, title: 'Sweet Sixteen at Hotel Apsara', category: 'Birthday', year: '2023', location: 'Guntur' }
];

 const teamMembers = [
  { name: 'Lakshmi Prasad', role: 'Lead Wedding Designer', experience: '12+ years', image: w1, speciality: 'Weddings', location: 'Vijayawada' },
  { name: 'Srinivas Rao', role: 'Corporate Events Head', experience: '10+ years', image: w2, speciality: 'Corporate', location: 'Guntur' },
  { name: 'Sunitha Reddy', role: 'Creative Director', experience: '8+ years', image: w3, speciality: 'Birthday & Baby Shower', location: 'Vijayawada' },
  { name: 'Ramana Kumar', role: 'Technical Head', experience: '7+ years', image: w4, speciality: 'Lighting & Sound', location: 'Tenali' },
  { name: 'Deepti Sharma', role: 'Engagement Specialist', experience: '6+ years', image: w5, speciality: 'Romantic Setups', location: 'Mangalagiri' }
];

  const statsData = [
  { icon: <SmileOutlined />, value: 112, label: 'Happy Clients', suffix: '+' },
  { icon: <TrophyOutlined />, value: 874, label: 'Events Across AP', suffix: '+' },
  // { icon: <TeamOutlined />, value: 5, label: 'Local Designers', suffix: '+' },
  { icon: <GlobalOutlined />, value: 7, label: 'Cities in AP', suffix: '+' },
  { icon: <ClockCircleOutlined />, value: 8, label: 'Years in Vijayawada', suffix: '+' },
  { icon: <StarOutlined />, value: 98, label: 'Satisfaction Rate', suffix: '%' }
];

  const handleGalleryClick = (image) => {
    setSelectedImage(image);
    setGalleryModalVisible(true);
  };

  return (
    <div className="home-page">
      {/* Hero Section with Fixed Carousel */}
      {/* Hero Section with Fixed Carousel */}
<section className="hero-section">
  <Carousel 
    autoplay 
    autoplaySpeed={2000}
    effect="scroll" 
    className="hero-carousel"
    beforeChange={(from, to) => setCurrentSlide(to)}
  >
    {heroSlides.map((slide, index) => (
      <div key={index}>
        <div className="hero-slide">
          <div 
            className="hero-image-wrapper" 
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* {slide.badge && (
                <div className="hero-badge-wrapper">
                  <Badge.Ribbon text={slide.badge} color="gold" className="hero-badge">
                    <div style={{ height: 30, width: 100 }}></div>
                  </Badge.Ribbon>
                </div>
              )} */}
              <Title level={1} className="hero-title">
                {slide.title}
              </Title>
              <Title level={3} className="hero-subtitle">
                {slide.subtitle}
              </Title>
              <Paragraph className="hero-description">
                {slide.description}
              </Paragraph>
              <Space size="large" className="hero-buttons">
                <Button 
                  type="primary" 
                  size="large" 
                  className="hero-btn-primary"
                  onClick={() => setQuoteFormVisible(true)}
                >
                  Get Free Quote
                </Button>
                <Button 
                  size="large" 
                  className="hero-btn-secondary"
                  onClick={() => handleGalleryClick(slide)}
                >
                  View Gallery
                </Button>
              </Space>
              <div className="hero-stats">
                <Space size="middle">
                  <span><EnvironmentOutlined /> {slide.stats.events} Events</span>
                  <span><UserOutlined /> {slide.stats.clients} Happy Clients</span>
                  <span><GlobalOutlined /> {slide.stats.cities} Cities</span>
                </Space>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    ))}
  </Carousel>
  
  <div className="slide-indicators">
    {heroSlides.map((_, index) => (
      <div 
        key={index} 
        className={`indicator ${currentSlide === index ? 'active' : ''}`}
        onClick={() => setCurrentSlide(index)}
      />
    ))}
  </div>
</section>

      {/* Categories Section with Tabs */}
      <section className="categories-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Our Services</Tag>
          <Title level={2} className="section-title">Decoration Specialties</Title>
          <Paragraph className="section-subtitle">
            Transforming spaces into extraordinary experiences for every occasion
          </Paragraph>
        </div>

        <Tabs 
          activeKey={activeCategory} 
          onChange={setActiveCategory}
          className="category-tabs"
          centered
          size="large"
        >
          {decorationCategories.map(category => (
            <TabPane 
              tab={
                <span className="tab-label">
                  {category.icon}
                  {category.title}
                </span>
              } 
              key={category.key}
            >
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={12}>
                  <motion.div
                    key={category.key}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Title level={3}>{category.title}</Title>
                    <Paragraph className="category-long-desc">
                      {category.longDescription}
                    </Paragraph>
                    
                    <Row gutter={[24, 24]} className="category-stats">
                      <Col span={8}>
                        <Statistic 
                          title="Events Done" 
                          value={category.stats.events} 
                          suffix="+"
                          valueStyle={{ color: 'var(--accent-gold)' }}
                        />
                      </Col>
                      <Col span={8}>
                        <Statistic 
                          title="Satisfaction" 
                          value={category.stats.satisfaction} 
                          suffix="%"
                          valueStyle={{ color: 'var(--accent-gold)' }}
                        />
                      </Col>
                      <Col span={8}>
                        <Statistic 
                          title="Designers" 
                          value={category.stats.designers} 
                          suffix="+"
                          valueStyle={{ color: 'var(--accent-gold)' }}
                        />
                      </Col>
                    </Row>

                    <div className="category-features-grid">
                      <Title level={5}>What's Included:</Title>
                      <Row gutter={[16, 16]}>
                        {category.items.map((item, i) => (
                          <Col span={12} key={i}>
                            <div className="feature-item">
                              <CheckCircleOutlined style={{ color: 'var(--success-color)' }} />
                              <span>{item}</span>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>

                    <div className="category-footer">
                      <div className="category-price">
                        <DollarCircleOutlined /> {category.price}
                      </div>
                      <Button type="primary" size="large" className="category-cta">
                        Explore {category.title}
                      </Button>
                    </div>
                  </motion.div>
                </Col>
                <Col xs={24} lg={12}>
                  <motion.div
                    key={category.key}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="category-image-wrapper"
                  >
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="category-image-large"
                    />
                    <div className="image-overlay">
                      <div className="image-stats">
                        <Space>
                          <span><HeartOutlined /> {category.stats.events}+ Events</span>
                          <span><TeamOutlined /> {category.stats.designers} Designers</span>
                        </Space>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              </Row>
            </TabPane>
          ))}
        </Tabs>
      </section>

      {/* Featured Decorations Section */}
      <section className="featured-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Top Picks</Tag>
          <Title level={2} className="section-title">Featured Decorations</Title>
          <Paragraph className="section-subtitle">
            Our most loved and highly requested decoration setups
          </Paragraph>
        </div>

        <Row gutter={[24, 24]} className="featured-grid">
          {featuredDecorations.map((item, index) => (
            <Col xs={24} sm={12} lg={8} xl={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge.Ribbon 
                  text={item.category} 
                  color="gold" 
                  className="featured-badge"
                >
                  <Card
                    hoverable
                    cover={
                      <div className="featured-image-wrapper">
                        <img src={item.image} alt={item.title} />
                        <div className="image-category-tag">
                          <Tag color="gold">{item.category}</Tag>
                        </div>
                        <div className="image-location">
                          <EnvironmentOutlined /> {item.location}
                        </div>
                      </div>
                    }
                    className="featured-card"
                  >
                    <div className="card-rating">
                      <Rate disabled defaultValue={item.rating} allowHalf />
                      <span className="rating-count">({item.reviews})</span>
                    </div>
                    
                    <Title level={4} className="featured-title">{item.title}</Title>
                    
                    <div className="card-designer">
                      <Avatar src={item.image} size="small" />
                      <span>{item.designer}</span>
                    </div>

                    <div className="card-tags">
                      {item.features.map((feature, i) => (
                        <Tag color="geekblue" key={i}>{feature}</Tag>
                      ))}
                    </div>

                    <div className="card-features">
                      {item.features.slice(0, 2).map((feature, i) => (
                        <div className="card-feature" key={i}>
                          <CheckCircleOutlined /> {feature}
                        </div>
                      ))}
                    </div>

                    <div className="card-footer">
                      <div className="card-price">
                        <DollarCircleOutlined /> {item.price}
                      </div>
                      <Button type="primary" size="small">
                        View Details
                      </Button>
                    </div>
                  </Card>
                </Badge.Ribbon>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div className="view-all-container">
          <Button type="primary" size="large" className="view-all-btn">
            View All Decorations <RightOutlined />
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Why Us</Tag>
          <Title level={2} className="section-title">Why Choose SatisfEvents?</Title>
          <Paragraph className="section-subtitle">
            We combine creativity with expertise to create magical moments
          </Paragraph>
        </div>

        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="why-us-content"
            >
              <div className="why-us-timeline">
                <Timeline mode="left" className="why-us-timeline-items">
                  <Timeline.Item 
                    dot={<RocketOutlined style={{ fontSize: '24px', color: 'gold' }} />}
                    label="2014"
                  >
                    <Title level={4}>Founded</Title>
                    <Text className="timeline-desc">Started with a vision to transform event decorations</Text>
                  </Timeline.Item>
                  <Timeline.Item 
                    dot={<TrophyOutlined style={{ fontSize: '24px', color: 'gold' }} />}
                    label="2017"
                  >
                    <Title level={4}>Industry Award</Title>
                    <Text className="timeline-desc">Received "Best Event Decorator" award</Text>
                  </Timeline.Item>
                  <Timeline.Item 
                    dot={<TeamOutlined style={{ fontSize: '24px', color: 'gold' }} />}
                    label="2020"
                  >
                    <Title level={4}>Expanded Team</Title>
                    <Text className="timeline-desc">Grew to 50+ expert designers</Text>
                  </Timeline.Item>
                  <Timeline.Item 
                    dot={<GlobalOutlined style={{ fontSize: '24px', color: 'gold' }} />}
                    label="2024"
                  >
                    <Title level={4}>Pan-India Presence</Title>
                    <Text className="timeline-desc">Serving clients across 30+ cities</Text>
                  </Timeline.Item>
                </Timeline>
              </div>

              <Row gutter={[16, 16]} className="achievement-cards">
                <Col span={12}>
                  <Card className="achievement-card">
                    <div className="achievement-icon"><TrophyOutlined /></div>
                    <Title level={4} className="achievement-text">10+ Awards</Title>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card className="achievement-card">
                    <div className="achievement-icon"><SafetyOutlined /></div>
                    <Title level={4} className="achievement-text">100% Satisfaction</Title>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card className="achievement-card">
                    <div className="achievement-icon"><CustomerServiceOutlined /></div>
                    <Title level={4} className="achievement-text">24/7 Support</Title>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card className="achievement-card">
                    <div className="achievement-icon"><BulbOutlined /></div>
                    <Title level={4} className="achievement-text">Custom Designs</Title>
                  </Card>
                </Col>
              </Row>
            </motion.div>
          </Col>
          
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="why-us-image-container"
            >
              <img src={w9} alt="Our Team" className="why-us-image" />
              <div className="experience-badge">
                <div className="experience-number">10+</div>
                <div className="experience-text">Years of Excellence</div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">How We Work</Tag>
          <Title level={2} className="section-title">Our Simple Process</Title>
          <Paragraph className="section-subtitle">
            From consultation to execution, we make it seamless
          </Paragraph>
        </div>

        <Steps
          current={-1}
          className="process-steps"
          labelPlacement="vertical"
          size="small"
        >
          <Step
            title="Consultation" 
            description="Discuss your vision and requirements"
            icon={<CustomerServiceOutlined />}
            status="wait"
          />
          <Step 
            title="Design" 
            description="Create custom design concepts"
            icon={<BulbOutlined />}
            status="wait"
          />
          <Step 
            title="Approval" 
            description="Finalize designs and budget"
            icon={<CheckCircleOutlined />}
            status="wait"
          />
          <Step 
            title="Execution" 
            description="Bring your vision to life"
            icon={<ExperimentOutlined />}
            status="wait"
          />
          <Step 
            title="Celebration" 
            description="Enjoy your beautifully decorated event"
            icon={<SmileOutlined />}
            status="wait"
          />
        </Steps>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Portfolio</Tag>
          <Title level={2} className="section-title">Our Recent Work</Title>
          <Paragraph className="section-subtitle">
            Take a look at some of our favorite decoration projects
          </Paragraph>
        </div>

        <div className="gallery-grid-container">
          <Row gutter={[16, 16]} className="gallery-grid">
            {galleryImages.map((item, index) => (
              <Col xs={12} sm={8} md={6} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="gallery-item-wrapper"
                  onClick={() => handleGalleryClick(item)}
                >
                  <div className="gallery-item">
                    <img src={item.image} alt={item.title} />
                    <div className="gallery-overlay">
                      <div className="gallery-info">
                        <Title level={5} className="gallery-title">{item.title}</Title>
                        <Tag color="gold">{item.category}</Tag>
                        <div className="gallery-year">{item.year}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="view-all-container">
          <Button 
            type="primary" 
            size="large" 
            className="view-all-btn"
            onClick={() => setGalleryModalVisible(true)}
          >
            View Full Gallery <CameraOutlined />
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Testimonials</Tag>
          <Title level={2} className="section-title">What Our Clients Say</Title>
          <Paragraph className="section-subtitle">
            Real experiences from satisfied customers
          </Paragraph>
        </div>

        <Row gutter={[24, 24]} className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Col xs={24} md={12} lg={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="testimonial-card">
                  <div className="testimonial-header">
                    <Avatar src={testimonial.image} size={64} />
                    <div className="testimonial-meta">
                      <Title level={5}>{testimonial.name}</Title>
                      <Text type="secondary">{testimonial.event}</Text>
                      <Rate disabled defaultValue={testimonial.rating} allowHalf />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <div className="quote-mark">"</div>
                    <Paragraph className="testimonial-text">
                      {testimonial.text}
                    </Paragraph>
                  </div>
                  <div className="testimonial-footer">
                    <span><CalendarOutlined /> {testimonial.date}</span>
                    <span><EnvironmentOutlined /> {testimonial.location}</span>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Blog</Tag>
          <Title level={2} className="section-title">Latest Articles</Title>
          <Paragraph className="section-subtitle">
            Insights and tips from our decoration experts
          </Paragraph>
        </div>

        <Row gutter={[24, 24]} className="blog-grid">
          {blogPosts.map((post, index) => (
            <Col xs={24} md={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  hoverable
                  cover={<img src={post.image} alt={post.title} className="blog-image" />}
                  className="blog-card"
                >
                  <div className="blog-meta">
                    <Tag color="gold">{post.category}</Tag>
                    <span><ClockCircleOutlined /> {post.readTime}</span>
                  </div>
                  <Title level={4} className="blog-title">{post.title}</Title>
                  <Paragraph className="blog-excerpt">{post.excerpt}</Paragraph>
                  <div className="blog-footer">
                    <span><UserOutlined /> {post.author}</span>
                    <span><EyeOutlined /> {post.views} views</span>
                  </div>
                  <Button type="link" className="blog-read-more">
                    Read More <RightOutlined />
                  </Button>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">FAQ</Tag>
          <Title level={2} className="section-title">Frequently Asked Questions</Title>
          <Paragraph className="section-subtitle">
            Got questions? We've got answers
          </Paragraph>
        </div>

        <Row gutter={[48, 48]}>
          <Col xs={24} lg={12}>
            <div className="faq-list">
              <Collapse 
                defaultActiveKey={['0']} 
                className="faq-collapse"
                expandIconPosition="right"
              >
                {faqs.map((faq, index) => (
                  <Panel 
                    header={
                      <div className="faq-question">
                        <Title level={5}>{faq.question}</Title>
                      </div>
                    } 
                    key={index}
                    className="faq-item"
                  >
                    <Paragraph className="faq-answer">{faq.answer}</Paragraph>
                  </Panel>
                ))}
              </Collapse>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Card className="faq-contact-card">
              <div className="contact-icon">
                <CustomerServiceOutlined />
              </div>
              <div className="contact-info">
                <Title level={4}>Still have questions?</Title>
                <Paragraph>
                  Our team is here to help. Contact us for personalized assistance.
                </Paragraph>
                <Space direction="vertical">
                  <Space>
                    <PhoneOutlined /> +91 98765 43210
                  </Space>
                  <Space>
                    <MailOutlined /> info@satisfevents.com
                  </Space>
                  <Space>
                    <WhatsAppOutlined /> +91 98765 43210
                  </Space>
                </Space>
                <Button type="primary" className="contact-btn" style={{ marginTop: '20px' }}>
                  Contact Us Now
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-header">
          <Tag color="gold" className="section-tag">Our Team</Tag>
          <Title level={2} className="section-title">Meet Our Expert Designers</Title>
          <Paragraph className="section-subtitle">
            Creative minds behind your beautiful events
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {teamMembers.map((member, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="team-card">
                  <div className="team-image-wrapper">
                    <img src={member.image} alt={member.name} className="team-image" />
                    <div className="team-social">
                      <Button shape="circle" icon={<FacebookOutlined />} />
                      <Button shape="circle" icon={<InstagramOutlined />} />
                      <Button shape="circle" icon={<LinkedinOutlined />} />
                    </div>
                  </div>
                  <Title level={4} className="team-name">{member.name}</Title>
                  <Text type="secondary" className="team-role">{member.role}</Text>
                  <div className="team-details">
                    <Tag color="gold">{member.speciality}</Tag>
                    <div><TrophyOutlined /> {member.experience}</div>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Stats Counter Section */}
      <section className="stats-section">
        <Row gutter={[32, 32]} justify="center">
          {statsData.map((stat, index) => (
            <Col xs={12} sm={8} md={4} key={index}>
              <StatCounter 
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
              />
            </Col>
          ))}
        </Row>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Title level={2} className="cta-title">
              Ready to Create Magic?
            </Title>
            <Paragraph className="cta-description">
              Let's discuss your decoration needs and bring your vision to life
            </Paragraph>
            <Space size="large" className="cta-buttons">
              <Button 
                type="primary" 
                size="large" 
                className="cta-btn-primary"
                onClick={() => setQuoteFormVisible(true)}
              >
                Get Free Quote
              </Button>
              <Button size="large" className="cta-btn-secondary">
                View Portfolio
              </Button>
            </Space>
            <div className="cta-social">
              <Text>Follow us:</Text>
              <Space>
                <Button shape="circle" icon={<FacebookOutlined />} />
                <Button shape="circle" icon={<InstagramOutlined />} />
                <Button shape="circle" icon={<TwitterOutlined />} />
                <Button shape="circle" icon={<YoutubeOutlined />} />
                <Button shape="circle" icon={<LinkedinOutlined />} />
              </Space>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Modal */}
      <Modal
        visible={galleryModalVisible}
        onCancel={() => setGalleryModalVisible(false)}
        footer={null}
        width={1200}
        className="gallery-modal"
      >
        {selectedImage ? (
          <div className="gallery-modal-content">
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className="gallery-modal-image"
            />
            <div className="gallery-modal-info">
              <Title level={3}>{selectedImage.title}</Title>
              <Tag color="gold">{selectedImage.category}</Tag>
              <p>{selectedImage.year}</p>
            </div>
          </div>
        ) : (
          <div className="gallery-modal-grid">
            <Row gutter={[16, 16]}>
              {galleryImages.map((item, index) => (
                <Col span={8} key={index}>
                  <div 
                    className="gallery-modal-item"
                    onClick={() => setSelectedImage(item)}
                  >
                    <img src={item.image} alt={item.title} />
                    <div className="gallery-modal-overlay">
                      <span>{item.title}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Modal>

      {/* Quote Form Modal */}
      <Modal
        visible={quoteFormVisible}
        onCancel={() => setQuoteFormVisible(false)}
        footer={null}
        width={600}
        className="quote-modal"
      >
        <div className="quote-form-container">
          <Title level={3}>Get a Free Quote</Title>
          <Paragraph>
            Tell us about your event and we'll get back to you within 24 hours
          </Paragraph>
          
          <Form layout="vertical" className="quote-form">
            <Form.Item label="Name" required>
              <Input prefix={<UserOutlined />} placeholder="Your full name" />
            </Form.Item>
            
            <Form.Item label="Email" required>
              <Input prefix={<MailOutlined />} placeholder="Your email address" />
            </Form.Item>
            
            <Form.Item label="Phone" required>
              <Input prefix={<PhoneOutlined />} placeholder="Your phone number" />
            </Form.Item>
            
            <Form.Item label="Event Type" required>
              <Select placeholder="Select event type">
                <Option value="wedding">Wedding</Option>
                <Option value="corporate">Corporate Event</Option>
                <Option value="birthday">Birthday Party</Option>
                <Option value="baby">Baby Shower</Option>
                <Option value="anniversary">Anniversary</Option>
                <Option value="engagement">Engagement</Option>
              </Select>
            </Form.Item>
            
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Event Date">
                  <Input placeholder="DD/MM/YYYY" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Guest Count">
                  <Input placeholder="Approx. guests" />
                </Form.Item>
              </Col>
            </Row>
            
            <Form.Item label="Budget Range">
              <Select placeholder="Select budget range">
                <Option value="<50k">Less than ₹50,000</Option>
                <Option value="50k-1lac">₹50,000 - ₹1,00,000</Option>
                <Option value="1lac-2lac">₹1,00,000 - ₹2,00,000</Option>
                <Option value="2lac-5lac">₹2,00,000 - ₹5,00,000</Option>
                <Option value=">5lac">More than ₹5,00,000</Option>
              </Select>
            </Form.Item>
            
            <Form.Item label="Message">
              <Input.TextArea rows={4} placeholder="Tell us about your requirements..." />
            </Form.Item>
            
            <Form.Item>
              <Button type="primary" size="large" block>
                Submit Request
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>

      {/* Scroll to Top Button */}
      <div className="scroll-top">
        <Button 
          type="primary" 
          shape="circle" 
          icon={<RocketOutlined />} 
          size="large"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>
    </div>
  );
};

export default Home;