use std::mem::size_of;
use nix;
use nix::sys::ioctl::ioctl_num_type;
use libc::{c_int, c_uint, uint8_t, uint16_t, ioctl};

pub use libc::{
    timeval,
    input_event, input_id, input_absinfo, input_keymap_entry, input_mask,
    ff_replay, ff_trigger, ff_envelope, ff_effect, ff_constant_effect,
    ff_ramp_effect, ff_condition_effect, ff_periodic_effect, ff_rumble_effect,
};

/// Protocol version.
pub const EV_VERSION: c_int = 0x010001;

pub const ID_BUS: usize = 0;
pub const ID_VENDOR: usize = 1;
pub const ID_PRODUCT: usize = 2;
pub const ID_VERSION: usize = 3;

pub const BUS_PCI: uint16_t = 0x01;
pub const BUS_ISAPNP: uint16_t = 0x02;
pub const BUS_USB: uint16_t = 0x03;
pub const BUS_HIL: uint16_t = 0x04;
pub const BUS_BLUETOOTH: uint16_t = 0x05;
pub const BUS_VIRTUAL: uint16_t = 0x06;

pub const BUS_ISA: uint16_t = 0x10;
pub const BUS_I8042: uint16_t = 0x11;
pub const BUS_XTKBD: uint16_t = 0x12;
pub const BUS_RS232: uint16_t = 0x13;
pub const BUS_GAMEPORT: uint16_t = 0x14;
pub const BUS_PARPORT: uint16_t = 0x15;
pub const BUS_AMIGA: uint16_t = 0x16;
pub const BUS_ADB: uint16_t = 0x17;
pub const BUS_I2C: uint16_t = 0x18;
pub const BUS_HOST: uint16_t = 0x19;
pub const BUS_GSC: uint16_t = 0x1A;
pub const BUS_ATARI: uint16_t = 0x1B;
pub const BUS_SPI: uint16_t = 0x1C;
pub const BUS_RMI: uint16_t = 0x1D;
pub const BUS_CEC: uint16_t = 0x1E;
pub const BUS_INTEL_ISHTP: uint16_t = 0x1F;

pub const MT_TOOL_FINGER: uint16_t = 0;
pub const MT_TOOL_PEN: uint16_t = 1;
pub const MT_TOOL_PALM: uint16_t = 2;
pub const MT_TOOL_MAX: uint16_t = 2;

pub const FF_STATUS_STOPPED: uint16_t = 0x00;
pub const FF_STATUS_PLAYING: uint16_t = 0x01;
pub const FF_STATUS_MAX: uint16_t = 0x01;

#[repr(C)]
#[derive(Copy, Clone)]
pub struct ff_effect_union {
    #[cfg(target_pointer_width = "64")]
    pub u: [u64; 4],
    #[cfg(target_pointer_width = "32")]
    pub u: [u32; 7],
}

impl<'a> From<&'a ff_effect> for &'a ff_effect_union {
    fn from(effect: &'a ff_effect) -> Self {
        unsafe {
            let raw = &effect.u as *const _ as *const _;
            &*raw
        }
    }
}

impl<'a> From<&'a mut ff_effect> for &'a mut ff_effect_union {
    fn from(effect: &'a mut ff_effect) -> Self {
        unsafe {
            let raw = &mut effect.u as *mut _ as *mut _;
            &mut *raw
        }
    }
}

impl ff_effect_union {
    pub fn constant(&self) -> &ff_constant_effect {
        unsafe {
            let raw = &self.u as *const _ as *const _;
            &*raw
        }
    }

    pub fn constant_mut(&mut self) -> &mut ff_constant_effect {
        unsafe {
            let raw = &mut self.u as *mut _ as *mut _;
            &mut *raw
        }
    }

    pub fn ramp(&self) -> &ff_ramp_effect {
        unsafe {
            let raw = &self.u as *const _ as *const _;
            &*raw
        }
    }

    pub fn ramp_mut(&mut self) -> &mut ff_ramp_effect {
        unsafe {
            let raw = &mut self.u as *mut _ as *mut _;
            &mut *raw
        }
    }

    pub fn periodic(&self) -> &ff_periodic_effect {
        unsafe {
            let raw = &self.u as *const _ as *const _;
            &*raw
        }
    }

    pub fn periodic_mut(&mut self) -> &mut ff_periodic_effect {
        unsafe {
            let raw = &mut self.u as *mut _ as *mut _;
            &mut *raw
        }
    }

    pub fn condition(&self) -> &[ff_condition_effect; 2] {
        unsafe {
            let raw = &self.u as *const _ as *const _;
            &*raw
        }
    }

