import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { addToCart } from './redux/actions/Action';
import { useDispatch } from 'react-redux';

interface ProductProps {
  productId: number;
  item: {
    name: string;
    color: string;
    price: number;
    image: string;
  };
}

const ProductComponent: React.FC<ProductProps> = ({ productId, item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item: ProductProps['item']) => {
    dispatch(addToCart(item));
  };

  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderWidth: 1,
        paddingBottom: 10,
      }}
      key={productId}
    >
      <Text style={{ fontSize: 24 }}>{item.name}</Text>
      <Text style={{ fontSize: 24 }}>{item.price}</Text>
      <Text style={{ fontSize: 24 }}>{item.color}</Text>
      <Image style={{ height: 200, width: 200 }} source={{ uri: item.image }} />
      <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
    </View>
  );
};

export default ProductComponent;
