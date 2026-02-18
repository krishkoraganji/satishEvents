// pages/Gallery.js
import React, { useState } from 'react';
import { Row, Col, Card, Typography, Tag, Button, Input, Select, Pagination } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import './index.css';

const { Title } = Typography;
const { Option } = Select;

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const galleryItems = [
    {
      id: 1,
      title: 'Royal Wedding Mandap',
      category: 'Wedding',
      subcategory: 'Mandap',
      image: '/images/gallery/wedding-1.jpg',
      date: '2024-01-15',
      location: 'Mumbai',
      likes: 234
    },
    {
      id: 2,
      title: 'Corporate Gala Night',
      category: 'Corporate',
      subcategory: 'Stage Design',
      image: '/images/gallery/corporate-1.jpg',
      date: '2024-01-10',
      location: 'Delhi',
      likes: 189
    },
    {
      id: 3,
      title: 'Enchanted Forest Birthday',
      category: 'Birthday',
      subcategory: 'Theme Party',
      image: '/images/gallery/birthday-1.jpg',
      date: '2024-01-05',
      location: 'Bangalore',
      likes: 312
    },
    {
      id: 4,
      title: 'Baby Shower Bliss',
      category: 'Baby Shower',
      subcategory: 'Pastel Theme',
      image: '/images/gallery/baby-1.jpg',
      date: '2024-01-12',
      location: 'Pune',
      likes: 156
    },
    {
      id: 5,
      title: 'Traditional Wedding Reception',
      category: 'Wedding',
      subcategory: 'Reception',
      image: '/images/gallery/wedding-2.jpg',
      date: '2024-01-08',
      location: 'Chennai',
      likes: 278
    },
    {
      id: 6,
      title: 'Product Launch Event',
      category: 'Corporate',
      subcategory: 'Branding',
      image: '/images/gallery/corporate-2.jpg',
      date: '2024-01-03',
      location: 'Hyderabad',
      likes: 145
    },
    {
      id: 7,
      title: 'First Birthday Celebration',
      category: 'Birthday',
      subcategory: 'Kids Party',
      image: '/images/gallery/birthday-2.jpg',
      date: '2024-01-14',
      location: 'Ahmedabad',
      likes: 267
    },
    {
      id: 8,
      title: 'Gender Reveal Party',
      category: 'Baby Shower',
      subcategory: 'Reveal',
      image: '/images/gallery/baby-2.jpg',
      date: '2024-01-07',
      location: 'Kolkata',
      likes: 198
    },
    // Add more gallery items...
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesFilter = filter === 'all' || item.category.toLowerCase() === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <div className="gallery-hero">
        <Title level={1}>Our Decoration Gallery</Title>
        <p>Browse through our stunning decoration projects</p>
      </div>

      {/* Filters */}
      <div className="gallery-filters">
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={8}>
            <Input
              placeholder="Search by title or location"
              prefix={<SearchOutlined />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col xs={24} md={8}>
            <Select
              defaultValue="all"
              style={{ width: '100%' }}
              onChange={setFilter}
            >
              <Option value="all">All Categories</Option>
              <Option value="wedding">Wedding</Option>
              <Option value="corporate">Corporate</Option>
              <Option value="birthday">Birthday</Option>
              <Option value="baby shower">Baby Shower</Option>
            </Select>
          </Col>
          <Col xs={24} md={8}>
            <Button icon={<FilterOutlined />} block>
              More Filters
            </Button>
          </Col>
        </Row>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        <Row gutter={[24, 24]}>
          {filteredItems.map((item) => (
            <Col xs={24} sm={12} lg={8} xl={6} key={item.id}>
              <Card
                hoverable
                cover={<div className="gallery-image" />}
                className="gallery-card"
              >
                <div className="gallery-badges">
                  <Tag color="gold">{item.category}</Tag>
                  <Tag color="blue">{item.subcategory}</Tag>
                </div>
                <Title level={4}>{item.title}</Title>
                <div className="gallery-meta">
                  <span>{item.location}</span>
                  <span>❤️ {item.likes}</span>
                </div>
                <Button type="primary" block>
                  View Details
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Pagination */}
      <div className="gallery-pagination">
        <Pagination defaultCurrent={1} total={50} showSizeChanger />
      </div>
    </div>
  );
};

export default Gallery;