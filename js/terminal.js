
function replace() {
    var terminals = document.getElementsByClassName('terminal-like');
    var new_terminals = [];
    [].forEach.call(terminals, function (terminal,index) {
        // window to replace original element
        var new_terminal  = document.createElement('div');
        new_terminal.className = 'terminal-like';

        // terminal title
        var title = document.createElement('span');
        title.innerText = 'Terminal ~';
        title.className = 'terminal-like-title';
        // terminal buttons
        var button = document.createElement('span');
        button.innerText = '*';
        button.className = 'terminal-like-button';
        // terminal header
        var titleBar = document.createElement('div');
        titleBar.className='terminal-like-header';
        titleBar.appendChild(title);
        titleBar.appendChild(button);


        // terminal body
        // append prompt to text
        var prompt = 'sato@localhost $';
        prompt = '<span class="prompt">'+prompt+'</span>';
        var text = terminal.innerText;
        text = text.split('\n').map( function(line){return (prompt+line)}).join('\n');
        console.log(text);

        var textArea = document.createElement('div');
        textArea.className = 'terminal-like-textArea';
        textArea.innerHTML= '<pre><code>'+text+'</code></pre>';

        new_terminal.appendChild(titleBar);
        new_terminal.appendChild(textArea);
        new_terminals[index] = new_terminal
    });

    [].forEach.call(terminals, function (terminal,index) {
        terminal.parentNode.replaceChild(new_terminals[index],terminal)
    });
}
