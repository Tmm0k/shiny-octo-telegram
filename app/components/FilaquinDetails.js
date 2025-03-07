'use client';

import Image from 'next/image';

export default function FilaquinDetails() {
    return (
        <section className="py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row md:gap-24 items-start">
                    {/* Product Image and Vet Rec */}
                    <div className="w-full md:w-[45%] flex flex-col items-center mb-8 md:mb-0 order-2 md:order-1">
                        <div className="w-full max-w-[400px] mb-8 relative">
                            <div className="absolute top-[20%] bottom-[20%] inset-x-[10%] bg-gray-200/40 rounded-sm"></div>
                            <div className="relative">
                                <Image
                                    src="/filaquin-product-pouch-front.webp"
                                    alt="Filaquin Anal Gland Supplement Product"
                                    width={400}
                                    height={534}
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-full max-w-[400px]">
                            <Image
                                src="/nmx-vet-rec-fil.svg"
                                alt="Nutramax Laboratories - #1 Veterinarian Recommended Supplement Company"
                                width={400}
                                height={60}
                                className="w-full h-auto"
                                priority
                            />
                            <p className="text-gray-600 text-[14px] md:text-[18px] leading-[24px] mt-4 text-center md:text-left">
                                *Source: Survey conducted among small animal veterinarians who recommended animal supplements.
                            </p>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-[55%] order-1 md:order-2">
                        <h1 className="text-2xl md:text-3xl lg:text-[42px] leading-tight md:leading-[48px] font-bold mb-4">
                            Filaquin™ Anal Gland Supplement For Dogs
                        </h1>

                        <h2 className="text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-[40px] text-gray-700 mb-8">
                            Count: 132 Soft Chews
                        </h2>

                        <ul className="space-y-6 mb-8">
                            <li className="text-lg md:text-xl lg:text-[24px] leading-normal md:leading-[32px] text-gray-600">
                                From the #1 Veterinarian Recommended Supplement Company*
                            </li>

                            <li className="text-lg md:text-xl lg:text-[24px] leading-normal md:leading-[32px] text-gray-600">
                                Filaquin™ contains NMXFBR4™, a proprietary blend of yeast extract (beta-glucan), apple fiber, yeast culture (postbiotic), and psyllium husk fiber
                            </li>

                            <li className="text-lg md:text-xl lg:text-[24px] leading-normal md:leading-[32px] text-gray-600">
                                Includes a blend of soluble and insoluble fiber to support normal stool consistency
                            </li>

                            <li className="text-lg md:text-xl lg:text-[24px] leading-normal md:leading-[32px] text-gray-600">
                                Contains prebiotics and postbiotics for support digestive health
                            </li>

                            <li className="text-lg md:text-xl lg:text-[24px] leading-normal md:leading-[32px] text-gray-600">
                                Contains beta-glucan to support immune health
                            </li>
                        </ul>

                        <h2 className="text-base sm:text-lg sm:leading-normal font-bold text-center md:text-left">
                            Available Exclusively From Your Veterinarian
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
