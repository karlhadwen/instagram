import { useState, useEffect, useContext } from 'react';
import { myPhotos } from '../services/firebase,';
import { UserContext } from '../context/user';


const useMyPhotos = () => {

  const { user: { uid: userId ='' } } = useContext(UserContext)
  const [photo, setPhoto] = useState(null);

 useEffect(() => {
   async function getTimelinePhotos() {
    let myPhoto = []

    if(userId) {
      myPhoto = await myPhotos(userId);
    }

    myPhoto.sort((a, b) => b.dateCreated - a.dateCreated);
    setPhoto(myPhoto);
   }
   getTimelinePhotos()
 }, [userId])

 return { photo }

}

export default useMyPhotos
