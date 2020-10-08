module.exports = {
    embed : function(color, name, icon_url, fields, text, timestamps) {
        return {
            embed: {
                color: color,
                author: {
                    name: name,
                    icon_url: icon_url
                },
                fields: fields,
                timestamps: timestamps,      
                footer: {
                    icon_url: icon_url,
                    text: text + timestamps
                }
            }
        }
    }
}