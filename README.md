# [Hamaka.dev](https://www.hamaka.dev/)

Project built with astro.


## 🚀 Project Structure

```
/
├── public/
├── src/
│   └── components/
│   └── content/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

all the post and files of the blog are inside the content directory.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |


made with Made with 🖤 by [Adrian Manjarres](https://github.com/andarms) in 🇨🇴