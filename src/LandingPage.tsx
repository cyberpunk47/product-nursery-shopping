import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div
            className="h-screen w-full bg-[url('/bg-image.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        >
            <div className="grid grid-cols-5 gap-4 w-4/5">
                <div className='col-span-2 flex flex-col items-center justify-center'>
                    <h3 className="text-white text-5xl font-bold text-center">
                        Welcome to Paradise Nursery
                    </h3>
                    <div className="w-20 border-b-4 border-green-500 mt-4" />
                    <h3 className="text-white text-3xl font-bold text-center">Where green meets serenity!</h3>
                    <button type='button' onClick={()=>{
                        navigate('/products');
                    }} className="bg-green-500 text-white py-2 px-4  rounded mt-4 cursor-pointer hover:bg-green-600">Get Started</button>
                </div>


                <div className='col-span-3 text-white text-xl text-justify'>
                    <p className='p-2'>Welcome to Paradise Nursery, where green meets serenity!</p>
                    <p className='p-3'>At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.</p>
                    <p className='p-3'>Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office.</p>
                    <p className='p-3'>Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep.</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
