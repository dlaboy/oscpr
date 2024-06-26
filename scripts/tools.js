// Copy to clipboard function
document.getElementById('copyButton').addEventListener('click', function() {
    var copyText = document.getElementById('copyInput');
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
       // Use the Clipboard API to copy text
       navigator.clipboard.writeText(copyText.value).then(function() {
        alert('Copied the text: ' + copyText.value);
    }).catch(function(error) {
        alert('Failed to copy text: ' + error);
    });
  });
  