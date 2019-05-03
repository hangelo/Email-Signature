
function CopyToClipboard()
{
    /**
    Copy the content of the signature box into the clipboard
    */
    var elm = document.getElementById('signature');

    // for Internet Explorer
    if(document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(elm);
        range.select();
    }

    // other browsers
    else if(window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(elm);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    // The browser don`t have the copy/past behavior`
    else {
        alert('It is not posible to use clipboard on this browser');
        return;
    }

    // Copy the selected content into clipboard
    document.execCommand('Copy');

    alert('Copied div content to clipboard');
}


function DoStoreSetValues()
{
    /**
    Store values into Local Storage of the Browser.
    Works storing values to the ID of the object that called this function.
    */
    localStorage.setItem(this.getAttribute('id'), this.value);
}


function DoStoreGetValues(input_object)
{
    /**
    Get values from Local Storage.

    :param input_object Object:
        HTML Object
    */
    input_object.value = localStorage.getItem(input_object.getAttribute('id'));
}


function Initiate()
{
    /**
    Configure each element and create the HTML code to represent each element
    */

    // Create the line
    var div_line = document.createElement('div');
    div_line.className = 'line';

    // Create the label that will be added inside the line
    var lbl = document.createElement('label');
    lbl.innerHTML = this.object_label;

    // Create a div block that will be insert into the label
    var div_input = document.createElement('div');
    div_input.className = 'input';

    // Create the input object that will be added inside the div created above
    var input = document.createElement('input');
    input.type = 'text';
    input.id = this.object_id;
    input.placeholder = this.placeholder;

    // Format the line with all objects inside
    div_input.appendChild(input);
    lbl.appendChild(div_input);
    div_line.appendChild(lbl);

    // Insert the line into the page
    document.getElementById('fields-panel').appendChild(div_line);

    // Store the object INPUT into a field to be used later
    this.input_object = input;

    // Set the events
    this.input_object.onkeyup = UpdateSignature;
    this.input_object.onblur = DoStoreSetValues;

    // Get the values stored locally
    DoStoreGetValues(this.input_object);
}


function AddSubTitle(title)
{
    /**
    Add a sub title into the page to separate group of fields

    :param title String:
        The title that will appers in the page
    */

    var div = document.createElement('div');
    div.className = 'title';
    div.innerHTML = title;

    document.getElementById('fields-panel').appendChild(div);
}