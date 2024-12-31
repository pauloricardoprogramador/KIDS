# Kids - Aplicativo de Gerenciamento de Presença e Atividades

Bem-vindo ao **Kids**, uma aplicação desenvolvida para facilitar o acompanhamento da presença e atividades de crianças em igrejas, oferecendo uma experiência segura, prática e intuitiva para os responsáveis.

## Visão Geral
A aplicação é composta por uma interface responsiva e amigável que inclui:

- Uma **tela inicial (Splash)** exibindo o logotipo da aplicação.
- Um **cabeçalho** com informações sobre o propósito do app.
- Uma lista de **benefícios** com ícones e descrições claras.
- Um **botão de ação** para iniciar a experiência.

## Tecnologias Utilizadas
- **React**: Biblioteca para criação de interfaces de usuário.
- **CSS Modules**: Para estilização modular dos componentes.
- **Lucide-react**: Biblioteca de ícones para React.

## Estrutura do Projeto
A estrutura principal do projeto está dividida em componentes reutilizáveis e estilizados:

### Componentes

#### 1. **Splash**
Tela inicial exibindo o logotipo da aplicação.
```jsx
<Splash />
```

#### 2. **Header**
Cabeçalho com título e subtítulo informativo.
```jsx
<Header titulo="Bem-vindo ao Kids!" subtitulo="Acompanhe a presença de seus filhos e fique sempre informado sobre as atividades da igreja." />
```

#### 3. **Beneficio**
Componente para exibir um benefício com ícone, título e subtítulo.
```jsx
<Beneficio
  icon={Lock}
  strokeWidth={2}
  size={20}
  titulo="Segurança"
  subtitulo="Apenas responsáveis autorizados retiram as crianças."
/>
```

#### 4. **Butao**
Botão estilizado com texto customizável.
```jsx
<Butao titulo="Começar" />
```

#### 5. **Beneficios**
Componente principal que combina todos os elementos acima.
```jsx
<Beneficios />
```

## Instalação e Execução
Siga as etapas abaixo para rodar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/kids-app.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd kids-app
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o projeto:
   ```bash
   npm run dev
   ```

5. Acesse em seu navegador:
   ```
   http://localhost:3000
   ```

## Funcionalidades Principais
- **Tela Splash**: Introdução com o logotipo do app.
- **Benefícios**: Apresentação clara dos pontos fortes da aplicação.
- **Botão de ação**: Navega para a próxima etapa da experiência(O botão não tem ação)

## Melhorias Futuras
- Integração com um backend para gestão de dados.
- Funcionalidade de autenticação para responsáveis.
- Adição de uma API para envio de notificações.

---

Criado com ❤ por Paulo Ricardo. 
Para sugestões ou dúvidas, entre em contato!

