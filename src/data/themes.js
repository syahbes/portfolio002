import { createTheme } from "@mui/material";

export const MyLightTheme = createTheme({
    palette: {
      background: {
        default: "#f2f2f4", //page background
        paper: "#fdfdff", //card's background
      },
      text: {
        primary: "#000" //black
      },
      primary: {
        main:"#1565c0", //buttons and text of navbar
        light:"#fdf3d9" , //navbar & footer bg
        dark: "#f0ab00" , //contrast for exe, button
        // contrastText: "#01579b"
      },
      //for the form outline
      error: {
        main:"#1565c0", //buttons and text of navbar
        light:"#fdf3d9" , //navbar & footer bg
        dark: "#f0ab00" , //contrast for exe, button
        // contrastText: "#01579b"
      }
      
    },
  });


  
export const MyDarkTheme = createTheme({
    palette: {
      background: {
        default: "#000", //page background
        paper: "#121212", //card's background
      },
      text: {
        primary: "#70b5f9",
        secondary:"#70b5f9", //text of contact form placeholder
        // disabled: "#70b5f9",        
      },
      
      primary: {
        main:"#D084EA", //buttons bg and navbar text
        light:"#1d2226" , //navbar and footer bd
        dark: "#ffB483" , //hover button 
      },
      error: {
        main:"#D084EA", //buttons bg and navbar text
        light:"#1d2226" , //navbar and footer bd
        dark: "#ffB483" , //hover button 

      }
      

    },
  });


  