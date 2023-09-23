import * as React from "react";
import Editor from '@monaco-editor/react';
import EditorNavbar from "./EditorNavbar";
import QuestionTextRender from "./QuestionTextRender";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ChecklistIcon from '@mui/icons-material/Checklist';

const tescaseStyle = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    fontSize:'18px',
    marginTop:'50px'
}


function generateTestCases(numTestCases) {
    const testCases = [];
  
    for (let i = 1; i <= numTestCases; i++) {
      const testCase = (
        <Typography key={i} sx={tescaseStyle}>
          <ChecklistIcon style={{ color: "green" }} /> TestCase-{i}
        </Typography>
      );
  
      testCases.push(testCase);
    }
  
    return testCases;
  }


const CodeEditor = () => {

    const defaultCode = "#include<bits/stdc++.h> \n using namespace std;\n\n int main(){\n\tcout<<\"Write your code here:\"<<endl;\n\treturn 0;\n}"

    const [codevalue,setCodevalue] = React.useState(defaultCode);
    const [reset,setReset] = React.useState(false);
    const [customTestCaseBox,setCustomTestcaseBox] = React.useState(false);
    const [customTestCase,setCustomTestCase] = React.useState("");
    const [modalopen,setModalOpen] = React.useState(false);
    const handlecodechange = (value,event) =>{
        console.log(value);
        setCodevalue(value);
    }

    const OpenCustomTestCase = ()=>{
        setCustomTestcaseBox(!customTestCaseBox);
    }

    const handleCustomTestcaseChange = (event) =>{
        setCustomTestCase(event.target.value);
    }
    const numTestCases = 26;
    const testCases = generateTestCases(numTestCases);
    const rows = [];
    const numRows = Math.ceil(numTestCases / 6);
    const submitthequestion = (event) => {
        setModalOpen(true);
        // let testCases=50;
        for (let i = 0; i < numRows; i++) {
            console.log("ye log!");
            const row = (
              <Stack key={i} spacing={12} direction="row">
                {/* TestCase-{i} */}
                {testCases.slice(i * 6, (i + 1) * 6)}
              </Stack>
            );
        
            rows.push(row);
        }
    }
    React.useEffect(()=>{
        setCodevalue(defaultCode);
        setReset(false);
    },[reset]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius:3,
      };

    
    
    
    
    const handleClose = () => setModalOpen(false);

    return (
        <>
        <div className="listing-container card-shadow ">
            {/* Question Title */}
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <QuestionTextRender/>
            </div>
            
            {/* code editor */}
            
            <div className="flex-center-center marginBottom" >
                <EditorNavbar setReset={setReset}/>
                <Editor
                    height={"calc(100vh - 50px)"}
                    width="90%"
                    language="cpp"
                    onChange={handlecodechange}
                    theme="vs-dark"
                    value={codevalue}
                    options={{
                        fontSize:"15px"
                    }}
                    className="monaco-editor"
                    wordWrap="on"
                    automaticLayout= "true"
                />

            </div>
            <div className="action-stack">
                <Stack spacing={2} direction="row">
                <FormControlLabel control={<Checkbox />} label="Custom testcases" />
                    <Button variant="contained" color="success" style={{maxWidth: 'auto', maxHeight: '40px', minWidth: '30px', minHeight: '30px',textTransform: 'none'}} onClick={OpenCustomTestCase}>
                        Use example testcases
                    </Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Button variant="outlined" style={{maxWidth: 'auto', maxHeight: '40px', minWidth: '30px', minHeight: '30px',textTransform: 'none'}}>Run</Button>
                    <Button variant="contained"style={{maxWidth: 'auto', maxHeight: '40px', minWidth: '30px', minHeight: '30px',textTransform: 'none'}} onClick={submitthequestion}>Submit</Button>
                    <Modal
                        open={modalopen}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Submission
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <p>
                            Your submission will be reviewed by the judges.
                            </p>
                            {/* #TODO */}
                            {testCases.map((testCase, index) => (
                                <div key={index} style={{ flexBasis: '33.33%' }}>  
                                {testCase}
                                </div>
                            ))}
                        </Typography>
                        </Box>
                    </Modal>
                </Stack>
            </div>
            <div className="customtestcaseinputfiled">
                    {customTestCaseBox ? <>
                    <textarea placeholder="custom testcases" value={customTestCase} className="customtescase" onChange={handleCustomTestcaseChange}></textarea>
                    </> : <></>}
            </div>
        </div>

        </>
    );
};

export default CodeEditor;