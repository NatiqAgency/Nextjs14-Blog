'use client'

type Props = {
    error: Error & {
        digest?: string
    },
    reset: () => void
}

export default function Error({ error, reset }: Props) {
    return (
        <div className="">
            {error.message}
        </div>
    )
}
