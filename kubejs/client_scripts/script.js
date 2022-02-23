onEvent('jei.hide.items', jei => {
	jei.hide([
		/refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|black|red)_(controller|creative_controller|grid|crafting_grid|pattern_grid|fluid_grid|network_receiver|network_transmitter|relay|wireless_transmitter|disk_manipulator|crafter|crafter_manager|crafting_monitor|security_manager|detector)/,
		/refinedstorage:(1k*.|4k*.|16k*.|64k*.|256*.|1024k*.|4096k*.)/,
		/refinedstorage:(fortune*.|silk_touch_upgrade|.*disk_manipulator|.*disk_drive)/,
	])
})