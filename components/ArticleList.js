import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Articles.module.css'

const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article) => (
                <ArticleItem key={1} article={article} />
            ))}
        </div>
    )
}

export default ArticleList