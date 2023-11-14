# TopXNotify Documentation

![TopXNotify](https://cdn.discordapp.com/attachments/1045025595588874310/1173807302189523075/TopXNotify.png?ex=65654c3d&is=6552d73d&hm=5ed85f6adcb6b339ab009d4d6b3d4c46b7850f40d4e4f7b782b8d218f40f9977&)

### Thanks For Using Our Script ❤️


## Client Side Usage

```lua
exports['TopXNotify']:Notify(type, time, message, sound)
exports.TopXNotify:Notify(type, time, message, sound)
```

## Client Side Example

```lua
exports['TopXNotify']:Notify("success", 3000, "This is a example", true)
exports.TopXNotify:Notify("success", 3000, "This is a example", true)
```

## Server Side Usage

```lua
TriggerServerEvent("TopXNotify:Notify", source, type, time, message, sound)
```

## Server Side Example

```lua
TriggerServerEvent("TopXNotify:Notify", source, "info", 5000, "This is a example", false)
```
### Types

- **<span style="color:rgba(71, 215, 100, 1)">success</span><br>**
- **<span style="color:rgba(255, 53, 91, 1)">error</span><br>**
- **<span style="color:rgba(47, 134, 235, 1)">info</span><br>**
- **<span style="color:rgba(255, 192, 33, 1)">warning</span><br>**
- **<span style="color:rgb(139, 21, 143)">sms</span><br>**
- **<span style="color:rgb(209, 128, 6) ">bank</span><br>**
- **<span style="color:rgba(51, 51, 51, 1)">Default/Unknown</span><br>**

<hr>

### source

**Set `-1` To Send The Notification For All Players**

### Time (Milliseconds)

  **`1 Second = 1000 Millisecond`**

### Message 

**`Message You Want To Send`**

### Sound (Boolean) 

- **Set Value `true` To Play Notification Sound**

- **Set Value `false` To Mute Notification Sound**

```diff
- Make Sure The File Name Is TopXNotify
```

### Server invite
[![](https://dcbadge.vercel.app/api/server/vuJQnbEMyu)](https://discord.gg/vuJQnbEMyu)

<a href="https://www.buymeacoffee.com/topxteam26" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="35" width="174"></a>

