import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, avatarUrl, title, topic, author} = blogItemDetails

  return (
    <li className="list-item">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="blog-item-container">
          <img src={imageUrl} alt={`item${id}`} className="blog-item-img" />
          <div className="blog-item-info">
            <p className="blog-item-topic">{topic} </p>
            <h1 className="blog-item-title">{title}</h1>
            <div className="author-info">
              <img src={avatarUrl} className="avatar-img" alt={`avatar${id}`} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
