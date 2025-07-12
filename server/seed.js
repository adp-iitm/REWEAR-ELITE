const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Item = require('./models/Item');
const Swap = require('./models/Swap');
require('dotenv').config();

// Sample data arrays
const sampleUsers = [
  {
    email: 'admin@rewear.com',
    password: 'admin123',
    name: 'Priya Sharma',
    role: 'admin',
    points: 500,
    bio: 'Platform administrator promoting sustainable fashion in India.',
    location: 'Mumbai, Maharashtra',
    avatar: ''
  },
  {
    email: 'priya@email.com',
    password: 'password123',
    name: 'Priya Patel',
    points: 250,
    bio: 'Fashion enthusiast who loves traditional Indian clothing swaps!',
    location: 'Delhi, NCR',
    avatar: ''
  },
  {
    email: 'rahul@email.com',
    password: 'password123',
    name: 'Rahul Verma',
    points: 180,
    bio: 'Minimalist who believes in quality over quantity.',
    location: 'Bangalore, Karnataka',
    avatar: ''
  },
  {
    email: 'anjali@email.com',
    password: 'password123',
    name: 'Anjali Singh',
    points: 320,
    bio: 'Vintage lover and thrift store regular.',
    location: 'Chennai, Tamil Nadu',
    avatar: ''
  },
  {
    email: 'arjun@email.com',
    password: 'password123',
    name: 'Arjun Reddy',
    points: 95,
    bio: 'Just getting started with sustainable fashion.',
    location: 'Hyderabad, Telangana',
    avatar: ''
  },
  {
    email: 'meera@email.com',
    password: 'password123',
    name: 'Meera Iyer',
    points: 410,
    bio: 'Professional stylist and fashion consultant.',
    location: 'Kolkata, West Bengal',
    avatar: ''
  }
];

