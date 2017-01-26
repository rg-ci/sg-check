sg-check
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sg-check
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sg-check
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sg-check.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sg-check
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sg-check.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/sg-check/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sg-check
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sg-check.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sg-check.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sg-check
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sg-check.svg
[bd_npm_url]: http://www.npmjs.org/package/sg-check
[bd_npm_shield_url]: http://img.shields.io/npm/v/sg-check.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Checking utilify for SUGOS

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install sg-check --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const { hasBin, hasVar } = require('sg-check')
const co = require('co')

co(function * () {
  // Check a command available
  {
    let hasWhichCommand = yield hasBin('which')
    /* ... */
  }

  // Check a variable available
  {
    let hasWindow = yield hasVar('window')
    /* ... */
  }
}).catch((err) => console.error(err))

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Functions.md.hbs" Start -->

<a name="section-doc-guides-03-functions-md"></a>

Functions
---------

Available functions

| Signature | Description |
| ---- | ----------- |
| `.hasBin(binName) -> Promise.<boolean>` | Check if a bin available |
| `.hasVar(varName) -> Promise.<boolean>` | Check if a variable available |


<!-- Section from "doc/guides/03.Functions.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/sg-check/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [SUGOS][sugos_url]
+ [Realglobe][realglobe_url]

[sugos_url]: https://github.com/realglobe-Inc/sugos
[realglobe_url]: https://realglobe.jp/

<!-- Links End -->
