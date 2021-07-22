import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
      <meta http-equiv="refresh" content="0;URL=https://afi-team.alipay.com/" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="https://gw.alipayobjects.com/mdn/rms_f3f48a/afts/img/A*ZtzKRZPgCE8AAAAAAAAAAAAAARQnAQ" type="image/png"/>
      </head>
      <body>
        正在重定向至 afi-team.alipay.com
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
