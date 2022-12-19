import Button from "../button"
import Page from "../container/page"
import InputText from "../inputText"
import InputTextArea from "../inputTextArea"

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
            className="bg-gray-400 text-black dark:bg-gray-700 dark:text-white"
        >
            <div className="w-full flex flex-row gap-2 justify-center">
                <div className="border-1 border-gray-300">
                    <InputText
                        title="Nome"
                        titleEnglish="Name"
                        isEnglish={props.isEnglish}
                    />
                    <InputText
                        title="Telefone"
                        titleEnglish="Telephone"
                        isEnglish={props.isEnglish}
                    />
                    <InputText
                        title="E-mail"
                        isEnglish={props.isEnglish}
                    />
                    <InputTextArea
                        title="Mensagem"
                        titleEnglish="Message"
                        isEnglish={props.isEnglish}
                    />
                    <Button
                        className="mt-2 p-2 rounded w-full duration-200 text-gray-100 hover:text-gray-200 bg-indigo-600 hover:bg-indigo-800"
                    >
                        ENVIAR
                    </Button>
                </div>
            </div>
        </Page>
    )
}