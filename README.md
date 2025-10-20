# 🚀 Node.js HTTP/1.1 vs HTTP/2 Benchmark

> Сравнение производительности HTTP/1.1 и HTTP/2 протоколов с различными Node.js фреймворками

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)

---

## 🇷🇺 Русский

### 📋 Описание проекта

Проект для сравнения производительности HTTP/1.1 и HTTP/2 протоколов с использованием различных Node.js фреймворков и инструментов тестирования.

### 🖥️ Серверы

| Сервер | Протокол | Описание |
|--------|----------|----------|
| 🚀 **Fastify** | HTTP/1.1 | Стандартный Fastify сервер |
| ⚡ **Fastify** | HTTP/2 | Fastify с поддержкой HTTP/2 (h2c) |
| 🏗️ **NestJS** | HTTP/2 | NestJS с Fastify адаптером и HTTP/2 |
| 📦 **Express** | HTTP/1.1 | Express.js сервер |
| 🔧 **Node.js** | HTTP/1.1 | Нативный HTTP сервер |
| 🌐 **gRPC** | gRPC | gRPC сервер для сравнения |

### 📦 Установка

#### 🔧 Установка зависимостей проекта

```bash
# Основные зависимости
npm install

# Зависимости для NestJS
cd nest-fastify-http2 && npm i
```

#### 🛠️ Установка инструментов тестирования

**🔍 h2load** (для HTTP/1.1 и HTTP/2 тестирования)

<details>
<summary>Ubuntu/Debian</summary>

```bash
sudo apt update
sudo apt install nghttp2-client
```
</details>

<details>
<summary>macOS</summary>

```bash
brew install nghttp2
```
</details>

<details>
<summary>Windows</summary>

```bash
# Скачайте с https://github.com/nghttp2/nghttp2/releases
# Или используйте WSL с Ubuntu
```
</details>

**🌐 ghz** (для gRPC тестирования)

<details>
<summary>Linux/macOS</summary>

```bash
# Скачайте с https://github.com/bojand/ghz/releases
# Или используйте go install
go install github.com/bojand/ghz/cmd/ghz@latest
```
</details>

<details>
<summary>Windows</summary>

```bash
# Скачайте с https://github.com/bojand/ghz/releases
# Или используйте WSL с Linux
```
</details>

**✅ Проверка установки**

```bash
h2load --version
ghz --version
```

### 🚀 Запуск серверов

<details>
<summary>HTTP/1.1 серверы</summary>

```bash
npm run start:fastify    # Fastify HTTP/1.1
npm run start:express    # Express HTTP/1.1
npm run start:nodejs     # Node.js HTTP/1.1
```
</details>

<details>
<summary>HTTP/2 серверы</summary>

```bash
npm run start:fastify-http2      # Fastify HTTP/2
npm run start:nest-fastify-http2 # NestJS Fastify HTTP/2
```
</details>

<details>
<summary>gRPC сервер</summary>

```bash
npm run start:grpc       # gRPC сервер
```
</details>

### ⚡ Тестирование производительности

#### 🔥 Стандартные тесты (высокая нагрузка)

```bash
npm run test:fastify            # HTTP/1.1 Fastify
npm run test:fastify-http2      # HTTP/2 Fastify
npm run test:nest-fastify-http2 # HTTP/2 NestJS Fastify
npm run test:express            # HTTP/1.1 Express
npm run test:nodejs             # HTTP/1.1 Node.js
npm run test:grpc               # gRPC
```

#### 🌐 Браузерная симуляция (реалистичные ограничения)

```bash
npm run test:fastify-from-browser  # HTTP/1.1 с ограничениями браузера
```

### ⚙️ Параметры тестирования

| Параметр | Описание | HTTP/1.1 | HTTP/2 | gRPC |
|----------|----------|----------|--------|------|
| **-n** | Общее количество запросов | 500,000 | 500,000 | 500,000 |
| **-c** | Одновременные соединения | 500 | 50 | 80 |
| **-m** | Потоков на соединение | 1 | 10 | - |
| **Инструмент** | | h2load | h2load | ghz |

### 📊 Результаты тестирования

| 🏆 | Сервер | Протокол | Запросов/сек | Параметры | Производительность |
|----|--------|----------|--------------|-----------|-------------------|
| 🥇 | **Node.js** | HTTP/1.1 | **34,560** | -c 500 -m 1 | Отличная |
| 🥈 | **Fastify** | HTTP/2 | **32,539** | -c 50 -m 10 | Отличная |
| 🥉 | **Fastify** | HTTP/1.1 | **29,058** | -c 500 -m 1 | Хорошая |
| 4️⃣ | **NestJS** | HTTP/2 | **24,522** | -c 50 -m 10 | Хорошая |
| 5️⃣ | **gRPC** | gRPC | **24,098** | -c 80 | Средняя |
| 6️⃣ | **Express** | HTTP/1.1 | **8,581** | -c 500 -m 1 | Низкая |

### 🔬 Особенности тестирования

- 🌐 HTTP/2 тестируется без TLS (h2c)
- 🔌 Все серверы работают на порту 3003
- 🧮 Простой endpoint: `Math.pow(5, 10)` - вычисление 5^10
- 🏠 Тестирование проводится локально для исключения сетевых задержек
- ⚙️ Разные параметры для HTTP/1.1 и HTTP/2 для оптимизации каждого протокола

### 📈 Выводы

