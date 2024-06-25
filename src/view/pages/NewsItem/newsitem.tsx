import React from 'react';
import Header from '../../components/common/header/header';
import { AppState } from '../../../data/types/main-props';
import Footer from '../../components/common/footer/footer';
import * as classes from './newsitem.module.css';

const page = 'newsitem';

interface NewsItemProps {
  state: AppState;
  id: string;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}

function NewsItem({ state, id, setState }: NewsItemProps) {
  return (
    <div className={classes.newsWrapper}>
      <Header state={state} setState={setState} page={page} />
      <main className={classes.news}>News One {id}</main>
      <Footer />
    </div>
  );
}

export default NewsItem;
