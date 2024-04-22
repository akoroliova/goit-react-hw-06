const INITIAL_STATE = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  filters: {
    name: "",
  },
};

export default function contactListReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "contactList/setFilter": {
      return { ...state, filters: { name: action.payload } };
    }
    case "contactList/deleteContact": {
      return { ...state, allContactsData: action.payload };
    }
    default:
      return state;
  }
}

export const setFilter = (filterName) => {
  return {
    type: "contactList/setFilter",
    payload: filterName,
  };
};
