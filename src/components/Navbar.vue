<template>
  <header class="fixed top-0 left-0 w-full text-black z-50">
    <hr class="text-primary" />
    <div class="container mx-auto px-6 max-w-[1200px] md:max-w-[640px] lg:max-w-[1200px]">
      <div class="flex justify-between items-center py-4">
        <!-- Лого -->
        <div class="text-2xl font-bold">
          <span class="text-black">Max</span><span class="text-green-500">Proff</span>
        </div>

        <!-- Навигация -->
        <ul class="hidden md:flex space-x-6 text-black">
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.href" class="hover:text-hoverBlack transition">
              {{ link.name }}
            </a>
          </li>
        </ul>

        <!-- Контакты -->
        <div class="hidden md:flex items-center space-x-4">
          <div>
            <h2 class="text-h2 text-black font-bold">+7 702 641 44 12</h2>
            <h3 class="text-h3 text-black font-normal">08:00 - 22:00, без выходных</h3>
          </div>
          <button
            class="border border-primary text-primary px-4 py-2 rounded-md hover:bg-buttonHover hover:text-white transition"
          >
            Заказать звонок
          </button>
        </div>

        <!-- Бургер-меню для мобильных -->
        <button class="md:hidden text-black">☰</button>
      </div>
    </div>

    <!-- Нижняя часть с меню услуг -->
    <div class="w-full">
      <div
        class="container mx-auto flex justify-around py-3 max-w-[1200px] md:max-w-[640px] lg:max-w-[1200px]"
      >
        <div v-for="item in menuItems" :key="item.name" class="relative">
          <button @click="toggleDropdown(item.key)" class="flex items-center">
            {{ item.name }}
            <svg
              class="pt-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="#171616"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <ul
            v-if="dropdowns[item.key]"
            class="absolute left-1/2 -translate-x-1/2 mt-2 w-[218px] rounded-lg shadow-md"
          >
            <li v-for="subItem in item.dropdown" :key="subItem" class="px-10 py-2 gap-5 transition">
              <a
                href="#"
                class="inline-block border border-transparent px-2 hover:border-green-500 rounded-md transition"
              >
                {{ subItem }}
              </a>
            </li>
          </ul>
        </div>

        <a href="#" class="hover:text-hoverBlack">Дома и коттеджи</a>
        <a href="#" class="hover:text-hoverBlack">Прочие услуги</a>
      </div>
    </div>
  </header>
</template>
  

<script setup>
import { ref } from 'vue'
const dropdowns = ref({
  apartments: false,
  interior: false,
  rooms: false
})

const toggleDropdown = (key) => {
  dropdowns.value[key] = !dropdowns.value[key]
}

// Массив для меню
const menuItems = [
  {
    name: 'Ремонт квартир',
    key: 'apartments',
    dropdown: [
      'Черновой',
      'Косметический',
      'Капитальный',
      'Элитный',
      'В новостройках',
      'Студии',
      'Вторичное жилье'
    ]
  },
  {
    name: 'Дизайн интерьера',
    key: 'interior',
    dropdown: ['Кухня', 'Гостиная']
  },
  {
    name: 'Ремонт комнат',
    key: 'rooms',
    dropdown: ['Спальня', 'Ванная']
  }
]

const navLinks = [
  { name: 'Цены', href: '#' },
  { name: 'Услуги', href: '#' },
  { name: 'Портфолио', href: '#' },
  { name: 'Акции', href: '#' },
  { name: 'Преимущества', href: '#' },
  { name: 'Блог', href: '#' },
  { name: 'Контакты', href: '#' }
]
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
