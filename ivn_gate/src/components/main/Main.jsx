import Header from "./Header"
import Section from "../section/Section"
import Article from "../article/Article"
import SearchContext from "../../context/SearchContext"

const Main = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
        <SearchContext>
            <Header/>  
            <Section/>
            <Article/>
        </SearchContext>
        </div>
    )
}

export default Main