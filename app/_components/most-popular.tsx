import * as React from 'react';

interface IMostPopularProps {
}

interface popularItemProps {
  img: string;
  type: string;
  title: string;
  subtitle: string;
}

const PopularItem = ({ img, title, type, subtitle }: popularItemProps) => {
  return <div className="most-popular__item mp-item">
    <div className="mp-item__img">
      <img src={img} alt="" />
    </div>
    <span className="mp-item__type">{type}</span>
    <div className="mp-item__title">{title}</div>
    <div className="mp-item__subtitle">{subtitle}</div>
  </div>
}

const MostPopular: React.FunctionComponent<IMostPopularProps> = (props) => {
  const data = [
    {
      img:'/most/img1.jpg',
      type:'BMW',
      title:'One of Saturn’s largest rings may be newer than anyone',
      subtitle:'Rickie Baroch - June 6, 2019'
    },
    {
      img:'/most/img2.jpg',
      type:'BMW',
      title:'One of Saturn’s largest rings may be newer than anyone',
      subtitle:'Rickie Baroch - June 6, 2019'
    },
    {
      img:'/most/img3.jpg',
      type:'BMW',
      title:'One of Saturn’s largest rings may be newer than anyone',
      subtitle:'Rickie Baroch - June 6, 2019'
    },
    {
      img:'/most/img4.jpg',
      type:'BMW',
      title:'One of Saturn’s largest rings may be newer than anyone',
      subtitle:'Rickie Baroch - June 6, 2019'
    },
  ]
  return <div className="most-popular">
    <div className="container">
      <div className="most-popular__title">Most popular</div>
      <div className="most-popular__items mp-items">
        {data.map(item=><PopularItem {...item} key={item.img}/>)}
      </div>
    </div>
  </div>;
};

export default MostPopular;
