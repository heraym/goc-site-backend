const {Firestore} = require('@google-cloud/firestore');
const db = new Firestore();

exports.getEquipos = async function () {  
    equipos = [];
    
    const equiposRef = db.collection('hackathon_equipos');
    const snapshot = await equiposRef.get();
    
    if (snapshot.empty) {
      console.log('No matching documents.');
      return equipos ;
    }
        
    snapshot.forEach(doc => {
        equipos.push( doc.data());
	 });
         
    return equipos;
}

