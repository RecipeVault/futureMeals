import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './recipe.js';
import Day from './day.js'; //whatever child components we need
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.username,
      date: new Date(),
    }

  }

  handleCalendarSelect(day) {
    day = day.toISOString().slice(0, 10);
    axios.get('/getRecipes', {
      params: { day: day, username: this.props.username }
    }).then((response) => {
      this.setState(Object.assign({}, this.state, { recipeComponents: response.data, date: day }))
    }).catch(function (error) {
      console.log("TESTING IF ERROR", error);
    })
  }

  render() {
    console.log('PROFILE recipe comp', this.state.recipeComponents)
    var now = new Date();
    var lastWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
    return (
      <div>
        <div id='prof'>
          <div id="calendar">
            <InfiniteCalendar
              onSelect={this.handleCalendarSelect.bind(this)}
              rowHeight={50}
              width={400}
              height={400}
            />
          </div>
          <div id="recipes">
            {
              this.state.recipeComponents &&
              <Day recipeList={this.state.recipeComponents} />
            }
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Profile;