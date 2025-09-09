# Deploy Angular project to GitHub Pages
Write-Host "Deploy script running..."
ng build --output-path docs --base-href /Portfolio/
git add .
git commit -m "Deploy Angular project"
git push
Write-Host "Deployment complete!"
