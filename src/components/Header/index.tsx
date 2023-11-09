import Image from "next/image";

export default function Header() {
    return (
        <nav className="flex flex-row bg-slate-300 justify-between items-center">
            <div>
                <Image
                    src={'/logo.svg'}
                    width={158}
                    height={36}
                    alt="logo"
                />
            </div>
            <ul className="flex flex-row justify-between">
                <li>Home</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <div>
                <input type="text" placeholder="Search" />
            </div>
            <div>
                Theme
            </div>
        </nav>
    )
}
