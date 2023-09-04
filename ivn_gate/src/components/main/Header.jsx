/* eslint-disable no-unused-vars */
import SearchBar from "../basics/SearchBar"
import {
    hero,
} from '../../utils'
import {
    useMediaQuery
} from '../../hooks/useMediaQuery'
import { useSearch } from "../../context/SearchContext"
import Results from "./Results"

const Header = () => {

    const {searchKey,setSearchKey,resultView,setResultView} = useSearch();

    const query = useMediaQuery('(min-width: 1100px)')

    const handleSearch = () => {
        setResultView(true)
        setSearchKey
    }

    return (
        <div className={`w-11/12 h-3/6 bg-[#E4F2FF] rounded-[15px] flex items-center justify-between ${query ? 'px-20' : 'px-3'} py-16 shadow-lg`}>
            <div className="flex flex-col  gap-5">
                <span className='font-semibold text-lg text-primary'>Articles,videos and more</span>
                <h1 className={`text-[#273A57] font-semibold ${query ? 'text-[48px]' : 'text-[30px]'} max-w-lg leading-tight`}>Find the most relevant content in the IT world</h1>
                <div className={query ? 'w-[400px]' : 'w-[300px]'}>
                    <SearchBar placeHolder='I´m looking for...' action={handleSearch} value={searchKey} onChange={(e) => setSearchKey(e.target.value)}/>
                </div>
                <p className="opacity-60">We care about your data in our <a className="underline cursor-pointer">privacy policy</a></p>
            </div>
            {query && <video src={hero} autoPlay loop className="w-1/2 h-full"/>}
            {resultView && <Results/>}
        </div>
    )
}

export default Header