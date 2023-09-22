var map = {
    title: "dodo crash",
    song: "env2",
    maker: "Jerwo",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([32.70049, 0.72049, -33.89951], [0, 0, 0], [1.5, 1.5, 0.7], "0a0a0a", 0, 0, 0.6, false, false);
        a.p([35.89, 0.72, -33.92], [0, 0, 0], [1.5, 1.5, 0.7], "0a0a0a", 0, 0, 0.6, false, false);
        a.p([35.89007, 0.72007, -36.78993], [0, 0, 0], [1.5, 1.5, 0.7], "0a0a0a", 0, 0, 0.6, false, false);
        a.p([32.70014, 0.72014, -36.78986], [0, 0, 0], [1.5, 1.5, 0.7], "0a0a0a", 0, 0, 0.6, false, false);
        a.p([0.00021, -1.25979, -20.28979], [0, 0, 0], [200, 0.86, 47.68], "2ec757", 0, 0, 0.6, false, false);
        a.p([0.00028, -0.09972, -19.93972], [0, 0, 0], [6.02, 0.52, 40], "82898c", 0, 0, 0.6, false, false);
        a.p([22.37035, -0.14965, -35.31965], [1.57, 0, 0], [6.02, 0.52, 49.4], "82898c", 0, 0, 0.6, false, false);
        a.p([32.75042, 2.87042, -35.35958], [-1.57, -1.7, 0], [3.08, 0.2, 1.44], "b0ebff", 0, 0, 0.6, false, false);
        a.p([34.21049, 2.87049, -33.83951], [0, -1.76, 0], [2.98, 0.2, 1.5], "b0ebff", 0, 0, 0.6, false, false);
        a.p([35.6, 2.87, -35.36], [-1.57, 1.7, 0], [3.08, 0.2, 1.44], "b0ebff", 0, 0, 0.6, false, false);
        a.p([34.21007, 2.87007, -36.86993], [0, 1.76, 0], [2.98, 0.2, 1.5], "b0ebff", 0, 0, 0.6, false, false);
        a.p([0.00014, 6.12014, -44.31986], [0, 0, 0], [14.88, 14.04, 2], "f5c876", 0, 0, 0.6, false, false);
        a.p([0.00021, -0.07979, -9.83979], [0, 0, 0], [0.92, 0.52, 2.34], "f9f9f9", 0, 0, 0.6, false, false);
        a.p([0.00028, -0.07972, -16.83972], [0, 0, 0], [0.92, 0.52, 2.34], "f9f9f9", 0, 0, 0.6, false, false);
        a.p([0.00035, -0.07965, -25.02965], [0, 0, 0], [0.92, 0.52, 2.34], "f9f9f9", 0, 0, 0.6, false, false);
        a.p([0.00042, -0.07958, -32.45958], [0, 0, 0], [0.92, 0.52, 2.34], "f9f9f9", 0, 0, 0.6, false, false);
        a.p([0.00049, -0.07951, -33.22951], [0, 0, 0], [0.92, 0.52, 2.34], "f9f9f9", 0, 0, 0.6, false, false);
        a.p([0, -0.08, -3.02], [0, 0, 0], [0.92, 0.52, 2.34], "f9f9f9", 0, 0, 0.6, false, false);
        a.p([34.93007, -0.07993, -35.26993], [1.57, 0, 0], [0.92, 0.52, 2.34], "f9f9f9", 0, 0, 0.6, false, false);
        a.p([36.08014, -0.07986, -35.28986], [1.57, 0, 0], [0.92, 0.52, 2.34], "f9f9f9", 0, 0, 0.6, false, false);
        a.p([5.50021, -0.07979, -35.34979], [1.57, 0, 0], [0.92, 0.52, 2.34], "f9f9f9", 0, 0, 0.6, false, false);
        a.p([12.93028, -0.07972, -35.32972], [1.57, 0, 0], [0.92, 0.52, 2.34], "f9f9f9", 0, 0, 0.6, false, false);
        a.p([21.12035, -0.07965, -35.30965], [1.57, 0, 0], [0.92, 0.52, 2.34], "f9f9f9", 0, 0, 0.6, false, false);
        a.p([28.12042, -0.07958, -35.28958], [1.57, 0, 0], [0.92, 0.52, 2.34], "f9f9f9", 0, 0, 0.6, false, false);
        a.p([43.96049, -0.07951, -35.28951], [1.57, 0, 0], [0.92, 0.52, 2.34], "f9f9f9", 0, 0, 0.6, false, false);
        a.p([0, 14.78, -44.32], [0, 0, 0], [14.88, 3.52, 2], "ff0000", 0, 0, 0.6, false, false);
        a.p([34.18007, 1.66007, -35.33993], [0, 0, 0], [6.1, 1.18, 3.68], "ff0000", 0, 0, 0.6, false, false);
        a.p([34.18014, 3.62014, -35.35986], [0, 0, 0], [2.98, 0.68, 3.02], "ff0000", 0, 0, 0.6, false, false);
        a.p([32.67021, 3.06021, -33.71979], [0, -1.77, -0.11], [0.22, 0.14, 1.7], "ff0000", 0, 0, 0.6, false, false);
        a.p([35.62028, 3.06028, -36.95972], [0, 1.76, 0.11], [0.22, 0.14, 1.7], "ff0000", 0, 0, 0.6, false, false);
        a.p([32.72035, 3.06035, -36.95965], [0, 1.76, -0.11], [0.22, 0.14, 1.7], "ff0000", 0, 0, 0.6, false, false);
        a.p([35.65042, 3.06042, -33.71958], [0, -1.77, 0.11], [0.22, 0.14, 1.7], "ff0000", 0, 0, 0.6, false, false);
        a.p([0.00049, 3.36049, -44.22951], [0, 0, 0], [5.3, 8.72, 2], "4f3607", 0, 0, 0.6, false, false);
        a.p([1.25, 2.55, -44.13], [0, 0, 0], [0.9, 0.94, 2], "ffd700", 0, 0, 0.6, false, false);
        a.p([-1.89993, 29.80007, -82.99993], [0.31, 0, 0], [3.62, 0.52, 12.38], "ffd700", 0, 0, 0.6, false, false);
        a.p([-3.65986, 29.79014, -94.39986], [0, 0, 0], [3.62, 0.52, 12.38], "ffd700", 0, 0, 0.6, false, false);
        a.p([-2.73979, 29.78021, -102.26979], [-0.44, 0, 0], [3.62, 0.52, 5.28], "ffd700", 0, 0, 0.6, false, false);
        a.p([-0.14972, 29.77028, -105.77972], [-0.87, 0, 0], [3.62, 0.52, 5.28], "ffd700", 0, 0, 0.6, false, false);
        a.p([3.03035, 29.76035, -109.28965], [-0.61, 0, 0], [3.62, 0.52, 5.28], "ffd700", 0, 0, 0.6, false, false);
        a.p([5.04042, 29.75042, -113.48958], [-0.35, 0, 0], [3.62, 0.52, 5.28], "ffd700", 0, 0, 0.6, false, false);
        a.p([-5.58951, 38.70049, -320.92951], [0, 0, 0], [3.6, 0.52, 20.48], "ffd700", 0, 0, 0.6, false, false);
        a.p([-5.59, 29.73, -191.39], [0, 0, 0], [3.6, 0.52, 20.48], "ffd700", 0, 0, 0.6, false, false);
        a.c([-4.92993, 30.66007, -192.76993], "ffd700");
        a.c([-5.61986, 30.660140000000002, -199.43986], "ffd700");
        a.p([-5.58979, 29.72021, -211.67979], [0, 0, 0], [2.6, 0.52, 20.48], "ffd700", 0, 0, 0.6, false, false);
        a.p([-5.90972, 29.74028, -179.43972], [0, 0, 0], [7.92, 0.52, 7.9], "ffd700", 0, 0, 0.6, false, false);
        a.c([-6.67965, 30.66035, -209.77965], "ffd700");
        a.c([-4.43958, 30.660420000000002, -209.77958], "ffd700");
        a.c([-5.55951, 30.660490000000003, -213.97951], "ffd700");
        a.c([-4.72, 30.66, -219.44], "ffd700");
        a.c([-6.67993, 30.66007, -221.67993], "ffd700");
        a.p([-5.58986, 29.72014, -231.68986], [0, 0, 0], [3.6, 0.52, 20.48], "ffd700", 0, 0, 0.6, false, false);
        a.c([-6.67979, 30.660210000000003, -186.54979], "ffd700");
        a.c([-4.49972, 33.27028, -247.88972], "ffd700");
        a.c([-5.90965, 35.34035, -252.12965], "ffd700");
        a.c([-4.38958, 37.62042, -256.57958], "ffd700");
        a.c([-6.77951, 37.620490000000004, -256.57951], "ffd700");
        a.p([-5.59, 34.39, -250.96], [0, 0.47, 0], [3.6, 0.52, 20.48], "ffd700", 0, 0, 0.6, false, false);
        a.c([-6.67993, 39.840070000000004, -326.79993], "ffd700");
        a.c([-4.56986, 39.84014, -326.79986], "ffd700");
        a.p([0.00021, 29.82021, -63.53979], [0, 0, 0], [3.64, 0.52, 28.54], "ffd700", 0, 0, 0.6, false, false);
        a.p([11.29028, 30.86028, -78.24972], [0, 0, 0], [0.8, 4, 0.8], "ffd700", 0, 0, 0.6, false, false);
        a.c([11.29035, 33.39035, -78.26965], "ffd700");
        a.p([9.61042, 31.26042, -78.24958], [0, 0, 0], [0.8, 4.8, 0.8], "ffd700", 0, 0, 0.6, false, false);
        a.p([6.34049, 32.06049, -78.24951], [0, 0, 0], [0.8, 6.4, 0.8], "ffd700", 0, 0, 0.6, false, false);
        a.p([8.01, 31.66, -78.25], [0, 0, 0], [0.8, 5.6, 0.8], "ffd700", 0, 0, 0.6, false, false);
        a.p([4.61007, 32.36007, -78.24993], [0, 0, 0], [0.8, 7, 0.8], "ffd700", 0, 0, 0.6, false, false);
        a.p([7.90014, 33.40014, -78.24986], [0, 0, 10.63], [0.84, 7.4, 0.8], "ffd700", 0, 0, 0.6, false, false);
        a.p([7.90021, 29.26021, -78.24979], [0, 0, -1.57], [0.84, 7.4, 0.8], "ffd700", 0, 0, 0.6, false, false);
        a.c([9.62028, 34.280280000000005, -78.26972], "ffd700");
        a.c([8.01035, 34.930350000000004, -78.26965], "ffd700");
        a.c([6.34042, 35.67042, -78.26958], "ffd700");
        a.c([4.61049, 36.36049, -78.26951], "ffd700");
        a.p([12.94, 38.59, -78.18], [0, 0, 0], [3, 0.52, 3], "ffd700", 0, 0, 0.6, false, false);
        a.p([-13.55993, 38.59007, -78.29993], [-3.14, 0, 0], [3, 0.52, 3], "ffd700", 0, 0, 0.6, false, false);
        a.c([-5.22986, 36.36014, -78.25986], "ffd700");
        a.c([-6.94979, 35.670210000000004, -78.24979], "ffd700");
        a.c([-8.62972, 34.93028, -78.23972], "ffd700");
        a.c([-10.22965, 34.28035, -78.22965], "ffd700");
        a.p([-8.50958, 29.26042, -78.24958], [0, 3.14, -1.57], [0.84, 7.4, 0.8], "ffd700", 0, 0, 0.6, false, false);
        a.p([-8.50951, 33.40049, -78.24951], [-3.14, 0, 10.63], [0.84, 7.4, 0.8], "ffd700", 0, 0, 0.6, false, false);
        a.p([-5.23, 32.36, -78.27], [-3.14, 0, 0], [0.8, 7, 0.8], "ffd700", 0, 0, 0.6, false, false);
        a.p([-8.62993, 31.66007, -78.24993], [-3.14, 0, 0], [0.8, 5.6, 0.8], "ffd700", 0, 0, 0.6, false, false);
        a.p([-6.94986, 32.06014, -78.25986], [-3.14, 0, 0], [0.8, 6.4, 0.8], "ffd700", 0, 0, 0.6, false, false);
        a.p([-10.22979, 31.26021, -78.23979], [-3.14, 0, 0], [0.8, 4.8, 0.8], "ffd700", 0, 0, 0.6, false, false);
        a.c([-11.89972, 33.390280000000004, -78.22972], "ffd700");
        a.p([-11.89965, 30.86035, -78.23965], [-3.14, 0, 0], [0.8, 4, 0.8], "ffd700", 0, 0, 0.6, false, false);
        a.y([-13.39958, 33.57042, -78.24958], [-3.14, 0, 0], [2, 9.34, 2], "ffd700", 0, 0, 0.6, false, 1);
        a.y([12.79049, 33.57049, -78.23951], [0, 0, 0], [2, 9.34, 2], "ffd700", 0, 0, 0.6, false, 1);
        a.p([-3.62, 38.7, -287.92], [0, 0, 0], [3.6, 3.6, 3.6], "ffd700", 999999.0, 0, 0.6, false, false);
        a.p([-7.26993, 38.70007, -305.49993], [0, 0, 0], [3.6, 3.6, 3.6], "ffd700", 999999.0, 0, 0.6, false, false);
        a.p([-5.58986, 38.85014, -270.06986], [0, 0, 0], [3.6, 0.52, 20.48], "ffd700", 0, 0, 0.6, false, false);
        a.p([5.78021, 29.74021, -121.22979], [0, 0, 0], [3.62, 0.52, 12.38], "ffd700", 0, 0, 0.6, true, false);
        a.p([5.78028, 29.74028, -134.94972], [0, 0, 0], [7.92, 0.52, 7.9], "ffd700", 0, 0, 0.6, true, false);
        a.p([9.45035, 29.74035, -146.37965], [0, 0, 0], [7.92, 0.52, 7.9], "ffd700", 0, 0, 0.6, true, false);
        a.p([5.78042, 29.74042, -157.45958], [0, 0, 0], [7.92, 0.52, 7.9], "ffd700", 0, 0, 0.6, true, false);
        a.p([-0.26951, 29.74049, -168.65951], [0, 0, 0], [7.92, 0.52, 7.9], "ffd700", 0, 0, 0.6, true, false);
        a.p([0, 39.03, -48.27], [0, 0, 0], [13.46, 1.58, 40], "-1.0", 0, 0, 0.6, false, false);
        a.e([0.00007, 0.22007, -40.05993]);
        a.e([-5.86986, 40.09014, -329.26986]);
    },
    post: function() {
        a.u('P0');
        a.u('P1');
        a.u('P2');
        a.u('P3');
        a.u('P7');
        a.u('P8');
        a.u('P9');
        a.u('P10');
        a.u('P26');
        a.u('P27');
        a.u('P28');
        a.u('P29');
        a.u('P30');
        a.u('P31');
        a.u('P65');
        cc.set_monkey("radius", 3.5);
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#f9f9f9"));
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -0.4295800000000014) {
                    steer = default_steer * 0.0;
                    speed = default_speed * 0.4;
                    scene.clearColor = new BABYLON.Color3.FromHexString("#48bae8");
                    this.section_id += 1
                }
                break;
            case 1:
                a.mov('P0', 'x', -0.35);
                a.rot('P0', 'z', 0.8);
                a.mov('P1', 'x', -0.35);
                a.rot('P1', 'z', 0.8);
                a.mov('P2', 'x', -0.35);
                a.rot('P2', 'z', 0.8);
                a.mov('P3', 'x', -0.35);
                a.rot('P3', 'z', 0.8);
                a.mov('P7', 'x', -0.35);
                a.mov('P8', 'x', -0.35);
                a.mov('P9', 'x', -0.35);
                a.mov('P10', 'x', -0.35);
                a.mov('P26', 'x', -0.35);
                a.mov('P27', 'x', -0.35);
                a.mov('P28', 'x', -0.35);
                a.mov('P29', 'x', -0.35);
                a.mov('P30', 'x', -0.35);
                a.mov('P31', 'x', -0.35);
                if (PZ < -36.08958) {
                    steer = cc.get("steer", null);
                    speed = cc.get("speed", null);
                    scene.clearColor = cc.get("scene.clearColor", null);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -36.41993) {
                    scene.clearColor = new BABYLON.Color3.FromHexString("#f9f9f9");
                    steer = default_steer * 0.0;
                    a.g(null, -5.0, null);
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -48.97993) {
                    scene.clearColor = cc.get("scene.clearColor", null);
                    steer = cc.get("steer", null);
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -48.99978999999999) {
                    scene.clearColor = new BABYLON.Color3.FromHexString("#f9f9f9");
                    steer = default_steer * 0.7;
                    a.jh(0.42);
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -264.99978999999996) {
                    scene.clearColor = cc.get("scene.clearColor", null);
                    steer = cc.get("steer", null);
                    a.jh(null);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -265.40986) {
                    scene.clearColor = new BABYLON.Color3.FromHexString("#f9f9f9");
                    steer = default_steer * 0.7;
                    this.section_id += 1
                }
                break;
            case 7:
                a.mov('P65', 'z', -0.7);
                if (PZ < -300.00986) {
                    scene.clearColor = cc.get("scene.clearColor", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -300.36972000000003) {
                    scene.clearColor = new BABYLON.Color3.FromHexString("#f9f9f9");
                    steer = default_steer * 0.7;
                    a.jh(0.42);
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -407.50972) {
                    scene.clearColor = cc.get("scene.clearColor", null);
                    steer = cc.get("steer", null);
                    a.jh(null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [32.70049, 0.72049, -33.89951], [0, 0, 0], [1.5, 1.5, 0.7]);
        a.re('P1', [35.89, 0.72, -33.92], [0, 0, 0], [1.5, 1.5, 0.7]);
        a.re('P2', [35.89007, 0.72007, -36.78993], [0, 0, 0], [1.5, 1.5, 0.7]);
        a.re('P3', [32.70014, 0.72014, -36.78986], [0, 0, 0], [1.5, 1.5, 0.7]);
        a.re('P4', [0.00021, -1.25979, -20.28979], [0, 0, 0], [200, 0.86, 47.68]);
        a.re('P5', [0.00028, -0.09972, -19.93972], [0, 0, 0], [6.02, 0.52, 40]);
        a.re('P6', [22.37035, -0.14965, -35.31965], [1.57, 0, 0], [6.02, 0.52, 49.4]);
        a.re('P7', [32.75042, 2.87042, -35.35958], [-1.57, -1.7, 0], [3.08, 0.2, 1.44]);
        a.re('P8', [34.21049, 2.87049, -33.83951], [0, -1.76, 0], [2.98, 0.2, 1.5]);
        a.re('P9', [35.6, 2.87, -35.36], [-1.57, 1.7, 0], [3.08, 0.2, 1.44]);
        a.re('P10', [34.21007, 2.87007, -36.86993], [0, 1.76, 0], [2.98, 0.2, 1.5]);
        a.re('P11', [0.00014, 6.12014, -44.31986], [0, 0, 0], [14.88, 14.04, 2]);
        a.re('P12', [0.00021, -0.07979, -9.83979], [0, 0, 0], [0.92, 0.52, 2.34]);
        a.re('P13', [0.00028, -0.07972, -16.83972], [0, 0, 0], [0.92, 0.52, 2.34]);
        a.re('P14', [0.00035, -0.07965, -25.02965], [0, 0, 0], [0.92, 0.52, 2.34]);
        a.re('P15', [0.00042, -0.07958, -32.45958], [0, 0, 0], [0.92, 0.52, 2.34]);
        a.re('P16', [0.00049, -0.07951, -33.22951], [0, 0, 0], [0.92, 0.52, 2.34]);
        a.re('P17', [0, -0.08, -3.02], [0, 0, 0], [0.92, 0.52, 2.34]);
        a.re('P18', [34.93007, -0.07993, -35.26993], [1.57, 0, 0], [0.92, 0.52, 2.34]);
        a.re('P19', [36.08014, -0.07986, -35.28986], [1.57, 0, 0], [0.92, 0.52, 2.34]);
        a.re('P20', [5.50021, -0.07979, -35.34979], [1.57, 0, 0], [0.92, 0.52, 2.34]);
        a.re('P21', [12.93028, -0.07972, -35.32972], [1.57, 0, 0], [0.92, 0.52, 2.34]);
        a.re('P22', [21.12035, -0.07965, -35.30965], [1.57, 0, 0], [0.92, 0.52, 2.34]);
        a.re('P23', [28.12042, -0.07958, -35.28958], [1.57, 0, 0], [0.92, 0.52, 2.34]);
        a.re('P24', [43.96049, -0.07951, -35.28951], [1.57, 0, 0], [0.92, 0.52, 2.34]);
        a.re('P25', [0, 14.78, -44.32], [0, 0, 0], [14.88, 3.52, 2]);
        a.re('P26', [34.18007, 1.66007, -35.33993], [0, 0, 0], [6.1, 1.18, 3.68]);
        a.re('P27', [34.18014, 3.62014, -35.35986], [0, 0, 0], [2.98, 0.68, 3.02]);
        a.re('P28', [32.67021, 3.06021, -33.71979], [0, -1.77, -0.11], [0.22, 0.14, 1.7]);
        a.re('P29', [35.62028, 3.06028, -36.95972], [0, 1.76, 0.11], [0.22, 0.14, 1.7]);
        a.re('P30', [32.72035, 3.06035, -36.95965], [0, 1.76, -0.11], [0.22, 0.14, 1.7]);
        a.re('P31', [35.65042, 3.06042, -33.71958], [0, -1.77, 0.11], [0.22, 0.14, 1.7]);
        a.re('P32', [0.00049, 3.36049, -44.22951], [0, 0, 0], [5.3, 8.72, 2]);
        a.re('P33', [1.25, 2.55, -44.13], [0, 0, 0], [0.9, 0.94, 2]);
        a.re('P34', [-1.89993, 29.80007, -82.99993], [0.31, 0, 0], [3.62, 0.52, 12.38]);
        a.re('P35', [-3.65986, 29.79014, -94.39986], [0, 0, 0], [3.62, 0.52, 12.38]);
        a.re('P36', [-2.73979, 29.78021, -102.26979], [-0.44, 0, 0], [3.62, 0.52, 5.28]);
        a.re('P37', [-0.14972, 29.77028, -105.77972], [-0.87, 0, 0], [3.62, 0.52, 5.28]);
        a.re('P38', [3.03035, 29.76035, -109.28965], [-0.61, 0, 0], [3.62, 0.52, 5.28]);
        a.re('P39', [5.04042, 29.75042, -113.48958], [-0.35, 0, 0], [3.62, 0.52, 5.28]);
        a.re('P40', [-5.58951, 38.70049, -320.92951], [0, 0, 0], [3.6, 0.52, 20.48]);
        a.re('P41', [-5.59, 29.73, -191.39], [0, 0, 0], [3.6, 0.52, 20.48]);
        a.re('C0', [-4.92993, 30.66007, -192.76993], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [-5.61986, 30.660140000000002, -199.43986], [0, 0, 0], [2, 2, 2]);
        a.re('P42', [-5.58979, 29.72021, -211.67979], [0, 0, 0], [2.6, 0.52, 20.48]);
        a.re('P43', [-5.90972, 29.74028, -179.43972], [0, 0, 0], [7.92, 0.52, 7.9]);
        a.re('C2', [-6.67965, 30.66035, -209.77965], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [-4.43958, 30.660420000000002, -209.77958], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [-5.55951, 30.660490000000003, -213.97951], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [-4.72, 30.66, -219.44], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [-6.67993, 30.66007, -221.67993], [0, 0, 0], [2, 2, 2]);
        a.re('P44', [-5.58986, 29.72014, -231.68986], [0, 0, 0], [3.6, 0.52, 20.48]);
        a.re('C7', [-6.67979, 30.660210000000003, -186.54979], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [-4.49972, 33.27028, -247.88972], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [-5.90965, 35.34035, -252.12965], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [-4.38958, 37.62042, -256.57958], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [-6.77951, 37.620490000000004, -256.57951], [0, 0, 0], [2, 2, 2]);
        a.re('P45', [-5.59, 34.39, -250.96], [0, 0.47, 0], [3.6, 0.52, 20.48]);
        a.re('C12', [-6.67993, 39.840070000000004, -326.79993], [0, 0, 0], [2, 2, 2]);
        a.re('C13', [-4.56986, 39.84014, -326.79986], [0, 0, 0], [2, 2, 2]);
        a.re('P46', [0.00021, 29.82021, -63.53979], [0, 0, 0], [3.64, 0.52, 28.54]);
        a.re('P47', [11.29028, 30.86028, -78.24972], [0, 0, 0], [0.8, 4, 0.8]);
        a.re('C14', [11.29035, 33.39035, -78.26965], [0, 0, 0], [2, 2, 2]);
        a.re('P48', [9.61042, 31.26042, -78.24958], [0, 0, 0], [0.8, 4.8, 0.8]);
        a.re('P49', [6.34049, 32.06049, -78.24951], [0, 0, 0], [0.8, 6.4, 0.8]);
        a.re('P50', [8.01, 31.66, -78.25], [0, 0, 0], [0.8, 5.6, 0.8]);
        a.re('P51', [4.61007, 32.36007, -78.24993], [0, 0, 0], [0.8, 7, 0.8]);
        a.re('P52', [7.90014, 33.40014, -78.24986], [0, 0, 10.63], [0.84, 7.4, 0.8]);
        a.re('P53', [7.90021, 29.26021, -78.24979], [0, 0, -1.57], [0.84, 7.4, 0.8]);
        a.re('C15', [9.62028, 34.280280000000005, -78.26972], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [8.01035, 34.930350000000004, -78.26965], [0, 0, 0], [2, 2, 2]);
        a.re('C17', [6.34042, 35.67042, -78.26958], [0, 0, 0], [2, 2, 2]);
        a.re('C18', [4.61049, 36.36049, -78.26951], [0, 0, 0], [2, 2, 2]);
        a.re('P54', [12.94, 38.59, -78.18], [0, 0, 0], [3, 0.52, 3]);
        a.re('P55', [-13.55993, 38.59007, -78.29993], [-3.14, 0, 0], [3, 0.52, 3]);
        a.re('C19', [-5.22986, 36.36014, -78.25986], [0, 0, 0], [2, 2, 2]);
        a.re('C20', [-6.94979, 35.670210000000004, -78.24979], [0, 0, 0], [2, 2, 2]);
        a.re('C21', [-8.62972, 34.93028, -78.23972], [0, 0, 0], [2, 2, 2]);
        a.re('C22', [-10.22965, 34.28035, -78.22965], [0, 0, 0], [2, 2, 2]);
        a.re('P56', [-8.50958, 29.26042, -78.24958], [0, 3.14, -1.57], [0.84, 7.4, 0.8]);
        a.re('P57', [-8.50951, 33.40049, -78.24951], [-3.14, 0, 10.63], [0.84, 7.4, 0.8]);
        a.re('P58', [-5.23, 32.36, -78.27], [-3.14, 0, 0], [0.8, 7, 0.8]);
        a.re('P59', [-8.62993, 31.66007, -78.24993], [-3.14, 0, 0], [0.8, 5.6, 0.8]);
        a.re('P60', [-6.94986, 32.06014, -78.25986], [-3.14, 0, 0], [0.8, 6.4, 0.8]);
        a.re('P61', [-10.22979, 31.26021, -78.23979], [-3.14, 0, 0], [0.8, 4.8, 0.8]);
        a.re('C23', [-11.89972, 33.390280000000004, -78.22972], [0, 0, 0], [2, 2, 2]);
        a.re('P62', [-11.89965, 30.86035, -78.23965], [-3.14, 0, 0], [0.8, 4, 0.8]);
        a.re('Y0', [-13.39958, 33.57042, -78.24958], [-3.14, 0, 0], [2, 9.34, 2]);
        a.re('Y1', [12.79049, 33.57049, -78.23951], [0, 0, 0], [2, 9.34, 2]);
        a.re('P63', [-3.62, 38.7, -287.92], [0, 0, 0], [3.6, 3.6, 3.6]);
        a.re('P64', [-7.26993, 38.70007, -305.49993], [0, 0, 0], [3.6, 3.6, 3.6]);
        a.re('P65', [-5.58986, 38.85014, -270.06986], [0, 0, 0], [3.6, 0.52, 20.48]);
        a.re('P66', [5.78021, 29.74021, -121.22979], [0, 0, 0], [3.62, 0.52, 12.38]);
        a.re('P67', [5.78028, 29.74028, -134.94972], [0, 0, 0], [7.92, 0.52, 7.9]);
        a.re('P68', [9.45035, 29.74035, -146.37965], [0, 0, 0], [7.92, 0.52, 7.9]);
        a.re('P69', [5.78042, 29.74042, -157.45958], [0, 0, 0], [7.92, 0.52, 7.9]);
        a.re('P70', [-0.26951, 29.74049, -168.65951], [0, 0, 0], [7.92, 0.52, 7.9]);
        a.re('P71', [0, 39.03, -48.27], [0, 0, 0], [13.46, 1.58, 40]);
        a.re('E0', [0.00007, 0.22007, -40.05993], [0, 0, 0], [1, 1, 1]);
        a.re('E1', [-5.86986, 40.09014, -329.26986], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}