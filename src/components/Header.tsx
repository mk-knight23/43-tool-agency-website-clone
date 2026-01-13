'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const services = [
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'Digital Experience', href: '/services/digital-experience' },
        { name: 'ERP Automation', href: '/services/erp-automation' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#080810]/90 backdrop-blur-xl border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="flex items-center justify-between h-[72px]">
                    {/* Logo - Exact match to original */}
                    <Link href="/" className="flex items-center gap-2.5">
                        <div className="w-[34px] h-[34px] bg-[#0a1628] border border-[#1e3a5f] rounded-[10px] flex items-center justify-center">
                            <span className="text-[#4facfe] font-bold text-[18px] leading-none">b</span>
                        </div>
                        <span className="text-[22px] font-semibold tracking-[-0.02em]">
                            <span className="text-[#4facfe]">blue</span>
                            <span className="text-white">lupin</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation - Exact spacing */}
                    <nav className="hidden lg:flex items-center gap-[32px]">
                        <Link
                            href="/about-us"
                            className="text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200"
                        >
                            About Us
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className="flex items-center gap-1.5 text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200">
                                Services
                                <svg
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isServicesOpen && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[220px] bg-[#0c0c18] border border-white/[0.08] rounded-xl shadow-2xl shadow-black/40 overflow-hidden">
                                    {services.map((service) => (
                                        <Link
                                            key={service.name}
                                            href={service.href}
                                            className="block px-5 py-3.5 text-[13px] font-medium text-white/70 hover:text-white hover:bg-white/[0.04] transition-all duration-150"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/portfolio"
                            className="text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/careers"
                            className="text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200"
                        >
                            Careers
                        </Link>
                        <Link
                            href="/blog"
                            className="text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* CTA Button - Exact match */}
                    <div className="hidden lg:block">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-[22px] py-[11px] bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[13px] font-semibold rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                        >
                            Get in touch today
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-6 border-t border-white/[0.06]">
                        <nav className="flex flex-col gap-4">
                            <Link href="/about-us" className="text-[15px] font-medium text-white/80 hover:text-white py-2">
                                About Us
                            </Link>
                            <Link href="/ai-solutions" className="text-[15px] font-medium text-white/80 hover:text-white py-2">
                                AI Solutions
                            </Link>
                            <Link href="/portfolio" className="text-[15px] font-medium text-white/80 hover:text-white py-2">
                                Projects
                            </Link>
                            <Link href="/careers" className="text-[15px] font-medium text-white/80 hover:text-white py-2">
                                Careers
                            </Link>
                            <Link href="/contact" className="text-[15px] font-medium text-white/80 hover:text-white py-2">
                                Contact
                            </Link>
                            <Link
                                href="/contact"
                                className="mt-2 px-6 py-3 bg-[#2563eb] text-white text-[14px] font-semibold rounded-full text-center"
                            >
                                Get in touch today
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
