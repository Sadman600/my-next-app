import Head from "next/head";

const PostDetails = ({post}) => {

    return (
        <>
            <Head>
                <title>Post Details</title>
            </Head>
            <main>
                <div>
                    <h1>{post.body}</h1>
                </div>
            </main>
        </>
    );
};
export const getStaticProps = async ({params}) => {
    // const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postid}`);
    const post = await res.json();

    return {
        props: {
            post,
        }
    }
}
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const paths = posts.map(post => {
        return {
            params: {
                postid: `${post.id}`
            }
        }
    });

    return {
        paths,
        fallback: false,
    }

}
export default PostDetails;