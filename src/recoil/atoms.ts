import { atom, selector, selectorFamily } from "recoil/dist";

const users: User[] = [
  { id: 1, lastName: "M", firstName: "Greg" },
  { id: 2, lastName: "M", firstName: "Vincent" },
  { id: 3, lastName: "M", firstName: "Myriam" },
  { id: 4, lastName: "M", firstName: "Alicia" },
  { id: 5, lastName: "M", firstName: "Sonia" },
  { id: 6, lastName: "M", firstName: "Georges" }
]

const getUsersById = (userId: number) => {
  const user = users.find(user => user.id === userId);
  return user === undefined ? null : user;
};
export const userQueryById = (userId: number): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.id === userId);
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
    }, 3000);
  })
}

export const counterStore = atom<number>({
  key: "counter",
  default: 0
});

type User = {
  id: number,
  lastName: string,
  firstName: string
}

export const userStore = atom<User>({
  key: "user",
  default: {
    id: 0,
    lastName: "",
    firstName: ""
  }
});

export const lastNameFirstNameCountStore = selector({
  key: 'lastNameFirstNameCount',
  get: ({ get }) => {
    const user = get(userStore);
    return user.firstName.length + user.lastName.length;
  }
})

export const userQueryAsync = selectorFamily({
  key: "userQueryAsync",
  get: (userId: number) => async () => {
    const user = await userQueryById(userId);
    return user;
  }
})

export const userQuerySync = selectorFamily({
  key: "userQueryAsync",
  get: (userId: number) => () => {
    return  getUsersById(userId);
  }
})