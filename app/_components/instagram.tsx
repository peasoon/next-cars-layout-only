import * as React from 'react';

interface IInstagramProps {
}

const GridItem = ({ img }: { img: string }) => {
  return <div className="i-grid__item">
    <img src={img} alt="" />
  </div>
}

const Instagram: React.FunctionComponent<IInstagramProps> = (props) => {
  const data = [
    { img: '/articles/small/small1.jpg' },
    { img: '/articles/small/small2.jpg' },
    { img: '/articles/small/small3.jpg' },
    { img: '/articles/small/small4.jpg' },
    { img: '/articles/small/small5.jpg' },
    { img: '/articles/small/small6.jpg' },
  ]
  return <div className="instagram">
    <div className="instagram__title">Instagram</div>
    <div className="instargam__grid i-grid">
      {data.map(item => <GridItem {...item} key={item.img} />)}
    </div>
    <button className="instagram__btn">View in instagram</button>
  </div>;
};

export default Instagram;
