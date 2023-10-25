const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20HC0XAev = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintF101a0i = BigInt("719")
		const uintZ8QnyQ0 = BigInt("375")
		const uintB727d5Y = BigInt("1040")
		const uinto8obrpm = BigInt("1159")
		const uint7d4xyM = BigInt("32")
		const addressYO6rVNS = accounts[0]
//		const uint256m1eaY4P = await UNIWHALE_ERC20HC0XAev.startSale.call(uint7d4xyM, uinto8obrpm, uintB727d5Y, uintZ8QnyQ0, uintF101a0i, {from: accounts[1]});
//		const boolYDgYC56 = await UNIWHALE_ERC20HC0XAev.getAirdrop.call(addressYO6rVNS, {from: accounts[5]});
//		const uint256UcoalXM = await UNIWHALE_ERC20HC0XAev.viewAirdrop.call({from: accounts[4]});

		await expect(UNIWHALE_ERC20HC0XAev.startSale.call(uint7d4xyM, uinto8obrpm, uintB727d5Y, uintZ8QnyQ0, uintF101a0i, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20WqpbWvG = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintzHDV9Dj = BigInt("666")
		const uintFLpVLF8 = BigInt("1918")
		const uintA966yYF = BigInt("1498")
		const uintpUjm86 = BigInt("1208")
		const uintEYz3GU = BigInt("49")
		const uintyaEZZg2 = BigInt("1650")
		const uintqTD56j = BigInt("1284")
		const uintL4IaMB4 = BigInt("772")
		const uinty6KdGSt = BigInt("1571")
		const uintN24Jy8 = BigInt("658")
		const uintyRa8PlU = BigInt("1460")
		const uintb3mx1Y5 = BigInt("30")
		const uintiHJ6lT8 = BigInt("1907")
		const uintD588Pur = BigInt("1363")
		const uint256JNm4flp = await UNIWHALE_ERC20WqpbWvG.viewSale.call({from: accounts[4]});
		const uint256LTiU3Ur = await UNIWHALE_ERC20WqpbWvG.viewAirdrop.call({from: accounts[3]});
		const uint256EZgJxYK = await UNIWHALE_ERC20WqpbWvG.startAirdrop.call(uintpUjm86, uintA966yYF, uintFLpVLF8, uintzHDV9Dj, {from: accounts[2]});
		const uint256FQvrMSH = await UNIWHALE_ERC20WqpbWvG.startSale.call(uinty6KdGSt, uintL4IaMB4, uintqTD56j, uintyaEZZg2, uintEYz3GU, {from: accounts[2]});
		const uint25698LZV7 = await UNIWHALE_ERC20WqpbWvG.viewAirdrop.call({from: accounts[1]});
//		const uint256MHSBavA = await UNIWHALE_ERC20WqpbWvG.startSale.call(uintD588Pur, uintiHJ6lT8, uintb3mx1Y5, uintyRa8PlU, uintN24Jy8, {from: accounts[1]});

		await expect(UNIWHALE_ERC20WqpbWvG.startSale.call(uintD588Pur, uintiHJ6lT8, uintb3mx1Y5, uintyRa8PlU, uintN24Jy8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20oVQAnv5 = await UNIWHALE_ERC20.new({from: accounts[3]});
		const addressluLVUfR = accounts[3]
		const uintWZftY3f = BigInt("1925")
		const uintwZtggLx = BigInt("1737")
		const uintmuyTiy8 = BigInt("1157")
		const uintTbokhHv = BigInt("326")
		const uint256SRCflmb = await UNIWHALE_ERC20oVQAnv5.viewSale.call({from: accounts[5]});
//		const boolGwErcaW = await UNIWHALE_ERC20oVQAnv5.getAirdrop.call(addressluLVUfR, {from: accounts[3]});
//		const uint256Fwbk2M0 = await UNIWHALE_ERC20oVQAnv5.startAirdrop.call(uintTbokhHv, uintmuyTiy8, uintwZtggLx, uintWZftY3f, {from: accounts[3]});
//		await UNIWHALE_ERC20oVQAnv5.clearETH.call({from: accounts[3]});
//		await UNIWHALE_ERC20oVQAnv5.clearETH.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20oVQAnv5.getAirdrop.call(addressluLVUfR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20vOkQSh8 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressRMPSrNU = accounts[4]
		const uintFwLJEpV = BigInt("1578")
		const uintdeQejj0 = BigInt("1377")
		const uintz5LK3As = BigInt("1093")
		const uintnbDq374 = BigInt("953")
		const uintNp33xnG = BigInt("1625")
		const uintH1ad7OB = BigInt("1152")
		const uintZSMffzx = BigInt("823")
		const uintXtzepqU = BigInt("1372")
		const uintd2RSsoK = BigInt("292")
		const uint256kZX2Ibg = await UNIWHALE_ERC20vOkQSh8.viewAirdrop.call({from: accounts[1]});
//		const boolD44VKHR = await UNIWHALE_ERC20vOkQSh8.tokenSale.call(addressRMPSrNU, {from: accounts[2]});
//		const uint256cSeJ8zl = await UNIWHALE_ERC20vOkQSh8.startSale.call(uintNp33xnG, uintnbDq374, uintz5LK3As, uintdeQejj0, uintFwLJEpV, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256icX1oI6 = await UNIWHALE_ERC20vOkQSh8.startAirdrop.call(uintd2RSsoK, uintXtzepqU, uintZSMffzx, uintH1ad7OB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20vOkQSh8.tokenSale.call(addressRMPSrNU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20zJCR33 = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdAcSvRb = BigInt("472")
		const uintZibpW2F = BigInt("1995")
		const uintwmNVoPb = BigInt("1523")
		const uintYVONLcX = BigInt("1668")
		const uintle5QIXQ = BigInt("334")
		const addressuItwdrI = accounts[2]
		const uinto99Foc = BigInt("534")
		const uintdsCV4sP = BigInt("455")
		const uintz6YjttU = BigInt("1354")
		const uintjrXUsYA = BigInt("1618")
		const uint256gQHeM0T = await UNIWHALE_ERC20zJCR33.startSale.call(uintle5QIXQ, uintYVONLcX, uintwmNVoPb, uintZibpW2F, uintdAcSvRb, {from: accounts[1]});
		const boolDJJoRIy = await UNIWHALE_ERC20zJCR33.tokenSale.call(addressuItwdrI, {from: accounts[3]});
		const uint256Igt3i6g = await UNIWHALE_ERC20zJCR33.startAirdrop.call(uintjrXUsYA, uintz6YjttU, uintdsCV4sP, uinto99Foc, {from: accounts[4]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20vOkQSh8 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressccucS2K = accounts[3]
		const uintLM8Y2nb = BigInt("1152")
		const uintwopxDQ = BigInt("844")
		const uintosBdPfY = BigInt("1245")
		const uintqAavRct = BigInt("292")
//		await UNIWHALE_ERC20vOkQSh8.clearETH.call({from: accounts[4]});
//		const boolRhwFzzb = await UNIWHALE_ERC20vOkQSh8.tokenSale.call(addressccucS2K, {from: accounts[1]});
//		const uint256icX1oI6 = await UNIWHALE_ERC20vOkQSh8.startAirdrop.call(uintqAavRct, uintosBdPfY, uintwopxDQ, uintLM8Y2nb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20vOkQSh8.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})