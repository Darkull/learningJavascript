#!/bin/bash

# Retrieve Windows username
windows_username=$(whoami)

# Check if the correct number of arguments is provided
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <new_folder_name>"
  exit 1
fi

new_folder_name="$1"

# Always assume the user wants to copy
choice="y"

# Check if the new folder already exists
if [ -e "$new_folder_name" ]; then
  echo "Error: Folder '$new_folder_name' already exists."
  exit 1
fi

# If the user doesn't want to copy, just create an empty folder
if [ "$choice" != "y" ]; then
  mkdir "$new_folder_name"
  echo "Empty folder '$new_folder_name' created."
else
  # If the user wants to copy, copy the contents from the template folder
  template_folder="/usr/local/bin/bash_script_folder"

  # Debugging line to print the template folder path
#   echo "Checking existence of template folder: $template_folder"

  # Check if the template folder exists
  if [ ! -e "$template_folder" ]; then
    echo "Error: Template folder does not exist."
    exit 1
  fi

  # Create the new folder
  mkdir "$new_folder_name"

  # Copy contents of the template folder to the new folder
  cp -r "$template_folder"/* "$new_folder_name"

  echo "Template contents copied successfully to '$new_folder_name'."
fi
