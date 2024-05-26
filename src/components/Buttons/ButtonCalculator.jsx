import { Button } from "@mui/material";

function ButtonCalculator (props) {
    const {onClick, children} = props

    const getButtonColor = () => {
      return children.match(/[0-9]/) ? '#292939' : '#2979FF';
    };
  
    const getOperatorButtonColor = () => {
      return children.match(/[0-9]/) ? '#3A3A3A' : '#1565C0';
    };
  
    return (
        <div>
            <Button
              variant="contained"
              onClick={onClick}
              sx={{
                width: '100%',
                backgroundColor: getButtonColor(),
                color: '#FFF',
                '&:hover': {
                  backgroundColor: getOperatorButtonColor(),
                }
              }}>
            
            {children}
            </Button>
        </div>
    );
};

export default ButtonCalculator;