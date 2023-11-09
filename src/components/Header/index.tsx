import Image from "next/image";
import Link from "next/link";
import { ThemeChanger } from "../Theme";

export default function Header() {
    return (
        <nav className="flex flex-row justify-between items-center py-8">
            <div>
                <Link
                    href={'/'}
                >
                    <Image
                        src={'/logo.svg'}
                        width={158}
                        height={36}
                        alt="logo"
                        className="text-secondary-600 dark:text-white"
                    />
                </Link>
            </div>
            <ul className="flex-1 flex flex-row justify-center gap-10 text-secondary-600 dark:text-white select-none">
                <li>
                    <Link
                        href={'/'}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href={'/contact'}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <input
                className="p-2 pl-4 rounded-md bg-secondary-100 placeholder:text-secondary-400"
                type="text"
                placeholder="Search"
            />
            <ThemeChanger />
        </nav>
    )
}
