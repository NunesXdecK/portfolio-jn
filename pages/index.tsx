import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import Text from "../components/text"
import Header from "../components/header"
import Container from "../components/container"
import Page from "../components/container/page"
import NavigationBar from "../components/navigationBar"
import ChatBubble from "../components/container/chatBubble"
import ImageBubble from "../components/container/imageBubble"
import ProfilePage from "../components/profilePage"

export default function Home() {
    const [isDark, setIsDark] = useState(false)
    const [isEnglish, setIsEnglish] = useState(false)

    return (
        <div>
            <Head>
                <title>Portifolio José de Souza Nunes Neto</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Portifolio José de Souza Nunes Neto" />
            </Head>
            <NavigationBar />
            <Header
                isDark={isDark}
                isEnglish={isEnglish}
                onSetDark={setIsDark}
                onSetEnglish={setIsEnglish}
            />
            <Container isDark={isDark}>
                <ProfilePage isEnglish={isEnglish} />
            </Container>
        </div >
    )
}