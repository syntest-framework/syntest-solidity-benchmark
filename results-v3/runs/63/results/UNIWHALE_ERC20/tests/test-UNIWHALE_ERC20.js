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
		const uint256m1eaY4P = await UNIWHALE_ERC20HC0XAev.startSale.call(uint7d4xyM, uinto8obrpm, uintB727d5Y, uintZ8QnyQ0, uintF101a0i, {from: accounts[1]});
		const boolYDgYC56 = await UNIWHALE_ERC20HC0XAev.getAirdrop.call(addressYO6rVNS, {from: accounts[5]});
		const uint256UcoalXM = await UNIWHALE_ERC20HC0XAev.viewAirdrop.call({from: accounts[4]});

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
		const uint256MHSBavA = await UNIWHALE_ERC20WqpbWvG.startSale.call(uintD588Pur, uintiHJ6lT8, uintb3mx1Y5, uintyRa8PlU, uintN24Jy8, {from: accounts[1]});

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
		const boolGwErcaW = await UNIWHALE_ERC20oVQAnv5.getAirdrop.call(addressluLVUfR, {from: accounts[3]});
		const uint256Fwbk2M0 = await UNIWHALE_ERC20oVQAnv5.startAirdrop.call(uintTbokhHv, uintmuyTiy8, uintwZtggLx, uintWZftY3f, {from: accounts[3]});
		await UNIWHALE_ERC20oVQAnv5.clearETH.call({from: accounts[3]});
		await UNIWHALE_ERC20oVQAnv5.clearETH.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20oVQAnv5.getAirdrop.call(addressluLVUfR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20efVJWby = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintLmK1KGO = BigInt("711")
		const uintpY35YKC = BigInt("278")
		const uintnyqLlfz = BigInt("740")
		const uintpn5U4uW = BigInt("1537")
		const uintWcZl91a = BigInt("263")
		const addressXJcrdKC = accounts[0]
		const addressQ7tEMl2 = accounts[3]
		const addressxbA3IFd = accounts[3]
		const uint256B51lZp3 = await UNIWHALE_ERC20efVJWby.startSale.call(uintWcZl91a, uintpn5U4uW, uintnyqLlfz, uintpY35YKC, uintLmK1KGO, {from: accounts[4]});
		const boolQo0vqij = await UNIWHALE_ERC20efVJWby.tokenSale.call(addressXJcrdKC, {from: accounts[1]});
		const boolWohnuz = await UNIWHALE_ERC20efVJWby.getAirdrop.call(addressQ7tEMl2, {from: accounts[3]});
		const boolBM0aO9W = await UNIWHALE_ERC20efVJWby.tokenSale.call(addressxbA3IFd, {from: accounts[3]});
		const uint256M22GqUy = await UNIWHALE_ERC20efVJWby.viewAirdrop.call({from: accounts[0]});

		await expect(UNIWHALE_ERC20efVJWby.tokenSale.call(addressXJcrdKC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20oVQAnv5 = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintwA4Ozws = BigInt("1925")
		const uintztT5cde = BigInt("1737")
		const uinthuo6o0A = BigInt("1157")
		const uintOznMmie = BigInt("326")
		const uint256SRCflmb = await UNIWHALE_ERC20oVQAnv5.viewSale.call({from: accounts[5]});
		const uint256Fwbk2M0 = await UNIWHALE_ERC20oVQAnv5.startAirdrop.call(uintOznMmie, uinthuo6o0A, uintztT5cde, uintwA4Ozws, {from: accounts[3]});
		await UNIWHALE_ERC20oVQAnv5.clearETH.call({from: accounts[3]});
		await UNIWHALE_ERC20oVQAnv5.clearETH.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20oVQAnv5.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20yytOfpF = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressouPVuZ = accounts[4]
		const uint256m3bFNqh = await UNIWHALE_ERC20yytOfpF.viewSale.call({from: accounts[4]});
		const boolq2jDHfS = await UNIWHALE_ERC20yytOfpF.getAirdrop.call(addressouPVuZ, {from: accounts[0]});
	});
})