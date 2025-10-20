import Navbar from './Navbar'
import { useCart } from './CartContext'

interface Plant {
  name: string
  price: number
  description: string
  image: string
  onSale: boolean
}

interface PlantCategory {
  name: string
  plants: Plant[]
}

const plantCategories: PlantCategory[] = [
  {
    name: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        price: 180,
        description: 'Produces oxygen at night, improving air quality.',
        image: '/rose.png',
        onSale: true
      },
      {
        name: 'Spider Plant',
        price: 120,
        description: 'Filters formaldehyde and xylene from the air.',
        image: '/lily.png',
        onSale: true
      },
      {
        name: 'Peace Lily',
        price: 150,
        description: 'Removes mold spores and purifies the air.',
        image: '/lily.png',
        onSale: true
      },
      {
        name: 'Boston Fern',
        price: 160,
        description: 'Adds humidity to the air and removes toxins.',
        image: '/rose.png',
        onSale: true
      },
      {
        name: 'Rubber Plant',
        price: 170,
        description: 'Easy to care for and effective at removing toxins.',
        image: '/rose.png',
        onSale: true
      },
      {
        name: 'Aloe Vera',
        price: 140,
        description: 'Purifies the air and has healing properties for skin.',
        image: '/lily.png',
        onSale: true
      }
    ]
  },
  {
    name: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        price: 200,
        description: 'Calming fragrance, perfect for relaxation and aromatherapy.',
        image: '/lavendar.png',
        onSale: true
      },
      {
        name: 'Jasmine',
        price: 180,
        description: 'Sweet scent that promotes calm and relaxation.',
        image: '/jasmine.png',
        onSale: true
      },
      {
        name: 'Rosemary',
        price: 150,
        description: 'Refreshing aroma, also useful in cooking.',
        image: '/rose.png',
        onSale: true
      },
      {
        name: 'Mint',
        price: 120,
        description: 'Invigorating scent, great for teas and indoor freshness.',
        image: '/rose.png',
        onSale: true
      },
      {
        name: 'Lemon Balm',
        price: 140,
        description: 'Citrus scent, helps reduce stress and aids sleep.',
        image: '/sunflower.png',
        onSale: true
      },
      {
        name: 'Hyacinth',
        price: 190,
        description: 'Beautiful flowering plant with a fragrant aroma.',
        image: '/hibiscus.png',
        onSale: true
      }
    ]
  },
  {
    name: 'Insect Repellent Plants',
    plants: [
      {
        name: 'Oregano',
        price: 100,
        description: 'Deters insects naturally; also a culinary herb.',
        image: '/rose.png',
        onSale: false
      },
      {
        name: 'Marigold',
        price: 110,
        description: 'Bright flowers, repels mosquitoes and pests.',
        image: '/marigold.png',
        onSale: false
      },
      {
        name: 'Geraniums',
        price: 150,
        description: 'Keeps insects away while adding scent to your garden.',
        image: '/rose.png',
        onSale: false
      },
      {
        name: 'Basil',
        price: 120,
        description: 'Repels flies and mosquitoes; edible as well.',
        image: '/rose.png',
        onSale: false
      },
      {
        name: 'Catnip',
        price: 130,
        description: 'Repels mosquitoes and attracts cats.',
        image: '/tulips.png',
        onSale: false
      }
    ]
  },
  {
    name: 'Medicinal Plants',
    plants: [
      {
        name: 'Aloe Vera',
        price: 140,
        description: 'Soothes skin ailments and boosts healing.',
        image: '/lily.png',
        onSale: false
      },
      {
        name: 'Echinacea',
        price: 160,
        description: 'Strengthens immunity and fights colds.',
        image: '/sunflower.png',
        onSale: false
      },
      {
        name: 'Peppermint',
        price: 130,
        description: 'Relieves digestive issues and headaches.',
        image: '/rose.png',
        onSale: false
      },
      {
        name: 'Lemon Balm',
        price: 140,
        description: 'Calms nerves and promotes relaxation.',
        image: '/sunflower.png',
        onSale: false
      },
      {
        name: 'Chamomile',
        price: 150,
        description: 'Helps sleep and reduces anxiety.',
        image: '/daisy.png',
        onSale: false
      },
      {
        name: 'Calendula',
        price: 120,
        description: 'Heals wounds and soothes skin irritations.',
        image: '/marigold.png',
        onSale: false
      }
    ]
  },
  {
    name: 'Low Maintenance Plants',
    plants: [
      {
        name: 'ZZ Plant',
        price: 200,
        description: 'Thrives in low light and needs minimal care.',
        image: '/rose.png',
        onSale: false
      },
      {
        name: 'Pothos',
        price: 100,
        description: 'Very resilient, grows in various conditions.',
        image: '/rose.png',
        onSale: false
      },
      {
        name: 'Snake Plant',
        price: 180,
        description: 'Requires infrequent watering; hardy and tough.',
        image: '/rose.png',
        onSale: false
      },
      {
        name: 'Cast Iron Plant',
        price: 160,
        description: 'Extremely hardy; tolerates neglect and low light.',
        image: '/rose.png',
        onSale: false
      },
      {
        name: 'Succulents',
        price: 150,
        description: 'Drought-tolerant with unique shapes and colors.',
        image: '/lotus.png',
        onSale: false
      },
      {
        name: 'Aglaonema',
        price: 190,
        description: 'Low care indoor plant with vibrant foliage.',
        image: '/china_rose.png',
        onSale: false
      }
    ]
  }
]

const ProductCard = ({ plant }: { plant: Plant }) => {
  const { addToCart, isInCart } = useCart()

  // Create unique ID for each plant (using name as ID)
  const plantId = plant.name.toLowerCase().replace(/\s+/g, '-')
  const inCart = isInCart(plantId)

  const handleAddToCart = () => {
    addToCart({
      id: plantId,
      name: plant.name,
      price: plant.price,
      image: plant.image
    })
  }

  return (
    <div className='bg-white rounded-lg shadow-md p-6 relative hover:shadow-xl transition-shadow duration-300'>
      {plant.onSale && (
        <div className='absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded font-bold text-sm'>
          SALE
        </div>
      )}

      <div className='mb-4'>
        <h3 className='text-xl font-bold text-gray-800 mb-3'>{plant.name}</h3>
        <div className='w-full h-48 flex items-center justify-center bg-gray-50 rounded'>
          <img
            src={plant.image}
            alt={plant.name}
            className='max-h-full max-w-full object-contain'
          />
        </div>
      </div>

      <p className='text-red-500 text-2xl font-bold mb-3'>₹{plant.price}</p>
      <p className='text-gray-600 text-sm mb-4 min-h-[40px]'>{plant.description}</p>

      <button
        onClick={handleAddToCart}
        disabled={inCart}
        className={`w-full font-semibold py-2 px-4 rounded transition-colors duration-200 ${inCart
            ? 'bg-gray-400 cursor-not-allowed text-white'
            : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
      >
        {inCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}

const ProductListingPage = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />

      <div className='container mx-auto px-4 py-8'>
        {plantCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className='mb-12'>
            {/* Category Header */}
            <div className='flex items-center justify-center mb-8'>
              <div className='text-center'>
                <div className='border-t-2 border-gray-800 w-48 mx-auto mb-2'></div>
                <h2 className='text-3xl font-bold text-gray-800 px-4'>
                  {category.name}
                </h2>
                <div className='border-b-2 border-gray-800 w-48 mx-auto mt-2'></div>
              </div>
            </div>

            {/* Product Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {category.plants.map((plant, plantIndex) => (
                <ProductCard key={plantIndex} plant={plant} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductListingPage