import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import homeReducer from "./homeSlice";
import aboutReducer from "./aboutSlice";
import skillsReducer from "./skillsSlice";
import experienceReducer from "./experienceSlice";
import projectsReducer from "./projectsSlice"; 

export const store = configureStore({
  reducer: {
    nav: navReducer,
    home: homeReducer,
    about: aboutReducer,
    skills: skillsReducer,
    experience: experienceReducer,
    projects: projectsReducer, 
  },
});
