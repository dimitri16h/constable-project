#Requirements

I used Node.js and Node Packet Manager for this project heavily, it runs with the following Dev Dependencies which will need to be installed in order to work on it:

	- gulp - used as a task runner to automate creation of dist and move/convert files
	- gulp-sass - used to convert scss files to css
	- bootstrap - used to assist with styling and css
		- popper.js - bootstrap dependency
		- jquery - bootstrap dependency
	- express - used to deploy to heroku and/or test during development

You can install these files with the node packet manager by navigating to the project directory and typing $ npm install, this will bring all dependencies, including dev dependencies as long as your production environment flag is enabled.