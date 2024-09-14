import { IonContent, IonList, IonHeader, IonPage, IonTitle, IonToolbar, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem routerLink='/tab1/usuario/1'>
            Usuario 1
          </IonItem>
          <IonItem routerLink='/tab1/usuario/2'>
            Usuario 2
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
