import React from 'react';

const Navigation = () => {
    return (
        <div className="bg-gray-50 h-20 px-6 flex items-center">
            <div className="flex-grow text-left">
                <a href="/">
                    <p className="">Storefront</p>
                </a>
            </div>
            <div className="flex-grow text-center">
                <p className="">Shop</p>
            </div>
            <div className="flex-grow text-right">
                <p className="">Cart</p>
            </div>
        </div>
    );
};

export default Navigation;