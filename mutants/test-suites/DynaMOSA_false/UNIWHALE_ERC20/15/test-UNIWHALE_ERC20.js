const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20ZSxMsfV = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintJmYSatn = BigInt("109")
		const uintFnLzfU = BigInt("498")
		const uint6s5iKG = BigInt("461")
		const uintbjEwIBx = BigInt("1795")
		const uintmOCu2AW = BigInt("303")
		const uint256W0EDW5p = await UNIWHALE_ERC20ZSxMsfV.viewAirdrop.call({from: accounts[3]});
//		await UNIWHALE_ERC20ZSxMsfV.clearETH.call({from: accounts[3]});
//		const uint256tbvq48L = await UNIWHALE_ERC20ZSxMsfV.startSale.call(uintmOCu2AW, uintbjEwIBx, uint6s5iKG, uintFnLzfU, uintJmYSatn, {from: accounts[0]});

		await expect(UNIWHALE_ERC20ZSxMsfV.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20EcNyXu9 = await UNIWHALE_ERC20.new({from: accounts[2]});
		const address28DPI3 = accounts[1]
		const uintNmkswt = BigInt("475")
		const uintizzFivL = BigInt("837")
		const uintsJEv0Ww = BigInt("136")
		const uintimEMzJU = BigInt("1504")
		const uintEMSrKbU = BigInt("1516")
		const uint256aizEVWR = await UNIWHALE_ERC20EcNyXu9.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolqwudJ7 = await UNIWHALE_ERC20EcNyXu9.getAirdrop.call(address28DPI3, {from: accounts[3]});
//		await UNIWHALE_ERC20EcNyXu9.clearETH.call({from: accounts[5]});
//		const uint256WMb4q5 = await UNIWHALE_ERC20EcNyXu9.startSale.call(uintEMSrKbU, uintimEMzJU, uintsJEv0Ww, uintizzFivL, uintNmkswt, {from: accounts[1]});

		await expect(UNIWHALE_ERC20EcNyXu9.getAirdrop.call(address28DPI3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC2086fBNF = await UNIWHALE_ERC20.new({from: accounts[5]});
		const addressxXetGZY = accounts[1]
		const uintMg6Lei = BigInt("1787")
		const uintYUgCynH = BigInt("1208")
		const uintlq3ov0Q = BigInt("1019")
		const uintKv19nUo = BigInt("547")
		const uinttuD2QI = BigInt("1998")
//		const boolNakOJ86 = await UNIWHALE_ERC2086fBNF.tokenSale.call(addressxXetGZY, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256sBh3Lvn = await UNIWHALE_ERC2086fBNF.startSale.call(uinttuD2QI, uintKv19nUo, uintlq3ov0Q, uintYUgCynH, uintMg6Lei, {from: accounts[5]});

		await expect(UNIWHALE_ERC2086fBNF.tokenSale.call(addressxXetGZY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20Ll2pYCr = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintO1GW8d = BigInt("2024")
		const uintJF24JVu = BigInt("1684")
		const uintLpNwfru = BigInt("1588")
		const uintby8u3E = BigInt("1494")
		const addressXbmZud = accounts[5]
		const uint256FgL8GnD = await UNIWHALE_ERC20Ll2pYCr.startAirdrop.call(uintby8u3E, uintLpNwfru, uintJF24JVu, uintO1GW8d, {from: accounts[2]});
		const uint256WHdIV0 = await UNIWHALE_ERC20Ll2pYCr.viewSale.call({from: accounts[4]});
//		const boolIqa7AnO = await UNIWHALE_ERC20Ll2pYCr.tokenSale.call(addressXbmZud, {from: accounts[4]});

		await expect(UNIWHALE_ERC20Ll2pYCr.tokenSale.call(addressXbmZud, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC2086fBNF = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uintuzUKgTc = BigInt("1787")
		const uintMx00mE3 = BigInt("1208")
		const uintmTv6iyQ = BigInt("1019")
		const uintzeVkx4L = BigInt("547")
		const uintCtKmVOP = BigInt("1998")
		const uint256sBh3Lvn = await UNIWHALE_ERC2086fBNF.startSale.call(uintCtKmVOP, uintzeVkx4L, uintmTv6iyQ, uintMx00mE3, uintuzUKgTc, {from: accounts[5]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20Ll2pYCr = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintzsDzyF = BigInt("2024")
		const uintZYup6yh = BigInt("1684")
		const uintbDZYcYc = BigInt("1611")
		const uintFscK2OI = BigInt("1494")
		const addresslXivxDr = accounts[5]
		const uint256FgL8GnD = await UNIWHALE_ERC20Ll2pYCr.startAirdrop.call(uintFscK2OI, uintbDZYcYc, uintZYup6yh, uintzsDzyF, {from: accounts[2]});
//		await UNIWHALE_ERC20Ll2pYCr.clearETH.call({from: accounts[2]});
//		const uint256WHdIV0 = await UNIWHALE_ERC20Ll2pYCr.viewSale.call({from: accounts[4]});
		await UNIWHALE_ERC20Ll2pYCr.clearETH.call({from: accounts[2]});
//		const boolIqa7AnO = await UNIWHALE_ERC20Ll2pYCr.tokenSale.call(addresslXivxDr, {from: accounts[4]});

		await expect(UNIWHALE_ERC20Ll2pYCr.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20NaNTlV = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBSGg47h = BigInt("1917")
		const uinthwEJi86 = BigInt("51")
		const uintpUNevEd = BigInt("1779")
		const uintanON22O = BigInt("1279")
		const addressS9wrshK = "0x0000000000000000000000000000000000000001"
		const uint256uXIEjiJ = await UNIWHALE_ERC20NaNTlV.startAirdrop.call(uintanON22O, uintpUNevEd, uinthwEJi86, uintBSGg47h, {from: accounts[3]});
		const boolIVjM4fn = await UNIWHALE_ERC20NaNTlV.getAirdrop.call(addressS9wrshK, {from: accounts[4]});
		const uint256dwp0Xnh = await UNIWHALE_ERC20NaNTlV.viewSale.call({from: accounts[5]});
		const uint256f1XU0iY = await UNIWHALE_ERC20NaNTlV.viewSale.call({from: accounts[5]});
	});
})