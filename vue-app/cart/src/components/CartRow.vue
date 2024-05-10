<script setup>
import { ref, computed } from 'vue';
import QuantityInput from './QuantityInput.vue';

const props = defineProps({
  modelValue: { type: Object, required: true },
});

const emits = defineEmits(['update:model-value', 'remove']);

const amount = computed(() => {
  const price = parseFloat(props.modelValue.price);
  const quantity = parseFloat(props.modelValue.quantity);
  return price * quantity;
});

const updateRow = () => {
  emits('update:model-value', { ...props.modelValue, amount: amount.value });
};

const removeProduct = () => {
  emits('remove', props.modelValue.id);
};
</script>

<template>
  <td class="td">
    <div class="th-row">
      <img :src="modelValue.image" alt="Product 1" />
      <p>{{ modelValue.name }}</p>
    </div>
  </td>
  <td>{{ modelValue.price }} р.</td>

  <td>
    <QuantityInput
      v-model="modelValue.quantity"
      @update:model-value="updateRow"
      @remove="removeProduct"
    ></QuantityInput>
  </td>
  <td>Итого: {{ amount }}р.</td>
</template>

<style scoped></style>
