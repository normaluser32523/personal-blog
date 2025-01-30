# Personal Blog

&#x20;

## 📝 О проекте

**Personal Blog** — это веб-приложение для ведения персонального блога, разработанное на **Node.js**, **React** и **Vite**. Проект включает **frontend** и **backend**, поддерживает аутентификацию пользователей по токену, а также позволяет публиковать посты с изображениями, текстом и датой публикации.
---
![Node.js](https://img.shields.io/badge/Node.js-16-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.17-blue?logo=express)
![JWT](https://img.shields.io/badge/JWT-Auth-orange?logo=jsonwebtokens)
![Multer](https://img.shields.io/badge/Multer-File_Upload-purple?logo=multer)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-2.9-purple?logo=vite)
![Redux](https://img.shields.io/badge/Redux-Toolkit-yellow?logo=redux)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-DB-brightgreen?logo=postgresql)


## 🚀 Функционал

- 📌 **Регистрация и авторизация пользователей** с JWT-токеном
- 📝 **Создание, редактирование и удаление постов**
- 🖼 **Добавление изображений к постам**
- 📅 **Отображение даты публикации постов**
- 🔒 **Защищённый доступ к данным пользователей**
- ⚡ **Быстрая загрузка благодаря Vite**

---

## 🛠️ Технологии

| Категория         | Технологии                       |
| ----------------- | -------------------------------- |
| **Backend**       | Node.js, Express, JWT, Multer    |
| **Frontend**      | React, Vite, Redux (опционально) |
| **База данных**   | PostgreSQL           |

---

## 📦 Установка и запуск

### 🔧 Backend

1. Перейдите в директорию `backend`:
    ```sh
    cd backend
    ```
2. Установите зависимости:
    ```sh
    npm install
    ```
3. Запустите сервер:
    ```sh
    npm start
    ```

### 🌐 Frontend

1. Перейдите в директорию `frontend`:
    ```sh
    cd frontend
    ```
2. Установите зависимости:
    ```sh
    npm install
    ```
3. Запустите приложение в режиме разработки:
    ```sh
    npm run dev
    ```

---

## 📌 API Эндпоинты

### 📍 Аутентификация

| Метод | URL                  | Описание                       |
| ----- | -------------------- | ------------------------------ |
| POST  | `/api/auth/register` | Регистрация пользователя       |
| POST  | `/api/auth/login`    | Авторизация и получение токена |

### 📍 Посты

| Метод  | URL              | Описание                             |
| ------ | ---------------- | ------------------------------------ |
| GET    | `/api/posts`     | Получить все посты                   |
| POST   | `/api/posts`     | Создать новый пост (требуется токен) |
| PUT    | `/api/posts/:id` | Обновить пост (требуется токен)      |
| DELETE | `/api/posts/:id` | Удалить пост (требуется токен)       |

---
