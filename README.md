# User Catalog

Каталог пользователей с поиском и пагинацией. Данные загружаются из публичного API [dummyjson.com](https://dummyjson.com).

## Стек

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Heroicons

## Функциональность

- Отображение списка пользователей карточками
- Поиск с debounce (400ms)
- Пагинация (9 пользователей на страницу)
- Skeleton-загрузка и состояние ошибки

## Запуск

**Требования:** Node.js 18+

```bash
# Установить зависимости
npm install

# Запустить в режиме разработки
npm run dev
```

Приложение откроется на [http://localhost:5173](http://localhost:5173).

## Сборка

```bash
npm run build
npm run preview
```
