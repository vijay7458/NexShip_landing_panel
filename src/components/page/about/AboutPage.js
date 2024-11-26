import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../axios/config';
import axios from 'axios';

const AboutPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const apiUrl = `${BASE_URL}/core-api/shipease-admin/about-us-list/`;
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
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorum ipsa delectus. Quibusdam iusto consequuntur fugiat unde sequi est, inventore a? Laboriosam natus repudiandae vel omnis ipsa alias ex accusamus.
    </div>
  )
}

export default AboutPage
