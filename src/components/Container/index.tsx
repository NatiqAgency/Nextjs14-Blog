export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-full w-full flex flex-col bg-white dark:bg-[#242535] sm:px-10 md:px-32 lg:px-40 xl:px-56'>
            {children}
        </div>
    )
}
