import React, { Component } from 'react';
import axios from 'axios';

class SavedRecipe extends Component {

  render() {
    console.log('INGREDIENT LINES', this.props.recipeData)
    const ingredients = this.props.recipeData.ingredients.map((ingredient, index) => {
      return <li>{ingredient}</li>
    }) || []
    return (
      <div className="recipeItem">
        <div className="recipeImage">
          <a href={this.props.recipeData.url}><img src={this.props.recipeData.img} /></a>
          <h5>click image for recipe</h5>
        </div>
        <h3>{this.props.recipeData.title}</h3>
        <ul>{ingredients}<li> <p><strong>Yields</strong>: {this.props.recipeData.yield}</p></li></ul>
      </div>
    )
  }
}

module.exports = SavedRecipe;