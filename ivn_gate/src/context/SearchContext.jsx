import {
    useContext,
    createContext,
    useState,
    useEffect
} from 'react'
import data from '../services/fileSystem/data.json'
import subData from '../services/fileSystem/subData.json'

export const SearchCtx = createContext();

const SearchContext = ({children}) => {

    const flatData = [...data,...subData]

    const [searchKey, setSearchKey] = useState("")
    const [tags, setTags] = useState([])
    const [response, setResponse] = useState(flatData)
    const [resultView, setResultView] = useState(false)

    console.log(tags)

    useEffect(() => {
        let data

        if (tags.length > 0) {
            data = flatData.filter((item) => item.heading.toLowerCase().includes(searchKey.toLowerCase()) && item.tags.some(item => tags.includes(item.title)))
        } else {
            data = flatData.filter((item) => item.heading.toLowerCase().includes(searchKey.toLowerCase()))
        }

        setResponse(data)
    }, [searchKey,tags])

    return (
        <SearchCtx.Provider value={{
            resultView,
            setResultView,
            searchKey,
            setSearchKey,
            tags,
            setTags,
            response
        }}>
            {children}
        </SearchCtx.Provider>
    )
}

export default SearchContext
export const useSearch = () => useContext(SearchCtx)
