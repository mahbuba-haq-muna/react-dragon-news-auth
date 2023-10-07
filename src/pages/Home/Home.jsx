import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import News from "./News";


const Home = () => {

    const news = useLoaderData();
    console.log(news)

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 md:mt-10">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 ">
                    {
                        news?.map(aNews => <News
                        key={aNews._id}
                        news={aNews}
                        ></News>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;