const sampleItems = [
  // Tops
  {
    title: 'Silk Kurta',
    description: 'Beautiful silk kurta with intricate embroidery work. Perfect for festive occasions and traditional events.',
    category: 'tops',
    type: 'formal',
    size: 'M',
    condition: 'like-new',
    tags: ['kurta', 'silk', 'traditional', 'festive', 'embroidery'],
    pointsValue: 250,
    brand: 'Anita Dongre',
    color: 'Maroon',
    material: 'Silk',
    location: 'Mumbai, Maharashtra'
  },
  {
    title: 'Cotton Salwar Kameez',
    description: 'Comfortable cotton salwar kameez set perfect for daily wear. Light and breathable fabric.',
    category: 'tops',
    type: 'casual',
    size: 'L',
    condition: 'good',
    tags: ['salwar', 'kameez', 'cotton', 'daily', 'comfortable'],
    pointsValue: 180,
    brand: 'Fabindia',
    color: 'Blue',
    material: 'Cotton',
    location: 'Delhi, NCR'
  },
  {
    title: 'Designer Blouse',
    description: 'Elegant designer blouse with mirror work and traditional motifs. Perfect for pairing with sarees.',
    category: 'tops',
    type: 'formal',
    size: 'S',
    condition: 'like-new',
    tags: ['blouse', 'designer', 'mirror-work', 'traditional'],
    pointsValue: 300,
    brand: 'Sabyasachi',
    color: 'Gold',
    material: 'Silk',
    location: 'Kolkata, West Bengal'
  },
  {
    title: 'Kurti with Palazzo',
    description: 'Modern kurti with palazzo pants set. Perfect blend of traditional and contemporary fashion.',
    category: 'tops',
    type: 'casual',
    size: 'M',
    condition: 'good',
    tags: ['kurti', 'palazzo', 'modern', 'fusion'],
    pointsValue: 200,
    brand: 'Global Desi',
    color: 'Green',
    material: 'Cotton',
    location: 'Bangalore, Karnataka'
  },
  
  // Bottoms
  {
    title: 'Churidar Pants',
    description: 'Traditional churidar pants with elastic waist. Perfect for pairing with kurtas and tunics.',
    category: 'bottoms',
    type: 'casual',
    size: 'M',
    condition: 'good',
    tags: ['churidar', 'traditional', 'elastic', 'comfortable'],
    pointsValue: 120,
    brand: 'Biba',
    color: 'Black',
    material: 'Cotton',
    location: 'Chennai, Tamil Nadu'
  },
  {
    title: 'Lehenga Skirt',
    description: 'Beautiful lehenga skirt with heavy embroidery and mirror work. Perfect for weddings and celebrations.',
    category: 'bottoms',
    type: 'formal',
    size: 'S',
    condition: 'like-new',
    tags: ['lehenga', 'embroidery', 'mirror-work', 'wedding'],
    pointsValue: 400,
    brand: 'Manish Malhotra',
    color: 'Pink',
    material: 'Silk',
    location: 'Mumbai, Maharashtra'
  },
  {
    title: 'Dhoti Pants',
    description: 'Modern dhoti pants with contemporary styling. Perfect for fusion wear and casual occasions.',
    category: 'bottoms',
    type: 'casual',
    size: 'L',
    condition: 'good',
    tags: ['dhoti', 'modern', 'fusion', 'casual'],
    pointsValue: 150,
    brand: 'W for Woman',
    color: 'White',
    material: 'Cotton',
    location: 'Hyderabad, Telangana'
  },
  
  // Dresses
  {
    title: 'Anarkali Suit',
    description: 'Elegant Anarkali suit with beautiful flow and traditional embroidery. Perfect for special occasions.',
    category: 'dresses',
    type: 'formal',
    size: 'M',
    condition: 'like-new',
    tags: ['anarkali', 'suit', 'elegant', 'traditional'],
    pointsValue: 350,
    brand: 'Ritu Kumar',
    color: 'Purple',
    material: 'Silk',
    location: 'Delhi, NCR'
  },
  {
    title: 'Indo-Western Dress',
    description: 'Beautiful fusion dress combining Indian and Western elements. Perfect for modern Indian women.',
    category: 'dresses',
    type: 'casual',
    size: 'S',
    condition: 'good',
    tags: ['fusion', 'indo-western', 'modern', 'versatile'],
    pointsValue: 280,
    brand: 'Masaba',
    color: 'Orange',
    material: 'Cotton',
    location: 'Bangalore, Karnataka'
  },
  
  // Outerwear
  {
    title: 'Embroidered Dupatta',
    description: 'Heavy embroidered dupatta with traditional motifs. Perfect for completing ethnic looks.',
    category: 'outerwear',
    type: 'formal',
    size: 'One Size',
    condition: 'like-new',
    tags: ['dupatta', 'embroidered', 'traditional', 'ethnic'],
    pointsValue: 200,
    brand: 'Raw Mango',
    color: 'Red',
    material: 'Silk',
    location: 'Kolkata, West Bengal'
  },
  {
    title: 'Pashmina Shawl',
    description: 'Luxurious pashmina shawl with fine embroidery. Perfect for winters and special occasions.',
    category: 'outerwear',
    type: 'formal',
    size: 'One Size',
    condition: 'good',
    tags: ['pashmina', 'shawl', 'luxury', 'winter'],
    pointsValue: 500,
    brand: 'Kashmir Loom',
    color: 'Cream',
    material: 'Pashmina',
    location: 'Srinagar, Kashmir'
  },
  
  // Shoes
  {
    title: 'Jutti Footwear',
    description: 'Traditional jutti footwear with beautiful embroidery. Perfect for ethnic wear and special occasions.',
    category: 'shoes',
    type: 'formal',
    size: 'M',
    condition: 'like-new',
    tags: ['jutti', 'traditional', 'embroidery', 'ethnic'],
    pointsValue: 180,
    brand: 'Khadi',
    color: 'Gold',
    material: 'Leather',
    location: 'Jaipur, Rajasthan'
  },
  {
    title: 'Kolhapuri Chappals',
    description: 'Authentic Kolhapuri chappals with traditional craftsmanship. Comfortable and stylish.',
    category: 'shoes',
    type: 'casual',
    size: 'L',
    condition: 'good',
    tags: ['kolhapuri', 'chappals', 'traditional', 'comfortable'],
    pointsValue: 120,
    brand: 'Kolhapuri',
    color: 'Brown',
    material: 'Leather',
    location: 'Kolhapur, Maharashtra'
  },
  
  // Accessories
  {
    title: 'Potli Bag',
    description: 'Traditional potli bag with beautiful embroidery and mirror work. Perfect for ethnic occasions.',
    category: 'accessories',
    type: 'formal',
    size: 'One Size',
    condition: 'good',
    tags: ['potli', 'bag', 'traditional', 'embroidery'],
    pointsValue: 150,
    brand: 'Handcrafted',
    color: 'Red',
    material: 'Silk',
    location: 'Varanasi, Uttar Pradesh'
  },
  {
    title: 'Kundan Necklace Set',
    description: 'Beautiful kundan necklace set with matching earrings. Perfect for traditional and festive occasions.',
    category: 'accessories',
    type: 'formal',
    size: 'One Size',
    condition: 'like-new',
    tags: ['kundan', 'necklace', 'jewelry', 'traditional'],
    pointsValue: 300,
    brand: 'Tanishq',
    color: 'Gold',
    material: 'Kundan',
    location: 'Mumbai, Maharashtra'
  }
];

