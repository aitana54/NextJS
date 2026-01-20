'use client';
import { useState } from 'react';

export default function LikeCounter( { title }) {
    const [like, setLike] = useState (false);
    return (
        <section className='rounded-2xl border border-gray-200 bg-white p-6 shadow-md'>
            <div className='flex items-center justify-between gap-4'>
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            </div>
            <div>
                <p className='mb-6 text-gray-600'>Thriller - Michael Jackson</p>
                <button onClick={() => setLike(!like)}
                    className='flex items-center justify-center gap-2 rounded-xl px-5 py-2 font-semibold transition-all duration-300 text-purple-600'>
                    {like ? 'Me gusta' : 'No me gusta'}
                </button>
            </div>
            
        </section>
    );
}