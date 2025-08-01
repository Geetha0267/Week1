import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [showComponent, setShowComponent] = useState("book");

  return (
    <div style={{ padding: '20px' }}>
      <h1>📚 Blogger App</h1>

      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => setShowComponent("book")}>Book Details</button>
        <button onClick={() => setShowComponent("blog")}>Blog Details</button>
        <button onClick={() => setShowComponent("course")}>Course Details</button>
      </div>

      {/* ✅ Conditional Rendering using if-else style */}
      {showComponent === "book" && <BookDetails />}
      {showComponent === "blog" ? <BlogDetails /> : null}
      {showComponent === "course" && <CourseDetails />}
    </div>
  );
}

export default App;
