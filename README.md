# locomotive-study

A study app for the LIRR Locomotive Engineer Trainee test. It runs entirely in your browser — no server, no account. It covers both parts of the exam:

- **Definitions** — you're given a term and type its definition.
- **Signals** — you're shown a signal image and type its name.

---

## Quick start

```bash
locomotive-study
```

Then ctrl+click the `Local: http://localhost:5173/` link it prints. Press **Ctrl+C** in the terminal to stop the app.

If the `locomotive-study` command isn't set up yet, see [Run it from any terminal](#run-it-from-any-terminal) below, or run it directly from this folder:

```bash
npm install
npm run dev
```

Requires [Node.js](https://nodejs.org/) 18 or newer.

---

## How to use the app

### 1. Pick a practice test

The home screen has four options:

| Option | What it does | Use it for |
| --- | --- | --- |
| **Definitions — Ordered** | Questions grouped under category headings, always in the same order | Learning the material and seeing how terms connect |
| **Definitions — Random** | All questions shuffled, no headings | Simulating the real exam |
| **Signals — Ordered** | Signals grouped under category headings (e.g. Wayside vs. Cab Signals) | Learning the signals family by family |
| **Signals — Random** | All signals shuffled, no headings | Simulating the real exam |

### 2. Answer the questions

Type your answer into the box under each term or signal image. When you're done, click **Submit** at the bottom. If you left anything blank, it asks you to confirm first.

### 3. Review your score

After submitting:

- Your score shows at the top as a **percent** and as **X / Y correct**. It stays on screen while you scroll.
- **Green** = correct, **red** = wrong. Each wrong answer shows the correct answer under it.

**How answers are checked:** your answer must use the *exact wording* of the real answer, but these differences are ignored:

- uppercase vs. lowercase
- commas and periods
- spaces
- em dashes (—), en dashes (–) and hyphens (-) count as the same

So `not exceeding 30 mph` matches `Not exceeding 30 MPH.`, but `Approach` does **not** match `Approach Medium`.

### 4. Fix answers marked wrong for spelling

The proctor accepts spelling mistakes, but the app can't detect them. For any red answer, compare yours to the correct answer. If the only difference is spelling, tick **Mark as correct**. The question turns **amber** and your score updates.

Click **Retake** to try the same test again (random tests get reshuffled), or **Home** to pick a different one.

### 5. Add your own questions

From the home screen, click **+ Add / manage questions**:

1. Choose **Definition** or **Signal**.
2. Choose a **Category**: pick an existing one from the list or type a new name. In ordered mode, new questions go at the end of their category, and new categories go after the existing ones.
3. For a definition, enter the **term**. For a signal, upload an **image** (photo, screenshot, PNG, SVG, etc.).
4. Enter the **answer** exactly as it should be written on the exam.
5. Click **Add question**.

Questions you add are listed at the bottom of that page, where you can delete them.

> **Note:** Questions added in the app are saved in your browser's local storage. They stay in that browser only: a different browser won't see them, and clearing your browser data deletes them. To make a question permanent, add it to `src/data/questions.js` instead (see below).

---

## Run it from any terminal

The `locomotive-study` command is the script at `bin/locomotive-study`. It works from any folder: it finds the app, installs dependencies on first run, and starts it. To make it available everywhere, put a link to it in a folder on your `PATH`.

### Step 1 — Make the script executable

From this project folder:

```bash
chmod +x bin/locomotive-study
```

### Step 2 — Link it into `~/.local/bin`

```bash
mkdir -p ~/.local/bin
```

```bash
ln -sf "$(pwd)/bin/locomotive-study" ~/.local/bin/locomotive-study
```

Run this from the project folder so `$(pwd)` points at it. If you move the project later, run it again.

### Step 3 — Make sure `~/.local/bin` is on your PATH

Check:

```bash
echo $PATH | tr ':' '\n' | grep .local/bin
```

If that prints a line, you're done; skip to Step 4. If it prints nothing, add `~/.local/bin` to your PATH.

**zsh** (default on macOS and this setup):

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
```

**bash**:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

Then open a new terminal, or reload your config with `source ~/.zshrc` (or `source ~/.bashrc`).

### Step 4 — Test it

Open a new terminal in any folder and run:

```bash
locomotive-study
```

You should see the `Local: http://localhost:...` link.

### Alternative: a shell alias

If you'd rather not use a symlink, add an alias to `~/.zshrc` or `~/.bashrc`. Replace the path with wherever this project lives:

```bash
alias locomotive-study="$HOME/Code/personal/locomotive-study/bin/locomotive-study"
```

### Troubleshooting

- **`command not found: locomotive-study`**: `~/.local/bin` isn't on your PATH yet (Step 3), or you haven't opened a new terminal since changing it.
- **`permission denied`**: run Step 1 again.
- **Port already in use**: Vite picks the next free port automatically. Use whichever link it prints. You can also pick a port yourself: `locomotive-study --port 5200`.
- **Link doesn't open on WSL**: copy the `http://localhost:...` URL into your Windows browser. WSL forwards localhost automatically.

---

## Editing the built-in questions

- **Definitions and signals:** `src/data/questions.js`. Each category is a `{ category, questions: [...] }` block. Categories and questions appear in ordered mode in the order they're written.
- **Signal images:** put image files in `public/signals/` and reference them with `sig('your-file.png')` in `questions.js`.
- Every question needs a unique `id`.

The current built-in questions are **placeholders** and may not match the official LIRR rulebook wording. Replace them with your real study material.
