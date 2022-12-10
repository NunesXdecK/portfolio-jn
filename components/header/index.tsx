import SwitchButton from "../button/switchButton"
import { useState } from "react"

export default function Header() {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="p-8 fixed top-0 min-w-full h-20 bg-cyan-100">
            <SwitchButton
                isActive={isActive}
                onSetActive={setIsActive}
                contentOn={(<span>ON</span>)}
                contentOff={(<span>OFF</span>)}
            />
        </div>
    )
}