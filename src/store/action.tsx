export const ADD = 'ADD'
export const DELETE = 'DELETE'

export const addAction = (data) => {
  return {
    data,
    type: ADD
  }
}

export const delAction = (data) => {
  return {
    data,
    type: DELETE
  }
}