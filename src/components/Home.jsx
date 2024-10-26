import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { fetchAllRecipes } from '../Slices/recipieSlice'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './Footer'

const Home = () => {
    const dispatch = useDispatch()
    const {allRecipes,loading,error} = useSelector(state=>state.recipieReducer)
    console.log(allRecipes,loading,error)
    const [ Currentpage,setCurrentPage]= useState(1)
    const productPerPage = 6
    const totalPage = Math.ceil(allRecipes?.length/productPerPage)
    const currentPageLastProductIndex = Currentpage * productPerPage
    const CurrentpageFirstProductIndex = currentPageLastProductIndex-productPerPage
    const visiblerecipies = allRecipes?.slice(CurrentpageFirstProductIndex,currentPageLastProductIndex)
    useEffect(()=>{
        dispatch(fetchAllRecipes())
      },[])
    const navigateToNextPage = ()=>{
        if(Currentpage!=totalPage){
          setCurrentPage(Currentpage+1)
        }
      }
    
      const navigateToPrevPage = ()=>{
        if(Currentpage!=totalPage){
          setCurrentPage(Currentpage-1)
        }
      }
    return (
      <>
      
      <Header insideHome={true} />
      <div style={{ paddingTop: '200px' }} className='container px-4 mx-auto'>
      <h1  className='text-5xl font-bold text-yelllow-600 m-3'>All Recipes</h1>

        {
          loading ?
          <div className='flex justify-center items-center my-5 text-lg'>
            <img width={'70px'} height={'70px'} src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" alt="loading" />Loading...
          </div>
          :
          <>
          <div className='grid grid-cols-4 gap-4'>
            {
              allRecipes?.length>0 ?
              visiblerecipies?.map(recipes=>(
                <div key={recipes?.id}  className='rounded border p-2 shadow'>
              <img width={'100%'} height={'200px'} src={recipes?.image} alt="" />
              <div className='text-center'>
                <h3 className='text-xl font-bold'>{recipes?.name}</h3>
                <Link className='bg-blue-500 rounded p-1 mt-3 text-white inline-block' to={`${recipes?.id}/view`}>View More..</Link>
              </div>
            </div>
              ))
              :
              <div className='flex justify-center items-center text-red-600 my-5 text-lg'>
               <img width={'100px'} height={'70px'} src="https://www.mahalaxmifoods.com/include/no-product.png" alt="loading" /> Product Not Found!!!
              </div>
            }
          </div>
          <div className="text-center text-2xl font-bold mt-20 ">
            <span onClick={navigateToPrevPage} className='cursor-pointer'> <i className='fa-solid fa-backward me-5'></i></span>
            <span> {Currentpage} of {totalPage}  </span>
            <span onClick={navigateToNextPage} className='cursor-pointer'> <i className='fa-solid fa-forward me-5'></i></span>

          </div>
        </>
        }
      </div>
<Footer/>
      </>
    );
  }
export default Home