class Token {
  static tok;
  static gettoken() {
    return this.tok;
  }
  static settoken(x) {
    this.tok = x;
  }
}

export default Token;