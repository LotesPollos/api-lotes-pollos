import sql from 'mssql';

const dbSettings = {
  user : 'db_a93405_lotespollos_admin',
  password :'Tequiero97@',
  server:'sql8003.site4now.net',
  database:'db_a93405_lotespollos', 

    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
};


export async function getConnection(){
  try {
    const pool =await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }

}

export {sql};

  