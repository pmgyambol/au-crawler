# Project: au-crawler

## Description: Howto on using [Willhaben API](https://github.com/CP02A/willhaben.git). For more details look at readme.

## Enter and build the API:

```css
   cd willhaben
   npm i
   npm audit fix    # follow the instruction, you might need to execute it several times
```

## Connect the test files with the API:

```css
   cd app
   npm i --save ../willhaben/
```

## Test

```css
   # 01.js - is the code given on the original site
   node 01.js
   # 02.js - hard coded parameter in 01.js is passed as an external argument
   node 02.js https://www.willhaben.at/iad/kaufen-und-verkaufen/marktplatz/pc-komponenten/-5882?keyword=rtx
   node 02.js https://www.willhaben.at/iad/kaufen-und-verkaufen/marktplatz/kindermode-3929?isISRL=true
   # 03.js - outputed JSON file is put into file given as an external argument 
   node 03.js out1.json https://www.willhaben.at/iad/kaufen-und-verkaufen/marktplatz/pc-komponenten/-5882?keyword=rtx
   node 03.js out2.json https://www.willhaben.at/iad/kaufen-und-verkaufen/marktplatz/kindermode-3929?isISRL=true
   # 04.py - example of using generated JSON files in Python
   python 04.py out1.json
   python 04.py out2.json
```
