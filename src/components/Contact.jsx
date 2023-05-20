import { useRef } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const contactFormData = useRef();
  const { errors } = formState;
  console.log("errors", errors);
  const handleContactForm = (data) => {
    console.log(data);
    emailjs
      .sendForm(
        "service_yzvc9oe",
        "template_qkzy0bm",
        contactFormData.current,
        "2-q4SBx0d-XIJnAYy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <h1 className="text-gray-600 text-2xl font-bold text-center mt-4">
        Get in touch!
      </h1>
      <form
        className="flex flex-col items-center justify-center gap-4 w-full mt-3"
        noValidate
        onSubmit={handleSubmit(handleContactForm)}
        ref={contactFormData}
      >
        <TextField
          type="text"
          id="fullWidth"
          label="Name"
          error={!!errors?.name}
          helperText={errors?.name?.message}
          variant="outlined"
          className="w-1/2"
          {...register("name", {
            required: {
              value: true,
              message: "Name is required",
            },
          })}
        />
        <TextField
          type="email"
          id="fullWidth"
          error={!!errors?.email}
          helperText={errors?.email?.message}
          label="Email"
          variant="outlined"
          className="w-1/2"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email format is not valid",
            },
          })}
        />
        <TextField
          type="text"
          label="Message"
          error={!!errors?.message}
          helperText={errors?.message?.message}
          minRows={5}
          multiline
          className="w-1/2"
          {...register("message", {
            required: {
              value: true,
              message: "Message is required",
            },
          })}
        />
        <div className="w-1/2 flex gap-6 mb-10">
          <Button
            onClick={() => reset()}
            variant="outlined"
            startIcon={<DeleteIcon />}
            color="inherit"
          >
            Clear
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            endIcon={<SendIcon />}
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </>
  );
};

export default Contact;
