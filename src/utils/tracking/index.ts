

import 'firebase/analytics';
import { firebase } from '../firebase';

export const initGA = () => {
  firebase.analytics();
};

export const onWhatsAppButtonClicked = (scenario?: string) => {
  firebase.analytics().logEvent('whatsapp_button_clicked', { scenario });
};

export const onEmailButtonClicked = () => {
  firebase.analytics().logEvent('email_button_clicked');
}

export const onEmailAddressClicked = () => {
  firebase.analytics().logEvent('email_address_clicked');
}

export const onPaulineClicked = () => {
  firebase.analytics().logEvent('pauline_tel_clicked');
}

export const onMohammadClicked = () => {
  firebase.analytics().logEvent('mohammad_tel_clicked');
}

export const onFacebookClicked = () => {
  firebase.analytics().logEvent('facebook_button_clicked');
}

export const onInstagramClicked = () => {
  firebase.analytics().logEvent('instagram_button_clicked');
}

