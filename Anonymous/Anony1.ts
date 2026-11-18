
function playerName(name:string):void
{
    console.log(name);
}
playerName('gimmy');
function playerplay(game:(name:string) =>void):void
{
    game('cricket')
}
playerplay(playerName)