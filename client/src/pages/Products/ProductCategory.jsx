import React, { useEffect, useState } from "react";
import PageMeta from "../Admin/components/common/PageMeta";
import { Link, useNavigate, useParams } from "react-router-dom";
import queryString from "query-string";
import ProductCategoryAPI from "../../API/ProductCategoryAPI";
import ProductAPI from "../../API/ProductAPI";
import ItemProduct from "./components/ItemProduct";

const ProductCategory = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [category, setCategory] = useState();
  const [allCategory, setAllCategory] = useState();
  const [listData, setListData] = useState();
  // Get Detail Category and Product Category
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductCategoryAPI.getDetail(slug);
        setCategory(response);
        if (response?._id) {
          const params = {
            id_category: response?._id,
          };
          const query = "?" + queryString.stringify(params);
          const responseData = await ProductAPI.getCategory(query);
          setListData(responseData);
        }
      } catch (error) {
        if (error.response?.data?.msg === "Danh mục không tồn tại") {
          navigate("/404");
        }
      }
    };
    fetchData();
  }, [slug]);

  // Get All Category
  useEffect(() => {
    const fetchData = async () => {
      const response = await ProductCategoryAPI.getAllCategory();
      setAllCategory(response);
    };
    fetchData();
  }, []);
  return (
    <section>
      <PageMeta title={category?.name} />
      <div className="container">
        <div className=" mx-auto px-4 py-4 flex">
          <aside className="w-1/4 pr-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Filters</h2>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Category</h3>
                <ul>
                  {allCategory &&
                    allCategory.map((item) => {
                      return (
                        <li
                          key={item._id}
                          className={item.slug === slug ? "active" : ""}
                        >
                          <Link
                            className="block py-1"
                            to={`/collections/${item.slug}`}
                            title={item.name}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Price</h3>
                <input className="w-full" max="200" min="50" type="range" />
                <div className="flex justify-between text-sm">
                  <span>$50</span>
                  <span>$200</span>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="border rounded-full px-4 py-1">
                    XX-Small
                  </button>
                  <button className="border rounded-full px-4 py-1">
                    X-Small
                  </button>
                  <button className="border rounded-full px-4 py-1">
                    Small
                  </button>
                  <button className="border rounded-full px-4 py-1">
                    Medium
                  </button>
                  <button className="border rounded-full px-4 py-1 bg-black text-white">
                    Large
                  </button>
                  <button className="border rounded-full px-4 py-1">
                    X-Large
                  </button>
                  <button className="border rounded-full px-4 py-1">
                    XX-Large
                  </button>
                  <button className="border rounded-full px-4 py-1">
                    3X-Large
                  </button>
                </div>
              </div>
              <button className="bg-black text-white w-full py-2 rounded-full">
                Apply Filter
              </button>
            </div>
          </aside>
          <div className="w-3/4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{category?.name}</h2>
              <div className="flex items-center space-x-2">
                <span>Showing 1-10 of 100 Products</span>
                <select className="border rounded px-2 py-1">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2 xl:-mx-3">
              {listData &&
                listData.map((item) => {
                  return (
                    <div
                      className="w-1/2 xl:w-1/3 px-2 xl:px-3 mb-4 xl:mb-6"
                      key={item._id}
                    >
                      <ItemProduct data={item} />
                    </div>
                  );
                })}
            </div>
            <div className="flex justify-between items-center mt-8">
              <button className="border rounded-full px-4 py-2">
                Previous
              </button>
              <div className="flex space-x-2">
                <button className="border rounded-full px-4 py-2">1</button>
                <button className="border rounded-full px-4 py-2">2</button>
                <button className="border rounded-full px-4 py-2">3</button>
                <button className="border rounded-full px-4 py-2">...</button>
                <button className="border rounded-full px-4 py-2">8</button>
                <button className="border rounded-full px-4 py-2">9</button>
                <button className="border rounded-full px-4 py-2">10</button>
              </div>
              <button className="border rounded-full px-4 py-2">Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
