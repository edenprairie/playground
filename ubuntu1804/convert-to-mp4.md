## .WEBM to .MP4
```bash
for FILE in *.webm; do
    echo -e "Processing video '\e[32m$FILE\e[0m'";
    ffmpeg -i "${FILE}" -crf 1 -c:v libx264 "${FILE%.webm}.mp4";
done;
```

