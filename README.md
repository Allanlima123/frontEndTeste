# Guia para Clonar o Repositório e Instalar o Live Server
Este guia vai te ajudar a clonar um repositório Git e configurar o Live Server, uma ferramenta útil para servir arquivos HTML localmente com recarga automática.

## 1. Clonando o Repositório Git
### Passo 1: Instale o Git
Se você ainda não tem o Git instalado, baixe e instale a versão mais recente para o seu sistema operacional aqui.

### Passo 2: Clonando o Repositório
1. Abra o terminal ou prompt de comando no seu computador.
2. Navegue até o diretório onde você deseja armazenar o repositório clonado.
3. Use o seguinte comando para clonar o repositório:

git clone https://github.com/usuario/nome-do-repositorio.git
Substitua https://github.com/usuario/nome-do-repositorio.git pelo URL do repositório que você deseja clonar.

4. Navegue até a pasta do repositório clonado:

cd nome-do-repositorio
Agora você tem uma cópia local do repositório no seu computador.

### 2. Instalando o Live Server
O Live Server é uma extensão do Visual Studio Code (VS Code) que permite visualizar suas páginas HTML em tempo real, com recarga automática sempre que você faz alterações nos arquivos.

### Passo 1: Instalando o Visual Studio Code
Se você ainda não tem o VS Code instalado, baixe e instale o Visual Studio Code.

### Passo 2: Instalando a Extensão Live Server
Abra o Visual Studio Code.
No menu lateral esquerdo, clique no ícone de Extensões (ou pressione Ctrl+Shift+X).
Na barra de pesquisa, digite "Live Server".
Clique em Install para instalar a extensão Live Server.
Passo 3: Usando o Live Server
Após instalar a extensão, abra o arquivo index.html ou qualquer arquivo HTML do seu projeto no VS Code.

Clique com o botão direito no arquivo aberto e selecione a opção "Open with Live Server".

Alternativamente, você pode clicar no ícone Go Live no canto inferior direito do VS Code.

O seu navegador será aberto automaticamente com o endereço local (geralmente http://127.0.0.1:5500) e você verá a página sendo exibida.

Agora você pode fazer alterações no código, e o Live Server recarregará a página automaticamente para você!

Dicas adicionais
Se precisar parar o servidor, basta clicar no botão "Stop Live Server" na parte inferior do VS Code.
O Live Server pode ser configurado para usar uma porta diferente ou para abrir o navegador de forma personalizada. Confira as configurações da extensão caso queira ajustar esses parâmetros.
