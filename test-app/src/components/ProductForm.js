const ProductForm = ({newProduct, setNewProduct, onSubmitNewProduct}) => {

    const onNameChange = (e) => {
        setNewProduct({...newProduct, Name: e.target.value});
    }
  
    const onDescriptionChange = (e) => {
        setNewProduct({...newProduct,Description: e.target.value});
    }
  
    const onPriceChange = (e) => {
        setNewProduct({...newProduct,Price: e.target.value});
    }
  
    return (
        <form onSubmit={onSubmitNewProduct}>
            <label>
                Name: <input type="text"  value={newProduct.Name} onChange={onNameChange}/>
                
            </label>
            <label>
                Description: <input type="text" value={newProduct.Description} onChange={onDescriptionChange}/>
            </label>
            <label>
                Price: <input type="number" value={newProduct.Price} onChange={onPriceChange}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default ProductForm;