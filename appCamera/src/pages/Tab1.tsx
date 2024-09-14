import { IonContent, IonList, IonHeader, IonPage, IonTitle, IonToolbar, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Tab1: React.FC = () => {
const [data, setData] = useState([]);
const history = useHistory();
  useEffect(() => {
    async function cargarDatos(){
      fetch("datos.json")
      .then(response => response.json())
      .then(datos => {
        console.log(datos);
        setData(datos);
      })
    }
    cargarDatos();
  }, []);

  function abrirInfo(itemId, itemNombre, itemCorreo, item){
    history.push({
      pathname: "/tab1/usuario",
      state: { id: itemId, nombre: itemNombre, correo: itemCorreo, item: item },
    })
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {
            data.map((item, key) => {
              return(
                <IonItem onClick={()=> abrirInfo(item.id, item.nombre, item.correo, item)} key={key}>{item.nombre} {item.correo}</IonItem>
            );
            })
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
