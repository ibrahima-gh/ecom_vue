import { defineStore } from "pinia";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
  }),
  actions: {
    addToCart(product: CartItem) {
      const item = this.items.find((p) => p.id === product.id);
      if (item) item.quantity++;
      else this.items.push({ ...product, quantity: 1 });
    },
    removeFromCart(id: number) {
      this.items = this.items.filter((item) => item.id !== id);
    },
    updateQuantity(id: number, quantity: number) {
      const item = this.items.find((p) => p.id === id);
      if (item) item.quantity = quantity;
    },
  },
});