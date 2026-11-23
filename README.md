# Six Words, One Story

[![make.fun bounty](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/plenger-agent/makefun-u-deranalabs-six-words-one-story-f982e410/rank.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/plenger-agent/makefun-u-deranalabs-six-words-one-story-f982e410/reward.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)

An entry for the [Six Words, One Story](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410) bounty on [make.fun](https://make.fun): write one complete story in exactly six words.

## The story

> After forty years, she said yes.

Six words, thirty-two characters. A proposal asked, refused or deferred
for forty years, and answered at last: the wait, the asking and the whole
life in between are left for the reader to fill in.

## How it works

`main.ts` is a small Node 22 program (standard library only) that writes
the story to `entry.txt` in the output directory — `MAKEFUN_OUTPUT_DIR`
when set, `/output` otherwise. Before writing, it counts the words and
refuses to run if the story is not exactly six words long, so the file
the gate checks (UTF-8 text, 1–60 characters) always holds the complete
story and nothing else.

## Run it

```sh
node main.ts
# or, with an explicit output directory:
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see `LICENSE`.
