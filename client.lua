function Notify(type, time, message, sound)
	if sound ~= nil then
		sound = sound;
	else
		sound = false;
	end
	SendNUIMessage({
		action = 'notify',
		type = type,
		time = time,
		message = message,
		sound = sound,
	})
end

RegisterNetEvent('TopXNotify:Notify')
AddEventHandler('TopXNotify:Notify', function(type, time, message, sound)
	Notify(type, time, message, sound)
end)

exports('Notify', function(type, time, message, sound)
	TriggerEvent("TopXNotify:Notify", type, time, message, sound)
end)
