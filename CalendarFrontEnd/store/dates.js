import axios from 'axios'
import history from '../history'
import 'datejs'
import moment from 'moment'

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
  date: moment(),
  month: moment().month(),
  year: moment().year(),
  monthName: monthsArr[moment().month()],
  monthLength: Date.getDaysInMonth(moment().year(), moment().month()),
  firstDay: moment()
    .date(1)
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
        date: state.date.add(1, 'month'),
        month: state.date.month(),
        monthName: monthsArr[state.date.month()],
        monthLength: Date.getDaysInMonth(state.date.year(), state.date.month()),
        firstDay: state.firstDay.add(1, 'month')
      }
    case LAST_MONTH:
      return {
        month: state.date.subtract(1, 'month'),
        monthName: monthsArr[state.date.month()],
        monthLength: Date.getDaysInMonth(state.date.year(), state.date.month()),
        firstDay: state.firstDay.subtract(1, 'month')
      }
    default:
      return state
  }
}

export default reducer
