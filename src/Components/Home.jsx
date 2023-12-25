
import React, { useState, useEffect } from 'react';
import CardList from './CardListe';
import Header from './Header';

function Home({pays} ){

    const [continent, setContinent] = useState(''); 
    const [recherche, setRecherche] = useState('');
    const [myCountry, setMyCountry] = useState([]);
    const url = "https://restcountries.com/v3.1/all";
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(!darkMode);
  
    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => setMyCountry(data))
        .catch(error => console.log(error));
    }, []);
  
    const paysFiltres = myCountry.filter(country => 
      country.name.common.toLowerCase().includes(recherche.toLowerCase()) &&
      (continent ? country.region === continent : true)
    );
    return(
        <div className={darkMode ? "bg-slate-800 text-white" : "bg-white text-gray-800"}>
        <Header toggleDarkMode={toggleDarkMode} />
        <div className="container mx-auto p-4">
          <div className="flex gap-4 mb-4">
            <input 
              className="flex-1 p-2 border rounded text-black"
              type='text' 
              placeholder='Rechercher un pays' 
              value={recherche} 
              onChange={(e) => setRecherche(e.target.value)} 
            />
            <select 
              className="p-2 border rounded text-black"
              value={continent} 
              onChange={(e) => setContinent(e.target.value)}
            >
              <option className='text-black' value="">Choisir un continent</option>
              <option className='text-black' value="Africa">Afrique</option>
              <option className='text-black' value="Americas">Amériques</option>
              <option className='text-black' value="Asia">Asie</option>
              <option className='text-black' value="Europe">Europe</option>
              <option className='text-black' value="Oceania">Océanie</option>
            </select>
          </div>
          <CardList pays={paysFiltres} />
        </div>
      </div>

 );
}
    export default Home;