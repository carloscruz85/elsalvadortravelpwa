export default function clearSocialMedia (platform, hint) {
    // hint = `http://${platform}.com/sdf` 
    return `https://${platform}.com/`.concat(
        hint
        .replace( '.com','')
        .replace( '@','' )
        .replace( `http://`,'' )
        .replace( `https://`,'' )
        .replace( `${platform}`,'' )
        .replace( `/`,'' )
    ) 

}