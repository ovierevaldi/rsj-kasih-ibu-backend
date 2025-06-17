This is a server application for Handling Registration At RSJ Kasih Ibu, User Can Register online by accessing the website. this server handle the necessary API for that
This project is created using NodeJS & Docker

BEFORE INSTALL
1. Make sure you have docker

HOW TO INSTALL

1. Copy .env file into root folder from: https://www.dropbox.com/scl/fi/ebur424ih5pqoc0hmmwct/.env?rlkey=ra4603s5l66ngj49tvshz2e2g&e=1&st=ls9i6k0s&dl=0
2. Open Docker in your Desktop
3. Run Command In CLI: docker compose up
4. Open in your browser: http://localhost:1234/


SEED DATA 
If you want to use some seed data
1. If you want to use the seed data, download seed file from: https://www.dropbox.com/scl/fi/9s5lj07yzbx0f4yjrzrv0/rsj_kasih_ibu_db?rlkey=cc1u9zj9grnwmw5idw9vnfdrv&st=sqv5ntji&dl=0
2. Copy the file into docker by running CLI command: docker cp rsj_kasih_ibu_db postgres_db:/rsj_kasih_ibu_db (make sure you are opening the CLI in the file location)
3. Import the Data by running in CLI: docker exec -it postgres_db pg_restore -U postgres -d RSJKasihIbu_DB rsj_kasih_ibu_db
Note: Try change the table data in: Pendaftaran especially in jadwal field to match today Date, if not, the registration may not shown any options. This system still need a lot of imporvement tho.