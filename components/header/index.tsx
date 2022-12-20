import Image from "next/image"
import { useState } from "react"
import Container from "../container"
import Page from "../container/page"
import ProfileText from "../text/profileText"
import ProjectText from "../text/projectText"
import ContactText from "../text/contactText"
import SwitchButton from "../button/switchButton"
import { SunIcon, MoonIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

interface HeaderProps {
    isDark: boolean,
    isEnglish: boolean,
    onSetDark: (arg0: boolean) => void,
    onSetEnglish: (arg0: boolean) => void,
}

export default function Header(props: HeaderProps) {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const wh = 25
    let classNameMenuHolder = "fixed left-0 min-h-screen bg-gray-800"
    let classNameMenuContent = "hidden"
    if (isOpenMenu) {
        classNameMenuHolder = classNameMenuHolder + " w-[50%] sm:w-44"
        classNameMenuContent = "pt-20 flex flex-col gap-4 w-full"
    }
    return (
        <>
            <div className={classNameMenuHolder}>
                <div className={classNameMenuContent}>
                    <ProfileText onClick={setIsOpenMenu} isEnglish={props.isEnglish} />
                    <ProjectText onClick={setIsOpenMenu} isEnglish={props.isEnglish} />
                    <ContactText onClick={setIsOpenMenu} isEnglish={props.isEnglish} />
                </div>
            </div>
            <div className="fixed top-0 min-w-full h-20 bg-gray-800">
                <Container className="h-20 items-center">
                    <Page>
                        <div className="flex flex-row justify-between items-center">
                            <SwitchButton
                                className="mx-2"
                                isActive={isOpenMenu}
                                onSetActive={setIsOpenMenu}
                                contentOn={(<XMarkIcon className="h-6 w-6 text-white" />)}
                                contentOff={(<Bars3Icon className="h-6 w-6 text-white" />)}
                            />
                            <div className="hidden sm:flex w-full sm:flex-row justify-center items-center">
                                <ProfileText isEnglish={props.isEnglish} />
                                <ProjectText isEnglish={props.isEnglish} />
                                <ContactText isEnglish={props.isEnglish} />
                            </div>
                            <div className="flex flex-row items-center">
                                <SwitchButton
                                    className="rounded-full mx-2"
                                    isActive={props.isDark}
                                    onSetActive={props.onSetDark}
                                    contentOn={(<MoonIcon className="h-5 w-5 text-white" />)}
                                    contentOff={(<SunIcon className="h-5 w-5 text-white" />)}
                                />
                                <SwitchButton
                                    className="rounded-full mx-2"
                                    isActive={props.isEnglish}
                                    onSetActive={props.onSetEnglish}
                                    contentOn={(<Image width={wh} height={wh} className="rounded-full" alt="/alt-image.png" src="/usa-flag.png" />)}
                                    contentOff={(<Image width={wh} height={wh} className="rounded-full" alt="/alt-image.png" src="/br-flag.png" />)}
                                />
                            </div>
                        </div>
                    </Page>
                </Container>
            </div>
        </>
    )
}