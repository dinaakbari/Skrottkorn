function buildMenu()
{

    var links = [
        ["Startida", "index.html"],
        ["Produktsida", "produktsida.html"],
        ["Om oss", "omoss.html"]


    ]


    var content = ""
    for(var i = 0; i < links.length; i++)
    {
        var text = links[i][0]
        var adress = links[i][1]
        content = content + "<li><a href=\"" + adress + "\">" + text + "<\a></li>"
        // <li><a href="index.html">Startsida</a></li>"
    }

    document.getElementById("menu").innerHTML = content


}