import React from 'react';
import { IonAlert, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonFabList, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonTabs, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { chevronDownCircle, chevronForwardCircle, chevronUpCircle, colorPalette, document, globe, library, playCircle, radio } from 'ionicons/icons';
import { IonCheckbox } from '@ionic/react';
import "./Home.css"
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';

function Home() {
  return (
    <IonPage className='colorin'>
      <IonButton color="dark" id="present-alert" className='bononsito'>inicio de sesion</IonButton>

      <>

        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Redirect exact path="/" to="/home" />
              {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={playCircle} />
                <IonLabel>Listen now</IonLabel>
              </IonTabButton>

              <IonTabButton tab="radio" href="/radio">
                <IonIcon icon={radio} />
                <IonLabel>Radio</IonLabel>
              </IonTabButton>

              <IonTabButton tab="library" href="/library">
                <IonIcon icon={library} />
                <IonLabel>Library</IonLabel>
              </IonTabButton>

              <IonTabButton tab="search" href="/search">
                <IonIcon icon={search} />
                <IonLabel>Search</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>

        <IonHeader>
          <IonToolbar>
            <IonSegment value="all">
              <IonSegmentButton value="all">
                <IonLabel>All</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="favorites">
                <IonLabel>Favorites</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
        </IonHeader>

        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton>
              <IonIcon slot="icon-only" icon={personCircle}></IonIcon>
            </IonButton>
            <IonButton>
              <IonIcon slot="icon-only" icon={search}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Icon Buttons</IonTitle>
        </IonToolbar>

        <IonCheckbox>no me hago cargo de los vidus que tenga el link</IonCheckbox>
        
        <IonContent className="ion-padding">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>LOS MEJORES MODS!!!¨y shaders¨</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src="public\sas.png" />
                  </IonThumbnail>
                  <IonLabel>https://www.minecrafteo.com/supplementaries-mod/</IonLabel>
                </IonItem>

                <IonItem>
                  <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src="public\yuo.jpg" />
                  </IonThumbnail>
                  <IonLabel>https://www.todominecraft.com/post/wthit-mod-para-minecraft-1-19-3---1-18-2---1-17-1---1-16-5</IonLabel>
                </IonItem>

                <IonItem>
                  <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src="public\op.png" />
                  </IonThumbnail>
                  <IonLabel>BSL Shaders</IonLabel>
                </IonItem>

              </IonList>
            </IonCardContent>
          </IonCard>

          <IonHeader>
            <IonToolbar>
              <IonTitle>
                Header
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <h1>MODS DE MINECRAFT</h1>
          <h2>los mods son espanciones del juego que agragan mecanicas nuevas en el juego,y algunos tambien agregan aspectos para los mods del juego vanilla o el juego original,asi como algunas otros pueden agregar estructuras o animaciones para el jugador o mods,
            los mods agarradon mas fama con los YOUTUBERS,los mods le dan un nuevo aire al juega para que no sea la misma cosa una y otra vez.
          </h2>
          <h3></h3>
          <h4></h4>
          <h5></h5>
          <h6></h6>

          <p>pagina de prueba</p>
          <IonFooter>
            <IonToolbar>
              <IonTitle>
                Footer
              </IonTitle>
            </IonToolbar>
          </IonFooter>
        </IonContent>

      </><IonAlert
        trigger="present-alert"
        header="Please enter your info"
        buttons={['OK']}
        inputs={[
          {
            placeholder: 'Name',
          },
          {
            placeholder: 'Nickname (max 8 characters)',
            attributes: {
              maxlength: 8,
            },
          },
          {
            type: 'number',
            placeholder: 'Age',
            min: 1,
            max: 100,
          },
          {
            type: 'textarea',
            placeholder: 'A little about yourself',
          },
        ]}
      ></IonAlert>
    </IonPage >
  );
}
export default Home;