import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="border-t border-gray-700 bg-gray-900">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 pb-4 pt-4">
                    <div className="m-4">
                        <div className="pt-4 text-center sm:text-left">
                            <a href="/">
                                <p className="text-md font-medium text-gray-50">React Storefront</p>
                            </a>
                        </div>
                    </div>
                    <div className="m-4">
                        <div className="pt-4 text-center sm:text-left">
                            <p className="text-md font-medium text-gray-400">Navigation</p>
                            <div className="pt-6 pb-2 flex flex-col">
                                <a href="/" className="py-2 text-md font-normal text-gray-500">Products</a>
                                <a href="/" className="py-2 text-md font-normal text-gray-500">About</a>
                                <a href="/" className="py-2 text-md font-normal text-gray-500">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="m-4">
                        <div className="pt-4 text-center sm:text-left">
                            <p className="text-md font-medium text-gray-400">Extras</p>
                            <div className="pt-6 pb-2 flex flex-col">
                                <a href="/" className="py-2 text-md font-normal text-gray-500">Shipping & Returns</a>
                                <a href="/" className="py-2 text-md font-normal text-gray-500">FAQ</a>
                            </div>
                        </div>
                    </div>
                    <div className="m-4">
                        <div className="pt-4 text-center sm:text-left">
                            <p className="text-md font-medium text-gray-400">Socials</p>
                            <div className="pt-6 pb-2 flex flex-col">
                                <a href="/" className="py-2 text-md font-normal text-gray-500">Facebook</a>
                                <a href="/" className="py-2 text-md font-normal text-gray-500">Instagram</a>
                                <a href="/" className="py-2 text-md font-normal text-gray-500">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 bg-gray-900">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 px-4 pb-4">
                    <div className="m-4">
                        <div className="pt-4 text-center sm:text-left">
                            <p className="text-md font-medium text-gray-400">Version 1.0.0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;