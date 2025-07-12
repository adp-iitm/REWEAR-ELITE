const mongoose = require('mongoose');
const User = require('./models/User');
const Item = require('./models/Item');
const Swap = require('./models/Swap');
require('dotenv').config();

// Sample data arrays
const sampleUsers = [
  {
    email: 'admin@rewear.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
    points: 500,
    bio: 'Platform administrator helping to promote sustainable fashion.',
    location: 'New York, NY',
    avatar: ''
  },
  {
    email: 'sarah@email.com',
    password: 'password123',
    name: 'Sarah Johnson',
    points: 250,
    bio: 'Fashion enthusiast who loves sustainable clothing swaps!',
    location: 'Los Angeles, CA',
    avatar: ''
  },
  {
    email: 'mike@email.com',
    password: 'password123',
    name: 'Mike Chen',
    points: 180,
    bio: 'Minimalist who believes in quality over quantity.',
    location: 'San Francisco, CA',
    avatar: ''
  },
  {
    email: 'emma@email.com',
    password: 'password123',
    name: 'Emma Rodriguez',
    points: 320,
    bio: 'Vintage lover and thrift store regular.',
    location: 'Austin, TX',
    avatar: ''
  },
  {
    email: 'david@email.com',
    password: 'password123',
    name: 'David Kim',
    points: 95,
    bio: 'Just getting started with sustainable fashion.',
    location: 'Seattle, WA',
    avatar: ''
  },
  {
    email: 'lisa@email.com',
    password: 'password123',
    name: 'Lisa Thompson',
    points: 410,
    bio: 'Professional stylist and fashion consultant.',
    location: 'Miami, FL',
    avatar: ''
  }
];

