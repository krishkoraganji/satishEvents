// pages/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Row, Col, Card, Button, Typography, Space, Carousel, 
  Tabs, Statistic, Timeline, Tag, Badge, Divider,
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
  EyeOutlined,
  HomeOutlined,
  CoffeeOutlined,
  MedicineBoxOutlined,
  WomanOutlined,
  SunOutlined,
  RiseOutlined,
  BookOutlined,
  SkinOutlined,
  ToolOutlined,
  ShopOutlined,
  FlagOutlined,
  AudioOutlined
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
    description: 'Luxury wedding setups with attention to every detail. Mandap decor, floral arrangements, and lighting design.',
    badge: 'Most Popular',
    stats: { events: '500+', clients: '480+', cities: '25+' }
  },
  {
    image: w1,
    title: 'Traditional House Ceremonies',
    subtitle: 'Bless your new home with traditional elegance',
    description: 'Grihapravesh, Vastu puja, and house warming ceremonies with authentic traditional decor.',
    badge: 'Sacred Traditions',
    stats: { events: '350+', clients: '340+', cities: '20+' }
  },
  {
    image: w2,
    title: 'Vibrant Haldi Ceremonies',
    subtitle: 'Yellow-themed pre-wedding celebrations',
    description: 'Colorful marigold backdrops, brass vessels, and traditional setups for your Haldi ceremony.',
    badge: 'Trending Now',
    stats: { events: '280+', clients: '275+', cities: '18+' }
  },
  {
    image: w3,
    title: 'Half Saree Function',
    subtitle: 'Celebrate this milestone with elegance',
    description: 'Traditional stage decorations, floral backdrops, and thoranam setups for Half Saree (Langa Voni) ceremonies.',
    badge: 'Cultural Special',
    stats: { events: '200+', clients: '198+', cities: '15+' }
  },
  {
    image: w5,
    title: 'Respectful Remembrance',
    subtitle: 'Dignified death anniversary ceremonies',
    description: 'Peaceful setups with white flowers, traditional elements, and respectful decor for remembrance.',
    badge: 'With Respect',
    stats: { events: '150+', clients: '150+', cities: '12+' }
  },
  {
    image: w6,
    title: 'Professional Corporate Events',
    subtitle: 'Impress your clients with stunning setups',
    description: 'Corporate galas, conferences, product launches, and brand events with professional designs.',
    badge: 'Business Ready',
    stats: { events: '400+', clients: '350+', cities: '20+' }
  },
  {
    image: w7,
    title: 'Birthday Parties',
    subtitle: 'Fun and creative themes for all ages',
    description: 'Themed decorations, balloon setups, and custom designs for memorable birthday celebrations.',
    badge: 'Fun Times',
    stats: { events: '1000+', clients: '980+', cities: '30+' }
  },
  {
    image: w8,
    title: 'Engagement Celebrations',
    subtitle: 'Start your journey in style',
    description: 'Romantic setups, floral arches, and elegant backdrops for your engagement ceremony.',
    badge: 'Love Stories',
    stats: { events: '300+', clients: '295+', cities: '18+' }
  },
  {
    image: w9,
    title: 'Anniversary Celebrations',
    subtitle: 'Celebrate timeless love stories',
    description: 'Elegant decorations for wedding anniversaries, vow renewals, and milestone celebrations.',
    badge: 'Timeless Love',
    stats: { events: '200+', clients: '195+', cities: '15+' }
  },
  {
    image: w1,
    title: 'Baby Showers',
    subtitle: 'Welcome new beginnings with joy',
    description: 'Pastel themes, gender reveals, and cute decorations for baby showers and Seemantham.',
    badge: 'New Beginnings',
    stats: { events: '250+', clients: '248+', cities: '16+' }
  },
  {
    image: w2,
    title: 'Naming Ceremonies',
    subtitle: 'Namakaranam celebrations',
    description: 'Traditional setups, cradle decoration, and family-focused decor for naming ceremonies.',
    badge: 'Blessings',
    stats: { events: '180+', clients: '178+', cities: '14+' }
  },
  {
    image: w3,
    title: 'Ear Piercing Ceremony',
    subtitle: 'Traditional Karnavedha celebrations',
    description: 'Child-friendly traditional setups for ear piercing ceremonies with comfort and style.',
    badge: 'Tradition',
    stats: { events: '160+', clients: '159+', cities: '13+' }
  },
  {
    image: w4,
    title: 'Mundan Ceremony',
    subtitle: 'First hair cutting ceremony',
    description: 'Comfortable and traditional setups for Mundan ceremonies with child-friendly elements.',
    badge: 'Sacred Ritual',
    stats: { events: '150+', clients: '149+', cities: '12+' }
  },
  {
    image: w5,
    title: 'Thread Ceremony',
    subtitle: 'Upanayanam sacred rites',
    description: 'Vedic setups with Yagnashala, traditional pandals, and authentic decorations.',
    badge: 'Vedic Traditions',
    stats: { events: '120+', clients: '120+', cities: '10+' }
  },
  {
    image: w6,
    title: 'Seemantham',
    subtitle: 'Traditional baby shower',
    description: 'Beautiful and comfortable setups for Seemantham, honoring expectant mothers.',
    badge: 'Mother & Baby',
    stats: { events: '140+', clients: '139+', cities: '12+' }
  },
  {
    image: w7,
    title: 'Pooja & Religious Events',
    subtitle: 'Sacred decorations for spiritual occasions',
    description: 'Temple setups, Vratham decorations, and traditional elements for all religious ceremonies.',
    badge: 'Divine',
    stats: { events: '350+', clients: '348+', cities: '22+' }
  },
  {
    image: w8,
    title: 'Festival Decorations',
    subtitle: 'Celebrate festivals with grandeur',
    description: 'Diwali, Dussehra, Sankranti, Ganesh Chaturthi, and all festival decorations.',
    badge: 'Festive Spirit',
    stats: { events: '400+', clients: '390+', cities: '25+' }
  },
  {
    image: w9,
    title: 'Sangeet & Mehendi',
    subtitle: 'Vibrant pre-wedding celebrations',
    description: 'Colorful Mehendi setups, Sangeet stages, and entertainment-focused decorations.',
    badge: 'Celebration',
    stats: { events: '280+', clients: '276+', cities: '18+' }
  },
  {
    image: w1,
    title: 'Reception Parties',
    subtitle: 'Elegant wedding reception decor',
    description: 'Grand entrance setups, stage decorations, and sophisticated designs for receptions.',
    badge: 'Grand Affairs',
    stats: { events: '320+', clients: '315+', cities: '20+' }
  },
  {
    image: w2,
    title: 'Grihapravesh',
    subtitle: 'Traditional house warming',
    description: 'Auspicious decorations for new homes with mango leaves, marigolds, and traditional kolams.',
    badge: 'New Beginnings',
    stats: { events: '300+', clients: '298+', cities: '18+' }
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
      'Aisle Decor', 'Photo Booth', 'Bridal Entry Setup',
      'Mehendi Function', 'Sangeet Stage', 'Reception Decor'
    ],
    stats: { events: 1000, satisfaction: 98, designers: 30 },
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
      'VIP Lounges', 'Backdrop Branding', 'Corporate Meetings',
      'Annual Day Celebrations', 'Press Conferences', 'Team Building Events'
    ],
    stats: { events: 500, satisfaction: 95, designers: 25 },
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
      'Prop Rentals', 'Cake Tables', 'Candy Buffets',
      'Character Themes', 'Milestone Birthdays', 'Surprise Parties'
    ],
    stats: { events: 2000, satisfaction: 99, designers: 35 },
    features: ['Age-Appropriate Themes', 'Custom Designs', 'Interactive Elements']
  },
  {
    key: 'house',
    title: 'House Ceremonies',
    icon: <HomeOutlined />,
    image: w6,
    description: 'Bless your new home with traditional elegance',
    longDescription: 'Celebrate Grihapravesh (house warming), Vastu puja, and other home ceremonies with traditional decorations. We create auspicious setups with mango leaves, marigolds, and traditional kolams to welcome prosperity into your new home across Vijayawada and Andhra Pradesh.',
    items: [
      'Grihapravesh Setup', 'Vastu Puja Decor', 'Traditional Kolams',
      'Mango Leaf Torans', 'Marigold Garlands', 'Pooja Room Setup',
      'Entrance Decor', 'Rangoli Designs', 'Coconut & Fruit Decor',
      'Sacred Fire Setup', 'Traditional Lamps', 'Blessing Ceremony Setup'
    ],
    stats: { events: 350, satisfaction: 99, designers: 15 },
    features: ['Traditional Elements', 'Vastu Compliant', 'Sacred Decor']
  },
  {
    key: 'haldi',
    title: 'Haldi Ceremonies',
    icon: <SunOutlined />,
    image: w7,
    description: 'Vibrant and colorful pre-wedding celebrations',
    longDescription: 'Make your Haldi ceremony Instagram-worthy with our vibrant yellow-themed decorations. From marigold backdrops to traditional brass vessels and floral setups, we create the perfect setting for this joyous pre-wedding ritual.',
    items: [
      'Yellow Theme Decor', 'Marigold Backdrops', 'Brass Vessel Setup',
      'Floral Canopies', 'Traditional Seating', 'Flower Showers',
      'Photo Opportunities', 'Rangoli Designs', 'Turmeric Grinding Setup',
      'Traditional Props', 'Floating Flowers', 'Family Portrait Setup'
    ],
    stats: { events: 400, satisfaction: 98, designers: 20 },
    features: ['Vibrant Colors', 'Traditional Props', 'Photo Ready']
  },
  {
    key: 'halfsaree',
    title: 'Half Saree Function',
    icon: <WomanOutlined />,
    image: w8,
    description: 'Celebrate the transition to womanhood',
    longDescription: 'The Half Saree function (Langa Voni/Chinna) is a significant South Indian ceremony. We create elegant setups with traditional elements, floral decorations, and beautiful backdrops to celebrate this milestone in a young girl\'s life.',
    items: [
      'Traditional Stage Setup', 'Floral Backdrops', 'Thoranam Decor',
      'Seating Arrangements', 'Photo Booth', 'Lighting Design',
      'Traditional Props', 'Rangoli Competitions', 'Gift Table Setup',
      'Blessing Ceremony Area', 'Traditional Lamp Lighting', 'Feast Area Decor'
    ],
    stats: { events: 250, satisfaction: 99, designers: 18 },
    features: ['Traditional Elegance', 'Cultural Elements', 'Milestone Celebration']
  },
  {
    key: 'engagement',
    title: 'Engagement Parties',
    icon: <GoldFilled />,
    image: w1,
    description: 'Start your journey in style',
    longDescription: 'Celebrate your engagement with beautiful decorations that set the perfect mood. We create stunning proposal setups at Bungalow, Trendset Gardens, and other premium venues across Vijayawada.',
    items: [
      'Proposal Setup', 'Ring Displays', 'Photo Booths',
      'Table Decor', 'Lighting Effects', 'Floral Arches',
      'Welcome Signs', 'Party Favors', 'Couple Seating',
      'Romantic Lighting', 'Cake Table', 'Family Photo Area'
    ],
    stats: { events: 350, satisfaction: 98, designers: 20 },
    features: ['Romantic Vibes', 'Photo Ready', 'Personalized']
  },
  {
    key: 'anniversary',
    title: 'Anniversary Celebrations',
    icon: <CrownFilled />,
    image: w2,
    description: 'Celebrate timeless love stories',
    longDescription: 'Honor years of togetherness with elegant anniversary decorations. Celebrate 25th, 50th anniversaries with grandeur. We serve venues across Vijayawada, Machilipatnam, and coastal Andhra.',
    items: [
      'Vow Renewals', 'Romantic Settings', 'Photo Displays',
      'Memory Walls', 'Cake Tables', 'Lighting Design',
      'Flower Arrangements', 'Guest Books', 'Number Displays',
      'Anniversary Countdown', 'Family Portrait Area', 'Surprise Elements'
    ],
    stats: { events: 200, satisfaction: 96, designers: 15 },
    features: ['Romantic Themes', 'Memory Displays', 'Elegant Setup']
  },
  {
    key: 'deathanniversary',
    title: 'Death Anniversary',
    icon: <MedicineBoxOutlined />,
    image: w3,
    description: 'Respectful and dignified remembrance ceremonies',
    longDescription: 'We understand the sensitivity of death anniversaries (Tithi/Shraddha ceremonies). Our decor focuses on creating a peaceful, respectful atmosphere with traditional elements, white flowers, and dignified setups for remembrance ceremonies.',
    items: [
      'Traditional Setup', 'White Flower Decor', 'Peaceful Ambiance',
      'Pooja Arrangements', 'Photo Display', 'Offering Tables',
      'Seating for Guests', 'Sacred Lamp Setup', 'Traditional Torans',
      'Pandal Decor', 'Charity Event Setup', 'Memorial Area'
    ],
    stats: { events: 150, satisfaction: 100, designers: 10 },
    features: ['Respectful Design', 'Traditional Elements', 'Peaceful Atmosphere']
  },
  {
    key: 'baby',
    title: 'Baby Showers',
    icon: <TeamOutlined />,
    image: w4,
    description: 'Celebrate new beginnings with style',
    longDescription: 'Welcome the little one with beautifully designed baby showers featuring pastel colors, cute decorations, and memorable photo opportunities. Serving Vijayawada, Guntur, and surrounding areas with gender reveal and baby shower parties.',
    items: [
      'Gender Reveal', 'Pastel Themes', 'Cake Tables',
      'Welcome Signs', 'Balloon Arches', 'Photo Backdrops',
      'Party Favors', 'Diaper Cakes', 'Onesie Decor',
      'Baby Bottle Decor', 'Stork Decor', 'Cradle Decoration'
    ],
    stats: { events: 300, satisfaction: 97, designers: 18 },
    features: ['Sweet Themes', 'Photo Ready', 'Memory Making']
  },
  {
    key: 'pooja',
    title: 'Pooja & Religious Events',
    icon: <RiseOutlined />,
    image: w5,
    description: 'Sacred decorations for spiritual occasions',
    longDescription: 'From Satyanarayana Vratham to Navratri celebrations, we provide traditional and sacred decorations for all religious ceremonies. We serve temples, community halls, and homes across Andhra Pradesh.',
    items: [
      'Temple Setup', 'Vratham Decor', 'Navratri Golu Setup',
      'Floral Garlands', 'Traditional Lamps', 'Sacred Kolams',
      'Fruit & Offering Tables', 'Pandal Decor', 'Deity Backdrops',
      'Aarti Setup', 'Bhajan Hall Decor', 'Prasad Distribution Area'
    ],
    stats: { events: 400, satisfaction: 99, designers: 20 },
    features: ['Sacred Elements', 'Traditional Authenticity', 'Spiritual Ambiance']
  },
  {
    key: 'naming',
    title: 'Naming Ceremony',
    icon: <BookOutlined />,
    image: w6,
    description: 'Welcome your little one with tradition',
    longDescription: 'Namakaranam (naming ceremony) decorations that blend tradition with celebration. We create beautiful setups for this important milestone, focusing on family gatherings and traditional elements.',
    items: [
      'Traditional Stage', 'Floral Decor', 'Cradle Decoration',
      'Name Reveal Setup', 'Photo Backdrop', 'Guest Seating',
      'Blessing Area', 'Gift Table', 'Traditional Lamps',
      'Family Portrait Setup', 'Feast Area Decor', 'Baby Photo Display'
    ],
    stats: { events: 200, satisfaction: 98, designers: 15 },
    features: ['Sweet Themes', 'Family Focused', 'Traditional Touch']
  },
  {
    key: 'earpiercing',
    title: 'Ear Piercing Ceremony',
    icon: <SkinOutlined />,
    image: w7,
    description: 'Traditional Karnavedha celebrations',
    longDescription: 'Celebrate the traditional ear piercing ceremony (Karnavedha/Karnavedham) with elegant decorations. We create comfortable and beautiful setups for this important ritual in a child\'s life.',
    items: [
      'Traditional Setup', 'Comfort Seating', 'Floral Decor',
      'Ritual Area Decor', 'Photo Backdrop', 'Blessing Ceremony Setup',
      'Gift Table', 'Traditional Kolams', 'Decoration with Mango Leaves',
      'Baby-Friendly Setup', 'Family Area', 'Feast Decor'
    ],
    stats: { events: 180, satisfaction: 99, designers: 12 },
    features: ['Child-Friendly', 'Traditional Rituals', 'Comfort Focus']
  },
  {
    key: 'mundan',
    title: 'Mundan Ceremony',
    icon: <ToolOutlined />,
    image: w8,
    description: 'First hair cutting ceremony decorations',
    longDescription: 'Mundan (first hair cutting) is an important Hindu ritual. We create welcoming setups that comfort the child while maintaining traditional elegance, with special attention to the ritual area.',
    items: [
      'Ritual Chair Decor', 'Traditional Setup', 'Comfort Seating',
      'Floral Decor', 'Photo Backdrop', 'Blessing Area',
      'Gift Table', 'Traditional Torans', 'Child-Friendly Elements',
      'Family Portrait Setup', 'Feast Decor', 'Memory Corner'
    ],
    stats: { events: 160, satisfaction: 98, designers: 12 },
    features: ['Child Comfort', 'Traditional Rituals', 'Family Gathering']
  },
  {
    key: 'thread',
    title: 'Thread Ceremony',
    icon: <RiseOutlined />,
    image: w9,
    description: 'Sacred Upanayanam celebrations',
    longDescription: 'Upanayanam (thread ceremony) is a sacred rite of passage. We create traditional setups that respect the solemnity of the occasion while providing beautiful backdrops for family celebrations.',
    items: [
      'Yagnashala Setup', 'Traditional Pandals', 'Vedic Theme Decor',
      'Floral Arrangements', 'Sacred Fire Area', 'Guru Seating',
      'Family Seating', 'Blessing Ceremony', 'Traditional Kolams',
      'Veda Path Setup', 'Feast Area Decor', 'Photo Documentation Area'
    ],
    stats: { events: 120, satisfaction: 100, designers: 15 },
    features: ['Vedic Authenticity', 'Traditional Grandeur', 'Sacred Elements']
  },
  {
    key: 'seemantham',
    title: 'Seemantham',
    icon: <WomanOutlined />,
    image: w1,
    description: 'Traditional baby shower ceremony',
    longDescription: 'Seemantham (traditional baby shower for expectant mothers) is a significant South Indian ritual. We create beautiful, comfortable setups that honor tradition while celebrating motherhood.',
    items: [
      'Traditional Setup', 'Comfort Seating', 'Floral Decor',
      'Blessing Ceremony Area', 'Photo Backdrop', 'Gift Display',
      'Traditional Kolams', 'Mango Leaf Decor', 'Sacred Lamp Setup',
      'Mother\'s Special Chair', 'Family Portrait Area', 'Feast Decor'
    ],
    stats: { events: 150, satisfaction: 99, designers: 14 },
    features: ['Mother-Friendly', 'Traditional Rituals', 'Comfort Focus']
  },
  {
    key: 'housewarming',
    title: 'Grihapravesh',
    icon: <HomeOutlined />,
    image: w2,
    description: 'Traditional house warming ceremony',
    longDescription: 'Grihapravesh is an important Vedic ritual for entering a new home. We create auspicious decorations with traditional elements, mango leaves, marigolds, and sacred kolams to welcome prosperity.',
    items: [
      'Main Door Torans', 'Traditional Kolams', 'Pooja Room Setup',
      'Vastu Puja Decor', 'Sacred Fire Area', 'Coconut & Fruit Decor',
      'Navagraha Setup', 'Entrance Arch', 'Rangoli Competitions',
      'Neem & Mango Leaves', 'Traditional Lamps', 'Blessing Ceremony Area'
    ],
    stats: { events: 200, satisfaction: 99, designers: 15 },
    features: ['Vastu Compliant', 'Traditional Elements', 'Auspicious Design']
  },
  {
    key: 'festival',
    title: 'Festival Decorations',
    icon: <FireFilled />,
    image: w3,
    description: 'Celebrate festivals with grandeur',
    longDescription: 'From Diwali to Dussehra, Sankranti to Ganesh Chaturthi, we provide stunning festival decorations for homes, societies, and community celebrations across Andhra Pradesh.',
    items: [
      'Diwali Decor', 'Dussehra Setup', 'Ganesh Pandal Decor',
      'Sankranti Rangoli', 'Navratri Golu', 'Christmas Decor',
      'Lighting Design', 'Floral Arrangements', 'Traditional Kolams',
      'Community Pooja Setup', 'Fireworks Area', 'Festival Photo Booths'
    ],
    stats: { events: 500, satisfaction: 98, designers: 25 },
    features: ['Festive Spirit', 'Cultural Authenticity', 'Community Focus']
  },
  {
    key: 'sangeet',
    title: 'Sangeet & Mehendi',
    icon: <AudioOutlined />,
    image: w4,
    description: 'Vibrant pre-wedding celebrations',
    longDescription: 'Create unforgettable memories with our colorful Sangeet and Mehendi decorations. From traditional Mehendi setups to modern Sangeet stages with dance floors and lighting effects.',
    items: [
      'Mehendi Setup', 'Sangeet Stage', 'Dance Floor Decor',
      'Traditional Seating', 'Floral Canopies', 'Lighting Effects',
      'Photo Booths', 'Mehendi Artist Area', 'Musical Instrument Displays',
      'Colorful Backdrops', 'Floating Flowers', 'Entertainment Area'
    ],
    stats: { events: 300, satisfaction: 98, designers: 22 },
    features: ['Vibrant Colors', 'Entertainment Focus', 'Traditional Fun']
  },
  {
    key: 'reception',
    title: 'Reception Parties',
    icon: <CrownFilled />,
    image: w5,
    description: 'Elegant wedding reception decor',
    longDescription: 'Make your wedding reception a grand affair with our elegant decorations. From couple entrances to cake cutting ceremonies, we create sophisticated settings that impress your guests.',
    items: [
      'Couple Entrance Setup', 'Stage Decor', 'Cake Table',
      'Guest Seating', 'Lighting Design', 'Photo Backdrops',
      'Welcome Area', 'Gift Table', 'Dining Area Decor',
      'VIP Lounge', 'Dance Floor', 'Farewell Setup'
    ],
    stats: { events: 400, satisfaction: 99, designers: 28 },
    features: ['Grand Entrance', 'Sophisticated Design', 'Guest Experience']
  }
];

  const featuredDecorations = [
  {
    title: 'Royal Wedding Setup - Vijayawada',
    image: w1,
    location: 'Vijayawada',
    category: 'Wedding',
    designer: 'Satish Koraganji',
    features: ['Premium Flowers', 'LED Lighting', 'Custom Mandap']
  },
  {
    title: 'Traditional Grihapravesh - Guntur',
    image: w2,
    location: 'Guntur',
    category: 'House Ceremony',
    designer: 'Satish Koraganji',
    features: ['Traditional Torans', 'Kolam Designs', 'Pooja Setup']
  },
  {
    title: 'Vibrant Haldi Ceremony - Tenali',
    image: w3,
    location: 'Tenali',
    category: 'Haldi',
    designer: 'Satish Koraganji',
    features: ['Marigold Decor', 'Traditional Props', 'Yellow Theme']
  },
  {
    title: 'Half Saree Function - Vijayawada',
    image: w4,
    location: 'Vijayawada',
    category: 'Half Saree',
    designer: 'Satish Koraganji',
    features: ['Traditional Stage', 'Floral Backdrop', 'Lighting']
  },
  {
    title: 'Respectful Remembrance - Machilipatnam',
    image: w5,
    location: 'Machilipatnam',
    category: 'Death Anniversary',
    designer: 'Satish Koraganji',
    features: ['White Flowers', 'Peaceful Setup', 'Traditional Rituals']
  },
  {
    title: 'Upanayanam Ceremony - Mangalagiri',
    image: w6,
    location: 'Mangalagiri',
    category: 'Thread Ceremony',
    designer: 'Satish Koraganji',
    features: ['Yagnashala', 'Vedic Setup', 'Traditional Decor']
  },
  {
    title: 'Naming Ceremony - Vijayawada',
    image: w7,
    location: 'Vijayawada',
    category: 'Naming Ceremony',
    designer: 'Satish Koraganji',
    features: ['Cradle Decor', 'Baby Theme', 'Family Setup']
  },
  {
    title: 'Engagement at Trendset - Vijayawada',
    image: w8,
    location: 'Vijayawada',
    category: 'Engagement',
    designer: 'Satish Koraganji',
    features: ['Romantic Setup', 'Floral Arch', 'Lighting']
  }
];

 const testimonials = [
  {
    name: 'Lakshmi & Ramesh',
    event: 'Wedding Client - Vijayawada',
    text: 'The decoration was absolutely stunning! They transformed the venue at Hotel Ilapuram into exactly what we envisioned. Every detail was perfect, from the mandap to the table settings.',
    image: w1,
    date: 'March 2024',
    location: 'Vijayawada'
  },
  {
    name: 'Srinivas Murthy',
    event: 'Corporate Event - Guntur',
    text: 'Professional team with amazing creativity. Our annual gala at KKR Gardens was a huge success thanks to their incredible decoration setup. The branding elements were spot on!',
    image: w2,
    date: 'February 2024',
    location: 'Guntur'
  },
  {
    name: 'Venkateswara Rao',
    event: 'Grihapravesh - Vijayawada',
    text: 'Beautiful house warming ceremony decorations. The traditional torans, kolams, and pooja setup were exactly as we wanted. They made our new home feel truly blessed.',
    image: w3,
    date: 'January 2024',
    location: 'Vijayawada'
  },
  {
    name: 'Priyanka & Vikram',
    event: 'Haldi Ceremony - Guntur',
    text: 'The yellow theme decorations were absolutely gorgeous! Everyone loved the marigold backdrops and traditional props. Made our pre-wedding celebration so memorable.',
    image: w4,
    date: 'December 2023',
    location: 'Guntur'
  },
  {
    name: 'Satyavathi Devi',
    event: 'Half Saree Function - Tenali',
    text: 'Perfect setup for my granddaughter\'s Half Saree function. The traditional stage and floral decorations were beautiful. Thank you Satish Koraganji for making this milestone so special.',
    image: w5,
    date: 'November 2023',
    location: 'Tenali'
  },
  {
    name: 'Narasimha Murty',
    event: 'Death Anniversary - Vijayawada',
    text: 'Handled with utmost respect and sensitivity. The white flower decorations created a peaceful atmosphere for our remembrance ceremony. Highly recommended for such occasions.',
    image: w6,
    date: 'October 2023',
    location: 'Vijayawada'
  }
];

  const blogPosts = [
  {
    title: 'Top Wedding Decoration Trends in Vijayawada for 2024',
    excerpt: 'Discover the hottest trends in wedding decorations across Andhra Pradesh including sustainable decor, traditional Kalamkari elements, and modern fusion designs.',
    image: w5,
    date: 'March 15, 2024',
    author: 'Satish Koraganji',
    category: 'Wedding',
    readTime: '5 min',
    views: 1234
  },
  {
    title: 'Traditional House Ceremony Decorations: A Complete Guide',
    excerpt: 'Learn about the essential elements for Grihapravesh, Vastu puja, and other house ceremonies. From mango leaf torans to sacred kolams.',
    image: w6,
    date: 'March 10, 2024',
    author: 'Satish Koraganji',
    category: 'House Ceremonies',
    readTime: '7 min',
    views: 987
  },
  {
    title: 'Half Saree Function: Traditions & Modern Trends',
    excerpt: 'Everything you need to know about planning a Half Saree function. Traditional elements, modern touches, and decoration ideas for this milestone celebration.',
    image: w7,
    date: 'March 5, 2024',
    author: 'Satish Koraganji',
    category: 'Cultural Events',
    readTime: '6 min',
    views: 1567
  },
  {
    title: 'Respectful Remembrance: Death Anniversary Decoration Ideas',
    excerpt: 'Guidance on creating dignified and peaceful setups for death anniversaries. Traditional elements, white flower arrangements, and memorial displays.',
    image: w8,
    date: 'February 28, 2024',
    author: 'Satish Koraganji',
    category: 'Remembrance',
    readTime: '4 min',
    views: 876
  }
];

  const faqs = [
    {
      question: 'How far in advance should I book decoration services?',
      answer: 'We recommend booking at least 2-3 months in advance for weddings and large events, and 3-4 weeks for smaller celebrations. For house ceremonies and death anniversaries, 2-3 weeks notice is usually sufficient.'
    },
    {
      question: 'Do you provide traditional decorations for house ceremonies?',
      answer: 'Yes! We specialize in traditional decorations for Grihapravesh, Vastu puja, and all house ceremonies. We use authentic elements like mango leaves, marigolds, traditional kolams, and sacred lamps.'
    },
    {
      question: 'Can you handle sensitive events like death anniversaries?',
      answer: 'Absolutely. We approach death anniversaries with utmost respect and sensitivity. Our decor focuses on creating peaceful, dignified atmospheres with traditional white flower arrangements.'
    },
    {
      question: 'What is included in Half Saree function decorations?',
      answer: 'Our Half Saree function packages include traditional stage setup, floral backdrops, thoranam decorations, seating arrangements, photo booths, and optional Rangoli competition areas.'
    },
    {
      question: 'Do you provide custom designs for Haldi ceremonies?',
      answer: 'Yes! We create vibrant yellow-themed setups with marigold backdrops, brass vessels, traditional seating, and plenty of photo opportunities for your Haldi ceremony.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We have a flexible cancellation policy. Full refunds are available up to 30 days before the event, with partial refunds closer to the date.'
    }
  ];

