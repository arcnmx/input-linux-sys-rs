{ config, channels, pkgs, lib, ... }: with pkgs; with lib; let
  inherit (import ./. { inherit pkgs; }) checks;
in {
  config = {
    name = "input-linux-sys";
    ci = {
      version = "v0.7";
      gh-actions.enable = true;
    };
    cache.cachix = {
      ci.signingKey = "";
      arc.enable = true;
    };
    channels.nixpkgs = "stable";
    tasks = {
      test.inputs = singleton checks.test;
    };
    system = "x86_64-linux";
    jobs = {
      build = { };
    };
  };
}
