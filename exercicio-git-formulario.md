
# 📘 Exercício prático: Git e GitHub

Complete o passo a passo interativo para praticar os comandos básicos de Git e GitHub. 

---

## 🟩 Seção 1 – Inicialização do projeto

**Instrução:**  
Execute os comandos abaixo no terminal:

```bash
mkdir projeto-exercicio-git
cd projeto-exercicio-git
git init
```

## 🟦 Seção 2 – Adicionar e commitar arquivos

**Instrução:**  
Crie o arquivo `README.md` e registre as alterações:

```bash
echo "# Projeto de Exemplo Git" > README.md
git add README.md
git commit -m "Adiciona README com descrição inicial"
```

## 🟧 Seção 3 – Criar e usar uma branch

**Instrução:**  
Crie uma branch de desenvolvimento:

```bash
git checkout -b desenvolvimento
```

## 🟥 Seção 4 – Publicar no GitHub

**Instrução:**  
Conecte ao repositório remoto:

```bash
git remote add origin https://github.com/seu-usuario/projeto-exercicio-git.git
git push -u origin desenvolvimento
```

## 🟪 Seção 5 – Mesclar com a master

**Instrução:**

```bash
git checkout master
git merge desenvolvimento
git push origin master
```

## ⚠️ Seção 6 – Atualizações remotas

**Instrução:**  
Edite o `README.md` diretamente no GitHub e use:

```bash
git pull origin master
```

## 🎯 Seção 7 – Desafio opcional (extra)

**Instrução:**  
Edite `app.js` em outra branch, gere um conflito com `master`, resolva e faça o merge.

## ✅ Seção final 

**1. Link do repositório no GitHub:**  
**2. O que o comando `git init` faz?**  
**3. Qual a diferença entre `git add` e `git commit`?**  
**4. O que o comando `git merge` faz?**  
**5. Por que usamos `git pull` depois de uma alteração remota?**  
**6. Você conseguiu resolver um conflito de merge? Como foi?**  
**7. Você teve alguma dificuldade durante o exercício?**  
