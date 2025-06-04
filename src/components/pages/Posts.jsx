import PostsList from "../variable/PostsList";

export default function Posts() {
  // presa dei dati

  return (
    <>
      <div className="container-sm  mt-5">
        <h1 className="text-center mb-4">- POSTS HOME -</h1>
        <div className="row g-2">
          <PostsList />
        </div>
      </div>
    </>
  );
}
