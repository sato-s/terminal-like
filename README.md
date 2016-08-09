# terminal-like

Convert your code snippets into terminal-like style.

![Converted terminal-like code snippet sample](https://github.com/sato-s/terminal-like/blob/master/sample.png)

[Demo](http://sato-s.github.io/terminal-like/)

## Usage

Add this lines to your HTML header. 

```html
<link rel="stylesheet" href="./css/default.css">
<script type="text/javascript" src="./js/terminal.js"></script>
<script type="text/javascript">window.onload = terminalLike</script>
```

PRE tag with "terminal-like" class is automatically converted into terminal-like style.

```html
<pre class="terminal-like">
wget https://www.example.com/terminal-like.tar.gz
tar zxf terminal-like.tar.gz

cd terminal-like
./configure
make
sudo make install</pre>
```

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

