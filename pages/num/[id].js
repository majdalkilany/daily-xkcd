// import Header from '../../components/Header'
import Header from '../../components/Header'
import Layout from '../../components/Layout'

export default function comicDetail(props){
    return(
        <Layout>
        <Header />
        <h1>{props.comic.title}</h1>
        <img src={props.comic.img} alt={props.comic.alt}></img>
         </Layout>
    )
}

export async function getServerSideProps(context){
    const num = context.query.id;
    const response = await fetch(`https://xkcd.com/${num}/info.0.json`);
    const data = await response.json();

    return{
        props:{
            comic: data
        }
    }
}



