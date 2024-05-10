<template>
  <main class="main-cart">
    <section>
      <div class="container">
        <div class="table-wrap">
          <div v-if="isCartEmpty">Корзина пуста</div>
          <table v-else class="table-cart">
            <thead>
              <tr>
                <th scope="col">Список товаров</th>
                <th scope="col">Цена</th>
                <th scope="col">Количество</th>
                <th scope="col">Итого</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <cart-row
                  :model-value="product"
                  @update:model-value="updateCartRow"
                  @remove="removeProduct"
                ></cart-row>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="do-order">
          <h3>Итоговая сумма: {{ totalAmount }} р.</h3>
          <div class="total">
            <button @click="goToOrderPage">Оформить заказ</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import CartRow from './components/CartRow.vue';
import storageService from '@/services/storage';
import userService from '@/services/user';

const goToOrderPage = () => {
  window.location.href = 'http://127.0.0.1:8000/orders/order-create';
};

const { getUser } = userService();
const userId = ref(0);

onMounted(async () => {
  const userData = await getUser();
  userId.value = userData;

  if (hasLs(`cart`)) {
    const allUsersCarts = getLs('cart');

    if (!!allUsersCarts[userId.value]) {
      products.value = allUsersCarts[userId.value];
    }
  }
});

const products = ref([]);

const { get: getLs, set: setLs, has: hasLs } = storageService();

const currentUserCart = computed(() => {
  return {
    [userId.value]: products.value,
  };
});

const isCartEmpty = computed(() => {
  return products.value.length === 0;
});

const updateCartRow = (cartRow) => {
  products.value = products.value.map((row) =>
    row.id === cartRow.id ? cartRow : row
  );

  setLs(`cart`, currentUserCart.value);
};

const totalAmount = computed(() => {
  return products.value.reduce((sum, a) => sum + a.amount, 0);
});

const removeProduct = (productId) => {
  products.value = products.value.filter((product) => product.id !== productId);
  setLs('cart', currentUserCart.value);
};
</script>

<style></style>
