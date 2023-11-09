import Image from "next/image"

type Props = {
    article: {
        id: number;
        tag: string;
        title: string;
        slug: string;
        createdAt: string;
        author: string;
    }
}

export const ItemArticle = ({ article }: Props) => {
    return (
        <div
            className="rounded-xl border-2 border-secondary-100 p-4 hover:shadow-lg transition-all ease-in-out duration-100"
        >
            <div
                className="relative pt-[50%] rounded-md overflow-hidden mb-6"
            >
                <Image
                    className="object-cover"
                    src={'/images/article.jpg'}
                    alt="article"
                    fill
                />
            </div>
            <div
                className="p-2 flex flex-col items-start"
            >
                <div
                    className="bg-primary py-1 px-2 rounded-md mb-4"
                >
                    {article.tag}
                </div>
                <div
                    className="mb-6"
                >
                    {article.title}
                </div>
                <div
                    className="flex flex-row items-center text-secondary-400"
                >
                    <div
                        className="relative w-9 h-9 rounded-full overflow-hidden"
                    >
                        <Image
                            className="object-cover"
                            src={'/images/profile_pic.jpg'}
                            alt="profile_pic"
                            fill
                        />
                    </div>
                    <div>
                        {article.author}
                    </div>
                    <div>
                        {article.createdAt}
                    </div>
                </div>
            </div>
        </div>
    )
}