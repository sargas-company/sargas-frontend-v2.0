/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['"Inter Display"', 'system-ui', 'sans-serif'],
                body: ['Inter', '"Inter Placeholder"', 'system-ui', 'sans-serif'],
                serif: ['"Instrument Serif"', '"Instrument Serif Placeholder"', 'serif'],
                opensans: ['"AT Open Sans"', '"Open Sans"', 'Arial', 'sans-serif'],
            },

            colors: {
                'page-bg': 'var(--token-aa303802-e5d1-4856-bfe5-30475052d91c)',

                'ink-main': 'var(--token-00af65c3-92fd-4f69-9228-cfe71d95f29a)',

                'ink-soft': 'var(--token-d85c55a4-ced8-4594-acc3-89f55ae24d51)',

                surface: 'var(--token-cd9f24d5-f0ad-4213-bead-63c4e991dc40)',

                'accent-primary':
                    'var(--token-c53eeb35-d3d9-4feb-9e89-a54d60d4f299)',

                'overlay-white-80':
                    'var(--token-547b5c15-77fe-4f79-a0d6-e024d7d798f1)',
                'overlay-white-30':
                    'var(--token-f0c1b03e-ea67-4d21-b5fb-4de6d206068f)',

                'overlay-black-50':
                    'var(--token-cecefbc2-3137-4c31-97a2-c273c08d7ba5)',
                'overlay-black-25':
                    'var(--token-ec04a600-8ecf-4d39-b99c-23d8f87f0782)',
                'overlay-black-10':
                    'var(--token-934ab914-cd6c-4c35-97d6-2b13b53adb6b)',
            },
        },
    },
    plugins: [],
};
