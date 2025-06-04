import { NavLink } from "react-router";
import { usePosts } from "../Context/PostsContext";

export default function PostsList() {
  const { posts } = usePosts();
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="col-4  ">
          <div className="card ">
            <img
              src={`http://localhost:3000${post.image}`}
              className="card-img-top "
              alt={post.title}
            />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <hr />
              <small>Tags: {post.tags}</small>

              <hr />

              {/* <p className="card-text fs-6 overflow-auto">{post.content}</p> */}
            </div>
            <NavLink className="btn btn-secondary" to={`/Posts/${post.id}`}>
              Apri
            </NavLink>
          </div>
        </div>
      ))}
    </>
  );
}
