<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="utf-8">
    <title>document</title>
    
    <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">

</head>
<body>

<div id="app">
    <myheader></myheader>
    <div class="container">
        <router-view></router-view>
    </div>

    <Myfooter></Myfooter>
</div>


<script type="text/javascript" src="{{asset('js/app.js')}}"></script>
</body>
</html>