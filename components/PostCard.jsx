
const PostCard = ({post}) => {
  console.log(post);
  return (
    <div>
        {post.node.name}
        {post.node.excerpt}
    </div>
  )
}

export default PostCard