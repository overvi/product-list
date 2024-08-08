import { useStore } from "@nanostores/react";
import { addItemToState, cards, cart, removeItemFromStore } from "../store";
import { useState } from "react";

const Cards = () => {
  const cardData = useStore(cards);
  const cartData = useStore(cart);
  const [activeCards, setActiveCards] = useState<number[]>([]);

  const appendCard = (index: number) => {
    activeCards.includes(index)
      ? setActiveCards(activeCards.filter((x) => x !== index))
      : setActiveCards([...activeCards, index]);
  };

  return (
    <div className="cards">
      {cardData.map((card, index) => (
        <div
          key={card.id}
          className={`card  ${activeCards.includes(index) && "card--active"}  `}
        >
          <div className={`card-img-container `}>
            <picture>
              <source media="(max-width: 650px)" srcSet={card.images.mobile} />
              <source
                media="(min-width: 750px) and (max-width: 900px)"
                srcSet={card.images.tablet}
              />
              <img
                width="300"
                className="card-img"
                src={card.images.desktop}
                onClick={() => appendCard(index)}
                alt="Card Image"
              />
            </picture>
            <div className="card-add-container">
              {activeCards.includes(index) ? (
                <button className="card-add bg-white font-semibold">
                  <div className="flex w-full justify-between items-center">
                    <div
                      onClick={() => addItemToState(card)}
                      className="card-increment flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="none"
                        viewBox="0 0 10 10"
                      >
                        <path
                          fill="#fff"
                          d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      {cartData.find((x) => x.id == card.id)?.quantity || 0}
                    </p>
                    <div
                      onClick={() => removeItemFromStore(card)}
                      className="card-decrement flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="2"
                        fill="none"
                        viewBox="0 0 10 2"
                      >
                        <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                      </svg>
                    </div>
                  </div>
                </button>
              ) : (
                <button
                  onClick={() => addItemToState(card)}
                  className="card-add bg-white font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    fill="none"
                    viewBox="0 0 21 20"
                  >
                    <g fill="#C73B0F" clip-path="url(#a)">
                      <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"></path>
                      <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"></path>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M.333 0h20v20h-20z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  Add To Cart
                </button>
              )}
            </div>
          </div>
          <p className="card-title--brief text-rose-400">{card.titles.brief}</p>
          <p className="card-title font-semibold">{card.titles.full}</p>
          <p className="card-price font-semibold">${card.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
