// script.js

// Sample blog post data
const blogPosts = [
    {
        title: "My First Blog Post",
        content: "This is the content of my first blog post."
    },
    {
        title: "Second Blog Post",
        content: "This is the content of my second blog post."
    }
];

// Function to create a blog post element
function createBlogPost(post) {
    const postElement = document.createElement("div");
    postElement.classList.add("blog-post");

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;
    postElement.appendChild(titleElement);

    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;
    postElement.appendChild(contentElement);

    return postElement;
}

// Add blog posts to the DOM
const blogPostsSection = document.getElementById("blog-posts");
blogPosts.forEach(post => {
    blogPostsSection.appendChild(createBlogPost(post));
});