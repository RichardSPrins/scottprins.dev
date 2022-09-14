import create from "zustand";

export interface Service {
  id: string;
  name: string;
  slug: string;
  image: string | null;
  price: number;
  summary: string;
  description: string;
}

export interface CartItem extends Service {
  quantity: number;
}

type CartState = {
  showCart: boolean;
  toggleShowCart: () => void;
  cart: CartItem[];
  addToCart: (item: any) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  increaseItemQuantity: (item: any, quantity: number) => void;
  decreaseItemQuantity: (item: any) => void;
  getTotalItemCount: () => number;
  getTotalPrice: () => number;
};

export const cartStore = create<CartState>((set, get) => ({
  showCart: false,
  toggleShowCart: () => set((state) => ({ showCart: !state.showCart })),
  cart: [],
  getTotalItemCount: () => {
    const cart = get().cart;
    const cartCount = cart.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    return cartCount;
  },
  getTotalPrice: () => {
    const cart = get().cart;
    const cartTotal = cart.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    return cartTotal;
  },
  addToCart: (item: CartItem) => {
    const cart = get().cart;
    const increase = get().increaseItemQuantity;
    const itemInCart = cart.some((exItem) => exItem.id === item.id);
    const itemtoInc: any = cart.find((exItem) => {
      if (item.id === exItem.id) {
        return exItem;
      }
      return false;
    });
    if (itemInCart) {
      return increase(itemtoInc, itemtoInc?.quantity);
    }
    return set((state) => ({ cart: [...state.cart, item as any] }));
  },
  removeFromCart: (id: string) => {
    console.log(id);
    const cart = get().cart;
    const decrease = get().decreaseItemQuantity;
    const item: CartItem | undefined = cart.find((e) => e.id === id);
    console.log(item);
    if (item && item.quantity > 1) {
      return decrease(item);
    }
    return set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },
  clearCart: () => set((_state) => ({ cart: [] })),
  increaseItemQuantity: (item: any, quantity: number) => {
    quantity += 1;
    return set((state) => ({
      cart: state.cart.map((e) => {
        const addedItem = { ...item, quantity };
        return e.id === item.id ? addedItem : item;
      }),
    }));
  },
  decreaseItemQuantity: (item: any) => {
    return set((state) => ({
      cart: state.cart.map((e) =>
        e.id === item.id ? { ...item, quantity: item.quantity - 1 } : item
      ),
    }));
  },
}));
