extern crate libc;

#[macro_use]
extern crate nix;

use std::fmt;
use std::mem::{self, transmute};

use libc::{c_char, c_int, c_uint, c_ulong};
use libc::{uint8_t, int16_t, uint16_t, int32_t, uint32_t};
use libc::timeval;

mod events;
pub use events::*;

pub const UINPUT_MAX_NAME_SIZE: c_int = 80;

#[derive(Clone, Copy)]
#[repr(C)]
pub struct input_event {
    pub time: timeval,
    pub kind: uint16_t, // type
    pub code: uint16_t,
    pub value: int32_t,
}

impl fmt::Debug for input_event {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        fmt.debug_struct("input_event")
            .field("tv_sec", &self.time.tv_sec)
            .field("tv_usec", &self.time.tv_usec)
            .field("kind", &self.kind)
            .field("code", &self.code)
            .field("value", &self.value)
            .finish()

    }
}

impl Default for input_event {
    fn default() -> Self {
        unsafe { mem::zeroed() }
    }
}

#[derive(Clone, Copy, Debug)]
#[repr(C)]
pub struct input_id {
    pub bustype: uint16_t,
    pub vendor: uint16_t,
    pub product: uint16_t,
    pub version: uint16_t,
}

#[repr(C)]
pub struct uinput_user_dev {
    pub name: [c_char; UINPUT_MAX_NAME_SIZE as usize],
    pub id: input_id,

    pub ff_effects_max: uint32_t,
    pub absmax: [int32_t; ABS_CNT as usize],
    pub absmin: [int32_t; ABS_CNT as usize],
    pub absfuzz: [int32_t; ABS_CNT as usize],
    pub absflat: [int32_t; ABS_CNT as usize],
}

#[repr(C)]
#[derive(Copy, Clone, Debug)]
pub struct ff_effect {
    pub _type: uint16_t,
    pub id: int16_t,
    pub direction: uint16_t,
    pub trigger: ff_trigger,
    pub replay: ff_replay,
    pub u: ff_effect_union,
}

#[repr(C)]
#[derive(Copy, Clone, Debug)]
pub struct ff_effect_union {
    pub _bindgen_data_: [u64; 4],
}

impl ff_effect_union {
    pub unsafe fn constant(&mut self) -> *mut ff_constant_effect {
        let raw: *mut u8 = transmute(&self._bindgen_data_);
        transmute(raw.offset(0))
    }

    pub unsafe fn ramp(&mut self) -> *mut ff_ramp_effect {
        let raw: *mut u8 = transmute(&self._bindgen_data_);
        transmute(raw.offset(0))
    }

    pub unsafe fn periodic(&mut self) -> *mut ff_periodic_effect {
        let raw: *mut u8 = transmute(&self._bindgen_data_);
        transmute(raw.offset(0))
    }

    pub unsafe fn condition(&mut self) -> *mut [ff_condition_effect; 2] {
        let raw: *mut u8 = transmute(&self._bindgen_data_);
        transmute(raw.offset(0))
    }

    pub unsafe fn rumble(&mut self) -> *mut ff_rumble_effect {
        let raw: *mut u8 = transmute(&self._bindgen_data_);
        transmute(raw.offset(0))
    }
}

impl Default for ff_effect_union {
    fn default() -> Self {
        unsafe { mem::zeroed() }
    }
}

#[repr(C)]
#[derive(Copy, Clone, Debug, Eq, Ord, PartialEq, PartialOrd, Hash)]
pub struct input_absinfo {
    pub value: int32_t,
    pub minimum: int32_t,
    pub maximum: int32_t,
    pub fuzz: int32_t,
    pub flat: int32_t,
    pub resolution: int32_t,
}

impl Default for input_absinfo {
    fn default() -> Self {
        unsafe { ::std::mem::zeroed() }
    }
}

#[repr(C)]
#[derive(Copy, Clone, Debug)]
pub struct input_keymap_entry {
    pub flags: uint8_t,
    pub len: uint8_t,
    pub index: uint16_t,
    pub keycode: uint32_t,
    pub scancode: [uint8_t; 32],
}

impl Default for input_keymap_entry {
    fn default() -> Self {
        unsafe { mem::zeroed() }
    }
}

#[repr(C)]
#[derive(Copy, Clone, Debug)]
pub struct ff_replay {
    pub length: uint16_t,
    pub delay: uint16_t,
}

impl Default for ff_replay {
    fn default() -> Self {
        unsafe { mem::zeroed() }
    }
}

#[repr(C)]
#[derive(Copy, Clone, Debug)]
pub struct ff_trigger {
    pub button: uint16_t,
    pub interval: uint16_t,
}

impl Default for ff_trigger {
    fn default() -> Self {
        unsafe { mem::zeroed() }
    }
}

#[repr(C)]
#[derive(Copy, Clone, Debug)]
pub struct ff_envelope {
    pub attack_length: uint16_t,
    pub attack_level: uint16_t,
    pub fade_length: uint16_t,
    pub fade_level: uint16_t,
}

impl Default for ff_envelope {
    fn default() -> Self {
        unsafe { mem::zeroed() }
    }
}

