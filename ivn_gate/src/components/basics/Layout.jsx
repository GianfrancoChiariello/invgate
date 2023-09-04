/* eslint-disable react/prop-types */

const Layout = ({children, title,color = "bg-transparent"}) => {

    return (
        <div className={`w-full flex justify-center ${color}`}>
            <div className={`w-4/5 my-12`}>
                <span className='text-2xl font-semibold'>{title}</span>
                {children}
            </div>
        </div>
    );
};

export default Layout;
