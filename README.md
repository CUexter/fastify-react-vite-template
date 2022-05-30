# <p align="center"> React Fastify template </p>

<!-- [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) -->

## Getting Started

### Clone the repository

```bash
degit github:user/repo
```

### Install Dependencies

```bash
npm i
```

### Adding Dependencies

Please do not add dev dependencies to their own workspace

#### Dev dependecies

```bash
npm i --save-dev *package_name*
```

#### For Frontend

```bash
npm i -w client *package_name*
```

#### For Backend

```bash
npm i -w server *package_name*
```

### Run development server

```bash
npm run dev
```

To build:

```bash
npm run build
```

To specify only building client add `-w client` the same is for server as well

Look at <http://localhost:3000> to see your client and port `5000` for server(backend).

## Contributing

### Commit Message

To commit please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) rules

This will provide a prompt to help you write good commit messages for us to handle. This will automatically run the git commit command for staged files.

#### IMPORTANT: ALL MESSAGE SHOULD BE LOWERCASE

### VSCode

If you want to commit in VSCode I highly recommend using this extension: [Conventional Commits](https://marketplace.visualstudio.com/items?itemname=vivaxy.vscode-conventional-commits)

You can access VSCode Conventional Commits in two ways:

1. `Command + Shift + P` or `Ctrl + Shift + P`, enter `Conventional Commits`,
   and press `Enter`.
2. Click the icon on the Source Control menu. See the image below.

![Icon on the Source Control menu](https://github.com/vivaxy/vscode-conventional-commits/raw/master/assets/docs/icon-on-the-source-control-menu.png)
