import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover dark:text-gray-200"
        style={{
          backgroundImage: "url('https://source.unsplash.com/Im7lZjxeLhg')"
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
