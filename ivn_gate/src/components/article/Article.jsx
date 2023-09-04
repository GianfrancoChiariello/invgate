import Layout from "../basics/Layout"
import subData from "../../services/fileSystem/subData.json"
import {dataFormat} from "../../utils"
import Card from "../basics/Card"
import { useMediaQuery } from "../../hooks/useMediaQuery"

const Article = () => {

    const query = useMediaQuery('(min-width: 1100px)')


    return (
        <Layout title={"Hear Ticket Volume, our podcast of ITSM world"} color={"bg-[#F5F9FC]"}>
        <div className={`my-8 grid gap-8 ${query ? 'grid-cols-3' : 'grid-cols-1'}`}>
        {
            dataFormat(subData).map((item,index) => (
                <Card  item={item} index={index} key={index} _simple={true}/>
            ))
        }
        </div>
        </Layout>
    )
}

export default Article