import './style/Post.css';

const PostList = ({ posts }) => {

    return (
      <section className="post-list">
        {posts.map((post) => (
          <article key={post.id} className="post">
            {post.mediaUrl && (
              <figure className="post-media">
                <img src={post.mediaUrl} alt="Post media" />
              </figure>
            )}
            <p className="post-content">{post.content}</p>
                <header className="post-header">
                <p className="post-content">{post.User && post.User.email ? post.User.email : 'Вы'}</p>
                <time className="post-date" dateTime={post.createdAt}>
                    {new Date(post.createdAt).toLocaleString()}
                </time>
            </header>
          </article>
        ))}
      </section>
    );
  };  

export default PostList;