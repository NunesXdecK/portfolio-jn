import NavigationButton from "./navigationButton"

export default function NavigationBar() {
    return (
        <div className="fixed right-0 w-10 min-h-screen bg-transparent">
            <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
                <NavigationButton id="#profile" />
            </div>
        </div>
    )
}