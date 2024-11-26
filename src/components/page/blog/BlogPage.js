import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../axios/config';
import axios from 'axios';

const BlogPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `${BASE_URL}/core-api/shipease-admin/blogs-list/`;
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

    useEffect(() => {
        const fetchData = async () => {
            try {
              const apiUrl = `${BASE_URL}/core-api/shipease-admin/testimonial-list/`;
              const response = await axios.get(apiUrl); 
            //   setData(response.data); 
            //   setLoading(false); 
            } catch (err) {
            //   setError(err.message); 
            //   setLoading(false);
            }
          };
      
          fetchData(); 
    }, []); 
    return (
        <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, asperiores iste nam, aliquam rerum dolore nisi et blanditiis voluptatum praesentium, earum possimus magni veritatis tempore quia quaerat mollitia impedit itaque?
        </div>
    )
}

export default BlogPage
