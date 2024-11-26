import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../../../axios/config';

const Slider = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const apiUrl = `${BASE_URL}/core-api/shipease-admin/slider-list/`;
              const response = await axios.get(apiUrl); 
              setData(response.data); 
              setLoading(false); 
            } catch (err) {
              setError(err.message); 
              setLoading(false);
            }
          };
      
          fetchData(); 
    }, []); 
    return (
        <div>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non explicabo alias hic facere recusandae incidunt molestiae sunt perspiciatis in, cupiditate id quos, necessitatibus earum corrupti doloremque repellendus voluptates, modi qui.        </div>
    )
}

export default Slider
