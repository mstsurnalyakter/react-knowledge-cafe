import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = blog;
  console.log(blog);
  return (
    <section>
      <img src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-14" src={author_img} alt={`${author} image`} />
          <div className="ml-6">
            <h3 className="text-3xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash,index) => (
          <span key={index}>
            <a href=""> #{hash} </a>
          </span>
        ))}
      </p>
    </section>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
