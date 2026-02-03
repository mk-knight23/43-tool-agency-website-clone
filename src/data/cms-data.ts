import type { CMSData } from '../types'

export const cmsData: CMSData = {
  team: [
    {
      id: '1',
      name: 'Alexandra Chen',
      role: 'Creative Director',
      bio: 'Award-winning designer with 12+ years of experience crafting iconic brand identities and digital experiences.',
      image: '/images/team/alexandra.jpg',
      expertise: ['Brand Strategy', 'UI/UX Design', 'Art Direction'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'alexandra@bluelupin.com'
      }
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      role: 'Lead Engineer',
      bio: 'Full-stack architect specializing in scalable cloud infrastructure and high-performance applications.',
      image: '/images/team/marcus.jpg',
      expertise: ['Cloud Architecture', 'React/Vue', 'Node.js', 'DevOps'],
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'marcus@bluelupin.com'
      }
    },
    {
      id: '3',
      name: 'Sarah Kim',
      role: 'Product Strategist',
      bio: 'Data-driven strategist transforming complex business requirements into elegant digital solutions.',
      image: '/images/team/sarah.jpg',
      expertise: ['Product Management', 'User Research', 'Analytics'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'sarah@bluelupin.com'
      }
    },
    {
      id: '4',
      name: 'David Okonkwo',
      role: 'Senior Developer',
      bio: 'Full-cycle developer passionate about clean code, testing, and delivering exceptional user experiences.',
      image: '/images/team/david.jpg',
      expertise: ['TypeScript', 'Vue.js', 'Testing', 'CI/CD'],
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'david@bluelupin.com'
      }
    }
  ],

  services: [
    {
      id: '1',
      title: 'Web Engineering',
      description: 'Bespoke web applications built with the latest reactive frameworks for high performance and scalability.',
      icon: 'Code2',
      color: 'text-blue-500',
      features: [
        'Custom Web Applications',
        'Progressive Web Apps',
        'Real-time Solutions',
        'Performance Optimization'
      ],
      process: [
        'Discovery & Requirements',
        'Architecture Design',
        'Agile Development',
        'Testing & QA',
        'Deployment & Support'
      ],
      pricing: {
        tier: 'Enterprise',
        price: 'Contact Us',
        period: 'project-based'
      }
    },
    {
      id: '2',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud solutions designed to grow with your enterprise and optimize costs.',
      icon: 'Cpu',
      color: 'text-cyan-500',
      features: [
        'Cloud Migration',
        'DevOps Automation',
        'Security & Compliance',
        '24/7 Monitoring'
      ],
      process: [
        'Infrastructure Audit',
        'Migration Strategy',
        'Implementation',
        'Optimization',
        'Maintenance'
      ],
      pricing: {
        tier: 'Professional',
        price: '$5,000+',
        period: 'month'
      }
    },
    {
      id: '3',
      title: 'Brand Identity',
      description: 'Transforming identities into digital powerhouses that resonate worldwide and drive engagement.',
      icon: 'Palette',
      color: 'text-indigo-500',
      features: [
        'Visual Identity Systems',
        'Brand Guidelines',
        'Digital Assets',
        'Brand Strategy'
      ],
      process: [
        'Brand Discovery',
        'Concept Development',
        'Design Systems',
        'Asset Creation',
        'Launch Strategy'
      ],
      pricing: {
        tier: 'Startup',
        price: '$3,000+',
        period: 'project'
      }
    },
    {
      id: '4',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      icon: 'Smartphone',
      color: 'text-purple-500',
      features: [
        'iOS & Android Apps',
        'React Native',
        'Flutter',
        'App Store Optimization'
      ],
      process: [
        'Product Definition',
        'UI/UX Design',
        'Development',
        'Testing',
        'Store Launch'
      ],
      pricing: {
        tier: 'Professional',
        price: '$10,000+',
        period: 'project'
      }
    },
    {
      id: '5',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with custom analytics dashboards and reporting.',
      icon: 'BarChart3',
      color: 'text-emerald-500',
      features: [
        'Custom Dashboards',
        'Data Visualization',
        'Predictive Analytics',
        'Business Intelligence'
      ],
      process: [
        'Data Audit',
        'KPI Definition',
        'Dashboard Design',
        'Integration',
        'Training'
      ],
      pricing: {
        tier: 'Enterprise',
        price: 'Contact Us',
        period: 'project-based'
      }
    },
    {
      id: '6',
      title: 'UX/UI Design',
      description: 'Human-centered design that creates intuitive, accessible, and delightful digital experiences.',
      icon: 'Figma',
      color: 'text-pink-500',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Design Systems'
      ],
      process: [
        'User Research',
        'Information Architecture',
        'Wireframing',
        'Visual Design',
        'Handoff & Support'
      ],
      pricing: {
        tier: 'Startup',
        price: '$2,500+',
        period: 'project'
      }
    }
  ],

  projects: [
    {
      id: '1',
      title: 'FinTech Dashboard',
      category: 'Web Application',
      description: 'Real-time trading platform with advanced analytics and portfolio management.',
      longDescription: 'A comprehensive trading platform serving 50,000+ active users with real-time market data, advanced charting tools, and AI-powered portfolio recommendations. Built for scalability and security.',
      image: '/images/projects/fintech.jpg',
      icon: 'Zap',
      color: 'from-yellow-500 to-orange-500',
      tags: ['FinTech', 'SaaS', 'B2B'],
      technologies: ['Vue.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
      client: 'TradeFlow Inc.',
      year: 2025,
      caseStudyUrl: '#',
      liveUrl: 'https://demo.tradeflow.com',
      featured: true
    },
    {
      id: '2',
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'Global retail solution with AI recommendations and multi-currency support.',
      longDescription: 'Enterprise e-commerce platform with AI-powered product recommendations, multi-currency/multi-language support, and seamless checkout experience. Increased conversion by 45%.',
      image: '/images/projects/ecommerce.jpg',
      icon: 'Smartphone',
      color: 'from-purple-500 to-pink-500',
      tags: ['E-Commerce', 'AI/ML', 'B2C'],
      technologies: ['Next.js', 'GraphQL', 'MongoDB', 'Stripe', 'AWS'],
      client: 'GlobalStyle Ltd.',
      year: 2025,
      caseStudyUrl: '#',
      liveUrl: 'https://globalstyle.com',
      featured: true
    },
    {
      id: '3',
      title: 'Brand Identity System',
      category: 'Design System',
      description: 'Complete visual identity for tech unicorn including design system.',
      longDescription: 'Comprehensive brand identity project including logo, color system, typography, iconography, and a complete design system used across 15+ digital products.',
      image: '/images/projects/branding.jpg',
      icon: 'Palette',
      color: 'from-blue-500 to-cyan-500',
      tags: ['Branding', 'Design System'],
      technologies: ['Figma', 'Illustrator', 'Adobe XD'],
      client: 'TechVenture',
      year: 2024,
      caseStudyUrl: '#',
      featured: true
    },
    {
      id: '4',
      title: 'Healthcare Portal',
      category: 'Web Application',
      description: 'HIPAA-compliant patient management system with telemedicine integration.',
      longDescription: 'Secure healthcare platform enabling patients to book appointments, access medical records, and have video consultations with healthcare providers.',
      image: '/images/projects/healthcare.jpg',
      icon: 'Activity',
      color: 'from-emerald-500 to-teal-500',
      tags: ['Healthcare', 'SaaS', 'B2B'],
      technologies: ['React', 'Python', 'PostgreSQL', 'WebRTC', 'AWS'],
      client: 'MedConnect',
      year: 2024,
      caseStudyUrl: '#',
      featured: false
    },
    {
      id: '5',
      title: 'Smart City App',
      category: 'Mobile Application',
      description: 'Citizen engagement app with real-time city services and 3D maps.',
      longDescription: 'Mobile application connecting citizens with city services, featuring real-time transit updates, 3D interactive maps, and community forums.',
      image: '/images/projects/smartcity.jpg',
      icon: 'Building2',
      color: 'from-indigo-500 to-purple-500',
      tags: ['Smart City', 'Mobile', 'IoT'],
      technologies: ['React Native', 'Mapbox', 'Node.js', 'MongoDB'],
      client: 'City of Metropolis',
      year: 2024,
      caseStudyUrl: '#',
      featured: false
    },
    {
      id: '6',
      title: 'Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Real-time business intelligence platform with custom reporting.',
      longDescription: 'Powerful analytics platform processing millions of data points daily, providing real-time insights and customizable reporting for enterprise clients.',
      image: '/images/projects/analytics.jpg',
      icon: 'BarChart3',
      color: 'from-rose-500 to-orange-500',
      tags: ['Analytics', 'Big Data', 'SaaS'],
      technologies: ['Vue.js', 'D3.js', 'Python', 'Kafka', 'Snowflake'],
      client: 'DataDriven Inc.',
      year: 2024,
      caseStudyUrl: '#',
      featured: false
    }
  ],

  testimonials: [
    {
      id: '1',
      clientName: 'Jennifer Walsh',
      clientRole: 'CEO',
      company: 'TradeFlow Inc.',
      quote: 'BlueLupin transformed our vision into a stunning reality. Their attention to detail and technical expertise exceeded all expectations. Our platform now serves 50,000+ active users seamlessly.',
      rating: 5,
      project: 'FinTech Dashboard',
      date: '2025-01-15',
      image: '/images/clients/jennifer.jpg'
    },
    {
      id: '2',
      clientName: 'Robert Chen',
      clientRole: 'CTO',
      company: 'GlobalStyle Ltd.',
      quote: 'The team delivered a complex e-commerce platform on time and within budget. The AI recommendations they built increased our conversion rate by 45%. Outstanding work!',
      rating: 5,
      project: 'E-Commerce Platform',
      date: '2025-01-10',
      image: '/images/clients/robert.jpg'
    },
    {
      id: '3',
      clientName: 'Amanda Foster',
      clientRole: 'VP Marketing',
      company: 'TechVenture',
      quote: 'Their brand identity work is phenomenal. They created a complete design system that unified all our products. Our brand recognition increased by 200%.',
      rating: 5,
      project: 'Brand Identity System',
      date: '2024-12-20',
      image: '/images/clients/amanda.jpg'
    },
    {
      id: '4',
      clientName: 'Dr. Michael Torres',
      clientRole: 'Founder',
      company: 'MedConnect',
      quote: 'Security and compliance were critical for us. BlueLupin delivered a HIPAA-compliant solution that our patients love. The telemedicine integration is flawless.',
      rating: 5,
      project: 'Healthcare Portal',
      date: '2024-11-25',
      image: '/images/clients/michael.jpg'
    },
    {
      id: '5',
      clientName: 'Lisa Park',
      clientRole: 'Director of Innovation',
      company: 'City of Metropolis',
      quote: 'The smart city app has revolutionized how our citizens interact with city services. User adoption exceeded our projections by 150%. Truly transformative work.',
      rating: 5,
      project: 'Smart City App',
      date: '2024-10-15',
      image: '/images/clients/lisa.jpg'
    },
    {
      id: '6',
      clientName: 'David Kumar',
      clientRole: 'Head of Analytics',
      company: 'DataDriven Inc.',
      quote: 'We needed a dashboard that could handle millions of data points in real-time. BlueLupin delivered beyond our expectations. Performance is exceptional.',
      rating: 5,
      project: 'Analytics Dashboard',
      date: '2024-09-30',
      image: '/images/clients/david.jpg'
    }
  ],

  blogPosts: [
    {
      id: '1',
      title: 'Building Scalable Vue Applications in 2025',
      slug: 'building-scalable-vue-applications-2025',
      excerpt: 'Learn the best practices and architectural patterns for building enterprise-grade Vue applications that scale.',
      content: 'Full article content here...',
      category: 'Engineering',
      author: 'Marcus Rodriguez',
      authorImage: '/images/team/marcus.jpg',
      publishDate: '2025-01-20',
      readTime: 8,
      tags: ['Vue.js', 'TypeScript', 'Architecture'],
      featured: true,
      image: '/images/blog/vue-scalability.jpg'
    },
    {
      id: '2',
      title: 'The Future of Design Systems',
      slug: 'future-of-design-systems',
      excerpt: 'How AI and automation are reshaping the way we build and maintain design systems at scale.',
      content: 'Full article content here...',
      category: 'Design',
      author: 'Alexandra Chen',
      authorImage: '/images/team/alexandra.jpg',
      publishDate: '2025-01-15',
      readTime: 6,
      tags: ['Design Systems', 'UI/UX', 'AI'],
      featured: true,
      image: '/images/blog/design-systems.jpg'
    },
    {
      id: '3',
      title: 'Optimizing Cloud Infrastructure Costs',
      slug: 'optimizing-cloud-costs',
      excerpt: 'Practical strategies for reducing your cloud bill while maintaining performance and reliability.',
      content: 'Full article content here...',
      category: 'DevOps',
      author: 'David Okonkwo',
      authorImage: '/images/team/david.jpg',
      publishDate: '2025-01-10',
      readTime: 10,
      tags: ['Cloud', 'DevOps', 'AWS', 'Cost Optimization'],
      featured: false,
      image: '/images/blog/cloud-optimization.jpg'
    },
    {
      id: '4',
      title: 'User Research Methods That Work',
      slug: 'user-research-methods',
      excerpt: 'Evidence-based user research techniques that uncover real insights and drive product decisions.',
      content: 'Full article content here...',
      category: 'Product',
      author: 'Sarah Kim',
      authorImage: '/images/team/sarah.jpg',
      publishDate: '2025-01-05',
      readTime: 7,
      tags: ['User Research', 'Product Management', 'UX'],
      featured: false,
      image: '/images/blog/user-research.jpg'
    },
    {
      id: '5',
      title: 'Microservices vs Monolith: When to Use What',
      slug: 'microservices-vs-monolith',
      excerpt: 'A practical guide to choosing the right architecture for your next project.',
      content: 'Full article content here...',
      category: 'Engineering',
      author: 'Marcus Rodriguez',
      authorImage: '/images/team/marcus.jpg',
      publishDate: '2024-12-28',
      readTime: 12,
      tags: ['Architecture', 'Microservices', 'Backend'],
      featured: false,
      image: '/images/blog/microservices.jpg'
    },
    {
      id: '6',
      title: 'Accessibility in Modern Web Design',
      slug: 'accessibility-modern-web',
      excerpt: 'How to build inclusive digital experiences that work for everyone, everywhere.',
      content: 'Full article content here...',
      category: 'Design',
      author: 'Alexandra Chen',
      authorImage: '/images/team/alexandra.jpg',
      publishDate: '2024-12-20',
      readTime: 9,
      tags: ['Accessibility', 'Inclusive Design', 'WCAG'],
      featured: false,
      image: '/images/blog/accessibility.jpg'
    }
  ]
}
