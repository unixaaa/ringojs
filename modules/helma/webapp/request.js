var system = loadModule('helma.system');
system.addHostObject(org.helma.web.Request);
system.addHostObject(org.helma.web.Session);

/**
 * Return true if this is a HTTP POST request.
 */
Request.prototype.isPost = function() {
    return this.method == "POST";
}

/**
 * Return true if this is a HTTP GET request.
 */
Request.prototype.isGet = function() {
    return this.method == "GET";
}