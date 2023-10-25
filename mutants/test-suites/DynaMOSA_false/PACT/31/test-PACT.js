const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTqmD5O6D = await PACT.new({from: accounts[0]});
		const uint55T083 = BigInt("1076")
		const addressSyqKa7n = accounts[4]
		const uintkpnQyF3 = BigInt("1681")
		const addressuTZf28 = "0x0000000000000000000000000000000000000001"
		const uintaATGL9g = BigInt("1587")
		const addressTSb9dJL = accounts[3]
//		const boolBAN7wFv = await PACTqmD5O6D.transfer.call(addressSyqKa7n, uint55T083, {from: accounts[3]});
//		const boolFhXqG3p = await PACTqmD5O6D.burn.call(addressuTZf28, uintkpnQyF3, {from: "0x0000000000000000000000000000000000000001"});
//		const stringnoGgg6I = await PACTqmD5O6D.symbol.call({from: accounts[0]});
//		const booloqAue7q = await PACTqmD5O6D.transfer.call(addressTSb9dJL, uintaATGL9g, {from: accounts[2]});

		await expect(PACTqmD5O6D.transfer.call(addressSyqKa7n, uint55T083, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTu5Aj25g = await PACT.new({from: accounts[5]});
		const uintgMc2QWV = BigInt("858")
		const addressDrykBu = accounts[4]
		const booljlBN7hF = await PACTu5Aj25g.approve.call(addressDrykBu, uintgMc2QWV, {from: accounts[1]});
		const uintZNpt6GT = await PACTu5Aj25g.totalSupply.call({from: accounts[2]});

		assert.equal(booljlBN7hF, true)
		assert.equal(uintZNpt6GT, BigInt("1000000000000000000000000000"))
	});

	it('test for PACT', async () => {
		const PACTmmU03P6 = await PACT.new({from: accounts[0]});
		const uintrjJcULV = BigInt("91")
		const addressMvNkYLd = accounts[2]
		const addressS6hTCrE = accounts[3]
		const addresse2XuEY9 = accounts[4]
		const uintdOxeifk = BigInt("2044")
		const addresshcxEYit = accounts[4]
//		const boolT30kgTk = await PACTmmU03P6.transferFrom.call(addressS6hTCrE, addressMvNkYLd, uintrjJcULV, {from: "0x0000000000000000000000000000000000000001"});
//		const stringQ5fa3Su = await PACTmmU03P6.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolijqtS0R = await PACTmmU03P6.setupRewards.call(addresse2XuEY9, {from: accounts[2]});
//		const boolNJ8X8Ka = await PACTmmU03P6.burn.call(addresshcxEYit, uintdOxeifk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PACTmmU03P6.transferFrom.call(addressS6hTCrE, addressMvNkYLd, uintrjJcULV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTHi54CX9 = await PACT.new({from: accounts[4]});
		const uintiHSgkP7 = BigInt("1280")
		const addressqacm7ow = accounts[2]
		const addressUnKTAKp = accounts[2]
		const uint5AR6Re = BigInt("1250")
		const addressyK7dXMg = accounts[0]
		const addressq7CPXhX = accounts[0]
		const boolxbXo9WP = await PACTHi54CX9.approve.call(addressqacm7ow, uintiHSgkP7, {from: accounts[3]});
		const uintfNxbx53 = await PACTHi54CX9.totalSupply.call({from: accounts[5]});
//		const boolzspGUlZ = await PACTHi54CX9.setupFarming.call(addressUnKTAKp, {from: accounts[4]});
//		const boolyQdqTqY = await PACTHi54CX9.transferFrom.call(addressq7CPXhX, addressyK7dXMg, uint5AR6Re, {from: accounts[2]});

		assert.equal(boolxbXo9WP, true)
		assert.equal(uintfNxbx53, BigInt("1000000000000000000000000000"))
		await expect(PACTHi54CX9.setupFarming.call(addressUnKTAKp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTcklqqNr = await PACT.new({from: accounts[1]});
		const addressBYn0v3C = accounts[4]
		const addresscu7NQP = accounts[3]
		const addressghKffi3 = accounts[5]
		const addresspe4U5Dc = accounts[3]
		const addressK8p4G1H = accounts[4]
//		const boolWomQz64 = await PACTcklqqNr.setupReserve.call(addressBYn0v3C, {from: accounts[5]});
//		const boolGqHNnVD = await PACTcklqqNr.setupTeam.call(addresscu7NQP, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQPFgOv2 = await PACTcklqqNr.setupRewards.call(addressghKffi3, {from: accounts[4]});
//		const boolJFwosXN = await PACTcklqqNr.setupBasePool.call(addresspe4U5Dc, {from: accounts[4]});
//		const boolrKaa9DX = await PACTcklqqNr.setupReserve.call(addressK8p4G1H, {from: accounts[1]});

		await expect(PACTcklqqNr.setupReserve.call(addressBYn0v3C, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTIYpKiC = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressjVTTLj6 = accounts[1]
		const boolqMAP3FN = await PACTIYpKiC.setupTeam.call(addressjVTTLj6, {from: accounts[0]});
		const uintb5nmqNz = await PACTIYpKiC.totalSupply.call({from: accounts[2]});
	});

	it('test for PACT', async () => {
		const PACTYcdNaDs = await PACT.new({from: accounts[4]});
		const uint6W9GnU = BigInt("733")
		const addresskJvpnC = accounts[3]
		const addressiIvX8cW = accounts[3]
		const stringYcMxIiA = await PACTYcdNaDs.name.call({from: accounts[1]});
		const boolKtV9OOx = await PACTYcdNaDs.approve.call(addresskJvpnC, uint6W9GnU, {from: accounts[5]});
//		const boolgGIA8Nl = await PACTYcdNaDs.setupBasePool.call(addressiIvX8cW, {from: accounts[5]});

		assert.equal(boolKtV9OOx, true)
		assert.equal(stringYcMxIiA, "P2PB2B community token")
		await expect(PACTYcdNaDs.setupBasePool.call(addressiIvX8cW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTYcdNaDs = await PACT.new({from: accounts[4]});
		const addressvvrTKV6 = accounts[2]
		const uinthlbVcM = BigInt("733")
		const addressG6HyXe = accounts[4]
		const addresshRrG3uW = accounts[3]
		const uintPNaF7QT = await PACTYcdNaDs.balanceOf.call(addressvvrTKV6, {from: accounts[4]});
		const stringYcMxIiA = await PACTYcdNaDs.name.call({from: accounts[1]});
		const boolKtV9OOx = await PACTYcdNaDs.approve.call(addressG6HyXe, uinthlbVcM, {from: accounts[5]});
//		const boolgGIA8Nl = await PACTYcdNaDs.setupBasePool.call(addresshRrG3uW, {from: accounts[5]});

		assert.equal(boolKtV9OOx, true)
		assert.equal(stringYcMxIiA, "P2PB2B community token")
		assert.equal(uintPNaF7QT, BigInt("0"))
		await expect(PACTYcdNaDs.setupBasePool.call(addresshRrG3uW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTKWJdJJ = await PACT.new({from: accounts[4]});
		const addressEJCcwfj = accounts[1]
		const addressKnUnxfJ = accounts[1]
		const uint8TmiqRQv = await PACTKWJdJJ.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uintxRQuYee = await PACTKWJdJJ.allowance.call(addressKnUnxfJ, addressEJCcwfj, {from: accounts[2]});

		assert.equal(uint8TmiqRQv, BigInt("18"))
		assert.equal(uintxRQuYee, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTYcdNaDs = await PACT.new({from: accounts[4]});
		const uintXYOSKIu = BigInt("733")
		const addresshRjIYIz = accounts[3]
		const addressSITVmn2 = accounts[4]
		const stringFM8o92J = await PACTYcdNaDs.symbol.call({from: accounts[4]});
		const stringYcMxIiA = await PACTYcdNaDs.name.call({from: accounts[1]});
		const boolKtV9OOx = await PACTYcdNaDs.approve.call(addresshRjIYIz, uintXYOSKIu, {from: accounts[5]});
//		const boolgGIA8Nl = await PACTYcdNaDs.setupBasePool.call(addressSITVmn2, {from: accounts[5]});

		assert.equal(boolKtV9OOx, true)
		assert.equal(stringFM8o92J, "PACT")
		assert.equal(stringYcMxIiA, "P2PB2B community token")
		await expect(PACTYcdNaDs.setupBasePool.call(addressSITVmn2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTmmU03P6 = await PACT.new({from: accounts[0]});
		const addressBWLozXS = accounts[1]
		const uint8jigfM = BigInt("91")
		const addresseawPX2 = accounts[2]
		const addressvsiZSG1 = accounts[3]
		const uintHsvE2pQ = BigInt("1612")
		const addressnmwrj92 = accounts[0]
		const addressa1PwpKn = accounts[3]
		const addressVVgcuyn = accounts[5]
		const uintW1OUgP8 = BigInt("2044")
		const addresse0wbxO8 = accounts[4]
//		const boolJ4fSFV8 = await PACTmmU03P6.setupTeam.call(addressBWLozXS, {from: accounts[1]});
//		const boolT30kgTk = await PACTmmU03P6.transferFrom.call(addressvsiZSG1, addresseawPX2, uint8jigfM, {from: "0x0000000000000000000000000000000000000001"});
//		const stringQ5fa3Su = await PACTmmU03P6.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolseJQXbC = await PACTmmU03P6.transferFrom.call(addressa1PwpKn, addressnmwrj92, uintHsvE2pQ, {from: accounts[2]});
//		const boolijqtS0R = await PACTmmU03P6.setupRewards.call(addressVVgcuyn, {from: accounts[2]});
//		const boolNJ8X8Ka = await PACTmmU03P6.burn.call(addresse0wbxO8, uintW1OUgP8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PACTmmU03P6.setupTeam.call(addressBWLozXS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTrbw5nO3 = await PACT.new({from: accounts[4]});
		const addressBYGkBd = accounts[3]
		const addressMsTpnio = accounts[3]
//		const boolJMMnKE3 = await PACTrbw5nO3.setupRewards.call(addressBYGkBd, {from: accounts[2]});
//		const stringpVmtsX3 = await PACTrbw5nO3.symbol.call({from: accounts[1]});
//		const uintmjqGgPO = await PACTrbw5nO3.balanceOf.call(addressMsTpnio, {from: accounts[1]});

		await expect(PACTrbw5nO3.setupRewards.call(addressBYGkBd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTBPL9z3s = await PACT.new({from: accounts[3]});
		const uintN2Gny10 = BigInt("1091")
		const addressmQNkpix = accounts[5]
		const addressRmA4LlB = accounts[4]
		const addressEtW7CvQ = accounts[3]
//		const boolugXD4Rm = await PACTBPL9z3s.burn.call(addressmQNkpix, uintN2Gny10, {from: accounts[2]});
//		const boolaV9FzLm = await PACTBPL9z3s.setupFarming.call(addressRmA4LlB, {from: accounts[3]});
//		const booleQEDtb9 = await PACTBPL9z3s.setupTeam.call(addressEtW7CvQ, {from: accounts[4]});
//		const uint8MrrE7VE = await PACTBPL9z3s.decimals.call({from: accounts[3]});

		await expect(PACTBPL9z3s.burn.call(addressmQNkpix, uintN2Gny10, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})