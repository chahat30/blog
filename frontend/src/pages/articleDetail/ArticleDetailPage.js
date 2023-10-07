import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import {images} from '../../constants';
import {Link} from 'react-router-dom';

const breadCrumbsData=[
    {name:"Home",link:"/"},
    {name:"Blog",link:"/blog"},
    {name:"Article Title",link:"/blog/1"},
]

export default function ArticleDetailPage() {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img
            className="rounded-xl w-full"
            src={images.postImage}
            alt="laptop"
          />
          <Link
            className="text-primary text-sm font-roboto inline-block mt-4"
            to="/blog?category=selectedCategory"
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt4 text-dark-hard">
            Help Children Get Better Education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              pretium consequat est, et vulputate ligula elementum vel. Nam
              congue felis id maximus aliquam. Etiam interdum odio et fringilla
              ornare. Mauris vehicula nisi purus, a ullamcorper nisi eleifend
              eget. Donec nec nunc a velit vestibulum ultricies in ac risus.
              Nunc ut vehicula nunc. Maecenas tincidunt accumsan tempus. Quisque
              ut hendrerit metus.
            </p>
          </div>
        </article>
      </section>
    </MainLayout>
  );
}
