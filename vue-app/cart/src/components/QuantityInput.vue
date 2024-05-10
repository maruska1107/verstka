<script setup>
import { computed } from 'vue';

// const val = computed({
//   get: () => props.modelValue,
//   set: (newValue) => {
//     emits('update:model-value', newValue);
//   },
// });

const props = defineProps({
  modelValue: { type: Number, required: true },
});
const emits = defineEmits(['update:model-value', 'remove']);

const changeInput = ($event) => {
  emits('update:model-value', $event.target.value);
};

const decrement = () => {
  if (props.modelValue > 1) {
    emits('update:model-value', props.modelValue - 1);
  } else {
    if (confirm('Вы хотите удалить?')) {
      emits('remove');
    }
  }
};

const increment = () => {
  emits('update:model-value', props.modelValue + 1);
};
</script>

<template>
  <div class="quantity">
    <!-- :disabled="modelValue === 0" -->
    <button @click="decrement">-</button>
    <input type="text" :value="modelValue" @input="changeInput" />
    <button @click="increment">+</button>
  </div>
</template>

<style></style>
