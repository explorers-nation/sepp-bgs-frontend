SEPP BGS Server
===============

Just putting together a little react server for some specialized use with Elite Dangerous game.

Setup:

1) install npm

2) Run this command from the directory:

npm install
cp .env-example .env

3) Add the app id and password to the .env file. Ask an administrator such as Marlon for that.

4) npm run start

Deployment:

1) npm run build

2) Copy build files onto AWS S3. There will be scripts at some point for managing that.


