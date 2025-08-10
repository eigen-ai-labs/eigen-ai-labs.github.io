# Eigen AI's Blog
This repo hosts all the content within https://blog.eigenai.com. 

## Develop and Deploy
See the [package.json](./package.json)

1. Install `npm` and `node.js`
- Use Homebrew for macOS
  ```bash
  brew install node
  ```

2. Develop:
```bash
npm i
npm run build
npm run dev
```

3. Deploy:

```bash
git add [files]
git commit -m "[message]"
git push
```

- After `git push`, the repo will be compiled and deployed automatically. HTML and all the files of the website will be in the `gh-pages` branch.

## Add Blog Posts
Add a markdown file to `/blog` for it to be added in the blog feed. Make sure your frontmatter contains the entries `title`, `author`, `date`, `previewImg`, and/or `url`.

## Acknowledgement
The website is modified from [laion.ai](https://github.com/LAION-AI/laion.ai.git), fully respecting [their license](https://github.com/LAION-AI/laion.ai/blob/main/LICENSE).
