# react-typewriter-hook
> ⌨️   Use react hooks for typing effect easily

## Original
See [here](https://github.com/haowen737/react-typewriter-hook/)

## Sample
<img src="https://github.com/haowen737/react-typewriter-hook/blob/master/docs/example.gif" alt="examplegif" width="620">

## Install
```sh
npm i react-typewriter-hook --save
```

## Example
View example at [codesandbox](https://codesandbox.io/s/lr3q0q32vq)

## Usage
```js
// useTypewriter will do these things
// Once Word changed, typewritter will automatically erase last word
// Then type down new word
import useTypewriter from "react-typewriter-hook"

function MagicWriter(word) {
  const typing = useTypewriter(word)
  return typing
}

```
## What happens after call useTypewriter hook
- Typewriter accept the word, ready to write
- Typewriter write down your word and waiting for the word change
- Typewriter once accept the new word, it erases the last word, and write down next

## Options

`useTypewriter` supports some optional configuration options. Use them as follows:
```js
const typing = useTypewrite(word, {
  duration: 1000,
  // etc
})
```


| Option | Type | Description | Default Value |
| ----   | ---- | ----        | ----          |
| interval | number | The interval between each 'stroke' of a letter, in milliseconds. Overidden by `duration` if present | A random number |
| duration | number | The total duration to spend typing, in milliseconds. If provided, the duration is evenly divided between the total number of letters in the provided string. Overrides `interval` | |
