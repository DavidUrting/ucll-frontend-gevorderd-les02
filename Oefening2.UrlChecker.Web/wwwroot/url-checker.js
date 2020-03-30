function checkUrl() {
    let urlString = document.getElementById("url").value;

    try {
        let url = new URL(urlString);
        if (url.protocol.toLowerCase().startsWith("http")) {
            document.getElementById("url").style.backgroundColor = "#00FF00";
            document.getElementById("urlParts").style.display = "unset";

            document.getElementById("schema").value = url.protocol;
            document.getElementById("host").value = url.hostname;
            document.getElementById("port").value = url.port;
            document.getElementById("path").value = url.pathname;
            document.getElementById("query").value = url.search;
            document.getElementById("fragment").value = url.hash;
        } else {
            document.getElementById("url").style.backgroundColor = "#FFFF00";
            document.getElementById("url").title = "De URL is geldig maar heeft geen http(s) schema/protocol.";
            document.getElementById("urlParts").style.display = "none";
        }
    } catch (ex) {
        // invalid URL
        document.getElementById("url").style.backgroundColor = "#FF0000";
        document.getElementById("urlParts").style.display = "none";
    }
}