export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='px-80'>
            {children}
        </div>
    )
}
