import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./ActionTypes";

export const increment_counter = (data) => ({
 type:INCREMENT_COUNTER,
 payload: data
})

export const decrement_counter = (data) => ({
    type: DECREMENT_COUNTER,
    payload: data
})