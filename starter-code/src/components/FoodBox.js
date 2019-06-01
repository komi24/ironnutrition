import React, { Components } from 'react';
import { useState } from 'react';


function FoodBox(props) {

  let [quantity, setQuantity] = useState(0);
  // let quantity = 0;

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.food.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.food.name}</strong> <br />
              <small>{props.food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number" 
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
              />
            </div>
            <div className="control">
              <button 
                className="button is-info"
                onClick={() => props.addToBucketFromListBox({...props.food, quantity})}
                >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;