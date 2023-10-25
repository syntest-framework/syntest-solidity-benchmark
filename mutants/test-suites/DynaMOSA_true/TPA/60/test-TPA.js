const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAtUI3MJv = await TPA.new({from: accounts[0]});
		const uintce6rLdv = BigInt("104")
		const addresskKSrTUa = accounts[3]
//		const boolgUx23D = await TPAtUI3MJv.unlock.call(addresskKSrTUa, uintce6rLdv, {from: accounts[5]});
//		await TPAtUI3MJv.whenPaused.call({from: accounts[2]});

		await expect(TPAtUI3MJv.unlock.call(addresskKSrTUa, uintce6rLdv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAqj9oVsF = await TPA.new({from: accounts[1]});
		const uintt36XUYk = BigInt("1931")
		const addressDzZxMOJ = accounts[1]
		const addressamQgdki = "0x0000000000000000000000000000000000000001"
		const uintQgl7VxU = BigInt("350")
		const addressBoja0Au = "0x0000000000000000000000000000000000000001"
		const boolprVy3fk = await TPAqj9oVsF.approve.call(addressDzZxMOJ, uintt36XUYk, {from: accounts[1]});
//		const boolEM5XCjF = await TPAqj9oVsF.unfreezeAccount.call(addressamQgdki, {from: accounts[2]});
//		await TPAqj9oVsF.unpause.call({from: accounts[3]});
//		const boolRVVJ34E = await TPAqj9oVsF.approve.call(addressBoja0Au, uintQgl7VxU, {from: accounts[5]});
//		await TPAqj9oVsF.onlyAdmin.call({from: accounts[1]});

		assert.equal(boolprVy3fk, true)
		await expect(TPAqj9oVsF.unfreezeAccount.call(addressamQgdki, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAgzcWF0P = await TPA.new({from: accounts[3]});
		const addresssooJlMx = accounts[3]
		const uintAFxzjm = BigInt("1758")
		const addressvIYS7Va = accounts[1]
		const addresssil4SEu = accounts[2]
		const uintvAI8A9g = BigInt("1321")
		const addressS8NtRd = accounts[1]
		const uint8xmBAV7R = await TPAgzcWF0P.decimals.call({from: accounts[2]});
//		await TPAgzcWF0P.onlyAdmin.call({from: accounts[5]});
//		const boololjBoAw = await TPAgzcWF0P.isOwner.call(addresssooJlMx, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgP6Vv7s = await TPAgzcWF0P.transfer.call(addressvIYS7Va, uintAFxzjm, {from: accounts[3]});
//		const uint256RdwmuqH = await TPAgzcWF0P.balanceOf.call(addresssil4SEu, {from: "0x0000000000000000000000000000000000000001"});
//		const addressGHZtxKU = await TPAgzcWF0P.burnFrom.call(addressS8NtRd, uintvAI8A9g, {from: accounts[2]});

		assert.equal(uint8xmBAV7R, BigInt("18"))
		await expect(TPAgzcWF0P.onlyAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringG9ZIpyY = "XmiEMWd2WvbOz4RTGqIXyFQUEGqBLpwLPjUyRO9u57pBX8gUzCW4Kjd67B4jm1pvWKTrm"
		const stringQJodFC = "UtD2sZOo2d8L2MYO1rSh2nEc1de"
		const uintg5vgJlg = BigInt("145")
		const TPAMKlpnnA = await TPA.new(stringG9ZIpyY, stringQJodFC, uintg5vgJlg, {from: "0x0000000000000000000000000000000000000001"});
		const uint2CkU8d = BigInt("1392")
		const addressvBm48LB = accounts[4]
		const uintCnvDa1A = BigInt("1438")
		const addresshAxhCwD = accounts[2]
		const addressTPym9Ev = accounts[4]
		const uintddBJ00T = BigInt("1041")
		const uintOXNv7bL = BigInt("1962")
		const addressG6lHgz = accounts[1]
		const boolbgWoib = await TPAMKlpnnA.transfer.call(addressvBm48LB, uint2CkU8d, {from: accounts[4]});
		const boolTED82iF = await TPAMKlpnnA.transferFrom.call(addressTPym9Ev, addresshAxhCwD, uintCnvDa1A, {from: accounts[4]});
		await TPAMKlpnnA.unpause.call({from: accounts[1]});
		const uint8DqQXAdZ = await TPAMKlpnnA.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolg4oc0f = await TPAMKlpnnA.lock.call(addressG6lHgz, uintOXNv7bL, uintddBJ00T, {from: accounts[3]});
		const stringz1AnFyu = await TPAMKlpnnA.symbol.call({from: accounts[0]});
	});

	it('test for TPA', async () => {
		const TPAge8QOyp = await TPA.new({from: accounts[5]});
		const addressJKgQamz = accounts[3]
		const uintgU0xRgE = BigInt("60")
		const addressrfadliB = accounts[2]
		const addressRmI8jLI = accounts[0]
		const uint256DNeK1dZ = await TPAge8QOyp.balanceOf.call(addressJKgQamz, {from: accounts[3]});
//		const booli6sLVFc = await TPAge8QOyp.decreaseAllowance.call(addressrfadliB, uintgU0xRgE, {from: accounts[3]});
//		const addressigszCuC = await TPAge8QOyp.notFrozen.call(addressRmI8jLI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256DNeK1dZ, BigInt("0"))
		await expect(TPAge8QOyp.decreaseAllowance.call(addressrfadliB, uintgU0xRgE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtUI3MJv = await TPA.new({from: accounts[0]});
//		await TPAtUI3MJv.renounceAdmin.call({from: accounts[0]});
//		await TPAtUI3MJv.whenPaused.call({from: accounts[2]});

		await expect(TPAtUI3MJv.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAqtgRKwh = await TPA.new({from: accounts[0]});
		const addressu2hb3gu = accounts[4]
		const uintIBqCJjG = BigInt("241")
		const addressCwNwZfm = accounts[1]
		const addressvhkJ2oc = accounts[1]
		const boolwNJemaA = await TPAqtgRKwh.isOwner.call(addressu2hb3gu, {from: accounts[0]});
		const boolwdijIbW = await TPAqtgRKwh.increaseAllowance.call(addressCwNwZfm, uintIBqCJjG, {from: accounts[4]});
		const boolebWygFL = await TPAqtgRKwh.isOwner.call(addressvhkJ2oc, {from: accounts[1]});

		assert.equal(boolebWygFL, false)
		assert.equal(boolwNJemaA, false)
		assert.equal(boolwdijIbW, true)
	});

	it('test for TPA', async () => {
		const TPASuXsyIf = await TPA.new({from: accounts[0]});
		const addressP7ubMGs = accounts[5]
		const uintlSX2sAm = BigInt("883")
		const addressbjGq6D = accounts[5]
		const addressMNJyqlb = accounts[4]
		const uintFnqHab = BigInt("1301")
		const uintFpRDlmI = BigInt("383")
		const addressj0eXTpv = accounts[5]
		const uint256aU1OJv = await TPASuXsyIf.balanceOf.call(addressP7ubMGs, {from: accounts[4]});
//		const boolc7EjnJ = await TPASuXsyIf.transferFrom.call(addressMNJyqlb, addressbjGq6D, uintlSX2sAm, {from: accounts[5]});
//		const stringWbfFCGZ = await TPASuXsyIf.symbol.call({from: accounts[3]});
//		const uint256fEpzRas = await TPASuXsyIf.burn.call(uintFnqHab, {from: accounts[4]});
//		const addresswSJa6r = await TPASuXsyIf.burnFrom.call(addressj0eXTpv, uintFpRDlmI, {from: accounts[0]});

		assert.equal(uint256aU1OJv, BigInt("0"))
		await expect(TPASuXsyIf.transferFrom.call(addressMNJyqlb, addressbjGq6D, uintlSX2sAm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAqtgRKwh = await TPA.new({from: accounts[0]});
		const uintWN4He9p = BigInt("1632")
		const address8SebHF = "0x0000000000000000000000000000000000000001"
		const address8t7v1G = accounts[4]
		const uintlzRhNY3 = BigInt("241")
		const addressquvUNJJ = accounts[2]
		const addressbMfRUME = accounts[1]
//		const boolPlkXFWS = await TPAqtgRKwh.transfer.call(address8SebHF, uintWN4He9p, {from: accounts[3]});
//		const boolwNJemaA = await TPAqtgRKwh.isOwner.call(address8t7v1G, {from: accounts[0]});
//		const boolwdijIbW = await TPAqtgRKwh.increaseAllowance.call(addressquvUNJJ, uintlzRhNY3, {from: accounts[4]});
//		const boolebWygFL = await TPAqtgRKwh.isOwner.call(addressbMfRUME, {from: accounts[1]});

		await expect(TPAqtgRKwh.transfer.call(address8SebHF, uintWN4He9p, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtUI3MJv = await TPA.new({from: accounts[0]});
		const addressP0smidk = "0x0000000000000000000000000000000000000001"
		const addressCyx3rah = "0x0000000000000000000000000000000000000001"
		const uintdZdhg6R = BigInt("1790")
		const addressixZ5i6T = accounts[4]
		const uint256QlfxsxY = await TPAtUI3MJv.allowance.call(addressCyx3rah, addressP0smidk, {from: accounts[3]});
//		await TPAtUI3MJv.whenPaused.call({from: accounts[2]});
//		const boollIZePri = await TPAtUI3MJv.increaseAllowance.call(addressixZ5i6T, uintdZdhg6R, {from: accounts[1]});

		assert.equal(uint256QlfxsxY, BigInt("0"))
		await expect(TPAtUI3MJv.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAge8QOyp = await TPA.new({from: accounts[5]});
		const addressWpJdPGu = accounts[3]
		const uintsMb5ghZ = BigInt("932")
		const addressiMfNg3l = accounts[0]
		const addressKNxRIsH = accounts[0]
		const uint256DNeK1dZ = await TPAge8QOyp.balanceOf.call(addressWpJdPGu, {from: accounts[3]});
//		const addressWZEufkl = await TPAge8QOyp.burnFrom.call(addressiMfNg3l, uintsMb5ghZ, {from: accounts[2]});
//		const addressigszCuC = await TPAge8QOyp.notFrozen.call(addressKNxRIsH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256DNeK1dZ, BigInt("0"))
		await expect(TPAge8QOyp.burnFrom.call(addressiMfNg3l, uintsMb5ghZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASuXsyIf = await TPA.new({from: accounts[0]});
		const addressM9mdKuX = accounts[5]
		const uintAcInrd = BigInt("1301")
		const addressSBBeOo = accounts[1]
		const uintw5PSmaU = BigInt("383")
		const addressk7QXouQ = accounts[5]
		const uint256aU1OJv = await TPASuXsyIf.balanceOf.call(addressM9mdKuX, {from: accounts[4]});
		const stringWbfFCGZ = await TPASuXsyIf.symbol.call({from: accounts[3]});
		const stringWIPw7Ie = await TPASuXsyIf.symbol.call({from: accounts[0]});
//		const uint256fEpzRas = await TPASuXsyIf.burn.call(uintAcInrd, {from: accounts[4]});
//		const addressRgJioNC = await TPASuXsyIf.notFrozen.call(addressSBBeOo, {from: accounts[4]});
//		const boolQr0XCTe = await TPASuXsyIf.paused.call({from: accounts[4]});
//		const addresswSJa6r = await TPASuXsyIf.burnFrom.call(addressk7QXouQ, uintw5PSmaU, {from: accounts[0]});

		assert.equal(stringWIPw7Ie, "TPA")
		assert.equal(stringWbfFCGZ, "TPA")
		assert.equal(uint256aU1OJv, BigInt("0"))
		await expect(TPASuXsyIf.burn.call(uintAcInrd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAge8QOyp = await TPA.new({from: accounts[5]});
		const addressBQKOVo4 = accounts[3]
		const uintgWHeR1 = BigInt("932")
		const addressaka5OSZ = accounts[0]
		const addressq8efa7L = accounts[1]
		const uint256DNeK1dZ = await TPAge8QOyp.balanceOf.call(addressBQKOVo4, {from: accounts[3]});
		const stringifjG4vC = await TPAge8QOyp.name.call({from: accounts[5]});
//		const addressWZEufkl = await TPAge8QOyp.burnFrom.call(addressaka5OSZ, uintgWHeR1, {from: accounts[2]});
//		const addressigszCuC = await TPAge8QOyp.notFrozen.call(addressq8efa7L, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringifjG4vC, "TPA")
		assert.equal(uint256DNeK1dZ, BigInt("0"))
		await expect(TPAge8QOyp.burnFrom.call(addressaka5OSZ, uintgWHeR1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAge8QOyp = await TPA.new({from: accounts[5]});
		const addressk9QKcW5 = accounts[0]
		const addressuebFoVT = accounts[3]
		const boolWWlr7k0 = await TPAge8QOyp.freezeAccount.call(addressk9QKcW5, {from: accounts[5]});
//		await TPAge8QOyp.onlyAdmin.call({from: accounts[1]});
//		const uint256DNeK1dZ = await TPAge8QOyp.balanceOf.call(addressuebFoVT, {from: accounts[3]});

		assert.equal(boolWWlr7k0, true)
		await expect(TPAge8QOyp.onlyAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASuXsyIf = await TPA.new({from: accounts[0]});
		const uintm0QFg1c = BigInt("883")
		const address5tfpmi = accounts[5]
		const addressGsxibv4 = accounts[4]
		const addressZyNETWM = accounts[2]
		const uintDNMDhmi = BigInt("1304")
		const uintRiJb9gg = BigInt("383")
		const addresslhxfQVQ = accounts[5]
		const uint256VWlmnbW = await TPASuXsyIf.totalSupply.call({from: accounts[2]});
//		const boolc7EjnJ = await TPASuXsyIf.transferFrom.call(addressGsxibv4, address5tfpmi, uintm0QFg1c, {from: accounts[5]});
//		const booljP1XWF = await TPASuXsyIf.freezeAccount.call(addressZyNETWM, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256fEpzRas = await TPASuXsyIf.burn.call(uintDNMDhmi, {from: accounts[4]});
//		const addresswSJa6r = await TPASuXsyIf.burnFrom.call(addresslhxfQVQ, uintRiJb9gg, {from: accounts[0]});

		assert.equal(uint256VWlmnbW, BigInt("10000000000000000000000000000"))
		await expect(TPASuXsyIf.transferFrom.call(addressGsxibv4, address5tfpmi, uintm0QFg1c, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtUI3MJv = await TPA.new({from: accounts[0]});
		const uintQRacsw = BigInt("1141")
		const uintaJduhvE = BigInt("934")
		const addressfwShUr3 = accounts[4]
		const uintVFLvXPN = BigInt("98")
		const addressKP09apJ = accounts[3]
//		const boolAYLJ5kD = await TPAtUI3MJv.lock.call(addressfwShUr3, uintaJduhvE, uintQRacsw, {from: accounts[0]});
//		await TPAtUI3MJv.onlyAdmin.call({from: accounts[2]});
//		const boolgUx23D = await TPAtUI3MJv.unlock.call(addressKP09apJ, uintVFLvXPN, {from: accounts[5]});

		await expect(TPAtUI3MJv.lock.call(addressfwShUr3, uintaJduhvE, uintQRacsw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtUI3MJv = await TPA.new({from: accounts[0]});
		const addressJ0D4Lzz = accounts[2]
		const addressG430Ixf = "0x0000000000000000000000000000000000000001"
		const uint6r02pN = BigInt("104")
		const addresspun5oVw = accounts[4]
		const boolCzPdBa3 = await TPAtUI3MJv.paused.call({from: accounts[3]});
		const uint256qGhb0Q8 = await TPAtUI3MJv.allowance.call(addressG430Ixf, addressJ0D4Lzz, {from: accounts[2]});
//		const boolgUx23D = await TPAtUI3MJv.unlock.call(addresspun5oVw, uint6r02pN, {from: accounts[5]});

		assert.equal(boolCzPdBa3, false)
		assert.equal(uint256qGhb0Q8, BigInt("0"))
		await expect(TPAtUI3MJv.unlock.call(addresspun5oVw, uint6r02pN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASuXsyIf = await TPA.new({from: accounts[0]});
		const addressuOjwcm7 = accounts[0]
		const addressaDlIArS = accounts[5]
		const addressjK6evre = accounts[2]
		const addressP4weYqV = accounts[1]
		const boolmOYNblT = await TPASuXsyIf.isOwner.call(addressuOjwcm7, {from: accounts[2]});
		const uint256aU1OJv = await TPASuXsyIf.balanceOf.call(addressaDlIArS, {from: accounts[4]});
		const addressjgu87Y9 = await TPASuXsyIf.addAdmin.call(addressjK6evre, {from: accounts[0]});
//		await TPASuXsyIf.pause.call({from: accounts[1]});
//		const addressIop13IK = await TPASuXsyIf.upgradeTo.call(addressP4weYqV, {from: accounts[4]});

		assert.equal(boolmOYNblT, true)
		assert.equal(uint256aU1OJv, BigInt("0"))
		await expect(TPASuXsyIf.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhF70vlK = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMFcCCDQ = accounts[0]
		const uint256qExQ8Yb = await TPAhF70vlK.balanceOf.call(addressMFcCCDQ, {from: accounts[0]});
		await TPAhF70vlK.onlyAdmin.call({from: accounts[5]});
	});

	it('test for TPA', async () => {
		const TPAge8QOyp = await TPA.new({from: accounts[5]});
		const addressIuzVa1d = accounts[4]
		const addresswSzuKPz = accounts[4]
		const addressf9mEE3L = accounts[4]
		const boolFeUR77H = await TPAge8QOyp.isOwner.call(addressIuzVa1d, {from: accounts[1]});
		const uint256DNeK1dZ = await TPAge8QOyp.balanceOf.call(addresswSzuKPz, {from: accounts[3]});
		const addresspxXIjT = await TPAge8QOyp.transferOwnership.call(addressf9mEE3L, {from: accounts[5]});

		assert.equal(boolFeUR77H, false)
		assert.equal(uint256DNeK1dZ, BigInt("0"))
	});
})