export default function Header() {
    return (
        <div className="bg-[#B00] text-white flex justify-evenly items-center">
            <HeaderItem>Home</HeaderItem>
            <HeaderItem>First Team</HeaderItem>
            <HeaderItem>Latest News</HeaderItem>
            <HeaderItem>Match Programmes</HeaderItem>
            <HeaderItem>Club Information</HeaderItem>
            <HeaderItem>Tickets</HeaderItem>
            <HeaderItem>Contact Us</HeaderItem>
        </div>
    )
}

const HeaderItem = (props: any) => {
    return (
        <div className="p-4">
            {props.children}
        </div>
    )
}