const sampleSwaps = [
  {
    swapType: 'direct',
    message: 'I love your silk kurta! Would you be interested in swapping for my designer blouse?',
    status: 'pending',
    location: 'Mumbai, Maharashtra'
  },
  {
    swapType: 'points',
    pointsOffered: 250,
    message: 'I\'d love to redeem this Anarkali suit with my points!',
    status: 'accepted',
    location: 'Delhi, NCR'
  },
  {
    swapType: 'direct',
    message: 'Your lehenga skirt would be perfect for my sister\'s wedding. I can offer my silk kurta in exchange.',
    status: 'pending',
    location: 'Bangalore, Karnataka'
  },
  {
    swapType: 'points',
    pointsOffered: 300,
    message: 'Interested in your kundan necklace set! Would like to use points to get it.',
    status: 'completed',
    location: 'Kolkata, West Bengal'
  }
];

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/rewear');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

// Clear existing data
async function clearData() {
  try {
    await User.deleteMany({});
    await Item.deleteMany({});
    await Swap.deleteMany({});
    console.log('Cleared existing data');
  } catch (error) {
    console.error('Error clearing data:', error);
  }
}

// Seed users
async function seedUsers() {
  try {
    // Create users with explicitly hashed passwords
    const createdUsers = [];
    for (const userData of sampleUsers) {
      // Hash password explicitly
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);
      
      const user = new User({
        ...userData,
        password: hashedPassword
      });
      await user.save();
      createdUsers.push(user);
    }
    console.log(`Created ${createdUsers.length} users with hashed passwords`);
    return createdUsers;
  } catch (error) {
    console.error('Error seeding users:', error);
    return [];
  }
}

