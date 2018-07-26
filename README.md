## so_visitor
Node.js bot, that allows you to get "Fanatic" badge in StackOverflow. 

### Requires
1. Nightmare.js
2. Mailgun account
3. Xvfb (for headless mode)

### Setup
1. Edit `conf.example.json`;
2. Put this line in your Crontab: ```30 9 * * * xvfb-run node /home/user1/so_visitor/index.js```
3. Wait 100 days;
4. Congrats, now you have the Fanatic badge. 
