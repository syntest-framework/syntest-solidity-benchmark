const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20af55zl5 = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintXzPrgUM = BigInt("1776")
		const uintO1oC1bq = BigInt("1294")
		const uintElphSxj = BigInt("1853")
		const uintTaYh8H = BigInt("1384")
		const uintLB0dG8 = BigInt("310")
		const uintDqLOhtm = BigInt("1459")
		const uintdAHvgvT = BigInt("1593")
		const uintX4fV0Mq = BigInt("2")
		const uintSG0YmAy = BigInt("957")
		const uintEBFId4D = BigInt("615")
		const uintjbx0N23 = BigInt("611")
		const uintNmPGAP6 = BigInt("1386")
		const uintQJB7UJR = BigInt("253")
		const uintAdBOWmC = BigInt("376")
		const uint256BY3Y2mT = await UNIWHALE_ERC20af55zl5.startSale.call(uintLB0dG8, uintTaYh8H, uintElphSxj, uintO1oC1bq, uintXzPrgUM, {from: accounts[4]});
		const uint256wxyv0YQ = await UNIWHALE_ERC20af55zl5.startAirdrop.call(uintSG0YmAy, uintX4fV0Mq, uintdAHvgvT, uintDqLOhtm, {from: accounts[3]});
		const uint256Yn44Yi3 = await UNIWHALE_ERC20af55zl5.startSale.call(uintAdBOWmC, uintQJB7UJR, uintNmPGAP6, uintjbx0N23, uintEBFId4D, {from: accounts[5]});
		const uint256vp73lT4 = await UNIWHALE_ERC20af55zl5.viewSale.call({from: accounts[0]});

		await expect(UNIWHALE_ERC20af55zl5.startSale.call(uintLB0dG8, uintTaYh8H, uintElphSxj, uintO1oC1bq, uintXzPrgUM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20R4tnvL2 = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uinticT1ua8 = BigInt("994")
		const uintMSKwCOs = BigInt("1699")
		const uintWMNvDsx = BigInt("1684")
		const uintoYmF20h = BigInt("1757")
		const uintpqjh4mR = BigInt("1161")
		const uintSVtBz07 = BigInt("1867")
		const uintCcUMU12 = BigInt("250")
		const uintvCGQCE9 = BigInt("123")
		const uintblTCZx3 = BigInt("128")
		const uintSQ9QiGc = BigInt("377")
		const uint256ETZN74V = await UNIWHALE_ERC20R4tnvL2.viewSale.call({from: accounts[2]});
		const uint256EcKj2UN = await UNIWHALE_ERC20R4tnvL2.startSale.call(uintpqjh4mR, uintoYmF20h, uintWMNvDsx, uintMSKwCOs, uinticT1ua8, {from: accounts[3]});
		const uint256IWvB2HJ = await UNIWHALE_ERC20R4tnvL2.startSale.call(uintSQ9QiGc, uintblTCZx3, uintvCGQCE9, uintCcUMU12, uintSVtBz07, {from: accounts[4]});

		await expect(UNIWHALE_ERC20R4tnvL2.startSale.call(uintpqjh4mR, uintoYmF20h, uintWMNvDsx, uintMSKwCOs, uinticT1ua8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20h51qUJJ = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressbu983gY = accounts[3]
		const uintTx8XUOC = BigInt("491")
		const uinti10THVD = BigInt("1532")
		const uintdjbDi2U = BigInt("1434")
		const uintcNFwgoV = BigInt("1365")
		const uint256ulULwK = await UNIWHALE_ERC20h51qUJJ.viewAirdrop.call({from: accounts[1]});
		const boolR3MHDaK = await UNIWHALE_ERC20h51qUJJ.tokenSale.call(addressbu983gY, {from: accounts[2]});
		const uint256gIoPhC = await UNIWHALE_ERC20h51qUJJ.viewAirdrop.call({from: accounts[3]});
		const uint256VR947QA = await UNIWHALE_ERC20h51qUJJ.startAirdrop.call(uintcNFwgoV, uintdjbDi2U, uinti10THVD, uintTx8XUOC, {from: accounts[4]});

		await expect(UNIWHALE_ERC20h51qUJJ.tokenSale.call(addressbu983gY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20u2rmMY5 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uinteEHlGgl = BigInt("585")
		const uintMYMLTr = BigInt("1248")
		const uint9KkcnH = BigInt("1624")
		const uintVG5hgN0 = BigInt("665")
		const uintgVxwAbI = BigInt("1660")
		const uintTIDZJ18 = BigInt("782")
		const uinttTDlpFC = BigInt("1712")
		const uintkrqGQNx = BigInt("648")
		const uintSJqMCNO = BigInt("1064")
		const uintsCjglXo = BigInt("1485")
		const uintW3i23ni = BigInt("248")
		const uintRPL4VJU = BigInt("1666")
		const uintIv78j4 = BigInt("1514")
		const uintC4IPzFc = BigInt("669")
		const uintN8UaHUF = BigInt("1446")
		const uint256MLSdcXM = await UNIWHALE_ERC20u2rmMY5.viewAirdrop.call({from: accounts[3]});
		const uint256sseGz0Q = await UNIWHALE_ERC20u2rmMY5.startSale.call(uintgVxwAbI, uintVG5hgN0, uint9KkcnH, uintMYMLTr, uinteEHlGgl, {from: accounts[4]});
		const uint256yeHoqnP = await UNIWHALE_ERC20u2rmMY5.startSale.call(uintsCjglXo, uintSJqMCNO, uintkrqGQNx, uinttTDlpFC, uintTIDZJ18, {from: accounts[2]});
		const uint256D6vjXjd = await UNIWHALE_ERC20u2rmMY5.startSale.call(uintN8UaHUF, uintC4IPzFc, uintIv78j4, uintRPL4VJU, uintW3i23ni, {from: accounts[4]});

		await expect(UNIWHALE_ERC20u2rmMY5.startSale.call(uintsCjglXo, uintSJqMCNO, uintkrqGQNx, uinttTDlpFC, uintTIDZJ18, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20VQYEz5E = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressDeQPlHn = accounts[4]
		const boolz7xU8i6 = await UNIWHALE_ERC20VQYEz5E.getAirdrop.call(addressDeQPlHn, {from: accounts[4]});
		await UNIWHALE_ERC20VQYEz5E.clearETH.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20VQYEz5E.getAirdrop.call(addressDeQPlHn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC200N06Im = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEyUTzY5 = accounts[2]
		const uintQ1VdOtE = BigInt("584")
		const uintWvVDp1e = BigInt("984")
		const uintw6bl2CT = BigInt("0")
		const uintyecyWQl = BigInt("1404")
		const uintE2VKcqt = BigInt("9")
		const addressukz5aET = accounts[3]
		const boolRQv5exI = await UNIWHALE_ERC200N06Im.tokenSale.call(addressEyUTzY5, {from: accounts[4]});
		const uint256tXf1xV = await UNIWHALE_ERC200N06Im.startSale.call(uintE2VKcqt, uintyecyWQl, uintw6bl2CT, uintWvVDp1e, uintQ1VdOtE, {from: accounts[4]});
		const uint256tFMJvZZ = await UNIWHALE_ERC200N06Im.viewAirdrop.call({from: accounts[1]});
		const boolzgAeWsh = await UNIWHALE_ERC200N06Im.getAirdrop.call(addressukz5aET, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20VQYEz5E = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintkABVY7x = BigInt("331")
		const uintCPKwRJm = BigInt("1820")
		const uintm8w2KCw = BigInt("1553")
		const uintlLREu1v = BigInt("743")
		const uint256TbmCIfG = await UNIWHALE_ERC20VQYEz5E.viewSale.call({from: accounts[4]});
		const uint256Ay9Yrgd = await UNIWHALE_ERC20VQYEz5E.startAirdrop.call(uintlLREu1v, uintm8w2KCw, uintCPKwRJm, uintkABVY7x, {from: accounts[4]});
		await UNIWHALE_ERC20VQYEz5E.clearETH.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20VQYEz5E.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20VQYEz5E = await UNIWHALE_ERC20.new({from: accounts[4]});
		await UNIWHALE_ERC20VQYEz5E.clearETH.call({from: accounts[4]});
		await UNIWHALE_ERC20VQYEz5E.clearETH.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20VQYEz5E.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})