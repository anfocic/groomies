import "./Blog.css";

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "How to Groom Your Dog Like a Pro",
            date: "February 18, 2025",
            description: "Learn the essential dog grooming techniques to keep your furry friend happy and healthy!",
            link: "#",
        },
        {
            id: 2,
            title: "5 Common Mistakes in Dog Grooming",
            date: "February 10, 2025",
            description: "Avoid these common grooming mistakes to ensure your dog looks and feels great!",
            link: "#",
        },
        {
            id: 3,
            title: "Choosing the Right Shampoo for Your Dog",
            date: "February 5, 2025",
            description: "Not all dog shampoos are the same! Find out which one is best for your pet’s coat type.",
            link: "#",
        },
    ];

    return (
        <div className="blog-container">
            <h1 className="blog-title">Blog</h1>
            <div className="blog-posts">
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-post">
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-date">{post.date}</p>
                        <p className="post-description">{post.description}</p>
                        <a href={post.link} className="read-more">Read More →</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;