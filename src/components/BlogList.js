import Blog from "./Blog";

const BlogList = ({ blogs, user }) => {
    return (
        <>
            {
            blogs
            //.filter(blog => blog.user.username === user.username)
            .map(blog => <Blog key={blog.id} blog={blog} />)
            }
        </>
    );
}

export default BlogList;