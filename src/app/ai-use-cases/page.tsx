import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Use Cases | Bluelupin Technologies',
    description: 'Explore real-world AI applications across industries.',
};

const useCases = [
    {
        title: 'Customer Service Chatbots',
        industry: 'All Industries',
        description: 'AI-powered chatbots that handle customer inquiries 24/7, reducing response times and support costs.',
        benefits: ['24/7 availability', '80% query resolution', '60% cost reduction'],
        icon: '💬',
    },
    {
        title: 'Document Processing',
        industry: 'Finance, Legal, Healthcare',
        description: 'Automated extraction and processing of data from documents, invoices, and forms.',
        benefits: ['95% accuracy', '10x faster processing', 'Reduced errors'],
        icon: '📄',
    },
    {
        title: 'Fraud Detection',
        industry: 'Banking, E-commerce',
        description: 'Real-time fraud detection using ML models that identify suspicious patterns and transactions.',
        benefits: ['Real-time detection', '99% accuracy', 'Reduced false positives'],
        icon: '🛡️',
    },
    {
        title: 'Recommendation Systems',
        industry: 'E-commerce, Media',
        description: 'Personalized product and content recommendations that increase engagement and conversions.',
        benefits: ['30% higher engagement', 'Increased conversions', 'Better user experience'],
        icon: '🎯',
    },
    {
        title: 'Quality Control',
        industry: 'Manufacturing',
        description: 'Computer vision systems that detect defects and ensure product quality on production lines.',
        benefits: ['99.5% defect detection', 'Reduced waste', '24/7 monitoring'],
        icon: '🔍',
    },
    {
        title: 'Demand Forecasting',
        industry: 'Retail, Supply Chain',
        description: 'Predictive models that forecast demand to optimize inventory and reduce stockouts.',
        benefits: ['30% better accuracy', 'Reduced inventory costs', 'Fewer stockouts'],
        icon: '📈',
    },
];

export default function AIUseCasesPage() {
    return (
        <>
            {/* Hero */}
            <section className="py-32 lg:py-40 text-center">
                <div className="container mx-auto px-6">
                    <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">AI Applications</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
                        AI <span className="text-gradient">Use Cases</span>
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Discover how businesses across industries are leveraging AI to transform their operations.
                    </p>
                </div>
            </section>

            {/* Use Cases Grid */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((useCase) => (
                            <div
                                key={useCase.title}
                                className="p-6 bg-[#111122]/50 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all"
                            >
                                <div className="text-4xl mb-4">{useCase.icon}</div>
                                <span className="text-blue-400 text-xs font-medium">{useCase.industry}</span>
                                <h3 className="text-xl font-semibold text-white mt-2 mb-3">{useCase.title}</h3>
                                <p className="text-white/60 text-sm mb-4">{useCase.description}</p>
                                <div className="space-y-2">
                                    {useCase.benefits.map((benefit) => (
                                        <div key={benefit} className="flex items-center gap-2 text-white/50 text-sm">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                            {benefit}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-[#0d0d1a]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Have a use case in mind?
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                        Let's discuss how AI can solve your specific business challenges.
                    </p>
                    <Link href="/contact" className="inline-flex px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full hover:shadow-lg transition-all">
                        Discuss Your Use Case
                    </Link>
                </div>
            </section>
        </>
    );
}
