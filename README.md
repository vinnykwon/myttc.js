# myttc.js
Web-API for [myttc.ca](https://myttc.ca/) an API to help people shorten their development cycles

```JavaScript
async function main() {
	const { MyTtc } = require("./myttc.js");
	const myTtc = new MyTtc()
	const finchStation = await myTtc.getFinchStation()
	console.log(finchStation)
}

main()
```
