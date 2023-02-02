import Layout from "../components/layout"
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}

export default MyApp
