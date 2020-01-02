
## Install
```sh
npm i @lx/react-typewriter-hook --save
```

## Usage
```js
// useTypewriter will do these things
// Once Word changed, typewritter will automatically erase last word
// Then type down new word
import useTypewriter from "react-typewriter-hook"

function MagicWriter(word) {
  const typing = useTypewrite(word, {
    duration: 1000,
    // etc
  })
  return typing
}

```


| Option | Type | Description | Default Value |
| ----   | ---- | ----        | ----          |
| interval | number | The interval between each 'stroke' of a letter, in milliseconds. Overidden by `duration` if present | A random number |
| duration | number | The total duration to spend typing, in milliseconds. If provided, the duration is evenly divided between the total number of letters in the provided string. Overrides `interval` | |
