const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20KQIgqjN = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintKSPSDYA = BigInt("1633")
		const uintV5crf7S = BigInt("677")
		const uintbY7E4Vl = BigInt("1016")
		const uintOpnSwcU = BigInt("44")
		const addressiCUaFt = accounts[0]
		const uint256mpRv10q = await UNIWHALE_ERC20KQIgqjN.viewSale.call({from: accounts[1]});
		const uint256OtrsiKw = await UNIWHALE_ERC20KQIgqjN.startAirdrop.call(uintOpnSwcU, uintbY7E4Vl, uintV5crf7S, uintKSPSDYA, {from: accounts[3]});
		const uint256ejmA6py = await UNIWHALE_ERC20KQIgqjN.viewAirdrop.call({from: accounts[1]});
		const uint256GAMs71 = await UNIWHALE_ERC20KQIgqjN.viewAirdrop.call({from: accounts[2]});
		const boolfuJGBxx = await UNIWHALE_ERC20KQIgqjN.getAirdrop.call(addressiCUaFt, {from: accounts[4]});

		await expect(UNIWHALE_ERC20KQIgqjN.startAirdrop.call(uintOpnSwcU, uintbY7E4Vl, uintV5crf7S, uintKSPSDYA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20Au59UTq = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addresscNNX0N = accounts[2]
		const uintH4jHbBy = BigInt("307")
		const uintp1YMqCe = BigInt("987")
		const uintEJbEuo = BigInt("425")
		const uintJG5cXoE = BigInt("1293")
		const boolUMfHIi1 = await UNIWHALE_ERC20Au59UTq.tokenSale.call(addresscNNX0N, {from: accounts[0]});
		const uint256HFNH6T = await UNIWHALE_ERC20Au59UTq.viewAirdrop.call({from: accounts[5]});
		const uint256PR5jKqv = await UNIWHALE_ERC20Au59UTq.startAirdrop.call(uintJG5cXoE, uintEJbEuo, uintp1YMqCe, uintH4jHbBy, {from: accounts[5]});

		await expect(UNIWHALE_ERC20Au59UTq.tokenSale.call(addresscNNX0N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20zVlgh4I = await UNIWHALE_ERC20.new({from: accounts[5]});
		const addressEfDWeLj = accounts[4]
		const addressnjoE0q = accounts[1]
		const uintmSoA2zB = BigInt("1094")
		const uintEP88Yf3 = BigInt("1488")
		const uintbOAKHiJ = BigInt("376")
		const uintf8tpAZq = BigInt("924")
		const boolugUDrq8 = await UNIWHALE_ERC20zVlgh4I.getAirdrop.call(addressEfDWeLj, {from: accounts[0]});
		const boolzMx528W = await UNIWHALE_ERC20zVlgh4I.tokenSale.call(addressnjoE0q, {from: accounts[2]});
		const uint256TBLYPGl = await UNIWHALE_ERC20zVlgh4I.startAirdrop.call(uintf8tpAZq, uintbOAKHiJ, uintEP88Yf3, uintmSoA2zB, {from: accounts[2]});

		await expect(UNIWHALE_ERC20zVlgh4I.getAirdrop.call(addressEfDWeLj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20NDuJAhe = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintUIhJ9NR = BigInt("164")
		const uintpLnwgS = BigInt("1502")
		const uintVsuD8fK = BigInt("1495")
		const uintmpMl3nd = BigInt("1532")
		const uintRt6dCuk = BigInt("1717")
		const uint256Rlh3UCx = await UNIWHALE_ERC20NDuJAhe.viewAirdrop.call({from: accounts[2]});
		const uint256W1NBd2 = await UNIWHALE_ERC20NDuJAhe.startSale.call(uintRt6dCuk, uintmpMl3nd, uintVsuD8fK, uintpLnwgS, uintUIhJ9NR, {from: accounts[4]});

		await expect(UNIWHALE_ERC20NDuJAhe.startSale.call(uintRt6dCuk, uintmpMl3nd, uintVsuD8fK, uintpLnwgS, uintUIhJ9NR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20BQXlNke = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintx66Tw4t = BigInt("1469")
		const uintTiwJN8 = BigInt("1514")
		const uintUwPFgcW = BigInt("8")
		const uintSThKh5O = BigInt("1329")
		const uintmb5WM1H = BigInt("1692")
		const uintTmp1sMY = BigInt("1195")
		const uintI64c2Am = BigInt("1945")
		const uintncbJBxi = BigInt("921")
		const uintEQE8eX = BigInt("206")
		const uint256VqH8J7o = await UNIWHALE_ERC20BQXlNke.viewAirdrop.call({from: accounts[3]});
		const uint2564gydfD = await UNIWHALE_ERC20BQXlNke.viewSale.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ZV7vgVS = await UNIWHALE_ERC20BQXlNke.startAirdrop.call(uintSThKh5O, uintUwPFgcW, uintTiwJN8, uintx66Tw4t, {from: accounts[5]});
		const uint256ktqwC80 = await UNIWHALE_ERC20BQXlNke.viewSale.call({from: accounts[2]});
		const uint256iogYEQn = await UNIWHALE_ERC20BQXlNke.startSale.call(uintEQE8eX, uintncbJBxi, uintI64c2Am, uintTmp1sMY, uintmb5WM1H, {from: accounts[1]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20XlgpVdS = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintbRIObF = BigInt("1234")
		const uintykKbRUD = BigInt("1811")
		const uintRJZD5h9 = BigInt("472")
		const uint0806Wu = BigInt("873")
		const uintOWdSQOL = BigInt("1435")
		const uintTNbrbRx = BigInt("1641")
		const uintq10uylL = BigInt("317")
		const uintvIDItVP = BigInt("1447")
		const uintJQVo87R = BigInt("788")
		const addressCif1JCu = accounts[2]
		const uint256PwHznlh = await UNIWHALE_ERC20XlgpVdS.startSale.call(uintOWdSQOL, uint0806Wu, uintRJZD5h9, uintykKbRUD, uintbRIObF, {from: accounts[2]});
		const uint256a6ZGhgJ = await UNIWHALE_ERC20XlgpVdS.startAirdrop.call(uintJQVo87R, uintvIDItVP, uintq10uylL, uintTNbrbRx, {from: accounts[1]});
		const uint256x9my37R = await UNIWHALE_ERC20XlgpVdS.viewAirdrop.call({from: accounts[1]});
		const booloZsuEIr = await UNIWHALE_ERC20XlgpVdS.getAirdrop.call(addressCif1JCu, {from: accounts[0]});

		await expect(UNIWHALE_ERC20XlgpVdS.startAirdrop.call(uintJQVo87R, uintvIDItVP, uintq10uylL, uintTNbrbRx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20NDuJAhe = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintqdHrZhG = BigInt("10")
		const uintLpq14J = BigInt("1267")
		const uintWAwxwuX = BigInt("1689")
		const uintmbldlr = BigInt("1891")
		const uintb0bALVz = BigInt("164")
		const uintYnpWcr = BigInt("1502")
		const uintORl2l3k = BigInt("1495")
		const uintJKpmPsw = BigInt("1532")
		const uintClUFhpO = BigInt("1717")
		const uint256Rlh3UCx = await UNIWHALE_ERC20NDuJAhe.viewAirdrop.call({from: accounts[2]});
		const uint256VjeHEa6 = await UNIWHALE_ERC20NDuJAhe.startAirdrop.call(uintmbldlr, uintWAwxwuX, uintLpq14J, uintqdHrZhG, {from: accounts[0]});
		const uint256W1NBd2 = await UNIWHALE_ERC20NDuJAhe.startSale.call(uintClUFhpO, uintJKpmPsw, uintORl2l3k, uintYnpWcr, uintb0bALVz, {from: accounts[4]});

		await expect(UNIWHALE_ERC20NDuJAhe.startSale.call(uintClUFhpO, uintJKpmPsw, uintORl2l3k, uintYnpWcr, uintb0bALVz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20NDuJAhe = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintgjt8HKf = BigInt("168")
		const uintCF7OR9T = BigInt("1502")
		const uintmtkOzaf = BigInt("1507")
		const uintuWs4RtW = BigInt("1532")
		const uintyJhqg44 = BigInt("1717")
		const addressgI1NMHV = accounts[1]
		await UNIWHALE_ERC20NDuJAhe.clearETH.call({from: accounts[0]});
		const uint256FFdsMA2 = await UNIWHALE_ERC20NDuJAhe.viewSale.call({from: accounts[2]});
		const uint256W1NBd2 = await UNIWHALE_ERC20NDuJAhe.startSale.call(uintyJhqg44, uintuWs4RtW, uintmtkOzaf, uintCF7OR9T, uintgjt8HKf, {from: accounts[4]});
		const boolJC1WwtF = await UNIWHALE_ERC20NDuJAhe.tokenSale.call(addressgI1NMHV, {from: accounts[4]});

		await expect(UNIWHALE_ERC20NDuJAhe.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})