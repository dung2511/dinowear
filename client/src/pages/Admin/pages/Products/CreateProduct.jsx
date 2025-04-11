import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductAPI from "../../API/ProductAPI";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";
import axios from "axios";
import CategoryAdminAPI from "../../API/ProductCategory";
import ComponentCard from "../../components/common/ComponentCard";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";

const CreateProduct = () => {
  const navigate = useNavigate();
  const fileInputImage = useRef(null);
  const fileInputGallery = useRef(null);
  const { id } = useParams();
  const [allCategory, setAllCategory] = useState([]);
  const editorRef = useRef();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    const fetchDataCategory = async () => {
      const rs = await CategoryAdminAPI.getAllCategory();
      setAllCategory(rs);
    };
    fetchDataCategory();
  }, []);

  // Choose Image Product
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [inputKey, setInputKey] = useState(Date.now());
  const handleEditorChange = (content) => {
    setContent(content);
  };
  const handleButtonChangeImage = (e) => {
    e.preventDefault();
    fileInputImage.current.click();
  };
  const handleDeleteImage = (e) => {
    e.preventDefault();
    setImage("");
    setInputKey(Date.now());
  };
  const handleFileChange = (e) => {
    e.preventDefault();
    if (e.target.files.length > 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    }
  };

  // Choose Gallery Image Product

  const [gallery, setGallery] = useState([]);
  const handleUploadGallery = (e) => {
    e.preventDefault();
    fileInputGallery.current.click();
  };
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => {
      return {
        url: URL.createObjectURL(file),
      };
    });

    setGallery((prev) => [...prev, ...newImages]);
  };
  const handleRemoveImage = (index) => {
    setGallery((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = {
      id: id,
      name: name,
      slug: slug,
      content: content,
      price: price,
      sale: sale,
      id_category: category,
      file: file,
      image: image,
    };
    const response = await axios.patch(
      "http://localhost:8080/api/admin/products/update/",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);

    if (response.data.msg === "Bạn đã update thành công") {
      toast.success(response.data.msg, {
        position: "top-right",
      });
      // setTimeout(() => {
      //   navigate("/admin/basic-tables");
      // }, 300);
    }
  };
  return (
    <>
      <form>
        <div className="flex justify-between mb-4">
          <p className="text-[1.5rem] font-bold text-gray-700 dark:text-gray-400">
            Sản phẩm
          </p>

          <div className="flex items-center gap-5">
            <div className="button-borders">
              <button className="primary-button" onClick={() => navigate(-1)}>
                Back
              </button>
            </div>
            <div className="button-borders">
              <button className="primary-button" onClick={handleUpdate}>
                Lưu
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-full lg:w-3/4">
            <ComponentCard title="Thông tin chung">
              <div className="space-y-6">
                <div>
                  <Label>Tên sản phẩm</Label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Đường dẫn</Label>
                  <Input
                    type="text"
                    placeholder="duong-dan-san-pham"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </div>
                {/* <div>
                <Label>Select Input</Label>
                <Select
                  options={options}
                  placeholder="Select an option"
                  onChange={handleSelectChange}
                  className="dark:bg-dark-900"
                />
              </div> */}
                <div>
                  <Label>Thư viện ảnh</Label>
                  <div className="flex flex-col mt-4  items-center gap-4">
                    <div className="border border-solid border-[#E0E0E0] p-3 w-full">
                      <div className="flex flex-wrap -mx-3">
                        {gallery.map((item, index) => {
                          return (
                            <div key={index} className="px-3 mb-6 w-1/5">
                              <div className="bg-[#ececec] relative group">
                                <img
                                  src={item.url}
                                  alt="Uploaded"
                                  className="h-[8.25rem] w-[12.375rem] object-contain rounded-lg shadow-md"
                                />
                                <button
                                  onClick={() => handleRemoveImage(index)}
                                  className="absolute w-7 h-7 flex items-center justify-center top-1 right-1 bg-red-500 text-white p-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all"
                                >
                                  ✕
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <input
                      type="file"
                      ref={fileInputGallery}
                      style={{ display: "none" }}
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                    />

                    <button className="add-image" onClick={handleUploadGallery}>
                      <svg
                        aria-hidden="true"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeWidth="2"
                          stroke="#fffffff"
                          d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        ></path>
                        <path
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2"
                          stroke="#fffffff"
                          d="M17 15V18M17 21V18M17 18H14M17 18H20"
                        ></path>
                      </svg>
                      <span className="font-semibold">CHỌN ẢNH</span>
                    </button>

                    {/* Nút xóa tất cả ảnh */}
                    {gallery.length > 0 && (
                      <button
                        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all"
                        onClick={() => setGallery([])}
                      >
                        Xóa tất cả ảnh
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="tm">Thông tin sản phẩm</Label>
                  <div className="relative">
                    <Editor
                      apiKey="fliutou8i6pp4gkt9r5eb3g8cpicg9y90ono29vhhs1z133h"
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      onEditorChange={(content) => handleEditorChange(content)}
                      initialValue={content}
                      init={{
                        height: 600,
                        width: "100%",
                        menubar: false,
                        plugins: "lists link image table code",
                        toolbar:
                          "undo redo | formatselect | bold italic underline |  alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | link image media | code | table | forecolor backcolor",
                      }}
                    />
                  </div>
                </div>
              </div>
            </ComponentCard>
          </div>
          <div className="w-full lg:w-1/4">
            <ComponentCard title="Thông tin chung">
              <div>
                <Label>Ảnh sản phẩm</Label>
                <img className="mx-auto max-w-[50%] mb-2" src={image} alt="" />
                <div className="flex justify-around">
                  <input
                    key={inputKey}
                    type="file"
                    ref={fileInputImage}
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <button
                    className="add-image"
                    onClick={handleButtonChangeImage}
                  >
                    <svg
                      aria-hidden="true"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeWidth="2"
                        stroke="#fffffff"
                        d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        stroke="#fffffff"
                        d="M17 15V18M17 21V18M17 18H14M17 18H20"
                      ></path>
                    </svg>
                    Chọn ảnh
                  </button>
                  <button className="delete-image" onClick={handleDeleteImage}>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        stroke="fffffff"
                        d="M6.54142 3.7915C6.54142 2.54886 7.54878 1.5415 8.79142 1.5415H11.2081C12.4507 1.5415 13.4581 2.54886 13.4581 3.7915V4.0415H15.6252H16.666C17.0802 4.0415 17.416 4.37729 17.416 4.7915C17.416 5.20572 17.0802 5.5415 16.666 5.5415H16.3752V8.24638V13.2464V16.2082C16.3752 17.4508 15.3678 18.4582 14.1252 18.4582H5.87516C4.63252 18.4582 3.62516 17.4508 3.62516 16.2082V13.2464V8.24638V5.5415H3.3335C2.91928 5.5415 2.5835 5.20572 2.5835 4.7915C2.5835 4.37729 2.91928 4.0415 3.3335 4.0415H4.37516H6.54142V3.7915ZM14.8752 13.2464V8.24638V5.5415H13.4581H12.7081H7.29142H6.54142H5.12516V8.24638V13.2464V16.2082C5.12516 16.6224 5.46095 16.9582 5.87516 16.9582H14.1252C14.5394 16.9582 14.8752 16.6224 14.8752 16.2082V13.2464ZM8.04142 4.0415H11.9581V3.7915C11.9581 3.37729 11.6223 3.0415 11.2081 3.0415H8.79142C8.37721 3.0415 8.04142 3.37729 8.04142 3.7915V4.0415ZM8.3335 7.99984C8.74771 7.99984 9.0835 8.33562 9.0835 8.74984V13.7498C9.0835 14.1641 8.74771 14.4998 8.3335 14.4998C7.91928 14.4998 7.5835 14.1641 7.5835 13.7498V8.74984C7.5835 8.33562 7.91928 7.99984 8.3335 7.99984ZM12.4168 8.74984C12.4168 8.33562 12.081 7.99984 11.6668 7.99984C11.2526 7.99984 10.9168 8.33562 10.9168 8.74984V13.7498C10.9168 14.1641 11.2526 14.4998 11.6668 14.4998C12.081 14.4998 12.4168 14.1641 12.4168 13.7498V8.74984Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    Xóa
                  </button>
                </div>
              </div>
              <div>
                <Label>Giá</Label>
                <Input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div>
                <Label>Khuyến mãi</Label>
                <Input
                  type="text"
                  value={sale}
                  onChange={(e) => setSale(e.target.value)}
                />
              </div>
              <div>
                <Label>Danh mục sản phẩm</Label>
                <select
                  className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 "
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {allCategory.map((option) => (
                    <option
                      key={option._id}
                      value={option._id}
                      className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                    >
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </ComponentCard>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateProduct;
