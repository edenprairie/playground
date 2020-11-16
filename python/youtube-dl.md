## Install for all Unix users (Linux, OS X, etc)
```
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl
```

Download from https://github.com/ytdl-org/youtube-dl
run following command 
```
youtube-dl https://youtube.com/videoid
youtube-dl.exe -F https://www.youtube.com/watch?v=o3XplpaYrqQ


[youtube] o3XplpaYrqQ: Downloading webpage
[info] Available formats for o3XplpaYrqQ:
format code  extension  resolution note
249          webm       audio only tiny   57k , opus @ 50k (48000Hz), 1.46MiB
250          webm       audio only tiny   74k , opus @ 70k (48000Hz), 1.93MiB
140          m4a        audio only tiny  130k , m4a_dash container, mp4a.40.2@128k (44100Hz), 3.64MiB
251          webm       audio only tiny  142k , opus @160k (48000Hz), 3.77MiB
278          webm       256x144    144p   99k , webm container, vp9, 25fps, video only, 2.58MiB
160          mp4        256x144    144p  110k , avc1.4d400c, 25fps, video only, 2.05MiB
133          mp4        426x240    240p  196k , avc1.4d4015, 25fps, video only, 3.55MiB
242          webm       426x240    240p  223k , vp9, 25fps, video only, 4.87MiB
243          webm       640x360    360p  408k , vp9, 25fps, video only, 8.64MiB
134          mp4        640x360    360p  462k , avc1.4d401e, 25fps, video only, 8.29MiB
244          webm       854x480    480p  747k , vp9, 25fps, video only, 14.23MiB
135          mp4        854x480    480p  849k , avc1.4d401e, 25fps, video only, 15.54MiB
247          webm       1280x720   720p 1469k , vp9, 25fps, video only, 27.21MiB
136          mp4        1280x720   720p 1493k , avc1.4d401f, 25fps, video only, 27.54MiB
248          webm       1920x1080  1080p 2485k , vp9, 25fps, video only, 46.40MiB
137          mp4        1920x1080  1080p 2556k , avc1.640028, 25fps, video only, 48.63MiB
18           mp4        640x360    360p  573k , avc1.42001E, 25fps, mp4a.40.2@ 96k (44100Hz), 16.12MiB (best)

youtube-dl.exe -f 137 https://www.youtube.com/watch?v=o3XplpaYrqQ
```
If you just need to download audio to mp3 format:
```
youtube-dl -x --audio-format mp3 https://www.youtube.com/watch?v=jwD4AEVBL6Q
```
more details refer here https://www.tecmint.com/download-mp3-song-from-youtube-videos/

To install it right away for all UNIX users (Linux, macOS, etc.), type:

    sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
    sudo chmod a+rx /usr/local/bin/youtube-dl

If you do not have curl, you can alternatively use a recent wget:

    sudo wget https://yt-dl.org/downloads/latest/youtube-dl -O /usr/local/bin/youtube-dl
    sudo chmod a+rx /usr/local/bin/youtube-dl

Windows users can [download an .exe file](https://yt-dl.org/latest/youtube-dl.exe) and place it in any location on their [PATH](https://en.wikipedia.org/wiki/PATH_%28variable%29) except for `%SYSTEMROOT%\System32` (e.g. **do not** put in `C:\Windows\System32`).

You can also use pip:

    sudo -H pip install --upgrade youtube-dl
    
This command will update youtube-dl if you have already installed it. See the [pypi page](https://pypi.python.org/pypi/youtube_dl) for more information.

macOS users can install youtube-dl with [Homebrew](https://brew.sh/):

    brew install youtube-dl

Or with [MacPorts](https://www.macports.org/):

    sudo port install youtube-dl

Alternatively, refer to the [developer instructions](#developer-instructions) for how to check out and work with the git repository. For further options, including PGP signatures, see the [youtube-dl Download Page](https://ytdl-org.github.io/youtube-dl/download.html).
