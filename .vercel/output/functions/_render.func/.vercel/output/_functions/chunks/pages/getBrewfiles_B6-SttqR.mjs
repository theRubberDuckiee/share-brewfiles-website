import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, doc, getDocs, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABm9M7XceFH6pSvvbMuRJw3n5nBeak3L0",
  authDomain: "share-brewfiles.firebaseapp.com",
  projectId: "share-brewfiles",
  storageBucket: "share-brewfiles.appspot.com",
  messagingSenderId: "1071283599196",
  appId: "1:1071283599196:web:a4910843f1bae76d7af399",
  measurementId: "G-WGD9RH2E7M"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const GET = async ({ request }) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (id) {
    const singleBrewDoc = await getDoc(doc(db, "brewfiles", id));
    if (singleBrewDoc.exists()) {
      if (!singleBrewDoc.data()?.data) {
        return new Response(JSON.stringify({ message: "Brewfile not found" }), {
          status: 404
        });
      }
      return new Response(
        JSON.stringify({
          brews: [
            {
              id: singleBrewDoc.id,
              data: Object.values(singleBrewDoc.data().data).map(
                (value) => {
                  return {
                    name: value.name,
                    packageManager: value.packageManager
                  };
                }
              )
            }
          ]
        })
      );
    } else {
      return new Response(JSON.stringify({ message: "Brewfile not found" }), {
        status: 404
      });
    }
  }
  const allBrews = await getDocs(collection(db, "brewfiles"));
  if (allBrews) {
    return new Response(
      JSON.stringify({
        brews: allBrews.docs.map((doc2) => {
          const rawData = doc2.data();
          const { data } = rawData;
          if (!data) {
            return;
          }
          const brewData = Object.values(data).map((value) => {
            return {
              name: value.name,
              packageManager: value.packageManager
            };
          });
          return {
            id: doc2.id,
            data: brewData
          };
        })
      })
    );
  } else {
    return new Response(JSON.stringify({ message: "No brews found" }), {
      status: 404
    });
  }
};

export { GET };
