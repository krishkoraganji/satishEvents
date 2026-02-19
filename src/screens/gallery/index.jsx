// pages/Gallery.js
import React, { useState } from 'react';
import { 
  Row, Col, Card, Typography, Tag, Button, Input, Select, 
  Pagination, Modal, Space, Empty, Rate 
} from 'antd';
import { 
  SearchOutlined, 
  FilterOutlined, 
  EnvironmentOutlined,
  CalendarOutlined,
  HeartOutlined,
  EyeOutlined,
  CloseOutlined
} from '@ant-design/icons';
import './index.css';

// Import all images with proper event-based paths
// Wedding Images (w1-w20)
import w1 from "../../assests/wedding/w1.jpeg";
import w2 from "../../assests/wedding/w2.jpeg";
import w3 from "../../assests/wedding/w3.jpeg";
import w4 from "../../assests/wedding/w4.jpeg";
// import w5 from "../../assests/wedding/w5.jpeg";
// import w6 from "../../assests/wedding/w6.jpeg";
// import w7 from "../../assests/wedding/w7.jpeg";
// import w8 from "../../assests/wedding/w8.jpeg";
// import w9 from "../../assests/wedding/w9.jpeg";
// import w10 from "../../assests/wedding/w10.jpeg";
// import w11 from "../../assests/wedding/w11.jpeg";
// import w12 from "../../assests/wedding/w12.jpeg";
// import w13 from "../../assests/wedding/w13.jpeg";
// import w14 from "../../assests/wedding/w14.jpeg";
// import w15 from "../../assests/wedding/w15.jpeg";
// import w16 from "../../assests/wedding/w16.jpeg";
// import w17 from "../../assests/wedding/w17.jpeg";
// import w18 from "../../assests/wedding/w18.jpeg";
// import w19 from "../../assests/wedding/w19.jpeg";
// import w20 from "../../assests/wedding/w20.jpeg";

// Anniversary Images (a1-a10)
import a1 from "../../assests/anniversery/a1.jpeg";
// import a2 from "../../assests/anniversary/a2.jpeg";
// import a3 from "../../assests/anniversary/a3.jpeg";
// import a4 from "../../assests/anniversary/a4.jpeg";
// import a5 from "../../assests/anniversary/a5.jpeg";
// import a6 from "../../assests/anniversary/a6.jpeg";
// import a7 from "../../assests/anniversary/a7.jpeg";
// import a8 from "../../assests/anniversary/a8.jpeg";
// import a9 from "../../assests/anniversary/a9.jpeg";
// import a10 from "../../assests/anniversary/a10.jpeg";

// Baby Shower Images (b1-b10)
import b1 from "../../assests/baby/b1.jpeg";
// import b2 from "../../assests/baby/b2.jpeg";
// import b3 from "../../assests/baby/b3.jpeg";
// import b4 from "../../assests/baby/b4.jpeg";
// import b5 from "../../assests/baby/b5.jpeg";
// import b6 from "../../assests/baby/b6.jpeg";
// import b7 from "../../assests/baby/b7.jpeg";
// import b8 from "../../assests/baby/b8.jpeg";
// import b9 from "../../assests/baby/b9.jpeg";
// import b10 from "../../assests/baby/b10.jpeg";

// Birthday Images (bd1-bd10)
import bd1 from "../../assests/birthday/bd1.jpeg";
// import bd2 from "../../assests/birthday/bd2.jpeg";
// import bd3 from "../../assests/birthday/bd3.jpeg";
// import bd4 from "../../assests/birthday/bd4.jpeg";
// import bd5 from "../../assests/birthday/bd5.jpeg";
// import bd6 from "../../assests/birthday/bd6.jpeg";
// import bd7 from "../../assests/birthday/bd7.jpeg";
// import bd8 from "../../assests/birthday/bd8.jpeg";
// import bd9 from "../../assests/birthday/bd9.jpeg";
// import bd10 from "../../assests/birthday/bd10.jpeg";

// Corporate Images (c1-c10)
// import c1 from "../../assests/corporate/c1.jpeg";
// import c2 from "../../assests/corporate/c2.jpeg";
// import c3 from "../../assests/corporate/c3.jpeg";
// import c4 from "../../assests/corporate/c4.jpeg";
// import c5 from "../../assests/corporate/c5.jpeg";
// import c6 from "../../assests/corporate/c6.jpeg";
// import c7 from "../../assests/corporate/c7.jpeg";
// import c8 from "../../assests/corporate/c8.jpeg";
// import c9 from "../../assests/corporate/c9.jpeg";
// import c10 from "../../assests/corporate/c10.jpeg";

// Death Anniversary Images (d1-d10)
import d1 from "../../assests/death/d1.jpeg";
import d2 from "../../assests/death/d2.jpeg";
// import d3 from "../../assests/death/d3.jpeg";
// import d4 from "../../assests/death/d4.jpeg";
// import d5 from "../../assests/death/d5.jpeg";
// import d6 from "../../assests/death/d6.jpeg";
// import d7 from "../../assests/death/d7.jpeg";
// import d8 from "../../assests/death/d8.jpeg";
// import d9 from "../../assests/death/d9.jpeg";
// import d10 from "../../assests/death/d10.jpeg";

// Ear Piercing Images (e1-e10)
// import e1 from "../../assests/earpiercing/e1.jpeg";
// import e2 from "../../assests/earpiercing/e2.jpeg";
// import e3 from "../../assests/earpiercing/e3.jpeg";
// import e4 from "../../assests/earpiercing/e4.jpeg";
// import e5 from "../../assests/earpiercing/e5.jpeg";
// import e6 from "../../assests/earpiercing/e6.jpeg";
// import e7 from "../../assests/earpiercing/e7.jpeg";
// import e8 from "../../assests/earpiercing/e8.jpeg";
// import e9 from "../../assests/earpiercing/e9.jpeg";
// import e10 from "../../assests/earpiercing/e10.jpeg";

// Engagement Images (en1-en10)
import en1 from "../../assests/reception/r1.jpeg";
import en2 from "../../assests/reception/r2.jpeg";
import en3 from "../../assests/reception/r3.jpeg";
import en4 from "../../assests/reception/r4.jpeg";
import en5 from "../../assests/reception/r5.jpeg";
import en6 from "../../assests/reception/r6.jpeg";
import en7 from "../../assests/reception/r7.jpeg";
import en8 from "../../assests/reception/r8.jpeg";
// import en9 from "../../assests/engagement/en9.jpeg";
// import en10 from "../../assests/engagement/en10.jpeg";

// Festival Images (f1-f10)
// import f1 from "../../assests/festival/f1.jpeg";
// import f2 from "../../assests/festival/f2.jpeg";
// import f3 from "../../assests/festival/f3.jpeg";
// import f4 from "../../assests/festival/f4.jpeg";
// import f5 from "../../assests/festival/f5.jpeg";
// import f6 from "../../assests/festival/f6.jpeg";
// import f7 from "../../assests/festival/f7.jpeg";
// import f8 from "../../assests/festival/f8.jpeg";
// import f9 from "../../assests/festival/f9.jpeg";
// import f10 from "../../assests/festival/f10.jpeg";

// Haldi Images (h1-h10)
import h1 from "../../assests/haldi/h1.jpeg";
import h2 from "../../assests/haldi/h2.jpeg";
import h3 from "../../assests/haldi/h3.jpeg";
import h4 from "../../assests/haldi/h4.jpeg";
import h5 from "../../assests/haldi/h5.jpeg";
// import h6 from "../../assests/haldi/h6.jpeg";
// import h7 from "../../assests/haldi/h7.jpeg";
// import h8 from "../../assests/haldi/h8.jpeg";
// import h9 from "../../assests/haldi/h9.jpeg";
// import h10 from "../../assests/haldi/h10.jpeg";

