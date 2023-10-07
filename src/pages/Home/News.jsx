import { Link } from "react-router-dom";

const News = ({news}) => {

    const {title, image_url, details, _id, published_date, name, img, author} = news;

    return (
        <div>
            <div className="flex gap-4 items-center px-10 py-5 bg-slate-100 rounded-t-md">
                <img className="w-7 h-7 rounded-full" src={author.img} alt="" />
                <div>
                    <h1 className=" text-base font-semibold">{author.name}</h1>
                    <p className=" text-sm">{author.published_date}</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl mb-4">
            <h2 className="card-title px-10 py-5">{title}</h2>
                <figure><img  className="" src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    
                    {
                        details.length > 200 
                        ? <p>{details.slice(0,200)} <Link
                            to={`/news/${_id}`}
                         className=" text-red-500 font-bold">
                            Read More...</Link></p>
                        : <p>{details}</p>
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default News;