import getQueryParams from './getQueryParams';

export default function urlUpdate(url: string) {
  let urlToNavigate: string = '';
  if (
    url.indexOf('./site/page') === 0 ||
    url.indexOf('/site/page') === 0 ||
    url.indexOf('site/page') === 0 ||
    url.indexOf('./page') === 0 ||
    url.indexOf('/page') === 0 ||
    url.indexOf('page') === 0
  ) {
    const params = getQueryParams(url);
    if (params) {
      const { titlePages, keyPages } = params;
      urlToNavigate = `/page?titlePages=${titlePages}&keyPages=${keyPages}`;
    }
  } else if (url.indexOf('http') === 0) {
    urlToNavigate = url;
  } else if (
    url === './kursi.html' ||
    url === '/kursi.html' ||
    url === './site/kursi.html' ||
    url === '/site/kursi.html'
  ) {
    urlToNavigate = '/courses';
  }
  return urlToNavigate;
}
