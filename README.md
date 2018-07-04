# MindApp

### Download do projeto:

    git clone https://github.com/carlostelles/mindApp.git
    
### Baixando dependências do projeto:

    npm i
    
### Iniciando a aplicação em ambiente de desenvolvimento:

    ionic serve
    
### Deploy

    ionic cordova build android --prod --release
    
    "PATH_BIN_JDK/keytool.exe" -genkey -v -keystore "PATH_KEYSTORE/mind-app-release-key.keystore" -alias mind_app -keyalg RSA -keysize 2048 -validity 10000
    "PATH_BIN_JDK/jarsigner.exe" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore "PATH_KEYSTORE/mind-app-release-key.keystore" app-release-unsigned.apk mind_app
    "PATH_ANDROID_STUDIO_SDK_BUILD_TOOLS/zipalign.exe" -v 4 app-release-unsigned.apk mindApp_1.0.0.apk
    
    
### Referências

IDE:
 - Sugestão por WebStorm (gratuita para estudantes) ou Visual Studio Code (open source);

Requisitos para desenvolvimento híbrido com Android:
 - Nodejs (versão LTS) - https://nodejs.org;
 - Java Development Kit (JDK) - http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html;
 - Android Studio;
 - Android SDK;

Veriáveis de Ambiente:
 - JAVA_HOME apontando para o bin de instalação do JDK;
 - ANDROID_HOME apontando para o bin de instalação do Android SDK;

Domínio de tecnologias:
 - TypeScript (Angular 2+);
 - Ionic Framework;
 - Diagramação (HTML5 e CSS3);
 - Sass;
 - Conceitos de SPA e Webpack;
 
Deploy:
 - https://ionicframework.com/docs/intro/deploying/

Links de referência:
 - https://ionicframework.com/getting-started
 - https://cordova.apache.org/docs/en/8.x/guide/platforms/android/
 - https://angular.io/guide/quickstart
 - https://developer.android.com/studio/
 - https://code.visualstudio.com/
 - https://www.jetbrains.com/webstorm/download/
