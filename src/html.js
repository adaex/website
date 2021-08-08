import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="https://gw.alipayobjects.com/mdn/rms_f3f48a/afts/img/A*ZtzKRZPgCE8AAAAAAAAAAAAAARQnAQ" type="image/png"/>
      </head>
      <body>
        <script type="text/javascript">
          if (/micromessenger/.test(navigator.userAgent.toLowerCase())) {
            document.writeLn('<p>由于众所周知的原因，微信屏蔽了支付宝的链接，请手动复制链接并在浏览器中访问 <a href="https://afi-team.alipay.com">https://afi-team.alipay.com</a> 。我们相信一个更开放的互联网早晚会到来！</p>');
          } else {
            document.writeLn('<p>正在重定向至 afi-team.alipay.com</p>');
            location.href = 'https://afi-team.alipay.com';
          }
         </script>
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
