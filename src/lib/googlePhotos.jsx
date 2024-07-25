import { google } from 'googleapis';
import axios from 'axios';

const SCOPES = ['https://www.googleapis.com/auth/photoslibrary.readonly'];

export async function getAuthenticatedClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'path/to/your/service-account-key.json',
    scopes: SCOPES,
  });

  const client = await auth.getClient();
  google.options({ auth: client });

  return google;
}