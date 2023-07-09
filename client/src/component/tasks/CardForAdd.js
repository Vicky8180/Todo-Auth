import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import axios from "axios"
import DialogTitle from "@mui/material/DialogTitle";
import "./All.css";
import moment from "moment"

import { Box } from "@mui/material";


import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const CardForAdd = React.forwardRef((props, ref2) => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState();
    const [targetdate, setTarget] = React.useState();

    const [discription, setDis] = React.useState();


    React.useImperativeHandle(ref2, () => ({
        log() {
            setOpen(true);
        },
    }));

    const handleClose = () => {
        setOpen(false);
    }; 
    const time=targetdate;
    const DATE= new Date(time);
    const realDate= moment(DATE).format('MMMM Do YYYY, h:mm:ss a');
// console.log(DATE)
console.log(realDate)





    const TaskSave= async()=>{

  const newData={
    targetdate,
    title,discription
  }


        const config = {
            headers: {
              "Content-Type": "application/json"
              },
              withCredentials: true
            }
         try {
               await axios.post("http://localhost:8000/task/save", newData, config )


  console.log("task got added")

     setOpen(false);
         } catch (error) {
            

    console.log("task did not added ")
            setOpen(false);
         }


    }





    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <div className="newDialog">
                    <DialogTitle>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Title"
                            type="email"
                            fullWidth
                            variant="standard"
                            onChange={(e)=>{setTitle(e.target.value)}}
                        />
                    </DialogTitle>

                    <Box
                        component="form"
                        sx={{
                            "& .MuiTextField-root": { m: 1, width: "25ch" },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Discription"
                            multiline
                            maxRows={8}
                            onChange={(e)=>{setDis(e.target.value)}}
                            //   maxCols={5}
                            InputProps={{ sx: { height: 290 } }}
                            style={{
                                width: 460,
                                marginLeft: 20,
                            }}
                        />
                    </Box>
                    <div className="dataAndtimePicker">
                        <LocalizationProvider  dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={[
                                    "DatePicker",
                                    "DateTimePicker",
                                    "TimePicker",
                                    "DateRangePicker",
                                ]}
                            >
                                <DemoItem>
                                    <DateTimePicker
                                        // defaultValue={yesterday}
                                        label="Target Date"
                                        disablePast
                                        value={targetdate}
                                        onChange={value => setTarget(value)}
                                        renderInput={(params) => <input {...params} />}
                                        views={["year", "month", "day", "hours", "minutes"]}
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </div>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={TaskSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});

export default CardForAdd;
