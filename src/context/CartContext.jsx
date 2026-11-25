import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // items: { [id]: { ...product, quantity } }
  const [items, setItems] = useState({});

  const addItem = useCallback((product, quantity = 1) => {
    setItems((prev) => {
      const current = prev[product.id];
      return {
        ...prev,
        [product.id]: { ...product, quantity: (current?.quantity ?? 0) + quantity },
      };
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const value = useMemo(() => {
    const list = Object.values(items);
    return {
      items: list,
      count: list.reduce((sum, item) => sum + item.quantity, 0),
      addItem,
      removeItem,
    };
  }, [items, addItem, removeItem]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
