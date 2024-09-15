mysql -u root -proot -e "create database succubus;"
mysql -u root -proot succubus < doodump.sql 
mysql -u root -proot mysql -e "grant ALL on *.* to root@'localhost' IDENTIFIED by 'root';"