// Seed items
async function seedItems(users) {
  try {
    const imageMap = {
      'Silk Kurta': 'https://plus.unsplash.com/premium_photo-1691030255948-0276ee6f711e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a3VydGF8ZW58MHx8MHx8fDA%3D',
      'Cotton Salwar Kameez': 'https://media.istockphoto.com/id/1479661623/photo/young-teenager-girl-smiling-and-greeting.webp?a=1&b=1&s=612x612&w=0&k=20&c=xSuNsl_uE-WcqhUvPpy_cBBU6Kr6mZH2uG1L-qDXl4o=',
      'Designer Blouse': 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmxvdXNlfGVufDB8fDB8fHww',
      'Kurti with Palazzo': 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3VydGl8ZW58MHx8MHx8fDA%3D',

      'Churidar Pants': 'https://media.istockphoto.com/id/2214437843/photo/folded-embroidered-beautiful-black-cotton-salwar-kameez-three-piece-set-for-women-on-a-light.webp?a=1&b=1&s=612x612&w=0&k=20&c=RNvmUnkCXm8ahYSZ8471LqMI15OBdZKOm91czyI14oY=',
      'Lehenga Skirt': 'https://images.unsplash.com/photo-1602810317957-34056c4dc3c3?w=500&auto=format&fit=crop&q=80',
      'Dhoti Pants': 'https://images.unsplash.com/photo-1520962914816-7a3f3e2c6c73?w=500&auto=format&fit=crop&q=80',

      'Anarkali Suit': 'https://images.unsplash.com/photo-1618918319542-c34704836a3e?w=500&auto=format&fit=crop&q=80',
      'Indo-Western Dress': 'https://media.istockphoto.com/id/2168583556/photo/bride-in-her-modern-traditional-attire-displaying-her-mehandi.webp?a=1&b=1&s=612x612&w=0&k=20&c=_3tgSpRjpKocO4G1vZITUjBAGR-AZfeEfT0d1NB2_Ok=',

      'Embroidered Dupatta': 'https://images.unsplash.com/photo-1586796971565-d2f5f99d7575?w=500&auto=format&fit=crop&q=80',
      'Pashmina Shawl': 'https://images.unsplash.com/photo-1583743814964-2a4d7f7f1f2f?w=500&auto=format&fit=crop&q=80',

      'Jutti Footwear': 'https://images.unsplash.com/photo-1600181953608-598e3a018fb3?w=500&auto=format&fit=crop&q=80',
      'Kolhapuri Chappals': 'https://images.unsplash.com/photo-1600180758890-1cc916f27f99?w=500&auto=format&fit=crop&q=80',

      'Potli Bag': 'https://images.unsplash.com/photo-1600181982892-3b340b77b52a?w=500&auto=format&fit=crop&q=80',
      'Kundan Necklace Set': 'https://images.unsplash.com/photo-1602810317794-96b0fefbaf6f?w=500&auto=format&fit=crop&q=80'
    };

    const itemsWithOwners = sampleItems.map((item, index) => ({
      ...item,
      owner: users[index % users.length]._id,
      status: 'approved',
      images: [imageMap[item.title] + '?auto=format&fit=crop&w=500&q=80']
    }));

    const createdItems = await Item.insertMany(itemsWithOwners);
    console.log(`Created ${createdItems.length} items with realistic image URLs`);
    return createdItems;
  } catch (error) {
    console.error('Error seeding items:', error);
    return [];
  }
}


// Seed swaps
async function seedSwaps(users, items) {
  try {
    const swapsWithReferences = sampleSwaps.map((swap, index) => ({
      ...swap,
      requester: users[index % users.length]._id,
      itemRequested: items[index % items.length]._id,
      itemOffered: index % 2 === 0 ? items[(index + 1) % items.length]._id : undefined
    }));
    
    const createdSwaps = await Swap.insertMany(swapsWithReferences);
    console.log(`Created ${createdSwaps.length} swaps`);
    return createdSwaps;
  } catch (error) {
    console.error('Error seeding swaps:', error);
    return [];
  }
}

// Main seeding function
async function seedDatabase() {
  try {
    console.log('Starting database seeding...');
    
    await connectDB();
    await clearData();
    
    const users = await seedUsers();
    const items = await seedItems(users);
    const swaps = await seedSwaps(users, items);
    
    console.log('\n✅ Database seeding completed successfully!');
    console.log(`📊 Summary:`);
    console.log(`   - Users: ${users.length}`);
    console.log(`   - Items: ${items.length}`);
    console.log(`   - Swaps: ${swaps.length}`);
    console.log('\n🔑 Admin credentials:');
    console.log(`   Email: admin@rewear.com`);
    console.log(`   Password: admin123`);
    console.log('\n👥 Regular user credentials:');
    console.log(`   Email: priya@email.com (and others)`);
    console.log(`   Password: password123`);
    console.log('\n🇮🇳 Indian Fashion Items Added:');
    console.log(`   - Traditional: Kurtas, Salwar Kameez, Lehengas`);
    console.log(`   - Fusion: Indo-Western Dresses, Kurti with Palazzo`);
    console.log(`   - Accessories: Juttis, Potli Bags, Kundan Jewelry`);
    console.log(`   - Locations: Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seeding
if (require.main === module) {
  seedDatabase();
}

module.exports = { seedDatabase };