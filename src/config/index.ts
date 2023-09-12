// 打印打包信息
// eslint-disable-next-line no-undef,@typescript-eslint/ban-ts-comment
// @ts-ignore
const build = __BUILD__;
// eslint-disable-next-line no-console
console.log(
  'color:orange;font-size:14px;',
  `系统名称：${build.name}`,
  `当前版本：${build.version}`,
  `发布时间：${build.dateTime}`,
);
