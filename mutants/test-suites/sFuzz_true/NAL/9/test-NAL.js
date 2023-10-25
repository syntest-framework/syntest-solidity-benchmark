const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const stringBwPJtks = "wv2FTQdvxHc58zBL5P2Jr5kUd1ACfhHIdJE1duJoKg2Vym3dv1avtWfMnF4BedJIMijfpEIOYdYwRccsMomAJybJ6T"
		const stringYRAt9x1 = "iblGh5oFLg0bANc0WQzGXGTejyzTq6boheJCCHyIDD5cdYqHHVkV5hfNPQkNDeE22jo7sYo0ujV322H"
		const uintob5n5VS = BigInt("34")
		const NALMk5CrB = await NAL.new(stringBwPJtks, stringYRAt9x1, uintob5n5VS, {from: "0x0000000000000000000000000000000000000001"});
		const uintzlt7Kk7 = BigInt("856")
		const uintEs2mM92 = BigInt("1629")
		const addressEv8gTi9 = accounts[2]
		const uint8Rdg2MXl = await NALMk5CrB.decimals.call({from: accounts[3]});
		const booldX4q4i3 = await NALMk5CrB.transferWithLock.call(addressEv8gTi9, uintEs2mM92, uintzlt7Kk7, {from: accounts[2]});
	});

	it('test for NAL', async () => {
		const NALSEGTpE = await NAL.new({from: accounts[5]});
		const uintzhZrqyK = BigInt("1431")
		const addressU4qTNLk = accounts[1]
		const addressRNNFb2C = accounts[4]
		const uintlcQ7H95 = BigInt("835")
		const addressXTJrQKE = accounts[1]
//		const boolekN6O70 = await NALSEGTpE.transferFrom.call(addressRNNFb2C, addressU4qTNLk, uintzhZrqyK, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDnW6oEX = await NALSEGTpE.approve.call(addressXTJrQKE, uintlcQ7H95, {from: accounts[3]});
//		const stringfjW84JZ = await NALSEGTpE.symbol.call({from: accounts[1]});

		await expect(NALSEGTpE.transferFrom.call(addressRNNFb2C, addressU4qTNLk, uintzhZrqyK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALBa4p7VB = await NAL.new({from: accounts[2]});
		const uintwRQdbqG = BigInt("713")
		const addressuibvGbB = accounts[3]
		const uintff1RChk = BigInt("1746")
		const addressES2ojQN = accounts[1]
		const uintpT8EpWU = BigInt("22")
		const addresseQw4b2v = accounts[4]
		const uintEOC1uXZ = BigInt("119")
		const addresseMNz6Xd = accounts[2]
//		const boolpxvfmFm = await NALBa4p7VB.decreaseAllowance.call(addressuibvGbB, uintwRQdbqG, {from: accounts[3]});
//		const boolE4OdsFp = await NALBa4p7VB.transfer.call(addressES2ojQN, uintff1RChk, {from: accounts[2]});
//		const boolc2BYMTF = await NALBa4p7VB.increaseAllowance.call(addresseQw4b2v, uintpT8EpWU, {from: "0x0000000000000000000000000000000000000001"});
//		const booljRjoV55 = await NALBa4p7VB.increaseAllowance.call(addresseMNz6Xd, uintEOC1uXZ, {from: accounts[5]});

		await expect(NALBa4p7VB.decreaseAllowance.call(addressuibvGbB, uintwRQdbqG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALHihA0s = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintu39UltS = BigInt("159")
		const address1e7Rip = accounts[1]
		await NALHihA0s.whenPaused.call({from: accounts[2]});
		const stringf6dJpB0 = await NALHihA0s.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await NALHihA0s.whenNotPaused.call({from: accounts[1]});
		const stringeNochml = await NALHihA0s.symbol.call({from: accounts[1]});
		const boolfchHrS4 = await NALHihA0s.increaseAllowance.call(address1e7Rip, uintu39UltS, {from: accounts[2]});
	});

	it('test for NAL', async () => {
		const NALSEGTpE = await NAL.new({from: accounts[5]});
		const uint5ToQCy = BigInt("1459")
		const uintRDGYdwO = BigInt("1431")
		const addressEmb0wPI = accounts[1]
		const addresspqBaN60 = accounts[4]
		const uintKQBaOE = BigInt("835")
		const addressDlhoA62 = accounts[1]
		const uintxbyxr0j = BigInt("260")
		const addressN064ybT = accounts[4]
//		const uint256WWUZPeh = await NALSEGTpE.burn.call(uint5ToQCy, {from: accounts[0]});
//		const boolekN6O70 = await NALSEGTpE.transferFrom.call(addresspqBaN60, addressEmb0wPI, uintRDGYdwO, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDnW6oEX = await NALSEGTpE.approve.call(addressDlhoA62, uintKQBaOE, {from: accounts[3]});
//		const stringfjW84JZ = await NALSEGTpE.symbol.call({from: accounts[1]});
//		const boolSJZfjih = await NALSEGTpE.transfer.call(addressN064ybT, uintxbyxr0j, {from: accounts[4]});
//		const stringxrIi81Q = await NALSEGTpE.symbol.call({from: accounts[1]});

		await expect(NALSEGTpE.burn.call(uint5ToQCy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALSEGTpE = await NAL.new({from: accounts[5]});
		const addressAnR8gWS = accounts[1]
		const uintI9uXgns = BigInt("132")
		const address9ZNh20 = accounts[1]
		const uintbrZ6AVg = BigInt("835")
		const addressC4uwX1s = accounts[1]
		const boolkpsDlox = await NALSEGTpE.isOwner.call(addressAnR8gWS, {from: accounts[1]});
		const boolXemkZVi = await NALSEGTpE.transfer.call(address9ZNh20, uintI9uXgns, {from: accounts[5]});
		const boolDnW6oEX = await NALSEGTpE.approve.call(addressC4uwX1s, uintbrZ6AVg, {from: accounts[3]});
		const stringfjW84JZ = await NALSEGTpE.symbol.call({from: accounts[1]});

		assert.equal(boolDnW6oEX, true)
		assert.equal(boolXemkZVi, true)
		assert.equal(boolkpsDlox, false)
		assert.equal(stringfjW84JZ, "NAL")
	});

	it('test for NAL', async () => {
		const NALSEGTpE = await NAL.new({from: accounts[5]});
		const addressPagpMQU = accounts[2]
		const uintieLYLT9 = BigInt("1431")
		const addressZGlgB1t = accounts[1]
		const addressF6YUxDH = accounts[4]
		const uintgBM3YwE = BigInt("524")
		const addresszOKmcPS = accounts[2]
		const uintrvHmtG = BigInt("835")
		const addressew480Sp = accounts[1]
//		const addressyqTAM0k = await NALSEGTpE.notFrozen.call(addressPagpMQU, {from: accounts[3]});
//		const boolekN6O70 = await NALSEGTpE.transferFrom.call(addressF6YUxDH, addressZGlgB1t, uintieLYLT9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbDtwWbP = await NALSEGTpE.transfer.call(addresszOKmcPS, uintgBM3YwE, {from: accounts[2]});
//		const boolDnW6oEX = await NALSEGTpE.approve.call(addressew480Sp, uintrvHmtG, {from: accounts[3]});
//		const stringfjW84JZ = await NALSEGTpE.symbol.call({from: accounts[1]});

		await expect(NALSEGTpE.notFrozen.call(addressPagpMQU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALw0u3NN5 = await NAL.new({from: accounts[5]});
		const uintCg4ZbO7 = BigInt("1595")
		const uintdYONfF3 = BigInt("527")
		const addresspzZh1Jk = "0x0000000000000000000000000000000000000001"
		const uintnmvs0nh = BigInt("278")
		const addressSvHKoBe = accounts[2]
		const addresszEl7EQV = accounts[2]
		const booltXhxhY = await NALw0u3NN5.paused.call({from: accounts[4]});
//		const boolGjKH6tn = await NALw0u3NN5.lock.call(addresspzZh1Jk, uintdYONfF3, uintCg4ZbO7, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTw3SCoS = await NALw0u3NN5.transferFrom.call(addresszEl7EQV, addressSvHKoBe, uintnmvs0nh, {from: accounts[0]});

		assert.equal(booltXhxhY, false)
		await expect(NALw0u3NN5.lock.call(addresspzZh1Jk, uintdYONfF3, uintCg4ZbO7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALSEGTpE = await NAL.new({from: accounts[5]});
		const addressGWVmHRh = accounts[1]
		const uintRWqQ0Uv = BigInt("132")
		const addressnTBaOvO = accounts[1]
		const uintu9wFQW = BigInt("1314")
		const addressCUdBsDg = accounts[0]
		const uintDY9YSYN = BigInt("835")
		const addressNxOWULN = accounts[1]
		const boolkpsDlox = await NALSEGTpE.isOwner.call(addressGWVmHRh, {from: accounts[1]});
		const boolXemkZVi = await NALSEGTpE.transfer.call(addressnTBaOvO, uintRWqQ0Uv, {from: accounts[5]});
		const uint256MGoEuD5 = await NALSEGTpE.totalSupply.call({from: accounts[5]});
//		const addressmFZF0u4 = await NALSEGTpE.burnFrom.call(addressCUdBsDg, uintu9wFQW, {from: accounts[1]});
//		const boolDnW6oEX = await NALSEGTpE.approve.call(addressNxOWULN, uintDY9YSYN, {from: accounts[3]});
//		const stringfjW84JZ = await NALSEGTpE.symbol.call({from: accounts[1]});

		assert.equal(boolXemkZVi, true)
		assert.equal(boolkpsDlox, false)
		assert.equal(uint256MGoEuD5, BigInt("2000000000000000000000000000"))
		await expect(NALSEGTpE.burnFrom.call(addressCUdBsDg, uintu9wFQW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALSEGTpE = await NAL.new({from: accounts[5]});
		const uintxoQ6Ka0 = BigInt("804")
		const addressOHRCyx = accounts[2]
		const boolDnW6oEX = await NALSEGTpE.approve.call(addressOHRCyx, uintxoQ6Ka0, {from: accounts[3]});
		const stringfjW84JZ = await NALSEGTpE.symbol.call({from: accounts[1]});
		const uint8bbnyiR = await NALSEGTpE.decimals.call({from: accounts[1]});

		assert.equal(boolDnW6oEX, true)
		assert.equal(stringfjW84JZ, "NAL")
		assert.equal(uint8bbnyiR, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALSEGTpE = await NAL.new({from: accounts[5]});
		const addressJUISlB5 = accounts[0]
		const uintrEzR8GM = BigInt("1431")
		const addressbWDgH35 = accounts[2]
		const addressYGDDEJW = accounts[4]
		const uint256ISMwpU1 = await NALSEGTpE.balanceOf.call(addressJUISlB5, {from: accounts[2]});
//		const boolekN6O70 = await NALSEGTpE.transferFrom.call(addressYGDDEJW, addressbWDgH35, uintrEzR8GM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ISMwpU1, BigInt("0"))
		await expect(NALSEGTpE.transferFrom.call(addressYGDDEJW, addressbWDgH35, uintrEzR8GM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALSEGTpE = await NAL.new({from: accounts[5]});
		const addressnaA3QU7 = accounts[5]
		const addressDXYzoz0 = accounts[1]
		const addressj5oj9C3 = accounts[0]
		const uintEUscutj = BigInt("1446")
		const addresseeE8G3 = accounts[2]
		const addressU3MK8TE = accounts[4]
//		await NALSEGTpE.pause.call({from: accounts[5]});
//		const uint256JhQThfv = await NALSEGTpE.allowance.call(addressDXYzoz0, addressnaA3QU7, {from: accounts[3]});
//		const uint256ISMwpU1 = await NALSEGTpE.balanceOf.call(addressj5oj9C3, {from: accounts[2]});
//		const boolekN6O70 = await NALSEGTpE.transferFrom.call(addressU3MK8TE, addresseeE8G3, uintEUscutj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALSEGTpE.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALSEGTpE = await NAL.new({from: accounts[5]});
		const uintYRuTIAT = BigInt("1401")
		const addressdKQkKw8 = accounts[1]
		const uintd4WJP2 = BigInt("506")
		const addressZM1oYTG = accounts[2]
		const boolXemkZVi = await NALSEGTpE.transfer.call(addressdKQkKw8, uintYRuTIAT, {from: accounts[5]});
		const boolTrC0ols = await NALSEGTpE.increaseAllowance.call(addressZM1oYTG, uintd4WJP2, {from: accounts[1]});
//		await NALSEGTpE.whenPaused.call({from: accounts[4]});

		assert.equal(boolTrC0ols, true)
		assert.equal(boolXemkZVi, true)
		await expect(NALSEGTpE.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALGANGa9W = await NAL.new({from: accounts[5]});
		const uintAfsZYfn = BigInt("433")
		const addressPkL7GyJ = accounts[3]
		const addressFExKckz = accounts[1]
		const boolJJtpFYJ = await NALGANGa9W.increaseAllowance.call(addressPkL7GyJ, uintAfsZYfn, {from: accounts[5]});
		const stringNrYGYMf = await NALGANGa9W.name.call({from: accounts[5]});
//		const addressYzGqzdR = await NALGANGa9W.notFrozen.call(addressFExKckz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJJtpFYJ, true)
		assert.equal(stringNrYGYMf, "Personal Token")
		await expect(NALGANGa9W.notFrozen.call(addressFExKckz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALSEGTpE = await NAL.new({from: accounts[5]});
		const uintXSmFFx2 = BigInt("339")
		const addressukoXe7 = accounts[1]
		const stringfjW84JZ = await NALSEGTpE.symbol.call({from: accounts[1]});
//		const boolWgitxnK = await NALSEGTpE.unlock.call(addressukoXe7, uintXSmFFx2, {from: accounts[5]});

		assert.equal(stringfjW84JZ, "NAL")
		await expect(NALSEGTpE.unlock.call(addressukoXe7, uintXSmFFx2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALTqrcHG1 = await NAL.new({from: accounts[3]});
		const addressAtbn7tP = accounts[1]
		const uintCPKqryE = BigInt("18")
		const addresszpon8jS = accounts[0]
		const addressb6E6bcP = accounts[1]
		const addressWe3PKen = accounts[0]
//		await NALTqrcHG1.renounceAdmin.call({from: accounts[3]});
//		const addressWZ04vy = await NALTqrcHG1.removeAdmin.call(addressAtbn7tP, {from: accounts[2]});
//		const boolkaWXMCf = await NALTqrcHG1.approve.call(addresszpon8jS, uintCPKqryE, {from: accounts[0]});
//		const addressHKTUh29 = await NALTqrcHG1.addAdmin.call(addressb6E6bcP, {from: accounts[3]});
//		const addressgo9g0na = await NALTqrcHG1.addAdmin.call(addressWe3PKen, {from: accounts[4]});

		await expect(NALTqrcHG1.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALOkAQezG = await NAL.new({from: accounts[0]});
		const addressudbXd0v = accounts[1]
		const uintNgooebP = BigInt("1696")
		const uintaek8D9L = BigInt("608")
		const addressoM1Bx2P = accounts[1]
		const addressGrOwrdR = await NALOkAQezG.addAdmin.call(addressudbXd0v, {from: accounts[0]});
//		const boollWksAR = await NALOkAQezG.transferWithLock.call(addressoM1Bx2P, uintaek8D9L, uintNgooebP, {from: accounts[3]});

		await expect(NALOkAQezG.transferWithLock.call(addressoM1Bx2P, uintaek8D9L, uintNgooebP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALSEGTpE = await NAL.new({from: accounts[5]});
		const addressoPo642h = accounts[5]
		const stringfjW84JZ = await NALSEGTpE.symbol.call({from: accounts[1]});
		const boolCYstoDy = await NALSEGTpE.freezeAccount.call(addressoPo642h, {from: accounts[5]});

		assert.equal(boolCYstoDy, true)
		assert.equal(stringfjW84JZ, "NAL")
	});
})