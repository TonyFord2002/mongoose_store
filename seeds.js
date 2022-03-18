require('dotenv').config()
const mongoose = require('mongoose')
const Product = require('./models/products')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{
    console.log("MONGOOOOO!!")
})
.catch((err)=>{console.log(err)})

const seedCandy= [
        {
          name: 'Twix',
          description: 'Left or Right? Which side are you?',
          img: 'https://m.media-amazon.com/images/I/71IBchCAjdL._SX679_PIbundle-12,TopRight,0,0_SX679SY480SH20_.jpg',
          price: 1.85,
          qty: 12
        }, {
          name: 'Candy Corn',
          description: 'Love it or hate it. Its always there.',
          img: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F10%2F28%2Fode-to-candy-corn-FT-BLOG1020.jpg',
          price: 2.50,
          qty: 16
        }, {
          name: 'Snickers',
          description: 'Ooey gooey nutty goodness.',
          img: 'https://www.candywarehouse.com/item-images/127952-01_snickers-candy-bars-48-piece-box.jpg',
          price: 2.00,
          qty: 15
        }, {
          name: 'Laffy Taffy',
          description: 'One bite and your teeth stick together forever.',
          img: 'https://www.pearlscandynh.com/prodimages/assortedlaffytaffy1b.jpg',
          price: 2.65,
          qty: 12
        }, {
          name: 'Milky Way',
          description: 'Caramel and Nougat smooth',
          img: 'https://sites.psu.edu/tota137/files/2019/02/Unknown-2-2o62jo7.jpeg',
          price: 1.99,
          qty: 15
        }, {
          name: 'Tootsie Roll',
          description: 'Oldie but goldy, chocolatey rolly',
          img: 'https://www.mastgeneralstore.com/prodimages/9050-DEFAULT-l.jpg',
          price: 1.99,
          qty: 15
        }
          
      ]

const seedDB = async()=>{
    await Product.insertMany(seedCandy)
}

seedDB().then(() =>{
    mongoose.connection.close()
})