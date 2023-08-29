export const seo = {
  title: 'ROYIANS | 学习者、开发者、工程师、设计学徒',
  description:
    '我是 Royians，一名开发者、工程师、设计学徒，目前不断学习中，希望在不断学习中无限进步。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://vidorra.life'
      : 'http://localhost:3000'
  ),
} as const
