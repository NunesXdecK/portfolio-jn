import Image from "next/image";
import ChatBubble from "../container/chatBubble";
import ImageBubble from "../container/imageBubble";
import Page from "../container/page";
import Text from "../text";

interface ProfilePageProps {
    id?: string,
    isEnglish?: boolean,
    className?: string,
    children?: any | any[],
}

export default function ProfilePage(props: ProfilePageProps) {
    return (
        <Page
            id="profile"
            className="bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
        >
            <ChatBubble
                isLeft
            >
                <Text
                    isEnglish={props.isEnglish}
                    text="Oi, eu sou José."
                    textEnglish="Hi, im José."
                />
            </ChatBubble>
            <ChatBubble
                isLeft
            >
                <Text
                    isEnglish={props.isEnglish}
                    text="Eu trabalho com desenvolvimento desde 2013, começei com JAVA EE e estudo React e React-Native desde 2019."
                    textEnglish="I work with software development since 2013, started with JAVA EE and since 2019 i have been studying React and React-Native."
                />
            </ChatBubble>
            <div className="flex flex-col gap-2">
                <ImageBubble isCenter className="mt-4 mr-20 -mb-52">
                    <Image width={200} height={200}
                        priority
                        className="rounded-full"
                        alt="/alt-image.png"
                        src="/profile-image.png" />
                </ImageBubble>
                <div className="w-full flex justify-center">
                    <div className="flex flex-col gap-2 place-items-end">
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
                                src="/hibernate.png" />
                        </ImageBubble>
                        <div className="flex flex-row gap-2">
                            <ImageBubble>
                                <Image width={35} height={35}
                                    priority
                                    className="rounded-full"
                                    alt="/alt-image.png"
                                    src="/jsf.png" />
                            </ImageBubble>
                        </div>
                        <div className="flex flex-row gap-2">
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
                        <div className="flex flex-row gap-2">
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
                            <ImageBubble>
                                <Image width={35} height={35}
                                    priority
                                    className="rounded-full"
                                    alt="/alt-image.png"
                                    src="/postgres.png" />
                            </ImageBubble>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}