// your code goes here
class Token {
  static gettoken() {
    return window.localStorage.getItem('TOKEN');
  }
  static settoken(x) {
    window.localStorage.setItem('TOKEN', x)
  }
}

export default Token;