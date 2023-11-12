import Image from "next/image";
import Link from "next/link";
import { ThemeChanger } from "../Theme";
import { SignInButton } from "../Buttons/signin";

export default function Header() {
    return (
        <nav className="flex flex-row justify-between items-center py-8">
            <div className="mr-auto">
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
            <input
                className="p-2 pl-4 rounded-md bg-secondary-100 placeholder:text-secondary-400"
                type="text"
                placeholder="Search"
            />
            <div className="mx-3">
                <SignInButton />
            </div>
            <ThemeChanger />
        </nav>
    )
}
