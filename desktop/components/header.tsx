import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-[#B00] text-white flex justify-evenly items-center">
            <HeaderItem link={'/'}>Home</HeaderItem>
            <HeaderItem link={'/first-team'}>First Team</HeaderItem>
            <HeaderItem link={'/latest-news'}> Latest News</HeaderItem>
            <HeaderItem link={'/club-information'}>Club Information</HeaderItem>
            <HeaderItem link={'/tickets'}>Tickets</HeaderItem>
            <HeaderItem link={'/contact-us'}>Contact Us</HeaderItem>
            <HeaderItem link={'/customer'}>Login</HeaderItem>
        </div>
    )
}

const HeaderItem = (props: any) => {
    return (
        <Link href={props.link} >
            <div className="p-4">
                {props.children}
            </div>
        </Link>
    )
}