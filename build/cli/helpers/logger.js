/**
 * @name 辅助日志输出工具
 * @date   2017-11-07
 * @description  
 */

/**
 * 日志构造函数
 */
function StackLogger() {

}

/**
 * 当输入表达式为true时回引发异常
 * @param express {Boolean} true/false 
 * @param message {String} 在异常情况下需要输出的消息
 */
StackLogger.prototype.throwif = function (express, message) {
  if (express) {
    throw new Error(message);
  }
}

/**
 * 输出消息
 * @param message 消息模板
 * @param ...params 其他参数
 */
StackLogger.prototype.log = function () {
  return console.log.apply(console, this.formatArgs(arguments));
}

/**
 * 输出一个info日志
 *  @param message 消息模板
 * @param ...params 其他参数
 */
StackLogger.prototype.info = function () {
  return console.info.apply(console, this.formatArgs(arguments));
}

/**
 * 输出一个error日志
 *  @param message 消息模板
 * @param ...params 其他参数
 */
StackLogger.prototype.error = function () {
  return console.error.apply(console, this.formatArgs(arguments));
}

/**
 * 统一格式化格式
 */
StackLogger.prototype.format = function (message) {
  return 'Archer: ' + message;
}

/**
 * 格式化绑定
 */
StackLogger.prototype.formatArgs = function (args) {
  args[0] = this.format(args[0]);
  return args;
}

//公布日志对象
module.exports = new StackLogger();