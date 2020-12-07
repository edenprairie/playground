youtube-dl --dump-json --flat-playlist "https://youtu.be/ryrlfsFbtVA?list=PLmOn9nNkQxJFWlwItS-iI3C-4jeARUNjq" \
  | jq -r '"youtube-dl https://youtu.be/\(.id) #\(.title)"'
