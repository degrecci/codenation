const deleteHistoryButton = document.querySelector('#delete-history');
const palindromePhraseInput = document.querySelector('#palindrome-phrase');
const palindromeTable = document.querySelector('#palindrome-table');

function handleDeleteHistory() {
  const tbody = palindromeTable.children[1];
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }
}

function handleInputPalindromePhrase(event) {
  if (event.key !== 'Enter') {
    return null;
  }

  event.preventDefault();

  phrase = palindromePhraseInput.value;
  isPalindrome = checkPalindrome(phrase);

  const data = { phrase, isPalindrome };
  createDataTable(data);

  palindromePhraseInput.value = '';
}

function createDataTable(data) {
  const tableRow = createTableRow();
  const tableDataPhrase = createTableData(data.phrase);
  const tableDataAnswer = createTableData(data.isPalindrome);

  tableRow.appendChild(tableDataPhrase);
  tableRow.appendChild(tableDataAnswer);

  palindromeTable.children[1].appendChild(tableRow);
}

function createTableRow() {
  const row = document.createElement('tr');
  return row;
}

function createTableData(value) {
  const data = document.createElement('td');

  if (typeof value === 'string') {
    data.textContent = value;
    return data;
  }

  data.textContent = isPalindrome ? 'Sim' : 'Não';
  data.setAttribute('data-verificado', isPalindrome ? 'positivo' : 'negativo');
  return data;
}

function cleanPhrase(phrase) {
  return phrase.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
}

function checkPalindrome(phrase) {
  const cleanedPhrase = cleanPhrase(phrase);
  const reversedPhrase = cleanedPhrase
    .split('')
    .reverse()
    .join('');

  return cleanedPhrase === reversedPhrase;
}

deleteHistoryButton.addEventListener('click', handleDeleteHistory);
palindromePhraseInput.addEventListener('keypress', handleInputPalindromePhrase);
