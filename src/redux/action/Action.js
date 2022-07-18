export const incrementAction = (type,data) => {
  console.log("INCREMENT ACTION");
  return {
    type : type,
    payload : data
  }
}

export const decrementAction = (data) => {
  console.log("DECREMENT ACTION");
  return {
    type : "DECREMENT",
    payload : data
  }
}

export const statusUpAction = () => {
  console.log("STATUS UP ACTION");
  return {
    type : "UP"
  }
}
export const statusDownAction = () => {
  console.log("STATUS DOWN ACTION");
  return {
    type : "DOWN"
  }
}