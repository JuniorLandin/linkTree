import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export function NetWorks() {

  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [youtube, setYoutube] = useState("")

  useEffect(() => {
    function loadLinks(){
      const docRef = doc(db, "social", "link")
      getDoc(docRef)
      .then((snapshot) => {
        if(snapshot.data() !== undefined){
          setFacebook(snapshot.data()?.facebook)
          setInstagram(snapshot.data()?.instagram)
          setYoutube(snapshot.data()?.youtube)
        }
      })
    }

    loadLinks();
  }, [])

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube
    })
    .then(() => {
      console.log("Cadastrado com Sucesso")
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
        <Header />

        <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas Redes Sociais</h1>
        <form
         onSubmit={handleRegister}
         className="flex flex-col max-w-xl w-full"
         >
          <label className="text-white font-medium mt-2 mb-2">Link do facebook</label>
          <Input 
            placeholder="Digite a url do Facebook"
            type="url"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
          <label className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
          <Input 
            placeholder="Digite a url do Instagram"
            type="url"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
          <label className="text-white font-medium mt-2 mb-2">Link do Youtube</label>
          <Input 
            placeholder="Digite a url do Facebook"
            type="url"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />

          <button
            type="submit"
            className="text-white bg-blue-600 h-9 rounded-md justify-center items-center flex mb-7 font-medium"
          >
            Salvar Links  
          </button>
        </form>
    </div>
  )
}
