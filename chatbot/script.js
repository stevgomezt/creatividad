function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./images/chatbot/male0001.png
     ./images/chatbot/male0002.png
     ./images/chatbot/male0003.png
     ./images/chatbot/male0004.png
     ./images/chatbot/male0005.png
     ./images/chatbot/male0006.png
     ./images/chatbot/male0007.png
     ./images/chatbot/male0008.png
     ./images/chatbot/male0009.png
     ./images/chatbot/male0010.png
     ./images/chatbot/male0011.png
     ./images/chatbot/male0012.png
     ./images/chatbot/male0013.png
     ./images/chatbot/male0014.png
     ./images/chatbot/male0015.png
     ./images/chatbot/male0016.png
     ./images/chatbot/male0017.png
     ./images/chatbot/male0018.png
     ./images/chatbot/male0019.png
     ./images/chatbot/male0020.png
     ./images/chatbot/male0021.png
     ./images/chatbot/male0022.png
     ./images/chatbot/male0023.png
     ./images/chatbot/male0024.png
     ./images/chatbot/male0025.png
     ./images/chatbot/male0026.png
     ./images/chatbot/male0027.png
     ./images/chatbot/male0028.png
     ./images/chatbot/male0029.png
     ./images/chatbot/male0030.png
     ./images/chatbot/male0031.png
     ./images/chatbot/male0032.png
     ./images/chatbot/male0033.png
     ./images/chatbot/male0034.png
     ./images/chatbot/male0035.png
     ./images/chatbot/male0036.png
     ./images/chatbot/male0037.png
     ./images/chatbot/male0038.png
     ./images/chatbot/male0039.png
     ./images/chatbot/male0040.png
     ./images/chatbot/male0041.png
     ./images/chatbot/male0042.png
     ./images/chatbot/male0043.png
     ./images/chatbot/male0044.png
     ./images/chatbot/male0045.png
     ./images/chatbot/male0046.png
     ./images/chatbot/male0047.png
     ./images/chatbot/male0048.png
     ./images/chatbot/male0049.png
     ./images/chatbot/male0050.png
     ./images/chatbot/male0051.png
     ./images/chatbot/male0052.png
     ./images/chatbot/male0053.png
     ./images/chatbot/male0054.png
     ./images/chatbot/male0055.png
     ./images/chatbot/male0056.png
     ./images/chatbot/male0057.png
     ./images/chatbot/male0058.png
     ./images/chatbot/male0059.png
     ./images/chatbot/male0060.png
     ./images/chatbot/male0061.png
     ./images/chatbot/male0062.png
     ./images/chatbot/male0063.png
     ./images/chatbot/male0064.png
     ./images/chatbot/male0065.png
     ./images/chatbot/male0066.png
     ./images/chatbot/male0067.png
     ./images/chatbot/male0068.png
     ./images/chatbot/male0069.png
     ./images/chatbot/male0070.png
     ./images/chatbot/male0071.png
     ./images/chatbot/male0072.png
     ./images/chatbot/male0073.png
     ./images/chatbot/male0074.png
     ./images/chatbot/male0075.png
     ./images/chatbot/male0076.png
     ./images/chatbot/male0077.png
     ./images/chatbot/male0078.png
     ./images/chatbot/male0079.png
     ./images/chatbot/male0080.png
     ./images/chatbot/male0081.png
     ./images/chatbot/male0082.png
     ./images/chatbot/male0083.png
     ./images/chatbot/male0084.png
     ./images/chatbot/male0085.png
     ./images/chatbot/male0086.png
     ./images/chatbot/male0087.png
     ./images/chatbot/male0088.png
     ./images/chatbot/male0089.png
     ./images/chatbot/male0090.png
     ./images/chatbot/male0091.png
     ./images/chatbot/male0092.png
     ./images/chatbot/male0093.png
     ./images/chatbot/male0094.png
     ./images/chatbot/male0095.png
     ./images/chatbot/male0096.png
     ./images/chatbot/male0097.png
     ./images/chatbot/male0098.png
     ./images/chatbot/male0099.png
     ./images/chatbot/male0100.png
     ./images/chatbot/male0101.png
     ./images/chatbot/male0102.png
     ./images/chatbot/male0103.png
     ./images/chatbot/male0104.png
     ./images/chatbot/male0105.png
     ./images/chatbot/male0106.png
     ./images/chatbot/male0107.png
     ./images/chatbot/male0108.png
     ./images/chatbot/male0109.png
     ./images/chatbot/male0110.png
     ./images/chatbot/male0111.png
     ./images/chatbot/male0112.png
     ./images/chatbot/male0113.png
     ./images/chatbot/male0114.png
     ./images/chatbot/male0115.png
     ./images/chatbot/male0116.png
     ./images/chatbot/male0117.png
     ./images/chatbot/male0118.png
     ./images/chatbot/male0119.png
     ./images/chatbot/male0120.png
     ./images/chatbot/male0121.png
     ./images/chatbot/male0122.png
     ./images/chatbot/male0123.png
     ./images/chatbot/male0124.png
     ./images/chatbot/male0125.png
     ./images/chatbot/male0126.png
     ./images/chatbot/male0127.png
     ./images/chatbot/male0128.png
     ./images/chatbot/male0129.png
     ./images/chatbot/male0130.png
     ./images/chatbot/male0131.png
     ./images/chatbot/male0132.png
     ./images/chatbot/male0133.png
     ./images/chatbot/male0134.png
     ./images/chatbot/male0135.png
     ./images/chatbot/male0136.png
     ./images/chatbot/male0137.png
     ./images/chatbot/male0138.png
     ./images/chatbot/male0139.png
     ./images/chatbot/male0140.png
     ./images/chatbot/male0141.png
     ./images/chatbot/male0142.png
     ./images/chatbot/male0143.png
     ./images/chatbot/male0144.png
     ./images/chatbot/male0145.png
     ./images/chatbot/male0146.png
     ./images/chatbot/male0147.png
     ./images/chatbot/male0148.png
     ./images/chatbot/male0149.png
     ./images/chatbot/male0150.png
     ./images/chatbot/male0151.png
     ./images/chatbot/male0152.png
     ./images/chatbot/male0153.png
     ./images/chatbot/male0154.png
     ./images/chatbot/male0155.png
     ./images/chatbot/male0156.png
     ./images/chatbot/male0157.png
     ./images/chatbot/male0158.png
     ./images/chatbot/male0159.png
     ./images/chatbot/male0160.png
     ./images/chatbot/male0161.png
     ./images/chatbot/male0162.png
     ./images/chatbot/male0163.png
     ./images/chatbot/male0164.png
     ./images/chatbot/male0165.png
     ./images/chatbot/male0166.png
     ./images/chatbot/male0167.png
     ./images/chatbot/male0168.png
     ./images/chatbot/male0169.png
     ./images/chatbot/male0170.png
     ./images/chatbot/male0171.png
     ./images/chatbot/male0172.png
     ./images/chatbot/male0173.png
     ./images/chatbot/male0174.png
     ./images/chatbot/male0175.png
     ./images/chatbot/male0176.png
     ./images/chatbot/male0177.png
     ./images/chatbot/male0178.png
     ./images/chatbot/male0179.png
     ./images/chatbot/male0180.png
     ./images/chatbot/male0181.png
     ./images/chatbot/male0182.png
     ./images/chatbot/male0183.png
     ./images/chatbot/male0184.png
     ./images/chatbot/male0185.png
     ./images/chatbot/male0186.png
     ./images/chatbot/male0187.png
     ./images/chatbot/male0188.png
     ./images/chatbot/male0189.png
     ./images/chatbot/male0190.png
     ./images/chatbot/male0191.png
     ./images/chatbot/male0192.png
     ./images/chatbot/male0193.png
     ./images/chatbot/male0194.png
     ./images/chatbot/male0195.png
     ./images/chatbot/male0196.png
     ./images/chatbot/male0197.png
     ./images/chatbot/male0198.png
     ./images/chatbot/male0199.png
     ./images/chatbot/male0200.png
     ./images/chatbot/male0201.png
     ./images/chatbot/male0202.png
     ./images/chatbot/male0203.png
     ./images/chatbot/male0204.png
     ./images/chatbot/male0205.png
     ./images/chatbot/male0206.png
     ./images/chatbot/male0207.png
     ./images/chatbot/male0208.png
     ./images/chatbot/male0209.png
     ./images/chatbot/male0210.png
     ./images/chatbot/male0211.png
     ./images/chatbot/male0212.png
     ./images/chatbot/male0213.png
     ./images/chatbot/male0214.png
     ./images/chatbot/male0215.png
     ./images/chatbot/male0216.png
     ./images/chatbot/male0217.png
     ./images/chatbot/male0218.png
     ./images/chatbot/male0219.png
     ./images/chatbot/male0220.png
     ./images/chatbot/male0221.png
     ./images/chatbot/male0222.png
     ./images/chatbot/male0223.png
     ./images/chatbot/male0224.png
     ./images/chatbot/male0225.png
     ./images/chatbot/male0226.png
     ./images/chatbot/male0227.png
     ./images/chatbot/male0228.png
     ./images/chatbot/male0229.png
     ./images/chatbot/male0230.png
     ./images/chatbot/male0231.png
     ./images/chatbot/male0232.png
     ./images/chatbot/male0233.png
     ./images/chatbot/male0234.png
     ./images/chatbot/male0235.png
     ./images/chatbot/male0236.png
     ./images/chatbot/male0237.png
     ./images/chatbot/male0238.png
     ./images/chatbot/male0239.png
     ./images/chatbot/male0240.png
     ./images/chatbot/male0241.png
     ./images/chatbot/male0242.png
     ./images/chatbot/male0243.png
     ./images/chatbot/male0244.png
     ./images/chatbot/male0245.png
     ./images/chatbot/male0246.png
     ./images/chatbot/male0247.png
     ./images/chatbot/male0248.png
     ./images/chatbot/male0249.png
     ./images/chatbot/male0250.png
     ./images/chatbot/male0251.png
     ./images/chatbot/male0252.png
     ./images/chatbot/male0253.png
     ./images/chatbot/male0254.png
     ./images/chatbot/male0255.png
     ./images/chatbot/male0256.png
     ./images/chatbot/male0257.png
     ./images/chatbot/male0258.png
     ./images/chatbot/male0259.png
     ./images/chatbot/male0260.png
     ./images/chatbot/male0261.png
     ./images/chatbot/male0262.png
     ./images/chatbot/male0263.png
     ./images/chatbot/male0264.png
     ./images/chatbot/male0265.png
     ./images/chatbot/male0266.png
     ./images/chatbot/male0267.png
     ./images/chatbot/male0268.png
     ./images/chatbot/male0269.png
     ./images/chatbot/male0270.png
     ./images/chatbot/male0271.png
     ./images/chatbot/male0272.png
     ./images/chatbot/male0273.png
     ./images/chatbot/male0274.png
     ./images/chatbot/male0275.png
     ./images/chatbot/male0276.png
     ./images/chatbot/male0277.png
     ./images/chatbot/male0278.png
     ./images/chatbot/male0279.png
     ./images/chatbot/male0280.png
     ./images/chatbot/male0281.png
     ./images/chatbot/male0282.png
     ./images/chatbot/male0283.png
     ./images/chatbot/male0284.png
     ./images/chatbot/male0285.png
     ./images/chatbot/male0286.png
     ./images/chatbot/male0287.png
     ./images/chatbot/male0288.png
     ./images/chatbot/male0289.png
     ./images/chatbot/male0290.png
     ./images/chatbot/male0291.png
     ./images/chatbot/male0292.png
     ./images/chatbot/male0293.png
     ./images/chatbot/male0294.png
     ./images/chatbot/male0295.png
     ./images/chatbot/male0296.png
     ./images/chatbot/male0297.png
     ./images/chatbot/male0298.png
     ./images/chatbot/male0299.png
     ./images/chatbot/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})