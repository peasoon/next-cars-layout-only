"use client"
import * as React from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import PopularPosts from './popular-posts';
import Instagram from './instagram';
import Tags from './tags';
import Newsletter from './newsletter';


interface IArticlesProps {
}

interface ArticleItemProps {
  img: string;
  type: string;
  title: string;
  subtitle: string;
  text: string
}

const ArticleItem = ({ img, type, title, subtitle, text }: ArticleItemProps) => {
  return <div className="article-item">
    <div className="article-item__img">
      <img src={img} alt="" />
    </div>
    <div className="article-item__card">
      <div className="article-item__type">
        {type}
      </div>
      <div className="article-item__title">
        {title}
      </div>
      <div className="article-item__subtitle">{subtitle}</div>
      <div className="article-item__text">{text}</div>

    </div>
  </div>
}

interface ArticleCardProps {
  img: string;
  title: string;
  subtitle: string;
  text: string;
  buttonText: string
}

const ArticleCard = ({ img, title, subtitle, text, buttonText }: ArticleCardProps) => {
  return <div className="article-card">
    <div className="article-card__img">
      <img src={img} alt="" />
    </div>
    <div className="article-card__title">{title}</div>
    <div className="article-card__subtitle">{subtitle}</div>
    <div className="article-card__text">{text}</div>
    <button className="article-card__btn">{buttonText}</button>
  </div>
}




const Articles: React.FunctionComponent<IArticlesProps> = (props) => {
  const data = [
    {
      img: '/articles/img1.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 1',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img2.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 2',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img3.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 3',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img4.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 4',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img5.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 5',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img1.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 6',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img2.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 7',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img3.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 8',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img4.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 9',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img5.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 10',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img1.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 11',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img2.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 12',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img3.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 13',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img4.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 14',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img5.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 15',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img1.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 16',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img2.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 17',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img3.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 18',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img4.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 19',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img5.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 20',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img1.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 21',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img2.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 22',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img3.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 23',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img4.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 24',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img5.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 25',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img1.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 26',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img2.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 27',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img3.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 28',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img4.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 29',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img5.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 30',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img1.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 31',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img2.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 32',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img3.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 33',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img4.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 34',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img5.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 35',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img1.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 1',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img2.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 2',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img3.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 3',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img4.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 4',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img5.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 5',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img1.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 6',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img2.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 7',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img3.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 8',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img4.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 9',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img5.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 10',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img1.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 11',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img2.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 12',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img3.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 13',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img4.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 14',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img5.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 15',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img1.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 16',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img2.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 17',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img3.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 18',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img4.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 19',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img5.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 20',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img1.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 21',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img2.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 22',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img3.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 23',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img4.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 24',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img5.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 25',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img1.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 26',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img2.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 27',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img3.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 28',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img4.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 29',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img5.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 30',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img1.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 31',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img2.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 32',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img3.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 33',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img4.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 34',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
    {
      img: '/articles/img5.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone 35',
      subtitle: 'Rickie Baroch - June 6, 2019',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorezmque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem'
    },
  ]
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return <section className="articles">
    <div className="container articles-container">
      <div className="articles__big">
        {currentItems.map(item => <ArticleItem {...item} />)}
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName='pagination-container'
          pageLinkClassName='pagination-item'
          previousLinkClassName='pagination-item'
          nextLinkClassName='pagination-item'
          activeLinkClassName='pagination-item__active'
        />
      </div>
      <div className="articles__small">
        <ArticleCard img={'/articles/small/small1.jpg'} title='Leon Hunt' subtitle='Food & cooking bloger' text={`Hi, I'm Leon. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on…`} buttonText='Continue Reading' />
        <PopularPosts />
        <Instagram />
        <Tags />
        <Newsletter />
      </div>
    </div>
  </section>;
};

export default Articles;
