import {useMediaQuery} from '../../hooks/useMediaQuery'
import {options} from './utils'
import {
    useState
} from 'react'
import {
    logo,
    logoShort
} from '../../utils'

const NavBar = () => {

    const [menu, setMenu] = useState(false)
    const query = useMediaQuery('(min-width: 1100px)')

    return (
        <>
        <nav className={`w-full py-5 flex items-center justify-between ${query ? "px-20" : "px-3.5"} relative`}>
            <div className='flex items-center gap-6'>
                <img src={query ? logo : logoShort} className='px-4'/>
                {query && options.map((item,index) => (
                    <select key={index}>
                        <option>{item.title}</option>
                    </select>
                )) }
            </div>
            <div className='flex gap-3 relative items-center'>
                {['Contact us','Subscribe'].map((item,index) => (
                    <span key={index} className={`cursor-pointer font-semibold hover:opacity-80 ${index == 1 ? 'bg-primary p-2 rounded-[8px] text-white' : null}`}>{item}</span>
                ))}
                <img src="../../../src/assets/Region.png"/>

                {!query && 
                <svg 
                    onClick={() => setMenu(state => !state)}
                    stroke="currentColor" 
                    class="w-6 h-6"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>}
            </div>
        </nav>
        {!query && <div className={`w-full z-10 bg-white absolute left-0 transition-all duration-300 ${menu ? 'h-full opacity-100' : 'h-0 opacity-0'}`}>
            <div className='w-full h-fit flex flex-col items-center gap-5 p-10 font-semibold'>
                {options.map((item,index) => (
                    <span key={index}>{item.title}</span>
                ))}
            </div>
        </div>
        }
        </>
    )
}

export default NavBar