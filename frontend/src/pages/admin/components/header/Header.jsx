import React from 'react'
import {Link} from 'react-router-dom'
import { images } from '../../../../constants'
import { useState } from 'react'
import { AiFillDashboard, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaComments } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import NavItem from './NavItem';
import NavItemCollapse from './NavItemCollapse';

const MENU_ITEMS = [
    {
        title: "Dashboard",
        link: "/admin",
        icon: <AiFillDashboard className='text-xl'/>,
        name: "dashboard",
        type: "link"
    },
    {
        title: "Comments",
        link: "/admin/comments",
        icon: <FaComments className='text-xl'/>,
        name: "comments",
        type: "link"
    },
    {
        title: "Posts",
        content: [{title:"New", link: "/admin/posts/new"}, {title:"Manage", link:'/admin/posts/manage'}],
        icon: <MdDashboard className='text-xl'/>,
        name: "posts",
        type: "collapse"
    },
]

export default function Header() {

    const[isMenuActive, setIsMenuActive]= useState(false);
    const[activeNavName, setActiveNavName] =useState("dashboard");
    const toggleMenuHandler = () =>{
        setIsMenuActive((prevState)=> !prevState);
    }

  return (
    <header className="h-fit flex w-full items-center justify-between p-4">
      <Link to="/">
        <img src={images.logo} alt="logo" className="w-16" />
      </Link>
      <div className="cursor-pointer">
        {isMenuActive ? (
          <AiOutlineClose className="w-6 h-6" onClick={toggleMenuHandler} />
        ) : (
          <AiOutlineMenu className="w-6 h-6" onClick={toggleMenuHandler} />
        )}
      </div>
      {isMenuActive && (
        <div className="fixed inset-0">
          {/* underlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleMenuHandler}
          />
          {/* sidebar */}
          <div className="fixed top-0 bottom-0 left-0 z-50 w-3/4 overflow-y-auto bg-white p-4">
            <Link to="/">
              <img src={images.logo} alt="logo" className="w-16" />
            </Link>
            <h4 className="mt-10 font-bold text-[#C7C7C7]">MAIN MENU</h4>
            {/* Menu Items */}
            <div className="mt-6 flex flex-col gap-y-[0.563rem]">
              {MENU_ITEMS.map((item) =>
                item.type === "link" ? <NavItem key={item.title} title={item.title} link={item.link} icon={item.icon} name={item.name} activeNavName={activeNavName} setActiveNavName={setActiveNavName}/> : 
                <NavItemCollapse key={item.title} title={item.title} content={item.content} icon={item.icon} name={item.name} activeNavName={activeNavName} setActiveNavName={setActiveNavName}/>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
