import { useState } from "react"
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    // const [categories, setCategories] = useState(['One Punch', 'One Piece']);
    const [categories, setCategories] = useState(['One Piece']);

    // const addCategory = () => {
        
    //     // const category = document.getElementById('inputButton').value;
    //     setCategories(categories => [...categories, category]);
    // } 

    const onAddCategory = (newCategory) => {
        // if(categories.findIndex(newCategory) > -1) console.log('test')
        if(categories.indexOf(newCategory) > -1) return;

        setCategories(categories => [...categories, newCategory]);
        console.log(newCategory);
    } 

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* <AddCategory setCategories={ setCategories }/> */}
            <AddCategory onNewCategory={ onAddCategory }/>

            {/* Input */}
            {/* <button onClick={ addCategory }>Add Category</button> */}

            { categories.map((category) => (
                <GifGrid category={ category } key={ category }/>
            )) }

        
        </>
    )
}


