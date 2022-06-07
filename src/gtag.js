export const gtag = function () {
    // Can't use arrow func + destructuring as Google expects
    // arguments objects in dataLayer (not an array of arguments).
    // @ts-ignore
    window.dataLayer.push(arguments);
};

export const install = (trackingId, additionalConfigInfo = {}) => {
    const scriptId = "ga-gtag";

    if (document.getElementById(scriptId)) return;

    const { head } = document;
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    head.insertBefore(script, head.firstChild);

    // @ts-ignore
    window.dataLayer = window.dataLayer || [];

    // @ts-ignore
    gtag("js", new Date());
    // @ts-ignore
    gtag("config", trackingId, additionalConfigInfo);
};

install("GTM-PSMS2KB");

export default gtag;
