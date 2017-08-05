```js
const u = require('lambdahub-util')

u.last(['foo', 'bar'])    // 'bar'

await u.sleep(1000);      // wait 1000 ms

const names = await u.readdir(path)
const stats = await u.stat(path)
const {stdout, stderr} = await u.exec(...)
const {stdout, stderr} = await u.execFile(...)
```
