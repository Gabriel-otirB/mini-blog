# MiniBlog

**MiniBlog** é uma aplicação web simples e funcional desenvolvida com **React**, **Vite** e **Firebase**, que permite aos usuários criarem, editarem e visualizarem posts em um blog. A plataforma é voltada para quem deseja compartilhar ideias de forma prática, com autenticação e controle de autoria.



https://github.com/user-attachments/assets/2884caa3-b463-4076-8814-7d2adb943512



## 📝 Funcionalidades

- Cadastro e login de usuários com Firebase Authentication
- Criação de novos posts com título e conteúdo
- Edição e exclusão de posts pelo autor
- Visualização pública de posts de outros usuários
- Interface leve, rápida e responsiva

## 🛠️ Tecnologias Utilizadas

- **React** – Biblioteca para construção da interface
- **Vite** – Ferramenta de build e desenvolvimento ultrarrápida
- **Firebase** – Backend como serviço (Authentication, Firestore)
- **CSS3** – Estilização customizada

## 🔐 Autenticação

A autenticação é feita com **Firebase Auth**, permitindo criação de conta com e-mail e senha. Cada post está vinculado ao usuário que o criou, garantindo controle sobre as ações de edição e exclusão.

## ☁️ Banco de Dados

O armazenamento dos posts é feito no **Firebase Firestore**, um banco de dados em tempo real que permite atualização instantânea dos conteúdos e escalabilidade automática.

## 🚀 Como rodar localmente

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/miniblog.git
```

2. Instale as dependências:
```bash
npm install
```
3. Configure o Firebase: Crie um projeto no Firebase e adicione as credenciais no arquivo .env conforme exemplo abaixo:
- VITE_API_KEY=your_api_key
- VITE_AUTH_DOMAIN=your_auth_domain
- VITE_PROJECT_ID=your_project_id
- VITE_STORAGE_BUCKET=your_storage_bucket
- VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
- VITE_APP_ID=your_app_id

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse em: http://localhost:5173


