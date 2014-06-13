require.config({
  paths: {
    angular: '../bower_components/angular/angular',
    'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
    angularAMD: '../bower_components/angularAMD/angularAMD',
    // sass components
    affix: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix',
    alert: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert',
    button: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button',
    carousel: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel',
    collapse: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse',
    dropdown: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown',
    tab: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab',
    transition: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition',
    scrollspy: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy',
    modal: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal',
    tooltip: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip',
    popover: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover',

    domready: '../bower_components/domready/ready',
    'es5-shim': '../bower_components/es5-shim/es5-shim',
    jquery: '../bower_components/jquery/dist/jquery',
    json3: '../bower_components/json3/lib/json3.min',
    'requirejs-domready': '../bower_components/requirejs-domready/domReady',
    yui3: '../bower_components/yui3/build/yui/yui',
    // requireJS plugins
    async: '../bower_components/requirejs-plugins/src/async',
    depend: '../bower_components/requirejs-plugins/src/depend',
    font: '../bower_components/requirejs-plugins/src/font',
    goog: '../bower_components/requirejs-plugins/src/goog',
    image: '../bower_components/requirejs-plugins/src/image',
    json: '../bower_components/requirejs-plugins/src/json',
    mdown: '../bower_components/requirejs-plugins/src/mdown',
    noext: '../bower_components/requirejs-plugins/src/noext',
    propertyParser: '../bower_components/requirejs-plugins/src/propertyParser',
    'Markdown.Converter': '../bower_components/requirejs-plugins/lib/Markdown.Converter',
    text: '../bower_components/text/text',
    // angular components
    LoginController: 'controllers/login',
    MainController: 'controllers/main',
    NavbarController: 'controllers/navbar',
    SettingsController: 'controllers/settings',
    SignupController: 'controllers/signup'
  },
  packages: [

  ],
  shim: {
    angularAMD: {
      deps: [
        'angular'
      ],
      exports: 'angular'
    },
    'angular-route': [
      'angular'
    ],
    'angular-cookies': [
      'angular'
    ],
    'angular-resource': [
      'angular'
    ],
    'angular-santize': [
      'angular'
    ],
    'angular-mocks': [
      'angular'
    ],
    'angular-scenario': [
      'angular'
    ]
  },
  deps: [
    'app'
  ]
});


