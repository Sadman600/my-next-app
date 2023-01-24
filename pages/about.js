import Head from "next/head";
import Image from "next/image";
import styles from '../styles/Home.module.css';

const About = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
            </Head>
            <main className={styles.main}>
                <div>
                    <h1>This is about page</h1>
                    <Image
                        src='/thirteen.svg'
                        width={100}
                        height={100}
                    />
                </div>
            </main>
        </>
    );
};

export default About;