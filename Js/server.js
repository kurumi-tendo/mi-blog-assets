const servers = new Map([ ["sb", "https://www.yourupload.com/embed/"], ["yu", "https://www.yourupload.com/embed/" ] ])

function generateVideoURL(idServer, code)
{
    return servers.get(idServer) + code;
}
