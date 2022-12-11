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
                <Page
                    isFirst
                    id="profile"
                    className="bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                >
                    <ChatBubble
                        isLeft
                    >
                        <Text
                            isEnglish={isEnglish}
                            text="Oi, eu sou José."
                            textEnglish="Hi, im José."
                        />
                    </ChatBubble>
                    <ChatBubble
                        isLeft
                    >
                        <Text
                            isEnglish={isEnglish}
                            text="Eu trabalho com desenvolvimento desde 2013, começei com JAVA EE e estudo React e React-Native desde 2019."
                            textEnglish="I work with software development since 2013, started with JAVA EE and since 2019 i have been studying React and React-Native."
                        />
                    </ChatBubble>
                    <ImageBubble className="my-4">
                        <Image width={200} height={200}
                            priority
                            className="rounded-full"
                            alt="/alt-image.png"
                            src="/profile-image.png" />
                    </ImageBubble>
                    <div className="flex flex-row gap-2 justify-between">
                        <ImageBubble>
                            <Image width={35} height={35}
                                priority
                                className="rounded-full"
                                alt="/alt-image.png"
                                src="/java.png" />
                        </ImageBubble>
                        <ImageBubble>
                            <Image width={35} height={35}
                                priority
                                className="rounded-full"
                                alt="/alt-image.png"
                                src="/jsf.png" />
                        </ImageBubble>
                    </div>

                    <div className="mt-2 flex flex-row gap-2 justify-between">
                        <ImageBubble>
                            <Image width={35} height={35}
                                priority
                                className="rounded-full"
                                alt="/alt-image.png"
                                src="/hibernate.png" />
                        </ImageBubble>
                        <ImageBubble>
                            <Image width={35} height={35}
                                priority
                                className="rounded-full"
                                alt="/alt-image.png"
                                src="/postgres.png" />
                        </ImageBubble>
                        <ImageBubble>
                            <Image width={35} height={35}
                                priority
                                className="rounded-full"
                                alt="/alt-image.png"
                                src="/react.png" />
                        </ImageBubble>
                        <ImageBubble>
                            <Image width={35} height={35}
                                priority
                                className="rounded-full"
                                alt="/alt-image.png"
                                src="/react-native.png" />
                        </ImageBubble>
                    </div>
                    <div className="mt-4 flex flex-row gap-2 justify-between">
                        <ImageBubble>
                            <Image width={35} height={35}
                                priority
                                className="rounded-full"
                                alt="/alt-image.png"
                                src="/next-js.png" />
                        </ImageBubble>
                        <ImageBubble>
                            <Image width={35} height={35}
                                priority
                                className="rounded-full"
                                alt="/alt-image.png"
                                src="/node-js.png" />
                        </ImageBubble>
                        <ImageBubble>
                            <Image width={35} height={35}
                                priority
                                className="rounded-full"
                                alt="/alt-image.png"
                                src="/firebase.png" />
                        </ImageBubble>
                        <ImageBubble>
                            <Image width={35} height={35}
                                priority
                                className="rounded-full"
                                alt="/alt-image.png"
                                src="/tailwindcss.png" />
                        </ImageBubble>
                    </div>
                </Page>
            </Container>
        </div >
    )
}