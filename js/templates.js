(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["statsTable.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "table");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("row", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"first")) {
output += "\n    <tr>\n      ";
frame = frame.push();
var t_7 = t_4;
if(t_7) {t_7 = runtime.fromIterator(t_7);
var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("content", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n        <th onclick=\"handleSort(this)\">\n          ";
output += runtime.suppressValue(t_8, env.opts.autoescape);
output += "\n          ";
if(runtime.contextOrFrameLookup(context, frame, "currentSortingColumn") == runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index") - 1) {
output += "\n            ";
if(runtime.contextOrFrameLookup(context, frame, "isAscending")) {
output += "\n              ⬆\n            ";
;
}
else {
output += "\n              ⬇️\n            ";
;
}
output += "\n          ";
;
}
else {
output += "\n            ⇵\n          ";
;
}
output += "\n        </th>\n      ";
;
}
}
frame = frame.pop();
output += "\n    </tr>\n  ";
;
}
else {
output += "\n    <tr>\n      ";
frame = frame.push();
var t_11 = t_4;
if(t_11) {t_11 = runtime.fromIterator(t_11);
var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("content", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
output += "\n        <td>";
output += runtime.suppressValue(t_12, env.opts.autoescape);
output += "</td>\n      ";
;
}
}
frame = frame.pop();
output += "\n    </tr>\n  ";
;
}
output += "\n";
;
}
}
frame = frame.pop();
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

