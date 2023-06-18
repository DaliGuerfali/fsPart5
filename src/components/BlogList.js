import Blog from "./Blog";

const BlogList = ({ blogs, handleLike, currentUser, handleDelete }) => {
    return (
        <>
            {
            blogs
            .toSorted((a, b) => -a.likes + b.likes )
            .map(blog => <Blog 
                key={blog.id} 
                blog={blog} 
                handleLike={handleLike}
                currentUser={currentUser}
                handleDelete={handleDelete}
                />)
            }
        </>
    );
}

export default BlogList;