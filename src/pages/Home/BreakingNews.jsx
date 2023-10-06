import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex p-3 bg-zinc-100 my-6">
            <button className="btn bg-rose-600 rounded-none text-white mr-4"> Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link>I can be a React component, multiple React components, or just some text...</Link>
                <Link className="mx-12">I can be a React component, multiple React components, or just some text...</Link>
                <Link>I can be a React component, multiple React components, or just some text</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;