/* eslint-disable react/prop-types */

const Card = ({item, index, _simple = false, query = false, ...props}) => {
  return (
    <div {...props}>
    <div className={`flex gap-6 ${_simple ? 'flex-col' : !query ? 'flex-col' : index === 0 ? 'flex-col' : 'flex-row'}`}>
    <div
        className={`w-full ${_simple ? 'h-52' : index === 0 ? 'h-56' : 'h-52'}  bg-cover bg-no-repeat bg-center rounded-lg`}
        style={{ backgroundImage: `url(${item.img})`}}
    />
    <div className="flex flex-col items-start gap-3">
        <span className='font-semibold text-sm text-primary'>{`${item.author} • ${item.formatDate}`}</span>
        <div className="w-full flex items-center justify-between">
            <h3 className='leading-8 text-2xl font-semibold'>{item.heading}</h3>
            {
                _simple 
                ? <img src='../../../src/assets/arrow.svg' /> 
                : !query 
                ? <img src='../../../src/assets/arrow.svg'/>
                : index === 0 ?
                <img src='../../../src/assets/arrow.svg'/> : null
            }
        </div>
        <p className='text-base leading-6 text-[#687382]'>{item.description.slice(0,89) + "..."}</p>
        <div className='flex gap-3'>
            {item.tags.map((tag, tagIndex) => (
                <div
                    key={tagIndex}
                    style={{backgroundColor: tag.backgroundColor}}
                    className={`px-2 py-1 rounded-2xl my-3`}
                >
                    <span
                        style={{color: tag.textColor}}
                        className={`font-semibold`}
                    >
                        {tag.title}
                    </span>
                </div>
            ))}
        </div>
    </div>
    </div>
</div>
)
}

export default Card