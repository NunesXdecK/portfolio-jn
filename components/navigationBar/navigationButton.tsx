interface NavigationButtonProps {
    id: string,
}

export default function NavigationButton(props: NavigationButtonProps) {
    //<span className="">&bull;</span>
    return (
        <a href={props.id}>
            <div className="shadow p-1 rounded-full duration-100 bg-gray-600 hover:bg-gray-400 hover:p-2 hover:cursor-pointer"></div>
        </a>
    )
}