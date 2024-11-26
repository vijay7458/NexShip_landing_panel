import React from 'react'
import { BASE_URL } from '../../../axios/config';

const TestimonialPage = () => {
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
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident illum molestiae quibusdam ipsa eos placeat perferendis alias magnam, qui accusamus, ad molestias dicta adipisci fugit. Quas beatae molestiae mollitia?
    </div>
  )
}

export default TestimonialPage
