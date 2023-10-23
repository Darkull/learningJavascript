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
`sudo ln -s /usr/local/bin/project_initiator.sh /usr/local/bin/newproject
`

This creates a symbolic link named newproject. You can replace newproject with any desired command. This will be the command to run the script, for example, sudo newproject <folder name>.

`sudo chmod +x /usr/local/bin/project_initiator.sh
`
This command makes the script executable.

Now, you should be able to run the newproject command from anywhere using sudo newproject <folder_name>.
