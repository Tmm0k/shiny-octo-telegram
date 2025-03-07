'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#535559] text-white py-12">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="flex justify-center mb-12 pb-8 md:pb-0 border-b md:border-b-0 border-white">
                    <Image
                        src="/nmx-white-brand.webp"
                        alt="Nutramax Laboratories"
                        width={300}
                        height={80}
                        className="w-auto h-12"
                        priority
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-12 mb-12">
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-3 text-[15px]">Supplements for your Pets</h3>
                        <ul className="space-y-1.5 text-[14px]">
                            <li><Link href="#" className="hover:text-gray-300">Joint Health</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">Liver Health</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">Gastrointestinal Health</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">Behavioral Health</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">Immune Health</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">Skin and Coat Health</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">Dental Health</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">Urinary Health</Link></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-3 text-[15px]">Supplements for You</h3>
                        <ul className="space-y-1.5 text-[14px]">
                            <li><Link href="#" className="hover:text-gray-300">Joint Health</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">Immune Health</Link></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-3 text-[15px]">Contact Information</h3>
                        <ul className="space-y-1.5 text-[14px]">
                            <li><Link href="#" className="hover:text-gray-300">Contact Nutramax</Link></li>
                            <li>
                                Toll Free:<br/>
                                <a href="tel:8888864442" className="hover:text-gray-300">(888) 886-4442</a>
                            </li>
                            <li>
                                Local:<br/>
                                <a href="tel:8032895000" className="hover:text-gray-300">(803) 289-6000</a>
                            </li>
                            <li>
                                946 Quality Drive<br />
                                Lancaster, SC 29720
                            </li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-3 text-[15px]">About Nutramax Laboratories</h3>
                        <ul className="space-y-1.5 text-[14px]">
                            <li><Link href="#" className="hover:text-gray-300">Our Story</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">Our Passion</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">Our Quality</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">Careers</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">International</Link></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-3 text-[15px]">Veterinary Services</h3>
                        <ul className="space-y-1.5 text-[14px]">
                            <li><Link href="#" className="hover:text-gray-300">MyNutramax Dashboard</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pt-8 border-t border-white">
                    <div className="flex justify-center space-x-6">
                        <Link href="#" className="hover:text-gray-300">
                            <Image
                                src="/facebook-icon.svg"
                                alt="Facebook"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                        </Link>
                        <Link href="#" className="hover:text-gray-300">
                            <Image
                                src="/instagram-icon.svg"
                                alt="Instagram"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                        </Link>
                        <Link href="#" className="hover:text-gray-300">
                            <Image
                                src="/youtube-icon.svg"
                                alt="YouTube"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                        </Link>
                        <Link href="#" className="hover:text-gray-300">
                            <Image
                                src="/linkedin-icon.svg"
                                alt="LinkedIn"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14px]">
                        <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-300">Terms of Use</Link>
                        <Link href="#" className="hover:text-gray-300">Do Not Sell or Share My Information</Link>
                        <Link href="#" className="hover:text-gray-300">Web Accessibility</Link>
                    </div>
                </div>

                <div className="mt-8 text-[14px] text-center md:text-left space-y-1">
                    <p>Veterinary supplements are sold by Nutramax Laboratories Veterinary Sciences, Inc.</p>
                    <p>Human supplements are sold by Nutramax Laboratories Consumer Care, Inc.</p>
                </div>
            </div>
        </footer>
    );
}
