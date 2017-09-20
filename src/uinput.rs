use libc::{c_char, c_int, c_uint, int32_t, uint32_t};

pub const UINPUT_MAX_NAME_SIZE: c_int = 80;

pub const UINPUT_VERSION: c_int = 5;

#[repr(C)]
pub struct uinput_user_dev {
    pub name: [c_char; UINPUT_MAX_NAME_SIZE as usize],
    pub id: ::input_id,

    pub ff_effects_max: uint32_t,
    pub absmax: [int32_t; ::ABS_CNT as usize],
    pub absmin: [int32_t; ::ABS_CNT as usize],
    pub absfuzz: [int32_t; ::ABS_CNT as usize],
    pub absflat: [int32_t; ::ABS_CNT as usize],
}

#[repr(C)]
#[derive(Copy, Clone)]
pub struct uinput_ff_upload {
    pub request_id: uint32_t,
    pub retval: int32_t,
    pub effect: ::ff_effect,
    pub old: ::ff_effect,
}

#[repr(C)]
#[derive(Copy, Clone)]
pub struct uinput_ff_erase {
    pub request_id: uint32_t,
    pub retval: int32_t,
    pub effect_id: uint32_t,
}

ioctl!(none ui_dev_create with b'U', 1);
ioctl!(none ui_dev_destroy with b'U', 2);

ioctl!(write_int ui_set_evbit with b'U', 100);
ioctl!(write_int ui_set_keybit with b'U', 101);
ioctl!(write_int ui_set_absbit with b'U', 102);
ioctl!(write_int ui_set_relbit with b'U', 103);
ioctl!(write_int ui_set_mscbit with b'U', 104);
ioctl!(write_int ui_set_ledbit with b'U', 105);
ioctl!(write_int ui_set_sndbit with b'U', 106);
ioctl!(write_int ui_set_ffbit with b'U', 107);
ioctl!(write_ptr ui_set_phys with b'U', 108; c_char);
ioctl!(write_int ui_set_swbit with b'U', 109);
ioctl!(write_int ui_set_propbit with b'U', 110);

//ioctl!(readwrite ui_begin_ff_upload with b'U', 200, uinput_ff_upload);
//ioctl!(readwrite ui_end_ff_upload with b'U', 201, uinput_ff_upload);

//ioctl!(readwrite ui_begin_ff_erase with b'U', 200, uinput_ff_erase);
//ioctl!(readwrite ui_end_ff_erase with b'U', 201, uinput_ff_erase);

ioctl!(read ui_get_version with b'U', 45; c_uint);