#[repr(C)]
#[derive(Copy, Clone, Debug)]
pub struct ff_constant_effect {
    pub level: int16_t,
    pub envelope: ff_envelope,
}

impl Default for ff_constant_effect {
    fn default() -> Self {
        unsafe { mem::zeroed() }
    }
}

#[repr(C)]
#[derive(Copy, Clone, Debug)]
pub struct ff_ramp_effect {
    pub start_level: int16_t,
    pub end_level: int16_t,
    pub envelope: ff_envelope,
}

impl Default for ff_ramp_effect {
    fn default() -> Self {
        unsafe { ::std::mem::zeroed() }
    }
}

#[repr(C)]
#[derive(Copy, Clone, Debug)]
pub struct ff_condition_effect {
    pub right_saturation: uint16_t,
    pub left_saturation: uint16_t,
    pub right_coeff: int16_t,
    pub left_coeff: int16_t,
    pub deadband: uint16_t,
    pub center: int16_t,
}

impl Default for ff_condition_effect {
    fn default() -> Self {
        unsafe { ::std::mem::zeroed() }
    }
}

#[repr(C)]
#[derive(Copy, Clone, Debug)]
pub struct ff_periodic_effect {
    pub waveform: uint16_t,
    pub period: uint16_t,
    pub magnitude: int16_t,
    pub offset: int16_t,
    pub phase: uint16_t,
    pub envelope: ff_envelope,
    pub custom_len: uint32_t,
    pub custom_data: *mut int16_t,
}

impl Default for ff_periodic_effect {
    fn default() -> Self {
        unsafe { mem::zeroed() }
    }
}

#[repr(C)]
#[derive(Copy, Clone, Debug)]
pub struct ff_rumble_effect {
    pub strong_magnitude: uint16_t,
    pub weak_magnitude: uint16_t,
}

impl Default for ff_rumble_effect {
    fn default() -> Self {
        unsafe { mem::zeroed() }
    }
}

#[repr(C)]
#[derive(Copy, Clone, Debug)]
pub struct uinput_ff_upload {
    pub request_id: uint32_t,
    pub retval: int32_t,
    pub effect: ff_effect,
    pub old: ff_effect,
}

#[repr(C)]
#[derive(Copy, Clone, Debug)]
pub struct uinput_ff_erase {
    pub request_id: uint32_t,
    pub retval: int32_t,
    pub effect_id: uint32_t,
}

ioctl!(read eviocgeffects with b'E', 0x84; c_int);
ioctl!(read eviocgid with b'E', 0x02; /*struct*/ input_id);
ioctl!(read eviocgkeycode with b'E', 0x04; [c_uint; 2]);
ioctl!(read eviocgrep with b'E', 0x03; [c_uint; 2]);
ioctl!(read eviocgversion with b'E', 0x01; c_int);
ioctl!(write_int eviocrmff with b'E', 0x81);
// ioctl!(read eviocgkeycode_v2 with b'E', 0x04; /*struct*/ input_keymap_entry);
// TODO #define EVIOCSFF _IOC ( _IOC_WRITE , 'E' , 0x80 , sizeof ( struct ff_effect ) )
ioctl!(write_ptr eviocskeycode with b'E', 0x04; [::libc::c_uint; 2]);
// ioctl!(write eviocskeycode_v2 with b'E', 0x04; /*struct*/ input_keymap_entry);
ioctl!(write_ptr eviocsrep with b'E', 0x03; [::libc::c_uint; 2]);

ioctl!(read_buf eviocgname with b'E', 0x06; uint8_t);
ioctl!(read_buf eviocgphys with b'E', 0x07; uint8_t);
ioctl!(read_buf eviocguniq with b'E', 0x08; uint8_t);
ioctl!(read_buf eviocgprop with b'E', 0x09; uint8_t);
ioctl!(read_buf eviocgmtslots with b'E', 0x0a; uint8_t);
ioctl!(read_buf eviocgkey with b'E', 0x18; uint8_t);
ioctl!(read_buf eviocgled with b'E', 0x19; uint8_t);
ioctl!(read_buf eviocgsnd with b'E', 0x1a; uint8_t);
ioctl!(read_buf eviocgsw with b'E', 0x1b; uint8_t);

ioctl!(write_ptr eviocsff with b'E', 0x80; ff_effect);
ioctl!(write_int eviocgrab with b'E', 0x90);
ioctl!(write_int eviocrevoke with b'E', 0x91);
ioctl!(write_int eviocsclockid with b'E', 0xa0);

pub unsafe fn eviocgbit(fd: c_int, ev: u32, len: c_int, buf: *mut u8) -> ::nix::Result<i32> {
    convert_ioctl_res!(libc::ioctl(fd, ior!(b'E', 0x20 + ev, len) as c_ulong, buf))
}

pub unsafe fn eviocgabs(fd: c_int, abs: u32, buf: *mut input_absinfo) -> ::nix::Result<i32> {
    convert_ioctl_res!(libc::ioctl(fd, ior!(b'E', 0x40 + abs, mem::size_of::<input_absinfo>()) as c_ulong, buf))
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
