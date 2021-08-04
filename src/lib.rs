#![doc(html_root_url = "https://docs.rs/input-linux-sys/0.7.0/")]

#[macro_use]
extern crate nix;
extern crate libc;

pub use nix::{Error, Result};
pub use nix::errno::Errno;

mod events;
pub use events::*;

mod input;
pub use input::*;

mod uinput;
pub use uinput::*;
