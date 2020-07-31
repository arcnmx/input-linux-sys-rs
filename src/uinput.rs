use libc::{c_char, c_int, c_uint};

pub const UINPUT_MAX_NAME_SIZE: c_int = 80;

pub const UINPUT_VERSION: c_int = 5;

/// This is the new event type, used only by uinput.
/// 'code' is UI_FF_UPLOAD or UI_FF_ERASE, and 'value' is the unique request ID.
pub const EV_UINPUT: c_int = 0x0101;
pub const UI_FF_UPLOAD: c_int = 1;
pub const UI_FF_ERASE: c_int = 2;

#[repr(C)]
pub struct uinput_setup {
    pub id: ::input_id,
    pub name: [c_char; UINPUT_MAX_NAME_SIZE as usize],
    pub ff_effects_max: u32,
}

#[repr(C)]
pub struct uinput_abs_setup {
    pub code: u16,
    pub absinfo: ::input_absinfo,
}

#[repr(C)]
pub struct uinput_user_dev {
    pub name: [c_char; UINPUT_MAX_NAME_SIZE as usize],
    pub id: ::input_id,

    pub ff_effects_max: u32,
    pub absmax: [i32; ::ABS_CNT as usize],
    pub absmin: [i32; ::ABS_CNT as usize],
    pub absfuzz: [i32; ::ABS_CNT as usize],
    pub absflat: [i32; ::ABS_CNT as usize],
}

#[repr(C)]
#[derive(Copy, Clone)]
pub struct uinput_ff_upload {
    pub request_id: u32,
    pub retval: i32,
    pub effect: ::ff_effect,
    pub old: ::ff_effect,
}

#[repr(C)]
#[derive(Copy, Clone)]
pub struct uinput_ff_erase {
    pub request_id: u32,
    pub retval: i32,
    pub effect_id: u32,
}

ioctl!(none ui_dev_create with b'U', 1);
ioctl!(none ui_dev_destroy with b'U', 2);

ioctl! {
    /// Set device parameters for setup
    write_ptr ui_dev_setup with b'U', 3; uinput_setup
}

ioctl! {
    /// Set absolute axis information for the device to setup
    write_ptr ui_abs_setup with b'U', 4; uinput_abs_setup
}

ioctl!(write_int ui_set_evbit with b'U', 100);
ioctl!(write_int ui_set_keybit with b'U', 101);
ioctl!(write_int ui_set_relbit with b'U', 102);
ioctl!(write_int ui_set_absbit with b'U', 103);
ioctl!(write_int ui_set_mscbit with b'U', 104);
ioctl!(write_int ui_set_ledbit with b'U', 105);
ioctl!(write_int ui_set_sndbit with b'U', 106);
ioctl!(write_int ui_set_ffbit with b'U', 107);
ioctl!(write_ptr ui_set_phys with b'U', 108; c_char);
ioctl!(write_int ui_set_swbit with b'U', 109);
ioctl!(write_int ui_set_propbit with b'U', 110);

ioctl!(readwrite ui_begin_ff_upload with b'U', 200; uinput_ff_upload);
ioctl!(write_ptr ui_end_ff_upload with b'U', 201; uinput_ff_upload);

ioctl!(readwrite ui_begin_ff_erase with b'U', 202; uinput_ff_erase);
ioctl!(write_ptr ui_end_ff_erase with b'U', 203; uinput_ff_erase);

ioctl! {
    /// get the sysfs name of the created uinput device
    read_buf ui_get_sysname with b'U', 44; c_char
}

ioctl! {
    /// Return version of uinput protocol
    read ui_get_version with b'U', 45; c_uint
}
