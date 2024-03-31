import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, removeAllFromCart, editQuantity } from "../cartSlicer";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductForCart() {
  // const [subTotal, setSubTotal] = useState(0);
  // const [grandTotal, setGrandTotal] = useState(0);
  // let indexProd = 0;

  const productsInCart = useSelector((state) => state.cart.cart);
  // setSubTotal(useSelector((state) => state.cart.subTotal));
  const subTotal = useSelector((state) => state.cart.subTotal);
  const dispatch = useDispatch();
  // function countSubTotal(array) {
  //   let res = 0;
  //   array.map(prod => res + prod.price);
  //   return res;
  // }

  function handleRemoveFromCart(prod) {
    dispatch(removeFromCart(prod));
  }

  function handleRemoveAll() {
    dispatch(removeAllFromCart());
  }

  const [countProducts, setCountProducts] = useState(1);

  function onChangeEntity(prod, entity) {
    let objTemp = {
      id: 0,
      name: "",
      dicription: "",
      cost: 0,
      image: "",
      quantity: 0,
      idInCart: 0,
      sum: 0,
    };
    objTemp.id = prod.id;
    objTemp.name = prod.name;
    objTemp.dicription = prod.dicription;
    objTemp.cost = prod.cost;
    objTemp.image = prod.image;
    objTemp.quantity = entity;
    objTemp.idInCart = prod.idInCart;
    objTemp.sum = prod.cost * entity;

    // objTemp.quantity = entity;
    dispatch(editQuantity(objTemp));
  }

  return (
    <main class="cart center">
      <div class="cart__items">
        {productsInCart.map((prod) => (
          <div class="cart__item">
            <img class="cart__item_image" src={prod.image} alt={prod.name} />

            <div class="cart__about-item">
              <svg
                onClick={() => handleRemoveFromCart(prod)}
                class="cart__item__cross"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                  fill="#575757"
                />
              </svg>
              <div class="cart__item-name">
                {prod.name} id={prod.idInCart} entity:{prod.quantity}
              </div>
              <div class="cart__item-clause">
                Price:{" "}
                <span class="cart__item-clause cost-red">$ {prod.cost}</span>
              </div>
              {/* <span class="cart__item-clause">Color: Red</span>
              <div class="cart__item-clause">Size: Xl</div> */}
              <div class="cart__item-clause with-form">
                <span>Quantity: </span>
                <form action="#">
                  <input
                    // value={1}
                    onChange={(e) => onChangeEntity(prod, e.target.value)}
                    class="form"
                    type="number"
                    required
                    min="1"
                  />
                </form>
              </div>
            </div>
          </div>
        ))}

        <div class="cart__buttons">
          <a onClick={handleRemoveAll} class="cart__button clear" href="#">
            CLEAR SHOPPING CART
          </a>
          <Link class="cart__button continue" to="/catalog">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
      <div class="cart__payment-and-adress">
        <form className="cart__payment-and-adress_form-container" action="#">
          <div class="cart__payment-and-adress_label-title">
            {" "}
            SHIPPING ADRESS{" "}
          </div>
          <input
            name="form"
            type="text"
            required
            class="cart__payment-and-adress__form"
            placeholder="Bangladesh"
          />
          <br />
          <input
            type="text"
            required
            class="cart__payment-and-adress__form"
            placeholder="State"
          />
          <br />
          <input
            type="text"
            required
            class="cart__payment-and-adress__form"
            placeholder="Postcode / Zip"
          />
          <br />
          <a class="cart__payment-and-adress__button" href="#">
            {" "}
            GET A QUOTE{" "}
          </a>
        </form>

        <div class="cart__payment-and-adress__checkout">
          <div class="cart__payment-and-adress__checkout__container-clause">
            <span class="cart__payment-and-adress__checkout__container-clause__clause">
              SUB TOTAL{" "}
              <span class="cart__payment-and-adress__checkout__container-clause__clause">
                $ {subTotal}
              </span>
            </span>
            <span class="cart__payment-and-adress__checkout__container-clause__clause grand">
              GRAND TOTAL{" "}
              <span class="cart__payment-and-adress__checkout__container-clause__clause grand-red">
                ${subTotal}
              </span>{" "}
            </span>
          </div>
          <a href="#" class="button">
            PROCEED TO CHECKOUT
          </a>
        </div>
      </div>
    </main>
  );
}

export default ProductForCart;
