'use client';
import Image from 'next/image';

export default function VetExclusive() {
    return (
        <section className="py-5 px-4 bg-white">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-[42px] leading-[48px] font-bold mb-5">
                    Available Exclusively From Your Veterinarian.
                </h2>

                <div className="flex flex-col items-center gap-12">
                    <div className="w-full max-w-[600px]">
                        <Image
                            src="/filaquin-product-pouch-front.webp"
                            alt="Filaquin Anal Gland Supplement Product"
                            width={600}
                            height={800}
                            className="w-full h-auto"
                            priority
                        />
                    </div>

                    <div className="w-full max-w-[800px]">
                        <Image
                            src="/nmx-vet-rec-fil.svg"
                            alt="Nutramax Laboratories - #1 Veterinarian Recommended Supplement Company"
                            width={800}
                            height={120}
                            className="w-full h-auto"
                            priority
                        />
                    </div>

                    <p className="text-gray-600 text-[18px] leading-[24px] max-w-[800px] mt-4">
                        *Source: Survey conducted among small animal veterinarians who recommended animal supplements.
                    </p>
                </div>
            </div>
        </section>
    );
}
