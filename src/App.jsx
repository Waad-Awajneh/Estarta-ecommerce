//react
import { Suspense, useEffect } from "react";
//hooks
import { useDispatch, useSelector } from "react-redux";
//component
import Loading from "./components/Loading/Loading";
import Navbar from "./components/Navbar/Navbar";
//redux
import { checkToken } from "./redux/reducers/AuthReducer/actions";
//routes
import AllRoutes from "./Routes/routes";

function App() {
  const { loading, isAuth } = useSelector((state) => state.AuthReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) dispatch(checkToken());
  }, [isAuth]);

  if (loading) return <Loading />;
  return (
    <div className="App">
      <Suspense fallback="Loading .....">
        <Navbar />
        <AllRoutes />
      </Suspense>
    </div>
  );
}

export default App;
