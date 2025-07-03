import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { useTranslation } from 'react-i18next';

const BlogPost = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const posts = t('blog.posts', { returnObjects: true });
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div className="container">게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="section container">
      <h1>{post.title}</h1>
      <p><strong>{t('blog.by')}:</strong> {post.author} | {post.date}</p>
      <hr />
      <p>{post.content}</p>
      <div className="text-center" style={{ marginTop: '2rem' }}>
        <a href="/services" className="btn">{t('blog.readMoreCTA')}</a>
      </div>
    </div>
  );
};

export default BlogPost;

