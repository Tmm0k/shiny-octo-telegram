'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function NmxHeader() {
    const [productsOpen, setProductsOpen] = useState(false);
    const [vetsOpen, setVetsOpen] = useState(false);
    const productsRef = useRef(null);
    const vetsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (productsRef.current && !productsRef.current.contains(event.target)) {
                setProductsOpen(false);
            }
            if (vetsRef.current && !vetsRef.current.contains(event.target)) {
                setVetsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return (
        <header className="hidden lg:block bg-[#f0f0f0] border-b border-[#E5E7EB]">
            <div className="max-w-[1280px] mx-auto px-8">
                <div className="h-[52px] flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Image
                            src="/nmx-top-brand-dt.svg"
                            alt="Nutramax Logo"
                            width={120}
                            height={30}
                            priority
                        />
                        <div className="relative" ref={productsRef}>
                            <button 
                                onClick={() => setProductsOpen(!productsOpen)}
                                className="text-[12px] text-[#4B5563] hover:text-[#1F2937] font-medium flex items-center gap-1"
                            >
                                Other Nutramax Products
                                <svg className={`w-4 h-4 transform transition-transform ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {productsOpen && (
                                <div className="absolute top-full left-0 mt-1 w-[460px] bg-white shadow-lg rounded-md py-4 z-50">
                                    <div className="px-6 flex gap-6">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold mb-4 whitespace-nowrap">Products For Your Pet</h3>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold mb-4 whitespace-nowrap">Products For You</h3>
                                        </div>
                                    </div>
                                    <div className="px-6 flex gap-6">
                                        <div className="flex-1 space-y-2">
                                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">Joint Health</a>
                                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">Liver Health</a>
                                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">Gastrointestinal Health</a>
                                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">Behavioral Health</a>
                                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">Immune Health</a>
                                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">Skin & Coat Health</a>
                                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">Dental Health</a>
                                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">Urinary Health</a>
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">Joint Health</a>
                                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">Immune Health</a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            <a href="tel:888-886-6442" className="text-[12px] text-[#4B5563] hover:text-[#1F2937] font-medium flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                888-886-6442
                            </a>
                            <a href="https://www.nutramaxlabs.com/contact" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#4B5563] hover:text-[#1F2937] font-medium">Contact Us</a>
                            <div className="relative" ref={vetsRef}>
                                <button 
                                    onClick={() => setVetsOpen(!vetsOpen)}
                                    className="text-[12px] text-[#4B5563] hover:text-[#1F2937] font-medium flex items-center gap-1"
                                >
                                    For Vets
                                    <svg className={`w-4 h-4 transform transition-transform ${vetsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {vetsOpen && (
                                    <div className="absolute top-full right-0 mt-1 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                                        <div className="space-y-2 px-4">
                                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Vet Portal (Exclusive Content)</a>
                                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Vet Loyalty Program</a>
                                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Vet Clinic Staff Program</a>
                                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Vet-EZ-Order Store</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
