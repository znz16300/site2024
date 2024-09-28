/* eslint-disable @typescript-eslint/no-unused-vars */
// Інтерфейс для продуктів
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
// }

interface Product {
  id: string;
  Розділ: string;
  'Тип (1 - картки, 2- абзаци)': string;
  Абзац: string;
  Фото: string;
  'Ширина малюнка (%)': string;
  'Кнопка з посиланням': string;
}

// Функція для читання JSON за допомогою fetch
async function fetchProducts(url: string): Promise<Product[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: Product[] = await response.json();
  return data;
}

// Функція для фільтрації продуктів за категорією
function filterProductsByCategory(products: Product[], value: string): Product[] {
  return products.filter((product) => product.Розділ === value);
}

function readDataFromFile(url: string, value: string) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const filteredProducts = filterProductsByCategory(data, value);
      // eslint-disable-next-line no-console
      console.log(filteredProducts);
      return filteredProducts;
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function getDataFromJson(url: string, value: string) {
  const products = readDataFromFile(url, value);
  // eslint-disable-next-line no-console
  console.log(value, products);
  // const filteredProducts = filterProductsByCategory(products, value);

  // eslint-disable-next-line no-console
  // console.log(filteredProducts);
}

export default getDataFromJson;
