import * as React from 'react';
import { FormEventHandler } from 'react';

interface INewsletterProps {
}

const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault()
}

export const NewsletterForm = () => {
  return <form className="newsletter__form news-form" onSubmit={handleSubmit}>
    <label>
      <input type="text" placeholder='Your name' />
    </label>
    <label>
      <input type="text" placeholder='Your email adress' />
    </label>
    <button className='news-form__btn'>Subscribe to newsletter</button>
  </form>
}

const Newsletter: React.FunctionComponent<INewsletterProps> = (props) => {
  return <div className="newsletter">
    <div className="newsletter__title">Email newsletter</div>
    <div className="newsletter__subtitle">Sign up to receive email updates and to hear what's going on.</div>
    <NewsletterForm />
  </div>;
};

export default Newsletter;
