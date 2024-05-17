import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Provide Job Title"],
        minLength: [2, "Job title must contain atleast 3 characters !"],
        maxLength: [50, "Job title connot exceed 50 characters !"],
    },
    description: {
        type: String,
        required: [true, "Please provide Job Description."],
        minLength: [50, "Job Description must contain atleast 50 characters !"],
        maxLength: [500, "Job Description connot exceed 500 characters !"],
    },
    category:{
        type: String,
        required: [true, "Enter Category of Job."],
    },
    country: {
        type: String,
        required: [true, "Enter Job country."],
    },
    city: {
        type: String,
        required: [true, "Enter Job city."],
    },
    location: {
        type: String,
        required: [true, "Please provide exact job location !"],
        minLength: [20, "Job Location must contain atleast 20 characters !"],
    },
    salaryPackage:{
        type: Number,
        minLength: [4, "Salary package must contain atleast 4 characters !"],
        maxLength: [12, "Salary package must cannot exceed 12 characters !"],
    },
    expired: {
        type: Boolean,
        default: false,
    },
    postedOn: {
        type: Date,
        default: Date.now,
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Job = mongoose.model("Job", jobSchema);