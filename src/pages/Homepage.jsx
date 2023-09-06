import Navbar from '../componentss/Navbar';
import DemoCard from '../componentss/DemoCard';
import { Demos } from '../Constants';

const Homepage = () => {
    return (
        <>
            <Navbar />
            <section className='px-2  max-w-[1400px] mx-auto '>
                <h1 className='font-bold text-lg md:text-3xl'>Our Popular Designs</h1>
                <div className="flex flex-wrap gap-4 justify-evenly mt-4 pb-9 md:justify-start">
                    {Demos?.map((singledemo, i) => (<DemoCard key={`demo${i}`} demo={singledemo} />))}
                </div>
            </section>
        </>
    )
}

export default Homepage