import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation();
  const posts = t('blog.posts', { returnObjects: true });
  const featured = t('blog.featured', { returnObjects: true });

  return (
    <div className="section container">
      <h1 className="text-center">{t('blog.title')}</h1>

      <h2>{t('blog.featuredTitle')}</h2>
      <div className="card">
        {featured.map((post, idx) => (
          <a href={post.link} key={idx} target="_blank" rel="noopener noreferrer">
            <img src={post.thumbnail} alt="thumbnail" style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{post.title}</h3>
          </a>
        ))}
      </div>

      <h2>{t('blog.recentTitle')}</h2>
      <div className="card">
        {posts.map((post, idx) => (
          <Link to={`/blog/${post.id}`} key={idx}>
            <h3>{post.title}</h3>
            <p className="line-clamp">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;