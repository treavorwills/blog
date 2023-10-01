// search click
const searchBtn = async (event) => {
    event.preventDefault();
  
  
    let searchTerm = document.getElementById('parameters');
  
    document.location.replace(`/search/${searchTerm.value}`);
  
  };
  
  document.getElementById('search-submit').addEventListener('click', searchBtn);
  