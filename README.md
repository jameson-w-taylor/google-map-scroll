# Capacitor Google Maps
This repository is a sample to test out using the Capacitor Google Maps plugin on Android.

It should be all setup to test after following these steps:
- `npm install`
- Add your own Google Maps API key in the following locations where `googleMapAPIKeyHere` placeholder is:
  - src/environments/environment.prod.ts
  - src/environments/environment.ts
  - android/app/src/main/AndroidManifest.xml
- `ionic cap sync android`
- `ionic cap open android`

Once the project is opened in Android Studio, you can run it on an emulator and obdserve how the map component will scroll with the content.