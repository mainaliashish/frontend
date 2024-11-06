import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-1/2 mt-10">
      <div className="text-center">
        <h1 className="text-2xl text-stone-900 font-semibold my-4">
          Something went wrong 😢
        </h1>
        <p className="my-4 font-semibold">
          Opss, the page you requested could not be found.
        </p>
        <Button type="small" onClick={() => navigate("home")}>
          Go to Home
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
