export const getContacts = state => state.contacts; // returneaza lista de contacte

export const getFilter = state => state.filter; // returneaza valoarea filtrului din starea aplicatiei
export const getFilteredContacts = state => {
  const lowerCaseFilter = getFilter(state)?.toLowerCase() || ''; // asignăm direct valoarea filtrului cu litere mici

  return getContacts(state).filter(
    contact => contact.name?.toLowerCase().includes(lowerCaseFilter) || ''
  );
};