// app/data/articles.ts
export interface Article {
    slug: string
    title: string
    subtitle?: string
    date: string
}

export const articles: Article[] = [
    {
        slug: 'now-not-how',
        title: 'Now Not How',
        subtitle: 'The process I use',
        date: 'February 9, 2025',
    },
    {
        slug: 'how-i-started-taking-action',
        title: 'How I Started Taking Action',
        subtitle: 'And quit the cycle of "someday"',
        date: 'July 21, 2024',
    },
    // Add more articles as needed
]