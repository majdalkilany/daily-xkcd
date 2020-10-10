import Link from 'next/link'

export default function Footer(props){
    const currentNum = props.comicNum;
    const nums = [];
    for (let n = currentNum; n > currentNum-9; n--){
        nums.push(n)
    }

    return(
        <footer>
            <h3> previous {nums.length}</h3>
            <ul>
                {nums.map(num => (
                    // <li key ={num}>
                        <Link href='/num/[id].js' as={`/num/${num}`} key ={num}>
                            <a> #{num} </a>
                        </Link>
                    // </li>
                ))}
            </ul>
            <style jsx>{`
                a{
                    margin-right: 5px;
                }
            `}</style>
        </footer>
    )
}
