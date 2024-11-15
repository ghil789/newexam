import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("please fill out all fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/Signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20 ">
      <div className="flex p-2 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 ">
        <div className="flex-1">
          <h1>
            <a href="/" className="font-bold dark:text-white text-3xl">
              {" "}
              <span className="px-2 py-1 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 rounded-lg text-white">
                Exam Bank
              </span>
              Computer Scince{" "}
            </a>{" "}
          </h1>
          <p className="text-sm mt-5">
            On this website comuter scince students can find exam question for
            the whole courses and test themself by exersice the questions given.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="div">
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="div">
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToBlue"
              type="submit"
              disable={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3"> loading ...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span> Dont Have an account?</span>
            <a href="/signup" className="text-blue-500">
              Sign Up
            </a>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
