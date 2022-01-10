(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{405:function(e,t,s){"use strict";s.r(t);var a=s(52),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"preparing-your-machine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preparing-your-machine"}},[e._v("#")]),e._v(" Preparing your machine")]),e._v(" "),s("p",[e._v("Before you install Pixelfed, you will need to setup a webserver with the required dependencies:")]),e._v(" "),s("ul",[s("li",[e._v("An HTTP server")]),e._v(" "),s("li",[e._v("An SQL database server")]),e._v(" "),s("li",[e._v("A PHP-FPM server")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composer"),s("OutboundLink")],1),e._v(", for PHP dependency management")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),s("OutboundLink")],1),e._v(", for fetching updates")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis"),s("OutboundLink")],1),e._v(", for in-memory caching and background task queueing")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://libgd.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GD"),s("OutboundLink")],1),e._v(", for image processing")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/tjko/jpegoptim",target:"_blank",rel:"noopener noreferrer"}},[e._v("JPEGOptim"),s("OutboundLink")],1),e._v(", for optimizing JPG")]),e._v(" "),s("li",[s("a",{attrs:{href:"http://optipng.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OptiPNG"),s("OutboundLink")],1),e._v(", for lossless PNG")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://pngquant.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PNGQuant"),s("OutboundLink")],1),e._v(", for lossy PNG")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://ffmpeg.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ffmpeg"),s("OutboundLink")],1),e._v(", for generating video thumbnails")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Shared Hosting")]),e._v(" "),s("p",[e._v("At this stage, it's not possible to install Pixelfed by downloading a ZIP file and uploading the files to your web server. This is because Composer needs to run on the command line.")]),e._v(" "),s("p",[e._v("This doesn't necessarily mean you need a VPS. Some shared hosts give you SSH access, through which you should be able to install Composer and Pixelfed just fine.")])]),e._v(" "),s("h2",{attrs:{id:"http-web-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-web-server"}},[e._v("#")]),e._v(" HTTP Web server")]),e._v(" "),s("p",[e._v("The following web servers are officially supported:")]),e._v(" "),s("ul",[s("li",[e._v("Apache (with "),s("code",[e._v("mod_rewrite")]),e._v(" enabled)")]),e._v(" "),s("li",[e._v("nginx")])]),e._v(" "),s("p",[e._v("Pixelfed uses HTTPS URIs, so you will need to have HTTPS set up at the perimeter of your network before you proxy requests internally.")]),e._v(" "),s("h2",{attrs:{id:"database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[e._v("#")]),e._v(" Database")]),e._v(" "),s("p",[e._v("You can choose one of three supported database drivers:")]),e._v(" "),s("ul",[s("li",[e._v("MySQL (5.7+)")]),e._v(" "),s("li",[e._v("MariaDB (10.2.7+ -- 10.3.5+ recommended)")]),e._v(" "),s("li",[e._v("PostgreSQL (10+)")])]),e._v(" "),s("p",[e._v("You will need to create a database and grant permission to an SQL user identified by a password. To do this with MySQL or MariaDB, do the following:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" mysql -u root -p\n")])])]),s("p",[e._v("You can then create a database and grant privileges to your SQL user. The following SQL commands will create a database named "),s("code",[e._v("pixelfed")]),e._v(" and allow it to be managed by a user "),s("code",[e._v("pixelfed")]),e._v(" with password "),s("code",[e._v("strong_password")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[e._v(" ")]),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("create")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("database")]),e._v(" pixelfed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("grant")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("all")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("privileges")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("on")]),e._v(" pixelfed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("to")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'pixelfed'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("@'localhost'")]),e._v(" identified "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("by")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'strong_password'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nflush "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("privileges")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("To do this with PostgreSQL instead, do the following:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" -u postgres psql\n")])])]),s("p",[e._v("Once in the psql shell, do the following:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("CREATE USER pixelfed CREATEDB;\n\\q\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Changing database drivers:")]),e._v(" "),s("p",[e._v("If you decide to change database drivers later, please run a backup first! You can do this with "),s("code",[e._v("php artisan backup:run --only-db")])])]),e._v(" "),s("h2",{attrs:{id:"php-fpm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-fpm"}},[e._v("#")]),e._v(" PHP-FPM")]),e._v(" "),s("p",[e._v("You can check your currently installed version of PHP-FPM by running "),s("code",[e._v("php-fpm -v")]),e._v(". Make sure you are running "),s("strong",[e._v("PHP >= 7.3")]),e._v(".")]),e._v(" "),s("p",[e._v("You can check your currently loaded extensions by running "),s("code",[e._v("php-fpm -m")]),e._v('. Modules are usually enabled by editing your PHP configuration file and uncommenting the appropriate lines under the "Dynamic extensions" section. Make sure the following extensions are installed and loaded:')]),e._v(" "),s("ul",[s("li",[s("code",[e._v("bcmath")])]),e._v(" "),s("li",[s("code",[e._v("ctype")])]),e._v(" "),s("li",[s("code",[e._v("curl")])]),e._v(" "),s("li",[s("code",[e._v("exif")])]),e._v(" "),s("li",[s("code",[e._v("gd")])]),e._v(" "),s("li",[s("code",[e._v("iconv")])]),e._v(" "),s("li",[s("code",[e._v("intl")])]),e._v(" "),s("li",[s("code",[e._v("json")])]),e._v(" "),s("li",[s("code",[e._v("mbstring")])]),e._v(" "),s("li",[s("code",[e._v("openssl")])]),e._v(" "),s("li",[s("code",[e._v("redis")])]),e._v(" "),s("li",[s("code",[e._v("tokenizer")])]),e._v(" "),s("li",[s("code",[e._v("xml")])]),e._v(" "),s("li",[s("code",[e._v("zip")])])]),e._v(" "),s("p",[e._v("Additionally, you will need to enable extensions for database drivers:")]),e._v(" "),s("ul",[s("li",[e._v("For MySQL or MariaDB: enable "),s("code",[e._v("pdo_mysql")]),e._v(" and "),s("code",[e._v("mysqli")])]),e._v(" "),s("li",[e._v("For PostgreSQL: enable "),s("code",[e._v("pdo_pgsql")]),e._v(" and "),s("code",[e._v("pgsql")])])]),e._v(" "),s("p",[e._v("Finally, make sure to set the desired upload limits for your PHP processes. You will want to check the following:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("post_max_size")]),e._v(" (default 8M, set this around or slightly greater than your desired post size limit)")]),e._v(" "),s("li",[s("code",[e._v("file_uploads")]),e._v(" (default On, which it needs to be)")]),e._v(" "),s("li",[s("code",[e._v("upload_max_filesize")]),e._v(" (default 2M, set this <= "),s("code",[e._v("post_max_size")]),e._v(")")]),e._v(" "),s("li",[s("code",[e._v("max_file_uploads")]),e._v(" (default 20, but make sure it is >= your desired attachment limit)")]),e._v(" "),s("li",[s("code",[e._v("max_execution_time")]),e._v(" (default 30, consider raising this to 600 or more so that longer tasks aren't interrupted)")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Instagram imports")]),e._v(" "),s("p",[e._v("Instagram imports are also affected by these settings. If you enable imports, you will want to raise "),s("code",[e._v("post_max_size")]),e._v(" to the maximum size you expect an Instagram archive to be, "),s("code",[e._v("upload_max_filesize")]),e._v(" to the maximum size you expect individual Instagram photos to be, and "),s("code",[e._v("max_file_uploads")]),e._v(" to the maximum number of photos (not posts) you'd expect an Instagram archive to contain.")])]),e._v(" "),s("h2",{attrs:{id:"creating-a-dedicated-app-user-and-using-unix-sockets-optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-dedicated-app-user-and-using-unix-sockets-optional"}},[e._v("#")]),e._v(" Creating a dedicated app-user and using UNIX sockets (optional)")]),e._v(" "),s("p",[e._v("For added security, you may want to create a dedicated user specifically for running Pixelfed. To do this:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("useradd")]),e._v(" -rU -s /bin/bash pixelfed\n")])])]),s("h3",{attrs:{id:"configuring-php-fpm-pool-and-socket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-php-fpm-pool-and-socket"}},[e._v("#")]),e._v(" Configuring PHP-FPM pool and socket")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /etc/php/php-fpm.d/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" www.conf pixelfed.conf\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$EDITOR")]),e._v(" pixelfed.conf\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Where to define custom PHP-FPM pools")]),e._v(" "),s("p",[e._v("The exact directory you should "),s("code",[e._v("cd")]),e._v(" to will vary according to your distribution:")]),e._v(" "),s("ul",[s("li",[e._v("Arch Linux uses "),s("code",[e._v("/etc/php/php-fpm.d")])]),e._v(" "),s("li",[e._v("Debian and Ubuntu use "),s("code",[e._v("/etc/php/7.3/fpm/pool.d/")]),e._v(" (dependent on PHP version)")]),e._v(" "),s("li",[e._v("For other distributions, check your php-fpm.conf to see where exactly you can define "),s("code",[e._v("*.conf")]),e._v(" with "),s("code",[e._v("include=")])])])]),e._v(" "),s("p",[e._v("Make the following changes to the PHP-FPM pool:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(";     use the username of the app-user as the pool name, e.g. pixelfed\n[pixelfed]\nuser = pixelfed\ngroup = pixelfed\n;    to use a tcp socket, e.g. if running php-fpm on a different machine than your app:\n;    (note that the port 9001 is used, since php-fpm defaults to running on port 9000;)\n;    (however, the port can be whatever you want)\n; listen = 127.0.0.1:9001;\n;    but it's better to use a socket if you're running locally on the same machine:\nlisten = /run/php-fpm/pixelfed.sock\nlisten.owner = http\nlisten.group = http\nlisten.mode = 0660\n[...]\n")])])]),s("h3",{attrs:{id:"configuring-redis-socket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-redis-socket"}},[e._v("#")]),e._v(" Configuring Redis socket")]),e._v(" "),s("p",[e._v("Edit "),s("code",[e._v("redis.conf")]),e._v(" and edit the following lines:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('port 6379                           # change this to "port 0" to disable network packets\nunixsocket /run/redis/redis.sock    # \nunixsocketperm 770                  # give permission to "redis" user and group\n')])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Where to find redis.conf")]),e._v(" "),s("p",[e._v("The exact location will vary according to your distribution:")]),e._v(" "),s("ul",[s("li",[e._v("Arch Linux uses "),s("code",[e._v("/etc/redis.conf")])]),e._v(" "),s("li",[e._v("Debian and Ubuntu use "),s("code",[e._v("/etc/redis/redis.conf")])]),e._v(" "),s("li",[e._v("For other distributions, check your documentation")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);