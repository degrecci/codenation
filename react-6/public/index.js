const cleanPhrase = phrase => {
  return phrase.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
};

const checkPalindrome = phrase => {
  const cleanedPhrase = cleanPhrase(phrase);
  const reversedPhrase = cleanedPhrase
    .split('')
    .reverse()
    .join('');

  return cleanedPhrase === reversedPhrase;
};

const isEmpty = value => {
  return value.replace(/^\s+|\s+$/g, '').length === 0;
};

function Form(props) {
  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="palindrome-phrase"
          name="palindrome-phrase"
          data-test="entrada"
          value={props.value}
          onChange={props.onChange}
          onKeyPress={props.handleKeyPress}
        />
      </div>
    </form>
  );
}

function Button(props) {
  return (
    <button
      type="button"
      className="btn btn-light btn-sm"
      id="delete-history"
      data-test="limpar-dados"
      onClick={props.onDelete}
    >
      Apagar histórico
    </button>
  );
}

function Table(props) {
  return (
    <table className="table table-striped table-bordered" id="palindrome-table">
      <thead>
        <tr>
          <th scope="col">Frase</th>
          <th scope="col">Palíndromo</th>
        </tr>
      </thead>
      {props.palindromeData && (
        <tbody>
          {props.palindromeData.map(
            ({ palindromePhrase, isPalindrome }, index) => (
              <tr key={index}>
                <td>{palindromePhrase}</td>
                <td data-verificado={isPalindrome ? 'positivo' : 'negativo'}>
                  {isPalindrome ? 'Sim' : 'Não'}
                </td>
              </tr>
            )
          )}
        </tbody>
      )}
    </table>
  );
}

function App() {
  const [palindromePhrase, setPalindromePhrase] = React.useState('');
  const [palindromeData, setPalindromeData] = React.useState([]);

  const handleInputChange = event => setPalindromePhrase(event.target.value);

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      if (!isEmpty(palindromePhrase)) {
        handleSubmit();
      }
    }

    return;
  };

  const handleSubmit = async () => {
    await setPalindromePhrase('');
    const isPalindrome = checkPalindrome(palindromePhrase);
    const newData = { palindromePhrase, isPalindrome };
    setPalindromeData([...palindromeData, newData]);
  };

  const handleDeleteAll = () => {
    setPalindromeData([]);
  };

  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            Verificador de Palíndromo
            <Button onDelete={handleDeleteAll} />
          </div>
          <div className="card-body">
            <Form
              handleSubmit={handleSubmit}
              handleKeyPress={handleKeyPress}
              onChange={handleInputChange}
              value={palindromePhrase}
            />
          </div>
        </div>
        <Table palindromeData={palindromeData} />
      </div>
    </section>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
