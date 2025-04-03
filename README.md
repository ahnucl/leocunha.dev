# My Site Repo :)

Still in development...

## Source Material

- https://github.com/portfolio-projetos-dev
- https://github.com/portfolio-projetos-dev/portfoleo

## Create n8n volume
```bash
docker volume create n8n_data
```

## Start n8n:
```bash
docker run -itd --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```