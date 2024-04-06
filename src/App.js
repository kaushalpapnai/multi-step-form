import Form from "./components/Form";
import FormContextProvider from "./formcontext/FormContextProvider";


function App() {

  return (
    <div>
      <FormContextProvider>
        <Form/>
      </FormContextProvider>
    </div>
  );
}

export default App;