// Half Saree Images (hs1-hs10)
// import hs1 from "../../assests/halfsaree/hs1.jpeg";
// import hs2 from "../../assests/halfsaree/hs2.jpeg";
// import hs3 from "../../assests/halfsaree/hs3.jpeg";
// import hs4 from "../../assests/halfsaree/hs4.jpeg";
// import hs5 from "../../assests/halfsaree/hs5.jpeg";
// import hs6 from "../../assests/halfsaree/hs6.jpeg";
// import hs7 from "../../assests/halfsaree/hs7.jpeg";
// import hs8 from "../../assests/halfsaree/hs8.jpeg";
// import hs9 from "../../assests/halfsaree/hs9.jpeg";
// import hs10 from "../../assests/halfsaree/hs10.jpeg";

// House Ceremony Images (hc1-hc10)
import hc1 from "../../assests/house/hc1.jpeg";
import hc2 from "../../assests/house/hc2.jpeg";
import hc3 from "../../assests/house/hc3.jpeg";
import hc4 from "../../assests/house/hc4.jpeg";
import hc5 from "../../assests/house/hc5.jpeg";
// import hc6 from "../../assests/house/hc6.jpeg";
// import hc7 from "../../assests/house/hc7.jpeg";
// import hc8 from "../../assests/house/hc8.jpeg";
// import hc9 from "../../assests/house/hc9.jpeg";
// import hc10 from "../../assests/house/hc10.jpeg";

// Mundan Images (m1-m10)
// import m1 from "../../assests/mundan/m1.jpeg";
// import m2 from "../../assests/mundan/m2.jpeg";
// import m3 from "../../assests/mundan/m3.jpeg";
// import m4 from "../../assests/mundan/m4.jpeg";
// import m5 from "../../assests/mundan/m5.jpeg";
// import m6 from "../../assests/mundan/m6.jpeg";
// import m7 from "../../assests/mundan/m7.jpeg";
// import m8 from "../../assests/mundan/m8.jpeg";
// import m9 from "../../assests/mundan/m9.jpeg";
// import m10 from "../../assests/mundan/m10.jpeg";

// Naming Ceremony Images (n1-n10)
// import n1 from "../../assests/naming/n1.jpeg";
// import n2 from "../../assests/naming/n2.jpeg";
// import n3 from "../../assests/naming/n3.jpeg";
// import n4 from "../../assests/naming/n4.jpeg";
// import n5 from "../../assests/naming/n5.jpeg";
// import n6 from "../../assests/naming/n6.jpeg";
// import n7 from "../../assests/naming/n7.jpeg";
// import n8 from "../../assests/naming/n8.jpeg";
// import n9 from "../../assests/naming/n9.jpeg";
// import n10 from "../../assests/naming/n10.jpeg";

// Open Events Images (o1-o10)
import o1 from "../../assests/openEvents/o1.jpeg";
// import o2 from "../../assests/openEvents/o2.jpeg";
// import o3 from "../../assests/openEvents/o3.jpeg";
// import o4 from "../../assests/openEvents/o4.jpeg";
// import o5 from "../../assests/openEvents/o5.jpeg";
// import o6 from "../../assests/openEvents/o6.jpeg";
// import o7 from "../../assests/openEvents/o7.jpeg";
// import o8 from "../../assests/openEvents/o8.jpeg";
// import o9 from "../../assests/openEvents/o9.jpeg";
// import o10 from "../../assests/openEvents/o10.jpeg";

// Pooja Images (p1-p10)
// import p1 from "../../assests/pooja/p1.jpeg";
// import p2 from "../../assests/pooja/p2.jpeg";
// import p3 from "../../assests/pooja/p3.jpeg";
// import p4 from "../../assests/pooja/p4.jpeg";
// import p5 from "../../assests/pooja/p5.jpeg";
// import p6 from "../../assests/pooja/p6.jpeg";
// import p7 from "../../assests/pooja/p7.jpeg";
// import p8 from "../../assests/pooja/p8.jpeg";
// import p9 from "../../assests/pooja/p9.jpeg";
// import p10 from "../../assests/pooja/p10.jpeg";

// Reception Images (r1-r10)
import r1 from "../../assests/reception/r1.jpeg";
import r2 from "../../assests/reception/r2.jpeg";
import r3 from "../../assests/reception/r3.jpeg";
import r4 from "../../assests/reception/r4.jpeg";
import r5 from "../../assests/reception/r5.jpeg";
import r6 from "../../assests/reception/r6.jpeg";
import r7 from "../../assests/reception/r7.jpeg";
import r8 from "../../assests/reception/r8.jpeg";
// import r9 from "../../assests/reception/r9.jpeg";
// import r10 from "../../assests/reception/r10.jpeg";

// Sangeet Mehendi Images (sm1-sm10)
// import sm1 from "../../assests/sangeet/sm1.jpeg";
// import sm2 from "../../assests/sangeet/sm2.jpeg";
// import sm3 from "../../assests/sangeet/sm3.jpeg";
// import sm4 from "../../assests/sangeet/sm4.jpeg";
// import sm5 from "../../assests/sangeet/sm5.jpeg";
// import sm6 from "../../assests/sangeet/sm6.jpeg";
// import sm7 from "../../assests/sangeet/sm7.jpeg";
// import sm8 from "../../assests/sangeet/sm8.jpeg";
// import sm9 from "../../assests/sangeet/sm9.jpeg";
// import sm10 from "../../assests/sangeet/sm10.jpeg";

// Seemantham Images (s1-s10)
// import s1 from "../../assests/seemantham/s1.jpeg";
// import s2 from "../../assests/seemantham/s2.jpeg";
// import s3 from "../../assests/seemantham/s3.jpeg";
// import s4 from "../../assests/seemantham/s4.jpeg";
// import s5 from "../../assests/seemantham/s5.jpeg";
// import s6 from "../../assests/seemantham/s6.jpeg";
// import s7 from "../../assests/seemantham/s7.jpeg";
// import s8 from "../../assests/seemantham/s8.jpeg";
// import s9 from "../../assests/seemantham/s9.jpeg";
// import s10 from "../../assests/seemantham/s10.jpeg";

// Thread Ceremony Images (t1-t10)
// import t1 from "../../assests/thread/t1.jpeg";
// import t2 from "../../assests/thread/t2.jpeg";
// import t3 from "../../assests/thread/t3.jpeg";
// import t4 from "../../assests/thread/t4.jpeg";
// import t5 from "../../assests/thread/t5.jpeg";
// import t6 from "../../assests/thread/t6.jpeg";
// import t7 from "../../assests/thread/t7.jpeg";
// import t8 from "../../assests/thread/t8.jpeg";
// import t9 from "../../assests/thread/t9.jpeg";
// import t10 from "../../assests/thread/t10.jpeg";

