
export default {
  console: function (code) {
    eval(code);
  },
  debugger: function (code) {
    const stepThrough = eval;
    const debuggered = "// study tip: place a breakpoint at the beginning of each it()\ndebugger;\n\n" + code;
    stepThrough(debuggered);
  },
};
