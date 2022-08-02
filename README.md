# Create TailwindCSS Project (create-tw)

### The easiest way to get started with TailwindCSS.

It uses popular scaffolding scripts like `create-next-app` or `create-vite` to scaffold projects and then configures TailwindCSS to work with your project out of the box.

### Currently in very early stage of development
Ideas, suggestions and bug reports are much appreciated.
In the following days I'm planning to add support for React, Vue & Svelte with Vite. 

![image](https://user-images.githubusercontent.com/6149523/182378126-c1ed463d-3a6b-4055-9eed-e3d83cd88dd9.png)

#### npx
```bash
npx create-tw@latest

# OR

npx create-tw@latest <project-name> --template <id>
```
#### yarn
```bash
yarn create tw

# OR

yearn create tw <project-name> --template <id> 
```

### Scaffolding tools

|id        | Template   | Tool            |
|:---------|:-----------|:----------------|
|nextjs    | Next.js    | create-next-app |
|nextjs-ts | Next.js TS | create-next-app |
|vanilla   | Vanilla    | create-vite     |
|vanilla-ts| Vanilla TS | create-vite     |
|react     | React      | create-vite     |
|react-ts  | React   TS | create-vite     |
|vue       | Vue        | create-vite     |
|vue-ts    | Vue     TS | create-vite     |

You can include template id to skip input steps

```bash
npx create-tw@latest --template <id>
# OR
yarn create tw --template <id>
```
