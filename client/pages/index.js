import Head from "next/head";
import Image from "next/image";
import { makePublicRouterInstance, useRouter } from "next/router";
import { useState } from "react";
import Routine from "../components/Routine.jsx";
import StopWatch from "../components/StopWatch/StopWatch.jsx";

export default function Home({ posts }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>HT | Home Training</title>
        <meta name="description" content="Home Training" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="box-container">
        <div className="box1">1</div>
        <div className="box2">
          <StopWatch />
          <Routine />
        </div>
        <div className="box3">
          {/* <div style={{ width: "20vw" }}>
            {posts?.map((p) => (
              <div key={p.id}>{p.body}</div>
            ))}
          </div> */}
        </div>
      </div>
      <style jsx>{`
        .box-container {
          display: flex;
        }

        /* .box {
          flex: 1;
          text-align: center;
        } */

        .box1 {
          background-color: green;
          flex: 1;
          text-align: center;
        }

        .box2 {
          flex: 1;
          text-align: center;
          height: 100vh;
        }

        .box3 {
          background-color: powderblue;
          flex: 1;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10",
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10",
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
};
