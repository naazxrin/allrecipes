import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
const View = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("allRecipes")) {
      const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"));
      setRecipe(allRecipes?.find(item => item.id == id));
    }
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <Header />
      <Container style={{ paddingTop: "50px" }}>
      <div style={{ paddingTop: '70px' }} className='flex content-center items-center mx-5'>
        <div className='grid grid-cols-2 items-center'>
          <img width={'100%'} height={'250px'} src={recipe?.image} alt="" />
          <div className='ml-10'>
            <h3>PID : {recipe?.id}</h3>
            <h1 className='text-5xl font-bold'>{recipe?.name}</h1>
            <h4 className='font-bold text-red-600 text-2xl'> Rating : <i class="fa-solid fa-star text-yellow-600"></i>{recipe?.rating}</h4>
            <p>
              <span className='font-bold'>instructions</span>: {recipe?.instructions}
            </p>
            <h3 className='font-bold my-5 items-center'>Price: <span className='text-green-600'>${recipe?.reviewCount}</span> </h3>
          </div>
        </div>
      </div>
      </Container>
      <Footer/>
    </>
  );
}

export default View;