// Preset Themes

const ghPath = 'https://github.com/codingcatdev/blackcatui/blob/master/src/themes';
export const themes: any[] = [
    // Presets
    {
        file: 'blackcatui',
        name: '🤖 BlackCatUI',
        colors: ['#ec4899', '#a7ffce', '#14b8a6', '#84cc16', '#eab308', '#ef4444'],
        surface: '#313276',
        url: `${ghPath}/theme-blackcatui.css`,
        fonts: [
            {
                source: 'Google Fonts',
                url: 'https://fonts.google.com/specimen/Quicksand?query=Quicksand',
                name: 'Quicksand',
                file: 'Quicksand.ttf',
                import: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
            }
        ]
    },
    {
        file: 'skeleton',
        name: '💀 Skeleton',
        colors: ['#0FBA81', '#4F46E5', '#0EA5E9', '#84cc16', '#EAB308', '#D41976'],
        surface: '#242c46',
        url: `${ghPath}/theme-skeleton.css`,
        fonts: []
    },
];
