'use client'

import { useRouter } from "next/navigation"

type Props = {
    children: React.ReactNode
    href: string
    className?: string
}

export const Redirect = ({ children, href, className }: Props) => {
    const router = useRouter()

    const handleRedirect = () => {
        router.push(href)
    }
    return (
        <div
            onClick={() => handleRedirect()}
            className={className && className}
        >
            {children}
        </div>
    )
}

