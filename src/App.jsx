import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading/Loading";
import Navbar from "./components/Navbar/Navbar";
import { checkToken } from "./redux/reducers/AuthReducer/actions";
import AllRoutes from "./Routes/routes";
function App() {
  const { loading, isAuth } = useSelector((state) => state.AuthReducer);

  const dispatch = useDispatch();

  console.log({ loading, isAuth });

  useEffect(() => {
    if (isAuth) dispatch(checkToken());
  }, [isAuth]);

  if (loading) return <Loading />;
  return (
    <div className="App">
      {console.log("in")}
      <Suspense fallback="Loading .....">
        <Navbar />
        <AllRoutes />
      </Suspense>
    </div>
  );
}

export default App;
