import React from 'react';
const Card = ({ pay }) => {
    return (


        <div className="w-full max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={pay.flags.png} alt={`Drapeau de ${pay.name.common}`} />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h2 className="text-3xl font-semibold tracking-tight text-blue-500">{pay.name.common}</h2>
                </a>
              
                 
                        <h4 className="text-md font-semibold tracking-tight text-yellow-500 dark:text-white">Population: {pay.population}</h4>

                        <h4 className="text-md font-semibold tracking-tight text-yellow-500 dark:text-white">Capital: {pay.capital ? pay.capital[0] : 'N/A'}</h4>
                        <h4 className="text-md font-semibold tracking-tight text-yellow-500 dark:text-white">Region: {pay.region}</h4>

                
               
            </div>
        </div>

    )
}
export default Card;