import React from 'react';
import recipes from '../recipes';

const Menu = () => {
    const handleOrder =(id) => {
        console.log(id,"id is Clicked")
        Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3086d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Oreder it!!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'oreder!',
                'Your file has been oreder!.',
                'Successful'

                )
            }
        })



    }
    return (
        <div className= 'menu-container'>
            <div className= 'menu-header'>
                <h2>This weeks specials!</h2>
                <button>Order Menu</button>
            </div>
        
            <div className='cards'>
                {
                    recipes.map(recipe => <div key={recipe} className='menu-items'> 
                       <img src={recipe.image} alt=''></img>
                       <div className= 'menu-content'>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderBtn' onClick={() => handleOrder (recipe.id)} >Order Now</button>
                        </div>





                    </div>)
                }
            </div>
        </div>
    );
};
export default Menu;