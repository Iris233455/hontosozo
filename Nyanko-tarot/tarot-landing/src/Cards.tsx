import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { getCatCardImage, tarotAppLogo } from './assets';

interface CardData {
    card_id: string;
    name_jp: string;
    filename: string;
    keywords_upright: string;
    keywords_reversed: string;
}

const parseKeywords = (kwString: string) => {
    try {
        const cleaned = kwString.replace(/'/g, '"');
        return JSON.parse(cleaned) as string[];
    } catch {
        return kwString.replace(/[[\]']/g, '').split(', ').map((s) => s.trim());
    }
};

const Cards: FC = () => {
    const [cards, setCards] = useState<CardData[]>([]);

    useEffect(() => {
        fetch('/data/rider_waite_cards.json')
            .then(res => res.json())
            .then(data => {
                setCards(data.major_arcana || []);
            })
            .catch(err => console.error("Error loading cards:", err));
    }, []);

    return (
        <div className="bg-brand-cream min-h-screen pb-20 font-sans selection:bg-brand-lavender text-brand-navy">
            <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link to="/" className="flex flex-shrink-0 items-center gap-1.5 group">
                            <img src={tarotAppLogo} alt="Nyanko Tarot Logo" className="w-16 h-16 object-contain group-hover:scale-105 transition-transform" />
                            <span className="font-bold text-xl tracking-tight text-brand-navy">Nyanko Tarot</span>
                        </Link>
                        <div className="flex items-center">
                            <Link to="/" className="text-gray-500 hover:text-brand-navy text-sm font-medium transition-colors flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                ホームに戻る
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-brand-lavender-dark tracking-widest uppercase mb-3 text-center">Gallery</h2>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">タロットカード一覧</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        大アルカナ22枚の基本的な意味をご紹介します。カードが持つシンボルからのメッセージを、やさしく読み解く参考にしてみてください。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {cards.map(card => (
                        <div key={card.card_id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
                            <div className="w-32 md:w-40 mb-6 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                <img src={getCatCardImage(card.filename) || tarotAppLogo} alt={card.name_jp} className="w-full h-auto object-cover" />
                            </div>
                            <h2 className="text-xl font-bold text-center mb-6">{card.name_jp}</h2>

                            <div className="w-full flex w-full flex-col gap-4">
                                <div className="bg-brand-mint/10 rounded-xl p-5 border border-brand-mint/30">
                                    <h3 className="font-bold text-emerald-800 text-sm mb-3 flex items-center gap-2">
                                        <span className="bg-emerald-100/50 text-emerald-700 px-2 py-0.5 rounded text-xs">正位置</span>
                                    </h3>
                                    <div className="flex flex-wrap gap-2 text-xs md:text-sm text-gray-700">
                                        {parseKeywords(card.keywords_upright).map((kw, i) => (
                                            <span key={i} className="bg-white px-2 py-1 rounded shadow-sm border border-gray-50">{kw}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-brand-pink/10 rounded-xl p-5 border border-brand-pink/30">
                                    <h3 className="font-bold text-rose-800 text-sm mb-3 flex items-center gap-2">
                                        <span className="bg-rose-100/50 text-rose-700 px-2 py-0.5 rounded text-xs">逆位置</span>
                                    </h3>
                                    <div className="flex flex-wrap gap-2 text-xs md:text-sm text-gray-700">
                                        {parseKeywords(card.keywords_reversed).map((kw, i) => (
                                            <span key={i} className="bg-white px-2 py-1 rounded shadow-sm border border-gray-50">{kw}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Cards;
