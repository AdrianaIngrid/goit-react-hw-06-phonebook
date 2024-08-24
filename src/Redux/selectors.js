export const getContacts = (state) => {
    console.log('State in getContacts:', state.contacts.contacts);
    return state.contacts.contacts || []
}; // returneaza lista de contacte Am pus de doua ori contacts deoarece accesez prima data obiectul si apoi arrayul contacts


export const getFilter = (state) => state.filter; // returneaza valoarea filtrului din starea aplicatiei


export const getFilteredContacts = state => {
  const filter = getFilter(state)?.toLowerCase() || '';

  const lowerCaseFilter = filter ? filter.toLowerCase() : '';

  return getContacts(state).filter(
    contact => contact.name?.toLowerCase().includes(lowerCaseFilter) || ''
  );
};