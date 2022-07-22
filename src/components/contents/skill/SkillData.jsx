
// Image
import flutter from '../../../assets/technology/flutter.png';
import laravel from '../../../assets/technology/laravel.png';
import react from '../../../assets/technology/react.png';

const SkillData = [
    {
        key: 'laravel',
        title: 'Laravel Framework',
        image: laravel,
        content: [
            'Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.',
            'Laravel values beauty. We love clean code just as much as you do. Simple, elegant syntax puts amazing functionality at your fingertips. Every feature has been thoughtfully considered to provide a wonderful developer experience.',
            'Laravel is committed to delivering the best testing experience you can imagine. No more brittle tests that are a nightmare to maintain. Beautiful testing APIs, database seeding, and painless browser testing let you ship with confidence.',
        ],
        desc: {
            author : 'Laravel Community',
            initial_release: 'Alpha (v0.1)',
            platform: 'Android, iOS',
            license: 'LV BSD License'
        },
        documentation: 'https://laravel.com/docs'
    },
    {
        key: 'flutter',
        title: 'Flutter Framework',
        image: flutter,
        content: [
            'Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.',
            'Flutter code compiles to ARM or Intel machine code as well as JavaScript, for fast performance on any device.',
            'Deploy to multiple devices from a single codebase: mobile, web, desktop, and embedded devices.',
            'Take control of your codebase with automated testing, developer tooling, and everything else you need to build production-quality apps.',
            'Flutter is supported and used by Google, trusted by well-known brands around the world, and maintained by a community of global developers.'
        ],
        desc: {
            author : 'Google and community',
            initial_release: 'Alpha (v0.0.6)',
            platform: 'Android, iOS, Web, Dekstop',
            license: 'New BSD License'
        },
        documentation: 'https://docs.flutter.dev/'
    },
    {
        key: 'react',
        title: 'React',
        image: react,
        content: [
            'A JavaScript library for building user interfaces',
            'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
            'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
        ],
        desc: {
            author : 'Facebook and community',
            initial_release: 'v18.2.0',
            platform: 'Android, iOS, Web',
            license: 'New BSD License'
        },
        documentation: 'https://docs.flutter.dev/'
    },
]

export default SkillData;