    pub fn condition_mut(&mut self) -> &mut [ff_condition_effect; 2] {
        unsafe {
            let raw = &mut self.u as *mut _ as *mut _;
            &mut *raw
        }
    }

    pub fn rumble(&self) -> &ff_rumble_effect {
        unsafe {
            let raw = &self.u as *const _ as *const _;
            &*raw
        }
    }

    pub fn rumble_mut(&mut self) -> &mut ff_rumble_effect {
        unsafe {
            let raw = &mut self.u as *mut _ as *mut _;
            &mut *raw
        }
    }
}

ioctl! {
    /// get driver version
    read ev_get_version with b'E', 0x01; c_int
}

ioctl! {
    /// get device ID
    read ev_get_id with b'E', 0x02; /*struct*/ input_id
}

ioctl! {
    /// get repeat settings
    read ev_get_rep with b'E', 0x03; [c_uint; 2]
}

ioctl! {
    /// set repeat settings
    write_ptr ev_set_rep with b'E', 0x03; [c_uint; 2]
}

ioctl! {
    /// get keycode
    read ev_get_keycode with b'E', 0x04; [c_uint; 2]
}

ioctl! {
    /// get keycode
    read ev_get_keycode_v2 with b'E', 0x04; input_keymap_entry
}

ioctl! {
    /// set keycode
    write_ptr ev_set_keycode with b'E', 0x04; [c_uint; 2]
}

ioctl! {
    /// set keycode
    write_ptr ev_set_keycode_v2 with b'E', 0x04; input_keymap_entry
}

ioctl! {
    /// get device name
    read_buf ev_get_name with b'E', 0x06; uint8_t
}

ioctl! {
    /// get physical location
    read_buf ev_get_phys with b'E', 0x07; uint8_t
}

ioctl! {
    /// get unique identifier
    read_buf ev_get_uniq with b'E', 0x08; uint8_t
}

ioctl! {
    /// get device properties
    read_buf ev_get_prop with b'E', 0x09; uint8_t
}

ioctl! {
    /// get MT slot values
    read_buf ev_get_mtslots with b'E', 0x0a; uint8_t
}

ioctl! {
    /// get global key state
    read_buf ev_get_key with b'E', 0x18; uint8_t
}

ioctl! {
    /// get all LEDs
    read_buf ev_get_led with b'E', 0x19; uint8_t
}

ioctl! {
    /// get all sounds status
    read_buf ev_get_snd with b'E', 0x1a; uint8_t
}

ioctl! {
    /// get all switch states
    read_buf ev_get_sw with b'E', 0x1b; uint8_t
}

/// get event bits
pub unsafe fn ev_get_bit(fd: c_int, ev: u32, len: c_int, buf: *mut uint8_t) -> nix::Result<i32> {
    convert_ioctl_res!(ioctl(fd, ior!(b'E', 0x20 + ev, len) as ioctl_num_type, buf))
}

/// get abs value/limits
pub unsafe fn ev_get_abs(fd: c_int, abs: u32, buf: *mut input_absinfo) -> nix::Result<i32> {
    convert_ioctl_res!(ioctl(fd, ior!(b'E', 0x40 + abs, size_of::<input_absinfo>()) as ioctl_num_type, buf))
}

/// set abs value/limits
pub unsafe fn ev_set_abs(fd: c_int, abs: u32, buf: *const input_absinfo) -> nix::Result<i32> {
    convert_ioctl_res!(ioctl(fd, ior!(b'E', 0x40 + abs, size_of::<input_absinfo>()) as ioctl_num_type, buf))
}

ioctl! {
    /// send a force effect to a force feedback device
    write_ptr ev_send_ff with b'E', 0x80; ff_effect
}

ioctl! {
    /// Erase a force effect
    write_int ev_erase_ff with b'E', 0x81
}

ioctl! {
    /// Report number of effects playable at the same time
    read ev_get_effects with b'E', 0x84; c_int
}

ioctl! {
    /// Grab/Release device
    write_int ev_grab with b'E', 0x90
}

ioctl! {
    /// Revoke device access
    write_int ev_revoke with b'E', 0x91
}

ioctl! {
    /// Retrieve current event mask
    read ev_get_mask with b'E', 0x92; input_mask
}

ioctl! {
    /// Set event mask
    write_ptr ev_set_mask with b'E', 0x93; input_mask
}

ioctl! {
    /// Set clockid to be used for timestamps
    write_int ev_set_clockid with b'E', 0xa0
}
