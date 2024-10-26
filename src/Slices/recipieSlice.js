import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const  fetchAllRecipes    = createAsyncThunk('recipes/fetchAllRecipes',async()=>{
 const result = await axios.get("https://dummyjson.com/recipes")
//  session Storage
sessionStorage.setItem("allRecipes",JSON.stringify(result.data.recipes))
//  console.log(result);
 return result.data.recipes
})

const recipieSlice = createSlice({
    name:'recipes',
    initialState:{
        allRecipes:[],
        dummyAllrecipes:[],
        loading:false,
        error:""
    },
    reducers:{
// synchronous actions
searchRecipe:(state,searchKeyFromHeader)=>{
    state.allRecipes = state.dummyAllrecipes.filter(item=>item.name.toLowerCase().includes
    (searchKeyFromHeader.payload))
}
    },
extraReducers:(builder)=>{
    builder.addCase(fetchAllRecipes.fulfilled,(state,apiResult)=>{
        state.allRecipes=apiResult.payload
        state.dummyAllrecipes=apiResult.payload
        state.loading=false
        state.error=""
    })
    builder.addCase(fetchAllRecipes.pending,(state,apiResult)=>{
        state.allRecipes=[]
        state.dummyAllrecipes=[]
        state.loading=true
        state.error=""
    })
    builder.addCase(fetchAllRecipes.rejected,(state,apiResult)=>{
        state.allRecipes=[]
        state.dummyAllrecipes=[]
        state.loading=false
        state.error="API Call Failed"
    })
}
    })
export const {searchRecipe}=recipieSlice.actions
export default recipieSlice.reducer