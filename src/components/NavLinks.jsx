"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const NavLinks = () => {
    const [active, setActive] = useState('');
    const router = useRouter();

    useEffect(() => {
        console.log(window.location.pathname)
        setActive(window.location.pathname)
    }, [router.pathname]);

    const handleActive = (linkPath) => {
        
        setActive(linkPath)
        
    };

    return (
        <div className="flex w-full h-280 pt-11">
            <div className="w-full flex justify-center items-center">
                <ul className="flex flex-wrap justify-between text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li className="me-2">
                        <Link href="/" onClick={() => handleActive('/LuckyDraw/')} aria-current={active === '/LuckyDraw/' ? 'page' : undefined} className={`inline-block p-1 md:p-4 ${active === '/LuckyDraw/' ? 'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500' : 'text-gray-500'}`}>Add Names</Link>
                    </li>
                    <li className="me-2">
                        <Link href="/names" onClick={() => handleActive('/LuckyDraw/names')} aria-current={active === '/LuckyDraw/names' ? 'page' : undefined} className={`inline-block p-1 md:p-4 ${active === '/LuckyDraw/names' ? 'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500' : 'text-gray-500'}`}>Names</Link>
                    </li>
                    <li className="me-2">
                        <Link href="/lucky-draw" onClick={() => handleActive('/LuckyDraw/lucky-draw')} aria-current={active === '/LuckyDraw/lucky-draw' ? 'page' : undefined} className={`inline-block p-1 md:p-4 ${active === '/LuckyDraw/lucky-draw' ? 'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500' : 'text-gray-500'}`}>Lucky Draw</Link>
                    </li>
                    <li className="me-2">
                        <Link href="/winners" onClick={() => handleActive('/LuckyDraw/winners')} aria-current={active === '/LuckyDraw/winners' ? 'page' : undefined} className={`inline-block p-1 md:p-4 ${active === '/LuckyDraw/winners' ? 'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500' : 'text-gray-500'}`}>Winners</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavLinks;
