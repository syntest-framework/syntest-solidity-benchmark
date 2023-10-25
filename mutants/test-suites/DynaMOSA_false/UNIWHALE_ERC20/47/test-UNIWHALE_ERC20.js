const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20NhV69mP = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintxsWWCXE = BigInt("1417")
		const uintdS5d7b4 = BigInt("1787")
		const uintbjKQ84Q = BigInt("1730")
		const uintxVCzZzy = BigInt("1350")
		const uint256lFvbTZ = await UNIWHALE_ERC20NhV69mP.viewAirdrop.call({from: accounts[1]});
		const uint256AbEB2Qa = await UNIWHALE_ERC20NhV69mP.startAirdrop.call(uintxVCzZzy, uintbjKQ84Q, uintdS5d7b4, uintxsWWCXE, {from: accounts[4]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20TCQOnB = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintVuiMvH = BigInt("1460")
		const uintHAjIpaV = BigInt("1359")
		const uintm3vkquR = BigInt("1444")
		const uintA8pBYmA = BigInt("1410")
		const uinto6HLTxx = BigInt("769")
//		await UNIWHALE_ERC20TCQOnB.clearETH.call({from: accounts[3]});
//		const uint256mec7h0U = await UNIWHALE_ERC20TCQOnB.startSale.call(uinto6HLTxx, uintA8pBYmA, uintm3vkquR, uintHAjIpaV, uintVuiMvH, {from: accounts[0]});
//		await UNIWHALE_ERC20TCQOnB.clearETH.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256JRnrqW9 = await UNIWHALE_ERC20TCQOnB.viewSale.call({from: accounts[2]});

		await expect(UNIWHALE_ERC20TCQOnB.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20vXbFtHM = await UNIWHALE_ERC20.new({from: accounts[2]});
		const addressgTfnh94 = accounts[0]
		const addresse6jlKEw = accounts[5]
		const uint256LY0stgT = await UNIWHALE_ERC20vXbFtHM.viewAirdrop.call({from: accounts[3]});
//		const boolil2ndub = await UNIWHALE_ERC20vXbFtHM.tokenSale.call(addressgTfnh94, {from: "0x0000000000000000000000000000000000000001"});
//		const booltPgfjjE = await UNIWHALE_ERC20vXbFtHM.getAirdrop.call(addresse6jlKEw, {from: accounts[0]});

		await expect(UNIWHALE_ERC20vXbFtHM.tokenSale.call(addressgTfnh94, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20AaRMhYD = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintaHwI5eH = BigInt("178")
		const uintci3h5Jf = BigInt("1227")
		const uintOtn00bU = BigInt("828")
		const uintJZkEsJe = BigInt("1988")
		const uintowytD4d = BigInt("1387")
		const uintT3X1eMS = BigInt("1492")
		const uintWuKR58n = BigInt("171")
		const uintWOT16wi = BigInt("1712")
		const uintohmANcn = BigInt("1221")
		const uint256sVtMdcr = await UNIWHALE_ERC20AaRMhYD.viewSale.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256xIDUDdQ = await UNIWHALE_ERC20AaRMhYD.startAirdrop.call(uintJZkEsJe, uintOtn00bU, uintci3h5Jf, uintaHwI5eH, {from: accounts[4]});
//		const uint256Gf0OdUd = await UNIWHALE_ERC20AaRMhYD.viewSale.call({from: accounts[2]});
//		const uint256t38lXlA = await UNIWHALE_ERC20AaRMhYD.startSale.call(uintohmANcn, uintWOT16wi, uintWuKR58n, uintT3X1eMS, uintowytD4d, {from: accounts[0]});

		await expect(UNIWHALE_ERC20AaRMhYD.startAirdrop.call(uintJZkEsJe, uintOtn00bU, uintci3h5Jf, uintaHwI5eH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20vXbFtHM = await UNIWHALE_ERC20.new({from: accounts[2]});
		const addressQlpt9rJ = accounts[5]
		const addresszTSuAyq = accounts[0]
		const uint256LY0stgT = await UNIWHALE_ERC20vXbFtHM.viewAirdrop.call({from: accounts[3]});
//		const booltPgfjjE = await UNIWHALE_ERC20vXbFtHM.getAirdrop.call(addressQlpt9rJ, {from: accounts[0]});
//		const uint25661LvZ1 = await UNIWHALE_ERC20vXbFtHM.viewSale.call({from: accounts[3]});
//		const boolmv1gL8S = await UNIWHALE_ERC20vXbFtHM.tokenSale.call(addresszTSuAyq, {from: accounts[4]});

		await expect(UNIWHALE_ERC20vXbFtHM.getAirdrop.call(addressQlpt9rJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20vXbFtHM = await UNIWHALE_ERC20.new({from: accounts[2]});
		const addressArO9R8v = accounts[3]
		const address8jTMan = accounts[5]
		const uintUW0yl6L = BigInt("1574")
		const uintABMPgLX = BigInt("1788")
		const uintzDu9QDi = BigInt("1192")
		const uintaNRzh8 = BigInt("1177")
		const addressBUSOnS1 = accounts[0]
		const uint256LY0stgT = await UNIWHALE_ERC20vXbFtHM.viewAirdrop.call({from: accounts[3]});
//		await UNIWHALE_ERC20vXbFtHM.clearETH.call({from: accounts[2]});
//		const uint256YXrZojx = await UNIWHALE_ERC20vXbFtHM.viewSale.call({from: accounts[1]});
//		const boolDnlEFUT = await UNIWHALE_ERC20vXbFtHM.tokenSale.call(addressArO9R8v, {from: accounts[3]});
//		const booltPgfjjE = await UNIWHALE_ERC20vXbFtHM.getAirdrop.call(address8jTMan, {from: accounts[0]});
//		const uint25661LvZ1 = await UNIWHALE_ERC20vXbFtHM.viewSale.call({from: accounts[3]});
//		const uint256SORRn48 = await UNIWHALE_ERC20vXbFtHM.startAirdrop.call(uintaNRzh8, uintzDu9QDi, uintABMPgLX, uintUW0yl6L, {from: accounts[4]});
//		const boolmv1gL8S = await UNIWHALE_ERC20vXbFtHM.tokenSale.call(addressBUSOnS1, {from: accounts[4]});

		await expect(UNIWHALE_ERC20vXbFtHM.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20NhV69mP = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintCuaaYPp = BigInt("1417")
		const uintGTXyTOQ = BigInt("96")
		const uintr8EBmSp = BigInt("1730")
		const uintOc2q0Br = BigInt("1379")
		const uintf4GDtaf = BigInt("515")
		const uint9X1EB3 = BigInt("1992")
		const uintVrFiEmt = BigInt("1401")
		const uintbBHTZKc = BigInt("1611")
		const uintLUn37j = BigInt("606")
		const addressOcvnvaS = accounts[2]
		const uint256AbEB2Qa = await UNIWHALE_ERC20NhV69mP.startAirdrop.call(uintOc2q0Br, uintr8EBmSp, uintGTXyTOQ, uintCuaaYPp, {from: accounts[4]});
		const uint256mHfQlxW = await UNIWHALE_ERC20NhV69mP.startSale.call(uintLUn37j, uintbBHTZKc, uintVrFiEmt, uint9X1EB3, uintf4GDtaf, {from: accounts[4]});
//		const boolJ7HmRX = await UNIWHALE_ERC20NhV69mP.tokenSale.call(addressOcvnvaS, {from: accounts[3]});

		await expect(UNIWHALE_ERC20NhV69mP.tokenSale.call(addressOcvnvaS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20tx5Zb5z = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressAbhOT2 = accounts[4]
		const uint256JwJTI9g = await UNIWHALE_ERC20tx5Zb5z.viewAirdrop.call({from: accounts[5]});
		const boolrUOrqgO = await UNIWHALE_ERC20tx5Zb5z.tokenSale.call(addressAbhOT2, {from: accounts[2]});
		await UNIWHALE_ERC20tx5Zb5z.clearETH.call({from: accounts[2]});
	});
})