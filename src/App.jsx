import { useState, useRef, useEffect, useMemo } from "react";
import { Card } from "flowbite-react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const searchParams = useMemo(
    () => new URLSearchParams(document.location.search),
    []
  );

  const [count, setCount] = useState(0);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const telegramWrapperRef = useRef(null);
  // suptarr_bot
  useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://telegram.org/js/telegram-widget.js?22";
    scriptElement.setAttribute("data-telegram-login", "riook_bot");
    scriptElement.setAttribute("data-size", "large");
    scriptElement.setAttribute("data-auth-url", "");
    scriptElement.async = true;

    telegramWrapperRef.current.appendChild(scriptElement);
  }, []);

  useEffect(() => {
    setId(searchParams.get("id"));
    setFirstName(searchParams.get("first_name"));
    setLastName(searchParams.get("last_name"));
  }, [searchParams]);

  return (
    <>
            <p className="read-the-docs mb-5">
        Click on the Vite and React logos to learn more
      </p>
      <div
        className="telegram-login-widget flex justify-center mb-3"
        ref={telegramWrapperRef}
      ></div>
      {id || firstName || lastName ? (
        <Card className="max-w-sm">
          <h5 className="text-xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
            Data from Telegram redirecting
          </h5>
          <p className="font-normal text-left text-gray-700 dark:text-gray-400">
            <span className="font-bold">ID: </span> {id ? id : "-"}
          </p>
          <p className="font-normal text-left text-gray-700 dark:text-gray-400">
            <span className="font-bold">First name: </span>
            {firstName ? firstName : "-"}
          </p>
          <p className="font-normal text-left text-gray-700 dark:text-gray-400">
            <span className="font-bold">Last name: </span>
            {lastName ? lastName : "-"}
          </p>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
