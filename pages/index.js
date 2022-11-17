import Head from "next/head";
import Styles from '../styles/Home.module.css';
import useSWR  from "swr"

export default function Home() {

  const fetcher = url=> fetch(url).then(res => res.json());
  const {data, error} = useSWR('/api/message', fetcher)
  if(error)return <div>failed</div>
  if(!data)return <div>loading...</div>
  return (
    <>
     <Head>
      <title>タイトル</title>
     </Head>
     <p>{data.name}</p>
     <h1 className={Styles.mytitle}>タイトル</h1>
     <style jsx>{`
      h1 {
        color: red;
      }
     `}
     </style>
    </>
  );
}