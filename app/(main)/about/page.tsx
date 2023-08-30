import Balancer from "react-wrap-balancer";

import {Container} from '~/components/ui/Container'

export default function AboutPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          About 关于我
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>你好！给我点时间开发一下...</Balancer>
        </p>
      </header>
    </Container>
  )
}
