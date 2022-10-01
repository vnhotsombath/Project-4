import { Link } from 'react-router-dom';
import post from '../../../models/post';

export default function Post({ post }) {

const imgFile = "http://localhost:3000/images/";

return(
    <div className="post">
    {post.photo && <img className="postImg" src={imgFile + post.photo} alt="" />}
    <div className="postInfo">
        <div className="postCats">
            {post.categories.map((c) => (
                <span className="postCat">{c.name}</span>
            ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">{post.title}</span>
        </Link>
        <span className="postDate">
            {new Date(post.CreatedAt).toDateString()}
        </span>
    </div>
    <p className="postDesc">{post.desc}</p>
    </div>
)
}