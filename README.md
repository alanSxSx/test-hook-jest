This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

TAMBÉM PODERÁ EXECUTAR OS TESTES COM O npm run test:dev OU npm run test:cov

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

⚠️ ATENÇÃO. PARA A AUTENTICAÇÃO FUNCIONAR, PRIMEIRAMENTE TERÁ QUE CRIAR UM ARQUIVO .ENV.LOCAL PARA GUARDAR AS CONFIGURAÇÕES DE AUTENTICAÇÃO. ⚠️

#.ENV.LOCAL

NEXTAUTH_SECRET=SUA CHAVE SECRETA
AUTH_SECRET=SUA CHAVE SECRETA
GOOGLE_CLIENT_ID=SEU CLIENT ID DO GOOGLE
GOOGLE_CLIENT_SECRET=SEU CLIENT SECRET DO GOOGLE

VOCÊ CONSEGUE ESSE CLIENT ID E O CLIENT SECRET NO SEGUINTE LINK:


//CONFIGURAÇÃO PARA CONSEGUIR O CLIENT_ID E O CLIENT_SECRET
https://console.developers.google.com/apis/credentials

⚠️MUITO IMPORTANTE⚠️

QUANTO ESTIVER FAZENDO A CONFIGURAÇÃO NO CAMPO "URIs de redirecionamento autorizados" ADICIONAR O ENDEREÇO: http://localhost:3000/api/auth/callback/google

//DOCUMENTAÇÃO
https://developers.google.com/identity/protocols/oauth2

