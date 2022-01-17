import logo from './logo.svg';
import './App.css';
import Product from './components/Product'
import ProductForm from './components/ProductForm';
import SelectedProduct from './components/SelectedProduct'
import { useState } from 'react';
function App() {
  const [isFormOpen, setformOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [Products, setProducts] = useState(
    [
      {
        Id: 0,
        Name: "Package",
        Description: "a Wooden box",
        Price: 500,
        isSelected: false
      },
      {
        Id: 1,
        Name: "Package2",
        Description: "a Wood2en box",
        Price: 5100,
        isSelected: false
      },
      {
        Id: 2,
        Name: "Package3",
        Description: "a 333Wooden box",
        Price: 111500,
        isSelected: false
      },
    ]
  );

      
  const [updatedProduct, setUpdatedProduct] = useState(
    {

        Id: '',
        Name: '',
        Description: '',
        Price: '',
        isSelected: true,
    }
  );
  const [newProduct, setNewProduct] = useState(
    {
        Id: '',
        Name: '',
        Description: '',
        Price: '',
        isSelected: false,
    }
  );
  // const onNameChange = (e) => {
  //     setUpdatedProduct({...updatedProduct, Name: e.target.value}, console.log(updatedProduct));
  // }

  // const onDescriptionChange = (e) => {
  //     setUpdatedProduct({...updatedProduct,Description: e.target.value});
  // }

  // const onPriceChange = (e) => {
  //     setUpdatedProduct({...updatedProduct,Price: e.target.value});
  // }


  const onAddNewProduct = () => {
    setformOpen(true);
  }

  const onSelectedProduct = (e, selectedProduct) => {
      const newProducts = [];
      console.log(e);
      console.log(selectedProduct);
      if (e.target.localName === "button")
      {
        Products.map(product => {
          if (product.Id !== selectedProduct.Id) 
          {
            newProducts.push(product);
          }
        });
        setProducts(newProducts);
      }
      else
      {
        Products.map(product => {
          if (product.Id === selectedProduct.Id)
          {
            newProducts.push({
              ...product,
              isSelected: true,
            });
          }
          else
          {
            newProducts.push({
              ...product,
              isSelected: false,
            })
          }
        });
        
        setProducts(newProducts);
        setSelectedProduct(selectedProduct);
      }
  }

  const onUpdateProduct = (e) => {
    e.preventDefault();
    console.log(updatedProduct);
    if (updatedProduct)
    {
      updateProductDetails();
    }
  };

  const updateProductDetails = () => {
    const newProducts = [];
    Products.map(product => {
      if (product.Id === selectedProduct.Id)
      {
        newProducts.push({...updatedProduct, Id: product.Id});
      }
      else
      {
        newProducts.push(product);
      }
    });
    setProducts(newProducts,console.log(newProducts));
  }

  const onSubmitNewProduct = (e) => {
    e.preventDefault();
    console.log(newProduct);
    setProducts([...Products, 
      {
        Id: Products ? Products.length++ : 1,
        Name: newProduct.Name,
        Description: newProduct.Description,
        Price: newProduct.Price,
        isSelected: false,
      }
    ], console.log(Products));
  }

  const onDeleteProduct = (Name) => {
    console.log(Name);
    const newProducts = [];
    Products.map(product => {
      if (product.Id !== Name) 
      {
        newProducts.push(product);
      }
    })
    setProducts(
      {
        Id:'sex',
        Name: Name,
        Description: Name,
        Price: Name,
        isSelected: false,
      }
    );
  }
  return (
    <div className="App">
      {isFormOpen ? 
      <ProductForm newProduct={newProduct}
                   setNewProduct={setNewProduct}
                   onSubmitNewProduct={onSubmitNewProduct}
      /> 
      : ''}
      <h1>My Store</h1>
      <button onClick={onAddNewProduct}>Add</button>
      <div className='ProductContainer'>
        <div className='ProductList'>
          {Products.map(product => {
            return <Product onSelectedProduct={onSelectedProduct} 
                            key={product.Name + product.Id + product.isSelected} 
                            data={product} 
                            onDeleteProduct={onDeleteProduct}
                            />;
          })}
        </div>
        <div className="selectedProduct">
        {selectedProduct ? 
          <SelectedProduct key={selectedProduct.Name} 
                                              onUpdateProduct={onUpdateProduct} 
                                              data={selectedProduct} 
                                              updatedProduct={updatedProduct}
                                              setUpdatedProduct={setUpdatedProduct}
                              />
                     : ''}

        </div>
      </div>

    </div>
  );
}

export default App;
