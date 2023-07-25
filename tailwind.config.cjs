/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: ({ theme }) => ({
      center: true,
      padding: {
        DEFAULT: theme('spacing.f-2'),
      },
    }),
    extend: {
      fontFamily: {
        heading: ['urbanist', ...defaultTheme.fontFamily.sans],
        body: [...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        dynamic: 'clamp(1rem, 10vw, 2rem)',
        // Fluid font sizes
        // https://utopia.fyi/type/calculator/?c=640,16,1.2,1200,20,1.25,10,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
        'f-xs': 'clamp(0.69rem, calc(0.57rem + 0.30vw), 0.80rem)',
        'f-sm': 'clamp(0.83rem, calc(0.64rem + 0.48vw), 1.00rem)',
        'f-base': 'clamp(1.00rem, calc(0.71rem + 0.71vw), 1.25rem)',
        'f-lg': 'clamp(1.20rem, calc(0.79rem + 1.04vw), 1.56rem)',
        'f-xl': 'clamp(1.44rem, calc(0.85rem + 1.47vw), 1.95rem)',
        'f-2xl': 'clamp(1.73rem, calc(0.91rem + 2.04vw), 2.44rem)',
        'f-3xl': 'clamp(2.07rem, calc(0.96rem + 2.79vw), 3.05rem)',
        'f-4xl': 'clamp(2.49rem, calc(0.97rem + 3.79vw), 3.82rem)',
        'f-5xl': 'clamp(2.99rem, calc(0.95rem + 5.09vw), 4.77rem)',
        'f-6xl': 'clamp(3.58rem, calc(0.87rem + 6.79vw), 5.96rem)',
        'f-7xl': 'clamp(4.30rem, calc(0.70rem + 9.00vw), 7.45rem)',
        'f-8xl': 'clamp(5.16rem, calc(0.41rem + 11.87vw), 9.31rem)',
        'f-9xl': 'clamp(6.19rem, calc(-0.04rem + 15.57vw), 11.64rem)',
      },
      spacing: {
        // Fluid spacing
        // https://utopia.fyi/space/calculator/?c=640,4,1.2,1536,5,1.25,5,2,&s=0.5,1.5%7C2%7C2.5%7C3%7C3.5%7C4%7C5%7C6%7C7%7C8%7C9%7C10%7C11%7C12%7C14%7C16%7C20%7C24%7C28%7C32%7C36%7C40%7C44%7C48%7C52%7C56%7C60%7C64%7C72%7C80%7C96,s-l&g=s,l,xl,12
        'f-0.5': 'clamp(0.13rem, calc(-0.01rem + 0.33vw), 0.31rem)',
        'f-1': 'clamp(0.25rem, calc(0.07rem + 0.45vw), 0.50rem)',
        'f-1.5': 'clamp(0.38rem, calc(0.20rem + 0.45vw), 0.63rem)',
        'f-2': 'clamp(0.50rem, calc(0.28rem + 0.56vw), 0.81rem)',
        'f-2.5': 'clamp(0.63rem, calc(0.40rem + 0.56vw), 0.94rem)',
        'f-3': 'clamp(0.75rem, calc(0.48rem + 0.67vw), 1.13rem)',
        'f-3.5': 'clamp(0.88rem, calc(0.61rem + 0.67vw), 1.25rem)',
        'f-4': 'clamp(1.00rem, calc(0.60rem + 1.00vw), 1.56rem)',
        'f-5': 'clamp(1.25rem, calc(0.80rem + 1.12vw), 1.88rem)',
        'f-6': 'clamp(1.50rem, calc(1.01rem + 1.23vw), 2.19rem)',
        'f-7': 'clamp(1.75rem, calc(1.21rem + 1.34vw), 2.50rem)',
        'f-8': 'clamp(2.00rem, calc(1.42rem + 1.45vw), 2.81rem)',
        'f-9': 'clamp(2.25rem, calc(1.63rem + 1.56vw), 3.13rem)',
        'f-10': 'clamp(2.50rem, calc(1.83rem + 1.67vw), 3.44rem)',
        'f-11': 'clamp(2.75rem, calc(2.04rem + 1.79vw), 3.75rem)',
        'f-12': 'clamp(3.00rem, calc(2.02rem + 2.46vw), 4.38rem)',
        'f-14': 'clamp(3.50rem, calc(2.43rem + 2.68vw), 5.00rem)',
        'f-16': 'clamp(4.00rem, calc(2.39rem + 4.02vw), 6.25rem)',
        'f-20': 'clamp(5.00rem, calc(3.21rem + 4.46vw), 7.50rem)',
        'f-24': 'clamp(6.00rem, calc(4.04rem + 4.91vw), 8.75rem)',
        'f-28': 'clamp(7.00rem, calc(4.86rem + 5.36vw), 10.00rem)',
        'f-32': 'clamp(8.00rem, calc(5.68rem + 5.80vw), 11.25rem)',
        'f-36': 'clamp(9.00rem, calc(6.50rem + 6.25vw), 12.50rem)',
        'f-40': 'clamp(10.00rem, calc(7.32rem + 6.70vw), 13.75rem)',
        'f-44': 'clamp(11.00rem, calc(8.14rem + 7.14vw), 15.00rem)',
        'f-48': 'clamp(12.00rem, calc(8.96rem + 7.59vw), 16.25rem)',
        'f-52': 'clamp(13.00rem, calc(9.79rem + 8.04vw), 17.50rem)',
        'f-56': 'clamp(14.00rem, calc(10.61rem + 8.48vw), 18.75rem)',
        'f-60': 'clamp(15.00rem, calc(11.43rem + 8.93vw), 20.00rem)',
        'f-64': 'clamp(16.00rem, calc(11.36rem + 11.61vw), 22.50rem)',
        'f-72': 'clamp(18.00rem, calc(13.00rem + 12.50vw), 25.00rem)',
        'f-80': 'clamp(20.00rem, calc(12.86rem + 17.86vw), 30.00rem)',
      },
    },
  },
  plugins: [],
};
