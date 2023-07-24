# file-tree

Print file tree recursively.

NPM: [https://www.npmjs.com/package/@thiss-dev/file-tree](https://www.npmjs.com/package/@thiss-dev/file-tree).

# Usage

Install globally with:

```sh
npm install -g @thiss-dev/file-tree
```

Then run with:

```sh
ftree [dir]
```

Or with `npx` without installing:

```sh
npx @thiss-dev/file-tree [dir]
```

# Examples

Recursively print a `node_modules` folder:

```sh
ftree ./node_modules
```

Or print your current directory:

```sh
ftree
```
