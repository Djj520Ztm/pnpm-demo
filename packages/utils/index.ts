function hello(msg = "world") {
  console.log('msg: ', msg);
  return `hello ${msg}，666`;
}

export { hello };
