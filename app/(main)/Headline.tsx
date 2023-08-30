'use client'

import {motion} from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import {SparkleIcon, UserSecurityIcon} from '~/assets'
import {PeekabooLink} from '~/components/links/PeekabooLink'
import {SocialLink} from '~/components/links/SocialLink'

function Developer() {
    return (
        <span className="group">
            <span className="font-mono">&lt;</span>开发者
            <span className="font-mono">/&gt;</span>
            <span
                className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500"/>
        </span>
    )
}

function Designer() {
    return (
        <span className="group relative rounded-2xl bg-black/5 p-1 dark:bg-white/5">
            <span
                className="pointer-events-none absolute inset-0 border border-cyan-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-cyan-400/90">
                <span
                    className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 border border-cyan-700 bg-zinc-50 dark:border-cyan-400"/>
                <span
                    className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border border-cyan-700 bg-zinc-50 dark:border-cyan-400"/>
                <span
                    className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border border-cyan-700 bg-zinc-50 dark:border-cyan-400"/>
                <span
                    className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 border border-cyan-700 bg-zinc-50 dark:border-cyan-400"/>
            </span>
      工程师
        </span>
    )
}

function OCD() {
    return (
        <span className="group">
            <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180"/>
            <span>细节控</span>
        </span>
    )
}

function Founder() {
    return (
        <span className="group">
            <UserSecurityIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20"/>
            <span>学习者</span>
        </span>
    )
}

export function Headline() {
    return (
        <div className="max-w-2xl">
            <motion.h1
                className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    type: 'spring',
                    damping: 25,
                    stiffness: 100,
                    duration: 0.3,
                }}
            >
                <Developer/>，<Designer/>，
                <br/>
                <OCD/>，<Founder/>
            </motion.h1>
            <motion.p
                className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    type: 'spring',
                    damping: 30,
                    stiffness: 85,
                    duration: 0.3,
                    delay: 0.1,
                }}
            >
                <Balancer>
                    我是 ROYIANS，
                    <PeekabooLink href="https://blog.vidorra.life">小梦岛</PeekabooLink>博主。
                    一名开发者、工程师、设计学徒，目前不断学习中，希望在不断学习中无限进步。
                    我热爱开发，设计，创新，享受生活，以及在未知领域中探索。
                </Balancer>
            </motion.p>
            <motion.div
                className="mt-6 flex gap-6"
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    type: 'spring',
                    damping: 50,
                    stiffness: 90,
                    duration: 0.35,
                    delay: 0.25,
                }}
            >
                <SocialLink
                    href="https://weibo.com/u/6319184855"
                    aria-label="我的 Weibo"
                    platform="weibo"
                />
                <SocialLink
                    href="https://space.bilibili.com/32267413"
                    aria-label="我的 Bilibili"
                    platform="bilibili"
                />
                <SocialLink
                    href="https://github.com/ROYIANS"
                    aria-label="我的 GitHub"
                    platform="github"
                />
                {/*<SocialLink*/}
                {/*  href="https://cali.so/tg"*/}
                {/*  aria-label="我的 Telegram"*/}
                {/*  platform="telegram"*/}
                {/*/>*/}
                <SocialLink
                    href="mailto:royians@vidorra.life"
                    aria-label="我的邮箱"
                    platform="mail"
                />
                <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅"/>
            </motion.div>
        </div>
    )
}
