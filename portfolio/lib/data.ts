import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'muhammadanaskhanak@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Anas Khan, I am reaching out to you because...',

    oldPortfolio: 'https://github.com/akanaskhan',
    upworkProfile: 'https://www.upwork.com/freelancers/akanaskhan',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/akanaskhan' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/muhammad-anas-khan786',
    },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React.js',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },

        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },

        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'CSS',
            icon: '/logo/css.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'Google Firebase',
            icon: '/logo/firebase.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Vercel',
            icon: '/logo/vercel.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Warduro',
        slug: 'warduro',
        liveUrl: 'https://warduro.com/',
        year: 2025,
        description: `
A modern E-Commerce platform built for WARDURO to showcase and sell custom-designed hoodies with a bold, streetwear-inspired aesthetic.      
      Key Features:<br/>
<ul>
  <li>🛍️ Product Display System: Clean and responsive hoodie catalog with category filters</li>
  <li>🎨 Branded UI/UX: Custom styling that reflects WARDURO’s bold fashion identity</li>
  <li>🧾 Real-Time Orders: Integrated Firebase Firestore for seamless order tracking and management</li>
  <li>📱 Fully Responsive: Optimized layout for mobile, tablet, and desktop devices</li>
  <li>⚡ Smooth Animations: Integrated Framer Motion for enhanced UI transitions</li>
</ul>
<br/>

      
      Technical Highlights:
<ul>
  <li>Built using React.js and Firebase Firestore for fast, scalable performance</li>
  <li>Used Tailwind CSS and shadcn/ui to create reusable and consistent components</li>
  <li>Implemented category-based product filtering and responsive grid layout</li>
  <li>Deployed using Vercel with optimized builds for fast loading</li>
</ul>
      `,
        role: `
     Front-End Developer <br/>
      Owned the entire development lifecycle:
      <ul>
  <li>🎨 Designed and developed all UI components using Tailwind CSS and shadcn</li>
  <li>🔧 Integrated Firebase Firestore for real-time product and order handling</li>
  <li>🧩 Built reusable, responsive layouts with custom animations</li>
  <li>🚀 Deployed and managed hosting via Vercel</li>
  <li>📊 Optimized SEO and performance for better engagement</li>
</ul>
      `,
        techStack: [
            'React.js',
            'Tailwind CSS',
            'Google Firebase',
            'shadcn',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/warduro.png',
        longThumbnail: '/projects/long/warduro.png',
        images: [
            '/projects/images/warduro-1.png',
            '/projects/images/warduro-2.png',
        ],
    },
    {
        title: 'SM Scents',
        slug: 'smscents',
        techStack: [
            'React.js',
            'Api Integration',
            'Google Firebase',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/smscents.png',
        longThumbnail: '/projects/long/smscents.png',
        images: [
            '/projects/images/smscents-1.png',
            '/projects/images/smscents-2.png',
        ],
        liveUrl: 'https://smscents.com/',
        year: 2024,
        description: `
An elegant eCommerce website built for SMSCENTS to showcase and sell premium perfumes with a luxurious user experience tailored for both men’s and women’s fragrance collections.  
<br/><br/>

Key Features:<br/>
<ul>
  <li>🌸 Product Showcase: Clean and attractive perfume listings with detailed product pages</li>
  <li>🧾 Real-Time Orders: Integrated Firebase Firestore for order tracking and cart management</li>
  <li>🛍️ Category Filters: Separate views for Men’s and Women’s fragrances</li>
  <li>📱 Fully Responsive: Seamless browsing across mobile, tablet, and desktop devices</li>
  <li>🎨 Custom Brand Design: UI built to reflect the elegance and luxury of the perfume brand</li>
</ul>
<br/>

Technical Highlights:
<ul>
  <li>Developed with React.js and Firebase Firestore for scalability and real-time data</li>
  <li>Styled with Tailwind CSS for a clean and responsive layout</li>
  <li>Product detail pages dynamically generated with reusable components</li>
  <li>Deployed using Vercel for fast global access and performance optimization</li>
</ul>
      `,
        role: `
    Front-End Developer  <br/>
<ul>
  <li>🎨 Designed and implemented all UI components using Tailwind CSS</li>
  <li>🔧 Managed Firestore integration for product storage and order flow</li>
  <li>🧩 Built category filtering and detailed product display logic</li>
  <li>🚀 Deployed on Vercel with optimized SEO and responsive design</li>
  <li>📸 Integrated custom visuals to match the brand identity</li>
</ul>
      `,
    },
    {
        title: 'AI-Powered Resume Analyzer',
        slug: 'resume-analyzer',
        techStack: ['GPT-4', 'React.js', 'Tailwind CSS', 'Github', 'Vercel'],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },
    {
        title: 'Real Estate',
        slug: 'real-estate',
        techStack: ['HTML5', 'CSS3', 'Javascript'],
        thumbnail: '/projects/thumbnail/property-pro.png',
        longThumbnail: '/projects/long/property-pro.png',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://akanaskhan.github.io/real-estate-landing-page-web/',
        year: 2023,
        description: `A sleek, modern landing page for a real estate company designed to showcase properties, services, and contact information with a clean and engaging layout.
        <br/><br/>

Key Features:<br/>
<ul>
  <li>🏡 Hero section with featured image and CTA</li>
  <li>📋 Property listing preview.</li>
  <li>📱 Fully responsive design.</li>
  <li>🌐 Smooth scrolling and section-based navigation</li>
</ul>
<br/>
        `,
        role: `As the frontend developer, I:<br/>
        - Designed and implemented front-end layout<br/>
        - Focused on responsive grid systems and branding alignment<br/>
        - Integrated animations and optimized performance
<br/>
        `,
    },
    {
        title: 'E-Commerce Web design',
        slug: 'ecommerce-web-design',
        techStack: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Github Pages'],
        thumbnail: '/projects/thumbnail/ecommerce-web-design.png',

        longThumbnail: '/projects/long/ecommerce-web-design.png',
        images: [
            '/projects/images/ecommerce-web-design-1.png',
            '/projects/images/ecommerce-web-design-2.png',
            '/projects/images/ecommerce-web-design-3.png',
        ],
        liveUrl: 'https://akanaskhan.github.io/ecommerce-web-design/',
        year: 2023,
        description: `A modern eCommerce web interface designed to showcase and sell products with a user-friendly, responsive layout. Built with a focus on front-end architecture, performance, and scalability.`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Developer',
        company: 'Freelancing',
        duration: 'March 2024 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'DevelopersHub.co',
        duration: 'March 2025 - May 2025',
    },
    {
        title: 'ReactJs Developer',
        company: 'Internee.pk',
        duration: 'May 2025 - June 2025',
    },
];
