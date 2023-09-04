/* eslint-disable react/prop-types */
import SearchICO from '../icons/SearchICO'
import {
  useRef
} from 'react'

const SearchBar = ({placeHolder = 'Search', action = () => {}, ...props}) => {

  const inputRef = useRef();

  return (
    <div className={`w-full h-full flex items-center justify-center rounded-lg overflow-hidden`}>
        <SearchICO className='w-12 text-white p-3 bg-primary cursor-pointer' onClick={() => action(inputRef.current.value)}/>
        <input ref={inputRef} value={props.value} placeholder={placeHolder} onChange={props.onChange}/>
    </div>
  )
}

export default SearchBar