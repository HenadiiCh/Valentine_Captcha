$dest = "valentine-captcha/public/images"
if (!(Test-Path $dest)) {
    New-Item -ItemType Directory -Force -Path $dest
}

$files = Get-ChildItem "photo_*.jpg" | Sort-Object { 
    if ($_.Name -match 'photo_(\d+)_') {
        [int]$matches[1]
    } else {
        999
    }
}

$i = 1
foreach ($file in $files) {
    if ($i -le 19) {
        # Check if the file number matches the loop index to ensure correct mapping
        # Or just blindly rename 1st sorted to 1.jpg?
        # The user said "show photo 1 to 18", then "photo 19".
        # Assuming photo_1 is 1st, photo_2 is 2nd...
        # My sort logic ensures that.
        
        Copy-Item $file.FullName "$dest/$i.jpg"
        Write-Host "Copied $($file.Name) to $dest/$i.jpg"
    }
    $i++
}
