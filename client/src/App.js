import React, {useState}  from 'react';

function App() {
  
  const [apiResponse, setApiResponse] = useState('')

  function callApi(){
    fetch("/apiReq")
        .then(res => res.text())
        .then(res => setApiResponse(res))
  }

  callApi()

  return (
    <div className="serRes">
      {apiResponse}
    </div>
  );
}

export default App;
