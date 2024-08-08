import { atom } from "nanostores";
import type Card from "../types/Card";

export const cart = atom<Card[]>([]);

export const getTotal = () => {
  if (cart.get().length == 0) return 0;
  return cart
    .get()
    .map((a) => a.price * a.quantity)
    .reduce((a, b) => a + b)
    .toFixed(2);
};

export const getEachTotal = (item: Card) => {
  if (!item) return;

  const eachTotal = item.price * (item.quantity || 1);
  return eachTotal.toFixed(2);
};

export const modalVisible = atom(false);

export const cards = atom<Card[]>([
  {
    id: 1,
    images: {
      desktop: "/image-waffle-desktop.jpg",
      mobile: "/image-waffle-mobile.jpg",
      tablet: "/image-waffle-tablet.jpg",
      thumbnail: "/image-waffle-thumbnail.jpg",
    },
    titles: {
      brief: "Waffle",
      full: "Waffle with Berries",
    },
    price: 6.5,
    quantity: 1,
  },
  {
    id: 2,
    images: {
      desktop: "/image-creme-brulee-desktop.jpg",
      mobile: "/image-creme-brulee-mobile.jpg",
      tablet: "/image-creme-brulee-tablet.jpg",
      thumbnail: "/image-creme-brulee-thumbnail.jpg",
    },
    titles: {
      brief: "Creme Brulle",
      full: "Vanilla Bean Creme Brulle",
    },
    price: 7.0,
    quantity: 1,
  },
  {
    id: 3,
    images: {
      desktop: "/image-macaron-desktop.jpg",
      mobile: "/image-macaron-mobile.jpg",
      tablet: "/image-macaron-tablet.jpg",
      thumbnail: "/image-macaron-thumbnail.jpg",
    },
    titles: {
      brief: "Macaron",
      full: "Macaron Mix Of Five",
    },
    price: 8.0,
    quantity: 1,
  },
  {
    id: 4,
    images: {
      desktop: "/image-tiramisu-desktop.jpg",
      mobile: "/image-tiramisu-mobile.jpg",
      tablet: "/image-tiramisu-tablet.jpg",
      thumbnail: "/image-tiramisu-thumbnail.jpg",
    },
    titles: {
      brief: "Tiramisu",
      full: "Classic Tiramisu",
    },
    price: 5.5,
    quantity: 1,
  },
  {
    id: 5,
    images: {
      desktop: "/image-baklava-desktop.jpg",
      mobile: "/image-baklava-mobile.jpg",
      tablet: "/image-baklava-tablet.jpg",
      thumbnail: "/image-baklava-thumbnail.jpg",
    },
    titles: {
      brief: "Baklava",
      full: "Pistachio Baklava",
    },
    price: 4.0,
    quantity: 1,
  },
  {
    id: 6,
    images: {
      desktop: "/image-meringue-desktop.jpg",
      mobile: "/image-meringue-mobile.jpg",
      tablet: "/image-meringue-tablet.jpg",
      thumbnail: "/image-meringue-thumbnail.jpg",
    },
    titles: {
      brief: "Pie",
      full: "Lemon Meringue Pie",
    },
    price: 5.0,
    quantity: 1,
  },
  {
    id: 7,
    images: {
      desktop: "/image-cake-desktop.jpg",
      mobile: "/image-cake-mobile.jpg",
      tablet: "/image-cake-tablet.jpg",
      thumbnail: "/image-cake-thumbnail.jpg",
    },
    titles: {
      brief: "Cake",
      full: "Red Velvet Cake",
    },
    price: 4.5,
    quantity: 1,
  },
  {
    id: 8,
    images: {
      desktop: "/image-brownie-desktop.jpg",
      mobile: "/image-brownie-mobile.jpg",
      tablet: "/image-brownie-tablet.jpg",
      thumbnail: "/image-brownie-thumbnail.jpg",
    },
    titles: {
      brief: "Brownie",
      full: "Salted Caramel Brownie",
    },
    price: 5.5,
    quantity: 1,
  },
  {
    id: 9,
    images: {
      desktop: "/image-panna-cotta-desktop.jpg",
      mobile: "/image-panna-cotta-mobile.jpg",
      tablet: "/image-panna-cotta-tablet.jpg",
      thumbnail: "/image-panna-cotta-thumbnail.jpg",
    },
    titles: {
      brief: "Panna Cotta",
      full: "Vanilla Panna Cotaa",
    },
    price: 6.5,
    quantity: 1,
  },
]);

export const addItemToState = (card: Card) => {
  if (cart.get().find((x) => x.id == card.id)) {
    const modified = cart.get().map((item) => {
      if (item.id === card.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    cart.set(modified);
  } else {
    cart.set([...cart.get(), card]);
  }
};

export const removeItemFromStore = (
  card: Card,
  mode: "instance" | "decrement" = "decrement",
) => {
  const existingItem = cart.get().find((x) => x.id == card.id);

  const removeInstance = () => {
    const modified = cart.get().filter((x) => x.id !== card.id);
    cart.set(modified);
  };

  if (!existingItem) return;
  if (mode == "instance") removeInstance();

  if (existingItem.quantity <= 1) {
    removeInstance();
  } else {
    const modified = cart.get().map((item) => {
      if (item.id === card.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    cart.set(modified);
  }
};

export const toggleModal = () => modalVisible.set(!modalVisible.get());
