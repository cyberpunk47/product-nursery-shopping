import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { getCartCount } = useCart();
    const cartCount = getCartCount();

    return (
        <nav className='w-full bg-green-950 flex items-center justify-between'>
            <div className='flex items-center justify-center cursor-pointer' onClick={() => navigate('/')}>
                <img src="./logo.png" alt="Paradise Nursery Logo" className='block w-25 h-22 object-contain mix-blend-color-burn' />
                <p className='text-black text-2xl font-bold'>Paradise Nursery
                    <p className='text-black text-sm italic'>Where Green Meets Serenity</p>
                </p>
            </div>
            <div className='cursor-pointer' onClick={() => navigate('/products')}>
                <p className='text-black text-2xl font-bold hover:text-green-700 transition-colors'>Plants</p>
            </div>
            <div className='ml-2 p-2'>
                <IconButton onClick={() => navigate("/cart")} aria-label="cart" sx={{ color: 'white' }}>
                    <Badge badgeContent={cartCount} color="error">
                        <ShoppingCartIcon sx={{ fontSize: 35 }} />
                    </Badge>
                </IconButton>
            </div>
        </nav>
    )
}

export default Navbar