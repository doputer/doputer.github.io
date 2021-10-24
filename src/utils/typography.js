import Typography from 'typography'
import GitHubTheme from 'typography-theme-github'

GitHubTheme.overrideThemeStyles = () => {
  return {
    a: {
      boxShadow: `none`,
      textDecoration: `none`,
      color: `#ed2945`,
    },

    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
      textDecoration: `none`,
    },

    'a:hover': {
      textDecoration: `none`,
      color: `#2876d2`,
    },

    h1: {
      fontWeight: 800,
      lineHeight: 1.2,
      fontFamily: 'Lato',
    },

    h2: {
      fontWeight: 700,
      lineHeight: 1.2,
      marginTop: '56px',
      marginBottom: '20px',
      fontFamily: 'Lato',
    },

    ul: {
      marginBottom: '6px',
    },

    li: {
      marginBottom: '2px',
    },
  }
}

const typography = new Typography(GitHubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
