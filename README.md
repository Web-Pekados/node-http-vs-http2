# Node.js HTTP/1.1 vs HTTP/2 Benchmark

## Русский

### Описание проекта

Проект для сравнения производительности HTTP/1.1 и HTTP/2 протоколов с использованием различных Node.js фреймворков и инструментов тестирования.

### Серверы

- **Fastify HTTP/1.1** - стандартный Fastify сервер
- **Fastify HTTP/2** - Fastify с поддержкой HTTP/2 (h2c - без TLS)
- **Express** - Express.js сервер
- **Node.js** - нативный HTTP сервер
- **gRPC** - gRPC сервер для сравнения

### Установка

#### Установка зависимостей проекта

```bash
npm install
```

#### Установка инструментов тестирования

**h2load (для HTTP/1.1 и HTTP/2 тестирования):**

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
# Скачайте с https://github.com/nghttp2/nghttp2/releases
# Или используйте WSL с Ubuntu
```

**ghz (для gRPC тестирования):**

Linux/macOS:

```bash
# Скачайте с https://github.com/bojand/ghz/releases
# Или используйте go install
go install github.com/bojand/ghz/cmd/ghz@latest
```

Windows:

```bash
# Скачайте с https://github.com/bojand/ghz/releases
# Или используйте WSL с Linux
```

**Проверка установки:**

```bash
h2load --version
ghz --version
```

### Запуск серверов

```bash
# HTTP/1.1 серверы
npm run start:fastify
npm run start:express
npm run start:nodejs

# HTTP/2 сервер
npm run start:fastify-http2

# gRPC сервер
npm run start:grpc
```

### Тестирование производительности

#### Стандартные тесты (высокая нагрузка)

```bash
npm run test:fastify          # HTTP/1.1 Fastify
npm run test:fastify-http2    # HTTP/2 Fastify
npm run test:express          # HTTP/1.1 Express
npm run test:nodejs           # HTTP/1.1 Node.js
npm run test:grpc             # gRPC
```

#### Браузерная симуляция (реалистичные ограничения)

```bash
npm run test:fastify-from-browser  # HTTP/1.1 с ограничениями браузера
```

### Параметры тестирования

- **h2load** - для HTTP/1.1 и HTTP/2 тестирования
- **ghz** - для gRPC тестирования
- **-n 500000** - общее количество запросов
- **-c 50** - количество одновременных соединений
- **-m 30** - максимальное количество потоков на соединение

### Результаты тестирования

| Сервер  | Протокол | Запросов/сек | Параметры   |
| ------- | -------- | ------------ | ----------- |
| Fastify | HTTP/1.1 | ~86,157      | -c 50 -m 30 |
| Fastify | HTTP/2   | ~39,272      | -c 50 -m 30 |
| Express | HTTP/1.1 | ~14,724      | -c 50 -m 30 |
| Node.js | HTTP/1.1 | ~83,862      | -c 50 -m 30 |
| gRPC    | gRPC     | ~22,742      | -c 50       |

### Особенности тестирования

- HTTP/2 тестируется без TLS (h2c)
- Все серверы работают на порту 3003
- Простой endpoint: `Math.pow(5, 10)` - вычисление 5^10
- Тестирование проводится локально для исключения сетевых задержек

---

## English

### Project Description

A project for comparing HTTP/1.1 and HTTP/2 protocol performance using various Node.js frameworks and testing tools.

### Servers

- **Fastify HTTP/1.1** - standard Fastify server
- **Fastify HTTP/2** - Fastify with HTTP/2 support (h2c - without TLS)
- **Express** - Express.js server
- **Node.js** - native HTTP server
- **gRPC** - gRPC server for comparison

### Installation

#### Install Project Dependencies

```bash
npm install
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

# HTTP/2 server
npm run start:fastify-http2

# gRPC server
npm run start:grpc
```

### Performance Testing

#### Standard Tests (High Load)

```bash
npm run test:fastify          # HTTP/1.1 Fastify
npm run test:fastify-http2    # HTTP/2 Fastify
npm run test:express          # HTTP/1.1 Express
npm run test:nodejs           # HTTP/1.1 Node.js
npm run test:grpc             # gRPC
```

#### Browser Simulation (Realistic Constraints)

```bash
npm run test:fastify-from-browser  # HTTP/1.1 with browser limitations
```

### Testing Parameters

- **h2load** - for HTTP/1.1 and HTTP/2 testing
- **ghz** - for gRPC testing
- **-n 500000** - total number of requests
- **-c 50** - number of concurrent connections
- **-m 30** - maximum number of streams per connection

### Test Results

| Server  | Protocol | Req/sec | Parameters  |
| ------- | -------- | ------- | ----------- |
| Fastify | HTTP/1.1 | ~86,157 | -c 50 -m 30 |
| Fastify | HTTP/2   | ~39,272 | -c 50 -m 30 |
| Express | HTTP/1.1 | ~14,724 | -c 50 -m 30 |
| Node.js | HTTP/1.1 | ~83,862 | -c 50 -m 30 |
| gRPC    | gRPC     | ~22,742 | -c 50       |

### Testing Features

- HTTP/2 tested without TLS (h2c)
- All servers run on port 3003
- Simple endpoint: `Math.pow(5, 10)` - calculation of 5^10
- Testing performed locally to exclude network delays

### License

MIT License

### Author

Pekados
