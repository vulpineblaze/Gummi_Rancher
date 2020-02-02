# Gummi_Rancher
Gummi Rancher online digital pet game using Angular 8 and Phaser 3.


---

## Raw Commands
List of various commands used to get the server working. *Caution: May not be in correct order.*

```
# piggybacking off an existing angular server setup

sudo service apache2 stop # not loaded
sudo service  nginx restart

# allow nginx to route requests from that subdomain to the app
sudo vim /etc/nginx/sites-available/gummi
sudo ln -s /etc/nginx/sites-available/gummi /etc/nginx/sites-enabled/gummi
sudo service  nginx restart

cd /var/www



# sudo mkdir /var/www/gummi
# sudo chmod -R 2777 /var/www/gummi

ng new gummi

cd gummi
npm install

npm start  #fire up angular via package.json command

# gummi
ng g c gummi-add --skipTests=true
ng g c gummi-get --skipTests=true
ng g c gummi-merge --skipTests=true
ng g c gummi-grind --skipTests=true


npm install ng2-slim-loading-bar rxjs-compat  --save

ng g service gummis --skipTests=true

# add proxy.json to npm start for angular package.json

cd api
npm init -y
npm install express body-parser cors mongoose --save
npm install nodemon --save-dev
cd $PWD  #got a weird error, possibly how i did api/
npm install
npm start  #after I edited package.json


ng g c login --skipTests=true
ng g c gummi-detail --skipTests=true

npm install @angular/cdk --save
npm install ngx-easy-table --save

npm install bootstrap --save

npm install --save-dev html-loader html-webpack-plugin style-loader ts-loader css-loader @angular-builders/custom-webpack
npm install core-js

npm install typeface-montserrat --save
npm install to-string-loader angular2-template-loader --save

npm install @angular/core@^8.2.10  rxjs@^6.5.3 jquery@1.9.1 - 3  popper.js@^1.16.0  @angular/core@^2.4.7 || ^4.0.0  --save
npm install   rxjs jquery @popperjs/core  @angular/core  --save

npm install ncu
sudo npm i -g npm-check-updates
ncu -u
npm install

npm uninstall ng2-slim-loading-bar rxjs-compat ; npm install ng2-slim-loading-bar rxjs-compat  --save

npm install --save-dev html-loader html-webpack-plugin style-loader ts-loader webpack webpack-cli webpack-dev-server angular2-template-loader css-loader to-string-loader




```
