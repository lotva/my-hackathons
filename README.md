[![Dependency Cruiser](https://github.com/lotva/my-hackathons/actions/workflows/dependency-cruiser.yaml/badge.svg)](https://github.com/lotva/my-hackathons/actions/workflows/dependency-cruiser.yaml)
[![Prettier](https://github.com/lotva/my-hackathons/actions/workflows/prettier.yaml/badge.svg)](https://github.com/lotva/my-hackathons/actions/workflows/prettier.yaml)
[![Stylelint](https://github.com/lotva/my-hackathons/actions/workflows/stylelint.yaml/badge.svg)](https://github.com/lotva/my-hackathons/actions/workflows/stylelint.yaml)
[![ESLint](https://github.com/lotva/my-hackathons/actions/workflows/eslint.yaml/badge.svg)](https://github.com/lotva/my-hackathons/actions/workflows/eslint.yaml)
[![TSC Type-Checking](https://github.com/lotva/my-hackathons/actions/workflows/tsc.yaml/badge.svg)](https://github.com/lotva/my-hackathons/actions/workflows/tsc.yaml)

# Мои хакатоны

Самый актуальный каталог хакатонов России. Основан на ЛЛМ-парсере, который мониторит интернет, находит и конспектирует сайты хакатонов. Разработан для ЦК ННГУ.

Рассказ о проекте: https://lotva.ru/projects/my-hackathons/

Продакшен: https://hackathons.lotva.ru/

![Preview](https://github.com/user-attachments/assets/72fa11d6-7773-41d6-9c4c-87c50db15830)

## Команды для разработки

Запустить дев-сервер:

```bash
pnpm install
pnpm dev
```

Собрать и развернуть локально билд:

```bash
pnpm build
pnpm preview
```

Обновить зависимости:

```bash
pnpm dlx npm-check-updates
pnpm install
```

## Стек

| Категория | Технологии                                       |
| --------- | ------------------------------------------------ |
| Фреймворк | Vue 3, Vike, TypeScript, TanStack Query, PostCSS |
| Тулинг    | PNPM, Lefthook, Dependency Cruiser, Commitlint   |

## Фичи

**Файловая структура — модульная**. Или domain-driven, как её называют авторы Vike. Модули содержат код, относящийся к одной предметной области.

Между модулями действует контракт — индексный файл с реэкспортами. Каждый модуль объясняет, какие его части можно импортировать:

```typescript
export { checkIfTitleLong } from './lib/checkIfTitleLong'
export { EventCard } from './ui'
```

Соблюдение контракта импортов отслеживает архитектурный линтер.

_[File Structure. Domain-driven](https://vike.dev/file-structure#domain-driven). Vike_\
_[Какие бывают структуры файлов для проектов на Вью](https://vue-faq.org/ru/development/project-structure.html). Vue FAQ_\
_[Архитектурный линтер Dependency Cruiser](https://github.com/sverweij/dependency-cruiser)_
