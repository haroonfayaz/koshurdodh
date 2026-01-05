import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What are your delivery hours?",
    answer:
      "We deliver fresh milk daily between 6:00 AM to 8:00 AM. Our delivery team ensures your milk reaches you fresh every morning.",
  },
  {
    question: "Do you deliver on Sundays and holidays?",
    answer:
      "Yes, we deliver 7 days a week including Sundays and holidays. We understand that fresh milk is a daily necessity for families.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can place orders through WhatsApp at +91 6005141549, call us directly, or use our contact form. We also accept subscription orders for regular customers.",
  },
  {
    question: "What areas do you cover in Srinagar?",
    answer:
      "We currently deliver to 15+ areas including Lal Chowk, Jawahar Nagar, Rajbagh, Bemina, Hyderpora, and many more. Contact us to check if we deliver to your area.",
  },
  {
    question: "Is your milk tested for quality?",
    answer:
      "Absolutely! Our milk undergoes rigorous quality testing including fat content, protein analysis, and contamination checks. We maintain the highest hygiene standards.",
  },
  {
    question: "Do you offer subscription services?",
    answer:
      "Yes, we offer flexible weekly and monthly subscription plans with advance payment discounts. You can pause or resume your subscription anytime.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash on delivery, UPI payments, bank transfers, and advance payments for subscriptions. Payment is flexible and convenient.",
  },
  {
    question: "Can I change my delivery quantity?",
    answer:
      "Yes, you can modify your daily quantity by contacting us via WhatsApp or phone. We recommend informing us a day in advance for better service.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ py: 10, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 3,
            color: "primary.main",
            fontWeight: 600,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            mb: 8,
            color: "text.secondary",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          Find answers to common questions about our dairy products and services
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8} sx={{ mx: "auto" }}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  mb: 2,
                  borderRadius: "12px !important",
                  "&:before": {
                    display: "none",
                  },
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  "&.Mui-expanded": {
                    boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    "&.Mui-expanded": {
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    },
                    "& .MuiAccordionSummary-content": {
                      margin: "16px 0",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "rgba(46, 125, 50, 0.02)",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    pt: 0,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 2,
            }}
          >
            Still have questions?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: 600,
            }}
          >
            Contact us at +91 6005141549 or Koshurdodh@gmail.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
