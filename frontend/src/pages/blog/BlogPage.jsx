import React, { useEffect, useState } from 'react'
import ArticleCard from '../../components/ArticleCard';
import ArticleCardSkeleton from '../../components/ArticleCardSkeleton';
import { getAllPosts } from '../../services/index/posts';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import ErrorMessage from '../../components/ErrorMessage';
import MainLayout from '../../components/MainLayout';
import Pagination from '../../components/Pagination';
import { useSearchParams } from 'react-router-dom';

let isFirstRun = true;

export default function BlogPage() {

    const [searchParams, setSearchParams] = useSearchParams();
    const searchParamsValue = Object.fromEntries([...searchParams]);
    console.log(searchParams);

    const[currentPage,setCurrentPage]=useState(parseInt(searchParamsValue?.page)||1);
    const {data, isLoading, isError, refetch} = useQuery({
        queryFn : () => getAllPosts("",currentPage,12),
        queryKey: ["posts"],
        onError: (error) => {
          toast.error(error.message);
        }
      });
    
      useEffect(()=>{
        if(isFirstRun){
            isFirstRun=false;
            return;
        }
        window.scrollTo(0,0);
        refetch();
      },[currentPage,refetch])

      const handlePageChange = (page)=>{
        setCurrentPage(page);
        setSearchParams({page:page})
      }

      return (
        <MainLayout>
            <section className='container flex flex-col mx-auto px-5 py-10'>
          <div className='flex flex-wrap md:gap-x-5 gap-y-5 pb-10'>
            {isLoading ? (
              [...Array(3)].map((item,index)=>(
                <ArticleCardSkeleton key={index} className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"/>
              ))
            ): isError? <ErrorMessage message="Couldn't fetch the posts"/> : data?.data.map((post) => (
              <ArticleCard key={post._id} post={post} className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"/>
            ))}
          </div>
          {!isLoading && (
                <Pagination
                  onPageChange={(page) => handlePageChange(page)}
                  currentPage={currentPage}
                  totalPageCount={JSON.parse(
                    data?.headers?.["x-totalpagecount"] || 1
                  )}
                />
              )}
        </section>
        </MainLayout>
      )
}
