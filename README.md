<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Website</title>

    <style>
        body{
            margin:0;
            font-family:Arial, sans-serif;
            background:linear-gradient(135deg,#2563eb,#06b6d4);
            color:white;
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            text-align:center;
        }

        .container{
            padding:30px;
        }

        h1{
            font-size:42px;
            margin-bottom:15px;
        }

        p{
            font-size:20px;
            margin-bottom:25px;
        }

        button{
            padding:15px 30px;
            font-size:18px;
            border:none;
            border-radius:30px;
            background:white;
            color:#2563eb;
            cursor:pointer;
        }

        button:hover{
            background:#f1f5f9;
        }
    </style>
</head>

<body>

<div class="container">
    <h1>🌍 Welcome</h1>
    <p>My First Professional Website</p>

    <button onclick="showMessage()">
        Click Here
    </button>
</div>

<script>
function showMessage(){
    alert("🎉 Congratulations! Your website is working.");
}
</script>

</body>
</html>
