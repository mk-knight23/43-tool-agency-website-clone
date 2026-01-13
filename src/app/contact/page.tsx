import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
    title: 'Contact Bluelupin | Get in Touch',
    description: 'We are here to answer your questions and help you plan your next digital initiative.',
};

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-32 lg:py-40 text-center">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <h1 className="text-[48px] md:text-[64px] font-bold text-white mb-6 leading-[1.1]">
                        Contact Bluelupin
                    </h1>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[550px] mx-auto leading-relaxed">
                        We're here to answer your questions and help you plan your next digital initiative.
                    </p>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="pb-32">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div>
                            {/* Communication */}
                            <div className="mb-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#4facfe]/10 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#4facfe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-[22px] font-semibold text-white">Communication</h2>
                                </div>

                                <div className="space-y-5 ml-16">
                                    <div>
                                        <p className="text-[#5c5c70] text-[12px] uppercase tracking-wider mb-1">Phone (India)</p>
                                        <a href="tel:+919910024224" className="text-[#4facfe] hover:text-[#00f2fe] text-[15px] font-medium transition-colors">
                                            +91-991-002-4224
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-[#5c5c70] text-[12px] uppercase tracking-wider mb-1">Phone (US)</p>
                                        <a href="tel:+18555003877" className="text-[#4facfe] hover:text-[#00f2fe] text-[15px] font-medium transition-colors">
                                            +1-855-500-3877
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-[#5c5c70] text-[12px] uppercase tracking-wider mb-1">Email</p>
                                        <a href="mailto:hello@bluelupin.com" className="text-[#4facfe] hover:text-[#00f2fe] text-[15px] font-medium transition-colors">
                                            hello@bluelupin.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Office Locations */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#4facfe]/10 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#4facfe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-[22px] font-semibold text-white">Office Locations</h2>
                                </div>

                                <div className="space-y-6 ml-16">
                                    <div>
                                        <p className="text-white font-semibold text-[15px] mb-1">Noida Office</p>
                                        <p className="text-[#8b8b9e] text-[14px] leading-relaxed">
                                            A-13/3, 402, Tower-I, Highway Towers<br />
                                            Sector-62, Noida-201301, India
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-[15px] mb-1">US Office</p>
                                        <p className="text-[#8b8b9e] text-[14px] leading-relaxed">
                                            Delaware, United States
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-32 bg-[#0a0a14]">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="h-[400px] bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(79,172,254,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,172,254,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
                        </div>
                        <div className="text-center relative z-10">
                            <div className="w-16 h-16 bg-[#4facfe]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#4facfe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <p className="text-[#5c5c70] text-[14px]">Map Integration</p>
                            <p className="text-[#8b8b9e] text-[13px] mt-1">Noida, India</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
