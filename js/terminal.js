
function replace() {
    var terminals = document.getElementsByClassName('terminal-like');
    var new_terminals = [];
    [].forEach.call(terminals, function (terminal,index) {
        // window to replace original element
        var new_terminal  = document.createElement('div');
        new_terminal.className = 'terminal-like';

        // terminal title
        var title = document.createElement('div');
        title.innerText = 'Terminal ~';
        // terminal bottons
        var button = document.createElement('div');
        button.innerText = '*';
        // terminal header
        var titleBar = document.createElement('table');
        titleBar.className='terminal-like-header'
        titleBar.cellPadding = 0;
        titleBar.cellSpacing = 0;
        var row = titleBar.insertRow(0);
        var cell1=row.insertCell(0);
        cell1.className = 'terminal-like-title';
        cell1.appendChild(title);
        var cell2=row.insertCell(1);
        cell2.className = 'terminal-like-button';
        cell2.appendChild(button);


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
