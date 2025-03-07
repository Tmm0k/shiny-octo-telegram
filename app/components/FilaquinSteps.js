'use client';

import { useState } from 'react';

export default function FilaquinSteps() {
    const [activeTab, setActiveTab] = useState('directions');

    return (
        <section className="w-full bg-white py-12 md:py-16">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="border border-gray-200 rounded-t-lg overflow-hidden">
                    {/* Tabs */}
                    <div className="flex">
                        <button 
                            className={`px-6 py-3 text-base font-medium ${activeTab === 'directions' ? 'bg-black text-white' : 'bg-white text-black'} flex-1 sm:flex-none sm:min-w-[200px] border-r border-gray-200`}
                            onClick={() => setActiveTab('directions')}
                        >
                            Directions for Use
                        </button>
                        <button 
                            className={`px-6 py-3 text-base font-medium ${activeTab === 'ingredients' ? 'bg-black text-white' : 'bg-white text-black'} flex-1 sm:flex-none sm:min-w-[200px]`}
                            onClick={() => setActiveTab('ingredients')}
                        >
                            Ingredients
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {activeTab === 'directions' && (
                            <div>
                                <table className="w-full border-collapse mb-6">
                                    <thead>
                                        <tr className="bg-black text-white">
                                            <th className="py-2 px-4 text-left border">Weight (lbs)</th>
                                            <th className="py-2 px-4 text-left border">Number of soft chews per day</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td className="py-2 px-4 border">&lt;15</td><td className="py-2 px-4 border">½</td></tr>
                                        <tr><td className="py-2 px-4 border">15 - 25</td><td className="py-2 px-4 border">1</td></tr>
                                        <tr><td className="py-2 px-4 border">26 - 50</td><td className="py-2 px-4 border">2</td></tr>
                                        <tr><td className="py-2 px-4 border">51 - 75</td><td className="py-2 px-4 border">3</td></tr>
                                        <tr><td className="py-2 px-4 border">&gt;75</td><td className="py-2 px-4 border">4</td></tr>
                                    </tbody>
                                </table>
                                <p className="text-sm text-gray-600 italic">
                                    The number of soft chews administered may be increased or decreased based on your veterinarian's recommendation and your pet's stool consistency.
                                </p>
                            </div>
                        )}

                        {activeTab === 'ingredients' && (
                            <div>
                                <div className="mb-6">
                                    <h3 className="font-medium mb-2">Ingredients:</h3>
                                    <p className="text-gray-700">
                                        Proprietary Blend NMXFBR4™: Yeast extract♦, apple fiber, yeast culture (postbiotic), and psyllium husk fiber.....2000 mg.
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h3 className="font-medium mb-2">Other Ingredients:</h3>
                                    <p className="text-gray-700">
                                        Glycerin, green tea extract, lecithin, mixed tocopherols, peanut flour, rosemary extract, silicon dioxide, starch, and vegetable oil.
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h3 className="font-medium mb-2">Additional Information:</h3>
                                    <p className="font-medium mb-2">Your veterinarian is your best ally in managing your dog's health.</p>
                                    <p className="text-gray-700 mb-4">
                                        If your dog has any condition that requires medical attention, you should always consult your veterinarian. Provide adequate water access during product administration. If accidental overconsumption occurs, contact a veterinary healthcare provider immediately.
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                        Store in a cool, dry area out of direct sunlight. Reseal closure securely after opening to ensure freshness. For use in animals only. Keep out of the reach of children.
                                    </p>
                                    <p className="text-gray-700">
                                        ♦Contains beta-1,3/1,6-glucan.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
