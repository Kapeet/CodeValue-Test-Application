import { useState, useEffect } from "react";
const SelectedProduct = ({onUpdateProduct, data, updatedProduct, setUpdatedProduct}) => {
    
    // const [updatedProduct, setUpdatedProduct] = useState(
    //     {

    //         Id: data.Id,
    //         Name: '',
    //         Description: '',
    //         Price: '',
    //         isSelected: true,
    //     }
    //   );
    const onNameChange = (e) => {
        setUpdatedProduct({...updatedProduct, Name: e.target.value});
    }

    const onDescriptionChange = (e) => {
        setUpdatedProduct({...updatedProduct,Description: e.target.value});
    }

    const onPriceChange = (e) => {
        setUpdatedProduct({...updatedProduct,Price: e.target.value});
    }
    
    // useEffect(() => {
        
    //     console.log(updatedProduct);
    // }, [updatedProduct])
    return (
            <form onSubmit={onUpdateProduct} >
                <label>Name:  </label> <input type="text" placeholder={data.Name} value={updatedProduct.Name} onChange={onNameChange} /> 
                <label>Description: </label><input placeholder={data.Description} value={updatedProduct.Description} onChange={onDescriptionChange}  /> 
                <label>Price: </label>  <input type="number" placeholder={data.Price} value={updatedProduct.Price} onChange={onPriceChange}  />
            <input type="submit" value="Submit" />
            </form>

    )
}


export default SelectedProduct;