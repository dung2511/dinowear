import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/format";

const ItemProduct = (props) => {
  return (
    <div className="item-product px-3 py-2 rounded-lg shadow-[0px_0px_4px_2px_#dbdbdb80]">
      <Link
        to={`/san-pham/${props.data.slug}`}
        className="bg-[#F0EEED] c-img pt-[100%] rounded-[1.25rem]"
      >
        <img
          loading="lazy"
          src={props.data.image}
          alt={props.data.name}
          title={props.data.name}
          className="img-fluid object-contain"
        />
      </Link>
      <Link
        className="text-[1.125rem] font-bold mt-4 block"
        to={`/san-pham/${props.data.slug}`}
      >
        <h3>{props.data.name}</h3>
      </Link>
      <p className="font-bold flex items-center mt-1 text-[1rem]">
        {props.data.sale > 0 ? (
          <>
            <span className="text-[#8B4513]">
              {formatPrice(
                props.data.price - (props.data.sale * props.data.price) / 100
              )}
            </span>
            <span className=" text-sm line-through ml-2">
              {formatPrice(props.data.price)}
            </span>
            <span className="ml-3 font-medium py-1 px-2 text-[#FF3333] rounded-[3.875rem] bg-[rgba(255,51,51,0.1)] text-sm inline-block">
              -{props.data.sale}%
            </span>
          </>
        ) : (
          <span className="text-[#8B4513]">
            {formatPrice(props.data.price)}
          </span>
        )}
      </p>
    </div>
  );
};

export default ItemProduct;
