
import { Card, CardContent } from "@mui/material";

const Product = ({onSelectedProduct, data, onDeleteProduct}) => {

    let selectedStyle = data.isSelected ? {backgroundColor: '#abcabc'} : {backgroundColor: '#fafafa'};
    return (
        <Card className="ProductItem" onClick={(e) => onSelectedProduct(e, data)} id={data.Id} style={selectedStyle}>
            <CardContent>
            <h1>{data.Name}</h1>
            <p>{data.Description}</p>
            {/* <p>${data.Price}</p>
            <p>ID: {data.Id}</p> */}

            <button onClick={() => onDeleteProduct(data.Id)}>Delete</button>
            </CardContent>
        </Card>
    )
}

export default Product;