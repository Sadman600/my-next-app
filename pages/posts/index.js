import Head from "next/head";
import styles from '../../styles/Posts.module.css';

const Posts = ({posts}) => {
    return (
        <>
            <Head>
                <title>Posts Page!</title>
            </Head>
            <main className={styles.box}>
                <div>
                    <h1>My Post</h1>
                    <ul>
                        {
                            posts.map(post => <li key={post.id}>{post.title}</li>)
                        }
                    </ul>
                </div>
            </main>
        </>
    );
};
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return {
        props: {
            posts,
        }
    }
}
export default Posts;