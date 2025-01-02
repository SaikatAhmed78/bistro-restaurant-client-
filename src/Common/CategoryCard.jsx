import { FaCartPlus } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxios from '../Hooks/useAxios';
import useCart from '../Hooks/useCart';

const CategoryCard = ({ item }) => {

    const { name, image, recipe, price, _id } = item;

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const axiosSecure = useAxios();
    const [refetch] = useCart();

    const handleAddToCart = ()=> {
        if (user && user.email) {

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            };

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: 'Added to Cart!',
                            text: `Food has been added to your cart.`,
                            icon: 'success',
                            confirmButtonColor: '#3085d6', confirmButtonText: 'Continue Shopping'
                        });
                        refetch();
                    }
                })

        } else {
            Swal.fire({
                title: 'Need to login',
                text: "You need to login to add items to the cart. Do you want to login now?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, login',
                cancelButtonText: 'No, thanks'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className="bg-white p-6 rounded-l hover:shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div>
                <img src={image} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <div className="text-center">
                    <h3 className="uppercase font-bold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">{name}</h3>
                    <p className="text-gray-700 mb-2">{recipe}</p>
                    <p className="text-gray-900 font-bold mb-4">${price}</p>
                </div>
            </div>
            <button
                onClick={handleAddToCart}
                className="btn btn-outline text-black font-bold border-0 border-b-4 rounded-lg shadow-lg flex items-center space-x-2 py-2 px-4 justify-center">
                <FaCartPlus />
                <span>Add to Cart</span>
            </button>
        </div>
    );
};

export default CategoryCard;
