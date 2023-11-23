# Banco de Questões SI

## Histórico de versões

| **Data** | **Versão** | **Descrição**                      | **Autores**      | 
| -------------- | ----------------- | ------------------------------------------ | -------------------- | 
| 22/11/2023     | 1.0               | Elaboração da versão iniclal do projeto | [Lucas Muniz](https://github.com/lucasMunizt), [Melissa Viana](https://github.com/melissareboucas), [Vitor Lucas](https://github.com/SenaVitor) |         


## **1. Objetivo**

O **Banco de Questões SI** é uma plataforma projetada para alunos e professores do curso de Sistemas de Informação (SI) onde é possível cadastrar, gerenciar e estudar questões relacionadas às disciplinas do curso.

## **2. Descrição do Sistema**

Os métodos de estudo e aprendizado mais eficazes atualmente se baseiam em exercitar na prática os conhecimentos adquiridos na teoria.

Nesse contexto, esse sistema se propõe em desenvolver uma aplicação Web para propor exercícios de diversas disciplinas do curso de SI para que o aluno consiga estudar e praticar de forma autônoma, além de criar um ambiente colaborativo entre alunos e professores.

O sistema contém as seguintes funcionalidades:

- cadastro de disciplinas;
- cadastro de questões (com gabarito).

## **3. PERSONAS**

### 3.1 Alunos

| **Descrição** | Pessoa que utiliza o sistema para visualizar as questões                            |
| --------------------- | :-------------------------------------------------------------------------- |
| Papel                 | Utilizar o sistema, acessando as disciplinas e exercícios propostos         |
| Insumos ao sistema    | Solicitações ao backend dos exercícios |


### 3.2 Professores e Alunos

| **Descrição** | Pessoa que utiliza o sistema para enviar novas questões                           |
| --------------------- | :-------------------------------------------------------------------------- |
| Papel                 | Utilizar o sistema, criando disciplinas e exercícios        |
| Insumos ao sistema    | Envios ao backend das disciplinas e exercícios |

## **4. Necessidades e Funcionalidades**

* #N001. Cadastrar Disciplina
  * #N001-F001. Inserir nova disciplina
  * #N001-F002. Listar disciplinas cadastradas
  * #N001-F003. Visualizar e Editar disciplinas cadastradas
  * #N001-F004. Excluir disciplinas cadastrados
* #N002. Cadastrar Questão
  * #N002-F001. Inserir nova questão
  * #N002-F002. Listar questões por disciplina
  * #N002-F003. Visualizar e Editar questões cadastradas
  * #N002-F004. Excluir questão
  * #N002-F005. Visuaizar gabarito da questão

## **5. Arquitetura**
| **Descrição** | Ferramenta/Linguagens utilizadas   |
| --------------------- | :-------------------------------------------------------------------------- |
| [Design](https://www.figma.com/proto/LFKfuMdzejcTR2ouVWNdRE/MVP-Concurso-SI?type=design&node-id=2-2&t=jqXmlFNxY6qdGyio-1&scaling=scale-down&page-id=0%3A1&mode=design)                | Figma        |
|[Backend](https://github.com/SenaVitor/question-database)    | Java, utilizando springboot |
| [Frontend](https://github.com/lucasMunizt/Banco-de-quest-es) | HTML, CSS, JavaScript |


## 6. Configuração Ambiente
Clone os repositórios de back e front:
```
git clone https://github.com/SenaVitor/question-database.git
```
```
git clone https://github.com/lucasMunizt/Banco-de-quest-es.git
```
- Rode o backend em uma ferramenta de sua escolha (ex: Eclipse) e rode o frontend pelo index.html
- Instale o PostgresSQL (utilizaremos a porta 8081 e a senha '12345')

## 7. Soluções e referências obtidas online
| **Descrição** | Link   |
| --------------------- | :-------------------------------------------------------------------------- |
| Código Json para conexão entre frontend e backend          |   [ChatGPT](https://chat.openai.com/share/258a5a04-53e7-4e0d-bfd1-fb271ac6be3f)   |
| Ajuste de controller no springboot          |   [ChatGPT](https://chat.openai.com/share/f8554334-8ff7-4083-8f08-5b7307a97e02)      |
| Arquitetura do sistema         |   [ChatGPT](https://chat.openai.com/share/c4fab0ad-4ddc-4298-abf1-04711ff2a8d0)      |
| Chamada de POST entre frontend e backend        |   [Youtube](https://www.youtube.com/watch?v=hsewph3Xphw&t=2s&ab_channel=MotoCode)      |
