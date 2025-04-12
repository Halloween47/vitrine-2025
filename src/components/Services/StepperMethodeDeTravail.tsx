import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Brief rapide (appel ou formulaire)',
    description: `Texte qui explique un peu plus en détail cette étape précise.`,
  },
  {
    label: 'Proposition visuelle + validation',
    description:
      'Texte qui explique un peu plus en détail cette étape précise.',
  },
  {
    label: 'Développement (avec points d\'étapes)',
    description: `Texte qui explique un peu plus en détail cette étape précise.`,
  },
  {
    label: 'Livraison & accompagnement',
    description: `Texte qui explique un peu plus en détail cette étape précise.`,
  },
];

export default function StepperMethodeDeTravail() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400, backgroundColor: "#e1d8d3", p: 3 }}>
      
      <p className='text-base font-semibold text-black mb-2'>Ma méthode de travail</p>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Dernière étape</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography className='text-black'>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                  className='text-sm'
                >
                  {index === steps.length - 1 ? 'Et voilà' : 'ET Ensuite ...'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Retour
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 1, textAlign: "center" }}>
          <Typography>Et voilà comment je procède</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Recommencer la procédure
          </Button>
        </Paper>
      )}
    </Box>
  );
}