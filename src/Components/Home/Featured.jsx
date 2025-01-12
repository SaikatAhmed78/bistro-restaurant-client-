import './featured.css'
import overlayImage from '../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div className="featured-background bg-fixed rounded-lg">
            <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">

                <img src={overlayImage} className="w-1/2 md:w-1/3 rounded-lg shadow-lg" />

                <div>

                    <h2 className="text-2xl font-bold mb-4">Today's Special</h2>
                    <h3 className="text-4xl font-bold mb-4">FEATURED DISH</h3>

                    <p className="text-lg mb-4">April 14, 2024</p>
                    <h4 className="text-2xl font-bold mb-4">Delight in Every Bite</h4>
                    <p className="text-lg mb-6">
                        Experience the exquisite taste of our featured dish, crafted with the finest ingredients and unparalleled culinary expertise. Perfect for any occasion, this dish promises to leave you craving for more.
                    </p>

                    <button
                        className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                        <span
                            className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-primary rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span
                            className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-primary rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span
                            className="relative text-primary transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">READ MORE </span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Featured;
