import { useRouteError } from "react-router-dom";
import errorImg from "../src/assets/image/funny-404-page.png"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img src={errorImg} width={"100%"} height={"20%"} alt="" />
    </div>
  );
}
