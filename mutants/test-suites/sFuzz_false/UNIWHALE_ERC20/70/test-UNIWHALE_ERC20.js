const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20BzRfJhz = await UNIWHALE_ERC20.new({from: accounts[4]});
//		await UNIWHALE_ERC20BzRfJhz.clearETH.call({from: accounts[2]});
//		const uint256ALM2tm = await UNIWHALE_ERC20BzRfJhz.viewSale.call({from: accounts[2]});
//		const uint256E8NOMiU = await UNIWHALE_ERC20BzRfJhz.viewAirdrop.call({from: accounts[4]});

		await expect(UNIWHALE_ERC20BzRfJhz.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20HPoBEmA = await UNIWHALE_ERC20.new({from: accounts[2]});
		const addressTJyllhT = accounts[5]
		const uintfFPrbAG = BigInt("945")
		const uintBWoc0wN = BigInt("616")
		const uintuPzifo4 = BigInt("1549")
		const uintVprCY5n = BigInt("723")
		const uintyjHD88r = BigInt("626")
		const uintrhdGSG = BigInt("1711")
		const uintiwWDbPB = BigInt("1092")
		const uintdi3kIRr = BigInt("1142")
		const uint256OFcsms = await UNIWHALE_ERC20HPoBEmA.viewSale.call({from: accounts[3]});
		const uint256ge8Pr3l = await UNIWHALE_ERC20HPoBEmA.viewSale.call({from: accounts[5]});
//		const booljRZPo6M = await UNIWHALE_ERC20HPoBEmA.tokenSale.call(addressTJyllhT, {from: accounts[2]});
//		const uint256CDZJZNG = await UNIWHALE_ERC20HPoBEmA.startAirdrop.call(uintVprCY5n, uintuPzifo4, uintBWoc0wN, uintfFPrbAG, {from: accounts[0]});
//		const uint256bbVz20 = await UNIWHALE_ERC20HPoBEmA.viewAirdrop.call({from: accounts[1]});
//		const uint256rGZvCzv = await UNIWHALE_ERC20HPoBEmA.startAirdrop.call(uintdi3kIRr, uintiwWDbPB, uintrhdGSG, uintyjHD88r, {from: accounts[1]});

		await expect(UNIWHALE_ERC20HPoBEmA.tokenSale.call(addressTJyllhT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20QhJxgkM = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressT8IPB4 = accounts[3]
		const uintz4CvHzy = BigInt("1413")
		const uintjOP8ex7 = BigInt("1733")
		const uintN2ZXlLD = BigInt("1308")
		const uintNXoVXdc = BigInt("1714")
//		const boolSQGT65I = await UNIWHALE_ERC20QhJxgkM.getAirdrop.call(addressT8IPB4, {from: accounts[3]});
//		const uint256o0jy4f = await UNIWHALE_ERC20QhJxgkM.viewAirdrop.call({from: accounts[0]});
//		const uint256kzn7Uba = await UNIWHALE_ERC20QhJxgkM.startAirdrop.call(uintNXoVXdc, uintN2ZXlLD, uintjOP8ex7, uintz4CvHzy, {from: accounts[1]});
//		await UNIWHALE_ERC20QhJxgkM.clearETH.call({from: accounts[2]});

		await expect(UNIWHALE_ERC20QhJxgkM.getAirdrop.call(addressT8IPB4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20eyRya5j = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintqqhr8f6 = BigInt("13")
		const uintND12B2y = BigInt("788")
		const uintth6UNDQ = BigInt("300")
		const uintZlWW6vl = BigInt("399")
		const uintIHwA89o = BigInt("1920")
		const uintFjOgFir = BigInt("1916")
		const uintAyO1bem = BigInt("955")
		const uintlmzgagw = BigInt("548")
		const uint256n0sOQMZ = await UNIWHALE_ERC20eyRya5j.startAirdrop.call(uintZlWW6vl, uintth6UNDQ, uintND12B2y, uintqqhr8f6, {from: accounts[4]});
//		await UNIWHALE_ERC20eyRya5j.clearETH.call({from: accounts[0]});
//		await UNIWHALE_ERC20eyRya5j.clearETH.call({from: accounts[2]});
//		const uint256QMt6ayu = await UNIWHALE_ERC20eyRya5j.startAirdrop.call(uintlmzgagw, uintAyO1bem, uintFjOgFir, uintIHwA89o, {from: accounts[5]});

		await expect(UNIWHALE_ERC20eyRya5j.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20eyRya5j = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintl4vh62M = BigInt("94")
		const uintuIJdPdW = BigInt("5")
		const uintnBMR8T4 = BigInt("102")
		const uintndVRiKd = BigInt("256")
		const uintUlCepaD = BigInt("871")
		const uint256TuOHsJQ = await UNIWHALE_ERC20eyRya5j.viewAirdrop.call({from: accounts[4]});
//		await UNIWHALE_ERC20eyRya5j.clearETH.call({from: accounts[0]});
//		const uint256qXZYW3l = await UNIWHALE_ERC20eyRya5j.viewSale.call({from: accounts[2]});
//		const uint256g0rBlV6 = await UNIWHALE_ERC20eyRya5j.startSale.call(uintUlCepaD, uintndVRiKd, uintnBMR8T4, uintuIJdPdW, uintl4vh62M, {from: accounts[4]});

		await expect(UNIWHALE_ERC20eyRya5j.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20eyRya5j = await UNIWHALE_ERC20.new({from: accounts[4]});
//		await UNIWHALE_ERC20eyRya5j.clearETH.call({from: accounts[4]});
//		const uint256kO7qwjg = await UNIWHALE_ERC20eyRya5j.viewAirdrop.call({from: accounts[4]});
//		await UNIWHALE_ERC20eyRya5j.clearETH.call({from: accounts[0]});

		await expect(UNIWHALE_ERC20eyRya5j.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20tXmBkzh = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressIK2rzWl = accounts[1]
		const uintQl37Aoy = BigInt("1852")
		const uintg5ZWB2 = BigInt("1621")
		const uintOERlFWY = BigInt("1973")
		const uintONW9uNt = BigInt("917")
		const uintwKnpk6 = BigInt("762")
		const uint256ktGahQN = await UNIWHALE_ERC20tXmBkzh.viewAirdrop.call({from: accounts[3]});
		const booloXf4zY = await UNIWHALE_ERC20tXmBkzh.tokenSale.call(addressIK2rzWl, {from: accounts[1]});
		const uint256LqFvfBe = await UNIWHALE_ERC20tXmBkzh.startSale.call(uintwKnpk6, uintONW9uNt, uintOERlFWY, uintg5ZWB2, uintQl37Aoy, {from: accounts[4]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20eyRya5j = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintpuNoGlJ = BigInt("455")
		const uintWqbujtV = BigInt("1828")
		const uinttZhiaY = BigInt("950")
		const uint5l3Ghx = BigInt("2044")
		const uintlnpXzDg = BigInt("1586")
		const uintlQ1Aw8z = BigInt("1782")
		const uintI8xVHFV = BigInt("326")
		const uintYG32Ymh = BigInt("1169")
		const uintDSaGaR3 = BigInt("278")
		const uintebuYzc2 = BigInt("605")
		const uint256TksumIW = await UNIWHALE_ERC20eyRya5j.startSale.call(uintlnpXzDg, uint5l3Ghx, uinttZhiaY, uintWqbujtV, uintpuNoGlJ, {from: accounts[4]});
//		await UNIWHALE_ERC20eyRya5j.clearETH.call({from: accounts[0]});
//		const uint256rOWydv = await UNIWHALE_ERC20eyRya5j.startSale.call(uintebuYzc2, uintDSaGaR3, uintYG32Ymh, uintI8xVHFV, uintlQ1Aw8z, {from: accounts[3]});
//		const uint256O3f1hC = await UNIWHALE_ERC20eyRya5j.viewAirdrop.call({from: accounts[5]});

		await expect(UNIWHALE_ERC20eyRya5j.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})