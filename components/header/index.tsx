import { useState } from "react"
import Container from "../container"
import SwitchButton from "../button/switchButton"
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'


export default function Header() {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="fixed top-0 min-w-full h-20 bg-gray-800">
            <Container className="h-20 items-center p-4">
                <SwitchButton
                    isActive={isActive}
                    onSetActive={setIsActive}
                    contentOn={(<MoonIcon className="h-5 w-5 text-white" />)}
                    contentOff={(<SunIcon className="h-5 w-5 text-white" />)}
                />
                <SwitchButton
                    isActive={isActive}
                    onSetActive={setIsActive}
                    contentOn={(<MoonIcon className="h-5 w-5 text-white" />)}
                    contentOff={(<SunIcon className="h-5 w-5 text-white" />)}
                />
            </Container>
        </div>
    )
}