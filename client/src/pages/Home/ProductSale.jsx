import React, { useEffect, useState } from "react";
import ProductAPI from "../../API/ProductAPI";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/format";
const ProductSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await ProductAPI.getProductSale();
      setProducts(response);
    };
    fetchData();
  }, []);
  return (
    <section className="list-job mt-10 xl:mt-16 ">
      <div className="container">
        <h2 className="text-center text-[1.25rem] lg:text-[2rem] font-semibold mb-7">
          SẢN PHẨM KHUYẾN MÃI
        </h2>
        <div className="flex flex-wrap">
          {products &&
            products.map((item) => {
              return (
                <div className="lg:px-2.5 w-1/4" key={item._id}>
                  <div className="item-product px-3 py-2 rounded-lg shadow-[0px_0px_4px_2px_#dbdbdb80]">
                    <Link
                      to={`/san-pham/${item.slug}`}
                      className="bg-[#F0EEED] c-img pt-[100%] rounded-[1.25rem]"
                    >
                      <img
                        loading="lazy"
                        src={item.image}
                        alt={item.name}
                        title={item.name}
                        className="img-fluid object-contain"
                      />
                    </Link>
                    <Link
                      className="text-[1.125rem] font-bold mt-4 block"
                      to={`/san-pham/${item.slug}`}
                    >
                      <h3>{item.name}</h3>
                    </Link>
                    <p className="font-bold flex items-center mt-1 text-[1rem]">
                      {item.sale > 0 ? (
                        <>
                          <span className="text-[#8B4513]">
                            {formatPrice(
                              item.price - (item.sale * item.price) / 100
                            )}
                          </span>
                          <span className=" text-sm line-through ml-2">
                            {formatPrice(item.price)}
                          </span>
                          <span className="ml-3 font-medium py-1 px-2 text-[#FF3333] rounded-[3.875rem] bg-[rgba(255,51,51,0.1)] text-sm inline-block">
                            -{item.sale}%
                          </span>
                        </>
                      ) : (
                        <span className="text-[#8B4513]">
                          {formatPrice(item.price)}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ProductSale;
