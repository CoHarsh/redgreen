import * as React from "react";
import Editor from "@monaco-editor/react";
import EditorNavbar from "./EditorNavbar";
import QuestionTextRender from "./QuestionTextRender";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ChecklistIcon from "@mui/icons-material/Checklist";
import CircularProgress from "@mui/material/CircularProgress";
import OutputBox from "./OutputBox";

const tescaseStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "18px",
  marginTop: "50px",
};

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
  const defaultCode =
    '#include<bits/stdc++.h> \n using namespace std;\n\n int main(){\n\tcout<<"Write your code here:"<<endl;\n\treturn 0;\n}';

  const [codevalue, setCodevalue] = React.useState(defaultCode);
  const [reset, setReset] = React.useState(false);
  const [customTestCaseBox, setCustomTestcaseBox] = React.useState(false);
  const [customTestCase, setCustomTestCase] = React.useState("");
  const [fontSize, setFontSize] = React.useState(15);
  const [language, setLanguage] = React.useState("cpp");
  const [modalopen, setModalOpen] = React.useState(false);
  const [runoutput, setRunOutput] = React.useState("");
  const [outputerror, setOutputError] = React.useState(false);
  const [loaderOn,setLoaderOn] = React.useState(false);
  const [timestamp,setTimeStamp] = React.useState(false);
  const handlecodechange = (value, event) => {
    setCodevalue(value);
  };

  const OpenCustomTestCase = (event) => {
    console.log(event);
    setCustomTestcaseBox(!customTestCaseBox);
  };

  const handleCustomTestcaseChange = (event) => {
    setCustomTestCase(event.target.value);
  };

  const HandleRunTheCode = async (event) => {
    setCustomTestcaseBox(true);
    setLoaderOn(true);
    setRunOutput("");
    setOutputError("");
    setTimeStamp(false);
    fetch("http://localhost:8001/api/compile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: JSON.stringify(codevalue),
        input: JSON.stringify(customTestCase),
        language: language,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoaderOn(false);
        res.data = JSON.parse(res.data);
        if (res.data.error === "") {
          setRunOutput(res.data.output);
          console.log(res.data);
          // console.log(JSON.parse(res.data.output));
          // setRunOutput(res.data.output);
          setTimeStamp(res.data.runtime);
          setOutputError(false);
        } else if (res.data.error !== "") {
          setRunOutput(res.data.error);
          setOutputError(true);
        } else {
          setRunOutput("Run Again!");
          setOutputError(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const numTestCases = 26;
  const testCases = generateTestCases(numTestCases);
  const rows = [];
  const numRows = Math.ceil(numTestCases / 6);
  const submitthequestion = (event) => {
    setModalOpen(true);
    for (let i = 0; i < numRows; i++) {
      const row = (
        <Stack key={i} spacing={12} direction="row">
          {testCases.slice(i * 6, (i + 1) * 6)}
        </Stack>
      );

      rows.push(row);
    }
  };
  React.useEffect(() => {
    setCodevalue(defaultCode);
    setReset(false);
  }, [reset]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
  };

  React.useEffect(() => {
    console.table([fontSize, language]);
  }, [fontSize, language]);

  const handleClose = () => setModalOpen(false);

  return (
    <>
      <div className="listing-container card-shadow ">
        {/* Question Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <QuestionTextRender />
        </div>

        {/* code editor */}

        <div className="flex-center-center marginBottom">
          <EditorNavbar
            setReset={setReset}
            fontSize={fontSize}
            setFontSize={setFontSize}
            language={language}
            setLanguage={setLanguage}
          />
          <Editor
            height={"calc(100vh - 150px)"}
            width="90%"
            language={language}
            onChange={handlecodechange}
            theme="vs-dark"
            value={codevalue}
            options={{
              fontSize: fontSize,
            }}
            className="monaco-editor"
            wordWrap="on"
            automaticLayout="true"
          />
        </div>
        <div className="action-stack">
          <Stack spacing={2} direction="row">
            <FormControlLabel
              control={<Checkbox checked={customTestCaseBox} />}
              label="Custom testcases"
              onClick={OpenCustomTestCase}
            />
            <Button
              variant="contained"
              color="success"
              style={{
                maxWidth: "auto",
                maxHeight: "40px",
                minWidth: "30px",
                minHeight: "30px",
                textTransform: "none",
              }}
            >
              Use example testcases
            </Button>
          </Stack>
          <Stack spacing={2} direction="row">
            <Button
              variant="outlined"
              style={{
                maxWidth: "auto",
                maxHeight: "40px",
                minWidth: "30px",
                minHeight: "30px",
                textTransform: "none",
              }}
              onClick={HandleRunTheCode}
            >
              Run
            </Button>
            <Button
              variant="contained"
              style={{
                maxWidth: "auto",
                maxHeight: "40px",
                minWidth: "30px",
                minHeight: "30px",
                textTransform: "none",
              }}
              onClick={submitthequestion}
            >
              Submit
            </Button>
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
                  <p>Your submission will be reviewed by the judges.</p>
                  {/* #TODO */}
                  {testCases.map((testCase, index) => (
                    <div key={index} style={{ flexBasis: "33.33%" }}>
                      {testCase}
                    </div>
                  ))}
                </Typography>
              </Box>
            </Modal>
          </Stack>
        </div>
        <div className="customtestcaseinputfiled">
          {customTestCaseBox ? (
            <>
              <textarea
                placeholder="custom testcases"
                value={customTestCase}
                className="customtescase"
                onChange={handleCustomTestcaseChange}
                id="customtestcaseinput"
              ></textarea>
              {runoutput !== "" ? 
              <div className="output-container">
                <h2
                  className="subtitle-font-12 font-bold"
                  style={{ marginLeft: "3.5rem" }}
                >
                  Output status :{" "}
                  {outputerror == true ? (
                    <span style={{ color: "red" }}>Compilation Error</span>
                  ) : (
                    <span style={{ color: "green" }}>Success</span>
                  )}{" "}
                </h2>
                <OutputBox input={customTestCase} output={runoutput} runtime={timestamp} />
              </div> : loaderOn ? <div className="flex-center-center margin-top-2rem"><CircularProgress/></div> : null}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default CodeEditor;
