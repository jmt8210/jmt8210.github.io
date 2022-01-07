# jmt8210.github.io

## Structure

This repository contains code for 

```bash
.
├── justin_site
│   ├── node_modules        # Dependencies for Node.js
│   ├── public              # HTML for React
│   └── src                 # React source code
├── public                  
│   # Holds code for static Github Pages hosted site
│   # This folder will only be accessed when viewing jmt8210.github.io 
│   ├── javascript          # Javascript to support pages on portfolio
│   ├── media               # 
│   └── *.html              # HTML for static site
└── index.html              # Landing Page for Github Pages hosted site
```

## Running Web Server

To run the React site, navigate to the `justin_site/` directory and run `sudo npm start`, providing a password when prompted to allow for listening of http and https requests.