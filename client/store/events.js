import axios from 'axios';

/**
 * ACTION TYPES
 */

 const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
 const GET_EVENTS_FOR_MONTH = 'GET_EVENTS_FOR_MONTH';
 const CREATE_EVENT = 'CREATE_EVENT';
 const DELETE_EVENT = 'DELETE_EVENT';
 const EDIT_EVENT = 'EDIT_EVENT';
 const GET_EVENTS_ON_DAY = 'GET_EVENTS_ON_DAY';


 /**
  * INITIAL STATE
  */

  const events = []

  /**
   * ACTION CREATORS
   */

  const getAllEvents = allEvents => ({
    type: GET_ALL_EVENTS,
    allEvents
  })
  const getEventsForMonth = monthEvents => ({
    type: GET_EVENTS_FOR_MONTH,
    monthEvents
  })
  const createNewEvent = event => ({
    type: CREATE_EVENT,
    event
  })
  const deleteEvent = event => ({
    type: DELETE_EVENT,
    event
  })

  const getEventsOnOneDay = dayEvents => ({
    type: GET_EVENTS_ON_DAY,
    dayEvents
  })

  /**
   * THUNK CREATORS
   */

  /**
   * REDUCER
   */

export const getEventList = () =>
  dispatch => {
    axios.get('/api/events')
      .then(res => {
        console.log('my response is', res)
        dispatch(getAllEvents(res.data))
      })
  }

export const getEventsOnDay = (month, day, user) =>
  dispatch => {
    axios.get(`/api/events/${month}`)
    .then(res => {
      dispatch(getEventsOnOneDay(res.data))
    })
    .catch(error => console.log(error))
  }


export const createEvent = (event) =>
  dispatch => {
    axios.post('/api/events', event)
    .then(res => {
      dispatch(createNewEvent(res.data))
    })
    .catch(error => console.log(error))
  }


   const reducer = (state = events, action) => {
     switch (action.type) {
       case GET_ALL_EVENTS:
        return action.allEvents
       case GET_EVENTS_ON_DAY:
        return action.dayEvents
       case CREATE_EVENT:
        return [...state, action.event]
       default:
         return state
     }
   }

   export default reducer

