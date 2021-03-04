const db = require('../db')
const { Property } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const properties = [
    {
      image:
        'https://photos.zillowstatic.com/fp/3efe398bac873b136c3fdf5a52e92853-uncropped_scaled_within_1344_1008.webp',
      price: '6,950,000',
      street: '9236 Bay Point Dr',
      city: 'Orlando',
      state: 'FL',
      zipCode: '32819',
      bed: '6',
      bath: '9',
      sqft: '9,764',
      description:
        "Constructed to seamlessly blend the best of old-world design and contemporary elegance, this BRAND NEW lakefront home exudes an air of sophistication through perfectly placed mixed materials, panoramic views of Lake Tibet, and an open floor plan. Located within gated Bay Point, just steps from famed Bay Hill golf course, the home is sure to inspire awe as you make your way up the stone paver driveway and through the custom glass entry. Polished stone floors, luxurious grand staircase, custom light fixtures, and a full-size wine cellar tucked within the under-stair space greet you as your eyes are instantly drawn to breathtaking views through floor-to-ceiling windows in the formal living room. The gourmet kitchen is a chef's dream, featuring top-of-the-line appliances, oversized center island, and a large hidden pantry. Just off the kitchen are the breakfast nook and spacious family room with a gas fireplace and custom built-ins. Accordion doors lead to the covered lanai with a full summer kitchen and the heated resort-style infinity-edge swimming pool and spa. With just under 10,000 sq.ft. of living space, the home offers two master suites overlooking the lake (one on each floor), 3 additional en suite bedrooms, elevator, a parlor, home office, and a loft all within the main house, a detached 1 bedroom apartment, pool house, and a separate guest suite with a home gym and sauna. Complete with a 4-car garage, back-up generator, tankless water heater, smart home system, and a private dock with covered boat and jet ski lifts, this is the epitome of luxury living.",
      mlsNum: 'O5854037'
    },
    {
      image:
        'https://photos.zillowstatic.com/fp/0785863dec9b18f33da585151573efd6-uncropped_scaled_within_1344_1008.webp',
      price: '18,900,000',
      street: '580 Sabal Palm Rd',
      city: 'Miami',
      state: 'FL',
      zipCode: '33137',
      bed: '6',
      bath: '9',
      sqft: '11,485',
      description:
        '“La Casa Palma” - An unparalleled contemporary estate impeccably designed by World Renowned Architect Kobi Karp, interiors by Borges+Associates, and built by MV Group. Situated in the private community of Bay Point, the open floor plan makes this the perfect home for entertaining with endless water views. Separate guest house with private entry and sunset deck. Movie theatre, gym, spa, wine cellar, and glass elevator. The backyard of your dreams overlooking the Miami Beach skyline, lap pool and built in chefs summer kitchen. Miami waterfront living at its very finest.',
      mlsNum: 'A10894713'
    },
    {
      image:
        'https://photos.zillowstatic.com/fp/6b2809c454d1bb1bd9b5112a5d57b749-uncropped_scaled_within_1344_1008.webp',
      price: '4,999,000',
      street: '4532 Fairwind Ct',
      city: 'Destin',
      state: 'FL',
      zipCode: '32541',
      bed: '4',
      bath: '6',
      sqft: '5,735',
      description:
        "Built in 2017 by Magnolia Custom Homes, this sprawling bay front home is a legacy retreat primely positioned on one of the most premier homesites in the prestigious gated enclave of Regatta Bay. Featuring over 5,735 sqft of heated and cooled living space including over 10,000 sqft under roof and most notably offering a five car garage with 109' of linear frontage on the gorgeous Choctawhatchee Bay. This custom residence was thoughtfully designed and situated on an elevated homesite with notable features including a 30' linear infinity edge pool and spa as well as a spacious rear lanai which enjoys a northwest orientation for soaking in endless summer sunsets. Other notable features include a custom built dock with boat lift and covered boat & jet ski parking as well as an oversized first floor master suite with spa-like ensuite bathroom complete with dual vanities, a walk-in shower, private water closet and two spacious walk-in master closets. Floor to ceiling hurricane impact resistant windows frame the northern exposure of this home allowing sweeping bay vistas from ever portion of the home including the first floor living room which offers 10' glass sliding door for the perfect indoor/outdoor living as well as an adjacent chef's kitchen and custom built bar which is perfect for entertaining and fully equipped with finely appointed finishes including quartz countertops, stainless Thermador appliances as well as a sleek hidden pantry and scullery. The second level offers multiple guest suites with additional oversized heated and cooled storage as well as a secondary bar and entertaining area all overlooking the pristine waters of the Choctawhatchee Bay. Regatta Bay is a gated enclave surrounded by a world class Golf club as well as easy access to Legendary Marina, Whole Foods at the Destin Commons commercial complex as well as easy beach access along the white sand beaches and emerald green waters of the Gulf of Mexico.",
      mlsNum: '863085'
    }
  ]

  await Property.insertMany(properties)
  console.log('Created Properties Listing!')
}

const run = async () => {
  await main()
  db.close()
}

run()
