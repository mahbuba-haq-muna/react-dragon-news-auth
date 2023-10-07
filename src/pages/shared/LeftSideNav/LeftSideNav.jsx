
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {

    const[categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className=" space-y-1">
            <h2 className="text-2xl mb-6">All Categories</h2>
            {
                categories?.map(category =>
                    <NavLink 
                    className="block text-xl px-7 py-3 md:px-10 md:py-4  hover:bg-slate-100"
                    key={category.id}
                    to={`/category${category.id}`}>
                    {category.name}
                    
                    </NavLink>
                    )
            }
        </div>
    );
};

export default LeftSideNav;