import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductAPI from "../../API/ProductAPI";
import PageMeta from "../Admin/components/common/PageMeta";
import StrockV from "./components/StrockV";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import CartsLocal from "../../API/CartsLocal";
import { changeCount } from "../../Redux/Action/ActionCount";
import { toast } from "react-toastify";
import CommentAPI from "../../API/CommentAPI";
import { formatDate, formatPrice } from "../../utils/format";
import { ObjectId } from "bson";
const ProductDetail = () => {
  const [detail, setDetail] = useState({});
  const { slug } = useParams();

  const dispatch = useDispatch();

  // Change Slide Thumb
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isVertical, setIsVertical] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Select Size and Color Product
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  useEffect(() => {
    if (detail?.colors?.length > 0) {
      setSelectedColor(detail.colors[0]);
      setSelectedSize(detail.colors[0].sizes[0].size);
    }
  }, [detail]);

  // Get Product Detail
  useEffect(() => {
    const fetchData = async () => {
      const response = await ProductAPI.getDetail(slug);
      setDetail(response);
    };
    fetchData();
  }, [slug]);

  // Change Quantity
  const [quantity, setQuantity] = useState(1);
  const upQuantity = () => {
    const val = parseInt(quantity) + 1;
    setQuantity(val);
  };
  const downQuantity = () => {
    const val = parseInt(quantity) - 1;
    if (val === 0) return;
    setQuantity(val);
  };
  const onChangeQty = (e) => {
    setQuantity(e.target.value);
  };

  // Add to Cart
  const count_change = useSelector((state) => state.Count.isLoad);
  const addToCart = (e) => {
    e.preventDefault();
    const data = {
      id_cart: new ObjectId(),
      id_product: detail._id,
      name_product: detail.name,
      slug_product: detail.slug,
      price_product:
        detail.sale > 0
          ? detail.price - (detail.sale * detail.price) / 100
          : detail.price,
      quantity: quantity,
      image: detail.image,
      color: selectedColor.hex,
      size: selectedSize,
    };
    CartsLocal.addProduct(data);
    const action_count_change = changeCount(count_change);
    dispatch(action_count_change);

    toast.success("Thêm sản phẩm thành công", {
      position: "top-right",
    });
  };

  // Comment
  const [star, setStar] = useState(1);
  const [comment, setComment] = useState("");
  const [listComment, setListComment] = useState([]);
  const handleComment = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("id_user")) {
      toast.error("Vui lòng đăng nhập để bình luận !!", {
        position: "top-right",
      });
      return;
    } else {
      if (!comment) {
        toast.error("Nôi dung không được để trống !!", {
          position: "top-right",
        });
        return;
      }
      const data = {
        id_user: JSON.parse(localStorage.getItem("id_user")),
        content: comment,
        star: star,
      };
      const postData = async () => {
        const response = await CommentAPI.post_comment(data, detail._id);
        setComment("");
        setStar(1);
      };
      const updateData = async () => {
        const updatedComments = await CommentAPI.get_comment(detail._id);
        setListComment(updatedComments);
      };
      postData();
      setTimeout(() => {
        updateData();
      }, 300);
    }
  };
  useEffect(() => {
    if (detail._id) {
      const fetchData = async () => {
        const response = await CommentAPI.get_comment(detail._id);
        setListComment(response);
      };
      fetchData();
    }
  }, [detail._id]);

  return (
    <>
      <PageMeta title={detail.name} description={detail.description} />
      <section className="product__detail mt-10">
        <div className="container">
          <div className="flex flex-wrap lg:-mx-4">
            <div className="w-full mb-5 lg:mb-0 lg:w-1/2 lg:px-4">
              <div className="flex flex-wrap-reverse lg:-mx-2">
                <div className="w-full lg:w-1/4 lg:px-2">
                  <Swiper
                    key={isVertical ? "vertical" : "horizontal"}
                    className="swiper-gallery-thumbs h-full"
                    direction={isVertical ? "vertical" : "horizontal"}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={isVertical ? 0 : 14}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                  >
                    {detail?.gallery?.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="c-img pt-[100%] 2xl:pt-[115%]">
                            <img
                              src={item.url}
                              alt={detail.name}
                              title={detail.name}
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                <div className="w-full lg:w-3/4 mb-3 lg:mb-0 lg:px-2">
                  <Swiper
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="swiper-gallery-product"
                  >
                    {detail?.gallery?.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="c-img pt-[100%] 2xl:pt-[115%] rounded-[1.25rem]">
                            <img
                              src={item.url}
                              alt={detail.name}
                              title={detail.name}
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:px-4">
              <div>
                <h1 className="font-bold text-[1.375rem]">{detail.name}</h1>
                <p className="font-bold flex items-center text-[1.25rem]">
                  {detail.sale > 0 ? (
                    <>
                      <span>
                        {formatPrice(
                          detail.price - (detail.sale * detail.price) / 100
                        )}
                      </span>
                      <span className="text-[rgba(0,0,0,0.3)] line-through ml-3">
                        {formatPrice(detail.price)}
                      </span>
                      <span className="ml-3 font-medium py-1.5 px-3 text-[#FF3333] rounded-[3.875rem] bg-[rgba(255,51,51,0.1)] text-base inline-block">
                        -{detail.sale}%
                      </span>
                    </>
                  ) : (
                    <span>{formatPrice(detail.price)}</span>
                  )}
                </p>
                <div className="my-6">
                  <p className="mb-4 text-[rgba(0,0,0,0.6)]">Màu sắc</p>
                  <div className="flex items-center">
                    {detail.colors?.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedColor(color);
                          setSelectedSize(color.sizes[0].size);
                        }}
                        className="w-9 h-9 mr-3 last:mr-0 rounded-full border relative inline-flex items-center justify-center"
                        style={{ backgroundColor: color.hex }}
                      >
                        {selectedColor?.hex === color.hex && <StrockV />}
                      </button>
                    ))}
                  </div>
                </div>
                <hr className="bg-[rgba(0,0,0,0.1)]" />
                <div className="my-6">
                  <p className="mb-4 text-[rgba(0,0,0,0.6)]">Kích thước</p>
                  {selectedColor?.sizes?.map((sizeObj, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(sizeObj.size)}
                      className={`border rounded-[1.75rem] mr-3 last:mr-3 text-[rgba(0,0,0,0.6)] bg-[#F0F0F0] px-6 py-3 ${
                        selectedSize === sizeObj.size
                          ? "bg-black text-white"
                          : ""
                      }`}
                    >
                      {sizeObj.size}
                    </button>
                  ))}
                </div>
                <hr className="bg-[rgba(0,0,0,0.1)]" />
                <div className="flex items-center mt-6">
                  <div className="quantity h-[3.25rem] flex items-center rounded-[2rem] bg-[#F0F0F0] py-3 px-5">
                    <button onClick={downQuantity}>
                      <Decrement />
                    </button>
                    <input
                      type="text"
                      className="border-0 w-[5rem] bg-transparent text-center"
                      value={quantity}
                      onChange={onChangeQty}
                    />
                    <button onClick={upQuantity}>
                      <Increment />
                    </button>
                  </div>
                  <div className="add-to-cart flex-1 ml-5">
                    <button
                      onClick={addToCart}
                      className="bg-[#000000] text-white w-full h-[3.25rem] rounded-[2rem] text-center"
                    >
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
                <div className="add-to-cart mt-3">
                  <button className="bg-[#000000] text-white w-full h-[3.25rem] rounded-[2rem] text-center">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="description-product mt-10">
        <div className="container">
          <div className="mb-4 text-[#333333] font-bold text-[1.25rem] border-b border-solid border-[#000000] pb-2 w-fit">
            Thông tin sản phẩm
          </div>
          <div
            className="s-content"
            dangerouslySetInnerHTML={{ __html: detail.content }}
          ></div>
        </div>
      </section>
      <section className="product_review mt-10">
        <div className="container">
          <div className="font-bold text-[1.25rem] mb-3">
            Chia sẻ đánh giá của bạn
          </div>
          <div className="form-comment mb-8" onSubmit={handleComment}>
            <form className="mb-6">
              <div className="py-3 px-4 mb-4 rounded-lg rounded-t-lg border border-[#dadada] bg-[#f8f8f8]">
                <div className="flex justify-start items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <label
                      key={num}
                      className="cursor-pointer hover:scale-110 transition"
                    >
                      <input
                        type="radio"
                        name="rating"
                        value={num}
                        className="hidden"
                        onChange={() => setStar(num)}
                      />
                      <span
                        className={`text-2xl ${
                          num <= star ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    </label>
                  ))}
                </div>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  id="comment"
                  rows="6"
                  className=" w-full text-sm text-gray-900 border border-solid border-[#eeeeee] py-4 px-3 transition-all rounded-xl resize-none"
                  placeholder="Bình luận"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#1d4ed8] rounded-lg"
              >
                Post comment
              </button>
            </form>
          </div>
          <div className="mb-8">
            <span className="font-bold text-[1.25rem]">Các bình luận </span>
            <span className="text-sm text-[rgba(0,0,0,0.6)]">
              ({listComment.length})
            </span>
          </div>
          <div className="list-comment flex items-center flex-wrap lg:-mx-3">
            {listComment &&
              listComment.map((value) => {
                return (
                  <div className="w-full lg:px-3 mb-6 lg:w-1/2" key={value._id}>
                    <div className="item-comment p-7 border border-solid border-[rgba(0,0,0,0.1)] rounded-[1.25rem] overflow-hidden">
                      <div className="font-bold mb-3 text-[1.25rem] flex items-center">
                        {value.id_user.fullname}
                        <span className="w-6 h-6 ml-1 inline-flex items-center justify-center rounded-full overflow-hidden">
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2.8291C10.0716 2.8291 8.18657 3.40093 6.58319 4.47227C4.97982 5.54362 3.73013 7.06636 2.99218 8.84794C2.25422 10.6295 2.06114 12.5899 2.43735 14.4812C2.81355 16.3725 3.74215 18.1098 5.10571 19.4734C6.46928 20.837 8.20656 21.7656 10.0979 22.1418C11.9892 22.518 13.9496 22.3249 15.7312 21.5869C17.5127 20.849 19.0355 19.5993 20.1068 17.9959C21.1782 16.3925 21.75 14.5075 21.75 12.5791C21.7473 9.99408 20.7192 7.51571 18.8913 5.68783C17.0634 3.85994 14.585 2.83183 12 2.8291ZM16.2806 10.8597L11.0306 16.1097C10.961 16.1795 10.8783 16.2348 10.7872 16.2725C10.6962 16.3103 10.5986 16.3297 10.5 16.3297C10.4014 16.3297 10.3038 16.3103 10.2128 16.2725C10.1218 16.2348 10.039 16.1795 9.96938 16.1097L7.71938 13.8597C7.57865 13.719 7.49959 13.5281 7.49959 13.3291C7.49959 13.1301 7.57865 12.9392 7.71938 12.7985C7.86011 12.6577 8.05098 12.5787 8.25 12.5787C8.44903 12.5787 8.6399 12.6577 8.78063 12.7985L10.5 14.5188L15.2194 9.79848C15.2891 9.72879 15.3718 9.67352 15.4628 9.63581C15.5539 9.59809 15.6515 9.57868 15.75 9.57868C15.8485 9.57868 15.9461 9.59809 16.0372 9.63581C16.1282 9.67352 16.2109 9.72879 16.2806 9.79848C16.3503 9.86816 16.4056 9.95088 16.4433 10.0419C16.481 10.133 16.5004 10.2306 16.5004 10.3291C16.5004 10.4276 16.481 10.5252 16.4433 10.6163C16.4056 10.7073 16.3503 10.79 16.2806 10.8597Z"
                              fill="#01AB31"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="flex justify-start items-center space-x-1 mb-4">
                        {Array.from({ length: value.star }).map((_, i) => {
                          return (
                            <label
                              className="cursor-pointer hover:scale-110 transition"
                              key={i}
                            >
                              <span className="text-yellow-400">★</span>
                            </label>
                          );
                        })}
                      </div>
                      <div className="text-[rgba(0,0,0,0.6)] mb-6">
                        {value.content}
                      </div>
                      <div className="font-medium text-[rgba(0,0,0,0.6)]">
                        {formatDate(value.createdAt)}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
