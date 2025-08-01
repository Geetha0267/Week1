import React from 'react';

const blogs = [
  { id: 1, title: "React Basics", date: "Aug 1, 2025" },
  { id: 2, title: "JSX vs HTML", date: "Aug 2, 2025" },
];

const BlogDetails = () => {
  return (
    <div>
      <h2>📝 Blog Details</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <b>{blog.title}</b> — {blog.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
