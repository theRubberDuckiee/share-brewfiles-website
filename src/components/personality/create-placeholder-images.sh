#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Create empty .png files for each developer type
for type in retro traditionalist mariekondo trailblazer minimalist architect hoarder pragmatist explorer innovator; do
  echo "Creating placeholder for $type"
  touch "public/images/$type.png"
done

echo "All placeholder images created successfully in public/images directory!"

