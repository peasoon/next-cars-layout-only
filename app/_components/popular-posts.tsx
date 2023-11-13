import * as React from 'react';

interface IPopularPostsProps {
}

interface PostProps {
  img: string;
  type: string;
  title: string;
  subtitle: string;
}

const Post = ({ img, type, title, subtitle }: PostProps) => {
  return <div className="popular-posts__item pp-item">
    <div className="pp-item__img">
      <img src={img} alt="post image" />
    </div>
    <div className="pp-item__type">{type}</div>
    <div className="pp-item__title">{title}</div>
    <div className="pp-item__subtitle">{subtitle}</div>
  </div>
}

const PopularPosts: React.FunctionComponent<IPopularPostsProps> = (props) => {
  const data = [
    {
      img: '/articles/small/big1.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone',
      subtitle: 'Rickie Baroch - June 6, 2019'
    },
    {
      img: '/articles/small/big2.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone',
      subtitle: 'Rickie Baroch - June 6, 2019'
    },
    {
      img: '/articles/small/big3.jpg',
      type: 'vechile',
      title: 'One of Saturn’s largest rings may be newer than anyone',
      subtitle: 'Rickie Baroch - June 6, 2019'
    },
  ]
  return <div className="popular-posts">
    <div className="popular-posts__title">
      Popular posts
    </div>
    {data.map(item => <Post {...item} key={item.img} />)}
  </div>;
};

export default PopularPosts;
