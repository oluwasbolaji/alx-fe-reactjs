import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  // Get the dynamic id from URL
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post</h1>
      <p>This is blog post with ID: {id}</p>
    </div>
  );
}

export default BlogPost;
