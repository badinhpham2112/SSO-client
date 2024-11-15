import { useEffect } from 'react';
import './App.scss'
import Header from './components/Header/Header';
import {useDispatch, useSelector} from 'react-redux'
import { doGetAccount } from './redux/actions/accountAction';
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';


const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.account.userInfo)
  const isLoading = useSelector(state => state.account.isLoading)
  useEffect(() => {
    if(user && !user.access_token){
      dispatch(doGetAccount())
    }
  }, [])

  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  return (
    <>
    
      {isLoading === true ?
      <div style={style}> 
        <ClipLoader
        color={"#36d7b7"}
        loading={true}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
      :
      <div className="App text-success">
      <Header/>
      </div>
      }
     
     </>
   
  );
}

export default App;
