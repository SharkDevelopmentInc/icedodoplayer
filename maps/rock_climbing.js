var map = {
    title: "Rock Climbing",
    song: "env2",
    maker: "awehero",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([19.34007, 13.24007, -45.72993], [0.17, 0, 0], [2.5, 2.5, 2.5], "0000ff", 0, 0, 0.6, false, true);
        a.p([26.18014, 6.68014, -6.91986], [0.17, 0, 0], [2.5, 2.5, 2.5], "0000ff", 0, 0, 0.6, false, true);
        a.p([26.15021, 33.22021, -7.28979], [0.17, 0, 0], [2.5, 2.5, 2.5], "0000ff", 0, 0, 0.6, false, true);
        a.p([22.83028, 26.85028, -25.92972], [0.17, 0, 0], [2.5, 2.5, 2.5], "0000ff", 0, 0, 0.6, false, true);
        a.p([25.93035, 21.47035, -8.38965], [0.17, 0, 0], [2.5, 2.5, 2.5], "0000ff", 0, 0, 0.6, false, true);
        a.p([21.37042, 1.31042, -47.90958], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "0000ff", 0, 0, 0.6, false, true);
        a.p([3.62049, 8.30049, -49.45951], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "0000ff", 0, 0, 0.6, false, true);
        a.p([2.14, 21.47, -49.59], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "0000ff", 0, 0, 0.6, false, true);
        a.p([22.37007, 34.43007, -29.15993], [0.17, 0, 0], [2.5, 2.5, 2.5], "0000ff", 0, 0, 0.6, false, true);
        a.p([-10.65986, 26.42014, -14.14986], [4.59, 0, 0], [2.5, 2, 2.5], "0000ff", 0, 0, 0.6, true, false);
        a.p([-21.78979, 29.46021, -15.27979], [-4.63, -6.28, 0], [2.5, 2, 2.5], "0000ff", 0, 0, 0.6, true, false);
        a.p([-2.74972, 0.85028, -14.99972], [-3.32, -3.14, 0], [2, 2, 2], "0000ff", 0, 0, 0.6, true, false);
        a.p([22.04035, 20.11035, -30.43965], [0.17, 0, 0], [2.5, 2.5, 2.5], "39ce3b", 0, 0, 0.6, false, true);
        a.p([26.44042, 14.60042, -5.45958], [0.17, 0, 0], [2.5, 2.5, 2.5], "39ce3b", 0, 0, 0.6, false, true);
        a.p([22.64049, 1.42049, -27.02951], [0.17, 0, 0], [2.5, 2.5, 2.5], "39ce3b", 0, 0, 0.6, false, true);
        a.p([23.61, 17.94, -21.55], [0.17, 0, 0], [2.5, 2.5, 2.5], "39ce3b", 0, 0, 0.6, false, true);
        a.p([-1.70993, 26.99007, -49.96993], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "39ce3b", 0, 0, 0.6, false, true);
        a.p([16.93014, 10.22014, -48.29986], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "39ce3b", 0, 0, 0.6, false, true);
        a.p([22.48021, 26.73021, -47.80979], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "39ce3b", 0, 0, 0.6, false, true);
        a.p([0.66028, 13.56028, -49.71972], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "39ce3b", 0, 0, 0.6, false, true);
        a.p([-4.97965, 19.83035, -34.99965], [-1.22, 6.28, 0], [2.5, 2, 2.5], "39ce3b", 0, 0, 0.6, true, false);
        a.p([12.23042, 8.37042, -22.00958], [3.23, -3.14, 0], [2.5, 2, 2.5], "39ce3b", 0, 0, 0.6, true, false);
        a.p([-7.76951, 23.65049, -22.73951], [-3.3, -6.28, 0], [2.5, 2, 2.5], "39ce3b", 0, 0, 0.6, true, false);
        a.p([25.81, 19.93, -20.55], [0.17, -3.14, 0], [4, 42, 60], "bebebe", 0, 0, 0.6, false, true);
        a.p([15.75007, 19.02007, -50.40993], [1.48, -6.28, 0], [4, 42, 60], "bebebe", 0, 0, 0.6, false, true);
        a.p([2.23014, 19.93014, -15.99986], [3.14, -3.14, 0], [20, 42, 2], "bebebe", 0, 0, 0.4, false, false);
        a.p([11.25021, 19.93021, -24.99979], [3.14, -3.14, 0], [2, 42, 20], "bebebe", 0, 0, 0.0, false, false);
        a.p([2.23028, 0.00028, -2.99972], [3.14, 3.14, 3.14], [20, 2, 12], "bebebe", 0, 0, 0.6, false, false);
        a.p([2.23035, 0.00035, -12.99965], [3.14, 3.14, 3.14], [20, 2, 8], "bebebe", 0, 0, 0.6, true, false);
        a.p([-26.74958, 31.05042, -30.92958], [0, 0, 0], [2, 0.5, 16], "bebebe,0.25", 0, 0, 0.6, false, false);
        a.p([-11.39951, 19.93049, -11.74951], [-0.79, 3.14, 0], [2, 42, 14], "bebebe,0.25", 0, 0, 0.6, false, false);
        a.p([-22.04, 19.93, -13.69], [7.07, 3.14, 0], [2, 42, 20], "bebebe,0.25", 0, 0, 0.6, false, false);
        a.p([-6.74993, 19.93007, -24.99993], [3.14, -3.14, 0], [2, 42, 20], "bebebe,0.5", 0, 0, 0.6, false, false);
        a.p([2.23014, 19.93014, -33.99986], [3.14, -3.14, 0], [20, 42, 2], "bebebe", 0, 0, 0.6, false, false);
        a.p([-28.42979, 19.93021, -31.99979], [3.14, -3.14, 0], [2, 42, 24], "bebebe", 0, 0, 0.6, false, false);
        a.p([20.53028, 9.84028, -38.96972], [0.17, 0, 0], [2.5, 2.5, 2.5], "ff0000", 0, 0, 0.6, false, true);
        a.p([28.21035, 16.15035, 4.59035], [0.17, 0, 0], [2.5, 2.5, 2.5], "ff0000", 0, 0, 0.6, false, true);
        a.p([24.75042, 30.98042, -14.99958], [0.17, 0, 0], [2.5, 2.5, 2.5], "ff0000", 0, 0, 0.6, false, true);
        a.p([24.91049, 15.09049, -14.16951], [0.17, 0, 0], [2.5, 2.5, 2.5], "ff0000", 0, 0, 0.6, false, true);
        a.p([-10.28, 29.27, -50.92], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ff0000", 0, 0, 0.6, false, true);
        a.p([9.48007, 13.06007, -48.94993], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ff0000", 0, 0, 0.6, false, true);
        a.p([13.73014, 3.10014, -48.57986], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ff0000", 0, 0, 0.6, false, true);
        a.p([-9.50979, 12.01021, -50.60979], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ff0000", 0, 0, 0.6, false, true);
        a.p([24.16028, 25.05028, -18.37972], [0.17, 0, 0], [2.5, 2.5, 2.5], "ff0000", 0, 0, 0.6, false, true);
        a.p([12.23035, 12.34035, -31.14965], [3.84, -3.14, 0], [2.5, 2, 2.5], "ff0000", 0, 0, 0.6, true, false);
        a.p([8.00042, 5.20042, -14.99958], [3.75, -3.14, 0], [2.5, 2, 2.5], "ff0000", 0, 0, 0.6, true, false);
        a.p([-7.76951, 22.23049, -27.10951], [1.05, 0, 0], [2.5, 2, 2.5], "ff0000", 0, 0, 0.6, true, false);
        a.p([21.01, 3.28, -36.29], [0.17, 0, 0], [2.5, 2.5, 2.5], "ff5cd5", 0, 0, 0.6, false, true);
        a.p([20.77007, 34.08007, -37.62993], [0.17, 0, 0], [2.5, 2.5, 2.5], "ff5cd5", 0, 0, 0.6, false, true);
        a.p([27.93014, 4.33014, 3.01014], [0.17, 0, 0], [2.5, 2.5, 2.5], "ff5cd5", 0, 0, 0.6, false, true);
        a.p([22.99021, 13.18021, -25.01979], [0.17, 0, 0], [2.5, 2.5, 2.5], "ff5cd5", 0, 0, 0.6, false, true);
        a.p([13.89028, 35.12028, -48.64972], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ff5cd5", 0, 0, 0.6, false, true);
        a.p([20.45035, 14.98035, -47.98965], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ff5cd5", 0, 0, 0.6, false, true);
        a.p([-7.89958, 23.83042, -50.46958], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ff5cd5", 0, 0, 0.6, false, true);
        a.p([17.10049, 27.83049, -48.74951], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ff5cd5", 0, 0, 0.6, false, true);
        a.p([20.77, 27.59, -37.63], [0.17, 0, 0], [2.5, 2.5, 2.5], "ff5cd5", 0, 0, 0.6, false, true);
        a.p([-8.36993, 20.93007, -33.00993], [-4.95, -6.28, 0], [4, 2, 2.5], "ff5cd5", 0, 0, 0.6, true, false);
        a.p([5.65014, 16.30014, -34.99986], [0.87, 0, 0], [2.5, 2, 2.5], "ff5cd5", 0, 0, 0.6, true, false);
        a.p([-8.60979, 26.01021, -17.83979], [3.14, 3.14, 3.14], [2.5, 2, 2.5], "ff5cd5", 0, 0, 0.6, true, false);
        a.p([22.04028, 9.53028, -30.43972], [0.17, 0, 0], [2.5, 2.5, 2.5], "ff7c00", 0, 0, 0.6, false, true);
        a.p([28.21035, 32.41035, 2.54035], [0.17, 0, 0], [2.5, 2.5, 2.5], "ff7c00", 0, 0, 0.6, false, true);
        a.p([24.76042, 4.95042, -15.02958], [0.17, 0, 0], [2.5, 2.5, 2.5], "ff7c00", 0, 0, 0.6, false, true);
        a.p([20.05049, 21.65049, -41.70951], [0.17, 0, 0], [2.5, 2.5, 2.5], "ff7c00", 0, 0, 0.6, false, true);
        a.p([6.7, 30, -49.25], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ff7c00", 0, 0, 0.6, false, true);
        a.p([3.25007, 34.64007, -49.45993], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ff7c00", 0, 0, 0.6, false, true);
        a.p([10.34014, 23.21014, -48.87986], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ff7c00", 0, 0, 0.6, false, true);
        a.p([-4.01979, 3.47021, -50.12979], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ff7c00", 0, 0, 0.6, false, true);
        a.p([27.48028, 24.68028, 0.27028], [0.17, 0, 0], [2.5, 2.5, 2.5], "ff7c00", 0, 0, 0.6, false, true);
        a.p([12.23035, 9.90035, -26.69965], [-1.06, 3.14, 0], [2.5, 2, 2.5], "ff7c00", 0, 0, 0.6, true, false);
        a.p([-25.66958, 30.33042, -20.64958], [6.81, 0, 0], [2, 2, 6], "ff5cd5", 0, 0, 0.6, true, false);
        a.p([-16.76951, 28.08049, -12.05951], [7.62, 0.36, -0.05], [2, 2, 6], "ff7c00", 0, 0, 0.6, true, false);
        a.p([13.09, 6.12, -16.32], [2.93, -3.14, 0], [3, 2, 5], "ff7c00", 0, 0, 0.6, true, false);
        a.p([19.43007, 2.66007, -45.24993], [0.17, 0, 0], [2.5, 2.5, 2.5], "ffff00", 0, 0, 0.6, false, true);
        a.p([27.47014, 9.65014, 0.39014], [0.17, 0, 0], [2.5, 2.5, 2.5], "ffff00", 0, 0, 0.6, false, true);
        a.p([21.21021, 16.58021, -35.12979], [0.17, 0, 0], [2.5, 2.5, 2.5], "ffff00", 0, 0, 0.6, false, true);
        a.p([23.52028, 7.11028, -22.02972], [0.17, 0, 0], [2.5, 2.5, 2.5], "ffff00", 0, 0, 0.6, false, true);
        a.p([-2.58965, 32.36035, -50.02965], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ffff00", 0, 0, 0.6, false, true);
        a.p([17.43042, 21.04042, -48.25958], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ffff00", 0, 0, 0.6, false, true);
        a.p([-9.18951, 33.62049, -50.65951], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ffff00", 0, 0, 0.6, false, true);
        a.p([-5.25, 18.51, -50.24], [1.48, -3.14, 0], [2.5, 2.5, 2.5], "ffff00", 0, 0, 0.6, false, true);
        a.p([2.75007, 3.00007, -14.99993], [-3.93, -3.14, 0], [2, 2, 2], "ffff00", 0, 0, 0.6, true, false);
        a.p([0.41014, 17.48014, -34.99986], [-3.35, -6.28, 0], [2.5, 2, 2.5], "ffff00", 0, 0, 0.6, true, false);
        a.p([11.07021, 14.14021, -35.56979], [-0.49, 6.28, 0], [3, 2, 3], "ffff00", 0, 0, 0.6, true, false);
        a.p([-8.02972, -0.54972, -16.88972], [3.14, 3.14, 3.14], [1, 1, 1], "-1.0", 0, 0, 0.6, false, false);
        a.p([-15.61965, 33.75035, -10.10965], [7.63, 0.36, -0.05], [2, 13, 8], "-1.0", 0, 0, 0.6, false, false);
        a.p([-8.01958, 39.91042, -22.12958], [3.14, -3.14, 0], [50, 2, 50], "-1.0", 0, 0, 0.6, false, false);
        a.e([-26.5, 31, -36]);
    },
    post: function() {
        a.u('P20');
        a.u('P27');
        a.u('P28');
        cc.set_monkey("speed", default_speed * 0.35);
        cc.set_monkey("jumpHeight", 0.63);
        cc.set_monkey("jumpSpeed", 0.25);
        cc.set_monkey("steer", default_steer * 2.35);
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#de8a00"));
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {},
    reset: function() {
        this.section_id = 0;
        a.re('P0', [19.34007, 13.24007, -45.72993], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P1', [26.18014, 6.68014, -6.91986], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P2', [26.15021, 33.22021, -7.28979], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P3', [22.83028, 26.85028, -25.92972], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P4', [25.93035, 21.47035, -8.38965], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P5', [21.37042, 1.31042, -47.90958], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P6', [3.62049, 8.30049, -49.45951], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P7', [2.14, 21.47, -49.59], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P8', [22.37007, 34.43007, -29.15993], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P9', [-10.65986, 26.42014, -14.14986], [4.59, 0, 0], [2.5, 2, 2.5]);
        a.re('P10', [-21.78979, 29.46021, -15.27979], [-4.63, -6.28, 0], [2.5, 2, 2.5]);
        a.re('P11', [-2.74972, 0.85028, -14.99972], [-3.32, -3.14, 0], [2, 2, 2]);
        a.re('P12', [22.04035, 20.11035, -30.43965], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P13', [26.44042, 14.60042, -5.45958], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P14', [22.64049, 1.42049, -27.02951], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P15', [23.61, 17.94, -21.55], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P16', [-1.70993, 26.99007, -49.96993], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P17', [16.93014, 10.22014, -48.29986], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P18', [22.48021, 26.73021, -47.80979], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P19', [0.66028, 13.56028, -49.71972], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P20', [-4.97965, 19.83035, -34.99965], [-1.22, 6.28, 0], [2.5, 2, 2.5]);
        a.re('P21', [12.23042, 8.37042, -22.00958], [3.23, -3.14, 0], [2.5, 2, 2.5]);
        a.re('P22', [-7.76951, 23.65049, -22.73951], [-3.3, -6.28, 0], [2.5, 2, 2.5]);
        a.re('P23', [25.81, 19.93, -20.55], [0.17, -3.14, 0], [4, 42, 60]);
        a.re('P24', [15.75007, 19.02007, -50.40993], [1.48, -6.28, 0], [4, 42, 60]);
        a.re('P25', [2.23014, 19.93014, -15.99986], [3.14, -3.14, 0], [20, 42, 2]);
        a.re('P26', [11.25021, 19.93021, -24.99979], [3.14, -3.14, 0], [2, 42, 20]);
        a.re('P27', [2.23028, 0.00028, -2.99972], [3.14, 3.14, 3.14], [20, 2, 12]);
        a.re('P28', [2.23035, 0.00035, -12.99965], [3.14, 3.14, 3.14], [20, 2, 8]);
        a.re('P29', [-26.74958, 31.05042, -30.92958], [0, 0, 0], [2, 0.5, 16]);
        a.re('P30', [-11.39951, 19.93049, -11.74951], [-0.79, 3.14, 0], [2, 42, 14]);
        a.re('P31', [-22.04, 19.93, -13.69], [7.07, 3.14, 0], [2, 42, 20]);
        a.re('P32', [-6.74993, 19.93007, -24.99993], [3.14, -3.14, 0], [2, 42, 20]);
        a.re('P33', [2.23014, 19.93014, -33.99986], [3.14, -3.14, 0], [20, 42, 2]);
        a.re('P34', [-28.42979, 19.93021, -31.99979], [3.14, -3.14, 0], [2, 42, 24]);
        a.re('P35', [20.53028, 9.84028, -38.96972], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P36', [28.21035, 16.15035, 4.59035], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P37', [24.75042, 30.98042, -14.99958], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P38', [24.91049, 15.09049, -14.16951], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P39', [-10.28, 29.27, -50.92], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P40', [9.48007, 13.06007, -48.94993], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P41', [13.73014, 3.10014, -48.57986], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P42', [-9.50979, 12.01021, -50.60979], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P43', [24.16028, 25.05028, -18.37972], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P44', [12.23035, 12.34035, -31.14965], [3.84, -3.14, 0], [2.5, 2, 2.5]);
        a.re('P45', [8.00042, 5.20042, -14.99958], [3.75, -3.14, 0], [2.5, 2, 2.5]);
        a.re('P46', [-7.76951, 22.23049, -27.10951], [1.05, 0, 0], [2.5, 2, 2.5]);
        a.re('P47', [21.01, 3.28, -36.29], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P48', [20.77007, 34.08007, -37.62993], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P49', [27.93014, 4.33014, 3.01014], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P50', [22.99021, 13.18021, -25.01979], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P51', [13.89028, 35.12028, -48.64972], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P52', [20.45035, 14.98035, -47.98965], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P53', [-7.89958, 23.83042, -50.46958], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P54', [17.10049, 27.83049, -48.74951], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P55', [20.77, 27.59, -37.63], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P56', [-8.36993, 20.93007, -33.00993], [-4.95, -6.28, 0], [4, 2, 2.5]);
        a.re('P57', [5.65014, 16.30014, -34.99986], [0.87, 0, 0], [2.5, 2, 2.5]);
        a.re('P58', [-8.60979, 26.01021, -17.83979], [3.14, 3.14, 3.14], [2.5, 2, 2.5]);
        a.re('P59', [22.04028, 9.53028, -30.43972], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P60', [28.21035, 32.41035, 2.54035], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P61', [24.76042, 4.95042, -15.02958], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P62', [20.05049, 21.65049, -41.70951], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P63', [6.7, 30, -49.25], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P64', [3.25007, 34.64007, -49.45993], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P65', [10.34014, 23.21014, -48.87986], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P66', [-4.01979, 3.47021, -50.12979], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P67', [27.48028, 24.68028, 0.27028], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P68', [12.23035, 9.90035, -26.69965], [-1.06, 3.14, 0], [2.5, 2, 2.5]);
        a.re('P69', [-25.66958, 30.33042, -20.64958], [6.81, 0, 0], [2, 2, 6]);
        a.re('P70', [-16.76951, 28.08049, -12.05951], [7.62, 0.36, -0.05], [2, 2, 6]);
        a.re('P71', [13.09, 6.12, -16.32], [2.93, -3.14, 0], [3, 2, 5]);
        a.re('P72', [19.43007, 2.66007, -45.24993], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P73', [27.47014, 9.65014, 0.39014], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P74', [21.21021, 16.58021, -35.12979], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P75', [23.52028, 7.11028, -22.02972], [0.17, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P76', [-2.58965, 32.36035, -50.02965], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P77', [17.43042, 21.04042, -48.25958], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P78', [-9.18951, 33.62049, -50.65951], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P79', [-5.25, 18.51, -50.24], [1.48, -3.14, 0], [2.5, 2.5, 2.5]);
        a.re('P80', [2.75007, 3.00007, -14.99993], [-3.93, -3.14, 0], [2, 2, 2]);
        a.re('P81', [0.41014, 17.48014, -34.99986], [-3.35, -6.28, 0], [2.5, 2, 2.5]);
        a.re('P82', [11.07021, 14.14021, -35.56979], [-0.49, 6.28, 0], [3, 2, 3]);
        a.re('P83', [-8.02972, -0.54972, -16.88972], [3.14, 3.14, 3.14], [1, 1, 1]);
        a.re('P84', [-15.61965, 33.75035, -10.10965], [7.63, 0.36, -0.05], [2, 13, 8]);
        a.re('P85', [-8.01958, 39.91042, -22.12958], [3.14, -3.14, 0], [50, 2, 50]);
        a.re('E0', [-26.5, 31, -36], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}