const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerTW5wxta = await vnxManager.new({from: accounts[4]});
		const uintnx7rndw = BigInt("517")
		const addressVxyKHfu = accounts[2]
		const uintsUeXHu = BigInt("159")
		const addressSZ97GgM = accounts[0]
		const boolYeWfgtF = await vnxManagerTW5wxta.hasRole.call(addressVxyKHfu, uintnx7rndw, {from: accounts[1]});
//		const addresstZR1y7i = await vnxManagerTW5wxta.addBearer.call(addressSZ97GgM, uintsUeXHu, {from: accounts[4]});

		assert.equal(boolYeWfgtF, false)
		await expect(vnxManagerTW5wxta.addBearer.call(addressSZ97GgM, uintsUeXHu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerZZj1ER = await vnxManager.new({from: accounts[1]});
		const uintEEzsr81 = BigInt("2")
		const stringXZJF75g = "nN3ZKky1V4fYjDHM1WvEuno72RcU6SDflONH9EiSzaBqMYDBE6PLKifkQxfqVCn7JGfS1iFjxVhJhcbT6"
		const uintN2GQ0Mv = BigInt("1863")
		const addressiTXiezQ = accounts[3]
//		const uint256ShwChb = await vnxManagerZZj1ER.addRole.call(stringXZJF75g, uintEEzsr81, {from: accounts[3]});
//		const addressXJO0nTl = await vnxManagerZZj1ER.owner.call({from: accounts[0]});
//		const addressQjxT1v6 = await vnxManagerZZj1ER.addBearer.call(addressiTXiezQ, uintN2GQ0Mv, {from: accounts[4]});

		await expect(vnxManagerZZj1ER.addRole.call(stringXZJF75g, uintEEzsr81, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagercVTLJq7 = await vnxManager.new({from: accounts[2]});
		const uintX4FLGM = BigInt("1624")
		const addressFQynfS0 = accounts[0]
		const uintKRwUYjh = BigInt("416")
		const stringokZmZuG = "Flj7pg4oYXPqQY9C8BIZM"
		const addressxZByL7g = accounts[0]
//		await vnxManagercVTLJq7.onlyOwner.call({from: accounts[0]});
//		await vnxManagercVTLJq7.onlyAdmin.call({from: accounts[5]});
//		const addressbdHOP8 = await vnxManagercVTLJq7.addBearer.call(addressFQynfS0, uintX4FLGM, {from: accounts[0]});
//		const uint256xz2T3g = await vnxManagercVTLJq7.addRole.call(stringokZmZuG, uintKRwUYjh, {from: accounts[1]});
//		const addressFi4jbYc = await vnxManagercVTLJq7.transferOwnership.call(addressxZByL7g, {from: accounts[2]});

		await expect(vnxManagercVTLJq7.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerLTdeMfb = await vnxManager.new({from: accounts[2]});
		const addressSTvtklx = accounts[3]
		const addressCQh3DEk = accounts[4]
		const addressqSKMAIz = accounts[2]
		const addressuJcVLVU = accounts[1]
//		await vnxManagerLTdeMfb.renounceOwnership.call({from: accounts[0]});
//		const boolTwtdhS = await vnxManagerLTdeMfb.isOwner.call({from: accounts[2]});
//		const boolTYQP6jh = await vnxManagerLTdeMfb.transferContractOwnership.call(addressCQh3DEk, addressSTvtklx, {from: accounts[4]});
//		const uint256l8NSudk = await vnxManagerLTdeMfb.totalRoles.call({from: accounts[1]});
//		const boolZnnGzA9 = await vnxManagerLTdeMfb.transferContractOwnership.call(addressuJcVLVU, addressqSKMAIz, {from: "0x0000000000000000000000000000000000000001"});

		await expect(vnxManagerLTdeMfb.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerTW5wxta = await vnxManager.new({from: accounts[4]});
		const uintexD6sqR = BigInt("2001")
		const address0DKeH7 = accounts[2]
		const uintV55J2Ls = BigInt("159")
		const addresstDO4XFC = accounts[0]
		const boolYeWfgtF = await vnxManagerTW5wxta.hasRole.call(address0DKeH7, uintexD6sqR, {from: accounts[1]});
		const uint256eUwkBRI = await vnxManagerTW5wxta.totalRoles.call({from: accounts[1]});
//		await vnxManagerTW5wxta.onlyAdmin.call({from: accounts[4]});
//		const addresstZR1y7i = await vnxManagerTW5wxta.addBearer.call(addresstDO4XFC, uintV55J2Ls, {from: accounts[4]});

		assert.equal(boolYeWfgtF, false)
		assert.equal(uint256eUwkBRI, BigInt("1"))
		await expect(vnxManagerTW5wxta.onlyAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerKzAZHja = await vnxManager.new({from: accounts[0]});
		const addressZQ1X4AJ = "0x0000000000000000000000000000000000000001"
		const addressGyHopgK = accounts[4]
		const uintLgj85F8 = BigInt("354")
		const addressAAnTWvc = accounts[3]
		const uintPSMKT2d = BigInt("782")
		const address8zSh3E = "0x0000000000000000000000000000000000000001"
//		const boolIjX7Ag2 = await vnxManagerKzAZHja.transferContractOwnership.call(addressGyHopgK, addressZQ1X4AJ, {from: accounts[3]});
//		const address4qG4qx = await vnxManagerKzAZHja.removeBearer.call(addressAAnTWvc, uintLgj85F8, {from: accounts[1]});
//		const boollcr71G9 = await vnxManagerKzAZHja.hasRole.call(address8zSh3E, uintPSMKT2d, {from: accounts[1]});
//		await vnxManagerKzAZHja.renounceOwnership.call({from: accounts[2]});

		await expect(vnxManagerKzAZHja.transferContractOwnership.call(addressGyHopgK, addressZQ1X4AJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerTW5wxta = await vnxManager.new({from: accounts[4]});
		const uintMl0qo4H = BigInt("159")
		const addressC7bJYG2 = accounts[1]
		const addressOeNnM6u = await vnxManagerTW5wxta.owner.call({from: accounts[3]});
//		const addresstZR1y7i = await vnxManagerTW5wxta.addBearer.call(addressC7bJYG2, uintMl0qo4H, {from: accounts[4]});

		assert.equal(addressOeNnM6u, 0xbaa8C810164552Afe8c15E24e42D557Fdc3e277B)
		await expect(vnxManagerTW5wxta.addBearer.call(addressC7bJYG2, uintMl0qo4H, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerdXrjEJI = await vnxManager.new({from: accounts[1]});
		const addressAGv43cK = accounts[3]
		const addressXzMP6zo = accounts[0]
//		const boolfkPplWS = await vnxManagerdXrjEJI.transferContractOwnership.call(addressXzMP6zo, addressAGv43cK, {from: accounts[1]});
//		await vnxManagerdXrjEJI.onlyAdmin.call({from: accounts[5]});
//		await vnxManagerdXrjEJI.onlyAdmin.call({from: accounts[4]});
//		const boolOKC8nB = await vnxManagerdXrjEJI.isAdmin.call({from: accounts[0]});

		await expect(vnxManagerdXrjEJI.transferContractOwnership.call(addressXzMP6zo, addressAGv43cK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerykgezPy = await vnxManager.new({from: accounts[3]});
		const addressAurWFbE = accounts[3]
		const uintM2s3Df = BigInt("804")
		const addressxYEKusI = accounts[5]
		const addresswGqaHPL = await vnxManagerykgezPy.transferOwnership.call(addressAurWFbE, {from: accounts[3]});
		const booly2DFr10 = await vnxManagerykgezPy.isAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const booln5qBGQk = await vnxManagerykgezPy.hasRole.call(addressxYEKusI, uintM2s3Df, {from: accounts[4]});
		const addressvXEG6il = await vnxManagerykgezPy.owner.call({from: accounts[2]});

		assert.equal(addressvXEG6il, 0x697538f34B113879d3968F9a45c7038b2060C909)
		assert.equal(booln5qBGQk, false)
		assert.equal(booly2DFr10, false)
	});

	it('test for vnxManager', async () => {
		const vnxManagerTW5wxta = await vnxManager.new({from: accounts[4]});
		const uintBgcgShO = BigInt("517")
		const addressjruDaiY = accounts[2]
		const uintAzJNbl = BigInt("1059")
		const addressx7qkUo2 = accounts[0]
		const uintUeuZaJV = BigInt("159")
		const addressEtGIXBW = accounts[0]
		const boolYeWfgtF = await vnxManagerTW5wxta.hasRole.call(addressjruDaiY, uintBgcgShO, {from: accounts[1]});
//		const addressuQTKYE = await vnxManagerTW5wxta.removeBearer.call(addressx7qkUo2, uintAzJNbl, {from: accounts[3]});
//		const addresstZR1y7i = await vnxManagerTW5wxta.addBearer.call(addressEtGIXBW, uintUeuZaJV, {from: accounts[4]});

		assert.equal(boolYeWfgtF, false)
		await expect(vnxManagerTW5wxta.removeBearer.call(addressx7qkUo2, uintAzJNbl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerZADQvZi = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintiP2Khj = BigInt("1210")
		const addressj97D9Dw = accounts[0]
		const uintYc6FopA = BigInt("1917")
		const addressoevn8H8 = accounts[4]
		const addressJRHY6Ot = await vnxManagerZADQvZi.removeBearer.call(addressj97D9Dw, uintiP2Khj, {from: accounts[2]});
		const boolvshBoM5 = await vnxManagerZADQvZi.hasRole.call(addressoevn8H8, uintYc6FopA, {from: accounts[2]});
		const booldrTkkoh = await vnxManagerZADQvZi.isAdmin.call({from: accounts[4]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerTW5wxta = await vnxManager.new({from: accounts[4]});
		const uintPlP8kHV = BigInt("517")
		const addressN09I2b = accounts[2]
		const uintMdrZF7 = BigInt("1082")
		const addressCIhEYxc = accounts[0]
		const uintQxpORuy = BigInt("159")
		const addressCN8nNbR = accounts[0]
		const boolYeWfgtF = await vnxManagerTW5wxta.hasRole.call(addressN09I2b, uintPlP8kHV, {from: accounts[1]});
//		await vnxManagerTW5wxta.renounceOwnership.call({from: accounts[4]});
//		const addressuQTKYE = await vnxManagerTW5wxta.removeBearer.call(addressCIhEYxc, uintMdrZF7, {from: accounts[3]});
//		const addresstZR1y7i = await vnxManagerTW5wxta.addBearer.call(addressCN8nNbR, uintQxpORuy, {from: accounts[4]});

		assert.equal(boolYeWfgtF, false)
		await expect(vnxManagerTW5wxta.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})