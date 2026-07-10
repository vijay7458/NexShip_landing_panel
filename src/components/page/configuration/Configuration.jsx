import React, { useEffect } from 'react'
import { BASE_URL } from '../../../axios/config';

const Configuration = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `${BASE_URL}/core-api/shipease-admin/configuration-list/`;
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda officiis eos possimus, dolorum commodi aperiam dolorem vel ducimus voluptas itaque dolor laboriosam, deleniti, cumque ipsa quod! Quis culpa fuga distinctio?
        </div>
    )
}

export default Configuration
