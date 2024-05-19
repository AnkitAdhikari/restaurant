import delight from "./images/dish_starter_delight.jpg";
import soup from "./images/dish_starter_soup.webp";
import viking from "./images/dish_starter_viking.webp";
import steak from "./images/dish_main_steak.webp"
import feast from "./images/dish_main_feast.webp"
import trick from "./images/dish_main_trick.webp"
import cake from "./images/dish_dessert_cake.webp";
import pudding from "./images/dish_dessert_pudding.webp";
import mousse from "./images/dish_dessert_mousse.webp";

export default function (container) {
    container.innerHTML = '';
    container.insertAdjacentHTML('beforeend', `      <div class="menu-heading-container">
    <div></div>
    <h1>Starters</h1>
    <div></div>
  </div>
  <div class="menu-container">
    <div class="menu">
      <img src="${viking}" alt="" />
      <div class="content">
        <p class="dish-name">Viking Platter</p>
        <p class="dish-ingredients">
          Smoked salmon, Pickled Herring, Dill, Caper, Rye Bread
        </p>
        <div class="menu-footer">
          <p class="dish-weight">Weight: 300g</p>
          <button type="button" class="dish-price">Price $12</button>
        </div>
      </div>
    </div>
    <div class="menu">
      <img src="${soup}" alt="" />
      <div class="content">
        <p class="dish-name">Asgardian Soup</p>
        <p class="dish-ingredients">
        Root Vegetables, Lamb, Barley, Herbs, Broth
        </p>
        <div class="menu-footer">
          <p class="dish-weight">Weight: 250g</p>
          <button type="button" class="dish-price">Price $8</button>
        </div>
      </div>
    </div>
    <div class="menu">
      <img src="${delight}" alt="" />
      <div class="content">
        <p class="dish-name">Odin's Delight</p>
        <p class="dish-ingredients">
          Cheese, Dried Fruits, Nuts, Honey, Herbs
        </p>
        <div class="menu-footer">
          <p class="dish-weight">Weight: 200g</p>
          <button type="button" class="dish-price">Price $10</button>
        </div>
      </div>
    </div>
  </div>
  <div class="menu-heading-container">
    <div></div>
    <h1>Main Dishes</h1>
    <div></div>
  </div>
  <div class="menu-container">
    <div class="menu">
      <img src="${steak}" alt="" />
      <div class="content">
        <p class="dish-name">Thor's Hammer Steak</p>
        <p class="dish-ingredients">
          Beef, Garlic, Rosemary, Butter, Salt
        </p>
        <div class="menu-footer">
          <p class="dish-weight">Weight: 500g</p>
          <button type="button" class="dish-price">Price $25</button>
        </div>
      </div>
    </div>
    <div class="menu">
      <img src="${feast}" alt="" />
      <div class="content">
        <p class="dish-name">Freyja's Feast</p>
        <p class="dish-ingredients">
          Chicken, Thyme, Lemon, Honey, Pepper
        </p>
        <div class="menu-footer">
          <p class="dish-weight">Weight: 450g</p>
          <button type="button" class="dish-price">Price $20</button>
        </div>
      </div>
    </div>
    <div class="menu">
      <img src="${trick}" alt="" />
      <div class="content">
        <p class="dish-name">Loki's Trick</p>
        <p class="dish-ingredients">
          Pork, Apple, Sage, Mustard, Onion
        </p>
        <div class="menu-footer">
          <p class="dish-weight">Weight: 400g</p>
          <button type="button" class="dish-price">Price $22</button>
        </div>
      </div>
    </div>
  </div>
  <div class="menu-heading-container">
    <div></div>
    <h1>Desserts</h1>
    <div></div>
  </div>
  <div class="menu-container">
    <div class="menu">
      <img src="${cake}" alt="" />
      <div class="content">
        <p class="dish-name">Valhalla Cake</p>
        <p class="dish-ingredients">
          Chocolate, Cream, Berries, Sugar, Flour
        </p>
        <div class="menu-footer">
          <p class="dish-weight">Weight: 150g</p>
          <button type="button" class="dish-price">Price $7</button>
        </div>
      </div>
    </div>
    <div class="menu">
      <img src="${pudding}" alt="" />
      <div class="content">
        <p class="dish-name">Norse Pudding</p>
        <p class="dish-ingredients">
          Milk, Eggs, Vanilla, Sugar, Nutmeg
        </p>
        <div class="menu-footer">
          <p class="dish-weight">Weight: 130g</p>
          <button type="button" class="dish-price">Price $6</button>
        </div>
      </div>
    </div>
    <div class="menu">
      <img src="${mousse}" alt="" />
      <div class="content">
        <p class="dish-name">Mjolnir Mousse</p>
        <p class="dish-ingredients">
          Chocolate, Cream, Sugar, Mint, Butter
        </p>
        <div class="menu-footer">
          <p class="dish-weight">Weight: 140g</p>
          <button type="button" class="dish-price">Price $8</button>
        </div>
      </div>
    </div>
  </div>
  `)
}