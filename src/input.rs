use std::mem;
use nix;
use libc::{c_int, c_uint, c_ulong, uint8_t, ioctl};

pub use libc::{
    timeval,
    input_event, input_id, input_absinfo, input_keymap_entry, input_mask,
    ff_replay, ff_trigger, ff_envelope, ff_effect, ff_constant_effect,
    ff_ramp_effect, ff_condition_effect, ff_periodic_effect, ff_rumble_effect,
};

/// Protocol version.
pub const EV_VERSION: c_int = 0x010001;

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

ioctl!(read eviocgeffects with b'E', 0x84; c_int);
ioctl!(read eviocgid with b'E', 0x02; /*struct*/ input_id);
ioctl!(read eviocgkeycode with b'E', 0x04; [c_uint; 2]);
ioctl!(read eviocgrep with b'E', 0x03; [c_uint; 2]);
ioctl!(read eviocgversion with b'E', 0x01; c_int);
ioctl!(write_int eviocrmff with b'E', 0x81);
// ioctl!(read eviocgkeycode_v2 with b'E', 0x04; /*struct*/ input_keymap_entry);
// TODO #define EVIOCSFF _IOC ( _IOC_WRITE , 'E' , 0x80 , sizeof ( struct ff_effect ) )
ioctl!(write_ptr eviocskeycode with b'E', 0x04; [c_uint; 2]);
// ioctl!(write eviocskeycode_v2 with b'E', 0x04; /*struct*/ input_keymap_entry);
ioctl!(write_ptr eviocsrep with b'E', 0x03; [c_uint; 2]);

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

pub unsafe fn eviocgbit(fd: c_int, ev: u32, len: c_int, buf: *mut u8) -> nix::Result<i32> {
    convert_ioctl_res!(ioctl(fd, ior!(b'E', 0x20 + ev, len) as c_ulong, buf))
}

pub unsafe fn eviocgabs(fd: c_int, abs: u32, buf: *mut input_absinfo) -> nix::Result<i32> {
    convert_ioctl_res!(ioctl(fd, ior!(b'E', 0x40 + abs, mem::size_of::<input_absinfo>()) as c_ulong, buf))
}
