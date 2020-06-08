import { addNotification } from 'reducers/notifications';

const version = process.env.REACT_APP_VERSION;

export const newVersionAvailable = dispatch => {
  dispatch(
    addNotification({
      level: 'info',
      message:
        'Cierra todas las pestañas para descargar el contenido de la nueva versión.',
      autoDismiss: 0,
      dismissible: false,
    })
  );
};

export const swReady = dispatch => {
  dispatch(
    addNotification({
      level: 'success',
      title: `Estás utilizando la última versión de FBT => ${version}`,
      message:
        'Ésta aplicación web está siendo servida a través de un "Service Worker". Para obtener más información, visite https://bit.ly/CRA-PWA',
    })
  );
};
