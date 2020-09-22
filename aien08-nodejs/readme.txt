# 查看全域設定
$ git config --list

# 設定用戶
$ git config --global user.name "Shinder"
$ git config --global user.email shinder.lin@gmail.com

# MySQL 8 使用傳統的認證
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密碼';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'P@ssw0rd';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
