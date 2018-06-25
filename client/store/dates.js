import axios from 'axios'
import history from '../history'
import 'datejs'

/**
 * ACTION TYPES
 */

const GET_MONTH = 'GET_MONTH'
const NEXT_MONTH = 'NEXT_MONTH'
const LAST_MONTH = 'LAST_MONTH'
const GET_WEEK = 'GET_WEEK'
const SET_WEEK = 'SET_WEEK'
const GET_DAY = 'GET_DAY'
const SET_DAY = 'SET_DAY'
const GET_TODAY = 'GET_TODAY'

/**
 * INITIAL STATE
 */

const monthsArr = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const defaultDate = {
  month: Date.today().getMonth(),
  year: Date.today().getYear(),
  monthName: monthsArr[Date.today().getMonth()],
  monthLength: Date.getDaysInMonth(
    Date.today().getYear(),
    Date.today().getMonth()
  )
}

/**
 * ACTION CREATORS
 */

export const getMonth = month => ({
  type: GET_MONTH,
  month
})

export const nextMonth = () => ({
  type: NEXT_MONTH
})

export const lastMonth = () => ({
  type: LAST_MONTH
})

/**
 * REDUCER
 */

const reducer = (state = defaultDate, action) => {
  switch (action.type) {
    case NEXT_MONTH:
      return {
        month: state.month + 1,
        monthName: monthsArr[state.month + 1],
        monthLength: Date.getDaysInMonth(state.year, state.month + 1)
      }
    case LAST_MONTH:
      return {
        month: state.month - 1,
        monthName: monthsArr[state.month - 1],
        monthLength: Date.getDaysInMonth(state.year, state.month - 1)
      }
    default:
      return state
  }
}

export default reducer
