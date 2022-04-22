function App() {
  const downloadXhr = async () => {
    // await axios.get('http://localhost:4000/download');
  };

  const downloadLink = () => {
    window.location.href = 'http://localhost:4000/download';
  };

  return (
    <div className="App">
      <button type="button" onClick={downloadXhr}>
        xhr download
      </button>
      <button type="button" onClick={downloadLink}>
        link download
      </button>
    </div>
  );
}

export default App;
