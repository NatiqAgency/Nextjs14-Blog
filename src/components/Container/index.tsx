export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-white dark:bg-[#242535] sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80'>
            {children}
        </div>
    )
}
