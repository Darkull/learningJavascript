This Script is created and Developed by Darkul
# Project Initiator Script
The Project Initiator Script is a Bash script designed to streamline the process of setting up new web projects on WSL Ubuntu. With a single command, you can create a standardized project folder complete with essential files and directories, enabling you to kickstart your development process within seconds.

## Features
- Automation: The script automates the creation of project folders, saving you time and effort.
- Standardized Structure: Every project created with the script follows a predefined template structure, ensuring consistency across your work.
- Quick Setup: Simply use the command sudo newproject <folder name> to initiate a new project with the specified folder name.

## Installation
To install the Project Initiator Script on WSL2 or Linux, follow these steps:

1. Download the WSL folder:
    - Clone or download the WSL folder from this repository.

2. Copy files to /usr/local/bin:
    - Copy the bash_script_folder and project_initiator.sh files
    to the /usr/local/bin directory.
3. Execute the following commands in your Ubuntu shell:

- `sudo ln -s /usr/local/bin/project_initiator.sh /usr/local/bin/newproject
`
This creates a symbolic link named newproject. You can replace newproject with any desired command. This will be the command to run the script, for example, sudo newproject <folder name>.



- `sudo chmod +x /usr/local/bin/project_initiator.sh`
This command makes the script executable.

Now, you should be able to run the newproject command from anywhere using sudo newproject <folder_name>.

## Template Structure
The generated project folder includes the following files and directories:

- License.md: A file to specify the licensing terms for your project.
- README.md: A readme file where you can document essential information about your project.
- font: A directory to store font files.
- img: A directory for images and graphics.
- index.html: The main HTML file for your project.
- main.js: The main JavaScript file for your project.
- style.css: The main stylesheet for your project.

## Usage
1. Open WSL Ubuntu.
2. Navigate to the directory where you want to create the new project.
3. Run the following command:
`sudo newproject <folder name>
`
Replace <folder name> with the desired name for your project folder.


#Contributing
Feel free to contribute to the improvement of this script. If you encounter any issues or have suggestions, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the License.md file for details.

Start your web projects efficiently with the Project Initiator Script! Happy coding!

#This Script is created and Developed by Darkul
