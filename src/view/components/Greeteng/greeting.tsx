import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../common/Button/Button';
import * as classes from './greeting.module.css';

function Greeting() {
  const navigate = useNavigate();

  const buttons = [{ path: '/news', label: 'Новини' }];

  return (
    <section className={classes.greeting}>
      <div className={classes.textContent}>
        <h2>Вітаємо на сайті Куликівського ліцею!</h2>
        <p className={classes.subtitle}>
          Куликівський ліцей Куликівської селищної ради Чернігівського району Чернігівської області.
        </p>
        <p className={classes.subtitle}>
          Навчальний заклад, де працюють досвідчені та креативні вчителі, де навчаються розумні та
          творчі учні. Де кожен учень має доступ до освіти.
        </p>
        <div className={classes.wrapper}>
          {buttons.map((button) => (
            <MyButton
              key={button.path}
              type="button"
              className={classes.catalogButton}
              onClick={() => navigate(button.path)}>
              {button.label}
            </MyButton>
          ))}
        </div>
      </div>
      <div className={classes.picture} />
    </section>
  );
}

export default Greeting;
