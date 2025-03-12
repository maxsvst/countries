## Веб-приложение, взаимодействующее с API "REST Countries", которое отображает карточки с флагом страны и информацией о ней. Реализован функционал:
1) Поиска стран по названию - с целью разгрузки сервера добавлен debounce, также реализовано исключение отправки запросов с одинаковыми параметрами (RTK Query)
2) Фильтрации стран по региону
3) Переключение тем - происходит синхронизация с системной темой, также тема сохраняется в localStorage
4) Scroll to top - скролл в начало страницы

При проектировании архитектуры придерживался методологии Feature-Sliced Design, CI/CD реализован с помощью GitHub Actions.

Стек проекта: TypeScript (Utility Types), React, Redux-toolkit, RTK Query, SCSS (flex, grid, псевдоклассы, transition), CSS-modules

![image](https://github.com/user-attachments/assets/c3715d8a-497f-4864-9e42-ffa38b7b07ee)

