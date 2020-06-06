# hsy-jatepalvelu
Scrape info from HSY Jätepalvelu. Hae tiedot HSY:n jätepalvelusta käyttäen jätepalvelutunnusta ja postinumeroa.

# Prerequisities
- AWS account
- Node

# Installation
`yarn install`

# Local run
`HTML_SOURCE_TUNNUS=BBxx-xxxxxx-x HTML_SOURCE_POSTINUMERO=00xx0 yarn start`

# Deployment
`HTML_SOURCE_TUNNUS=BBxx-xxxxxx-x HTML_SOURCE_POSTINUMERO=00xx0 yarn deploy:prod --verbose`

# Käyttääkö tämä HSY:n rajapintaa (APIa) tietojen hakemiseen?

Ei. Osoitteessa on https://lukemat.hsy.fi/raportti-rajapinta.html, mutta sen käyttö on hankalaa. Tietojen haku pitää ensin käynnistää ja sitten pollata valmistumista. Tämä haalii siksi tiedot web-käyttöliittymästä, josta ne saa yhdellä haulla.

# Mikä tuo HTML_SOURCE_TUNNUS on?

Se on HSY:n jätepalvelun tunnus, jonka saa laskulta. Älä kerro tunnusta muille, koska sillä voi tehdä muutoksia jätepalvelun sisältöön (tyhjennysvälit, jäteastioiden määrät ym).
