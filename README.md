# time-convert-24hour

[![npm version](https://img.shields.io/npm/v/time-convert-24hour.svg)](https://www.npmjs.com/package/time-convert-24hour)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yourusername/time-convert-24hour/blob/main/LICENSE)

`time-convert-24hour` is a simple Node.js module that allows you to convert 24-hour format time strings to a 12-hour format with AM/PM indication. This package is useful for developers who need to display time in a more human-readable way, especially when dealing with time data from various sources.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

You can install `time-convert-24hour` via npm:

```bash
npm install time-convert-24hour
```
## Usage
To use `time-convert-24hour`, import the timeConvert function and pass a 24-hour format time string as an argument. The function will return the time in a 12-hour format with AM/PM.

```js
import { timeConvert } from 'time-convert-24hour';

const time24 = '14:30'; // Example 24-hour time
const time12 = timeConvert({ time24 });
console.log(time12); // Output: '2:30 PM'
```
## License 
This package is open-source and released under the MIT License. Feel free to use and modify it in your projects.


