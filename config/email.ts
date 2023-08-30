export const emailConfig = {
  from: 'royians@vidorra.life',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://www.vidorra.life`
      : 'http://localhost:3000',
}
