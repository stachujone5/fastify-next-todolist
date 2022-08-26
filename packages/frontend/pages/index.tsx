import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then((data: { readonly message: string }) => setData(data.message))
      .catch(err => console.log(err));
  }, []);

  return <div style={{ textAlign: 'center' }}>{data || 'No data'}</div>;
};

export default Home;
