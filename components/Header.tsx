import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

interface RootState {
  reducer: any[];
}

const Header: React.FC = () => {
  const cartData = useSelector((state: RootState) => state.reducer);
  const [cartItems, setCartItems] = useState<number>(0);

  useEffect(() => {
    setCartItems(cartData.length);
    console.log(cartData.length);
  }, [cartData]);

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'right',
          padding: 10,
          backgroundColor: 'pink',
          color: 'black',
        }}
      >
        {cartItems}
      </Text>
    </View>
  );
};

export default Header;