В данном тесте с оптимизированными параметрами:

#### 🏆 Лидеры производительности

| 🥇 | **Node.js HTTP/1.1** | 34,560 req/s | Лучший общий результат |
|----|----------------------|--------------|------------------------|
| 🥈 | **Fastify HTTP/2** | 32,539 req/s | Лучший HTTP/2 результат |
| 🥉 | **Fastify HTTP/1.1** | 29,058 req/s | Отличная производительность |

#### 📊 Анализ по категориям

**🚀 HTTP/2 серверы:**
- Fastify HTTP/2: ~32,539 req/s
- NestJS HTTP/2: ~24,522 req/s (хорошо для фреймворка с декораторами)

**🔧 HTTP/1.1 серверы:**
- Node.js: ~34,560 req/s (нативный сервер)
- Fastify: ~29,058 req/s (фреймворк)
- Express: ~8,581 req/s (в 4 раза медленнее Fastify)

**🌐 gRPC:**
- gRPC: ~24,098 req/s (хорошо для бинарного протокола)

#### 🔑 Ключевые факторы

- ✅ **HTTP/2** эффективнее при правильной настройке параметров
- ✅ **Fastify** значительно быстрее Express
- ✅ **Node.js** нативный сервер показывает отличную производительность
- ✅ **NestJS** показывает хорошую производительность для фреймворка с декораторами
- ✅ **gRPC** подходит для сложных операций, но имеет overhead для простых вычислений

---

---

## 🇺🇸 English

### 📋 Project Description

A project for comparing HTTP/1.1 and HTTP/2 protocol performance using various Node.js frameworks and testing tools.

### 🖥️ Servers

| Server | Protocol | Description |
|--------|----------|-------------|
| 🚀 **Fastify** | HTTP/1.1 | Standard Fastify server |
| ⚡ **Fastify** | HTTP/2 | Fastify with HTTP/2 support (h2c) |
| 🏗️ **NestJS** | HTTP/2 | NestJS with Fastify adapter and HTTP/2 |
| 📦 **Express** | HTTP/1.1 | Express.js server |
| 🔧 **Node.js** | HTTP/1.1 | Native HTTP server |
| 🌐 **gRPC** | gRPC | gRPC server for comparison |

### Installation

#### Install Project Dependencies

```bash
npm install

cd nest-fastify-http2 && npm i
```

#### Install Testing Tools

**h2load (for HTTP/1.1 and HTTP/2 testing):**

Ubuntu/Debian:

```bash
sudo apt update
sudo apt install nghttp2-client
```

macOS:

```bash
brew install nghttp2
```

Windows:

```bash
# Download from https://github.com/nghttp2/nghttp2/releases
# Or use WSL with Ubuntu
```

**ghz (for gRPC testing):**

Linux/macOS:

```bash
# Download from https://github.com/bojand/ghz/releases
# Or use go install
go install github.com/bojand/ghz/cmd/ghz@latest
```

Windows:

```bash
# Download from https://github.com/bojand/ghz/releases
# Or use WSL with Linux
```

**Verify Installation:**

```bash
h2load --version
ghz --version
```

### Running Servers

```bash
# HTTP/1.1 servers
npm run start:fastify
npm run start:express
npm run start:nodejs

# HTTP/2 servers
npm run start:fastify-http2
npm run start:nest-fastify-http2

# gRPC server
npm run start:grpc
```

### Performance Testing

#### Standard Tests (High Load)

```bash
npm run test:fastify            # HTTP/1.1 Fastify
npm run test:fastify-http2      # HTTP/2 Fastify
npm run test:nest-fastify-http2 # HTTP/2 NestJS Fastify
npm run test:express            # HTTP/1.1 Express
npm run test:nodejs             # HTTP/1.1 Node.js
npm run test:grpc               # gRPC
```

#### Browser Simulation (Realistic Constraints)

```bash
npm run test:fastify-from-browser  # HTTP/1.1 with browser limitations
```

### Testing Parameters

- **h2load** - for HTTP/1.1 and HTTP/2 testing
- **ghz** - for gRPC testing
- **-n 500000** - total number of requests
- **-c 500** - number of concurrent connections (for HTTP/1.1)
- **-c 50** - number of concurrent connections (for HTTP/2)
- **-m 1** - maximum number of streams per connection (for HTTP/1.1)
- **-m 10** - maximum number of streams per connection (for HTTP/2)
- **-c 80** - number of concurrent connections (for gRPC)

### Test Results

| Server  | Protocol | Req/sec      | Parameters  |
| ------- | -------- | -------      | ----------- |
| Fastify | HTTP/1.1 | ~29,058      | -c 500 -m 1 |
| Fastify | HTTP/2   | ~32,539      | -c 50 -m 10 |
| NestJS  | HTTP/2   | ~24,522      | -c 50 -m 10 |
| Express | HTTP/1.1 | ~8,581       | -c 500 -m 1 |
| Node.js | HTTP/1.1 | ~34,560      | -c 500 -m 1 |
| gRPC    | gRPC     | ~24,098      | -c 80       |

### Testing Features

- HTTP/2 tested without TLS (h2c)
- All servers run on port 3003
- Simple endpoint: `Math.pow(5, 10)` - calculation of 5^10
- Testing performed locally to exclude network delays
- Different parameters for HTTP/1.1 and HTTP/2 to optimize each protocol

### License

MIT License

### Author

Pekados
