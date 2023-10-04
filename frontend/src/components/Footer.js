import React from 'react'
import {images} from '../constants';
import {AiOutlineTwitter,AiFillYoutube, AiFillInstagram} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
import {BsTelegram} from 'react-icons/bs';

export default function Footer() {
  return (
    <section className='bg-dark-hard'>
      <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5'>
        <div className='col-span-5'>
          <h3 className='font-bold text-dark-light'>Product</h3>
          <ul className='text-sm mt-5 space-y-4 text-[#959EAD]'>
            <li>
              <a href="/">Landing page</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Referral Program</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className='col-span-5'>
          <h3 className='font-bold text-dark-light'>Services</h3>
          <ul className='text-sm mt-5 space-y-4 text-[#959EAD]'>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Design</a>
            </li>
            <li>
              <a href="/">Themes</a>
            </li>
            <li>
              <a href="/">Illustrations</a>
            </li>
            <li>
              <a href="/">UI Kit</a>
            </li>
          </ul>
        </div>
        <div className='col-span-5'>
          <h3 className='font-bold text-dark-light'>Company</h3>
          <ul className='text-sm mt-5 space-y-4 text-[#959EAD]'>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className='col-span-5'>
          <h3 className='font-bold text-dark-light'>More</h3>
          <ul className='text-sm mt-5 space-y-4 text-[#959EAD]'>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">License</a>
            </li>
            <li>
              <a href="/">Changelog</a>
            </li>
          </ul>
        </div>
        <div className='col-span-10'>
          <img src={images.logo} alt="logo" className='brighness-0 invert mx-auto'></img>
          <p className='text-sm text-dark-light text-center mt-4'>Build a modern and creative website with crealand</p>
          <ul className='flex justify-center mt-5 items-center space-x-4 text-gray-300'>
            <li>
              <a href="/"><AiOutlineTwitter className='w-6 h-auto'/></a>
            </li>
            <li>
              <a href="/"><AiFillYoutube className='w-6 h-auto'/></a>
            </li>
            <li>
              <a href="/"><AiFillInstagram className='w-6 h-auto'/></a>
            </li>
            <li>
              <a href="/"><FaFacebook className='w-6 h-auto'/></a>
            </li>
            <li>
              <a href="/"><BsTelegram className='w-6 h-auto'/></a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  )
}
