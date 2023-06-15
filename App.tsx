import React from 'react';
import { ScrollView, Text, View, Image, Button } from 'react-native';
import Header from './components/Header';
import Product from './components/Product';

interface ProductItem {
  id: string;
  name: string;
  color: string;
  price: number;
  image: string;
   
}

function App() {
  const products: ProductItem[] = [
    {
      id: '1',
      name: 'Nothing Phone 2',
      color: 'white',
      price: 30000,
      image: 'https://images.pexels.com/photos/16144577/pexels-photo-16144577/free-photo-of-a-smartphone-on-the-background-of-a-tropical-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: '2',
      name: 'samsung fold',
      color: 'white',
      price: 100000,
      image: 'https://images.pexels.com/photos/16144577/pexels-photo-16144577/free-photo-of-a-smartphone-on-the-background-of-a-tropical-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: '3',
      name: 'motorola fold',
      color: 'white',
      price: 150000,
      image: 'https://images.pexels.com/photos/16144577/pexels-photo-16144577/free-photo-of-a-smartphone-on-the-background-of-a-tropical-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
      {products.map((item: ProductItem, index: number) => (
  <Product key={item.id} productId={index} item={item} />
))}

      </ScrollView>
      <Text>UI for add to cart with Redux..</Text>
    </View>
  );
}

export default App;
