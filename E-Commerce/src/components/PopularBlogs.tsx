const PopularBlogs = () => {
  const blogs = [
    {
      title: "My Amazing Blog Title 1",
      author: "Jordan",
      likes: 142,
      comments: 44,
    },
    {
      title: "My Amazing Blog Title 2",
      author: "John",
      likes: 153,
      comments: 25,
    },
    {
      title: "Exploring JavaScript ES2025",
      author: "Alice",
      likes: 98,
      comments: 12,
    },
    {
      title: "React Performance Hacks",
      author: "Emma",
      likes: 210,
      comments: 67,
    },
    {
      title: "CSS Grid vs Flexbox",
      author: "Tom",
      likes: 176,
      comments: 39,
    },
    {
      title: "How I Built My Portfolio",
      author: "Sarah",
      likes: 134,
      comments: 21,
    },
    {
      title: "A Guide to Node.js Streams",
      author: "David",
      likes: 88,
      comments: 10,
    },
    {
      title: "Debugging Like a Pro",
      author: "Michael",
      likes: 195,
      comments: 58,
    },
    {
      title: "Async/Await in Depth",
      author: "Linda",
      likes: 124,
      comments: 18,
    },
    {
      title: "Next.js vs Remix: 2025 Showdown",
      author: "Chris",
      likes: 202,
      comments: 33,
    },
  ];

  return (
    <div className="p-5 w-[23rem] mt-4 border ml-5 rounded">
      <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p className="text-sm text-gray-600">By {blog.author}</p>
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>Likes: {blog.likes}</span>
              <span>Comments: {blog.comments}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
