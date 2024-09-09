import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import SearchBarIcon from '../SearchBar';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState({
        category: false,
        brands: false,
        price: false,
        size: false
    });

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    const toggleSubMenu = (menu) => {
        setSubMenuOpen(prevState => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
    };

    const onCategoryChange = (category) => {
        console.log('Selected category:', category);
    };

    useEffect(() => {
        if (menuOpen || searchOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [menuOpen, searchOpen]);

    return (
        <div className="container flex flex-col mx-auto draggable">
            <div className="relative flex flex-wrap items-center justify-between w-full bg-white group py-7 shrink-0">
                <div className="flex items-center">
                    <Link to={'/'}>
                        <img
                            className="w-[50px] rounded-2xl"
                            src="https://yt3.googleusercontent.com/HnAnUZS7d8LFtPHaHRtPH9nMoUmrsBBy_FDD-T-YQIycPW55peuWo1NO_rxPIswDbukXYlk7=s160-c-k-c0x00ffffff-no-rj"
                            alt=""
                        />
                    </Link>
                    <div className="flex items-center ml-3 shadow-lg w-[250px] rounded-full p-4 hidden md:flex">
                        <input className="h-full outline-none" placeholder="Search ...."></input>
                    </div>
                </div>
                <div className="items-center justify-between hidden gap-12 text-black md:flex">
                    <Link to={'/Product'}
                        className="text-sm text-dark-grey-700 hover:text-blue-400 font-bold"
                    >
                        Product
                    </Link>
                    <Link to={'/'}
                        className="text-sm text-dark-grey-700 hover:text-blue-400 font-bold"
                    >
                        Features
                    </Link>
                    <Link to={'/'}
                        className="text-sm text-dark-grey-700 hover:text-blue-400 font-bold"
                    >
                        Pricing
                    </Link>
                    <Link to={'/'}
                        className="text-sm text-dark-grey-700 hover:text-blue-400 font-bold"
                    >
                        Company
                    </Link>
                </div>
                <div className="items-center hidden gap-8 md:flex">
                    <button
                        className="flex items-center text-sm text-gray-800 hover:text-blue-400 font-bold transition duration-300">
                        Log In
                    </button>
                    <button
                        className="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-blue-500 hover:text-white transition duration-300">
                        Sign Up
                    </button>
                </div>
                <div className="flex items-center md:hidden">
                    <button onClick={toggleSearch} className="mr-4">
                        <SearchBarIcon/>
                    </button>
                    <button onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 3 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 3 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
                                fill="black"
                            />
                        </svg>
                    </button>
                </div>
                {searchOpen && (
                    <div className="fixed inset-0 z-50 flex flex-col items-start justify-start bg-white p-4 overflow-y-auto">
                        <div className="flex items-center w-full mb-4">
                            <input
                                className="w-[350px] p-2 border border-gray-300 rounded-lg"
                                placeholder="Search ...."
                            />
                            <button onClick={toggleSearch} className="ml-2 text-gray-600">
                                Cancel
                            </button>
                        </div>
                        <div className="w-full">
                            <p className="text-gray-500 mb-2">Popular Search Terms</p>
                            <ul>
                                <li className="mb-2">Air Force 1</li>
                                <li className="mb-2">Jordan</li>
                                <li className="mb-2">Air Max</li>
                                <li className="mb-2">Blazer</li>
                            </ul>
                        </div>
                    </div>
                )}
                {menuOpen && (
                    <div className="fixed inset-0 z-50 flex flex-col items-start justify-start bg-white p-4 overflow-y-auto">
                        <button
                            className="self-end mb-4 p-2"
                            onClick={toggleMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M6 18L18 6M6 6l12 12"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <div className="w-full">
                            {/* <button
                                className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg"
                                onClick={() => toggleSubMenu('category')}
                            >
                                <span>Category</span>
                                <svg
                                    className={`w-4 h-4 transform transition-transform ${subMenuOpen.category ? 'rotate-90' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            {subMenuOpen.category && (
                                <div className="w-full pl-4 mt-2">
                                    <button
                                        className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg"
                                        onClick={() => toggleSubMenu('brands')}
                                    >
                                        <span>Brands</span>
                                        <svg
                                            className={`w-4 h-4 transform transition-transform ${subMenuOpen.brands ? 'rotate-90' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    {subMenuOpen.brands && (
                                        <div className="ml-4 mt-2">
                                            <div className="flex items-center mb-2 ml-4">
                                                <input type="checkbox" id="brand1" className="mr-2" onChange={() => onCategoryChange('Brand 1')} />
                                                <label htmlFor="brand1">Brand 1</label>
                                                <span className="ml-auto">(10)</span>
                                            </div>
                                            <div className="flex items-center mb-2 ml-4">
                                                <input type="checkbox" id="brand2" className="mr-2" onChange={() => onCategoryChange('Brand 2')} />
                                                <label htmlFor="brand2">Brand 2</label>
                                                <span className="ml-auto">(15)</span>
                                            </div>
                                        </div>
                                    )}
                                    <button
                                        className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg mt-2"
                                        onClick={() => toggleSubMenu('price')}
                                    >
                                        <span>Price</span>
                                        <svg
                                            className={`w-4 h-4 transform transition-transform ${subMenuOpen.price ? 'rotate-90' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    {subMenuOpen.price && (<div className="ml-4 mt-2">
                                        <div className="flex items-center mb-2 ml-4">
                                            <input type="checkbox" id="price1" className="mr-2" onChange={() => onCategoryChange('Under $50')} />
                                            <label htmlFor="price1">Under $50</label>
                                            <span className="ml-auto">(20)</span>
                                        </div>
                                        <div className="flex items-center mb-2 ml-4">
                                            <input type="checkbox" id="price2" className="mr-2" onChange={() => onCategoryChange('$50 to $100')} />
                                            <label htmlFor="price2">$50 to $100</label>
                                            <span className="ml-auto">(30)</span>
                                        </div>
                                    </div>
                                    )}
                                    <button
                                        className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg mt-2"
                                        onClick={() => toggleSubMenu('size')}
                                    >
                                        <span>Size</span>
                                        <svg
                                            className={`w-4 h-4 transform transition-transform ${subMenuOpen.size ? 'rotate-90' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    {subMenuOpen.size && (
                                        <div className="ml-4 mt-2">
                                            <div className="flex items-center mb-2 ml-4">
                                                <input type="checkbox" id="size1" className="mr-2" onChange={() => onCategoryChange('Small')} />
                                                <label htmlFor="size1">Small</label>
                                                <span className="ml-auto">(25)</span>
                                            </div>
                                            <div className="flex items-center mb-2 ml-4">
                                                <input type="checkbox" id="size2" className="mr-2" onChange={() => onCategoryChange('Medium')} />
                                                <label htmlFor="size2">Medium</label>
                                                <span className="ml-auto">(35)</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )} */}
                            <Link to={'/Product'}
                                className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg mt-2"
                            >
                                Product
                            </Link>
                            <Link to={'/'}
                                className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg mt-2"
                            >
                                Features
                            </Link>
                            <Link to={'/'}
                                className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg mt-2"
                            >
                                Pricing
                            </Link>
                            <Link to={'/'}
                                className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg mt-2"
                            >
                                Company
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;