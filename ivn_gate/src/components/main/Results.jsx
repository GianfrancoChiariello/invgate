/* eslint-disable react/jsx-key */
import {
    useSearch
} from "../../context/SearchContext"
import SearchBar from "../basics/SearchBar"
import {
    dataFormat,
    tagsData
} from "../../utils"

const Results = () => {

    const {response,setSearchKey, searchKey,setResultView,tags,setTags} = useSearch()

    const handleClose = () => {
        setResultView(prev => !prev)
    }

    const handleTag = (tag) => {
        setTags(prev => prev.includes(tag.title) ? prev.filter(item => item !== tag.title) : [...prev, tag.title])
    }

    return (
        <>
            <div className="w-full h-[100vh] fixed left-0 top-0  backdrop-blur-xl z-50 flex flex-col items-center pb-40">
                <div className="w-full flex justify-end p-5 font-semibold">
                    <button onClick={handleClose}>Close</button>
                </div>
                <div className="w-[35%] flex flex-col items-center justify-center gap-10">
                    <SearchBar placeHolder='I´m looking for...' value={searchKey}  onChange={(e) => setSearchKey(e.target.value)}/>
                    <div className='flex gap-3'>
                        {tagsData.map((tag, tagIndex) => (
                            <div
                                key={tagIndex}
                                style={{backgroundColor: tag.backgroundColor}}
                                className={`px-2 py-1 rounded-2xl my-3 cursor-pointer`}
                                onClick={() => handleTag(tag)}
                            >
                                <span
                                    style={{color: tag.textColor}}
                                    className={`font-semibold`}
                                >
                                    {tag.title}
                                </span>
                                <span className={`mx-4 ${tags.includes(tag.title) ? 'inline' : 'hidden'}`}>x</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-[80%] grid grid-cols-2">
                    {dataFormat(response).map((item,index) => (
                    <div key={index} className="flex my-5 gap-5">
                        <div
                            className={`w-48 h-32 bg-cover bg-no-repeat bg-center rounded-lg`}
                            style={{ backgroundImage: `url(${item.img})`}}
                        />
                        <div className="flex flex-col items-start gap-3">
                            <span className='font-semibold text-sm text-primary'>{`${item.author} • ${item.formatDate}`}</span>
                            <div className="w-full flex items-center justify-between">
                                <h3 className='leading-8 text-2xl font-semibold'>{item.heading}</h3>
                            </div>
                            <p className='text-base leading-6 text-[#687382]'>{item.description.slice(0,80) + "..."}</p>
                        </div>
                        </div>
                        ))}
                    </div>
            </div>
        </>
    )
}

export default Results