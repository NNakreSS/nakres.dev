// components
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  articlesSelector,
  fetchArticles,
} from "../../redux/slicers/articlesSlice";
import { useDispatch, useSelector } from "react-redux";
import { ArticleCard } from "../../components/Card";
import Article from "../../interfaces/IArticle";

const Articles = () => {
  const dispatch: any = useDispatch();
  const { articles, loading, error } = useSelector(articlesSelector);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch, fetchArticles]);

  return (
    <motion.div
      className="flex flex-col gap-4 gap-y-40 min-h-[55vh]"
      initial={{ opacity: 0, translateY: 100 }}
      animate={{ opacity: 1, translateY: 0 }}
    >
      {loading ? (
        <span className="mx-auto text-text-main text-4xl">Loading...</span>
      ) : !error ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...articles, ...articles, ...articles, ...articles]?.map(
            (article: Article, index: number) => (
              <ArticleCard
                key={index}
                article={article}
                className="p-5 flex flex-col justify-stretch gap-5"
              />
            )
          )}
        </div>
      ) : (
        <span className="mx-auto text-danger text-4xl">{error}</span>
      )}
    </motion.div>
  );
};

export default Articles;
