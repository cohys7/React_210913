/*
webpack
12, 13가져와서 붙여넣어서 1개의 파일로 만듬.

또는 개별로 만들어서 html 파일에
<script src="A12.js"></script>
<script src="A13.js"></script>
<script src="A14_ImportModule.js"></script>
*/

// 이름이 동일해야 한다. 이름이 있는 경우는 as로 Alias 지정.
import {name, onAdd, longNameFunction as longFunc } from './A12_ExportModule'

// default는 임의의 이름으로 받아 사용이 가능하다.
import onPlus, {name as nickname} from './A13_DefaultModule'

console.log(name);
console.log(onAdd(10, 20));
console.log(longFunc());

console.log(onPlus(100, 200));
console.log(nickname);