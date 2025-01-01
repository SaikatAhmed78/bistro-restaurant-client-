 
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionTitle from '../../Common/SectionTitle';
import MenuItem from '../../Common/MenuItem';
import useMenu from '../../Hooks/useMenu';


const Category3 = () => {

    const [menu] = useMenu();

    const popularItem = menu.filter(item => item.category === 'popular');

    return (
        <div className="p-5 flex flex-col items-center justify-center text-gray-800">
            <SectionTitle
                subHeading="---Check it out---"
                heading="FROM OUR MENU"
            />
            <div className="text-center text-black mb-12">
                <p className="text-lg font-light max-w-3xl mx-auto">
                    Discover a world of flavors with our carefully crafted dishes, made with the finest ingredients and a touch of culinary passion.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularItem.map(item => (
                    <MenuItem
                        key={item._id}
                        item={item}
                    />
                ))}
            </div>

           <Link to={`/shop`}>
           <button className="mt-8 btn btn-outline  text-black font-bold border-0 border-b-4 rounded-lg shadow-lg flex items-center space-x-2">
                <span>View Full Menu</span>
                <FaChevronRight />
            </button>
           </Link>
        </div>
    );
};

export default Category3;
