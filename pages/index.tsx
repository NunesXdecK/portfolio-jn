import Head from "next/head"
import Header from "../components/header"
import Container from "../components/container"
import Page from "../components/container/page"
import NavigationBar from "../components/navigationBar"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Portifolio José Neto</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Portifolio José Neto" />
            </Head>
            <NavigationBar />
            <Header />
            <Container>
                <Page id="start" className="bg-gray-200 text-white">
                    <p>teste 01</p>
                    <p>teste 02</p>
                </Page>
                <Page id="end">
                    <p>teste 01</p>
                    <p>teste 02</p>
                </Page>
            </Container>
        </div>
    )
}