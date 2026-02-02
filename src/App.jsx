import { useState} from 'react';


function App(){

  /**texteSaisi     = valeur actuelle
   * setTexteSaisi  = fonction modifiant la valeur de texte saisi
   * useState("")   = Fait en sorte de commencer avec du texte vide
   * 
   *                -------------------------
   * 
   *                Crée une tache
   * 
   * onChange={(e)  => setTexteSaisi(e.target.value)} 
   * onChange       = Un écouteur d'événement qui se déclenche à chaque fois que tu presses une touche.
   * (e)            = Objet événement(event). contient les infos sur l'evenement (event, onClick, keyDown etc ...)
   * e.target       = Élément HTML qui a déclenché l'événement (Input ici)
   * e.target.value = Texte qui ce trouve dans l'input (ici value = {texteSaisi})
   * setTexteSaisi  = Nom de la fonction
    * 
   */

    const [texteSaisi, setTexteSaisi] = useState("");
    const [liste, setListe]           = useState([]);

    const ajouterTache = () => {
      setListe([...liste, texteSaisi]);
      setTexteSaisi("");
    };

       /** 
        *           -------------------------
        * 
        *           Supprimer une tache
        * 
        */


    const supprimerTache = (indexASupprimer) => {
      const nouvelleListe = liste.filter((item, indexActuel)=>{
        return indexActuel !== indexASupprimer;
      });

      setListe(nouvelleListe);
    };


  return(
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-200">

      <div className="bg-white max-w-md w-full rounded-2xl shadow-x1 p-10">
          <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">To-do List</h1>

          <div>
            <div className="flex gap-2 flex-items-center justify-center">
              <input 
                type="text"
                value={texteSaisi}
                onChange={(e) => setTexteSaisi(e.target.value)} 
                placeholder="Insérer une tache..."
                className="flex-1 border-2 border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg transition-opacity hover:opacity-80"
                onClick={ajouterTache}>
                Ajouter
              </button>
          </div>
            <ul>
              {liste.map((tache, index) => (
                <li key={index}
                  className="flex items-center justify-between bg-slate-50 p-3 rounded-lg mb-2 hover:bg-salte-100 transition-colors">
                  {tache}
                  <button 
                    className="bg-red-600 text-white px-3 py-1 m-0 rounded-lg transition-opacity hover:opacity-80"
                    onClick={() => supprimerTache(index)}>
                    Supprimer
                  </button>
                </li>
              ))}
            </ul>
            {liste.length === 0 && (
            <p className="text-center text-gray-400 mt-4 text-sm italic">
              Aucune tâche en cours.
            </p>
          )}
          </div>
      </div>
    </div>
    );
};
export default App;