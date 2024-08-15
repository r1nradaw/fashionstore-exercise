import ProductList from "@/components/product/ProductList";
import { useCart } from "@/contexts/cart";
import { Category, Product } from "@/models/product";
import axios from "axios";
import { useEffect, useState } from "react";

const fetchProducts = (): Promise<Product[]> => {
  const getUrl = "https://fashion-store.fly.dev/products";
  const newProducts = axios.get(getUrl).then((response) => {
    return response.data.data as Product[];
  });

  return new Promise((resolve) => resolve(newProducts));
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const cart = useCart();
  const onAddProduct = (productId: string) => {
    cart.addNumberOfItems(1);
    console.log(`add product:${productId} to the cart.`);
  };

  useEffect(() => {
    let isStale = false;
    setIsLoading(true);
    fetchProducts().then((productsResult) => {
      console.log(productsResult)
      if (!isStale) {
        setIsLoading(false);
        setProducts(productsResult);
      }
    });
    return () => {
      isStale = true;
    };
  }, []);
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <ProductList items={products} onAddProduct={onAddProduct} />
      )}
    </>
  );
}
