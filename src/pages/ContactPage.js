import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  CircularProgress,
  Container,
  Paper,
  Stack,
} from "@mui/material";
import { Form, Field } from "react-final-form";
import backgroundImage1 from "../assets/images/dodhpather.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { composeValidators, validateEmail, validateRequired } from "../Utils";
import emailjs from "emailjs-com";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const contactInfo = [
  {
    icon: <LocationOnIcon />,
    title: "Address",
    content: "Ninety feet road, near Moomin steels,Illahibagh, Srinagar-190020",
  },
  {
    icon: <EmailIcon />,
    title: "Email",
    content: "Koshurdodh@gmail.com",
  },
  {
    icon: <PhoneIcon />,
    title: "Phone",
    content: "+91 6005141549",
  },
];

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    height: "56px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "& fieldset": {
      borderColor: "rgba(0, 0, 0, 0.23)",
    },
  },
  "& .MuiInputLabel-root": {
    transform: "translate(14px, 16px) scale(1)",
    "&.Mui-focused, &.MuiFormLabel-filled": {
      transform: "translate(14px, -9px) scale(0.75)",
    },
  },
}));

const StyledPhoneInput = styled(Box)(({ theme }) => ({
  "& .react-tel-input": {
    "& .form-control": {
      width: "100%",
      height: "56px",
      fontSize: "16px",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      border: "1px solid rgba(0, 0, 0, 0.23)",
      borderRadius: "4px",
      "&:hover": {
        borderColor: theme.palette.primary.main,
      },
      "&:focus": {
        borderColor: theme.palette.primary.main,
        boxShadow: `0 0 0 2px ${theme.palette.primary.main}25`,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      },
    },
    "& .flag-dropdown": {
      backgroundColor: "transparent",
      border: "none",
      "&.open": {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      },
    },
  },
}));

const ContactPage = () => {
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const onSubmit = async (values, form) => {
    const serviceID = "service_g01adi5";
    const templateID = "template_vfutnzh";
    const publicKey = "n1ewU2J-gE-fbLxgJ";

    const templateParams = {
      to_name: "Koshur dodh",
      from_name: `${values.firstName} ${values.lastName}`,
      email: values.email,
      phone: values.phoneNumber,
      message: values.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setNotification({
          open: true,
          message:
            "We have received your message, we will get back to you soon.",
          severity: "success",
        });
        form.restart();
      },
      (error) => {
        console.error("FAILED...", error);
        setNotification({
          open: true,
          message: "Something went wrong! Please try again",
          severity: "error",
        });
      }
    );
  };
  const handleClose = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${backgroundImage1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            color: "white",
            m: 5,
            fontWeight: 700,
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            fontFamily: "Matemasie",
          }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Information Section */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderRadius: "8px",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  mb: 4,
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                  pb: 2,
                }}
              >
                Contact Information
              </Typography>

              <Stack spacing={4}>
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "primary.main",
                        borderRadius: "8px",
                        p: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {React.cloneElement(info.icon, {
                        sx: { color: "#fff", fontSize: 24 },
                      })}
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: "primary.main",
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mt: 0.5,
                        }}
                      >
                        {info.content}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>

          {/* Form Section */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderRadius: "8px",
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  mb: 4,
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                  pb: 2,
                }}
              >
                Send us a Message
              </Typography>

              <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, submitting }) => (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          name="firstName"
                          validate={validateRequired}
                          render={({ input, meta }) => (
                            <StyledTextField
                              {...input}
                              fullWidth
                              label="First Name"
                              variant="outlined"
                              error={meta.touched && !!meta.error}
                              helperText={meta.touched && meta.error}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          name="lastName"
                          validate={validateRequired}
                          render={({ input, meta }) => (
                            <StyledTextField
                              {...input}
                              fullWidth
                              label="Last Name"
                              variant="outlined"
                              error={meta.touched && !!meta.error}
                              helperText={meta.touched && meta.error}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          name="email"
                          validate={composeValidators(
                            validateRequired,
                            validateEmail
                          )}
                          render={({ input, meta }) => (
                            <StyledTextField
                              {...input}
                              fullWidth
                              label="Email"
                              variant="outlined"
                              error={meta.touched && !!meta.error}
                              helperText={meta.touched && meta.error}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <StyledPhoneInput>
                          <Field
                            name="phoneNumber"
                            validate={validateRequired}
                            render={({ input }) => (
                              <PhoneInput
                                {...input}
                                country={"in"}
                                inputStyle={{
                                  width: "100%",
                                  height: "56px",
                                }}
                                containerStyle={{
                                  width: "100%",
                                }}
                              />
                            )}
                          />
                        </StyledPhoneInput>
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          name="message"
                          validate={validateRequired}
                          render={({ input, meta }) => (
                            <TextField
                              {...input}
                              fullWidth
                              label="Message"
                              variant="outlined"
                              multiline
                              rows={4}
                              error={meta.touched && !!meta.error}
                              helperText={meta.touched && meta.error}
                              sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                              }}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          disabled={submitting}
                          sx={{
                            mt: 2,
                            height: "56px",
                            fontSize: "16px",
                            textTransform: "none",
                            fontWeight: 600,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            "&:hover": {
                              boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                            },
                          }}
                          endIcon={
                            submitting ? (
                              <CircularProgress size={24} color="inherit" />
                            ) : (
                              <SendIcon />
                            )
                          }
                        >
                          {submitting ? "Sending..." : "Send Message"}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Dialog
        open={notification.open}
        onClose={handleClose}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle
          sx={{
            backgroundColor:
              notification.severity === "success"
                ? "success.main"
                : "error.main",
            color: "#fff",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {notification.severity === "success" ? "Success" : "Error"}
        </DialogTitle>
        <DialogContent
          sx={{
            py: 2,
            textAlign: "center",
            fontSize: "18px",
            fontWeight: 500,
            color: "text.primary",
            mt: "20px",
          }}
        >
          {notification.message}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button variant="contained" onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactPage;
