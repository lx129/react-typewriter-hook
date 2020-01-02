export default class TypeWritter {
  private memoWord: string | undefined;
  private nextWord: string | undefined;
  private word: string | undefined;
  private eventQueue: string[];
  private dummyQueue: Array<string | undefined>;
  private erasing: boolean | undefined;

  constructor(
  ) {
    this.dummyQueue = [];
    this.eventQueue = []
    // this.initTaskQueue()
  }

  public restartTypeWriter() {
    console.log(this.nextWord);
    this.memoWord = this.nextWord;
    // @ts-ignore
    this.eventQueue = this.nextWord.split('');
    this.erasing = false;
    return ''
  }

  /**
   * Main process function
   * typing
   *    |-- writing
   *    |-- erasing
   *    |-- restartWrite
   *
   * @returns
   * @memberof TypeWritter
   */
  public typing() {
    // earsing to last character, start write next word
    if (this.erasing && !this.word) {
      return this.restartTypeWriter()
    }
    // earsing
    if (this.erasing && this.word) {
      this.dummyQueue = [];
      return ''
    }
    // write end
    if (this.word === this.memoWord) {
      return this.word
    }
    // writing
    const el = this.eventQueue.shift();
    this.dummyQueue.push(el);
    this.word = this.dummyQueue.join('');
    return this.word
  }

  public startTypeWord(str: string) {
    this.erasing = true;
    this.nextWord = str;
    this.dummyQueue = [];
    this.word = '';
    return this.word
  }

  public rd(): number {
    const r = Math.random();
    return r > 0.1 || r < 0.07
        ? this.rd()
        : r * 1000
  }

}