const galleryImages = [
  { image: w1, title: 'Royal Wedding at Hotel Ilapuram', category: 'Wedding', year: '2024', location: 'Vijayawada' },
  { image: w2, title: 'Corporate Gala at KKR Gardens', category: 'Corporate', year: '2024', location: 'Guntur' },
  { image: w3, title: 'Traditional Grihapravesh', category: 'House Ceremony', year: '2024', location: 'Vijayawada' },
  { image: w4, title: 'Vibrant Haldi Ceremony', category: 'Haldi', year: '2023', location: 'Guntur' },
  { image: w5, title: 'Half Saree Function', category: 'Half Saree', year: '2024', location: 'Tenali' },
  { image: w6, title: 'Peaceful Remembrance', category: 'Death Anniversary', year: '2023', location: 'Vijayawada' },
  { image: w7, title: 'Upanayanam Ceremony', category: 'Thread Ceremony', year: '2024', location: 'Mangalagiri' },
  { image: w8, title: 'Naming Ceremony Setup', category: 'Naming', year: '2023', location: 'Vijayawada' },
  { image: w9, title: 'Engagement at Trendset', category: 'Engagement', year: '2024', location: 'Vijayawada' }
];

 const teamMembers = [
  { name: 'Satish Koraganji', role: 'Lead Organizer & Designer', experience: '12+ years', image: w1, speciality: 'All Events', location: 'Vijayawada' }
];

  const statsData = [
  { icon: <SmileOutlined />, value: 1120, label: 'Happy Clients', suffix: '+' },
  { icon: <TrophyOutlined />, value: 1450, label: 'Events Across AP', suffix: '+' },
  { icon: <HomeOutlined />, value: 350, label: 'House Ceremonies', suffix: '+' },
  { icon: <GlobalOutlined />, value: 7, label: 'Cities in AP', suffix: '+' },
  { icon: <ClockCircleOutlined />, value: 8, label: 'Years in Vijayawada', suffix: '+' },
  { icon: <StarOutlined />, value: 99, label: 'Satisfaction Rate', suffix: '%' }
];

  const handleGalleryClick = (image) => {
    setSelectedImage(image);
    setGalleryModalVisible(true);
  };

  return (
    <div className="home-page">
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
          // className="category-tabs"
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
                    onClick={() => handleGalleryClick({ 
                      image: category.image, 
                      title: category.title, 
                      category: category.title,
                      location: 'Various Locations',
                      year: '2024'
                    })}
                    style={{ cursor: 'pointer' }}
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
                onClick={() => handleGalleryClick(item)}
                style={{ cursor: 'pointer' }}
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
                    <Title level={4} className="featured-title">{item.title}</Title>
                    
                    <div className="card-designer">
                      <Avatar src={item.image} size="small" />
                      <span>{item.designer}</span>
                    </div>

                    <div className="card-features">
                      {item.features.map((feature, i) => (
                        <div className="card-feature" key={i}>
                          <CheckCircleOutlined /> {feature}
                        </div>
                      ))}
                    </div>

                    <div className="card-footer">
                      <Button type="primary" size="small" onClick={(e) => {
                        e.stopPropagation();
                        handleGalleryClick(item);
                      }}>
                        View Image
                      </Button>
                    </div>
                  </Card>
                </Badge.Ribbon>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div className="view-all-container">
          <Button type="primary" size="large" className="view-all-btn" onClick={() => setGalleryModalVisible(true)}>
            View All Decorations <RightOutlined />
          </Button>
        </div>
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
            <Col xs={24} md={12} lg={8} key={index}>
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
            <Col xs={24} md={6} key={index}>
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
                    <MailOutlined /> info@satishevents.com
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
          <Tag color="gold" className="section-tag">Meet Your Designer</Tag>
          <Title level={2} className="section-title">Satish Koraganji</Title>
          <Paragraph className="section-subtitle">
            Lead Organizer & Creative Designer
          </Paragraph>
        </div>

        <Row gutter={[24, 24]} justify="center">
          {teamMembers.map((member, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleGalleryClick({ 
                  image: member.image, 
                  title: member.name, 
                  category: member.role,
                  location: member.location,
                  year: '2024'
                })}
                style={{ cursor: 'pointer' }}
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
              <Button size="large" className="cta-btn-secondary" onClick={() => setGalleryModalVisible(true)}>
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
        onCancel={() => {
          setGalleryModalVisible(false);
          setSelectedImage(null);
        }}
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
              <p>{selectedImage.year} | {selectedImage.location}</p>
              <Button onClick={() => setSelectedImage(null)}>Back to Gallery</Button>
            </div>
          </div>
        ) : (
          <div className="gallery-modal-grid">
            <Title level={3}>Our Complete Gallery</Title>
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
                      <Tag color="gold">{item.category}</Tag>
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
                <Option value="house">House Ceremony (Grihapravesh)</Option>
                <Option value="haldi">Haldi Ceremony</Option>
                <Option value="halfsaree">Half Saree Function</Option>
                <Option value="deathanniversary">Death Anniversary</Option>
                <Option value="engagement">Engagement</Option>
                <Option value="anniversary">Anniversary</Option>
                <Option value="baby">Baby Shower</Option>
                <Option value="naming">Naming Ceremony</Option>
                <Option value="earpiercing">Ear Piercing</Option>
                <Option value="mundan">Mundan Ceremony</Option>
                <Option value="thread">Thread Ceremony (Upanayanam)</Option>
                <Option value="seemantham">Seemantham</Option>
                <Option value="pooja">Pooja/Religious Event</Option>
                <Option value="festival">Festival Decoration</Option>
                <Option value="sangeet">Sangeet/Mehendi</Option>
                <Option value="reception">Reception Party</Option>
                <Option value="other">Other Event</Option>
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