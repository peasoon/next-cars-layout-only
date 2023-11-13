import { NextPage } from 'next';
import Image from 'next/image';
import * as React from 'react';

interface IOverviewProps {
}

interface IOverviewItemProps {
  type: string;
  img: string;
  title: string;
  heading: string;
}

const OverviewItem = ({ type, img, title, heading }: IOverviewItemProps) => {
  return <div className='overview__item ov-item'>
    <img className="ov-item__img" src={img}></img>
    <span className="ov-item__type">{type}</span>
    <div className="ov-item__title">{title}</div>
    <div className="ov-item__heading">{heading}</div>
  </div>
}

const Overview: NextPage<IOverviewProps> = (props) => {
  const items = [
    {
      type: 'vechile',
      img: '/overview/img1.jpg',
      title: 'Rickie Baroch - June 6, 2019',
      heading: 'One of Saturn’s largest rings may be newer than anyone'
    },
    {
      type: 'vechile',
      img: '/overview/img2.jpg',
      title: 'Rickie Baroch - June 6, 2019',
      heading: 'One of Saturn’s largest rings may be newer than anyone'
    },
    {
      type: 'vechile',
      img: '/overview/img3.jpg',
      title: 'Rickie Baroch - June 6, 2019',
      heading: 'One of Saturn’s largest rings may be newer than anyone'
    },
    {
      type: 'vechile',
      img: '/overview/img4.jpg',
      title: 'Rickie Baroch - June 6, 2019',
      heading: 'One of Saturn’s largest rings may be newer than anyone'
    },
    {
      type: 'vechile',
      img: '/overview/img5.jpg',
      title: 'Rickie Baroch - June 6, 2019',
      heading: 'One of Saturn’s largest rings may be newer than anyone'
    },
  ]

  return <section className='overview'>
    <div className="container overview-container">
      {items.map(item => <OverviewItem {...item} />)}
    </div>
  </section>;
};

export default Overview;
