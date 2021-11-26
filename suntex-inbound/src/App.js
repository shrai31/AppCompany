import InboundSyntex from "./components/inboundSyntex";
import { Switch, Route } from 'react-router-dom'
import Maincomponent from "./components/Maincomponent";

function App() {
  return (
    <div className="App">
      <Switch>
        <Maincomponent >
            <Route exact path='/' component={InboundSyntex } />
        </Maincomponent>
     </Switch>
    </div>
  );
}

export default App;
