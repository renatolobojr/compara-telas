## Pré-requisitos
Precisa que já esteja instalados

- node e npm
- angular-cli
- vscode
-


## Criando o projeto
crianto projeto com auxilio do angular-cli com o nome de compara-telas

```ng new compara-telas```

## Acessando o projeto
acessando a pasta do projeto, criando o arquivo que vos lê e abrindo o projeto no vscode

```cd compara-telas```

```touch passo-a-passo.md```

```code .```

## Criar uma build personalizado
Criando uma build especifica para o github pages

buildando com pasta personalizada

```ng build --output-path=docs```

outro passo é comentar a linha 4 do index.html (necessário para que rode corretamente)

```<!--base href="/"-->```

