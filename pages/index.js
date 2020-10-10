import Layout from '../components/Layout'
import Footer from '../components/Footer'

export default function Home(props) {
  return (
    <>
    <Layout>
        <h1>XKCD</h1>
        <h2>{props.comic.title}</h2>
        <img src={props.comic.img} alt={props.comic.alt} />
        <Footer comicNum={props.comic.num}/>
    </Layout>
    </>
  )
}

export async function getServerSideProps(context){
    const response = await fetch('http://xkcd.com/info.0.json');

    const data = await response.json();


    return{
        props: { 
            comic: data 
        }, 
    }
}
