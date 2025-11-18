#!/bin/bash

echo "build:"
npm start

# Ask the user for the commit message
echo "Please enter your commit message:"
read commit_message

# Commit changes
git add .
git commit -m "$commit_message"

# Ask the user for the tag name
echo "Please enter the tag name:"
read tag_name

# Create a new tag
git tag -a $tag_name -m "$commit_message"


# Function to retrieve branch list
get_branch_list() {
    git branch --list --format="%(refname:short)"
}

# Prompt user to select a branch using fzf
selected_branch=$(get_branch_list | fzf --prompt="Select branch to push:")

# Validate selected branch
if [ -z "$selected_branch" ]; then
    echo "No branch selected. Aborting."
    exit 1
fi

# Confirm the selected branch
echo "Pushing branch '$selected_branch' and its tags to origin..."

# Push the selected branch and tags to origin
git push origin "$selected_branch"
git push origin "$selected_branch" --tags

echo "Push complete."
