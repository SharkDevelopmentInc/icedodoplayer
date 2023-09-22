var map = {
    title: "Upside Down City",
    song: "env2",
    maker: "Zhou Yu",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([5.29, 1.1, -16.89], [-0.59, 0, 0], [0.4, 0.86, 2], "05ff11", 0, 0, 0.6, false, false, false, false);
        a.p([4.48, 1.1, -16.54], [-2.53, 0, 0], [0.4, 0.86, 1.2], "05ff11", 0, 0, 0.6, false, false, false, false);
        a.p([109.49, 101.29, -213.56], [0, 0, 0], [692.34, 7.1, 633.18], "0a0d29", 0, 0, 0.6, false, false, true, false);
        a.p([85.27, 109.03, -206.53], [0, 0, 0], [77, 201.42, 58.54], "122a3d", 0, 0, 0.6, false, false, true, false);
        a.p([10.68, 64.44, -326.37], [0, 0, 0], [69.86, 137.22, 75.88], "14292b", 0, 0, 0.6, false, false, true, false);
        a.p([151.71, 107.17, -389.16], [0, 0, 0], [76, 236.6, 76], "14292b", 0, 0, 0.6, false, false, true, false);
        a.p([185.81, 53.76, -44.59], [0, 0, 0], [69.86, 244.82, 68.18], "14292b", 0, 0, 0.6, false, false, false, false);
        a.p([-96.09, 64.44, -141.15], [0, 0, 0], [69.86, 137.22, 83.16], "14292b", 0, 0, 0.6, false, false, false, false);
        a.p([-97.66, 78.29, -237.73], [0, 0, 0], [76, 236.6, 62.22], "14292b", 0, 0, 0.6, false, false, false, false);
        a.p([-16.39986, 14.54, -121.69986], [-1.57, 0, 0], [2.62, 237.4, 75.24], "1b293b", 0, 0, 0.6, false, false, true, false);
        a.p([-53.69, 14.54, -151.39], [0, 0, 0], [1.12, 229.22, 60], "1b293b", 0, 0, 0.6, false, false, true, false);
        a.p([-44.59972, 68, -179.86], [-1.57, 0, 0], [2.88, 91.4, 19.2], "1b293b", 0, 0, 0.6, false, false, true, false);
        a.p([196.2, 126.56, -294.99], [0, 0, 0], [76, 236.6, 76], "1b293b", 0, 0, 0.6, false, false, true, false);
        a.p([20.64, 14.54, -156.78], [0, 0, 0], [1.12, 246.38, 49], "1b293b", 0, 0, 0.6, false, false, true, false);
        a.p([173.72, 93.83, -116.49], [0, 0, 0], [44.94, 201.42, 44.94], "1b293b", 0, 0, 0.6, false, false, false, false);
        a.p([89.31, 122.52, -133.28], [0, 0, 0], [46.92, 201.42, 73.92], "1c285c", 0, 0, 0.6, false, false, true, false);
        a.p([4.91, 31.31, -34.78], [0, 0, 0], [86, 60.28, 86], "22343d", 0, 0, 0.6, false, false, true, false);
        a.p([48.01, 12.2, -34.48], [0, 0, 0], [1.28, 225.5, 88], "3b3b3b", 0, 0, 0.6, false, false, true, false);
        a.p([-38.15, 12.2, -34.44], [0, 0, 0], [1.28, 225.5, 88], "3b3b3b", 0, 0, 0.6, false, false, true, false);
        a.p([4.55, 12.2, 8.66], [-1.57, 0, 0], [1.28, 225.5, 86], "3b3b3b", 0, 0, 0.6, false, false, true, false);
        a.p([4.99, 61.8, -77.73], [-1.57, 0, 0], [1.28, 157.08, 86], "3b3b3b", 0, 0, 0.6, false, false, true, false);
        a.p([2.03, 10.14, -77.73], [-1.57, 0, 0], [1.28, 225.5, 80], "3b3b3b", 0, 0, 0.6, false, false, true, false);
        a.p([20.64, 60.89, -141.01], [0, 0, 0], [1.12, 146.4, 40.34], "1b293b", 0, 0, 0.6, false, false, true, false);
        a.p([-9.7, 14.54, -179.86], [-1.57, 0, 0], [2.88, 204.34, 60.64], "1b293b", 0, 0, 0.6, false, false, true, false);
        a.p([-10.36, 114.36, -238.09], [0, 0, 0], [80.5, 201.42, 60.86], "3b3b3b", 0, 0, 0.6, false, false, true, false);
        a.p([86.68, 113.62, -288.75], [0, 0, 0], [69.86, 201.42, 68.18], "3b3b3b", 0, 0, 0.6, false, false, true, false);
        a.p([6.49, 1.1, -13.95], [0, 0, 0], [0.5, 0.86, 7.92], "3b3b3b", 0, 0, 0.6, false, false, false, false);
        a.p([239.85, 82.26, -388.86], [0, 0, 0], [76, 236.6, 76], "3b3b3b", 0, 0, 0.6, false, false, false, false);
        a.p([-16.39, 96.44, -151.31], [0, 0, 0], [73.42, 6.84, 57.8], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([45.51, -15.46, -88.25], [0, 0, 0], [0.5, 0.2, 4], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([12.26, 0.99, -34.26], [-0.79, 0, 0], [2.2, 0.64, 15.4], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([-29.22, 0.99, -22.66], [-1.57, 0, 0], [2.2, 0.64, 24], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([21.1, 0.99, -34.69], [0.79, 0, 0], [2.2, 0.64, 14], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([11.22, 0.99, -54.28], [-1.57, 0, 0], [2.6, 0.64, 20], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([39.04, -15.46, -86.51], [-1.57, 0, 0], [0.5, 0.2, 13.4], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([40.65, -15.46, -89.99972], [-1.57, 0, 0], [0.5, 0.2, 9.4], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([32.15, -15.46, -91.56], [0, 0, 0], [0.5, 0.2, 10.6], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([36, -15.46, -92.65], [0, 0, 0], [0.5, 0.2, 5.8], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([39.13, -15.46, -98.56], [-0.79, 0, 0], [0.5, 0.2, 9], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([34.73, -15.46, -99.29], [-0.79, 0, 0], [0.5, 0.2, 7.4], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([39.28, -15.46, -104.47], [0.79, 0, 0], [0.5, 0.2, 8.6], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([34.8, -15.46, -104.23], [0.79, 0, 0], [0.5, 0.2, 7.4], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([29.24, -15.46, -132.19979], [-1.57, 0, 0], [0.5, 0.2, 14], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([27.3, -15.46, -127.55], [-1.57, 0, 0], [0.5, 0.2, 10.4], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([36.31, -15.46, -119.79965], [0, 0, 0], [0.5, 0.2, 25.16], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([32.25, -15.46, -117.14], [0, 0, 0], [0.5, 0.2, 21.12], "3ff2ef,0.7", 0, 0, 0.6, false, false, true, false);
        a.y([0.29, -5.96, -67.98], [0, -3.14, 0], [3.28, 3.28, 3.28], "3ff2ef,0.7", 0, 0, 0.6, false, 0.0, true);
        a.y([-17.8, -5.96, -70.23], [0, -3.14, 0], [3.28, 3.28, 3.28], "3ff2ef,0.7", 0, 0, 0.6, false, 0.0, true);
        a.y([-14.66, -5.96, -68.08], [0, -3.14, 0], [3.28, 3.28, 3.28], "3ff2ef,0.7", 0, 0, 0.6, false, 0.0, true);
        a.y([-5.54, -5.96, -71.67], [0, -3.14, 0], [3.28, 3.28, 3.28], "3ff2ef,0.7", 0, 0, 0.6, false, 0.0, true);
        a.p([7.91, 0.99, -14.62], [-1.57, 0, 0], [2, 0.64, 2], "3ff2ef,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([85.22, 12.2, -411.83], [-1.57, 0, 0], [84, 225.5, 41.24], "46334f", 0, 0, 0.6, false, false, true, false);
        a.p([64.96, 77.36, -370.49], [-1.57, 0, 0], [1.28, 112.12, 41.24], "46334f", 0, 0, 0.6, false, false, true, false);
        a.p([36.95, 12.2, -411.83], [-1.57, 0, 0], [84, 225.5, 41.24], "46334f", 0, 0, 0.6, false, false, true, false);
        a.p([199.11, 60.96, -190.38], [0, 0, 0], [96.06, 201.42, 89.6], "46334f", 0, 0, 0.6, false, false, true, false);
        a.p([61.58, 10.14, -412.66], [-1.57, 0, 0], [8.66, 225.5, 87.48], "46334f", 0, 0, 0.6, false, false, true, false);
        a.p([-81.06, 29.62, -335.68], [0, 0, 0], [96.06, 201.42, 93.76], "46334f", 0, 0, 0.6, false, false, true, false);
        a.p([90.07, 64.57, -52.77], [0, 0, 0], [70.6, 201.42, 44.94], "46334f", 0, 0, 0.6, false, false, false, false);
        a.p([61.06, 17.81, -404.32], [0, 0, 0], [13, 0.64, 10.12], "49c5f2,0.4", 0, 0, 0.6, false, false, false, false);
        a.p([-5.23, 0.99, -24.97], [0.79, 0, 0], [2.6, 0.64, 16], "49c5f2,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-9.45, 0.99, -30.76], [-0.79, 0, 0], [2, 0.64, 24], "49c5f2,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-0.22, 0.99, -37.16], [0.79, 0, 0], [2, 0.64, 24], "49c5f2,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-3.31, 0.99, -49.49951], [-0.79, 0, 0], [2.2, 0.64, 15], "49c5f2,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-13.26, 0.99, -45.4], [-1.57, 0, 0], [1.4, 0.64, 10], "49c5f2,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([0.06, 0.99, -5.84], [0, 0, 0], [2.6, 0.64, 28.78], "49c5f2,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([25.72, 0.99, -10.53], [0, 0, 0], [2.2, 0.64, 40], "49c5f2,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([5.05, 0.99, -14.62], [0, 0, 0], [2, 0.64, 2], "49c5f2,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-46.36, 21.02, -190.53], [0, 0, 0], [6, 0.86, 22.42], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([51.7, 21.02, -246.63], [-1.57, 0, 0], [6, 0.86, 28.68], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-36.55, 21.02, -198.58], [-1.57, 0, 0], [6, 0.86, 25.38], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([130.19, 21.02, -262.72], [0, 0, 0], [6, 0.86, 64.98], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([40.36, 21.02, -250.65], [0, 0, 0], [6, 0.86, 110], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([148.13, 21.02, -322.84], [0, 0, 0], [6, 0.86, 76.94], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([135.66, 21.02, -287.26], [-1.57, 0, 0], [6, 0.86, 30], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([166.58, 21.02, -341.09979], [-1.57, 0, 0], [6, 0.86, 67.7], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([61.12, 21.02, -344.43], [0, 0, 0], [6, 0.86, 53.08], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([137.22, 21.02, -245.39965], [-1.57, 0, 0], [6, 0.86, 63.6], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([72.55, 21.02, -242.49], [-1.57, 0, 0], [4.44, 0.86, 13.36], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([85.71, 21.02, -245.71], [-1.57, 0, 0], [4.44, 0.86, 13.36], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([98.92, 21.02, -249.17], [-1.57, 0, 0], [4.44, 0.86, 13.36], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([128.45, 21.02, -336.19993], [-1.57, 0, 0], [6, 0.86, 8.62], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([119.46, 21.02, -331.25], [-1.57, 0, 0], [6, 0.86, 9.48], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([107.7, 21.02, -337.47], [-2.36, 0, 0], [6, 0.86, 16.28], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([101.54, 21.02, -351.62], [0, 0, 0], [6, 0.86, 14.5], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([96.35, 21.02, -355.89965], [-1.57, 0, 0], [6, 0.86, 16.34], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([83.21, 21.02, -351.63], [-0.79, 0, 0], [6, 0.86, 10], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([59.9, 21.02, -347.59], [-1.57, 0, 0], [6, 0.86, 37.56], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([29.77, 21.02, -198.58], [-1.57, 0, 0], [6, 0.86, 27.2], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([6.14, 21.02, -198.05], [-1.57, 0, 0], [3, 0.86, 19.9], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-13.85, 21.02, -199.48], [-1.57, 0, 0], [3, 0.86, 19.9], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([61.06, 20.32, -395.26], [0, -0.54, 0], [0.92, 0.86, 10], "878a8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-31.79, -1.34, -44.03], [-1.57, 0, 0], [18, 6, 8], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-18.37, -1.34, -69.91], [0, 0, 0], [18, 6, 8], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-23.48, -1.34, -56.54], [-1.57, 0, 0], [18, 6, 8], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-20.31, -1.34, -15.11], [0, 0, 0], [18, 6, 8], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([5.05, 1.1, -12.13], [0, 0, 0], [2, 0.86, 2], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-0.21, -1.34, -69.91], [0, 0, 0], [18, 6, 8], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([9.8, -1.34, -61.54], [0, 0, 0], [18, 6, 8], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-15.29, -1.34, -56.57], [-1.57, 0, 0], [18, 6, 8], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([23.08, -7.25, -56.53], [-1.57, 0, 0], [18, 6, 8], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([41.29, -7.25, -38.26], [-1.57, 0, 0], [18, 6, 8], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([28.06, -4.11, -43.18], [0, 0, 0], [18, 12.2, 8], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-1.36, -11.22, -130.08], [-1.57, 0, 0.52], [3.2, 3.2, 23.76], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([61.72, 98.25, -410.9], [0, 0, 0], [85.02, 153.84, 81.4], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-3.49993, -5.27, -133.49993], [0, 1.05, 0], [3.2, 3.2, 22], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-31.34, 3.66, -132.39], [-1.57, 0, 0.52], [3.2, 3.2, 24], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-3.49979, -2.16, -142.36], [0, -0.52, 0], [3.2, 3.2, 20], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-15.06, -4.98, -147.27], [-1.57, 0, 0.52], [3.2, 3.2, 32], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-23.15, 0.18, -138.39965], [0, -0.52, 0], [3.2, 3.2, 28], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-39.09, 12.37, -137.42], [0, 1.05, 0], [3.2, 3.2, 27], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-39.12, 16.45, -149.34], [0, -0.52, 0], [3.2, 3.2, 26], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-26.69, 12.04, -157.08], [-1.57, 0, 0.52], [3.2, 3.2, 32], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-33.21, 15.57, -159.12], [0, 1.05, 0], [3.2, 3.2, 16], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-14.11, 23.92, -171.02], [0, -0.52, 0], [3.2, 3.2, 19], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([71, 97.63, -85.86], [-1.57, 0, 0], [10.08, 2.94, 547.5], "a10b0b", 0, 0, 0.6, false, false, false, false);
        a.p([139.73, 97.63, -157.21], [0, 0, 0], [10.08, 2.94, 376.58], "a10b0b", 0, 0, 0.6, false, false, false, false);
        a.p([38.13, 97.63, -181.11], [0, 0, 0], [10.08, 2.94, 200.64], "a10b0b", 0, 0, 0.6, false, false, false, false);
        a.p([-65.68, 97.63, -194.34], [-1.57, 0, 0], [10.08, 2.94, 217.56], "a10b0b", 0, 0, 0.6, false, false, false, false);
        a.p([141.89, 97.63, -244.85], [-1.57, 0, 0], [10.08, 2.94, 217.56], "a10b0b", 0, 0, 0.6, false, false, false, false);
        a.p([160.89, 97.63, -340.52], [-1.57, 0, 0], [10.08, 2.94, 217.56], "a10b0b", 0, 0, 0.6, false, false, false, false);
        a.p([-65.79, 97.63, -276.29], [-1.57, 0, 0], [10.08, 2.94, 217.56], "a10b0b", 0, 0, 0.6, false, false, false, false);
        a.p([-22.62, -1.47, -45.39986], [-1.57, 0.52, 0], [1.4, 0.64, 12], "dcdede", 0, 0, 0.6, false, false, false, false);
        a.p([14.12, -7.08, -58.69], [-1.57, -0.52, 0], [1.28, 0.64, 12], "dcdede", 0, 0, 0.6, false, false, false, false);
        a.p([38.39, -12.85, -50.94], [0, -0.52, 0], [1.4, 0.64, 12], "dcdede", 0, 0, 0.6, false, false, false, false);
        a.p([44.28, -16.54, -75.34], [0, -0.17, 0], [1.74, 0.64, 10], "dcdede", 0, 0, 0.6, false, false, false, false);
        a.p([44.28, -16.42, -83.36], [0, 0.3, 0], [1.74, 0.64, 6.8], "dcdede", 0, 0, 0.6, false, false, false, false);
        a.p([15.89, -11.91, -130.18], [-1.57, 0, 0], [3.2, 3.2, 10], "dcdede", 0, 0, 0.6, false, false, false, false);
        a.p([-30.88, 8.03, -143.38], [-1.57, 0, 0], [3.2, 3.2, 3.2], "dcdede", 0, 0, 0.6, false, false, false, false);
        a.p([-16.68, 1.86, -154.38], [-1.57, 0, 0], [3.2, 3.2, 3.2], "dcdede", 0, 0, 0.6, false, false, false, false);
        a.p([-46.44, 21.19, -171.16], [-1.57, 0, 0], [16.66, 3.2, 3.2], "dcdede", 0, 0, 0.6, false, false, false, false);
        a.p([-43.69, 14.87, -160.29979], [-1.57, 0, 0], [3.2, 3.2, 3.2], "dcdede", 0, 0, 0.6, false, false, false, false);
        a.p([-20.31, -1.34, -6.54], [0, 0, 0], [18, 6, 8], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([18, -4.11, -69.91], [0, 0, 0], [18, 12.2, 8], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([32.84, -6.94, -64.91], [-1.57, 0, 0], [18, 18.2, 8], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([-31.79, -4.11, -62.26], [-1.57, 0, 0], [18, 12.2, 8], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([-18.67, -1.34, -39.01], [0, 0, 0], [18, 6, 8], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([-6.93, -1.34, -10.17], [-1.57, 0, 0], [18, 6, 8], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([23.08, -1.34, -56.57], [-1.57, 0, 0], [18, 6, 8], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([41.31, -6.94, -64.91], [-1.57, 0, 0], [18, 18.2, 8], "878a8a", 0, 0, 0.6, false, false, false, false);
        a.p([-15.29, -7.25, -56.53], [-1.57, 0, 0], [18, 6, 8], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([36.28, -4.11, -51.59965], [0, 0, 0], [18, 12.2, 8], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([-9.78, -9.96, -127.86], [0, -0.52, 0], [2.6, 2.6, 13], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([41.29, -1.34, -38.29951], [-1.57, 0, 0], [18, 6, 8], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([-14.12, 19.61, -161.37], [0, 1.05, 0], [2.6, 2.6, 24], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([-32.75, 5.73, -128.83], [0, -0.52, 0], [2.6, 2.6, 15], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([-23.15, 1.11, -126.09986], [0, 1.05, 0], [2.6, 2.6, 18], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([-27.07, 3.8, -152.31], [0, 1.05, 0], [2.6, 2.6, 27], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([-44.31, 20.52, -142.21], [-1.57, 0, 0.52], [2.6, 2.6, 18], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([-42.09965, 18.96, -161.09965], [-1.57, 0, 0.52], [2.6, 2.6, 26], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([6.15, 0.98, -137.03], [-1.57, 0, 0.52], [2.6, 2.6, 28.36], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([40.34, 19.38, -257.86], [0, 0, 0], [6, 3.56, 5.32], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([142.29, 19.38, -245.46], [-1.57, 0, 0], [6, 3.56, 5.32], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([158.48, 19.38, -341.11], [-1.57, 0, 0], [6, 3.56, 5.32], "fa0f1b", 0, 0, 0.6, false, false, true, false);
        a.p([7.9, 1.1, -12.13], [0, 0, 0], [2, 0.86, 2], "fa0f1b", 0, 0, 0.6, false, false, false, false);
        a.p([7.88, 1.1, -16.85], [0.79, 0, 0], [0.4, 0.86, 2.4], "ff0505", 0, 0, 0.6, false, false, false, false);
        a.p([7.88, 1.1, -16.85], [-0.79, 0, 0], [0.4, 0.86, 2.4], "ff0505", 0, 0, 0.6, false, false, false, false);
        a.p([61.06, 21.08, -401.17], [0, 0, 0], [9.4, 6.72, 2.22], "-1.0", 0, 0, 0.6, false, false, true, false);
        a.p([34.25, -15.09958, -109.29958], [0, 0, 0], [24.36, 0.64, 46.56], "-1.0", 0, 0, 0.6, false, false, false, false);
        a.e([61.06, 18.77028, -404.71972]);
    },
    post: function() {
        a.u('P28');
        cc.set_monkey("speed", default_speed * 0.6);
        cc.set_monkey("steer", default_steer * -2.0);
        cc.set_monkey("cameraDownAngle", -50.0 * Math.PI / 180);
        cc.set_monkey("radius", 2.8);
        cc.set_monkey("light.groundColor", new BABYLON.Color3.FromHexString("#7d7d7d"));
        cc.set_monkey("gravity", new BABYLON.Vector3(null, 9, null));
        cc.set_monkey("player.scaling", new BABYLON.Vector3(1.5, null, 1.5));
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -86.69) {
                    speed = default_speed * 0.4;
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -109.13) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -109.91000000000001) {
                    speed = default_speed * 0.7;
                    steer = default_steer * -2.5;
                    this.section_id += 1
                }
                break;
            case 3:
                a.mov('P28', 'y', -0.3);
                if (PZ < -168.81) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -179.64999999999998) {
                    speed = default_speed * 1.6;
                    steer = default_steer * -3.0;
                    a.cam_d(4.0);
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -379.65) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.cam_d(null);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -381) {
                    a.msg_set("line it up ");
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -397.41999999999996) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [5.29, 1.1, -16.89], [-0.59, 0, 0], [0.4, 0.86, 2]);
        a.re('P1', [4.48, 1.1, -16.54], [-2.53, 0, 0], [0.4, 0.86, 1.2]);
        a.re('P2', [109.49, 101.29, -213.56], [0, 0, 0], [692.34, 7.1, 633.18]);
        a.re('P3', [85.27, 109.03, -206.53], [0, 0, 0], [77, 201.42, 58.54]);
        a.re('P4', [10.68, 64.44, -326.37], [0, 0, 0], [69.86, 137.22, 75.88]);
        a.re('P5', [151.71, 107.17, -389.16], [0, 0, 0], [76, 236.6, 76]);
        a.re('P6', [185.81, 53.76, -44.59], [0, 0, 0], [69.86, 244.82, 68.18]);
        a.re('P7', [-96.09, 64.44, -141.15], [0, 0, 0], [69.86, 137.22, 83.16]);
        a.re('P8', [-97.66, 78.29, -237.73], [0, 0, 0], [76, 236.6, 62.22]);
        a.re('P9', [-16.39986, 14.54, -121.69986], [-1.57, 0, 0], [2.62, 237.4, 75.24]);
        a.re('P10', [-53.69, 14.54, -151.39], [0, 0, 0], [1.12, 229.22, 60]);
        a.re('P11', [-44.59972, 68, -179.86], [-1.57, 0, 0], [2.88, 91.4, 19.2]);
        a.re('P12', [196.2, 126.56, -294.99], [0, 0, 0], [76, 236.6, 76]);
        a.re('P13', [20.64, 14.54, -156.78], [0, 0, 0], [1.12, 246.38, 49]);
        a.re('P14', [173.72, 93.83, -116.49], [0, 0, 0], [44.94, 201.42, 44.94]);
        a.re('P15', [89.31, 122.52, -133.28], [0, 0, 0], [46.92, 201.42, 73.92]);
        a.re('P16', [4.91, 31.31, -34.78], [0, 0, 0], [86, 60.28, 86]);
        a.re('P17', [48.01, 12.2, -34.48], [0, 0, 0], [1.28, 225.5, 88]);
        a.re('P18', [-38.15, 12.2, -34.44], [0, 0, 0], [1.28, 225.5, 88]);
        a.re('P19', [4.55, 12.2, 8.66], [-1.57, 0, 0], [1.28, 225.5, 86]);
        a.re('P20', [4.99, 61.8, -77.73], [-1.57, 0, 0], [1.28, 157.08, 86]);
        a.re('P21', [2.03, 10.14, -77.73], [-1.57, 0, 0], [1.28, 225.5, 80]);
        a.re('P22', [20.64, 60.89, -141.01], [0, 0, 0], [1.12, 146.4, 40.34]);
        a.re('P23', [-9.7, 14.54, -179.86], [-1.57, 0, 0], [2.88, 204.34, 60.64]);
        a.re('P24', [-10.36, 114.36, -238.09], [0, 0, 0], [80.5, 201.42, 60.86]);
        a.re('P25', [86.68, 113.62, -288.75], [0, 0, 0], [69.86, 201.42, 68.18]);
        a.re('P26', [6.49, 1.1, -13.95], [0, 0, 0], [0.5, 0.86, 7.92]);
        a.re('P27', [239.85, 82.26, -388.86], [0, 0, 0], [76, 236.6, 76]);
        a.re('P28', [-16.39, 96.44, -151.31], [0, 0, 0], [73.42, 6.84, 57.8]);
        a.re('P29', [45.51, -15.46, -88.25], [0, 0, 0], [0.5, 0.2, 4]);
        a.re('P30', [12.26, 0.99, -34.26], [-0.79, 0, 0], [2.2, 0.64, 15.4]);
        a.re('P31', [-29.22, 0.99, -22.66], [-1.57, 0, 0], [2.2, 0.64, 24]);
        a.re('P32', [21.1, 0.99, -34.69], [0.79, 0, 0], [2.2, 0.64, 14]);
        a.re('P33', [11.22, 0.99, -54.28], [-1.57, 0, 0], [2.6, 0.64, 20]);
        a.re('P34', [39.04, -15.46, -86.51], [-1.57, 0, 0], [0.5, 0.2, 13.4]);
        a.re('P35', [40.65, -15.46, -89.99972], [-1.57, 0, 0], [0.5, 0.2, 9.4]);
        a.re('P36', [32.15, -15.46, -91.56], [0, 0, 0], [0.5, 0.2, 10.6]);
        a.re('P37', [36, -15.46, -92.65], [0, 0, 0], [0.5, 0.2, 5.8]);
        a.re('P38', [39.13, -15.46, -98.56], [-0.79, 0, 0], [0.5, 0.2, 9]);
        a.re('P39', [34.73, -15.46, -99.29], [-0.79, 0, 0], [0.5, 0.2, 7.4]);
        a.re('P40', [39.28, -15.46, -104.47], [0.79, 0, 0], [0.5, 0.2, 8.6]);
        a.re('P41', [34.8, -15.46, -104.23], [0.79, 0, 0], [0.5, 0.2, 7.4]);
        a.re('P42', [29.24, -15.46, -132.19979], [-1.57, 0, 0], [0.5, 0.2, 14]);
        a.re('P43', [27.3, -15.46, -127.55], [-1.57, 0, 0], [0.5, 0.2, 10.4]);
        a.re('P44', [36.31, -15.46, -119.79965], [0, 0, 0], [0.5, 0.2, 25.16]);
        a.re('P45', [32.25, -15.46, -117.14], [0, 0, 0], [0.5, 0.2, 21.12]);
        a.re('Y0', [0.29, -5.96, -67.98], [0, -3.14, 0], [3.28, 3.28, 3.28]);
        a.re('Y1', [-17.8, -5.96, -70.23], [0, -3.14, 0], [3.28, 3.28, 3.28]);
        a.re('Y2', [-14.66, -5.96, -68.08], [0, -3.14, 0], [3.28, 3.28, 3.28]);
        a.re('Y3', [-5.54, -5.96, -71.67], [0, -3.14, 0], [3.28, 3.28, 3.28]);
        a.re('P46', [7.91, 0.99, -14.62], [-1.57, 0, 0], [2, 0.64, 2]);
        a.re('P47', [85.22, 12.2, -411.83], [-1.57, 0, 0], [84, 225.5, 41.24]);
        a.re('P48', [64.96, 77.36, -370.49], [-1.57, 0, 0], [1.28, 112.12, 41.24]);
        a.re('P49', [36.95, 12.2, -411.83], [-1.57, 0, 0], [84, 225.5, 41.24]);
        a.re('P50', [199.11, 60.96, -190.38], [0, 0, 0], [96.06, 201.42, 89.6]);
        a.re('P51', [61.58, 10.14, -412.66], [-1.57, 0, 0], [8.66, 225.5, 87.48]);
        a.re('P52', [-81.06, 29.62, -335.68], [0, 0, 0], [96.06, 201.42, 93.76]);
        a.re('P53', [90.07, 64.57, -52.77], [0, 0, 0], [70.6, 201.42, 44.94]);
        a.re('P54', [61.06, 17.81, -404.32], [0, 0, 0], [13, 0.64, 10.12]);
        a.re('P55', [-5.23, 0.99, -24.97], [0.79, 0, 0], [2.6, 0.64, 16]);
        a.re('P56', [-9.45, 0.99, -30.76], [-0.79, 0, 0], [2, 0.64, 24]);
        a.re('P57', [-0.22, 0.99, -37.16], [0.79, 0, 0], [2, 0.64, 24]);
        a.re('P58', [-3.31, 0.99, -49.49951], [-0.79, 0, 0], [2.2, 0.64, 15]);
        a.re('P59', [-13.26, 0.99, -45.4], [-1.57, 0, 0], [1.4, 0.64, 10]);
        a.re('P60', [0.06, 0.99, -5.84], [0, 0, 0], [2.6, 0.64, 28.78]);
        a.re('P61', [25.72, 0.99, -10.53], [0, 0, 0], [2.2, 0.64, 40]);
        a.re('P62', [5.05, 0.99, -14.62], [0, 0, 0], [2, 0.64, 2]);
        a.re('P63', [-46.36, 21.02, -190.53], [0, 0, 0], [6, 0.86, 22.42]);
        a.re('P64', [51.7, 21.02, -246.63], [-1.57, 0, 0], [6, 0.86, 28.68]);
        a.re('P65', [-36.55, 21.02, -198.58], [-1.57, 0, 0], [6, 0.86, 25.38]);
        a.re('P66', [130.19, 21.02, -262.72], [0, 0, 0], [6, 0.86, 64.98]);
        a.re('P67', [40.36, 21.02, -250.65], [0, 0, 0], [6, 0.86, 110]);
        a.re('P68', [148.13, 21.02, -322.84], [0, 0, 0], [6, 0.86, 76.94]);
        a.re('P69', [135.66, 21.02, -287.26], [-1.57, 0, 0], [6, 0.86, 30]);
        a.re('P70', [166.58, 21.02, -341.09979], [-1.57, 0, 0], [6, 0.86, 67.7]);
        a.re('P71', [61.12, 21.02, -344.43], [0, 0, 0], [6, 0.86, 53.08]);
        a.re('P72', [137.22, 21.02, -245.39965], [-1.57, 0, 0], [6, 0.86, 63.6]);
        a.re('P73', [72.55, 21.02, -242.49], [-1.57, 0, 0], [4.44, 0.86, 13.36]);
        a.re('P74', [85.71, 21.02, -245.71], [-1.57, 0, 0], [4.44, 0.86, 13.36]);
        a.re('P75', [98.92, 21.02, -249.17], [-1.57, 0, 0], [4.44, 0.86, 13.36]);
        a.re('P76', [128.45, 21.02, -336.19993], [-1.57, 0, 0], [6, 0.86, 8.62]);
        a.re('P77', [119.46, 21.02, -331.25], [-1.57, 0, 0], [6, 0.86, 9.48]);
        a.re('P78', [107.7, 21.02, -337.47], [-2.36, 0, 0], [6, 0.86, 16.28]);
        a.re('P79', [101.54, 21.02, -351.62], [0, 0, 0], [6, 0.86, 14.5]);
        a.re('P80', [96.35, 21.02, -355.89965], [-1.57, 0, 0], [6, 0.86, 16.34]);
        a.re('P81', [83.21, 21.02, -351.63], [-0.79, 0, 0], [6, 0.86, 10]);
        a.re('P82', [59.9, 21.02, -347.59], [-1.57, 0, 0], [6, 0.86, 37.56]);
        a.re('P83', [29.77, 21.02, -198.58], [-1.57, 0, 0], [6, 0.86, 27.2]);
        a.re('P84', [6.14, 21.02, -198.05], [-1.57, 0, 0], [3, 0.86, 19.9]);
        a.re('P85', [-13.85, 21.02, -199.48], [-1.57, 0, 0], [3, 0.86, 19.9]);
        a.re('P86', [61.06, 20.32, -395.26], [0, -0.54, 0], [0.92, 0.86, 10]);
        a.re('P87', [-31.79, -1.34, -44.03], [-1.57, 0, 0], [18, 6, 8]);
        a.re('P88', [-18.37, -1.34, -69.91], [0, 0, 0], [18, 6, 8]);
        a.re('P89', [-23.48, -1.34, -56.54], [-1.57, 0, 0], [18, 6, 8]);
        a.re('P90', [-20.31, -1.34, -15.11], [0, 0, 0], [18, 6, 8]);
        a.re('P91', [5.05, 1.1, -12.13], [0, 0, 0], [2, 0.86, 2]);
        a.re('P92', [-0.21, -1.34, -69.91], [0, 0, 0], [18, 6, 8]);
        a.re('P93', [9.8, -1.34, -61.54], [0, 0, 0], [18, 6, 8]);
        a.re('P94', [-15.29, -1.34, -56.57], [-1.57, 0, 0], [18, 6, 8]);
        a.re('P95', [23.08, -7.25, -56.53], [-1.57, 0, 0], [18, 6, 8]);
        a.re('P96', [41.29, -7.25, -38.26], [-1.57, 0, 0], [18, 6, 8]);
        a.re('P97', [28.06, -4.11, -43.18], [0, 0, 0], [18, 12.2, 8]);
        a.re('P98', [-1.36, -11.22, -130.08], [-1.57, 0, 0.52], [3.2, 3.2, 23.76]);
        a.re('P99', [61.72, 98.25, -410.9], [0, 0, 0], [85.02, 153.84, 81.4]);
        a.re('P100', [-3.49993, -5.27, -133.49993], [0, 1.05, 0], [3.2, 3.2, 22]);
        a.re('P101', [-31.34, 3.66, -132.39], [-1.57, 0, 0.52], [3.2, 3.2, 24]);
        a.re('P102', [-3.49979, -2.16, -142.36], [0, -0.52, 0], [3.2, 3.2, 20]);
        a.re('P103', [-15.06, -4.98, -147.27], [-1.57, 0, 0.52], [3.2, 3.2, 32]);
        a.re('P104', [-23.15, 0.18, -138.39965], [0, -0.52, 0], [3.2, 3.2, 28]);
        a.re('P105', [-39.09, 12.37, -137.42], [0, 1.05, 0], [3.2, 3.2, 27]);
        a.re('P106', [-39.12, 16.45, -149.34], [0, -0.52, 0], [3.2, 3.2, 26]);
        a.re('P107', [-26.69, 12.04, -157.08], [-1.57, 0, 0.52], [3.2, 3.2, 32]);
        a.re('P108', [-33.21, 15.57, -159.12], [0, 1.05, 0], [3.2, 3.2, 16]);
        a.re('P109', [-14.11, 23.92, -171.02], [0, -0.52, 0], [3.2, 3.2, 19]);
        a.re('P110', [71, 97.63, -85.86], [-1.57, 0, 0], [10.08, 2.94, 547.5]);
        a.re('P111', [139.73, 97.63, -157.21], [0, 0, 0], [10.08, 2.94, 376.58]);
        a.re('P112', [38.13, 97.63, -181.11], [0, 0, 0], [10.08, 2.94, 200.64]);
        a.re('P113', [-65.68, 97.63, -194.34], [-1.57, 0, 0], [10.08, 2.94, 217.56]);
        a.re('P114', [141.89, 97.63, -244.85], [-1.57, 0, 0], [10.08, 2.94, 217.56]);
        a.re('P115', [160.89, 97.63, -340.52], [-1.57, 0, 0], [10.08, 2.94, 217.56]);
        a.re('P116', [-65.79, 97.63, -276.29], [-1.57, 0, 0], [10.08, 2.94, 217.56]);
        a.re('P117', [-22.62, -1.47, -45.39986], [-1.57, 0.52, 0], [1.4, 0.64, 12]);
        a.re('P118', [14.12, -7.08, -58.69], [-1.57, -0.52, 0], [1.28, 0.64, 12]);
        a.re('P119', [38.39, -12.85, -50.94], [0, -0.52, 0], [1.4, 0.64, 12]);
        a.re('P120', [44.28, -16.54, -75.34], [0, -0.17, 0], [1.74, 0.64, 10]);
        a.re('P121', [44.28, -16.42, -83.36], [0, 0.3, 0], [1.74, 0.64, 6.8]);
        a.re('P122', [15.89, -11.91, -130.18], [-1.57, 0, 0], [3.2, 3.2, 10]);
        a.re('P123', [-30.88, 8.03, -143.38], [-1.57, 0, 0], [3.2, 3.2, 3.2]);
        a.re('P124', [-16.68, 1.86, -154.38], [-1.57, 0, 0], [3.2, 3.2, 3.2]);
        a.re('P125', [-46.44, 21.19, -171.16], [-1.57, 0, 0], [16.66, 3.2, 3.2]);
        a.re('P126', [-43.69, 14.87, -160.29979], [-1.57, 0, 0], [3.2, 3.2, 3.2]);
        a.re('P127', [-20.31, -1.34, -6.54], [0, 0, 0], [18, 6, 8]);
        a.re('P128', [18, -4.11, -69.91], [0, 0, 0], [18, 12.2, 8]);
        a.re('P129', [32.84, -6.94, -64.91], [-1.57, 0, 0], [18, 18.2, 8]);
        a.re('P130', [-31.79, -4.11, -62.26], [-1.57, 0, 0], [18, 12.2, 8]);
        a.re('P131', [-18.67, -1.34, -39.01], [0, 0, 0], [18, 6, 8]);
        a.re('P132', [-6.93, -1.34, -10.17], [-1.57, 0, 0], [18, 6, 8]);
        a.re('P133', [23.08, -1.34, -56.57], [-1.57, 0, 0], [18, 6, 8]);
        a.re('P134', [41.31, -6.94, -64.91], [-1.57, 0, 0], [18, 18.2, 8]);
        a.re('P135', [-15.29, -7.25, -56.53], [-1.57, 0, 0], [18, 6, 8]);
        a.re('P136', [36.28, -4.11, -51.59965], [0, 0, 0], [18, 12.2, 8]);
        a.re('P137', [-9.78, -9.96, -127.86], [0, -0.52, 0], [2.6, 2.6, 13]);
        a.re('P138', [41.29, -1.34, -38.29951], [-1.57, 0, 0], [18, 6, 8]);
        a.re('P139', [-14.12, 19.61, -161.37], [0, 1.05, 0], [2.6, 2.6, 24]);
        a.re('P140', [-32.75, 5.73, -128.83], [0, -0.52, 0], [2.6, 2.6, 15]);
        a.re('P141', [-23.15, 1.11, -126.09986], [0, 1.05, 0], [2.6, 2.6, 18]);
        a.re('P142', [-27.07, 3.8, -152.31], [0, 1.05, 0], [2.6, 2.6, 27]);
        a.re('P143', [-44.31, 20.52, -142.21], [-1.57, 0, 0.52], [2.6, 2.6, 18]);
        a.re('P144', [-42.09965, 18.96, -161.09965], [-1.57, 0, 0.52], [2.6, 2.6, 26]);
        a.re('P145', [6.15, 0.98, -137.03], [-1.57, 0, 0.52], [2.6, 2.6, 28.36]);
        a.re('P146', [40.34, 19.38, -257.86], [0, 0, 0], [6, 3.56, 5.32]);
        a.re('P147', [142.29, 19.38, -245.46], [-1.57, 0, 0], [6, 3.56, 5.32]);
        a.re('P148', [158.48, 19.38, -341.11], [-1.57, 0, 0], [6, 3.56, 5.32]);
        a.re('P149', [7.9, 1.1, -12.13], [0, 0, 0], [2, 0.86, 2]);
        a.re('P150', [7.88, 1.1, -16.85], [0.79, 0, 0], [0.4, 0.86, 2.4]);
        a.re('P151', [7.88, 1.1, -16.85], [-0.79, 0, 0], [0.4, 0.86, 2.4]);
        a.re('P152', [61.06, 21.08, -401.17], [0, 0, 0], [9.4, 6.72, 2.22]);
        a.re('P153', [34.25, -15.09958, -109.29958], [0, 0, 0], [24.36, 0.64, 46.56]);
        a.re('E0', [61.06, 18.77028, -404.71972], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}