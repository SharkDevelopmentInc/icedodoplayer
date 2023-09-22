var map = {
    title: "Entity Overload",
    song: "env2",
    maker: "SourLemons",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0.38, -1.07, -163.28], [0, 0, 0], [349.3, 71.66, 0.3], "00000a", 0, 0, 0.6, false, true, false, false);
        a.p([1.43, -59.17, -74.01], [0, 0, 0], [0.22, 1.52, 0.5], "ffffff", 0, 0, 0.6, false, false, true, false);
        a.p([2, -59.17, -74.01], [0, 0, 0], [0.22, 1.52, 0.5], "ffffff", 0, 0, 0.6, false, false, true, false);
        a.p([-1.29965, -59.17, -74.01], [0, 0, 0], [0.22, 1.52, 0.5], "ffffff", 0, 0, 0.6, false, false, true, false);
        a.p([-1.87, -59.17, -74.01], [0, 0, 0], [0.22, 1.52, 0.5], "ffffff", 0, 0, 0.6, false, false, true, false);
        a.s([1.86, -56.39, -73.63], 0.2, "0a0000", 0, 0, 0.6, false, false);
        a.s([1.48, -56.39, -73.63], 0.2, "0a0000", 0, 0, 0.6, false, false);
        a.s([-1.43, -56.39, -73.63], 0.2, "0a0000", 0, 0, 0.6, false, false);
        a.s([-1.81, -56.39, -73.63], 0.2, "0a0000", 0, 0, 0.6, false, false);
        a.p([2.2, -57.19979, -73.54], [0, -1.62, 0], [0.22, 1.52, 0.5], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([-2.18, -57.19972, -73.54], [0, -1.62, 0], [0.22, 1.52, 0.5], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.s([2.17, -54.78, -73.06], 2, "ff0000", 0, 0, 0.6, false, false);
        a.s([-1.62, -56.52, -73.51], 0.2, "ff0000", 0, 0, 0.6, false, false);
        a.s([-2.15, -54.78, -73.06], 2, "ff0000", 0, 0, 0.6, false, false);
        a.s([1.68, -56.52, -73.51], 0.2, "ff0000", 0, 0, 0.6, false, false);
        a.s([1.68, -56.52, -74.01], 1, "ffffff", 0, 0, 0.6, false, false);
        a.p([2.17, -56.42, -72.89], [0, 0, 0], [0.1, 2.38, 0.04], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([1.72, -57.67, -74.01], [0, 0, 0], [0.9, 1.52, 0.5], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([-2.19972, -56.42, -72.89], [0, 0, 0], [0.1, 2.38, 0.04], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([-1.57, -57.67, -74.01], [0, 0, 0], [0.9, 1.52, 0.5], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.s([-1.62, -56.52, -74.01], 1, "ffffff", 0, 0, 0.6, false, false);
        a.p([-1.15, 2.45, -95.28], [0, 0, 0], [12.04, 7.96, 0.3], "00000a", 0, 0, 0.6, false, false, false, false);
        a.y([-1.76, 3.85, -94.36], [0, -1.57, 0], [0.3, 0.3, 0.3], "00000a", 0, 0, 0.6, false, 1, false);
        a.y([0.3, 3.57, -94.87], [-3.14, -1.57, 0], [1, 1, 1], "00000a", 0, 0, 0.6, false, 1, false);
        a.y([-1.77, 3.85, -94.88], [-3.14, -1.57, 0], [1, 1, 1], "00000a", 0, 0, 0.6, false, 1, false);
        a.y([0.31, 3.57, -94.35], [-3.14, -1.57, 0], [0.3, 0.3, 0.3], "00000a", 0, 0, 0.6, false, 1, false);
        a.p([0.61, 1.04, -94.85], [0, 0, -0.76], [0.6, 2.54, 0.52], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-0.46, 0.11, -94.85], [0, 0, -1.16], [0.52, 1.48, 0.52], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-1.34, 0.11, -94.85], [0, 0, -1.9], [0.5, 1.42, 0.52], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-1.99, 0.38, -94.85], [0, 0, -2.31], [0.54, 1.66, 0.52], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-2.59, 0.98, -94.85], [0, 0, -2.59], [0.6, 2.44, 0.52], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-0.09979, 1.05, -94.85], [0, 0, -1.21], [0.4, 1.64, 0.52], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-1.71, 1.05, -94.85], [0, 0, -1.89], [0.4, 2.36, 0.52], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.y([-0.96, 2.52, -94.94], [0, -1.57, 0], [6.52, 0.52, 6.52], "ffffff", 0, 0, 0.6, false, 1, false);
        a.y([0.3, 3.57, -94.66], [-3.14, -1.57, 0], [0.7, 0.7, 0.7], "ffffff", 0, 0, 0.6, false, 1, false);
        a.y([-1.77, 3.85, -94.67], [-3.14, -1.57, 0], [0.7, 0.7, 0.7], "ffffff", 0, 0, 0.6, false, 1, false);
        a.p([-1.15, 0.28, -217.48], [0, 0, 0], [12.04, 7.96, 0.3], "00000a", 0, 0, 0.6, false, false, false, false);
        a.y([-1.77, 1.68, -217.08], [-3.14, -1.57, 0], [1, 1, 1], "00000a", 0, 0, 0.6, false, 1, false);
        a.y([0.3, 1.41, -217.07], [-3.14, -1.57, 0], [1, 1, 1], "00000a", 0, 0, 0.6, false, 1, false);
        a.p([0.61, -1.13, -217.05], [0, 0, -0.76], [0.6, 2.54, 0.52], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-0.46, -2.06, -217.05], [0, 0, -1.16], [0.52, 1.48, 0.52], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-1.34, -2.06, -217.05], [0, 0, -1.9], [0.5, 1.42, 0.52], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-1.99, -1.79, -217.05], [0, 0, -2.31], [0.54, 1.66, 0.52], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-2.59, -1.19, -217.05], [0, 0, -2.59], [0.6, 2.44, 0.52], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-0.09993, -1.12, -217.05], [0, 0, -1.21], [0.4, 1.64, 0.52], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-1.71, -1.12, -217.05], [0, 0, -1.89], [0.4, 2.36, 0.52], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.y([-1.77, 1.68, -216.86], [-3.14, -1.57, 0], [0.7, 0.7, 0.7], "ffffff", 0, 0, 0.6, false, 1, false);
        a.y([0.3, 1.41, -216.86], [-3.14, -1.57, 0], [0.7, 0.7, 0.7], "ffffff", 0, 0, 0.6, false, 1, false);
        a.y([-0.96, 0.35, -217.14], [0, -1.57, 0], [6.52, 0.52, 6.52], "ffffff", 0, 0, 0.6, false, 1, false);
        a.p([13.93, -1.07, -75.67], [0, 0, 0], [349.3, 71.66, 0.3], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([0, -4.37, -148.52], [0, 0, 0], [5.34, 1.52, 5.22], "ffff00", 0, 0, 0.6, true, false, false, false);
        a.y([-1.16, 0.06, -106.04], [-3.14, -1.57, 0], [0.3, 0.3, 0.3], "00000a", 0, 0, 0.6, false, 1, true);
        a.y([-3.24, 0.33, -106.57], [-3.14, -1.57, 0], [1, 1, 1], "00000a", 0, 0, 0.6, false, 1, true);
        a.y([-1.17, 0.06, -106.56], [-3.14, -1.57, 0], [1, 1, 1], "00000a", 0, 0, 0.6, false, 1, true);
        a.y([-3.23, 0.33, -106.05], [0, -1.57, 0], [0.3, 0.3, 0.3], "00000a", 0, 0, 0.6, false, 1, true);
        a.p([-0.86, -2.48, -106.54], [0, 0, -0.76], [0.6, 2.54, 0.52], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([-2.14, -3.41, -106.54], [0, 0, -1.16], [0.52, 1.48, 0.52], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([-3.02, -3.41, -106.54], [0, 0, -1.9], [0.5, 1.42, 0.52], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([-1.79, -3.14, -106.54], [0, 0, -2.31], [0.54, 1.66, 0.52], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([-4.06, -2.54, -106.54], [0, 0, -2.59], [0.6, 2.44, 0.52], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([-1.57, -2.47, -106.54], [0, 0, -1.21], [0.4, 1.64, 0.52], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([-2.69, -2.47, -106.54], [0, 0, -1.89], [0.4, 2.36, 0.52], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.y([-3.24, 0.33, -106.36], [-3.14, -1.57, 0], [0.7, 0.7, 0.7], "ffffff", 0, 0, 0.6, false, 1, true);
        a.p([0.4, -2.74, -94.22], [-0.29, 0, 0], [0.72, 1.52, 0.68], "ffffff", 0, 0, 0.6, false, false, true, false);
        a.p([2.25, -2.74, -93.79965], [-0.29, 0, 0], [0.72, 1.52, 0.68], "ffffff", 0, 0, 0.6, false, false, true, false);
        a.p([-2.49958, -2.06, -89.51], [0, 0, 0], [0.3, 2.86, 0.36], "00000a", 0, 0, 0.6, false, false, true, false);
        a.p([-2.04, -2.06, -89.51], [0, 0, 0], [0.3, 2.86, 0.36], "00000a", 0, 0, 0.6, false, false, true, false);
        a.c([-0.79, -3.78, -182.65], "00000a");
        a.c([0.82, -3.78, -182.64], "00000a");
        a.c([0.08, -3.78, -188.86], "00000a");
        a.p([2.1, 2.76, -3.82], [0, 0, 0], [0.2, 6.76, 0.44], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([-2.79, 2.76, -14.07], [-3.14, 0, 0], [0.2, 6.76, 0.44], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([-2.49, 6.07, -14.07], [0, 3.14, -1.57], [0.14, 0.7, 0.42], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([-0.04, 2.48, -199.69], [0, 4.72, -1.57], [0.14, 0.7, 0.42], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([-2.79, -0.83, -189.25], [-3.14, 0, 0], [0.2, 6.76, 0.44], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([-2.49, 2.48, -189.25], [0, 3.14, -1.57], [0.14, 0.7, 0.42], "00000a", 0, 0, 0.6, false, false, false, false);
        a.c([0, 0.04999999999999993, -4.73], "00000a");
        a.p([2.1, -0.66, -181.49986], [0, 0, 0], [0.2, 6.76, 0.44], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([1.81, 2.64, -181.49979], [0, 0, -1.57], [0.14, 0.7, 0.42], "00000a", 0, 0, 0.6, false, false, false, false);
        a.c([-0.76, 0.04999999999999993, -10.95], "00000a");
        a.c([0.86, 0.04999999999999993, -10.95], "00000a");
        a.s([1.44, 0.86, -93.56], 0.66, "0a0000", 0, 0, 0.6, false, false);
        a.s([0.22, 0.81, -93.84], 0.66, "0a0000", 0, 0, 0.6, false, false);
        a.p([-2.25, 0.31, -132.96], [0, 0, 0], [0.72, 2.86, 0.34], "0a0a0a", 0, 0, 0.6, false, false, false, false);
        a.p([-2.25, 0.31, -89.51], [0, 0, 0], [0.72, 2.86, 0.34], "0a0a0a", 0, 0, 0.6, false, false, false, false);
        a.p([0.66, 0.31, -132.98], [0, 0, 0], [0.72, 2.86, 0.34], "0a0a0a", 0, 0, 0.6, false, false, false, false);
        a.p([0, -1.47, -11.65], [0, 0, 0], [49.5, 2, 32.34], "10590a", 0, 0, 0.6, false, true, false, false);
        a.p([0, 1.39, -31.18], [0, 0.64, 0], [49.5, 2, 9.66], "10590a", 0, 0, 0.6, false, true, false, false);
        a.p([0, -3.97, -199.29965], [0, 0, 0], [49.5, 0.12, 71.44], "10590a", 0, 0, 0.6, false, true, false, false);
        a.y([0, 5.97, -206.81], [0, 0, 0], [15, 5.2, 15], "5a2720", 0, 0, 0.6, false, 0.0, false);
        a.p([0, 2.19, -31.37], [0, 0.63, 0], [3.16, 1.22, 10.7], "6f6f6f", 0, 0, 0.6, false, true, false, false);
        a.p([0, -4.27, -197.95], [0, 0, 0], [3.16, 1.22, 4.7], "6f6f6f", 0, 0, 0.6, false, true, false, false);
        a.p([-2.53, -2.39, -89.51], [0, 0, 0], [0.2, 2.86, 0.34], "6f6f6f", 0, 0, 0.6, false, false, true, false);
        a.p([-1.99, -2.39, -89.51], [0, 0, 0], [0.2, 2.86, 0.34], "6f6f6f", 0, 0, 0.6, false, false, true, false);
        a.p([-2.53, -2.39, -132.96], [0, 0, 0], [0.2, 2.86, 0.34], "6f6f6f", 0, 0, 0.6, false, false, true, false);
        a.p([-1.99, -2.39, -132.96], [0, 0, 0], [0.2, 2.86, 0.34], "6f6f6f", 0, 0, 0.6, false, false, true, false);
        a.p([0.38, -2.39, -132.98], [0, 0, 0], [0.2, 2.86, 0.34], "6f6f6f", 0, 0, 0.6, false, false, true, false);
        a.p([0.92, -2.39, -132.98], [0, 0, 0], [0.2, 2.86, 0.34], "6f6f6f", 0, 0, 0.6, false, false, true, false);
        a.p([0, -4.27, -39.76], [0, 0, 0], [7.34, 1.22, 29.42], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([0, -4.27, -53.81], [0, 0, 0], [2.42, 1.22, 9.44], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([0, -4.27, -59.84], [0, 0, 0], [0.92, 1.22, 9.44], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([0, -4.27, -66.21], [0, 0, 0], [2.42, 1.22, 9.44], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([0, -4.27, -69.92], [0, 0, 0], [7.34, 1.22, 9.44], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([0, -4.27, -120.42], [0, 0, 0], [7.34, 1.22, 93.92], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([-1.73, 0.32, -89.51], [0, 0, 0], [0.2, 2.86, 0.34], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([-2.78, 0.32, -89.51], [0, 0, 0], [0.2, 2.86, 0.34], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([0, -0.85, -13.03], [0, 0, 0], [3.16, 1.22, 29.24], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([2.44, -0.78, -93.09], [-0.29, -1.62, 0], [0.72, 2.08, 0.5], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([-1.73, 0.32, -132.96], [0, 0, 0], [0.2, 2.86, 0.34], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([-2.78, 0.32, -132.96], [0, 0, 0], [0.2, 2.86, 0.34], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.s([-2.23, 2.39, -132.91], 1, "6f6f6f", 0, 0, 0.6, false, false);
        a.p([0, -4.27, -171.91], [0, 0, 0], [7.34, 1.22, 11.58], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([0, -4.27, -186.49], [0, 0, 0], [3.16, 1.22, 20], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([0, -8.08, -197.49958], [0, 0, 0], [6.82, 1.22, 12.68], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([1.18, 0.32, -132.98], [0, 0, 0], [0.2, 2.86, 0.34], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.p([0.13, 0.32, -132.98], [0, 0, 0], [0.2, 2.86, 0.34], "6f6f6f", 0, 0, 0.6, false, false, false, false);
        a.s([0.67, 2.39, -132.92], 1, "6f6f6f", 0, 0, 0.6, false, false);
        a.y([0, -1.04, -206.81], [0, 0, 0], [14, 10, 14], "f2dfb4", 0, 0, 0.6, false, 1, false);
        a.p([0, -1.99, -200.59], [0, 0, 0], [2, 4.76, 2], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.s([1.09, 0.54, -93.43], 0.66, "ff0000", 0, 0, 0.6, false, false);
        a.s([1.89, 1.65, -92.51], 2, "ff0000", 0, 0, 0.6, false, false);
        a.y([-0.13, 2, -3.78], [0, 0, -0.38], [4, 8.76, 4], "ffff00,0.1", 0, 0, 0.6, true, 0.0, false);
        a.y([-0.56, 2, -14.11], [-3.14, 0, -0.38], [4, 8.76, 4], "ffff00,0.1", 0, 0, 0.6, true, 0.0, false);
        a.y([-1.17, 0.06, -106.35], [-3.14, -1.57, 0], [0.7, 0.7, 0.7], "ffffff", 0, 0, 0.6, false, 1, true);
        a.y([-0.13, -1.42, -181.46], [0, 0, -0.38], [4, 8.76, 4], "ffff00,0.1", 0, 0, 0.6, true, 0.0, false);
        a.y([-0.01, -1.58, -197.76], [-4.72, 0, -0.38], [4, 8.76, 4], "ffff00,0.1", 0, 0, 0.6, true, 0.0, false);
        a.y([-0.56, -1.58, -189.29979], [-3.14, 0, -0.38], [4, 8.76, 4], "ffff00,0.1", 0, 0, 0.6, true, 0.0, false);
        a.p([1.36, -1.25, -94.13], [-0.29, 0, 0], [2.9, 1.52, 0.68], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.y([-2.43, -0.99965, -106.63], [0, -1.57, 0], [6.52, 0.52, 6.52], "ffffff", 0, 0, 0.6, false, 1, true);
        a.s([1.21, 0.59, -94.15], 2, "ffffff", 0, 0, 0.6, false, false);
        a.p([1.73, 0, -92.47], [-0.29, 0, 0], [0.32, 2.38, 0.06], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.c([3.33, -3.11, -122.25], "ffffff");
        a.c([2.54, -3.11, -122.25], "ffffff");
        a.c([1.75, -3.11, -122.25], "ffffff");
        a.c([2.81, -3.11, -154.38], "ffffff");
        a.c([2.02, -3.11, -154.38], "ffffff");
        a.c([1.23, -3.11, -154.38], "ffffff");
        a.c([1.65, -3.11, -154.38], "ffffff");
        a.c([2.39, -3.11, -154.38], "ffffff");
        a.c([0.79, -3.11, -154.38], "ffffff");
        a.c([0, -3.11, -154.38], "ffffff");
        a.c([-0.79, -3.11, -154.38], "ffffff");
        a.c([-0.37, -3.11, -154.38], "ffffff");
        a.c([0.37, -3.11, -154.38], "ffffff");
        a.c([-1.29, -3.11, -154.38], "ffffff");
        a.c([-2.08, -3.11, -154.38], "ffffff");
        a.c([-2.87, -3.11, -154.38], "ffffff");
        a.c([-2.45, -3.11, -154.38], "ffffff");
        a.c([-1.71, -3.11, -154.38], "ffffff");
        a.p([1.81, 6.07, -3.82], [0, 0, -1.57], [0.14, 0.7, 0.42], "00000a", 0, 0, 0.6, false, false, false, false);
        a.s([-2.23, 2.39, -89.45], 1, "6f6f6f", 0, 0, 0.6, false, false);
        a.e([-0.39, -7.89, -198.65]);
        a.e([0.28, -7.89, -198.65]);
        a.e([1.19, -7.89, -198.65]);
        a.e([-0.39, -7.89, -200.78]);
        a.e([0.28, -7.89, -200.78]);
        a.e([-1.78, -7.89, -200.78]);
        a.e([1.19, -7.89, -200.78]);
        a.e([1.19, -7.89, -200.78]);
    },
    post: function() {
        a.u('P1');
        a.u('P2');
        a.u('P3');
        a.u('P4');
        a.u('S0');
        a.u('S1');
        a.u('S2');
        a.u('S3');
        a.u('P5');
        a.u('P6');
        a.u('S4');
        a.u('S5');
        a.u('S6');
        a.u('S7');
        a.u('S8');
        a.u('P7');
        a.u('P8');
        a.u('P9');
        a.u('P10');
        a.u('S9');
        a.u('P11');
        a.u('Y0');
        a.u('Y1');
        a.u('Y2');
        a.u('Y3');
        a.u('P12');
        a.u('P13');
        a.u('P14');
        a.u('P15');
        a.u('P16');
        a.u('P17');
        a.u('P18');
        a.u('Y4');
        a.u('Y5');
        a.u('Y6');
        a.u('P19');
        a.u('Y7');
        a.u('Y8');
        a.u('P20');
        a.u('P21');
        a.u('P22');
        a.u('P23');
        a.u('P24');
        a.u('P25');
        a.u('P26');
        a.u('Y9');
        a.u('Y10');
        a.u('Y11');
        a.u('P27');
        cc.set_monkey("light.intensity", 0.4);
        cc.set_monkey("light.specular", new BABYLON.Color3.FromHexString("#00000a"));
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
        case 0:
            if (PZ < -0.10999999999999943) {
                speed = default_speed * 0.2;
                a.msg_set("It is quite dark tonight... ");
                this.section_id += 1
            }
            break;
        case 1:
            if (PZ < -16.55) {
                speed = cc.get("speed", null);
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 2:
            if (PZ < -16.74) {
                a.fov_mul2(2.0);
                speed = default_speed * 0.3;
                this.section_id += 1
            }
            break;
        case 3:
            a.mov('P11', 'z', 22.0);
            a.mov('Y0', 'z', 22.0);
            a.mov('Y1', 'z', 22.0);
            a.mov('Y2', 'z', 22.0);
            a.mov('Y3', 'z', 22.0);
            a.mov('P12', 'z', 22.0);
            a.mov('P13', 'z', 22.0);
            a.mov('P14', 'z', 22.0);
            a.mov('P15', 'z', 22.0);
            a.mov('P16', 'z', 22.0);
            a.mov('P17', 'z', 22.0);
            a.mov('P18', 'z', 22.0);
            a.mov('Y4', 'z', 22.0);
            a.mov('Y5', 'z', 22.0);
            a.mov('Y6', 'z', 22.0);
            if (PZ < -18.24) {
                a.fov_mul2();
                speed = cc.get("speed", null);
                this.section_id += 1
            }
            break;
        case 4:
            if (PZ < -18.43) {
                a.msg_set("What was that!? Be careful! ");
                this.section_id += 1
            }
            break;
        case 5:
            if (PZ < -33.39) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 6:
            if (PZ < -66.44000000000001) {
                this.section_id += 1
            }
            break;
        case 7:
            a.mov('P1', 'y', 200.0);
            a.mov('P2', 'y', 200.0);
            a.mov('P3', 'y', 200.0);
            a.mov('P4', 'y', 200.0);
            a.mov('S0', 'y', 200.0);
            a.mov('S1', 'y', 200.0);
            a.mov('S2', 'y', 200.0);
            a.mov('S3', 'y', 200.0);
            a.mov('P5', 'y', 200.0);
            a.mov('P6', 'y', 200.0);
            a.mov('S4', 'y', 200.0);
            a.mov('S5', 'y', 200.0);
            a.mov('S6', 'y', 200.0);
            a.mov('S7', 'y', 200.0);
            a.mov('S8', 'y', 200.0);
            a.mov('P7', 'y', 200.0);
            a.mov('P8', 'y', 200.0);
            a.mov('P9', 'y', 200.0);
            a.mov('P10', 'y', 200.0);
            a.mov('S9', 'y', 200.0);
            if (PZ < -66.64) {
                this.section_id += 1
            }
            break;
        case 8:
            if (PZ < -67.35000000000001) {
                a.msg_set("DO NOT TOUCH THEM. RUN! ");
                speed = default_speed * 0.2;
                a.fov_mul2(2.0);
                this.section_id += 1
            }
            break;
        case 9:
            if (PZ < -72.77) {
                a.msg_del();
                speed = cc.get("speed", null);
                a.fov_mul2();
                this.section_id += 1
            }
            break;
        case 10:
            if (PZ < -73.07000000000001) {
                a.msg_set("Avoid the entities! ");
                speed = default_speed * 1.3;
                a.fov_mul2(2.0);
                a.js(0.5);
                a.jh(0.6);
                this.section_id += 1
            }
            break;
        case 11:
            a.mov('P27', 'y', 100.0);
            if (PZ < -164.29000000000002) {
                a.msg_del();
                speed = cc.get("speed", null);
                a.fov_mul2();
                a.js(null);
                a.jh(null);
                this.section_id += 1
            }
            break;
        case 12:
            if (PZ < -177.94) {
                speed = default_speed * 0.2;
                a.msg_set("You finally made it home... ");
                a.js(0.5);
                a.jh(0.5);
                this.section_id += 1
            }
            break;
        case 13:
            if (PZ < -194.38) {
                speed = cc.get("speed", null);
                a.msg_del();
                a.js(null);
                a.jh(null);
                this.section_id += 1
            }
            break;
        case 14:
            if (PZ < -194.55) {
                a.fov_mul2(2.0);
                speed = default_speed * 0.3;
                this.section_id += 1
            }
            break;
        case 15:
            a.mov('P19', 'z', 5.0);
            a.mov('Y7', 'z', 5.0);
            a.mov('Y8', 'z', 5.0);
            a.mov('P20', 'z', 5.0);
            a.mov('P21', 'z', 5.0);
            a.mov('P22', 'z', 5.0);
            a.mov('P23', 'z', 5.0);
            a.mov('P24', 'z', 5.0);
            a.mov('P25', 'z', 5.0);
            a.mov('P26', 'z', 5.0);
            a.mov('Y9', 'z', 5.0);
            a.mov('Y10', 'z', 5.0);
            a.mov('Y11', 'z', 5.0);
            if (PZ < -196.05) {
                a.fov_mul2();
                speed = cc.get("speed", null);
                this.section_id += 1
            }
            break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0.38, -1.07, -163.28], [0, 0, 0], [349.3, 71.66, 0.3]);
        a.re('P1', [1.43, -59.17, -74.01], [0, 0, 0], [0.22, 1.52, 0.5]);
        a.re('P2', [2, -59.17, -74.01], [0, 0, 0], [0.22, 1.52, 0.5]);
        a.re('P3', [-1.29965, -59.17, -74.01], [0, 0, 0], [0.22, 1.52, 0.5]);
        a.re('P4', [-1.87, -59.17, -74.01], [0, 0, 0], [0.22, 1.52, 0.5]);
        a.re('S0', [1.86, -56.39, -73.63], [0, 0, 0], [0.2, 0.2, 0.2]);
        a.re('S1', [1.48, -56.39, -73.63], [0, 0, 0], [0.2, 0.2, 0.2]);
        a.re('S2', [-1.43, -56.39, -73.63], [0, 0, 0], [0.2, 0.2, 0.2]);
        a.re('S3', [-1.81, -56.39, -73.63], [0, 0, 0], [0.2, 0.2, 0.2]);
        a.re('P5', [2.2, -57.19979, -73.54], [0, -1.62, 0], [0.22, 1.52, 0.5]);
        a.re('P6', [-2.18, -57.19972, -73.54], [0, -1.62, 0], [0.22, 1.52, 0.5]);
        a.re('S4', [2.17, -54.78, -73.06], [0, 0, 0], [2, 2, 2]);
        a.re('S5', [-1.62, -56.52, -73.51], [0, 0, 0], [0.2, 0.2, 0.2]);
        a.re('S6', [-2.15, -54.78, -73.06], [0, 0, 0], [2, 2, 2]);
        a.re('S7', [1.68, -56.52, -73.51], [0, 0, 0], [0.2, 0.2, 0.2]);
        a.re('S8', [1.68, -56.52, -74.01], [0, 0, 0], [1, 1, 1]);
        a.re('P7', [2.17, -56.42, -72.89], [0, 0, 0], [0.1, 2.38, 0.04]);
        a.re('P8', [1.72, -57.67, -74.01], [0, 0, 0], [0.9, 1.52, 0.5]);
        a.re('P9', [-2.19972, -56.42, -72.89], [0, 0, 0], [0.1, 2.38, 0.04]);
        a.re('P10', [-1.57, -57.67, -74.01], [0, 0, 0], [0.9, 1.52, 0.5]);
        a.re('S9', [-1.62, -56.52, -74.01], [0, 0, 0], [1, 1, 1]);
        a.re('P11', [-1.15, 2.45, -95.28], [0, 0, 0], [12.04, 7.96, 0.3]);
        a.re('Y0', [-1.76, 3.85, -94.36], [0, -1.57, 0], [0.3, 0.3, 0.3]);
        a.re('Y1', [0.3, 3.57, -94.87], [-3.14, -1.57, 0], [1, 1, 1]);
        a.re('Y2', [-1.77, 3.85, -94.88], [-3.14, -1.57, 0], [1, 1, 1]);
        a.re('Y3', [0.31, 3.57, -94.35], [-3.14, -1.57, 0], [0.3, 0.3, 0.3]);
        a.re('P12', [0.61, 1.04, -94.85], [0, 0, -0.76], [0.6, 2.54, 0.52]);
        a.re('P13', [-0.46, 0.11, -94.85], [0, 0, -1.16], [0.52, 1.48, 0.52]);
        a.re('P14', [-1.34, 0.11, -94.85], [0, 0, -1.9], [0.5, 1.42, 0.52]);
        a.re('P15', [-1.99, 0.38, -94.85], [0, 0, -2.31], [0.54, 1.66, 0.52]);
        a.re('P16', [-2.59, 0.98, -94.85], [0, 0, -2.59], [0.6, 2.44, 0.52]);
        a.re('P17', [-0.09979, 1.05, -94.85], [0, 0, -1.21], [0.4, 1.64, 0.52]);
        a.re('P18', [-1.71, 1.05, -94.85], [0, 0, -1.89], [0.4, 2.36, 0.52]);
        a.re('Y4', [-0.96, 2.52, -94.94], [0, -1.57, 0], [6.52, 0.52, 6.52]);
        a.re('Y5', [0.3, 3.57, -94.66], [-3.14, -1.57, 0], [0.7, 0.7, 0.7]);
        a.re('Y6', [-1.77, 3.85, -94.67], [-3.14, -1.57, 0], [0.7, 0.7, 0.7]);
        a.re('P19', [-1.15, 0.28, -217.48], [0, 0, 0], [12.04, 7.96, 0.3]);
        a.re('Y7', [-1.77, 1.68, -217.08], [-3.14, -1.57, 0], [1, 1, 1]);
        a.re('Y8', [0.3, 1.41, -217.07], [-3.14, -1.57, 0], [1, 1, 1]);
        a.re('P20', [0.61, -1.13, -217.05], [0, 0, -0.76], [0.6, 2.54, 0.52]);
        a.re('P21', [-0.46, -2.06, -217.05], [0, 0, -1.16], [0.52, 1.48, 0.52]);
        a.re('P22', [-1.34, -2.06, -217.05], [0, 0, -1.9], [0.5, 1.42, 0.52]);
        a.re('P23', [-1.99, -1.79, -217.05], [0, 0, -2.31], [0.54, 1.66, 0.52]);
        a.re('P24', [-2.59, -1.19, -217.05], [0, 0, -2.59], [0.6, 2.44, 0.52]);
        a.re('P25', [-0.09993, -1.12, -217.05], [0, 0, -1.21], [0.4, 1.64, 0.52]);
        a.re('P26', [-1.71, -1.12, -217.05], [0, 0, -1.89], [0.4, 2.36, 0.52]);
        a.re('Y9', [-1.77, 1.68, -216.86], [-3.14, -1.57, 0], [0.7, 0.7, 0.7]);
        a.re('Y10', [0.3, 1.41, -216.86], [-3.14, -1.57, 0], [0.7, 0.7, 0.7]);
        a.re('Y11', [-0.96, 0.35, -217.14], [0, -1.57, 0], [6.52, 0.52, 6.52]);
        a.re('P27', [13.93, -1.07, -75.67], [0, 0, 0], [349.3, 71.66, 0.3]);
        a.re('P28', [0, -4.37, -148.52], [0, 0, 0], [5.34, 1.52, 5.22]);
        a.re('Y12', [-1.16, 0.06, -106.04], [-3.14, -1.57, 0], [0.3, 0.3, 0.3]);
        a.re('Y13', [-3.24, 0.33, -106.57], [-3.14, -1.57, 0], [1, 1, 1]);
        a.re('Y14', [-1.17, 0.06, -106.56], [-3.14, -1.57, 0], [1, 1, 1]);
        a.re('Y15', [-3.23, 0.33, -106.05], [0, -1.57, 0], [0.3, 0.3, 0.3]);
        a.re('P29', [-0.86, -2.48, -106.54], [0, 0, -0.76], [0.6, 2.54, 0.52]);
        a.re('P30', [-2.14, -3.41, -106.54], [0, 0, -1.16], [0.52, 1.48, 0.52]);
        a.re('P31', [-3.02, -3.41, -106.54], [0, 0, -1.9], [0.5, 1.42, 0.52]);
        a.re('P32', [-1.79, -3.14, -106.54], [0, 0, -2.31], [0.54, 1.66, 0.52]);
        a.re('P33', [-4.06, -2.54, -106.54], [0, 0, -2.59], [0.6, 2.44, 0.52]);
        a.re('P34', [-1.57, -2.47, -106.54], [0, 0, -1.21], [0.4, 1.64, 0.52]);
        a.re('P35', [-2.69, -2.47, -106.54], [0, 0, -1.89], [0.4, 2.36, 0.52]);
        a.re('Y16', [-3.24, 0.33, -106.36], [-3.14, -1.57, 0], [0.7, 0.7, 0.7]);
        a.re('P36', [0.4, -2.74, -94.22], [-0.29, 0, 0], [0.72, 1.52, 0.68]);
        a.re('P37', [2.25, -2.74, -93.79965], [-0.29, 0, 0], [0.72, 1.52, 0.68]);
        a.re('P38', [-2.49958, -2.06, -89.51], [0, 0, 0], [0.3, 2.86, 0.36]);
        a.re('P39', [-2.04, -2.06, -89.51], [0, 0, 0], [0.3, 2.86, 0.36]);
        a.re('C0', [-0.79, -3.78, -182.65], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [0.82, -3.78, -182.64], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [0.08, -3.78, -188.86], [0, 0, 0], [2, 2, 2]);
        a.re('P40', [2.1, 2.76, -3.82], [0, 0, 0], [0.2, 6.76, 0.44]);
        a.re('P41', [-2.79, 2.76, -14.07], [-3.14, 0, 0], [0.2, 6.76, 0.44]);
        a.re('P42', [-2.49, 6.07, -14.07], [0, 3.14, -1.57], [0.14, 0.7, 0.42]);
        a.re('P43', [-0.04, 2.48, -199.69], [0, 4.72, -1.57], [0.14, 0.7, 0.42]);
        a.re('P44', [-2.79, -0.83, -189.25], [-3.14, 0, 0], [0.2, 6.76, 0.44]);
        a.re('P45', [-2.49, 2.48, -189.25], [0, 3.14, -1.57], [0.14, 0.7, 0.42]);
        a.re('C3', [0, 0.04999999999999993, -4.73], [0, 0, 0], [2, 2, 2]);
        a.re('P46', [2.1, -0.66, -181.49986], [0, 0, 0], [0.2, 6.76, 0.44]);
        a.re('P47', [1.81, 2.64, -181.49979], [0, 0, -1.57], [0.14, 0.7, 0.42]);
        a.re('C4', [-0.76, 0.04999999999999993, -10.95], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [0.86, 0.04999999999999993, -10.95], [0, 0, 0], [2, 2, 2]);
        a.re('S10', [1.44, 0.86, -93.56], [0, 0, 0], [0.66, 0.66, 0.66]);
        a.re('S11', [0.22, 0.81, -93.84], [0, 0, 0], [0.66, 0.66, 0.66]);
        a.re('P48', [-2.25, 0.31, -132.96], [0, 0, 0], [0.72, 2.86, 0.34]);
        a.re('P49', [-2.25, 0.31, -89.51], [0, 0, 0], [0.72, 2.86, 0.34]);
        a.re('P50', [0.66, 0.31, -132.98], [0, 0, 0], [0.72, 2.86, 0.34]);
        a.re('P51', [0, -1.47, -11.65], [0, 0, 0], [49.5, 2, 32.34]);
        a.re('P52', [0, 1.39, -31.18], [0, 0.64, 0], [49.5, 2, 9.66]);
        a.re('P53', [0, -3.97, -199.29965], [0, 0, 0], [49.5, 0.12, 71.44]);
        a.re('Y17', [0, 5.97, -206.81], [0, 0, 0], [15, 5.2, 15]);
        a.re('P54', [0, 2.19, -31.37], [0, 0.63, 0], [3.16, 1.22, 10.7]);
        a.re('P55', [0, -4.27, -197.95], [0, 0, 0], [3.16, 1.22, 4.7]);
        a.re('P56', [-2.53, -2.39, -89.51], [0, 0, 0], [0.2, 2.86, 0.34]);
        a.re('P57', [-1.99, -2.39, -89.51], [0, 0, 0], [0.2, 2.86, 0.34]);
        a.re('P58', [-2.53, -2.39, -132.96], [0, 0, 0], [0.2, 2.86, 0.34]);
        a.re('P59', [-1.99, -2.39, -132.96], [0, 0, 0], [0.2, 2.86, 0.34]);
        a.re('P60', [0.38, -2.39, -132.98], [0, 0, 0], [0.2, 2.86, 0.34]);
        a.re('P61', [0.92, -2.39, -132.98], [0, 0, 0], [0.2, 2.86, 0.34]);
        a.re('P62', [0, -4.27, -39.76], [0, 0, 0], [7.34, 1.22, 29.42]);
        a.re('P63', [0, -4.27, -53.81], [0, 0, 0], [2.42, 1.22, 9.44]);
        a.re('P64', [0, -4.27, -59.84], [0, 0, 0], [0.92, 1.22, 9.44]);
        a.re('P65', [0, -4.27, -66.21], [0, 0, 0], [2.42, 1.22, 9.44]);
        a.re('P66', [0, -4.27, -69.92], [0, 0, 0], [7.34, 1.22, 9.44]);
        a.re('P67', [0, -4.27, -120.42], [0, 0, 0], [7.34, 1.22, 93.92]);
        a.re('P68', [-1.73, 0.32, -89.51], [0, 0, 0], [0.2, 2.86, 0.34]);
        a.re('P69', [-2.78, 0.32, -89.51], [0, 0, 0], [0.2, 2.86, 0.34]);
        a.re('P70', [0, -0.85, -13.03], [0, 0, 0], [3.16, 1.22, 29.24]);
        a.re('P71', [2.44, -0.78, -93.09], [-0.29, -1.62, 0], [0.72, 2.08, 0.5]);
        a.re('P72', [-1.73, 0.32, -132.96], [0, 0, 0], [0.2, 2.86, 0.34]);
        a.re('P73', [-2.78, 0.32, -132.96], [0, 0, 0], [0.2, 2.86, 0.34]);
        a.re('S12', [-2.23, 2.39, -132.91], [0, 0, 0], [1, 1, 1]);
        a.re('P74', [0, -4.27, -171.91], [0, 0, 0], [7.34, 1.22, 11.58]);
        a.re('P75', [0, -4.27, -186.49], [0, 0, 0], [3.16, 1.22, 20]);
        a.re('P76', [0, -8.08, -197.49958], [0, 0, 0], [6.82, 1.22, 12.68]);
        a.re('P77', [1.18, 0.32, -132.98], [0, 0, 0], [0.2, 2.86, 0.34]);
        a.re('P78', [0.13, 0.32, -132.98], [0, 0, 0], [0.2, 2.86, 0.34]);
        a.re('S13', [0.67, 2.39, -132.92], [0, 0, 0], [1, 1, 1]);
        a.re('Y18', [0, -1.04, -206.81], [0, 0, 0], [14, 10, 14]);
        a.re('P79', [0, -1.99, -200.59], [0, 0, 0], [2, 4.76, 2]);
        a.re('S14', [1.09, 0.54, -93.43], [0, 0, 0], [0.66, 0.66, 0.66]);
        a.re('S15', [1.89, 1.65, -92.51], [0, 0, 0], [2, 2, 2]);
        a.re('Y19', [-0.13, 2, -3.78], [0, 0, -0.38], [4, 8.76, 4]);
        a.re('Y20', [-0.56, 2, -14.11], [-3.14, 0, -0.38], [4, 8.76, 4]);
        a.re('Y21', [-1.17, 0.06, -106.35], [-3.14, -1.57, 0], [0.7, 0.7, 0.7]);
        a.re('Y22', [-0.13, -1.42, -181.46], [0, 0, -0.38], [4, 8.76, 4]);
        a.re('Y23', [-0.01, -1.58, -197.76], [-4.72, 0, -0.38], [4, 8.76, 4]);
        a.re('Y24', [-0.56, -1.58, -189.29979], [-3.14, 0, -0.38], [4, 8.76, 4]);
        a.re('P80', [1.36, -1.25, -94.13], [-0.29, 0, 0], [2.9, 1.52, 0.68]);
        a.re('Y25', [-2.43, -0.99965, -106.63], [0, -1.57, 0], [6.52, 0.52, 6.52]);
        a.re('S16', [1.21, 0.59, -94.15], [0, 0, 0], [2, 2, 2]);
        a.re('P81', [1.73, 0, -92.47], [-0.29, 0, 0], [0.32, 2.38, 0.06]);
        a.re('C6', [3.33, -3.11, -122.25], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [2.54, -3.11, -122.25], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [1.75, -3.11, -122.25], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [2.81, -3.11, -154.38], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [2.02, -3.11, -154.38], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [1.23, -3.11, -154.38], [0, 0, 0], [2, 2, 2]);
        a.re('C12', [1.65, -3.11, -154.38], [0, 0, 0], [2, 2, 2]);
        a.re('C13', [2.39, -3.11, -154.38], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [0.79, -3.11, -154.38], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [0, -3.11, -154.38], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [-0.79, -3.11, -154.38], [0, 0, 0], [2, 2, 2]);
        a.re('C17', [-0.37, -3.11, -154.38], [0, 0, 0], [2, 2, 2]);
        a.re('C18', [0.37, -3.11, -154.38], [0, 0, 0], [2, 2, 2]);
        a.re('C19', [-1.29, -3.11, -154.38], [0, 0, 0], [2, 2, 2]);
        a.re('C20', [-2.08, -3.11, -154.38], [0, 0, 0], [2, 2, 2]);
        a.re('C21', [-2.87, -3.11, -154.38], [0, 0, 0], [2, 2, 2]);
        a.re('C22', [-2.45, -3.11, -154.38], [0, 0, 0], [2, 2, 2]);
        a.re('C23', [-1.71, -3.11, -154.38], [0, 0, 0], [2, 2, 2]);
        a.re('P82', [1.81, 6.07, -3.82], [0, 0, -1.57], [0.14, 0.7, 0.42]);
        a.re('S17', [-2.23, 2.39, -89.45], [0, 0, 0], [1, 1, 1]);
        a.re('E0', [-0.39, -7.89, -198.65], [0, 0, 0], [1, 1, 1]);
        a.re('E1', [0.28, -7.89, -198.65], [0, 0, 0], [1, 1, 1]);
        a.re('E2', [1.19, -7.89, -198.65], [0, 0, 0], [1, 1, 1]);
        a.re('E3', [-0.39, -7.89, -200.78], [0, 0, 0], [1, 1, 1]);
        a.re('E4', [0.28, -7.89, -200.78], [0, 0, 0], [1, 1, 1]);
        a.re('E5', [-1.78, -7.89, -200.78], [0, 0, 0], [1, 1, 1]);
        a.re('E6', [1.19, -7.89, -200.78], [0, 0, 0], [1, 1, 1]);
        a.re('E7', [1.19, -7.89, -200.78], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
