import React from 'react';

const Navigation = () => {
    return (
        <div className="h-20 px-8 flex items-center border-b">
            <div className="flex-grow text-left">
                <a href="/">
                    <p className="text-md font-medium text-gray-900">React Storefront</p>
                </a>
            </div>
            <div className="flex-grow flex">
                <div className="flex-grow" />
                <button className="block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="24px" viewBox="0 0 24 24" stroke="#111827">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Navigation;