import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Routine from "../components/Routine/routine.jsx";
import StopWatch from "../components/StopWatch/StopWatch.jsx";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";

export default function Home() {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  !user && router.push("/login");
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
          /* background-color: green; */
          flex: 1;
          text-align: center;
        }

        .box2 {
          flex: 1;
          text-align: center;
          height: 100vh;
        }

        .box3 {
          /* background-color: powderblue; */
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

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10",
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//     revalidate: 20,
//   };
// };
