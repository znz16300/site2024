function getQueryParams(url: string): { titlePages: string; keyPages: string } | null {
  const params = new URLSearchParams(url.split('?')[1]);
  const titlePages = params.get('titlePages');
  const keyPages = params.get('keyPages');

  if (titlePages && keyPages) {
    return {
      titlePages,
      keyPages
    };
  }

  return null;
}

export default getQueryParams;
