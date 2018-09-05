export const INCREASE_COUNTER = 'INCREASE_COUNTER'
export const DECREASE_COUNTER = 'DECREASE_COUNTER'

export function increaseCounter(number) {
    return { type: INCREASE_COUNTER, number };
}

export function decreaseCounter(number) {
    return { type: DECREASE_COUNTER, number };
}