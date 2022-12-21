import Image from "next/image"
import Button from "../button"
import Page from "../container/page"
import InputText from "../inputText"
import InputTextArea from "../inputTextArea"
import Text from "../text"

interface ContactPageProps {
    id?: string,
    isEnglish?: boolean,
    className?: string,
    children?: any | any[],
}

export default function ContactPage(props: ContactPageProps) {
    return (
        <Page
            id="contact"
            className="bg-gray-400 dark:bg-gray-700 "
        >
            <div className="w-full flex flex-row gap-2 justify-center">
                <div className="border-1 border-gray-300">
                    <Text
                        isEnglish={props.isEnglish}
                        text="Me mande uma mensagem"
                        textEnglish="Send me a message"
                        className="text-gray-200 text-xl"
                    />
                    <InputText
                        placeholder="Nome"
                        placeholderEnglish="Name"
                        isEnglish={props.isEnglish}
                    />
                    <InputText
                        placeholder="Telefone"
                        placeholderEnglish="Telephone"
                        isEnglish={props.isEnglish}
                    />
                    <InputText
                        placeholder="E-mail"
                        placeholderEnglish="E-mail"
                        isEnglish={props.isEnglish}
                    />
                    <InputTextArea
                        placeholder="Mensagem"
                        placeholderEnglish="Message"
                        isEnglish={props.isEnglish}
                    />
                    <Button
                        className="mt-2 p-2 rounded w-full duration-200 text-gray-100 hover:text-gray-200 bg-indigo-600 hover:bg-indigo-800"
                    >
                        {props.isEnglish ? "SEND" : "ENVIAR"}
                    </Button>

                    <div className="w-full flex flex-row gap-2 py-2 justify-center">
                        <a href="https://www.linkedin.com/in/jos%C3%A9-neto-54b571b6" className="duration-200 bg-gray-200 hover:bg-gray-400 rounded-full self-center" target="_blank" rel="noreferrer">
                            <svg className="w-8 h-8" viewBox="-11.493675 -16.3118 99.61185 97.8708" xmlns="http://www.w3.org/2000/svg" >
                                <path fill="#0a66c2" d="M72.865 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836m-16.873-5.433h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2H4.781A4.728 4.728 0 000 4.6744v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67" />
                                <path fill="#0a66c2" d="M72.164 56.4114a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1" />
                            </svg>
                        </a>
                        <a href="https://github.com/NunesXdecK" className="p-1 duration-200 bg-gray-200 hover:bg-gray-400 rounded-full self-center" target="_blank" rel="noreferrer" >
                            <svg className="w-6 h-6" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#1B1F23" transform="scale(64)" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
                            </svg>
                        </a>
                        <a href="https://wa.me/5595984089268" className="duration-200 bg-gray-200 hover:bg-gray-400 rounded-full self-center" target="_blank" rel="noreferrer" >
                            <svg className="w-8 h-8" viewBox="0 0 1280.000000 720.000000" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                                <g fill="#22c55e" transform="translate(0.000000,720.000000) scale(0.100000,-0.100000)">
                                    <path d="M6185 6830 c-370 -31 -781 -148 -1129 -322 -627 -313 -1120 -809 -1426 -1433 -450 -916 -437 -1938 35 -2893 l75 -151 -277 -822 c-208 -619 -274 -826 -266 -838 6 -9 20 -17 32 -19 16 -3 21 -10 21 -33 0 -27 3 -30 23 -23 71 22 647 206 1123 358 l550 176 145 -68 c569 -272 1149 -370 1754 -296 902 110 1714 612 2219 1374 409 616 614 1380 555 2077 -54 646 -290 1241 -693 1745 -396 496 -960 872 -1577 1052 -132 39 -369 88 -509 106 -115 15 -519 21 -655 10z m640 -674 c580 -87 1074 -334 1485 -746 400 -399 638 -872 706 -1405 21 -166 22 -485 1 -650 -71 -565 -326 -1083 -732 -1490 -300 -302 -628 -505 -1025 -636 -263 -86 -487 -121 -790 -121 -249 -1 -392 15 -605 67 -290 70 -482 152 -807 344 -25 15 -43 10 -488 -132 -254 -81 -466 -145 -470 -142 -5 3 57 200 136 438 79 237 144 443 144 456 0 13 -26 65 -59 115 -356 553 -491 1156 -400 1791 53 371 180 697 391 1001 440 637 1131 1044 1908 1124 119 12 486 4 605 -14z" />
                                    <path d="M5325 5227 c-62 -21 -114 -58 -191 -138 -170 -178 -250 -364 -261 -614 -13 -287 99 -604 352 -995 423 -653 848 -1036 1410 -1270 288 -120 476 -182 600 -200 93 -12 277 15 391 59 103 40 247 134 311 204 98 108 183 348 183 519 0 71 -2 80 -27 108 -51 56 -685 387 -760 397 -68 9 -95 -10 -207 -141 -174 -203 -228 -256 -259 -256 -36 0 -277 121 -392 197 -281 186 -515 441 -698 765 -15 26 -27 51 -27 57 0 6 32 46 71 88 94 103 125 150 165 247 46 109 44 138 -17 303 -88 240 -116 315 -164 444 -50 134 -88 193 -139 214 -47 20 -292 28 -341 12z" />
                                </g>
                            </svg>

                        </a>
                    </div>
                </div>
            </div>
        </Page>
    )
}