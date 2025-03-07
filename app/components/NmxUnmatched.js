'use client';

import Image from 'next/image'

export default function NmxUnmatched() {
    return (
        <section className="bg-white md:bg-transparent">
            <div className="relative md:hidden">
                <Image
                    src="/pets-cat-dog-mb.webp"
                    alt="Cat and Dog Friends"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                    priority
                />
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[85%] max-w-[280px] z-10 space-y-3">
                    <Image
                        src="/nmx-green-brand.webp"
                        alt="Nutramax Unmatched Quality"
                        width={200}
                        height={200}
                        className="w-full"
                        priority
                    />
                    <Image
                        src="/nmx-vet-rec-gray.webp"
                        alt="#1 Veterinarian Recommended Supplement Company"
                        width={200}
                        height={200}
                        className="w-full"
                        priority
                    />
                </div>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10 w-full px-4">
                    <p className="text-[7px] text-gray-600 text-center">*Source: Survey conducted among small animal veterinarians who recommended animal supplements</p>
                </div>
            </div>

            <div className="hidden md:block relative w-screen overflow-hidden">
                <div className="w-screen h-[450px]">
                    <Image
                        src="/pets-cat-dog-dt.webp"
                        alt="Cat and Dog Friends"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                <div className="absolute inset-0 w-full">
                    <div className="container mx-auto h-full relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-8 lg:left-16 xl:left-24 w-[42%] max-w-[480px] z-10 space-y-6">
                            <Image
                                src="/nmx-green-brand.webp"
                                alt="Nutramax Unmatched Quality"
                                width={480}
                                height={160}
                                className="w-full"
                                priority
                            />
                            <Image
                                src="/nmx-vet-rec-gray.webp"
                                alt="#1 Veterinarian Recommended Supplement Company"
                                width={480}
                                height={160}
                                className="w-full"
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-full px-4">
                    <p className="text-[10px] text-gray-600 text-center max-w-[600px] mx-auto">*Source: Survey conducted among small animal veterinarians who recommended animal supplements</p>
                </div>
            </div>
        </section>
    )
}
