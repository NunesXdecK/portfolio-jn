import Container from "../container"
import SwitchButton from "../button/switchButton"
import { SunIcon, MoonIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import Image from "next/image"
import { useState } from "react"
import ProfileText from "../text/profileText"

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
                    <ProfileText isEnglish={props.isEnglish} />
                </div>
            </div>
            <div className="fixed top-0 min-w-full h-20 bg-gray-800">
                <Container className="h-20 items-center">
                    <div className="flex flex-row justify-between items-center px-4">
                        <SwitchButton
                            className="mx-2"
                            isActive={isOpenMenu}
                            onSetActive={setIsOpenMenu}
                            contentOn={(<XMarkIcon className="h-6 w-6 text-white" />)}
                            contentOff={(<Bars3Icon className="h-6 w-6 text-white" />)}
                        />
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
                </Container>
            </div>
        </>
    )
}