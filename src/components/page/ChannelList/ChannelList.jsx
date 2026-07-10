import React from 'react'
import { BASE_URL } from "../../../../axios/config";

const ChannelList = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const apiUrl = `${BASE_URL}/core-api/shipease-admin/testimonial-list/`;
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus neque facilis nisi est beatae quam distinctio optio cupiditate! Excepturi eum incidunt cum facilis beatae totam eaque, explicabo porro odio quos!
    </div>
  )
}

export default ChannelList
