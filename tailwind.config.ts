import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      text: "#011C26",
      textSecondary: "#084A59",
      white: "#FFFFFF",
      orange:"#BF522A",
      yellow: "#F2B138",
      gray: "#F4F4F4"
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
