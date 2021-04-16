let
    pkgs = import <nixpkgs> {};
in
pkgs.mkShell {
    name = "wispkoe-api-dev";
    buildInputs = with pkgs; [ nodejs yarn ];
}
