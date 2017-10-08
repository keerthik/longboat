Welcome to the Longboat!

Created by [@keerthik](https://github.com/keerthik) and [@piazzatron](https://github.com/piazzatron).

# !!IMPORTANT NOTES!!
* The main live branch is 'mainriver', not 'master'. Don't fuck with 'mainriver' unless you intend to deploy live

# Setup
- We use [Jekyll](http://jekyllrb.com/) for the static site. Currently using vanilla css/html/js. Follow jekyllrb install instructions
- We use [npm] for dependency management on the JS side. So install that too
- We deploy our lambda functions using [Apex CLI]
- Install flow (JS static typechecker) globally: `npm install -g flow-bin` 

## Run Locally
Navigate to `./source` and run
```
	$ jekyll serve --watch
```
Use `Ctrl+C` to terminate the local server.

// Deploy your Longboat


# Tech Upgrades
## Front End
When upgrading to involve React, consider [this post](https://medium.com/@allizadrozny/using-webpack-and-react-with-jekyll-cfe137f8a2cc).

# Pages
[Under Construction]
- Housemate check-in/out
	- With added profiles
- Maintenance task-list
- Plant watering notifications

# Idea Dump
- CV Brown/Normal (:O) recognition
- Smart Light Integration
- News feed/reminders: "Roy was last watered 12 days ago"
- Highscores: Michael has the most poops in a day, at 12. Meiri has the most hairs left in the house, at all of them.
- "Alexa: engage portside sunset"
- Wifi scraping for automatic entry/exit logging
- Something with the amazon buttons
- Guestbook
- Signin which guests can take a new pic in, and a tablet which shows a slideshow

