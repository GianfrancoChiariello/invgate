import data from "../../services/fileSystem/data.json";
import { dataFormat } from "../../utils.js";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Layout from "../basics/Layout";
import Card from "../basics/Card";

const Section = () => {

    const query = useMediaQuery('(min-width: 1100px)')

    return (
        <Layout title={"Recent blog posts"}>
            <div className={`my-8 grid gap-8 ${query ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {dataFormat(data).map((item, index) => (
                <Card item={item} index={index} key={index} className={`${!query ? '' : index === 0 ? 'col-span-1 row-span-2' : 'col-span-1'}`} query={query}/>
            ))}
            </div>
        </Layout>
    );
};

export default Section;
