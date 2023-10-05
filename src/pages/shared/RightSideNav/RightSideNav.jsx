import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
            <h2 className="text-2xl font-semibold">Login with</h2>
            <button className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                Login With Google 
            </button>
            <button className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                Login With Github
            </button>
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-4">Find us on</h2>
                <a href="" className='flex p-4 text-lg items-center border rounded-t-lg  '>
                    <FaFacebook className='mr-4'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a href="" className='flex p-4 text-lg items-center border-x  '>
                    <FaTwitter className='mr-4'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a href="" className='flex p-4 text-lg items-center border rounded-b-lg  '>
                    <FaInstagram className='mr-4'></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            <div className="p-4 bg-slate-50">
                <h2 className="text-2xl font-semibold mb-4">Q-Zone</h2>
                <img src= {qZone1} alt="" />
                <img src= {qZone2} alt="" />
                <img src= {qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;