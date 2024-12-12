import express from "express";
import cors from "cors";
// import { connectDB } from "./db/connectDB.js";


const corsOptions = {
    origin: "http://localhost:3000",  // Frontend URL
    credentials: true,               // Allow cookies and authentication credentials
};
const app = express();
const PORT = 5000;

app.use(cors());


const taskLogs = [
    { title: "Request Ticket", contract: "Contract xyz", date: "10th August 12:00", completed: true },
    { title: "Request Ticket", contract: "Contract xyz", date: "11th August 13:00", completed: false },
    { title: "Submit Ticket", contract: "Contract xyz", date: "12th August 14:00", completed: true },
    { title: "Request Ticket", contract: "Contract xyz", date: "13th August 15:00", completed: false },
    { title: "Submit Ticket", contract: "Contract xyz", date: "14th August 16:00", completed: false },
];

const months = [
    {
      month: "January 2024",
      value: Math.floor(Math.random() * 5) + 1,
    },
    {
      month: "January 2024",
      value: Math.floor(Math.random() * 5) + 1,
    },
    {
      month: "January 2024",
      value: Math.floor(Math.random() * 5) + 1,
    },
    {
      month: "January 2024",
      value: Math.floor(Math.random() * 5) + 1,
    },
    {
      month: "January 2024",
      value: Math.floor(Math.random() * 5) + 1,
    },
  ];

  const data = [
    {
      id: 1,
      name: "Contract XYZ1",
      status: "Review",
      assigned: ["Ajay Kumar", "Jay kumar"],
      uploaded: "1 min ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
    },
    {
      id: 2,
      name: "Contract XYZ2",
      status: "Signatured",
      assigned: ["Ajay Kumar", "Jay kumar"],
      uploaded: "1 min ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
      signature: "13th Sept"
    },
    {
      id: 3,
      name: "Contract XYZ3",
      status: "Review",
      assigned: ["Ajay Kumar"],
      uploaded: "3 day ago",
      activity: "Send for signature",
      lastUpdated: "7 min ago",
    },
    {
      id: 4,
      name: "Contract XYZ4",
      status: "Signatured",
      assigned: ["Ajay Kumar"],
      uploaded: "3 day ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
      signature: "13th Sept"
    },
    {
      id: 5,
      name: "Contract XYZ5",
      status: "Review",
      assigned: ["Ajay Kumar"],
      uploaded: "3 day ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
    },
    {
      id: 6,
      name: "Contract XYZ6",
      status: "Signatured",
      assigned: ["Ajay Kumar", "Jay kumar"],
      uploaded: "3 day ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
      signature: "13th Sept"
    },
    {
      id: 7,
      name: "Contract XYZ7",
      status: "Review",
      assigned: ["Ajay Kumar", "Jay kumar"],
      uploaded: "3 day ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
    },
    {
      id: 8,
      name: "Contract XYZ8",
      status: "Signatured",
      assigned: ["Ajay Kumar", "Jay kumar"],
      uploaded: "3 day ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
      signature: "13th Sept"
    },
    {
      id: 9,
      name: "Contract XYZ9",
      status: "Review",
      assigned: ["Ajay Kumar", "Jay kumar"],
      uploaded: "3 day ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
    },
    {
      id: 10,
      name: "Contract XYZ10",
      status: "Signatured",
      assigned: ["Ajay Kumar", "Jay kumar"],
      uploaded: "3 day ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
      signature: "13th Sept"
    },
  ];

app.get("/api/tasklogs", (req, res) => {
    res.json(taskLogs)
});

app.get("/api/taskmonth", (req, res) => {
    res.json(months)
});

app.get("/api/taskdata", (req, res) => {
    res.json(data)
});


app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});