export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-full w-full flex flex-col bg-white dark:bg-[#242535] sm:px-10 xl:px-56 2xl:px-96'>
            {children}
        </div>
    )
}
