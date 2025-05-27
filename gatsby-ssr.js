import * as React from "react"

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents([
    <meta
      key="google-site-verification"
      name="google-site-verification"
      content="strh2kXWs-eYvP8zwz0bIZMLBThPA0mLKvxzYftfQ6k"
    />,
  ])
}

export const wrapRootElement = ({ element }) => {
  return <React.StrictMode>{element}</React.StrictMode>
}