const sampleItems = [
  // Tops
  {
    title: 'Vintage Denim Jacket',
    description: 'Classic 90s denim jacket in excellent condition. Perfect for layering and adds a cool vintage vibe to any outfit.',
    category: 'tops',
    type: 'vintage',
    size: 'M',
    condition: 'good',
    tags: ['denim', 'vintage', 'jacket', '90s'],
    pointsValue: 150,
    brand: 'Levi\'s',
    color: 'Blue',
    material: 'Denim',
    location: 'Los Angeles, CA'
  },
  {
    title: 'Silk Blouse',
    description: 'Elegant silk blouse perfect for office wear or special occasions. Soft fabric and flattering cut.',
    category: 'tops',
    type: 'formal',
    size: 'S',
    condition: 'like-new',
    tags: ['silk', 'blouse', 'formal', 'office'],
    pointsValue: 200,
    brand: 'Banana Republic',
    color: 'White',
    material: 'Silk',
    location: 'San Francisco, CA'
  },
  {
    title: 'Graphic T-Shirt',
    description: 'Comfortable cotton t-shirt with a cool graphic print. Great for casual everyday wear.',
    category: 'tops',
    type: 'casual',
    size: 'L',
    condition: 'good',
    tags: ['t-shirt', 'graphic', 'casual', 'cotton'],
    pointsValue: 80,
    brand: 'Urban Outfitters',
    color: 'Black',
    material: 'Cotton',
    location: 'Austin, TX'
  },
  {
    title: 'Cashmere Sweater',
    description: 'Luxurious cashmere sweater in a beautiful emerald green. Perfect for cold weather and very soft.',
    category: 'tops',
    type: 'casual',
    size: 'M',
    condition: 'like-new',
    tags: ['cashmere', 'sweater', 'winter', 'luxury'],
    pointsValue: 300,
    brand: 'J.Crew',
    color: 'Green',
    material: 'Cashmere',
    location: 'New York, NY'
  },
  
  // Bottoms
  {
    title: 'High-Waisted Jeans',
    description: 'Trendy high-waisted jeans with a flattering fit. Great for creating a vintage-inspired look.',
    category: 'bottoms',
    type: 'casual',
    size: 'M',
    condition: 'good',
    tags: ['jeans', 'high-waisted', 'vintage', 'trendy'],
    pointsValue: 120,
    brand: 'Madewell',
    color: 'Blue',
    material: 'Denim',
    location: 'Los Angeles, CA'
  },
  {
    title: 'Pencil Skirt',
    description: 'Professional pencil skirt perfect for the office. Classic black color goes with everything.',
    category: 'bottoms',
    type: 'formal',
    size: 'S',
    condition: 'like-new',
    tags: ['skirt', 'pencil', 'formal', 'office'],
    pointsValue: 180,
    brand: 'Ann Taylor',
    color: 'Black',
    material: 'Wool',
    location: 'San Francisco, CA'
  },
  {
    title: 'Cargo Pants',
    description: 'Comfortable cargo pants with multiple pockets. Great for outdoor activities or casual wear.',
    category: 'bottoms',
    type: 'casual',
    size: 'L',
    condition: 'good',
    tags: ['cargo', 'pants', 'outdoor', 'pockets'],
    pointsValue: 100,
    brand: 'Patagonia',
    color: 'Olive',
    material: 'Cotton',
    location: 'Seattle, WA'
  },
  
  // Dresses
  {
    title: 'Summer Floral Dress',
    description: 'Beautiful floral print dress perfect for summer. Light and airy fabric, great for warm weather.',
    category: 'dresses',
    type: 'casual',
    size: 'M',
    condition: 'good',
    tags: ['dress', 'floral', 'summer', 'casual'],
    pointsValue: 140,
    brand: 'Free People',
    color: 'Multi',
    material: 'Cotton',
    location: 'Miami, FL'
  },
  {
    title: 'Cocktail Dress',
    description: 'Elegant cocktail dress perfect for special occasions. Sophisticated design with a flattering silhouette.',
    category: 'dresses',
    type: 'formal',
    size: 'S',
    condition: 'like-new',
    tags: ['dress', 'cocktail', 'formal', 'elegant'],
    pointsValue: 250,
    brand: 'Reformation',
    color: 'Red',
    material: 'Silk',
    location: 'New York, NY'
  },
  
  // Outerwear
  {
    title: 'Wool Coat',
    description: 'Warm wool coat perfect for winter. Classic design that never goes out of style.',
    category: 'outerwear',
    type: 'casual',
    size: 'L',
    condition: 'good',
    tags: ['coat', 'wool', 'winter', 'classic'],
    pointsValue: 220,
    brand: 'J.Crew',
    color: 'Navy',
    material: 'Wool',
    location: 'Seattle, WA'
  },
  {
    title: 'Leather Jacket',
    description: 'Classic leather jacket with a rock and roll vibe. Timeless piece that adds edge to any outfit.',
    category: 'outerwear',
    type: 'casual',
    size: 'M',
    condition: 'good',
    tags: ['leather', 'jacket', 'classic', 'edgy'],
    pointsValue: 280,
    brand: 'AllSaints',
    color: 'Black',
    material: 'Leather',
    location: 'Los Angeles, CA'
  },
  
  // Shoes
  {
    title: 'Ankle Boots',
    description: 'Stylish ankle boots perfect for fall and winter. Comfortable heel height and versatile design.',
    category: 'shoes',
    type: 'casual',
    size: 'M',
    condition: 'like-new',
    tags: ['boots', 'ankle', 'fall', 'versatile'],
    pointsValue: 160,
    brand: 'Steve Madden',
    color: 'Brown',
    material: 'Leather',
    location: 'Austin, TX'
  },
  {
    title: 'Running Shoes',
    description: 'Comfortable running shoes in great condition. Perfect for workouts or casual wear.',
    category: 'shoes',
    type: 'sportswear',
    size: 'L',
    condition: 'good',
    tags: ['running', 'shoes', 'athletic', 'comfortable'],
    pointsValue: 120,
    brand: 'Nike',
    color: 'White',
    material: 'Mesh',
    location: 'San Francisco, CA'
  },
  
  // Accessories
  {
    title: 'Leather Handbag',
    description: 'Classic leather handbag with plenty of storage space. Perfect for everyday use.',
    category: 'accessories',
    type: 'casual',
    size: 'One Size',
    condition: 'good',
    tags: ['handbag', 'leather', 'classic', 'everyday'],
    pointsValue: 180,
    brand: 'Coach',
    color: 'Brown',
    material: 'Leather',
    location: 'New York, NY'
  },
  {
    title: 'Silk Scarf',
    description: 'Beautiful silk scarf with an elegant pattern. Perfect for adding a pop of color to any outfit.',
    category: 'accessories',
    type: 'formal',
    size: 'One Size',
    condition: 'like-new',
    tags: ['scarf', 'silk', 'elegant', 'accessory'],
    pointsValue: 90,
    brand: 'Hermès',
    color: 'Multi',
    material: 'Silk',
    location: 'Miami, FL'
  }
];

const sampleSwaps = [
  {
    swapType: 'direct',
    message: 'I love your vintage denim jacket! Would you be interested in swapping for my leather jacket?',
    status: 'pending',
    location: 'Los Angeles, CA'
  },
  {
    swapType: 'points',
    pointsOffered: 200,
    message: 'I\'d love to redeem this silk blouse with my points!',
    status: 'accepted',
    location: 'San Francisco, CA'
  },
  {
    swapType: 'direct',
    message: 'Your wool coat would be perfect for my winter wardrobe. I can offer my cashmere sweater in exchange.',
    status: 'pending',
    location: 'Seattle, WA'
  },
  {
    swapType: 'points',
    pointsOffered: 150,
    message: 'Interested in your leather handbag! Would like to use points to get it.',
    status: 'completed',
    location: 'New York, NY'
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
    const createdUsers = await User.insertMany(sampleUsers);
    console.log(`Created ${createdUsers.length} users`);
    return createdUsers;
  } catch (error) {
    console.error('Error seeding users:', error);
    return [];
  }
}

// Seed items
async function seedItems(users) {
  try {
    const itemsWithOwners = sampleItems.map((item, index) => ({
      ...item,
      owner: users[index % users.length]._id,
      status: 'approved',
      images: ['https://via.placeholder.com/400x500/cccccc/666666?text=' + encodeURIComponent(item.title)]
    }));
    
    const createdItems = await Item.insertMany(itemsWithOwners);
    console.log(`Created ${createdItems.length} items`);
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
    console.log(`   Email: sarah@email.com (and others)`);
    console.log(`   Password: password123`);
    
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