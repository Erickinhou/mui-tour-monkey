import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import getRandomImageSrc from "../utils/getRandomImageSrc";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 300, height: 325, marginLeft: 0.5 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: getRandomImageSrc(),
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: getRandomImageSrc(),
    title: "Burger",
  },
  {
    img: getRandomImageSrc(),
    title: "Camera",
  },
  {
    img: getRandomImageSrc(),
    title: "Coffee",
    cols: 2,
  },
  {
    img: getRandomImageSrc(),
    title: "Hats",
    cols: 2,
  },
  {
    img: getRandomImageSrc(),
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: getRandomImageSrc(),
    title: "Basketball",
  },
  {
    img: getRandomImageSrc(),
    title: "Fern",
  },
  {
    img: getRandomImageSrc(),
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: getRandomImageSrc(),
    title: "Tomato basil",
  },
  {
    img: getRandomImageSrc(),
    title: "Sea star",
  },
  {
    img: getRandomImageSrc(),
    title: "Bike",
    cols: 2,
  },
];
