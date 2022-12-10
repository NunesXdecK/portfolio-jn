import Head from "next/head"
import Container from "../components/container"
import Header from "../components/header"
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
            <div className="flex justify-center">
                <div className="w-[1260px]">
                    <Container id="start" className="bg-gray-200 text-white">
                        <span>teste 01</span>
                        <span>teste 02</span>
                    </Container>
                    <Container id="end">
                        <span>teste 01</span>
                        <span>teste 02</span>
                    </Container>
                </div>
            </div>
        </div>
    )
}