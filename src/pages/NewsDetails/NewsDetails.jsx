import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Details from "./Details";


const NewsDetails = () => {
    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 md:mt-10">
                <div className=" col-span-3">
                    <h1 className="text-2xl font-semibold">Dragon News</h1>
                    {
                        news?.map(aNews => <Details 
                        key={aNews._id}
                        news={aNews}>
                        </Details>)
                    }
                    
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>


            </div>
        </div>
    );
};

export default NewsDetails;