'use client'

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { SignOutButton } from "./singout";

export function SignInButton() {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <>...</>;
    }

    if (status === 'authenticated') {
        return (
            <>
                <div className="relative h-8 w-8 rounded-full overflow-hidden">
                    <Link href={`/dashboard`}>
                        <Image
                            src={session.user?.image!}
                            alt="Login image"
                            fill
                        />
                    </Link>
                </div>
                <SignOutButton />
            </>
        );
    }

    return <button onClick={() => signIn()}>Sign in</button>;
}
