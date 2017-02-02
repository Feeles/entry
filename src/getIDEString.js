export default (props) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>${props.title}</title>
    <style media="screen">
    body {
        margin: 0;
        padding: 0;
    }
    .h4p__app {
        padding: 0;
        margin: 0;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
    }
    </style>
    <script
      type="text/javascript"
      src="${props.CORE_CDN_URL}"
      onload="h4p({project:'${props.storeName}'})"
    ></script>
  </head>
  <body>
    <!-- Config of the app -->
    <div class="h4p__app"></div>

  </body>
</html>
`;
