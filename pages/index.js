import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>{process.env.NEXT_PUBLIC_WEBSITE_DEFAULT_TITLE}</title>
                <meta name="description" content={process.env.NEXT_PUBLIC_WEBSITE_DEFAULT_DESCRIPTION}/>
                <link rel="icon" href="/favicon.ico"/>
                <meta itemProp="name" content={process.env.NEXT_PUBLIC_WEBSITE_DEFAULT_TITLE}/>
                <meta itemProp="description" content={process.env.NEXT_PUBLIC_WEBSITE_DEFAULT_DESCRIPTION}/>
                <meta itemProp="url" content={process.env.NEXT_PUBLIC_DOMAIN_NAME}/>
                <meta itemProp="image" content={process.env.NEXT_PUBLIC_DOMAIN_BANNER_IMAGE}/>
            </Head>

            <main>
                <h1>Simple Blog Next.js</h1>
            </main>

            <footer></footer>
        </div>
    )
}
