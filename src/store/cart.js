import { defineStore } from 'pinia';
import { ref,computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);
  
  const addToCart = (product) => {
    const existingProduct = cart.value.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity > 0) {
      cart.value[index].quantity = newQuantity;
    } else {
      removeFromCart(index);
    }
  };

  const removeFromCart = (index) => {
    cart.value.splice(index, 1);
  };
  const totalPrice = computed(() => {
    return cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0);
  });

  return { cart, addToCart, updateQuantity, removeFromCart, totalPrice };
});