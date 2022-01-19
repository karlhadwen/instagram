/* eslint-disable no-nested-ternary */
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoggedInUserContext from '../context/logged-in-user';
import usePhotos from '../hooks/use-photos';
import Post from './post';
import useMyPhotos from '../hooks/useMyPhotos';

export default function Timeline() {

  const { user } = useContext(LoggedInUserContext);

  const { user: { following } = {} } = useContext(
    LoggedInUserContext
  );

  const { photos } = usePhotos(user);
  const { photo } = useMyPhotos()
 

  return (
    <div className="container col-span-2">
      {
        !photo ? (
          <>
            <Skeleton count={4} width={640} height={500} className="mb-5"/>
          </>
        ) : photo?.length > 0 ? (
          photo.map(content =>  <Post key={content.docId} content={content} />)
        ) : (
          <p className='text-center text-2xl'>Follow people to see photos</p>
        )
      }
      {following===undefined ?(
        <Skeleton count={2} width={640} height={500} className="mb-5" />
      ) : following.length===0 ?(
        <p className="flex justify-center font-bold">Follow other people to see Photos</p>
      ) : photos? (
       photos.map((content) => <Post key={content.docId} content={content} />)          
      ) : null}

      
    </div>
  );
}

