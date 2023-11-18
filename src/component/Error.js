import { useRouteError } from "react-router-dom";
const Error = () => {
    // this is the useRouteError Hook which is provided by the react-Router-dom Library
    const err = useRouteError();
    return (
        <div>
            <h1>Opps!!</h1>
            <h1>Something Not Found!!</h1>
            <h2>
                {err.status}: {err.statusText}
            </h2>
        </div>
    );
};
export default Error;
