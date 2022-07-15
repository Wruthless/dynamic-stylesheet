function setTheme(name) {

    let link = document.createElement("link");
    link.id = "theme";
    link.rel = "stylesheet";
    link.href = `./style/${name}.css`;

    let currentTheme = document.querySelector("#theme");

    if (currentTheme) {
        currentTheme.replaceWith(link);
    } else {
        document.head.append(link);
    }
}

setTheme('style2')
