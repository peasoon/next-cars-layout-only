import * as React from 'react';

interface ITagsProps {
}

const Tag = ({ tag }: { tag: string }) => {
  return <span className="tags__item">{tag} </span>
}

const Tags: React.FunctionComponent<ITagsProps> = (props) => {
  const data = ['Business', 'Freelance', 'Money', 'Experience', 'Lifestyle', 'SEO', 'Wordpress', 'Marketing', 'UX', 'Modern', 'Success', 'Nature', 'Productivity', 'Sales page', 'Sell', 'Teamwork', 'Monetize']
  return <div className="tags">
    <div className="tags__title">Tags</div>
    <div className="tags__list">
      {data.map(item => <Tag tag={item} key={item} />)}
    </div>
  </div>;
};

export default Tags;
