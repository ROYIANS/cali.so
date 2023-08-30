import Balancer from 'react-wrap-balancer'

import {SocialLink} from '~/components/links/SocialLink'
import {Container} from '~/components/ui/Container'

import {BlogPosts} from './BlogPosts'

const description =
    '我希望通过写写博客，掌握当下流行的知识、记录平凡的生活。我的座右铭是「君子不器，正道直行」。我希望可以通过自己的努力，无限进步，享受到安逸的生活。'
export const metadata = {
    title: '我的博客',
    description,
    openGraph: {
        title: '我的博客',
        description,
    },
    twitter: {
        title: '我的博客',
        description,
        card: 'summary_large_image',
    },
}

// TODO: add pagination or infinite scroll
export default function BlogPage() {
    return (
        <Container className="mt-16 sm:mt-24">
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    欢迎光临我的博客
                </h1>
                <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
                    <Balancer>{description}</Balancer>
                </p>
                <p className="flex items-center">
                    <SocialLink href="/feed.xml" platform="rss"/>
                </p>
            </header>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
                <BlogPosts limit={20}/>
            </div>
        </Container>
    )
}

export const revalidate = 60
