// Copy to clipboard function
document.getElementById('copyButton').addEventListener('click', function() {
    var copyText = document.getElementById('copyInput');
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Copied the text: ' + copyText.value);
  });
  