import Head from "next/head"
import { useState } from "react"
import Header from "../components/header"
import Container from "../components/container"
import ProjectPage from "../components/projectPage"
import ProfilePage from "../components/profilePage"
import ContactPage from "../components/contactPage"
import NavigationBar from "../components/navigationBar"

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
                <ProjectPage isEnglish={isEnglish} />
                <ContactPage isEnglish={isEnglish} />
            </Container>
        </div >
    )
}