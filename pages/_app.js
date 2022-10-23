import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import Layout from "../components/layout";
import Head from "next/head"

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>{process.env.NEXT_PUBLIC_WEBSITE_DEFAULT_TITLE}</title>
                <meta name="description" content={process.env.NEXT_PUBLIC_WEBSITE_DEFAULT_DESCRIPTION}/>
                <link rel="icon" href="/favicon.ico"/>
                <meta itemProp="name" content={process.env.NEXT_PUBLIC_WEBSITE_DEFAULT_TITLE}/>
                <meta itemProp="description" content={process.env.NEXT_PUBLIC_WEBSITE_DEFAULT_DESCRIPTION}/>
                <meta itemProp="url" content={process.env.NEXT_PUBLIC_DOMAIN_NAME}/>
                <meta itemProp="image" content={process.env.NEXT_PUBLIC_DOMAIN_BANNER_IMAGE}/>
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp
