import { IonContent, IonList, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonCardHeader, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonButtons, IonBackButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import './Tab1.css';
import { RouteComponentProps, useLocation } from 'react-router';
interface UserDetailPagePromps extends RouteComponentProps <{ id: string}> {}

const Usuario: React.FC = () => {
 const location = useLocation();
 const id = location.state ? location.state.id : null;
 const nombre = location.state ? location.state.nombre : null;
 const correo = location.state ? location.state.correo : null;
 const item = location.state ? location.state.item : null;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
      <IonCardHeader>
        <IonCardTitle>{nombre}</IonCardTitle>
        <IonCardSubtitle>{id}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{correo}</IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Usuario;
