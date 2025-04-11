import { v4 as uuidv4 } from "uuid";
export const listMenuHeader = [
  {
    id: uuidv4(),
    title: "Giới thiệu",
    link: "/gioi-thieu",
  },
  {
    id: uuidv4(),
    title: "Sản phẩm mới",
    link: "/collections/new",
  },
  {
    id: uuidv4(),
    title: "Sale",
    link: "/collections/on-sale",
  },
  {
    id: uuidv4(),
    title: "Áo Nam",
    link: "/collections/ao-nam",
    subMenu: [
      {
        id: uuidv4(),
        title: "Áo Thun",
        link: "/collections/ao-thun",
      },
      {
        id: uuidv4(),
        title: "Áo Polo",
        link: "/collections/ao-polo",
      },
      {
        id: uuidv4(),
        title: "Áo Sơ mi",
        link: "/collections/ao-so-mi",
      },
      {
        id: uuidv4(),
        title: "Áo Khoác",
        link: "/collections/ao-khoac",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Áo Nam",
    link: "/collections/ao-nam",
    subMenu: [
      {
        id: uuidv4(),
        title: "Áo Thun",
        link: "/collections/ao-thun",
      },
      {
        id: uuidv4(),
        title: "Áo Polo",
        link: "/collections/ao-polo",
      },
      {
        id: uuidv4(),
        title: "Áo Sơ mi",
        link: "/collections/ao-so-mi",
      },
      {
        id: uuidv4(),
        title: "Áo Khoác",
        link: "/collections/ao-khoac",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Tin tức",
    link: "/tin-tuc",
  },
  {
    id: uuidv4(),
    title: "Liên hệ",
    link: "/lien-he",
  },
];
