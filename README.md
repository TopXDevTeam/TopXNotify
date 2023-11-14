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
![TopXNotify](https://cdn.discordapp.com/attachments/1136980902640111717/1173947867426214010/image.png?ex=6565cf26&is=65535a26&hm=7ed77b2705eb803336aba582df1d069405355e69e9e4b2308d937a789db69327&)
- **<span style="color:rgba(255, 53, 91, 1)">error</span><br>**
![TopXNotify](https://cdn.discordapp.com/attachments/1136980902640111717/1173947810786328707/image.png?ex=6565cf18&is=65535a18&hm=553c059cb7e1d9de95546b62a8213c29deb87f580aa739fd946794eb6a75690d&)
- **<span style="color:rgba(47, 134, 235, 1)">info</span><br>**
![TopXNotify](https://cdn.discordapp.com/attachments/1136980902640111717/1173947911386714132/image.png?ex=6565cf30&is=65535a30&hm=8f164a52d4b5a7eb76c36765306ab0693291a0a5a640c58a692486aec7bc8b4f&)
- **<span style="color:rgba(255, 192, 33, 1)">warning</span><br>**
![TopXNotify](https://cdn.discordapp.com/attachments/1136980902640111717/1173948023508828190/image.png?ex=6565cf4b&is=65535a4b&hm=3a25d42764ee817e4e19291ad12ff09a7c98cffa6d5fa08915511f614e95ace1&)
- **<span style="color:rgb(139, 21, 143)">sms</span><br>**
![TopXNotify](https://cdn.discordapp.com/attachments/1136980902640111717/1173948070459867218/image.png?ex=6565cf56&is=65535a56&hm=a59dcf76ecc5b3274367af7fcda6514fb70a73568700d9b26c39c90dbd4d7673&)
- **<span style="color:rgb(209, 128, 6) ">bank</span><br>**
![TopXNotify](https://cdn.discordapp.com/attachments/1136980902640111717/1173947976650063882/image.png?ex=6565cf40&is=65535a40&hm=5b6cb1d03186cb80cc7481664ad45af88089195bdaeb92147887fbaad1040790&)
- **<span style="color:rgba(51, 51, 51, 1)">Default/Unknown</span><br>**
![TopXNotify](https://cdn.discordapp.com/attachments/1136980902640111717/1173948110926528582/image.png?ex=6565cf60&is=65535a60&hm=d0abffa698ee435f39495d66725c0710aea1db3d3008eec6a5625fb8b5ac4566&)


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

### Discord Server invite
[![](https://dcbadge.vercel.app/api/server/vuJQnbEMyu)](https://discord.gg/vuJQnbEMyu)

### Donation
<a href="https://www.buymeacoffee.com/topxteam26" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="35" width="174"></a>

