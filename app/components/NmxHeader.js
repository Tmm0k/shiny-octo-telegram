'use client';

import Image from 'next/image';

export default function NmxHeader() {
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
                        <button className="text-[12px] text-[#4B5563] hover:text-[#1F2937] font-medium flex items-center gap-1">
                            Other Nutramax Products
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
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
                            <button className="text-[12px] text-[#4B5563] hover:text-[#1F2937] font-medium flex items-center gap-1">
                                For Vets
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
