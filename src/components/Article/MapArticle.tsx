import { ItemArticle } from "./ItemArticle"

type Props = {
    articles: {
        id: number;
        tag: string;
        title: string;
        slug: string;
        createdAt: string;
        author: string;
    }[]
}

export const MapArticles = ({ articles }: Props) => {
    return (
        <>
            {
                articles.map(article => (
                    <ItemArticle key={article.id} article={article}/>
                ))
            }
        </>
    )
}