const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOQFJu2DI = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrHfZTFs = BigInt("681")
		const uintes7dG68 = BigInt("2008")
		const addressOF0x96 = accounts[5]
		const addresspVSHtjG = accounts[1]
		const uintr7umSCL = BigInt("761")
		const addressljBLkKz = accounts[4]
		const addressNiJnAvU = accounts[2]
		const uintBJBjNSh = await FrogDAOQFJu2DI.safeDiv.call(uintes7dG68, uintrHfZTFs, {from: accounts[4]});
		const uintDAnZM5 = await FrogDAOQFJu2DI.allowance.call(addresspVSHtjG, addressOF0x96, {from: accounts[5]});
		const boolaSQol9 = await FrogDAOQFJu2DI.approve.call(addressljBLkKz, uintr7umSCL, {from: accounts[1]});
		const uintJdKuxhV = await FrogDAOQFJu2DI.balanceOf.call(addressNiJnAvU, {from: accounts[1]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOChLtNpm = await FrogDAO.new({from: accounts[4]});
		const uintbUWzxUN = BigInt("728")
		const uint44EW14 = BigInt("155")
		const uintyqV49Jx = BigInt("1311")
		const uintd6Mxj4 = BigInt("1660")
		const uintAw8Dv0 = await FrogDAOChLtNpm.safeDiv.call(uint44EW14, uintbUWzxUN, {from: accounts[3]});
		const uintcUpjmJ = await FrogDAOChLtNpm.safeMul.call(uintd6Mxj4, uintyqV49Jx, {from: accounts[5]});

		assert.equal(uintAw8Dv0, BigInt("0"))
		assert.equal(uintcUpjmJ, BigInt("2176260"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOfthfzdW = await FrogDAO.new({from: accounts[1]});
		const uintSEK86PM = BigInt("77")
		const uintxQkexEs = BigInt("1214")
		const addressDRgOug = accounts[1]
		const addressqJRv6Bg = "0x0000000000000000000000000000000000000001"
		const addressZ7qeQRs = accounts[5]
		const addressmpIZ0Aq = accounts[4]
		const uintHl3ov5 = BigInt("128")
		const uintZnaB00 = BigInt("1703")
		const uintJrRVXGT = await FrogDAOfthfzdW.safeMul.call(uintxQkexEs, uintSEK86PM, {from: "0x0000000000000000000000000000000000000001"});
		const uintS8L9Ffb = await FrogDAOfthfzdW.allowance.call(addressqJRv6Bg, addressDRgOug, {from: "0x0000000000000000000000000000000000000001"});
		const uinttVieuq = await FrogDAOfthfzdW.allowance.call(addressmpIZ0Aq, addressZ7qeQRs, {from: accounts[2]});
		const uintWzH3Eg = await FrogDAOfthfzdW.safeDiv.call(uintZnaB00, uintHl3ov5, {from: accounts[4]});

		assert.equal(uintJrRVXGT, BigInt("93478"))
		assert.equal(uintS8L9Ffb, BigInt("0"))
		assert.equal(uintWzH3Eg, BigInt("13"))
		assert.equal(uinttVieuq, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOPTdlM47 = await FrogDAO.new({from: accounts[3]});
		const uintGHEGU5k = BigInt("31")
		const uintOzkD15j = BigInt("1088")
		const uintxIppGh = BigInt("165")
		const uintQOiLfiD = BigInt("1336")
		const uintiy62fDM = BigInt("1155")
		const addresspZasBH = accounts[3]
		const uintoiN2ziM = await FrogDAOPTdlM47.safeSub.call(uintOzkD15j, uintGHEGU5k, {from: accounts[3]});
		const uintxrK8a5o = await FrogDAOPTdlM47.safeMul.call(uintQOiLfiD, uintxIppGh, {from: accounts[4]});
		const boolkOKmueE = await FrogDAOPTdlM47.transfer.call(addresspZasBH, uintiy62fDM, {from: accounts[1]});

		assert.equal(uintoiN2ziM, BigInt("1057"))
		assert.equal(uintxrK8a5o, BigInt("220440"))
		await expect(FrogDAOPTdlM47.transfer.call(addresspZasBH, uintiy62fDM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOcRGGL7w = await FrogDAO.new({from: accounts[4]});
		const addressdb5gIW0 = accounts[2]
		const uintXdyVsSn = BigInt("769")
		const addresspJntxe6 = accounts[2]
		const uintEkz9D7Y = BigInt("1573")
		const uintR8iS9p6 = BigInt("186")
		const uintkfdlMmI = BigInt("1875")
		const addresszNJMb4D = accounts[0]
		const uintOGMDfv3 = BigInt("1634")
		const uintR4m58Nr = BigInt("1012")
		const uintlmH0oJX = await FrogDAOcRGGL7w.balanceOf.call(addressdb5gIW0, {from: accounts[4]});
		const boolCF7hDn2 = await FrogDAOcRGGL7w.transfer.call(addresspJntxe6, uintXdyVsSn, {from: accounts[4]});
		const uintt6rkdVv = await FrogDAOcRGGL7w.safeMul.call(uintR8iS9p6, uintEkz9D7Y, {from: accounts[0]});
		const boolDXe1Kfv = await FrogDAOcRGGL7w.approve.call(addresszNJMb4D, uintkfdlMmI, {from: accounts[4]});
		const uintYmjEqMg = await FrogDAOcRGGL7w.safeMul.call(uintR4m58Nr, uintOGMDfv3, {from: accounts[1]});

		assert.equal(boolCF7hDn2, true)
		assert.equal(boolDXe1Kfv, true)
		assert.equal(uintYmjEqMg, BigInt("1653608"))
		assert.equal(uintlmH0oJX, BigInt("0"))
		assert.equal(uintt6rkdVv, BigInt("292578"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOZkW2mlP = await FrogDAO.new({from: accounts[3]});
		const uintGwgtdZR = BigInt("636")
		const uintG4lixm = BigInt("1092")
		const uintUSEmmIL = BigInt("476")
		const addresst0lh9nr = accounts[4]
		const addressFgI1k6A = accounts[0]
		const uintmscwiOo = BigInt("1627")
		const uintF08GOJS = BigInt("1244")
		const addresso9m5jJq = accounts[3]
		const uintGYHV7EK = await FrogDAOZkW2mlP.safeMul.call(uintG4lixm, uintGwgtdZR, {from: accounts[4]});
		const boolQmlJ5OH = await FrogDAOZkW2mlP.transferFrom.call(addressFgI1k6A, addresst0lh9nr, uintUSEmmIL, {from: accounts[4]});
		const uintqTmasUa = await FrogDAOZkW2mlP.safeDiv.call(uintF08GOJS, uintmscwiOo, {from: accounts[0]});
		const uintUPxkCmj = await FrogDAOZkW2mlP.balanceOf.call(addresso9m5jJq, {from: accounts[2]});

		assert.equal(uintGYHV7EK, BigInt("694512"))
		await expect(FrogDAOZkW2mlP.transferFrom.call(addressFgI1k6A, addresst0lh9nr, uintUSEmmIL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOChLtNpm = await FrogDAO.new({from: accounts[4]});
		const uintoVADtN = BigInt("1286")
		const uintdNqkGw3 = BigInt("1660")
		const uintdMhFoRD = BigInt("1833")
		const uintEVIc5gp = BigInt("638")
		const uintG8v2GhM = await FrogDAOChLtNpm.totalSupply.call({from: accounts[4]});
		const uintcUpjmJ = await FrogDAOChLtNpm.safeMul.call(uintdNqkGw3, uintoVADtN, {from: accounts[5]});
		const uintOkGt3XR = await FrogDAOChLtNpm.safeSub.call(uintEVIc5gp, uintdMhFoRD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintG8v2GhM, BigInt("1000000000000000000000000"))
		assert.equal(uintcUpjmJ, BigInt("2134760"))
		await expect(FrogDAOChLtNpm.safeSub.call(uintEVIc5gp, uintdMhFoRD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})