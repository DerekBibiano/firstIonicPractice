import { IonContent, IonList, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonCardHeader, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonButtons, IonBackButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import './Tab1.css';
import { RouteComponentProps } from 'react-router';
interface UserDetailPagePromps extends RouteComponentProps <{ id: string}> {}

const Usuario: React.FC<UserDetailPagePromps> = ({match}) => {


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
        <p>{match.params.id}</p>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>{nombre}</IonCardTitle>
        <IonCardSubtitle>{id}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{correo}</IonCardContent>
    </IonCard> */}
      </IonContent>
    </IonPage>
  );
};

export default Usuario;
