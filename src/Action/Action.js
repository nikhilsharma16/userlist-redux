export function addUser(data) {
  return {
    type: "ADDUSER",
    data
  };
}

export function deleteUser(index) {
  return {
    type: "DELUSER",
    index
  };
}
