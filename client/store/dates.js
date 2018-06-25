import axios from 'axios'
import history from '../history'
import 'datejs'

/**
 * ACTION TYPES
 */

const GET_MONTH = 'GET_MONTH'
const SET_MONTH = 'SET_MONTH'
const GET_WEEK = 'GET_WEEK'
const SET_WEEK = 'SET_WEEK'
const GET_DAY = 'GET_DAY'
const SET_DAY = 'SET_DAY'
const GET_TODAY = 'GET_TODAY'

/**
 * INITIAL STATE
 */

const defaultDate = {
  month: Date.today().getMonth(),
  year: Date.today().getYear(),
  monthName: '',
  monthLength: 0
}

const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

/**
 * ACTION CREATORS
 */

const getMonth = month => ({
  type: GET_MONTH,
  month
})

/**
 * REDUCER
 */

 const reducer = (state = defaultState, action) => {
   switch (action.type) {
     case GET_MONTH:
      return {month: action.month, monthName: }
     default:
       return state
   }
 }

 export default reducer


