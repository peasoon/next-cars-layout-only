"use client"
import * as React from 'react';
import { NewsletterForm } from './newsletter';

interface IFooterProps {
}

const Icon = ({ href }: { href: string }) => {
  return <div className="ftk-icons__item">
    <svg>
      <use xlinkHref={href} />
    </svg>
  </div>

}

const FtrItem = ({ img, title, subtitle }: { img: string, title: string; subtitle: string }) => {
  return <div className="ftr-items__item ftri-item">
    <div className="ftri-item__img">
      <img src={img} alt="" />
    </div>
    <div className="ftri-item__title">{title}</div>
    <div className="ftri-item__subtitle">{subtitle}</div>
  </div>
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  const icons = [
    { href: '/footer/icon1.svg#icon1' },
    { href: '/footer/icon2.svg#icon2' },
    { href: '/footer/icon3.svg#icon3' },
    { href: '/footer/icon4.svg#icon4' },
    { href: '/footer/icon5.svg#icon5' },
  ]
  const items = [
    {
      img: '/footer/items/item1.jpg',
      title: 'One of Saturn’s largest rings may be newer than…',
      subtitle: 'Rickie Baroch - June 6, 2019'
    },
    {
      img: '/footer/items/item2.jpg',
      title: 'One of Saturn’s largest rings may be newer than…',
      subtitle: 'Rickie Baroch - June 6, 2019'
    },
    {
      img: '/footer/items/item3.jpg',
      title: 'One of Saturn’s largest rings may be newer than…',
      subtitle: 'Rickie Baroch - June 6, 2019'
    },
  ]
  return <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-top__premium ftop-premium">
          <div className="ftop__title">Premium <span>CAR</span></div>
          <div className="ftop__text">Short description about the company Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div className="ftop__keep ft-keep">
            <div className="ft-keep__title">Keep in touch</div>
            <div className="ft-keep__icons ftk-icons">
              {icons.map(icon => <Icon {...icon} key={icon.href} />)}
            </div>
          </div>
        </div>
        <div className="footer-top__recent ftop-recent">
          <div className="ftop-recent__title">Recent posts</div>
          <div className="ftop-recent__items ftr-items">
            {items.map(item => <FtrItem {...item} key={item.img} />)}
          </div>
        </div>
        <div className="footer-top__news ftop-news">
          <div className="ftop-news__title">Newsletter</div>
          <form className="ftop-news__form" onSubmit={(e) => {
            e.preventDefault()
          }}>
            <input type="text" placeholder='Your name' />
            <input type="text" placeholder='Your email adress' />
            <button>Subscribe to newsletter</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </div>
  </footer>;
};

export default Footer;
