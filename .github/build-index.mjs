// Збирає сторінку зі списком усіх задеплоєних робіт.
// Запускається з кореня репозиторію після того, як site/ уже наповнений.
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const folders = readdirSync("site", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

function titleOf(folder) {
  const file = join("site", folder, "index.html");
  if (!existsSync(file)) return folder;
  const match = readFileSync(file, "utf8").match(/<title>([^<]*)<\/title>/);
  const title = match?.[1].trim();
  // У частині робіт заголовок лишився від шаблону Vite — він нічого не каже.
  if (!title || title === folder || /^vite/i.test(title)) return folder;
  return title;
}

const items = folders
  .map((folder) => {
    const title = titleOf(folder);
    const caption = title === folder ? folder : `${title} <span>${folder}</span>`;
    return `      <li><a href="./${folder}/">${caption}</a></li>`;
  })
  .join("\n");

const html = `<!doctype html>
<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Домашні роботи — Genius Space</title>
    <style>
      body {
        margin: 0;
        padding: 48px 20px;
        background: #18181b;
        color: #f4f4f5;
        font: 16px/1.5 system-ui, sans-serif;
      }
      main { max-width: 640px; margin: 0 auto; }
      h1 { margin: 0 0 8px; font-size: 26px; }
      p { margin: 0 0 32px; color: #a1a1aa; }
      ul { margin: 0; padding: 0; list-style: none; }
      li { margin-bottom: 10px; }
      a {
        display: block;
        padding: 14px 18px;
        border: 1px solid #3f3f46;
        border-radius: 10px;
        color: #f4f4f5;
        text-decoration: none;
      }
      a:hover { border-color: #2563eb; background: #1f2430; }
      span { display: block; margin-top: 4px; color: #71717a; font-size: 13px; }
    </style>
  </head>
  <body>
    <main>
      <h1>Домашні роботи</h1>
      <p>Курс Genius Space FullStack 23.0, блок React. Збирається автоматично з репозиторію.</p>
      <ul>
${items}
      </ul>
    </main>
  </body>
</html>
`;

writeFileSync(join("site", "index.html"), html);
console.log(`Сторінку зі списком зібрано: ${folders.length} робіт`);

// GitHub Pages поважає лише ОДИН 404.html — у корені сайту; підпапкові ігнорує.
// Для SPA це означає, що пряме посилання на внутрішній маршрут прилітає сюди.
// Запам'ятовуємо маршрут у ?p=, віддаємо керування index.html потрібної роботи,
// а вона поверне адресу на місце (див. main.jsx 23-ї роботи).
const repo = `/${(process.env.GITHUB_REPOSITORY ?? "x/js-jenius-space").split("/").pop()}/`;

const notFound = [
  "<!doctype html>",
  '<html lang="uk">',
  "  <head>",
  '    <meta charset="UTF-8" />',
  "    <title>Переадресація…</title>",
  "    <script>",
  "      (function () {",
  `        var repo = ${JSON.stringify(repo)};`,
  "        var path = location.pathname;",
  "        if (path.indexOf(repo) !== 0) return;",
  "        var rest = path.slice(repo.length);",
  '        var slash = rest.indexOf("/");',
  "        if (slash <= 0) return;",
  "        var project = rest.slice(0, slash);",
  "        var route = rest.slice(slash);",
  '        location.replace(repo + project + "/?p=" + encodeURIComponent(route) + location.hash);',
  "      })();",
  "    <\/script>",
  "  </head>",
  "  <body></body>",
  "</html>",
  "",
].join("\n");

writeFileSync(join("site", "404.html"), notFound);
console.log(`Кореневий 404.html зібрано для ${repo}`);