const { Title, Text } = Typography;
const { Option } = Select;

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [likedImages, setLikedImages] = useState([]);
  const pageSize = 12;

  const galleryItems = [
    // Wedding Category (15 items)
    {
      id: 1,
      title: 'Royal Wedding Mandap - Vijayawada',
      category: 'Wedding',
      subcategory: 'Mandap Decor',
      image: w1,
      date: '2024-01-15',
      location: 'Vijayawada',
      likes: 234,
      designer: 'Satish Koraganji',
      description: 'Grand wedding mandap with fresh flowers and traditional elements designed by Satish Koraganji'
    },
    {
      id: 2,
      title: 'Elegant Wedding Reception',
      category: 'Wedding',
      subcategory: 'Reception',
      image: w2,
      date: '2024-01-10',
      location: 'Guntur',
      likes: 189,
      designer: 'Satish Koraganji',
      description: 'Modern reception setup with LED lighting and floral arrangements by Satish Koraganji'
    },
    {
      id: 3,
      title: 'Traditional Mehendi Ceremony',
      category: 'Wedding',
      subcategory: 'Mehendi',
      image: w3,
      date: '2024-01-05',
      location: 'Vijayawada',
      likes: 312,
      designer: 'Satish Koraganji',
      description: 'Colorful Mehendi setup with traditional seating designed by Satish Koraganji'
    },
    {
      id: 4,
      title: 'Sangeet Night Stage',
      category: 'Wedding',
      subcategory: 'Sangeet',
      image: w4,
      date: '2024-01-12',
      location: 'Tenali',
      likes: 276,
      designer: 'Satish Koraganji',
      description: 'Vibrant Sangeet stage with disco lights and floral decor by Satish Koraganji'
    },
    // {
    //   id: 5,
    //   title: 'Bridal Entry Setup',
    //   category: 'Wedding',
    //   subcategory: 'Entry Decor',
    //   image: w5,
    //   date: '2024-01-08',
    //   location: 'Mangalagiri',
    //   likes: 198,
    //   designer: 'Satish Koraganji',
    //   description: 'Stunning bridal entry pathway with flower petals by Satish Koraganji'
    // },
    // {
    //   id: 6,
    //   title: 'Wedding Mandap with Kannauj Flowers',
    //   category: 'Wedding',
    //   subcategory: 'Mandap Decor',
    //   image: w6,
    //   date: '2024-01-18',
    //   location: 'Vijayawada',
    //   likes: 345,
    //   designer: 'Satish Koraganji',
    //   description: 'Luxurious mandap with exotic flower arrangements by Satish Koraganji'
    // },
    // {
    //   id: 7,
    //   title: 'Reception Backdrop Design',
    //   category: 'Wedding',
    //   subcategory: 'Backdrop',
    //   image: w7,
    //   date: '2024-01-20',
    //   location: 'Guntur',
    //   likes: 167,
    //   designer: 'Satish Koraganji',
    //   description: 'Elegant reception backdrop with gold and white theme by Satish Koraganji'
    // },
    // {
    //   id: 8,
    //   title: 'Wedding Table Settings',
    //   category: 'Wedding',
    //   subcategory: 'Table Decor',
    //   image: w8,
    //   date: '2024-01-22',
    //   location: 'Tenali',
    //   likes: 145,
    //   designer: 'Satish Koraganji',
    //   description: 'Royal table settings for wedding feast by Satish Koraganji'
    // },
    // {
    //   id: 9,
    //   title: 'Aisle Decor with Flowers',
    //   category: 'Wedding',
    //   subcategory: 'Aisle Decor',
    //   image: w9,
    //   date: '2024-01-25',
    //   location: 'Machilipatnam',
    //   likes: 234,
    //   designer: 'Satish Koraganji',
    //   description: 'Beautiful flower-adorned wedding aisle by Satish Koraganji'
    // },
    // {
    //   id: 10,
    //   title: 'Wedding Photo Booth',
    //   category: 'Wedding',
    //   subcategory: 'Photo Booth',
    //   image: w10,
    //   date: '2024-01-28',
    //   location: 'Vijayawada',
    //   likes: 156,
    //   designer: 'Satish Koraganji',
    //   description: 'Instagram-worthy wedding photo booth by Satish Koraganji'
    // },
    // {
    //   id: 11,
    //   title: 'Welcome Signage Wedding',
    //   category: 'Wedding',
    //   subcategory: 'Welcome Signs',
    //   image: w11,
    //   date: '2024-02-01',
    //   location: 'Guntur',
    //   likes: 123,
    //   designer: 'Satish Koraganji',
    //   description: 'Elegant welcome sign with floral frame by Satish Koraganji'
    // },
    // {
    //   id: 12,
    //   title: 'Wedding Lighting Design',
    //   category: 'Wedding',
    //   subcategory: 'Lighting',
    //   image: w12,
    //   date: '2024-02-03',
    //   location: 'Vijayawada',
    //   likes: 267,
    //   designer: 'Satish Koraganji',
    //   description: 'Magical lighting setup for evening wedding by Satish Koraganji'
    // },
    // {
    //   id: 13,
    //   title: 'Wedding Stage Decor',
    //   category: 'Wedding',
    //   subcategory: 'Stage',
    //   image: w13,
    //   date: '2024-02-05',
    //   location: 'Guntur',
    //   likes: 198,
    //   designer: 'Satish Koraganji',
    //   description: 'Beautiful wedding stage with floral arrangements by Satish Koraganji'
    // },
    // {
    //   id: 14,
    //   title: 'Wedding Flower Arrangements',
    //   category: 'Wedding',
    //   subcategory: 'Flowers',
    //   image: w14,
    //   date: '2024-02-07',
    //   location: 'Vijayawada',
    //   likes: 176,
    //   designer: 'Satish Koraganji',
    //   description: 'Exotic flower arrangements for wedding by Satish Koraganji'
    // },
    // {
    //   id: 15,
    //   title: 'Wedding Entrance Decor',
    //   category: 'Wedding',
    //   subcategory: 'Entrance',
    //   image: w15,
    //   date: '2024-02-09',
    //   location: 'Tenali',
    //   likes: 145,
    //   designer: 'Satish Koraganji',
    //   description: 'Grand entrance decoration for wedding venue by Satish Koraganji'
    // },

    // Anniversary Category (10 items)
    {
      id: 16,
      title: 'Golden Anniversary Celebration',
      category: 'Anniversary',
      subcategory: '50th Anniversary',
      image: a1,
      date: '2024-01-15',
      location: 'Vijayawada',
      likes: 189,
      designer: 'Satish Koraganji',
      description: 'Elegant golden theme for 50th wedding anniversary by Satish Koraganji'
    },
    // {
    //   id: 17,
    //   title: 'Silver Anniversary Setup',
    //   category: 'Anniversary',
    //   subcategory: '25th Anniversary',
    //   image: a2,
    //   date: '2024-01-18',
    //   location: 'Guntur',
    //   likes: 156,
    //   designer: 'Satish Koraganji',
    //   description: 'Beautiful silver-themed 25th anniversary decoration by Satish Koraganji'
    // },
    // {
    //   id: 18,
    //   title: 'Vow Renewal Ceremony',
    //   category: 'Anniversary',
    //   subcategory: 'Vow Renewal',
    //   image: a3,
    //   date: '2024-01-20',
    //   location: 'Vijayawada',
    //   likes: 167,
    //   designer: 'Satish Koraganji',
    //   description: 'Romantic vow renewal ceremony setup by Satish Koraganji'
    // },
    // {
    //   id: 19,
    //   title: 'Anniversary Photo Display',
    //   category: 'Anniversary',
    //   subcategory: 'Memory Wall',
    //   image: a4,
    //   date: '2024-01-22',
    //   location: 'Tenali',
    //   likes: 134,
    //   designer: 'Satish Koraganji',
    //   description: 'Beautiful memory wall with couple photos by Satish Koraganji'
    // },
    // {
    //   id: 20,
    //   title: 'Rose Theme Anniversary',
    //   category: 'Anniversary',
    //   subcategory: 'Romantic',
    //   image: a5,
    //   date: '2024-01-25',
    //   location: 'Mangalagiri',
    //   likes: 145,
    //   designer: 'Satish Koraganji',
    //   description: 'Romantic rose-themed anniversary decoration by Satish Koraganji'
    // },
    // {
    //   id: 21,
    //   title: 'Anniversary Cake Table',
    //   category: 'Anniversary',
    //   subcategory: 'Cake Table',
    //   image: a6,
    //   date: '2024-01-27',
    //   location: 'Vijayawada',
    //   likes: 123,
    //   designer: 'Satish Koraganji',
    //   description: 'Elegant cake table for anniversary celebration by Satish Koraganji'
    // },
    // {
    //   id: 22,
    //   title: 'Pearl Anniversary Decor',
    //   category: 'Anniversary',
    //   subcategory: '30th Anniversary',
    //   image: a7,
    //   date: '2024-01-29',
    //   location: 'Guntur',
    //   likes: 112,
    //   designer: 'Satish Koraganji',
    //   description: 'Pearl-themed 30th anniversary decoration by Satish Koraganji'
    // },
    // {
    //   id: 23,
    //   title: 'Anniversary Stage Setup',
    //   category: 'Anniversary',
    //   subcategory: 'Stage',
    //   image: a8,
    //   date: '2024-02-01',
    //   location: 'Vijayawada',
    //   likes: 134,
    //   designer: 'Satish Koraganji',
    //   description: 'Beautiful stage for anniversary celebration by Satish Koraganji'
    // },
    // {
    //   id: 24,
    //   title: 'Diamond Anniversary',
    //   category: 'Anniversary',
    //   subcategory: '60th Anniversary',
    //   image: a9,
    //   date: '2024-02-03',
    //   location: 'Tenali',
    //   likes: 98,
    //   designer: 'Satish Koraganji',
    //   description: 'Diamond-themed 60th anniversary celebration by Satish Koraganji'
    // },
    // {
    //   id: 25,
    //   title: 'Anniversary Dinner Setup',
    //   category: 'Anniversary',
    //   subcategory: 'Dinner',
    //   image: a10,
    //   date: '2024-02-05',
    //   location: 'Machilipatnam',
    //   likes: 145,
    //   designer: 'Satish Koraganji',
    //   description: 'Romantic dinner setup for anniversary by Satish Koraganji'
    // },

    // Baby Shower Category (10 items)
    {
      id: 26,
      title: 'Baby Shower Pastel Theme',
      category: 'Baby Shower',
      subcategory: 'Pastel',
      image: b1,
      date: '2024-01-14',
      location: 'Vijayawada',
      likes: 234,
      designer: 'Satish Koraganji',
      description: 'Sweet pastel-themed baby shower decorations by Satish Koraganji'
    },
    // {
    //   id: 27,
    //   title: 'Gender Reveal Setup',
    //   category: 'Baby Shower',
    //   subcategory: 'Gender Reveal',
    //   image: b2,
    //   date: '2024-01-16',
    //   location: 'Guntur',
    //   likes: 198,
    //   designer: 'Satish Koraganji',
    //   description: 'Exciting gender reveal party decorations by Satish Koraganji'
    // },
    // {
    //   id: 28,
    //   title: 'Baby Shower Balloon Arch',
    //   category: 'Baby Shower',
    //   subcategory: 'Balloon Decor',
    //   image: b3,
    //   date: '2024-01-18',
    //   location: 'Vijayawada',
    //   likes: 167,
    //   designer: 'Satish Koraganji',
    //   description: 'Colorful balloon arch for baby shower by Satish Koraganji'
    // },
    // {
    //   id: 29,
    //   title: 'Cradle Decoration',
    //   category: 'Baby Shower',
    //   subcategory: 'Cradle',
    //   image: b4,
    //   date: '2024-01-20',
    //   location: 'Tenali',
    //   likes: 145,
    //   designer: 'Satish Koraganji',
    //   description: 'Beautifully decorated cradle by Satish Koraganji'
    // },
    // {
    //   id: 30,
    //   title: 'Baby Shower Cake Table',
    //   category: 'Baby Shower',
    //   subcategory: 'Cake Table',
    //   image: b5,
    //   date: '2024-01-22',
    //   location: 'Mangalagiri',
    //   likes: 134,
    //   designer: 'Satish Koraganji',
    //   description: 'Sweet cake table for baby shower by Satish Koraganji'
    // },
    // {
    //   id: 31,
    //   title: 'It\'s a Boy Celebration',
    //   category: 'Baby Shower',
    //   subcategory: 'Boy Theme',
    //   image: b6,
    //   date: '2024-01-24',
    //   location: 'Vijayawada',
    //   likes: 156,
    //   designer: 'Satish Koraganji',
    //   description: 'Blue-themed baby boy shower by Satish Koraganji'
    // },
    // {
    //   id: 32,
    //   title: 'It\'s a Girl Celebration',
    //   category: 'Baby Shower',
    //   subcategory: 'Girl Theme',
    //   image: b7,
    //   date: '2024-01-26',
    //   location: 'Guntur',
    //   likes: 167,
    //   designer: 'Satish Koraganji',
    //   description: 'Pink-themed baby girl shower by Satish Koraganji'
    // },
    // {
    //   id: 33,
    //   title: 'Twins Baby Shower',
    //   category: 'Baby Shower',
    //   subcategory: 'Twins',
    //   image: b8,
    //   date: '2024-01-28',
    //   location: 'Vijayawada',
    //   likes: 189,
    //   designer: 'Satish Koraganji',
    //   description: 'Double celebration for twins by Satish Koraganji'
    // },
    // {
    //   id: 34,
    //   title: 'Baby Shower Photo Booth',
    //   category: 'Baby Shower',
    //   subcategory: 'Photo Booth',
    //   image: b9,
    //   date: '2024-01-30',
    //   location: 'Tenali',
    //   likes: 123,
    //   designer: 'Satish Koraganji',
    //   description: 'Cute photo booth for baby shower by Satish Koraganji'
    // },
    // {
    //   id: 35,
    //   title: 'Diaper Cake Centerpiece',
    //   category: 'Baby Shower',
    //   subcategory: 'Centerpiece',
    //   image: b10,
    //   date: '2024-02-01',
    //   location: 'Machilipatnam',
    //   likes: 112,
    //   designer: 'Satish Koraganji',
    //   description: 'Creative diaper cake decorations by Satish Koraganji'
    // },

    // Birthday Category (10 items)
    {
      id: 36,
      title: 'Enchanted Forest Birthday',
      category: 'Birthday',
      subcategory: 'Theme Party',
      image: bd1,
      date: '2024-01-04',
      location: 'Vijayawada',
      likes: 312,
      designer: 'Satish Koraganji',
      description: 'Magical forest theme birthday party by Satish Koraganji'
    },
    // {
    //   id: 37,
    //   title: 'Balloon Decoration Birthday',
    //   category: 'Birthday',
    //   subcategory: 'Balloon Decor',
    //   image: bd2,
    //   date: '2024-01-31',
    //   location: 'Tenali',
    //   likes: 267,
    //   designer: 'Satish Koraganji',
    //   description: 'Colorful balloon arch and decorations by Satish Koraganji'
    // },
    // {
    //   id: 38,
    //   title: 'Cake Table Birthday Setup',
    //   category: 'Birthday',
    //   subcategory: 'Cake Table',
    //   image: bd3,
    //   date: '2024-02-02',
    //   location: 'Guntur',
    //   likes: 189,
    //   designer: 'Satish Koraganji',
    //   description: 'Beautiful cake table with backdrop by Satish Koraganji'
    // },
    // {
    //   id: 39,
    //   title: 'First Birthday Celebration',
    //   category: 'Birthday',
    //   subcategory: '1st Birthday',
    //   image: bd4,
    //   date: '2024-01-06',
    //   location: 'Vijayawada',
    //   likes: 278,
    //   designer: 'Satish Koraganji',
    //   description: 'Special first birthday decorations by Satish Koraganji'
    // },
    // {
    //   id: 40,
    //   title: 'Superhero Theme Birthday',
    //   category: 'Birthday',
    //   subcategory: 'Superhero',
    //   image: bd5,
    //   date: '2024-01-08',
    //   location: 'Guntur',
    //   likes: 234,
    //   designer: 'Satish Koraganji',
    //   description: 'Action-packed superhero theme by Satish Koraganji'
    // },
    // {
    //   id: 41,
    //   title: 'Princess Theme Birthday',
    //   category: 'Birthday',
    //   subcategory: 'Princess',
    //   image: bd6,
    //   date: '2024-01-10',
    //   location: 'Tenali',
    //   likes: 245,
    //   designer: 'Satish Koraganji',
    //   description: 'Royal princess theme decorations by Satish Koraganji'
    // },
    // {
    //   id: 42,
    //   title: 'Milestone 50th Birthday',
    //   category: 'Birthday',
    //   subcategory: '50th Birthday',
    //   image: bd7,
    //   date: '2024-01-12',
    //   location: 'Vijayawada',
    //   likes: 167,
    //   designer: 'Satish Koraganji',
    //   description: 'Elegant 50th birthday celebration by Satish Koraganji'
    // },
    // {
    //   id: 43,
    //   title: 'Birthday Backdrop Design',
    //   category: 'Birthday',
    //   subcategory: 'Backdrop',
    //   image: bd8,
    //   date: '2024-01-14',
    //   location: 'Mangalagiri',
    //   likes: 145,
    //   designer: 'Satish Koraganji',
    //   description: 'Stunning photo backdrop for birthday by Satish Koraganji'
    // },
    // {
    //   id: 44,
    //   title: 'Candy Buffet Setup',
    //   category: 'Birthday',
    //   subcategory: 'Candy Buffet',
    //   image: bd9,
    //   date: '2024-01-16',
    //   location: 'Guntur',
    //   likes: 156,
    //   designer: 'Satish Koraganji',
    //   description: 'Colorful candy buffet for birthday by Satish Koraganji'
    // },
    // {
    //   id: 45,
    //   title: 'Birthday Entrance Decor',
    //   category: 'Birthday',
    //   subcategory: 'Entrance',
    //   image: bd10,
    //   date: '2024-01-18',
    //   location: 'Vijayawada',
    //   likes: 134,
    //   designer: 'Satish Koraganji',
    //   description: 'Welcoming entrance for birthday party by Satish Koraganji'
    // },

    // Corporate Category (10 items)
    // {
    //   id: 46,
    //   title: 'Corporate Gala Night',
    //   category: 'Corporate',
    //   subcategory: 'Gala',
    //   image: o1,
    //   date: '2024-01-06',
    //   location: 'Vijayawada',
    //   likes: 178,
    //   designer: 'Satish Koraganji',
    //   description: 'Elegant corporate gala with branding by Satish Koraganji'
    // },
    {
      id: 47,
      title: 'Product Launch Stage',
      category: 'Corporate',
      subcategory: 'Product Launch',
      image: o1,
      date: '2024-01-26',
      location: 'Guntur',
      likes: 145,
      designer: 'Satish Koraganji',
      description: 'Professional product launch setup by Satish Koraganji'
    },
    // {
    //   id: 48,
    //   title: 'Conference Stage Design',
    //   category: 'Corporate',
    //   subcategory: 'Conference',
    //   image: c3,
    //   date: '2024-01-29',
    //   location: 'Vijayawada',
    //   likes: 134,
    //   designer: 'Satish Koraganji',
    //   description: 'Sophisticated conference stage with branding by Satish Koraganji'
    // },
    // {
    //   id: 49,
    //   title: 'Annual Day Celebration',
    //   category: 'Corporate',
    //   subcategory: 'Annual Day',
    //   image: c4,
    //   date: '2024-02-01',
    //   location: 'Guntur',
    //   likes: 156,
    //   designer: 'Satish Koraganji',
    //   description: 'Grand annual day celebration setup by Satish Koraganji'
    // },
    // {
    //   id: 50,
    //   title: 'Award Ceremony Setup',
    //   category: 'Corporate',
    //   subcategory: 'Awards',
    //   image: c5,
    //   date: '2024-02-03',
    //   location: 'Vijayawada',
    //   likes: 123,
    //   designer: 'Satish Koraganji',
    //   description: 'Elegant award ceremony decorations by Satish Koraganji'
    // },
    // {
    //   id: 51,
    //   title: 'Corporate Meeting Room',
    //   category: 'Corporate',
    //   subcategory: 'Meeting',
    //   image: c6,
    //   date: '2024-02-05',
    //   location: 'Tenali',
    //   likes: 98,
    //   designer: 'Satish Koraganji',
    //   description: 'Professional meeting room setup by Satish Koraganji'
    // },
    // {
    //   id: 52,
    //   title: 'Trade Show Booth',
    //   category: 'Corporate',
    //   subcategory: 'Trade Show',
    //   image: c7,
    //   date: '2024-02-07',
    //   location: 'Vijayawada',
    //   likes: 112,
    //   designer: 'Satish Koraganji',
    //   description: 'Eye-catching trade show booth by Satish Koraganji'
    // },
    // {
    //   id: 53,
    //   title: 'Corporate Seminar',
    //   category: 'Corporate',
    //   subcategory: 'Seminar',
    //   image: c8,
    //   date: '2024-02-09',
    //   location: 'Guntur',
    //   likes: 89,
    //   designer: 'Satish Koraganji',
    //   description: 'Professional seminar setup by Satish Koraganji'
    // },
    // {
    //   id: 54,
    //   title: 'Brand Launch Event',
    //   category: 'Corporate',
    //   subcategory: 'Brand Launch',
    //   image: c9,
    //   date: '2024-02-11',
    //   location: 'Vijayawada',
    //   likes: 145,
    //   designer: 'Satish Koraganji',
    //   description: 'Exciting brand launch decorations by Satish Koraganji'
    // },
    // {
    //   id: 55,
    //   title: 'Corporate Dinner',
    //   category: 'Corporate',
    //   subcategory: 'Dinner',
    //   image: c10,
    //   date: '2024-02-13',
    //   location: 'Machilipatnam',
    //   likes: 134,
    //   designer: 'Satish Koraganji',
    //   description: 'Elegant corporate dinner setup by Satish Koraganji'
    // },

    // Death Anniversary Category (10 items)
    {
      id: 56,
      title: 'Peaceful Remembrance Setup',
      category: 'Death Anniversary',
      subcategory: 'Remembrance',
      image: d1,
      date: '2024-01-13',
      location: 'Vijayawada',
      likes: 89,
      designer: 'Satish Koraganji',
      description: 'Dignified white flower arrangement for remembrance by Satish Koraganji'
    },
    {
      id: 57,
      title: 'Traditional Shraddha Setup',
      category: 'Death Anniversary',
      subcategory: 'Shraddha',
      image: d2,
      date: '2024-01-09',
      location: 'Guntur',
      likes: 76,
      designer: 'Satish Koraganji',
      description: 'Traditional death anniversary ceremony setup by Satish Koraganji'
    },
    // {
    //   id: 58,
    //   title: 'White Flower Memorial',
    //   category: 'Death Anniversary',
    //   subcategory: 'Memorial',
    //   image: d3,
    //   date: '2024-01-19',
    //   location: 'Tenali',
    //   likes: 67,
    //   designer: 'Satish Koraganji',
    //   description: 'Peaceful white flower memorial arrangement by Satish Koraganji'
    // },
    // {
    //   id: 59,
    //   title: 'Prayer Meeting Setup',
    //   category: 'Death Anniversary',
    //   subcategory: 'Prayer',
    //   image: d4,
    //   date: '2024-01-23',
    //   location: 'Vijayawada',
    //   likes: 78,
    //   designer: 'Satish Koraganji',
    //   description: 'Dignified prayer meeting setup by Satish Koraganji'
    // },
    // {
    //   id: 60,
    //   title: 'Traditional Ritual Decor',
    //   category: 'Death Anniversary',
    //   subcategory: 'Rituals',
    //   image: d5,
    //   date: '2024-01-27',
    //   location: 'Guntur',
    //   likes: 56,
    //   designer: 'Satish Koraganji',
    //   description: 'Traditional ritual decorations by Satish Koraganji'
    // },
    // {
    //   id: 61,
    //   title: 'Memorial Photo Display',
    //   category: 'Death Anniversary',
    //   subcategory: 'Photo Display',
    //   image: d6,
    //   date: '2024-01-30',
    //   location: 'Machilipatnam',
    //   likes: 45,
    //   designer: 'Satish Koraganji',
    //   description: 'Respectful photo display for remembrance by Satish Koraganji'
    // },
    // {
    //   id: 62,
    //   title: 'Candlelight Memorial',
    //   category: 'Death Anniversary',
    //   subcategory: 'Candlelight',
    //   image: d7,
    //   date: '2024-02-02',
    //   location: 'Vijayawada',
    //   likes: 89,
    //   designer: 'Satish Koraganji',
    //   description: 'Peaceful candlelight memorial setup by Satish Koraganji'
    // },
    // {
    //   id: 63,
    //   title: 'Offering Table Decor',
    //   category: 'Death Anniversary',
    //   subcategory: 'Offerings',
    //   image: d8,
    //   date: '2024-02-04',
    //   location: 'Guntur',
    //   likes: 67,
    //   designer: 'Satish Koraganji',
    //   description: 'Traditional offering table decoration by Satish Koraganji'
    // },
    // {
    //   id: 64,
    //   title: 'Sacred Lamp Setup',
    //   category: 'Death Anniversary',
    //   subcategory: 'Lamps',
    //   image: d9,
    //   date: '2024-02-06',
    //   location: 'Tenali',
    //   likes: 78,
    //   designer: 'Satish Koraganji',
    //   description: 'Sacred lamp arrangement for remembrance by Satish Koraganji'
    // },
    // {
    //   id: 65,
    //   title: 'Floral Tribute Decor',
    //   category: 'Death Anniversary',
    //   subcategory: 'Floral Tribute',
    //   image: d10,
    //   date: '2024-02-08',
    //   location: 'Vijayawada',
    //   likes: 92,
    //   designer: 'Satish Koraganji',
    //   description: 'Beautiful floral tribute arrangement by Satish Koraganji'
    // },

    // Continue with all other categories...
    // Ear Piercing (5 items)
    // {
    //   id: 66,
    //   title: 'Ear Piercing Ceremony Setup',
    //   category: 'Ear Piercing',
    //   subcategory: 'Traditional',
    //   image: e1,
    //   date: '2024-01-23',
    //   location: 'Vijayawada',
    //   likes: 98,
    //   designer: 'Satish Koraganji',
    //   description: 'Child-friendly ear piercing ceremony decor by Satish Koraganji'
    // },
    // {
    //   id: 67,
    //   title: 'Traditional Karnavedha',
    //   category: 'Ear Piercing',
    //   subcategory: 'Karnavedha',
    //   image: e2,
    //   date: '2024-01-25',
    //   location: 'Guntur',
    //   likes: 87,
    //   designer: 'Satish Koraganji',
    //   description: 'Traditional Karnavedha ceremony setup by Satish Koraganji'
    // },
    // {
    //   id: 68,
    //   title: 'Baby Ear Piercing Decor',
    //   category: 'Ear Piercing',
    //   subcategory: 'Baby',
    //   image: e3,
    //   date: '2024-01-27',
    //   location: 'Tenali',
    //   likes: 76,
    //   designer: 'Satish Koraganji',
    //   description: 'Sweet baby ear piercing ceremony decor by Satish Koraganji'
    // },
    // {
    //   id: 69,
    //   title: 'Temple Style Piercing',
    //   category: 'Ear Piercing',
    //   subcategory: 'Temple',
    //   image: e4,
    //   date: '2024-01-29',
    //   location: 'Mangalagiri',
    //   likes: 65,
    //   designer: 'Satish Koraganji',
    //   description: 'Temple-style ear piercing setup by Satish Koraganji'
    // },
    // {
    //   id: 70,
    //   title: 'Family Celebration Setup',
    //   category: 'Ear Piercing',
    //   subcategory: 'Family',
    //   image: e5,
    //   date: '2024-01-31',
    //   location: 'Vijayawada',
    //   likes: 54,
    //   designer: 'Satish Koraganji',
    //   description: 'Family-focused ear piercing celebration by Satish Koraganji'
    // },

    // Engagement (5 items)
    {
      id: 71,
      title: 'Romantic Engagement Setup',
      category: 'Engagement',
      subcategory: 'Romantic',
      image: r1,
      date: '2024-01-20',
      location: 'Vijayawada',
      likes: 278,
      designer: 'Satish Koraganji',
      description: 'Beautiful engagement ceremony decor by Satish Koraganji'
    },
    {
      id: 72,
      title: 'Floral Arch Engagement',
      category: 'Engagement',
      subcategory: 'Floral Arch',
      image: r2,
      date: '2024-01-25',
      location: 'Guntur',
      likes: 245,
      designer: 'Satish Koraganji',
      description: 'Stunning floral arch for engagement photos by Satish Koraganji'
    },
    {
      id: 73,
      title: 'Ring Ceremony Setup',
      category: 'Engagement',
      subcategory: 'Ring Ceremony',
      image: r3,
      date: '2024-01-22',
      location: 'Tenali',
      likes: 198,
      designer: 'Satish Koraganji',
      description: 'Beautiful ring ceremony decoration by Satish Koraganji'
    },
    {
      id: 74,
      title: 'Engagement Stage Decor',
      category: 'Engagement',
      subcategory: 'Stage',
      image: r4,
      date: '2024-01-24',
      location: 'Vijayawada',
      likes: 167,
      designer: 'Satish Koraganji',
      description: 'Elegant engagement stage setup by Satish Koraganji'
    },
    {
      id: 75,
      title: 'Couple Photo Backdrop',
      category: 'Engagement',
      subcategory: 'Photo Backdrop',
      image: r5,
      date: '2024-01-26',
      location: 'Mangalagiri',
      likes: 189,
      designer: 'Satish Koraganji',
      description: 'Beautiful photo backdrop for engagement by Satish Koraganji'
    },

    // Festival (10 items)
    // {
    //   id: 76,
    //   title: 'Diwali Decoration',
    //   category: 'Festival',
    //   subcategory: 'Diwali',
    //   image: f1,
    //   date: '2024-01-05',
    //   location: 'Vijayawada',
    //   likes: 289,
    //   designer: 'Satish Koraganji',
    //   description: 'Beautiful Diwali decoration with lights and rangoli by Satish Koraganji'
    // },
    // {
    //   id: 77,
    //   title: 'Ganesh Chaturthi Pandal',
    //   category: 'Festival',
    //   subcategory: 'Ganesh Pandal',
    //   image: f2,
    //   date: '2024-01-10',
    //   location: 'Guntur',
    //   likes: 234,
    //   designer: 'Satish Koraganji',
    //   description: 'Grand Ganesh Chaturthi pandal decoration by Satish Koraganji'
    // },
    // {
    //   id: 78,
    //   title: 'Sankranti Rangoli',
    //   category: 'Festival',
    //   subcategory: 'Sankranti',
    //   image: f3,
    //   date: '2024-01-14',
    //   location: 'Vijayawada',
    //   likes: 198,
    //   designer: 'Satish Koraganji',
    //   description: 'Colorful Sankranti rangoli designs by Satish Koraganji'
    // },
    // {
    //   id: 79,
    //   title: 'Navratri Golu Setup',
    //   category: 'Festival',
    //   subcategory: 'Navratri',
    //   image: f4,
    //   date: '2024-01-18',
    //   location: 'Guntur',
    //   likes: 167,
    //   designer: 'Satish Koraganji',
    //   description: 'Traditional Navratri Golu display by Satish Koraganji'
    // },
    // {
    //   id: 80,
    //   title: 'Christmas Decor',
    //   category: 'Festival',
    //   subcategory: 'Christmas',
    //   image: f5,
    //   date: '2024-01-22',
    //   location: 'Vijayawada',
    //   likes: 245,
    //   designer: 'Satish Koraganji',
    //   description: 'Magical Christmas decoration by Satish Koraganji'
    // },
    // {
    //   id: 81,
    //   title: 'Dussehra Setup',
    //   category: 'Festival',
    //   subcategory: 'Dussehra',
    //   image: f6,
    //   date: '2024-01-25',
    //   location: 'Tenali',
    //   likes: 134,
    //   designer: 'Satish Koraganji',
    //   description: 'Traditional Dussehra decoration by Satish Koraganji'
    // },
    // {
    //   id: 82,
    //   title: 'Holi Celebration',
    //   category: 'Festival',
    //   subcategory: 'Holi',
    //   image: f7,
    //   date: '2024-01-28',
    //   location: 'Guntur',
    //   likes: 178,
    //   designer: 'Satish Koraganji',
    //   description: 'Colorful Holi celebration setup by Satish Koraganji'
    // },
    // {
    //   id: 83,
    //   title: 'Eid Decoration',
    //   category: 'Festival',
    //   subcategory: 'Eid',
    //   image: f8,
    //   date: '2024-01-30',
    //   location: 'Vijayawada',
    //   likes: 145,
    //   designer: 'Satish Koraganji',
    //   description: 'Elegant Eid decoration by Satish Koraganji'
    // },
    // {
    //   id: 84,
    //   title: 'Pongal Celebration',
    //   category: 'Festival',
    //   subcategory: 'Pongal',
    //   image: f9,
    //   date: '2024-02-02',
    //   location: 'Machilipatnam',
    //   likes: 156,
    //   designer: 'Satish Koraganji',
    //   description: 'Traditional Pongal celebration decor by Satish Koraganji'
    // },
    // {
    //   id: 85,
    //   title: 'Onam Pookalam',
    //   category: 'Festival',
    //   subcategory: 'Onam',
    //   image: f10,
    //   date: '2024-02-04',
    //   location: 'Vijayawada',
    //   likes: 123,
    //   designer: 'Satish Koraganji',
    //   description: 'Beautiful Onam Pookalam flower carpet by Satish Koraganji'
    // },

    // Continue with Haldi, Half Saree, House Ceremony, etc...
    // Haldi (5 items)
    {
      id: 86,
      title: 'Vibrant Haldi Setup',
      category: 'Haldi',
      subcategory: 'Yellow Theme',
      image: h1,
      date: '2024-01-11',
      location: 'Vijayawada',
      likes: 289,
      designer: 'Satish Koraganji',
      description: 'Yellow-themed Haldi ceremony with marigolds by Satish Koraganji'
    },
    {
      id: 87,
      title: 'Marigold Backdrop Haldi',
      category: 'Haldi',
      subcategory: 'Backdrop',
      image: h2,
      date: '2024-01-16',
      location: 'Guntur',
      likes: 234,
      designer: 'Satish Koraganji',
      description: 'Stunning marigold backdrop for Haldi photos by Satish Koraganji'
    },
    {
      id: 88,
      title: 'Brass Vessels Haldi Decor',
      category: 'Haldi',
      subcategory: 'Traditional Props',
      image: h3,
      date: '2024-01-23',
      location: 'Tenali',
      likes: 178,
      designer: 'Satish Koraganji',
      description: 'Traditional brass vessel arrangement for Haldi by Satish Koraganji'
    },
    {
      id: 89,
      title: 'Haldi Seating Arrangement',
      category: 'Haldi',
      subcategory: 'Seating',
      image: h4,
      date: '2024-01-19',
      location: 'Vijayawada',
      likes: 156,
      designer: 'Satish Koraganji',
      description: 'Traditional seating for Haldi ceremony by Satish Koraganji'
    },
    {
      id: 90,
      title: 'Floral Canopy Haldi',
      category: 'Haldi',
      subcategory: 'Canopy',
      image: h5,
      date: '2024-01-21',
      location: 'Mangalagiri',
      likes: 198,
      designer: 'Satish Koraganji',
      description: 'Beautiful floral canopy for Haldi by Satish Koraganji'
    },

    // Half Saree (5 items)
    // {
    //   id: 91,
    //   title: 'Half Saree Stage Setup',
    //   category: 'Half Saree',
    //   subcategory: 'Stage',
    //   image: hs1,
    //   date: '2024-01-19',
    //   location: 'Vijayawada',
    //   likes: 245,
    //   designer: 'Satish Koraganji',
    //   description: 'Elegant stage for Half Saree function by Satish Koraganji'
    // },
    // {
    //   id: 92,
    //   title: 'Half Saree Floral Backdrop',
    //   category: 'Half Saree',
    //   subcategory: 'Backdrop',
    //   image: hs2,
    //   date: '2024-01-24',
    //   location: 'Mangalagiri',
    //   likes: 198,
    //   designer: 'Satish Koraganji',
    //   description: 'Beautiful floral backdrop for Half Saree ceremony by Satish Koraganji'
    // },
    // {
    //   id: 93,
    //   title: 'Traditional Thoranam Half Saree',
    //   category: 'Half Saree',
    //   subcategory: 'Thoranam',
    //   image: hs3,
    //   date: '2024-01-27',
    //   location: 'Guntur',
    //   likes: 167,
    //   designer: 'Satish Koraganji',
    //   description: 'Traditional thoranam decorations by Satish Koraganji'
    // },
    // {
    //   id: 94,
    //   title: 'Half Saree Seating',
    //   category: 'Half Saree',
    //   subcategory: 'Seating',
    //   image: hs4,
    //   date: '2024-01-20',
    //   location: 'Tenali',
    //   likes: 145,
    //   designer: 'Satish Koraganji',
    //   description: 'Traditional seating arrangement by Satish Koraganji'
    // },
    // {
    //   id: 95,
    //   title: 'Half Saree Photo Booth',
    //   category: 'Half Saree',
    //   subcategory: 'Photo Booth',
    //   image: hs5,
    //   date: '2024-01-22',
    //   location: 'Vijayawada',
    //   likes: 178,
    //   designer: 'Satish Koraganji',
    //   description: 'Traditional photo booth for Half Saree by Satish Koraganji'
    // },

    // House Ceremony (5 items)
    {
      id: 96,
      title: 'Traditional Grihapravesh Setup',
      category: 'House Ceremony',
      subcategory: 'Grihapravesh',
      image: hc1,
      date: '2024-01-14',
      location: 'Vijayawada',
      likes: 156,
      designer: 'Satish Koraganji',
      description: 'Auspicious house warming ceremony with traditional kolams by Satish Koraganji'
    },
    {
      id: 97,
      title: 'Vastu Puja Decor',
      category: 'House Ceremony',
      subcategory: 'Vastu Puja',
      image: hc2,
      date: '2024-01-07',
      location: 'Guntur',
      likes: 98,
      designer: 'Satish Koraganji',
      description: 'Sacred Vastu puja setup with traditional elements by Satish Koraganji'
    },
    {
      id: 98,
      title: 'Main Door Torans Decoration',
      category: 'House Ceremony',
      subcategory: 'Torans',
      image: hc3,
      date: '2024-01-17',
      location: 'Tenali',
      likes: 134,
      designer: 'Satish Koraganji',
      description: 'Beautiful mango leaf and marigold torans by Satish Koraganji'
    },
    {
      id: 99,
      title: 'Traditional Kolam Designs',
      category: 'House Ceremony',
      subcategory: 'Kolams',
      image: hc4,
      date: '2024-01-21',
      location: 'Machilipatnam',
      likes: 167,
      designer: 'Satish Koraganji',
      description: 'Intricate traditional kolam for house ceremony by Satish Koraganji'
    },
    {
      id: 100,
      title: 'Pooja Room Setup',
      category: 'House Ceremony',
      subcategory: 'Pooja Room',
      image: hc5,
      date: '2024-01-24',
      location: 'Vijayawada',
      likes: 145,
      designer: 'Satish Koraganji',
      description: 'Beautiful pooja room decoration by Satish Koraganji'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'wedding', label: 'Wedding' },
    { value: 'anniversary', label: 'Anniversary' },
    { value: 'baby shower', label: 'Baby Shower' },
    { value: 'birthday', label: 'Birthday' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'death anniversary', label: 'Death Anniversary' },
    { value: 'ear piercing', label: 'Ear Piercing' },
    { value: 'engagement', label: 'Engagement' },
    { value: 'festival', label: 'Festival' },
    { value: 'haldi', label: 'Haldi' },
    { value: 'half saree', label: 'Half Saree' },
    { value: 'house ceremony', label: 'House Ceremony' },
    { value: 'mundan', label: 'Mundan' },
    { value: 'naming', label: 'Naming Ceremony' },
    { value: 'pooja', label: 'Pooja & Religious' },
    { value: 'reception', label: 'Reception' },
    { value: 'sangeet & mehendi', label: 'Sangeet & Mehendi' },
    { value: 'seemantham', label: 'Seemantham' },
    { value: 'thread ceremony', label: 'Thread Ceremony' }
  ];

  const handleLike = (id) => {
    if (likedImages.includes(id)) {
      setLikedImages(likedImages.filter(itemId => itemId !== id));
    } else {
      setLikedImages([...likedImages, id]);
    }
  };

  const filteredItems = galleryItems.filter(item => {
    const matchesFilter = filter === 'all' || 
                         item.category.toLowerCase().includes(filter.toLowerCase());
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.subcategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.designer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Pagination
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <div className="gallery-hero">
        <Title level={1}>Our Decoration Gallery</Title>
        <Text className="hero-subtitle">
          Browse through {galleryItems.length}+ stunning decoration projects designed by <strong>Satish Koraganji</strong> across 20+ categories
        </Text>
      </div>

      {/* Filters */}
      <div className="gallery-filters">
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={8}>
            <Input
              placeholder="Search by title, location, or category"
              prefix={<SearchOutlined />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              allowClear
              size="large"
            />
          </Col>
          <Col xs={24} md={8}>
            <Select
              defaultValue="all"
              style={{ width: '100%' }}
              onChange={setFilter}
              size="large"
              showSearch
              optionFilterProp="children"
            >
              {categories.map(cat => (
                <Option key={cat.value} value={cat.value}>{cat.label}</Option>
              ))}
            </Select>
          </Col>
          <Col xs={24} md={8}>
            <Button 
              icon={<FilterOutlined />} 
              size="large"
              block
              onClick={() => {
                setFilter('all');
                setSearchTerm('');
              }}
            >
              Clear Filters
            </Button>
          </Col>
        </Row>
      </div>

      {/* Stats */}
      <div className="gallery-stats">
        <Space size="large">
          <Text>Total Items: <strong>{galleryItems.length}</strong></Text>
          <Text>Categories: <strong>20+</strong></Text>
          <Text>Showing: <strong>{filteredItems.length}</strong></Text>
          <Text>Designer: <strong style={{ color: 'var(--accent-gold)' }}>Satish Koraganji</strong></Text>
        </Space>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredItems.length > 0 ? (
          <Row gutter={[24, 24]}>
            {paginatedItems.map((item) => (
              <Col xs={24} sm={12} lg={8} xl={6} key={item.id}>
                <Card
                  hoverable
                  onClick={() => {
                        setSelectedImage(item);
                        setModalVisible(true);
                      }}
                  cover={
                    <div className="gallery-image-wrapper">
                      <img src={item.image} alt={item.title} />
                      <div className="image-overlay-badges">
                        <Tag color="gold">{item.category}</Tag>
                        <Tag color="blue">{item.subcategory}</Tag>
                      </div>
                    </div>
                  }
                  className="gallery-card"
                  // actions={[
                  //   <Button 
                  //     type="text" 
                  //     icon={<HeartOutlined />} 
                  //     onClick={() => handleLike(item.id)}
                  //     className={likedImages.includes(item.id) ? 'liked' : ''}
                  //   >
                  //     {item.likes + (likedImages.includes(item.id) ? 1 : 0)}
                  //   </Button>,
                  //   <Button 
                  //     type="text" 
                  //     icon={<EyeOutlined />} 
                  //     onClick={() => {
                  //       setSelectedImage(item);
                  //       setModalVisible(true);
                  //     }}
                  //   >
                  //     View
                  //   </Button>
                  // ]}
                >
                  <div className="gallery-badges">
                    <Tag color="gold">{item.category}</Tag>
                    <Tag color="blue">{item.subcategory}</Tag>
                  </div>
                  <Title level={4} className="gallery-title">{item.title}</Title>
                  <div className="gallery-meta">
                    <span><EnvironmentOutlined /> {item.location}</span>
                    <span><CalendarOutlined /> {new Date(item.date).toLocaleDateString('en-IN', { 
                      day: 'numeric', 
                      month: 'short', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                  <div className="gallery-designer">
                    <strong>Designer:</strong> {item.designer}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Empty 
            description="No items found matching your criteria" 
            className="gallery-empty"
          />
        )}
      </div>

      {/* Pagination */}
      {filteredItems.length > 0 && (
        <div className="gallery-pagination">
          <Pagination 
            current={currentPage}
            total={filteredItems.length}
            pageSize={pageSize}
            onChange={setCurrentPage}
            showSizeChanger={false}
            showQuickJumper
            showTotal={(total) => `Total ${total} items`}
          />
        </div>
      )}

      {/* Image Detail Modal */}
      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={1000}
        className="gallery-detail-modal"
        closeIcon={<CloseOutlined />}
      >
        {selectedImage && (
          <div className="modal-content">
            <div className="modal-image-section">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="modal-image"
              />
            </div>
            <div className="modal-info-section">
              <div className="modal-header">
                <Tag color="gold" className="modal-category">{selectedImage.category}</Tag>
                <Tag color="blue">{selectedImage.subcategory}</Tag>
              </div>
              
              <Title level={2} className="modal-title">{selectedImage.title}</Title>
              
              <div className="modal-meta">
                <div className="meta-item">
                  <EnvironmentOutlined /> {selectedImage.location}
                </div>
                <div className="meta-item">
                  <CalendarOutlined /> {new Date(selectedImage.date).toLocaleDateString('en-IN', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </div>
                <div className="meta-item">
                  <HeartOutlined /> {selectedImage.likes} likes
                </div>
              </div>

              <div className="modal-designer">
                <strong>Designer:</strong> <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>Satish Koraganji</span>
              </div>

              <div className="modal-description">
                <p>{selectedImage.description}</p>
              </div>

              <div className="modal-actions">
                <Button 
                  type="primary" 
                  size="large" 
                  icon={<HeartOutlined />}
                  onClick={() => handleLike(selectedImage.id)}
                  className={likedImages.includes(selectedImage.id) ? 'liked' : ''}
                >
                  {likedImages.includes(selectedImage.id) ? 'Liked' : 'Like'} ({selectedImage.likes + (likedImages.includes(selectedImage.id) ? 1 : 0)})
                </Button>
                <Button 
                  size="large"
                  onClick={() => window.open(`/quote?event=${selectedImage.category}`, '_blank')}
                >
                  Get Quote for Similar
                </Button>
              </div>
              
              <div className="modal-designer-signature" style={{ marginTop: '20px', textAlign: 'center', fontStyle: 'italic', color: 'var(--accent-gold)' }}>
                — Designed by Satish Koraganji —
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;