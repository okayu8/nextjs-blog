/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      'md': '768px',
      'lg': '882px',
      'xl': '1164px',
    },
    extend: {
      colors: {
        bg: {
          base: "#F5F5F5",
          baseHover: "#EBEBEB", 
          header: "#555",
          headerScroll: "rgba(0, 0, 0, 0.5)",
          panel: "#FEFEFE",
          tag: "#8F8F8F",
          tagHover: "#AAAAAA",
          pre: "#EEE",
          code: "#DDD",
          h2: "#EBEBEB"
        },
        font: {
          base: "#333333",
          link: "#016694",
          siteTitle: "#EEFFFF",
          pageTitle: "#666666",
          date: "#5c5c5c",
          topDate: "#DEDEDE",
          navItem: "#EEFFFF",
          white: "#FFF"
        },
        border: {
          h1: "#AAAAAA",
          h2: "#666666"
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'YuGothic', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo', 'sans-serif'],
      },
      fontSize: {
        '12': '12px',
        '16': '16px', 
        '18': '18px',
        '22': '22px',
        '24': '24px',
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '40': '40px',
        '64': '64px',
        '84': '84px',
        '268': '268px',
        '720': '720px',
        '1120': '1120px'
      },
      height: {
        'header': '64px'
      },
      maxWidth: {
        'content': '720px',
        'wide': '1120px',
        'toc': '268px'
      },
      transitionProperty: {
        'hover': 'all'
      },
      transitionDuration: {
        '100': '100ms',
        '200': '200ms'
      },
      boxShadow: {
        'post': '2px 2px 4px rgba(213, 213, 213, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.7)',
        'postHover': '8px 8px 16px rgba(213, 213, 213, 0.3), -8px -8px 16px rgba(255, 255, 255, 0.7)',
        'topPost': '4px 4px 8px rgba(213, 213, 213, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.7)',
        'topPostHover': '8px 8px 16px rgba(213, 213, 213, 0.3), -8px -8px 16px rgba(255, 255, 255, 0.7)'
      }
    },
  },
  plugins: [],
}