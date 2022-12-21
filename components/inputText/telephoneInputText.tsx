import InputText from "."

interface TelephoneInputTextProps {
    id?: string,
    value?: string,
    title?: string,
    className?: string,
    placeholder?: string,
    titleEnglish?: string,
    placeholderEnglish?: string,
    isEnglish?: boolean,
    isLoading?: boolean,
    onSet?: (arg0: any) => void,
}

export const ONLY_CHARACTERS_PATTERN = "[A-Za-z]"
export const ONLY_CHARACTERS_PATTERN_TWO = /[0-9]/g

export const handleMountMask = (text: string, mask: string) => {
    let maskedText = ""
    if (text && mask) {
        let lastDigit = 0
        let maskLength = mask.length
        let length = text.length
        if (length > 2) {
            for (let i = 1; i <= length; i++) {
                const textChar = text.substring(i, i - 1)
                for (let im = 1; im <= maskLength; im++) {
                    const maskChar = mask.substring(im, im - 1)
                    if (maskChar === "9" && im > lastDigit) {
                        maskedText = maskedText + textChar
                        lastDigit = im
                        break
                    } else if (maskChar !== "9" && maskedText.indexOf(maskChar) === -1) {
                        maskedText = maskedText + maskChar
                    }
                }
            }
        } else {
            maskedText = text
        }
    }
    return maskedText
}

export const handleRemoveMaskTelephone = (text: string) => {
    if (text) {
        text = text?.trim()
        text = text?.replace(new RegExp(ONLY_CHARACTERS_PATTERN), "")
        text = text?.replaceAll("55+ ", "")?.replaceAll("(", "")?.replaceAll(")", "")?.replaceAll(" ", "")?.replaceAll("-", "")
    }
    return text
}
export const handleMaskTelephone = (text: string) => {
    if (text && text.length > 0) {
        text = handleRemoveMaskTelephone(text)
        let mask = "(99) 99999-9999"
        if (text.length === 10) {
            mask = "(99) 9999-9999"
        }
        text = "" + handleMountMask(text, mask)
    }
    return text
}

export const isTelephoneValid = (text: string) => {
    if (!text || text.length === 0) {
        return false
    }
    text = handleRemoveMaskTelephone(text)
    return text?.length === 0 || (text.length > 9 && text.length < 12)
}

export default function TelephoneInputText(props: TelephoneInputTextProps) {
    const handleOnSet = (value: string) => {
        if (props.onSet) {
            props.onSet(value)
        }
    }
    let text = handleMaskTelephone(props.value ?? "")
    let test = isTelephoneValid(props.value ?? "")
    return (
        <InputText
            value={text}
            id={props.id}
            title={props.title}
            onSet={handleOnSet}
            isLoading={props.isLoading}
            className={props.className}
            isEnglish={props.isEnglish}
            placeholder={props.placeholder}
            titleEnglish={props.titleEnglish}
            placeholderEnglish={props.placeholderEnglish}
            isInvalid={props.value?.length === 0 ? false : !test}
        />
    )
}