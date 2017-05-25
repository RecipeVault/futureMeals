import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './recipe.js';
import SavedRecipe from './savedRecipe.js'
//whatever child components we need

class Day extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedRecipes: this.props.recipeList
      // label: '',
      // image: '',
      // url: '',
      // yield: 0,
      // healthLabels: [],
      // ingredientLines: []
    }
  }

  componentDidMount() {

  }

  render() {
    console.log('DAY recipes from props:',this.props.recipeList)
    const recipes = this.props.recipeList.map((ele, index) => {
      return <SavedRecipe recipeData={ele} key={index} />
    }) || [];
    return (
      <div className='recipe1'>
          {this.props.recipeList && recipes}
      </div>
    )
  }
}

module.exports = Day;