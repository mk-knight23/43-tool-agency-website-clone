'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4facfe] to-[#2563eb] flex items-center justify-center shadow-[0_4px_20px_rgba(79,172,254,0.4)] hover:shadow-[0_8px_30px_rgba(79,172,254,0.6)] transition-all duration-300 hover:scale-105"
                aria-label="Open chat"
            >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            </button>

            {/* Chat Modal */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Modal */}
                    <div className="fixed bottom-24 right-6 w-[320px] bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.08] rounded-2xl shadow-2xl z-50 overflow-hidden">
                        {/* Header */}
                        <div className="p-4 border-b border-white/[0.06] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4facfe] to-[#2563eb] flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-[14px]">Bluelupin Support</p>
                                    <p className="text-[#8b8b9e] text-[11px]">Typically replies within an hour</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-[#5c5c70] hover:text-white transition-colors"
                                aria-label="Close chat"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 text-center">
                            <div className="w-16 h-16 bg-[#4facfe]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#4facfe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h4 className="text-white font-semibold text-[16px] mb-2">Hi there! 👋</h4>
                            <p className="text-[#8b8b9e] text-[13px] mb-6 leading-relaxed">
                                How can we help you today? Fill out our contact form and we'll get back to you shortly.
                            </p>
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex w-full justify-center items-center py-3 px-6 bg-gradient-to-r from-[#4facfe] to-[#2563eb] text-white text-[14px] font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(79,172,254,0.25)] hover:shadow-[0_6px_20px_rgba(79,172,254,0.4)]"
                            >
                                Start a Conversation
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
