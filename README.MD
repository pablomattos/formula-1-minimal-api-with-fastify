# formula-one

## 🏎️ API de Fórmula 1 com Fastify e TypeScript

API REST que fornece informações sobre **equipes** e **pilotos** de Fórmula 1, com suporte para buscar todos os registros ou filtrar por **ID do piloto**.

---

### 📋 Pré-requisitos

- Instalar o **Node.js**:  
  https://nodejs.org/en/download

---

### 🔧 Instalação

#### Passos:

- Copie a URL do repositório (HTTPS ou SSH):  
  `https://github.com/pablomattos/formula-1-minimal-api-with-fastify.git`  
- Abra o Terminal ou Git Bash no seu computador  
- Altere o diretório de trabalho atual para o local onde deseja clonar o repositório  
- Digite o comando abaixo:

```bash
git clone https://github.com/pablomattos/formula-1-minimal-api-with-fastify.git
```

#### Na IDE:

- Abra o terminal
- Acesse a pasta do projeto clonado
- Execute:

```bash
npm install
```

- Para iniciar o servidor em modo desenvolvimento:

```bash
npm run start:dev
```

- Para rodar em modo observação contínua:

```bash
npm run start:watch
```

- Para gerar o build e executar:

```bash
npm run start:dist
```

---

### ▶️ Como funciona

A aplicação disponibiliza uma API REST com os seguintes endpoints:

#### `GET /teams`

Retorna todas as equipes cadastradas.

##### Exemplo de resposta:
```json
{
  "teams": [
    {
      "id": 1,
      "teamName": "Ferrari",
      "teamBase": "Maranello, Italy"
    }
  ]
}
```

---

#### `GET /drivers`

Retorna todos os pilotos cadastrados.

##### Exemplo de resposta:
```json
{
  "drivers": [
    {
      "id": 1,
      "driverName": "Charles Leclerc",
      "teamName": "Ferrari"
    }
  ]
}
```

---

#### `GET /drivers/:id`

Retorna um piloto filtrado pelo **ID**.

##### Exemplo de resposta:
```json
{
  "driver": {
    "id": 1,
    "driverName": "Charles Leclerc",
    "teamName": "Ferrari"
  }
}
```

Se o piloto não for encontrado:
```json
{
  "message": "Driver not found!"
}
```

---

## 🛠️ Construído com

- [VS Code](https://code.visualstudio.com/download)  
  > *Você pode utilizar qualquer editor de sua preferência*

### Tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/)
- [TSX](https://github.com/esbuild-kit/tsx)
- [Tsup](https://tsup.egoist.dev/)

---

## ✒️ Autor

**Seu Nome Aqui**  
[LinkedIn](https://www.linkedin.com/in/pablomoraesdemattos)  
[GitHub](https://github.com/pablomattos)
