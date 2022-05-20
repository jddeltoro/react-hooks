import "./App.css";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import StateTutorial from "./UseState/StateTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import RefTutorial from "./UseRef/RefTutorial";
import MemoTutorial from "./UseMemo/MemoTutorial";
import CallBackTutorial from "./UseCallback/CallbackTutorial";
import LayoutEffectTutorial from "./UseLayoutEffect/LayoutEffectTutorial";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <StateTutorial />
          </div>
          <div className="col">
            <ReducerTutorial />
          </div>
          <div className="col">
            <EffectTutorial />
          </div>
          <div className="col">
            <RefTutorial />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <LayoutEffectTutorial />
          </div>
          <div className="col">
            <ImperativeHandle />
          </div>
          <div className="col">
            <ContextTutorial />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
