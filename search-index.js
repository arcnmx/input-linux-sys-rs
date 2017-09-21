var searchIndex = {};
searchIndex["input_linux_sys"] = {"doc":"","items":[[3,"timeval","input_linux_sys","",null,null],[12,"tv_sec","","",0,null],[12,"tv_usec","","",0,null],[3,"input_event","","",null,null],[12,"time","","",1,null],[12,"type_","","",1,null],[12,"code","","",1,null],[12,"value","","",1,null],[3,"input_id","","",null,null],[12,"bustype","","",2,null],[12,"vendor","","",2,null],[12,"product","","",2,null],[12,"version","","",2,null],[3,"input_absinfo","","",null,null],[12,"value","","",3,null],[12,"minimum","","",3,null],[12,"maximum","","",3,null],[12,"fuzz","","",3,null],[12,"flat","","",3,null],[12,"resolution","","",3,null],[3,"input_keymap_entry","","",null,null],[12,"flags","","",4,null],[12,"len","","",4,null],[12,"index","","",4,null],[12,"keycode","","",4,null],[12,"scancode","","",4,null],[3,"input_mask","","",null,null],[12,"type_","","",5,null],[12,"codes_size","","",5,null],[12,"codes_ptr","","",5,null],[3,"ff_replay","","",null,null],[12,"length","","",6,null],[12,"delay","","",6,null],[3,"ff_trigger","","",null,null],[12,"button","","",7,null],[12,"interval","","",7,null],[3,"ff_envelope","","",null,null],[12,"attack_length","","",8,null],[12,"attack_level","","",8,null],[12,"fade_length","","",8,null],[12,"fade_level","","",8,null],[3,"ff_effect","","",null,null],[12,"type_","","",9,null],[12,"id","","",9,null],[12,"direction","","",9,null],[12,"trigger","","",9,null],[12,"replay","","",9,null],[12,"u","","",9,null],[3,"ff_constant_effect","","",null,null],[12,"level","","",10,null],[12,"envelope","","",10,null],[3,"ff_ramp_effect","","",null,null],[12,"start_level","","",11,null],[12,"end_level","","",11,null],[12,"envelope","","",11,null],[3,"ff_condition_effect","","",null,null],[12,"right_saturation","","",12,null],[12,"left_saturation","","",12,null],[12,"right_coeff","","",12,null],[12,"left_coeff","","",12,null],[12,"deadband","","",12,null],[12,"center","","",12,null],[3,"ff_periodic_effect","","",null,null],[12,"waveform","","",13,null],[12,"period","","",13,null],[12,"magnitude","","",13,null],[12,"offset","","",13,null],[12,"phase","","",13,null],[12,"envelope","","",13,null],[12,"custom_len","","",13,null],[12,"custom_data","","",13,null],[3,"ff_rumble_effect","","",null,null],[12,"strong_magnitude","","",14,null],[12,"weak_magnitude","","",14,null],[3,"ff_effect_union","","",null,null],[12,"u","","",15,null],[3,"uinput_setup","","",null,null],[12,"id","","",16,null],[12,"name","","",16,null],[12,"ff_effects_max","","",16,null],[3,"uinput_abs_setup","","",null,null],[12,"code","","",17,null],[3,"uinput_user_dev","","",null,null],[12,"name","","",18,null],[12,"id","","",18,null],[12,"ff_effects_max","","",18,null],[12,"absmax","","",18,null],[12,"absmin","","",18,null],[12,"absfuzz","","",18,null],[12,"absflat","","",18,null],[3,"uinput_ff_upload","","",null,null],[12,"request_id","","",19,null],[12,"retval","","",19,null],[12,"effect","","",19,null],[12,"old","","",19,null],[3,"uinput_ff_erase","","",null,null],[12,"request_id","","",20,null],[12,"retval","","",20,null],[12,"effect_id","","",20,null],[5,"ev_get_version","","get driver version",null,null],[5,"ev_get_id","","get device ID",null,null],[5,"ev_get_rep","","get repeat settings",null,null],[5,"ev_set_rep","","set repeat settings",null,null],[5,"ev_get_keycode","","get keycode",null,null],[5,"ev_get_keycode_v2","","get keycode",null,null],[5,"ev_set_keycode","","set keycode",null,null],[5,"ev_set_keycode_v2","","set keycode",null,null],[5,"ev_get_name","","get device name",null,null],[5,"ev_get_phys","","get physical location",null,null],[5,"ev_get_uniq","","get unique identifier",null,null],[5,"ev_get_prop","","get device properties",null,null],[5,"ev_get_mtslots","","get MT slot values",null,null],[5,"ev_get_key","","get global key state",null,null],[5,"ev_get_led","","get all LEDs",null,null],[5,"ev_get_snd","","get all sounds status",null,null],[5,"ev_get_sw","","get all switch states",null,null],[5,"ev_get_bit","","get event bits",null,null],[5,"ev_get_abs","","get abs value/limits",null,null],[5,"ev_set_abs","","set abs value/limits",null,null],[5,"ev_send_ff","","send a force effect to a force feedback device",null,null],[5,"ev_erase_ff","","Erase a force effect",null,{"inputs":[{"name":"c_int"},{"name":"c_int"}],"output":{"name":"result"}}],[5,"ev_get_effects","","Report number of effects playable at the same time",null,null],[5,"ev_grab","","Grab/Release device",null,{"inputs":[{"name":"c_int"},{"name":"c_int"}],"output":{"name":"result"}}],[5,"ev_revoke","","Revoke device access",null,{"inputs":[{"name":"c_int"},{"name":"c_int"}],"output":{"name":"result"}}],[5,"ev_get_mask","","Retrieve current event mask",null,null],[5,"ev_set_mask","","Set event mask",null,null],[5,"ev_set_clockid","","Set clockid to be used for timestamps",null,{"inputs":[{"name":"c_int"},{"name":"c_int"}],"output":{"name":"result"}}],[5,"ui_dev_create","","",null,{"inputs":[{"name":"c_int"}],"output":{"name":"result"}}],[5,"ui_dev_destroy","","",null,{"inputs":[{"name":"c_int"}],"output":{"name":"result"}}],[5,"ui_dev_setup","","Set device parameters for setup",null,null],[5,"ui_abs_setup","","Set absolute axis information for the device to setup",null,null],[5,"ui_set_evbit","","",null,{"inputs":[{"name":"c_int"},{"name":"c_int"}],"output":{"name":"result"}}],[5,"ui_set_keybit","","",null,{"inputs":[{"name":"c_int"},{"name":"c_int"}],"output":{"name":"result"}}],[5,"ui_set_absbit","","",null,{"inputs":[{"name":"c_int"},{"name":"c_int"}],"output":{"name":"result"}}],[5,"ui_set_relbit","","",null,{"inputs":[{"name":"c_int"},{"name":"c_int"}],"output":{"name":"result"}}],[5,"ui_set_mscbit","","",null,{"inputs":[{"name":"c_int"},{"name":"c_int"}],"output":{"name":"result"}}],[5,"ui_set_ledbit","","",null,{"inputs":[{"name":"c_int"},{"name":"c_int"}],"output":{"name":"result"}}],[5,"ui_set_sndbit","","",null,{"inputs":[{"name":"c_int"},{"name":"c_int"}],"output":{"name":"result"}}],[5,"ui_set_ffbit","","",null,{"inputs":[{"name":"c_int"},{"name":"c_int"}],"output":{"name":"result"}}],[5,"ui_set_phys","","",null,null],[5,"ui_set_swbit","","",null,{"inputs":[{"name":"c_int"},{"name":"c_int"}],"output":{"name":"result"}}],[5,"ui_set_propbit","","",null,{"inputs":[{"name":"c_int"},{"name":"c_int"}],"output":{"name":"result"}}],[5,"ui_begin_ff_upload","","",null,null],[5,"ui_end_ff_upload","","",null,null],[5,"ui_begin_ff_erase","","",null,null],[5,"ui_end_ff_erase","","",null,null],[5,"ui_get_sysname","","get the sysfs name of the created uinput device",null,null],[5,"ui_get_version","","Return version of uinput protocol",null,null],[11,"clone","","",15,{"inputs":[{"name":"self"}],"output":{"name":"ff_effect_union"}}],[11,"constant","","",15,{"inputs":[{"name":"self"}],"output":{"name":"ff_constant_effect"}}],[11,"constant_mut","","",15,{"inputs":[{"name":"self"}],"output":{"name":"ff_constant_effect"}}],[11,"ramp","","",15,{"inputs":[{"name":"self"}],"output":{"name":"ff_ramp_effect"}}],[11,"ramp_mut","","",15,{"inputs":[{"name":"self"}],"output":{"name":"ff_ramp_effect"}}],[11,"periodic","","",15,{"inputs":[{"name":"self"}],"output":{"name":"ff_periodic_effect"}}],[11,"periodic_mut","","",15,{"inputs":[{"name":"self"}],"output":{"name":"ff_periodic_effect"}}],[11,"condition","","",15,null],[11,"condition_mut","","",15,null],[11,"rumble","","",15,{"inputs":[{"name":"self"}],"output":{"name":"ff_rumble_effect"}}],[11,"rumble_mut","","",15,{"inputs":[{"name":"self"}],"output":{"name":"ff_rumble_effect"}}],[11,"clone","","",19,{"inputs":[{"name":"self"}],"output":{"name":"uinput_ff_upload"}}],[11,"clone","","",20,{"inputs":[{"name":"self"}],"output":{"name":"uinput_ff_erase"}}],[17,"INPUT_PROP_POINTER","","",null,null],[17,"INPUT_PROP_DIRECT","","",null,null],[17,"INPUT_PROP_BUTTONPAD","","",null,null],[17,"INPUT_PROP_SEMI_MT","","",null,null],[17,"INPUT_PROP_TOPBUTTONPAD","","",null,null],[17,"INPUT_PROP_POINTING_STICK","","",null,null],[17,"INPUT_PROP_ACCELEROMETER","","",null,null],[17,"INPUT_PROP_MAX","","",null,null],[17,"INPUT_PROP_CNT","","",null,null],[17,"EV_SYN","","",null,null],[17,"EV_KEY","","",null,null],[17,"EV_REL","","",null,null],[17,"EV_ABS","","",null,null],[17,"EV_MSC","","",null,null],[17,"EV_SW","","",null,null],[17,"EV_LED","","",null,null],[17,"EV_SND","","",null,null],[17,"EV_REP","","",null,null],[17,"EV_FF","","",null,null],[17,"EV_PWR","","",null,null],[17,"EV_FF_STATUS","","",null,null],[17,"EV_MAX","","",null,null],[17,"EV_CNT","","",null,null],[17,"SYN_REPORT","","",null,null],[17,"SYN_CONFIG","","",null,null],[17,"SYN_MT_REPORT","","",null,null],[17,"SYN_DROPPED","","",null,null],[17,"SYN_MAX","","",null,null],[17,"SYN_CNT","","",null,null],[17,"KEY_RESERVED","","",null,null],[17,"KEY_ESC","","",null,null],[17,"KEY_1","","",null,null],[17,"KEY_2","","",null,null],[17,"KEY_3","","",null,null],[17,"KEY_4","","",null,null],[17,"KEY_5","","",null,null],[17,"KEY_6","","",null,null],[17,"KEY_7","","",null,null],[17,"KEY_8","","",null,null],[17,"KEY_9","","",null,null],[17,"KEY_0","","",null,null],[17,"KEY_MINUS","","",null,null],[17,"KEY_EQUAL","","",null,null],[17,"KEY_BACKSPACE","","",null,null],[17,"KEY_TAB","","",null,null],[17,"KEY_Q","","",null,null],[17,"KEY_W","","",null,null],[17,"KEY_E","","",null,null],[17,"KEY_R","","",null,null],[17,"KEY_T","","",null,null],[17,"KEY_Y","","",null,null],[17,"KEY_U","","",null,null],[17,"KEY_I","","",null,null],[17,"KEY_O","","",null,null],[17,"KEY_P","","",null,null],[17,"KEY_LEFTBRACE","","",null,null],[17,"KEY_RIGHTBRACE","","",null,null],[17,"KEY_ENTER","","",null,null],[17,"KEY_LEFTCTRL","","",null,null],[17,"KEY_A","","",null,null],[17,"KEY_S","","",null,null],[17,"KEY_D","","",null,null],[17,"KEY_F","","",null,null],[17,"KEY_G","","",null,null],[17,"KEY_H","","",null,null],[17,"KEY_J","","",null,null],[17,"KEY_K","","",null,null],[17,"KEY_L","","",null,null],[17,"KEY_SEMICOLON","","",null,null],[17,"KEY_APOSTROPHE","","",null,null],[17,"KEY_GRAVE","","",null,null],[17,"KEY_LEFTSHIFT","","",null,null],[17,"KEY_BACKSLASH","","",null,null],[17,"KEY_Z","","",null,null],[17,"KEY_X","","",null,null],[17,"KEY_C","","",null,null],[17,"KEY_V","","",null,null],[17,"KEY_B","","",null,null],[17,"KEY_N","","",null,null],[17,"KEY_M","","",null,null],[17,"KEY_COMMA","","",null,null],[17,"KEY_DOT","","",null,null],[17,"KEY_SLASH","","",null,null],[17,"KEY_RIGHTSHIFT","","",null,null],[17,"KEY_KPASTERISK","","",null,null],[17,"KEY_LEFTALT","","",null,null],[17,"KEY_SPACE","","",null,null],[17,"KEY_CAPSLOCK","","",null,null],[17,"KEY_F1","","",null,null],[17,"KEY_F2","","",null,null],[17,"KEY_F3","","",null,null],[17,"KEY_F4","","",null,null],[17,"KEY_F5","","",null,null],[17,"KEY_F6","","",null,null],[17,"KEY_F7","","",null,null],[17,"KEY_F8","","",null,null],[17,"KEY_F9","","",null,null],[17,"KEY_F10","","",null,null],[17,"KEY_NUMLOCK","","",null,null],[17,"KEY_SCROLLLOCK","","",null,null],[17,"KEY_KP7","","",null,null],[17,"KEY_KP8","","",null,null],[17,"KEY_KP9","","",null,null],[17,"KEY_KPMINUS","","",null,null],[17,"KEY_KP4","","",null,null],[17,"KEY_KP5","","",null,null],[17,"KEY_KP6","","",null,null],[17,"KEY_KPPLUS","","",null,null],[17,"KEY_KP1","","",null,null],[17,"KEY_KP2","","",null,null],[17,"KEY_KP3","","",null,null],[17,"KEY_KP0","","",null,null],[17,"KEY_KPDOT","","",null,null],[17,"KEY_ZENKAKUHANKAKU","","",null,null],[17,"KEY_102ND","","",null,null],[17,"KEY_F11","","",null,null],[17,"KEY_F12","","",null,null],[17,"KEY_RO","","",null,null],[17,"KEY_KATAKANA","","",null,null],[17,"KEY_HIRAGANA","","",null,null],[17,"KEY_HENKAN","","",null,null],[17,"KEY_KATAKANAHIRAGANA","","",null,null],[17,"KEY_MUHENKAN","","",null,null],[17,"KEY_KPJPCOMMA","","",null,null],[17,"KEY_KPENTER","","",null,null],[17,"KEY_RIGHTCTRL","","",null,null],[17,"KEY_KPSLASH","","",null,null],[17,"KEY_SYSRQ","","",null,null],[17,"KEY_RIGHTALT","","",null,null],[17,"KEY_LINEFEED","","",null,null],[17,"KEY_HOME","","",null,null],[17,"KEY_UP","","",null,null],[17,"KEY_PAGEUP","","",null,null],[17,"KEY_LEFT","","",null,null],[17,"KEY_RIGHT","","",null,null],[17,"KEY_END","","",null,null],[17,"KEY_DOWN","","",null,null],[17,"KEY_PAGEDOWN","","",null,null],[17,"KEY_INSERT","","",null,null],[17,"KEY_DELETE","","",null,null],[17,"KEY_MACRO","","",null,null],[17,"KEY_MUTE","","",null,null],[17,"KEY_VOLUMEDOWN","","",null,null],[17,"KEY_VOLUMEUP","","",null,null],[17,"KEY_POWER","","",null,null],[17,"KEY_KPEQUAL","","",null,null],[17,"KEY_KPPLUSMINUS","","",null,null],[17,"KEY_PAUSE","","",null,null],[17,"KEY_SCALE","","",null,null],[17,"KEY_KPCOMMA","","",null,null],[17,"KEY_HANGEUL","","",null,null],[17,"KEY_HANGUEL","","",null,null],[17,"KEY_HANJA","","",null,null],[17,"KEY_YEN","","",null,null],[17,"KEY_LEFTMETA","","",null,null],[17,"KEY_RIGHTMETA","","",null,null],[17,"KEY_COMPOSE","","",null,null],[17,"KEY_STOP","","",null,null],[17,"KEY_AGAIN","","",null,null],[17,"KEY_PROPS","","",null,null],[17,"KEY_UNDO","","",null,null],[17,"KEY_FRONT","","",null,null],[17,"KEY_COPY","","",null,null],[17,"KEY_OPEN","","",null,null],[17,"KEY_PASTE","","",null,null],[17,"KEY_FIND","","",null,null],[17,"KEY_CUT","","",null,null],[17,"KEY_HELP","","",null,null],[17,"KEY_MENU","","",null,null],[17,"KEY_CALC","","",null,null],[17,"KEY_SETUP","","",null,null],[17,"KEY_SLEEP","","",null,null],[17,"KEY_WAKEUP","","",null,null],[17,"KEY_FILE","","",null,null],[17,"KEY_SENDFILE","","",null,null],[17,"KEY_DELETEFILE","","",null,null],[17,"KEY_XFER","","",null,null],[17,"KEY_PROG1","","",null,null],[17,"KEY_PROG2","","",null,null],[17,"KEY_WWW","","",null,null],[17,"KEY_MSDOS","","",null,null],[17,"KEY_COFFEE","","",null,null],[17,"KEY_SCREENLOCK","","",null,null],[17,"KEY_ROTATE_DISPLAY","","",null,null],[17,"KEY_DIRECTION","","",null,null],[17,"KEY_CYCLEWINDOWS","","",null,null],[17,"KEY_MAIL","","",null,null],[17,"KEY_BOOKMARKS","","",null,null],[17,"KEY_COMPUTER","","",null,null],[17,"KEY_BACK","","",null,null],[17,"KEY_FORWARD","","",null,null],[17,"KEY_CLOSECD","","",null,null],[17,"KEY_EJECTCD","","",null,null],[17,"KEY_EJECTCLOSECD","","",null,null],[17,"KEY_NEXTSONG","","",null,null],[17,"KEY_PLAYPAUSE","","",null,null],[17,"KEY_PREVIOUSSONG","","",null,null],[17,"KEY_STOPCD","","",null,null],[17,"KEY_RECORD","","",null,null],[17,"KEY_REWIND","","",null,null],[17,"KEY_PHONE","","",null,null],[17,"KEY_ISO","","",null,null],[17,"KEY_CONFIG","","",null,null],[17,"KEY_HOMEPAGE","","",null,null],[17,"KEY_REFRESH","","",null,null],[17,"KEY_EXIT","","",null,null],[17,"KEY_MOVE","","",null,null],[17,"KEY_EDIT","","",null,null],[17,"KEY_SCROLLUP","","",null,null],[17,"KEY_SCROLLDOWN","","",null,null],[17,"KEY_KPLEFTPAREN","","",null,null],[17,"KEY_KPRIGHTPAREN","","",null,null],[17,"KEY_NEW","","",null,null],[17,"KEY_REDO","","",null,null],[17,"KEY_F13","","",null,null],[17,"KEY_F14","","",null,null],[17,"KEY_F15","","",null,null],[17,"KEY_F16","","",null,null],[17,"KEY_F17","","",null,null],[17,"KEY_F18","","",null,null],[17,"KEY_F19","","",null,null],[17,"KEY_F20","","",null,null],[17,"KEY_F21","","",null,null],[17,"KEY_F22","","",null,null],[17,"KEY_F23","","",null,null],[17,"KEY_F24","","",null,null],[17,"KEY_PLAYCD","","",null,null],[17,"KEY_PAUSECD","","",null,null],[17,"KEY_PROG3","","",null,null],[17,"KEY_PROG4","","",null,null],[17,"KEY_DASHBOARD","","",null,null],[17,"KEY_SUSPEND","","",null,null],[17,"KEY_CLOSE","","",null,null],[17,"KEY_PLAY","","",null,null],[17,"KEY_FASTFORWARD","","",null,null],[17,"KEY_BASSBOOST","","",null,null],[17,"KEY_PRINT","","",null,null],[17,"KEY_HP","","",null,null],[17,"KEY_CAMERA","","",null,null],[17,"KEY_SOUND","","",null,null],[17,"KEY_QUESTION","","",null,null],[17,"KEY_EMAIL","","",null,null],[17,"KEY_CHAT","","",null,null],[17,"KEY_SEARCH","","",null,null],[17,"KEY_CONNECT","","",null,null],[17,"KEY_FINANCE","","",null,null],[17,"KEY_SPORT","","",null,null],[17,"KEY_SHOP","","",null,null],[17,"KEY_ALTERASE","","",null,null],[17,"KEY_CANCEL","","",null,null],[17,"KEY_BRIGHTNESSDOWN","","",null,null],[17,"KEY_BRIGHTNESSUP","","",null,null],[17,"KEY_MEDIA","","",null,null],[17,"KEY_SWITCHVIDEOMODE","","",null,null],[17,"KEY_KBDILLUMTOGGLE","","",null,null],[17,"KEY_KBDILLUMDOWN","","",null,null],[17,"KEY_KBDILLUMUP","","",null,null],[17,"KEY_SEND","","",null,null],[17,"KEY_REPLY","","",null,null],[17,"KEY_FORWARDMAIL","","",null,null],[17,"KEY_SAVE","","",null,null],[17,"KEY_DOCUMENTS","","",null,null],[17,"KEY_BATTERY","","",null,null],[17,"KEY_BLUETOOTH","","",null,null],[17,"KEY_WLAN","","",null,null],[17,"KEY_UWB","","",null,null],[17,"KEY_UNKNOWN","","",null,null],[17,"KEY_VIDEO_NEXT","","",null,null],[17,"KEY_VIDEO_PREV","","",null,null],[17,"KEY_BRIGHTNESS_CYCLE","","",null,null],[17,"KEY_BRIGHTNESS_AUTO","","",null,null],[17,"KEY_BRIGHTNESS_ZERO","","",null,null],[17,"KEY_DISPLAY_OFF","","",null,null],[17,"KEY_WWAN","","",null,null],[17,"KEY_WIMAX","","",null,null],[17,"KEY_RFKILL","","",null,null],[17,"KEY_MICMUTE","","",null,null],[17,"BTN_MISC","","",null,null],[17,"BTN_0","","",null,null],[17,"BTN_1","","",null,null],[17,"BTN_2","","",null,null],[17,"BTN_3","","",null,null],[17,"BTN_4","","",null,null],[17,"BTN_5","","",null,null],[17,"BTN_6","","",null,null],[17,"BTN_7","","",null,null],[17,"BTN_8","","",null,null],[17,"BTN_9","","",null,null],[17,"BTN_MOUSE","","",null,null],[17,"BTN_LEFT","","",null,null],[17,"BTN_RIGHT","","",null,null],[17,"BTN_MIDDLE","","",null,null],[17,"BTN_SIDE","","",null,null],[17,"BTN_EXTRA","","",null,null],[17,"BTN_FORWARD","","",null,null],[17,"BTN_BACK","","",null,null],[17,"BTN_TASK","","",null,null],[17,"BTN_JOYSTICK","","",null,null],[17,"BTN_TRIGGER","","",null,null],[17,"BTN_THUMB","","",null,null],[17,"BTN_THUMB2","","",null,null],[17,"BTN_TOP","","",null,null],[17,"BTN_TOP2","","",null,null],[17,"BTN_PINKIE","","",null,null],[17,"BTN_BASE","","",null,null],[17,"BTN_BASE2","","",null,null],[17,"BTN_BASE3","","",null,null],[17,"BTN_BASE4","","",null,null],[17,"BTN_BASE5","","",null,null],[17,"BTN_BASE6","","",null,null],[17,"BTN_DEAD","","",null,null],[17,"BTN_GAMEPAD","","",null,null],[17,"BTN_SOUTH","","",null,null],[17,"BTN_A","","",null,null],[17,"BTN_EAST","","",null,null],[17,"BTN_B","","",null,null],[17,"BTN_C","","",null,null],[17,"BTN_NORTH","","",null,null],[17,"BTN_X","","",null,null],[17,"BTN_WEST","","",null,null],[17,"BTN_Y","","",null,null],[17,"BTN_Z","","",null,null],[17,"BTN_TL","","",null,null],[17,"BTN_TR","","",null,null],[17,"BTN_TL2","","",null,null],[17,"BTN_TR2","","",null,null],[17,"BTN_SELECT","","",null,null],[17,"BTN_START","","",null,null],[17,"BTN_MODE","","",null,null],[17,"BTN_THUMBL","","",null,null],[17,"BTN_THUMBR","","",null,null],[17,"BTN_DIGI","","",null,null],[17,"BTN_TOOL_PEN","","",null,null],[17,"BTN_TOOL_RUBBER","","",null,null],[17,"BTN_TOOL_BRUSH","","",null,null],[17,"BTN_TOOL_PENCIL","","",null,null],[17,"BTN_TOOL_AIRBRUSH","","",null,null],[17,"BTN_TOOL_FINGER","","",null,null],[17,"BTN_TOOL_MOUSE","","",null,null],[17,"BTN_TOOL_LENS","","",null,null],[17,"BTN_TOOL_QUINTTAP","","",null,null],[17,"BTN_TOUCH","","",null,null],[17,"BTN_STYLUS","","",null,null],[17,"BTN_STYLUS2","","",null,null],[17,"BTN_TOOL_DOUBLETAP","","",null,null],[17,"BTN_TOOL_TRIPLETAP","","",null,null],[17,"BTN_TOOL_QUADTAP","","",null,null],[17,"BTN_WHEEL","","",null,null],[17,"BTN_GEAR_DOWN","","",null,null],[17,"BTN_GEAR_UP","","",null,null],[17,"KEY_OK","","",null,null],[17,"KEY_SELECT","","",null,null],[17,"KEY_GOTO","","",null,null],[17,"KEY_CLEAR","","",null,null],[17,"KEY_POWER2","","",null,null],[17,"KEY_OPTION","","",null,null],[17,"KEY_INFO","","",null,null],[17,"KEY_TIME","","",null,null],[17,"KEY_VENDOR","","",null,null],[17,"KEY_ARCHIVE","","",null,null],[17,"KEY_PROGRAM","","",null,null],[17,"KEY_CHANNEL","","",null,null],[17,"KEY_FAVORITES","","",null,null],[17,"KEY_EPG","","",null,null],[17,"KEY_PVR","","",null,null],[17,"KEY_MHP","","",null,null],[17,"KEY_LANGUAGE","","",null,null],[17,"KEY_TITLE","","",null,null],[17,"KEY_SUBTITLE","","",null,null],[17,"KEY_ANGLE","","",null,null],[17,"KEY_ZOOM","","",null,null],[17,"KEY_MODE","","",null,null],[17,"KEY_KEYBOARD","","",null,null],[17,"KEY_SCREEN","","",null,null],[17,"KEY_PC","","",null,null],[17,"KEY_TV","","",null,null],[17,"KEY_TV2","","",null,null],[17,"KEY_VCR","","",null,null],[17,"KEY_VCR2","","",null,null],[17,"KEY_SAT","","",null,null],[17,"KEY_SAT2","","",null,null],[17,"KEY_CD","","",null,null],[17,"KEY_TAPE","","",null,null],[17,"KEY_RADIO","","",null,null],[17,"KEY_TUNER","","",null,null],[17,"KEY_PLAYER","","",null,null],[17,"KEY_TEXT","","",null,null],[17,"KEY_DVD","","",null,null],[17,"KEY_AUX","","",null,null],[17,"KEY_MP3","","",null,null],[17,"KEY_AUDIO","","",null,null],[17,"KEY_VIDEO","","",null,null],[17,"KEY_DIRECTORY","","",null,null],[17,"KEY_LIST","","",null,null],[17,"KEY_MEMO","","",null,null],[17,"KEY_CALENDAR","","",null,null],[17,"KEY_RED","","",null,null],[17,"KEY_GREEN","","",null,null],[17,"KEY_YELLOW","","",null,null],[17,"KEY_BLUE","","",null,null],[17,"KEY_CHANNELUP","","",null,null],[17,"KEY_CHANNELDOWN","","",null,null],[17,"KEY_FIRST","","",null,null],[17,"KEY_LAST","","",null,null],[17,"KEY_AB","","",null,null],[17,"KEY_NEXT","","",null,null],[17,"KEY_RESTART","","",null,null],[17,"KEY_SLOW","","",null,null],[17,"KEY_SHUFFLE","","",null,null],[17,"KEY_BREAK","","",null,null],[17,"KEY_PREVIOUS","","",null,null],[17,"KEY_DIGITS","","",null,null],[17,"KEY_TEEN","","",null,null],[17,"KEY_TWEN","","",null,null],[17,"KEY_VIDEOPHONE","","",null,null],[17,"KEY_GAMES","","",null,null],[17,"KEY_ZOOMIN","","",null,null],[17,"KEY_ZOOMOUT","","",null,null],[17,"KEY_ZOOMRESET","","",null,null],[17,"KEY_WORDPROCESSOR","","",null,null],[17,"KEY_EDITOR","","",null,null],[17,"KEY_SPREADSHEET","","",null,null],[17,"KEY_GRAPHICSEDITOR","","",null,null],[17,"KEY_PRESENTATION","","",null,null],[17,"KEY_DATABASE","","",null,null],[17,"KEY_NEWS","","",null,null],[17,"KEY_VOICEMAIL","","",null,null],[17,"KEY_ADDRESSBOOK","","",null,null],[17,"KEY_MESSENGER","","",null,null],[17,"KEY_DISPLAYTOGGLE","","",null,null],[17,"KEY_BRIGHTNESS_TOGGLE","","",null,null],[17,"KEY_SPELLCHECK","","",null,null],[17,"KEY_LOGOFF","","",null,null],[17,"KEY_DOLLAR","","",null,null],[17,"KEY_EURO","","",null,null],[17,"KEY_FRAMEBACK","","",null,null],[17,"KEY_FRAMEFORWARD","","",null,null],[17,"KEY_CONTEXT_MENU","","",null,null],[17,"KEY_MEDIA_REPEAT","","",null,null],[17,"KEY_10CHANNELSUP","","",null,null],[17,"KEY_10CHANNELSDOWN","","",null,null],[17,"KEY_IMAGES","","",null,null],[17,"KEY_DEL_EOL","","",null,null],[17,"KEY_DEL_EOS","","",null,null],[17,"KEY_INS_LINE","","",null,null],[17,"KEY_DEL_LINE","","",null,null],[17,"KEY_FN","","",null,null],[17,"KEY_FN_ESC","","",null,null],[17,"KEY_FN_F1","","",null,null],[17,"KEY_FN_F2","","",null,null],[17,"KEY_FN_F3","","",null,null],[17,"KEY_FN_F4","","",null,null],[17,"KEY_FN_F5","","",null,null],[17,"KEY_FN_F6","","",null,null],[17,"KEY_FN_F7","","",null,null],[17,"KEY_FN_F8","","",null,null],[17,"KEY_FN_F9","","",null,null],[17,"KEY_FN_F10","","",null,null],[17,"KEY_FN_F11","","",null,null],[17,"KEY_FN_F12","","",null,null],[17,"KEY_FN_1","","",null,null],[17,"KEY_FN_2","","",null,null],[17,"KEY_FN_D","","",null,null],[17,"KEY_FN_E","","",null,null],[17,"KEY_FN_F","","",null,null],[17,"KEY_FN_S","","",null,null],[17,"KEY_FN_B","","",null,null],[17,"KEY_BRL_DOT1","","",null,null],[17,"KEY_BRL_DOT2","","",null,null],[17,"KEY_BRL_DOT3","","",null,null],[17,"KEY_BRL_DOT4","","",null,null],[17,"KEY_BRL_DOT5","","",null,null],[17,"KEY_BRL_DOT6","","",null,null],[17,"KEY_BRL_DOT7","","",null,null],[17,"KEY_BRL_DOT8","","",null,null],[17,"KEY_BRL_DOT9","","",null,null],[17,"KEY_BRL_DOT10","","",null,null],[17,"KEY_NUMERIC_0","","",null,null],[17,"KEY_NUMERIC_1","","",null,null],[17,"KEY_NUMERIC_2","","",null,null],[17,"KEY_NUMERIC_3","","",null,null],[17,"KEY_NUMERIC_4","","",null,null],[17,"KEY_NUMERIC_5","","",null,null],[17,"KEY_NUMERIC_6","","",null,null],[17,"KEY_NUMERIC_7","","",null,null],[17,"KEY_NUMERIC_8","","",null,null],[17,"KEY_NUMERIC_9","","",null,null],[17,"KEY_NUMERIC_STAR","","",null,null],[17,"KEY_NUMERIC_POUND","","",null,null],[17,"KEY_NUMERIC_A","","",null,null],[17,"KEY_NUMERIC_B","","",null,null],[17,"KEY_NUMERIC_C","","",null,null],[17,"KEY_NUMERIC_D","","",null,null],[17,"KEY_CAMERA_FOCUS","","",null,null],[17,"KEY_WPS_BUTTON","","",null,null],[17,"KEY_TOUCHPAD_TOGGLE","","",null,null],[17,"KEY_TOUCHPAD_ON","","",null,null],[17,"KEY_TOUCHPAD_OFF","","",null,null],[17,"KEY_CAMERA_ZOOMIN","","",null,null],[17,"KEY_CAMERA_ZOOMOUT","","",null,null],[17,"KEY_CAMERA_UP","","",null,null],[17,"KEY_CAMERA_DOWN","","",null,null],[17,"KEY_CAMERA_LEFT","","",null,null],[17,"KEY_CAMERA_RIGHT","","",null,null],[17,"KEY_ATTENDANT_ON","","",null,null],[17,"KEY_ATTENDANT_OFF","","",null,null],[17,"KEY_ATTENDANT_TOGGLE","","",null,null],[17,"KEY_LIGHTS_TOGGLE","","",null,null],[17,"BTN_DPAD_UP","","",null,null],[17,"BTN_DPAD_DOWN","","",null,null],[17,"BTN_DPAD_LEFT","","",null,null],[17,"BTN_DPAD_RIGHT","","",null,null],[17,"KEY_ALS_TOGGLE","","",null,null],[17,"KEY_BUTTONCONFIG","","",null,null],[17,"KEY_TASKMANAGER","","",null,null],[17,"KEY_JOURNAL","","",null,null],[17,"KEY_CONTROLPANEL","","",null,null],[17,"KEY_APPSELECT","","",null,null],[17,"KEY_SCREENSAVER","","",null,null],[17,"KEY_VOICECOMMAND","","",null,null],[17,"KEY_BRIGHTNESS_MIN","","",null,null],[17,"KEY_BRIGHTNESS_MAX","","",null,null],[17,"KEY_KBDINPUTASSIST_PREV","","",null,null],[17,"KEY_KBDINPUTASSIST_NEXT","","",null,null],[17,"KEY_KBDINPUTASSIST_PREVGROUP","","",null,null],[17,"KEY_KBDINPUTASSIST_NEXTGROUP","","",null,null],[17,"KEY_KBDINPUTASSIST_ACCEPT","","",null,null],[17,"KEY_KBDINPUTASSIST_CANCEL","","",null,null],[17,"KEY_RIGHT_UP","","",null,null],[17,"KEY_RIGHT_DOWN","","",null,null],[17,"KEY_LEFT_UP","","",null,null],[17,"KEY_LEFT_DOWN","","",null,null],[17,"KEY_ROOT_MENU","","",null,null],[17,"KEY_MEDIA_TOP_MENU","","",null,null],[17,"KEY_NUMERIC_11","","",null,null],[17,"KEY_NUMERIC_12","","",null,null],[17,"KEY_AUDIO_DESC","","",null,null],[17,"KEY_3D_MODE","","",null,null],[17,"KEY_NEXT_FAVORITE","","",null,null],[17,"KEY_STOP_RECORD","","",null,null],[17,"KEY_PAUSE_RECORD","","",null,null],[17,"KEY_VOD","","",null,null],[17,"KEY_UNMUTE","","",null,null],[17,"KEY_FASTREVERSE","","",null,null],[17,"KEY_SLOWREVERSE","","",null,null],[17,"KEY_DATA","","",null,null],[17,"KEY_ONSCREEN_KEYBOARD","","",null,null],[17,"BTN_TRIGGER_HAPPY","","",null,null],[17,"BTN_TRIGGER_HAPPY1","","",null,null],[17,"BTN_TRIGGER_HAPPY2","","",null,null],[17,"BTN_TRIGGER_HAPPY3","","",null,null],[17,"BTN_TRIGGER_HAPPY4","","",null,null],[17,"BTN_TRIGGER_HAPPY5","","",null,null],[17,"BTN_TRIGGER_HAPPY6","","",null,null],[17,"BTN_TRIGGER_HAPPY7","","",null,null],[17,"BTN_TRIGGER_HAPPY8","","",null,null],[17,"BTN_TRIGGER_HAPPY9","","",null,null],[17,"BTN_TRIGGER_HAPPY10","","",null,null],[17,"BTN_TRIGGER_HAPPY11","","",null,null],[17,"BTN_TRIGGER_HAPPY12","","",null,null],[17,"BTN_TRIGGER_HAPPY13","","",null,null],[17,"BTN_TRIGGER_HAPPY14","","",null,null],[17,"BTN_TRIGGER_HAPPY15","","",null,null],[17,"BTN_TRIGGER_HAPPY16","","",null,null],[17,"BTN_TRIGGER_HAPPY17","","",null,null],[17,"BTN_TRIGGER_HAPPY18","","",null,null],[17,"BTN_TRIGGER_HAPPY19","","",null,null],[17,"BTN_TRIGGER_HAPPY20","","",null,null],[17,"BTN_TRIGGER_HAPPY21","","",null,null],[17,"BTN_TRIGGER_HAPPY22","","",null,null],[17,"BTN_TRIGGER_HAPPY23","","",null,null],[17,"BTN_TRIGGER_HAPPY24","","",null,null],[17,"BTN_TRIGGER_HAPPY25","","",null,null],[17,"BTN_TRIGGER_HAPPY26","","",null,null],[17,"BTN_TRIGGER_HAPPY27","","",null,null],[17,"BTN_TRIGGER_HAPPY28","","",null,null],[17,"BTN_TRIGGER_HAPPY29","","",null,null],[17,"BTN_TRIGGER_HAPPY30","","",null,null],[17,"BTN_TRIGGER_HAPPY31","","",null,null],[17,"BTN_TRIGGER_HAPPY32","","",null,null],[17,"BTN_TRIGGER_HAPPY33","","",null,null],[17,"BTN_TRIGGER_HAPPY34","","",null,null],[17,"BTN_TRIGGER_HAPPY35","","",null,null],[17,"BTN_TRIGGER_HAPPY36","","",null,null],[17,"BTN_TRIGGER_HAPPY37","","",null,null],[17,"BTN_TRIGGER_HAPPY38","","",null,null],[17,"BTN_TRIGGER_HAPPY39","","",null,null],[17,"BTN_TRIGGER_HAPPY40","","",null,null],[17,"KEY_MIN_INTERESTING","","",null,null],[17,"KEY_MAX","","",null,null],[17,"KEY_CNT","","",null,null],[17,"REL_X","","",null,null],[17,"REL_Y","","",null,null],[17,"REL_Z","","",null,null],[17,"REL_RX","","",null,null],[17,"REL_RY","","",null,null],[17,"REL_RZ","","",null,null],[17,"REL_HWHEEL","","",null,null],[17,"REL_DIAL","","",null,null],[17,"REL_WHEEL","","",null,null],[17,"REL_MISC","","",null,null],[17,"REL_MAX","","",null,null],[17,"REL_CNT","","",null,null],[17,"ABS_X","","",null,null],[17,"ABS_Y","","",null,null],[17,"ABS_Z","","",null,null],[17,"ABS_RX","","",null,null],[17,"ABS_RY","","",null,null],[17,"ABS_RZ","","",null,null],[17,"ABS_THROTTLE","","",null,null],[17,"ABS_RUDDER","","",null,null],[17,"ABS_WHEEL","","",null,null],[17,"ABS_GAS","","",null,null],[17,"ABS_BRAKE","","",null,null],[17,"ABS_HAT0X","","",null,null],[17,"ABS_HAT0Y","","",null,null],[17,"ABS_HAT1X","","",null,null],[17,"ABS_HAT1Y","","",null,null],[17,"ABS_HAT2X","","",null,null],[17,"ABS_HAT2Y","","",null,null],[17,"ABS_HAT3X","","",null,null],[17,"ABS_HAT3Y","","",null,null],[17,"ABS_PRESSURE","","",null,null],[17,"ABS_DISTANCE","","",null,null],[17,"ABS_TILT_X","","",null,null],[17,"ABS_TILT_Y","","",null,null],[17,"ABS_TOOL_WIDTH","","",null,null],[17,"ABS_VOLUME","","",null,null],[17,"ABS_MISC","","",null,null],[17,"ABS_MT_SLOT","","",null,null],[17,"ABS_MT_TOUCH_MAJOR","","",null,null],[17,"ABS_MT_TOUCH_MINOR","","",null,null],[17,"ABS_MT_WIDTH_MAJOR","","",null,null],[17,"ABS_MT_WIDTH_MINOR","","",null,null],[17,"ABS_MT_ORIENTATION","","",null,null],[17,"ABS_MT_POSITION_X","","",null,null],[17,"ABS_MT_POSITION_Y","","",null,null],[17,"ABS_MT_TOOL_TYPE","","",null,null],[17,"ABS_MT_BLOB_ID","","",null,null],[17,"ABS_MT_TRACKING_ID","","",null,null],[17,"ABS_MT_PRESSURE","","",null,null],[17,"ABS_MT_DISTANCE","","",null,null],[17,"ABS_MT_TOOL_X","","",null,null],[17,"ABS_MT_TOOL_Y","","",null,null],[17,"ABS_MAX","","",null,null],[17,"ABS_CNT","","",null,null],[17,"SW_LID","","",null,null],[17,"SW_TABLET_MODE","","",null,null],[17,"SW_HEADPHONE_INSERT","","",null,null],[17,"SW_RFKILL_ALL","","",null,null],[17,"SW_RADIO","","",null,null],[17,"SW_MICROPHONE_INSERT","","",null,null],[17,"SW_DOCK","","",null,null],[17,"SW_LINEOUT_INSERT","","",null,null],[17,"SW_JACK_PHYSICAL_INSERT","","",null,null],[17,"SW_VIDEOOUT_INSERT","","",null,null],[17,"SW_CAMERA_LENS_COVER","","",null,null],[17,"SW_KEYPAD_SLIDE","","",null,null],[17,"SW_FRONT_PROXIMITY","","",null,null],[17,"SW_ROTATE_LOCK","","",null,null],[17,"SW_LINEIN_INSERT","","",null,null],[17,"SW_MUTE_DEVICE","","",null,null],[17,"SW_PEN_INSERTED","","",null,null],[17,"SW_MAX","","",null,null],[17,"SW_CNT","","",null,null],[17,"MSC_SERIAL","","",null,null],[17,"MSC_PULSELED","","",null,null],[17,"MSC_GESTURE","","",null,null],[17,"MSC_RAW","","",null,null],[17,"MSC_SCAN","","",null,null],[17,"MSC_TIMESTAMP","","",null,null],[17,"MSC_MAX","","",null,null],[17,"MSC_CNT","","",null,null],[17,"LED_NUML","","",null,null],[17,"LED_CAPSL","","",null,null],[17,"LED_SCROLLL","","",null,null],[17,"LED_COMPOSE","","",null,null],[17,"LED_KANA","","",null,null],[17,"LED_SLEEP","","",null,null],[17,"LED_SUSPEND","","",null,null],[17,"LED_MUTE","","",null,null],[17,"LED_MISC","","",null,null],[17,"LED_MAIL","","",null,null],[17,"LED_CHARGING","","",null,null],[17,"LED_MAX","","",null,null],[17,"LED_CNT","","",null,null],[17,"REP_DELAY","","",null,null],[17,"REP_PERIOD","","",null,null],[17,"REP_MAX","","",null,null],[17,"REP_CNT","","",null,null],[17,"SND_CLICK","","",null,null],[17,"SND_BELL","","",null,null],[17,"SND_TONE","","",null,null],[17,"SND_MAX","","",null,null],[17,"SND_CNT","","",null,null],[17,"EV_VERSION","","Protocol version.",null,null],[17,"ID_BUS","","",null,null],[17,"ID_VENDOR","","",null,null],[17,"ID_PRODUCT","","",null,null],[17,"ID_VERSION","","",null,null],[17,"BUS_PCI","","",null,null],[17,"BUS_ISAPNP","","",null,null],[17,"BUS_USB","","",null,null],[17,"BUS_HIL","","",null,null],[17,"BUS_BLUETOOTH","","",null,null],[17,"BUS_VIRTUAL","","",null,null],[17,"BUS_ISA","","",null,null],[17,"BUS_I8042","","",null,null],[17,"BUS_XTKBD","","",null,null],[17,"BUS_RS232","","",null,null],[17,"BUS_GAMEPORT","","",null,null],[17,"BUS_PARPORT","","",null,null],[17,"BUS_AMIGA","","",null,null],[17,"BUS_ADB","","",null,null],[17,"BUS_I2C","","",null,null],[17,"BUS_HOST","","",null,null],[17,"BUS_GSC","","",null,null],[17,"BUS_ATARI","","",null,null],[17,"BUS_SPI","","",null,null],[17,"BUS_RMI","","",null,null],[17,"BUS_CEC","","",null,null],[17,"BUS_INTEL_ISHTP","","",null,null],[17,"MT_TOOL_FINGER","","",null,null],[17,"MT_TOOL_PEN","","",null,null],[17,"MT_TOOL_PALM","","",null,null],[17,"MT_TOOL_MAX","","",null,null],[17,"FF_STATUS_STOPPED","","",null,null],[17,"FF_STATUS_PLAYING","","",null,null],[17,"FF_STATUS_MAX","","",null,null],[17,"UINPUT_MAX_NAME_SIZE","","",null,null],[17,"UINPUT_VERSION","","",null,null],[17,"EV_UINPUT","","This is the new event type, used only by uinput. 'code' is UI_FF_UPLOAD or UI_FF_ERASE, and 'value' is the unique request ID.",null,null],[17,"UI_FF_UPLOAD","","",null,null],[17,"UI_FF_ERASE","","",null,null],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"ff_replay"}}],[11,"clone","","",14,{"inputs":[{"name":"self"}],"output":{"name":"ff_rumble_effect"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"input_event"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"timeval"}}],[11,"clone","","",13,{"inputs":[{"name":"self"}],"output":{"name":"ff_periodic_effect"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"ff_trigger"}}],[11,"clone","","",9,{"inputs":[{"name":"self"}],"output":{"name":"ff_effect"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"input_mask"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"input_id"}}],[11,"clone","","",11,{"inputs":[{"name":"self"}],"output":{"name":"ff_ramp_effect"}}],[11,"clone","","",12,{"inputs":[{"name":"self"}],"output":{"name":"ff_condition_effect"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"input_absinfo"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"input_keymap_entry"}}],[11,"clone","","",8,{"inputs":[{"name":"self"}],"output":{"name":"ff_envelope"}}],[11,"clone","","",10,{"inputs":[{"name":"self"}],"output":{"name":"ff_constant_effect"}}]],"paths":[[3,"timeval"],[3,"input_event"],[3,"input_id"],[3,"input_absinfo"],[3,"input_keymap_entry"],[3,"input_mask"],[3,"ff_replay"],[3,"ff_trigger"],[3,"ff_envelope"],[3,"ff_effect"],[3,"ff_constant_effect"],[3,"ff_ramp_effect"],[3,"ff_condition_effect"],[3,"ff_periodic_effect"],[3,"ff_rumble_effect"],[3,"ff_effect_union"],[3,"uinput_setup"],[3,"uinput_abs_setup"],[3,"uinput_user_dev"],[3,"uinput_ff_upload"],[3,"uinput_ff_erase"]]};
initSearch(searchIndex);
