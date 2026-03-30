Get-ChildItem -Filter *.html | ForEach-Object {
    (Get-Content -Raw $_) -replace '<!--[\s\S]*?-->', '' | Set-Content $_
}
Get-ChildItem -Filter *.css | ForEach-Object {
    (Get-Content -Raw $_) -replace '/\*[\s\S]*?\*/', '' | Set-Content $_
}
Get-ChildItem -Filter *.js | ForEach-Object {
    (Get-Content -Raw $_) -replace '/\*[\s\S]*?\*/|//.*', '' | Set-Content $_
}
