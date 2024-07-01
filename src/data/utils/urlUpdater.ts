import getQueryParams from './getQueryParams';

export default function urlUpdate(url: string) {
  let urlToNavigate: string = '';
  if (
    url.indexOf('/site') === 0 ||
    url.indexOf('./site') === 0 ||
    url.indexOf('./page') === 0 ||
    url.indexOf('/page') === 0 ||
    url.indexOf('page') === 0
  ) {
    const params = getQueryParams(url);
    // eslint-disable-next-line no-console
    console.log('params', params);
    if (params) {
      const { titlePages, keyPages } = params;
      urlToNavigate = `/page?titlePages=${titlePages}&keyPages=${keyPages}`;
    }
  } else if (url.indexOf('http') === 0) {
    urlToNavigate = url;
  }
  return urlToNavigate;
}
