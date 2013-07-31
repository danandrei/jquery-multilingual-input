jQuery Multilingual Input
=========================

This is a simple jQuery plugin that turns an input into a multiligual one, the input is styled using **Bootstrap 2.3.1**.

## Example

An exemple of how this works:

 - Initial state:

	| DE | _____ | FR | IT |

 - Click on `FR`

	| DE | FR | _____ | IT |

 - Click on `IT`

	| DE | FR | IT | _____ |

where:

* `DE`, `FR` and `IT` are appended/prepended buttons.
* only ONE of the inputs is visible: the one after the clicked button language
* the initial state is with the first language input visible

See now the <a href="http://danandrei.github.io/jquery-multilingual-input/#demo" target="_blank"><strong>LIVE EXAMPLE</strong></a>!

## How to install

Simply add

```HTML
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css">
<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="i18n.js"></script>
```

Make sure you add the plugin after the jQuery and you are good to go.

## How to use

This only works on text inputs so make sure to add `type="text"` to the inputs.

To make this work simply select the input/multiple inputs you want to change and call the `.i18n()` function.

```HTML
<input type="text" id="myInput">
```

Now just call the function

```JS
$('#myInput').i18n({
    locales: ['en', 'it', 'ro'],
    attribute: 'data-key'
});
```

The function takes two options `locales` and `attribute`:

* If `locales` option is found, then the plugin will generate as many buttons and inputs as provided locales. Button text will be the uppercase locale.

* If no `locales` option is found, then a `data-i18n` will be searched for in the processed input and this should have a comma separated locale value: `data-i18n="de,en,fr"`.

***Note***: even if the `locales` option is given, the plugin will still search for the `data-i18n` atribute, and if such attribute is found it will overwrite the `locales` option.

* If no `locales` option and no `data-i18n` atribute is found, then nothing will happen to the input.


* if the  `atribute` option is found, then the plugin will append to the generated inputs the coressponding locale using dot notation, ex: `data-key="some_value.de"`.

* if the option is found and it has no value, then the atribute of the inputs will only receive the coressponding locale, e.g.: `data-key="de"`.

* if the `atribute` option is not found, then the default `data-field` option will be added.

## Plugin Page

Also visit the <a href="http://danandrei.github.io/jquery-multilingual-input/" target="_blank">plugin page</a>.
