import React from 'react';
import { 
  Typography, 
  Paper, 
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const FinancialLiteracy = () => {
  const resources = [
    {
      id: 1,
      title: "Business Financial Planning",
      description: "Learn the essentials of financial planning for your business, including budgeting, forecasting, and cash flow management.",
      image: "https://via.placeholder.com/300x200/9c27b0",
      topics: [
        "Creating a business budget",
        "Managing cash flow",
        "Financial forecasting",
        "Reinvesting in your business"
      ]
    },
    {
      id: 2,
      title: "Funding Options for Women Entrepreneurs",
      description: "Discover various funding options specifically available for women-owned businesses, from government grants to private equity.",
      image: "https://via.placeholder.com/300x200/f50057",
      topics: [
        "Government schemes for women entrepreneurs",
        "Microfinance opportunities",
        "Angel investors and venture capital",
        "Crowdfunding strategies"
      ]
    },
    {
      id: 3,
      title: "Digital Financial Tools",
      description: "Master digital tools that can help streamline your financial operations and improve record-keeping.",
      image: "https://via.placeholder.com/300x200/3f51b5",
      topics: [
        "Accounting software for small businesses",
        "Digital payment solutions",
        "Inventory management systems",
        "Financial apps for entrepreneurs"
      ]
    }
  ];

  const faqs = [
    {
      question: "What financial records should I maintain for my small business?",
      answer: "You should maintain income statements, balance sheets, cash flow statements, tax returns, bank statements, receipts and invoices, payroll records, and inventory records. These documents are essential for tax filing, loan applications, and understanding your business's financial health."
    },
    {
      question: "How can I separate my personal and business finances?",
      answer: "Start by opening a separate business bank account and getting a business credit card. Form a legal business entity, pay yourself a salary, track business expenses separately, and work with a financial advisor who specializes in small businesses."
    },
    {
      question: "What are some funding options specifically for women entrepreneurs in India?",
      answer: "There are several options including the Mudra Yojana Scheme (Shishu, Kishor, and Tarun loans), Annapurna Scheme, Stree Shakti Package, Dena Shakti Scheme, and the Bharatiya Mahila Bank Business Loan. Additionally, many private banks and microfinance institutions offer specialized loans for women entrepreneurs."
    },
    {
      question: "How do I create a sustainable financial plan for my business?",
      answer: "Start by setting clear financial goals, create and maintain a detailed budget, track your income and expenses, plan for taxes, build an emergency fund, regularly review and adjust your plan, and consider working with a financial advisor with experience in your industry."
    }
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Financial Literacy Resources
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" sx={{ mb: 4 }}>
        Empowering women entrepreneurs with essential financial knowledge and tools
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {resources.map((resource) => (
          <Grid item xs={12} md={4} key={resource.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={resource.image}
                alt={resource.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {resource.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {resource.description}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="subtitle2" gutterBottom>
                  Topics covered:
                </Typography>
                <List dense disablePadding>
                  {resource.topics.map((topic, index) => (
                    <ListItem key={index} disablePadding sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={topic} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Financial FAQ for Women Entrepreneurs
        </Typography>
        
        {faqs.map((faq, index) => (
          <Accordion key={index} disableGutters elevation={0} sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ py: 1.5 }}>
              <Typography variant="subtitle1">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>

      <Box sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Need personalized financial guidance?
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Connect with a mentor who specializes in financial management for women-led businesses.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Find a Financial Mentor
        </Button>
      </Box>
    </div>
  );
};

export default FinancialLiteracy;