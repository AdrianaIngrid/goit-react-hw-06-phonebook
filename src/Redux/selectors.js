export const getContacts = (state) => {
    console.log('State in getContacts:', state.contacts.contacts);
    return state.contacts.contacts || []
}; // returneaza lista de contacte


export const getFilter = (state) => state.filter; // returneaza valoarea filtrului din starea aplicatiei
 // Afișează valoarea filtrului
export const getFilteredContacts = (state) => {
  const lowerCaseFilter = getFilter(state)?.toLowerCase() || ''; // asignăm direct valoarea filtrului cu litere mici
console.log('Filter:', lowerCaseFilter);
  return getContacts(state).filter(
    contact => contact.name?.toLowerCase().includes(lowerCaseFilter) || []
    );
    
};

